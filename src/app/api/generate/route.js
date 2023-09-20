import { NextResponse } from 'next/server'
import rimraf from 'rimraf'
import path from 'path'
// import replace from 'replace'
import replace from 'replace-in-file'
import fs from 'fs-extra'
import archiver from 'archiver'

// Local Libs
import downloadAndUnzip from '@/lib/downloadAndUnzip'
import getDefaultValues from '@/lib/getDefaultValues'
import getFilesInDir from '@/lib/getFilesInDir'
import ga4Track from '@/lib/ga4'

const tmpFolder = '/tmp'
const downloadPath = path.join(tmpFolder, 'master.zip')
const extractPath = path.join(tmpFolder, 'source')
const remoteGithubMaster =
  'https://github.com/DevinVinson/WordPress-Plugin-Boilerplate/archive/refs/heads/master.zip'
const repoName = 'WordPress-Plugin-Boilerplate-master'

let destination
let zipName

export async function POST(request) {
  // Delete all in the extract path folder
  rimraf.sync(extractPath)
  // Get the master zip file from GitHub
  await downloadAndUnzip(remoteGithubMaster, downloadPath, extractPath)
  // Replace all the strings in the files
  await replaceStrings(request)
  // Create a zip file
  const zip = await createZip()
  // Track Build
  trackDownload()

  const zipFile = await fs.readFile(zip)
  // send it as a download
  return new NextResponse(zipFile, {
    headers: {
      'content-type': 'application/zip',
      'content-disposition': `attachment; filename=${zipName}.zip`,
    },
  })
}

const createZip = async () => {
  const folderToZip = `${destination}/${zipName}`
  const output = fs.createWriteStream(`${destination}/${zipName}.zip`)
  const zip = archiver('zip', {
    zlib: {
      level: 9,
    },
  })

  return new Promise((resolve, reject) => {
    output.on('close', function () {
      resolve(`${destination}/${zipName}.zip`)
    })

    zip.on('error', function (err) {
      reject(err)
    })

    zip.pipe(output)
    zip.directory(folderToZip, `${zipName}`)
    zip.finalize()
  })
}

const replaceStrings = async (request) => {
  const data = await request.json()
  const {
    pluginSlug,
    pluginName,
    pluginURI,
    pluginAuthor,
    pluginAuthorURI,
    pluginDescription,
    pluginNamePackage,
    pluginNameInstance,
    pluginAuthorFull,
    pluginNameVersion,
  } = getDefaultValues(data)

  // TODO: trackDownload()
  zipName = pluginSlug
  destination = path.join(extractPath, repoName)

  // Rename the plugin-name folder to the plugin slug
  fs.renameSync(destination + '/plugin-name', destination + '/' + pluginSlug)

  // Get all the files and rename the plugin-name to the plugin slug
  const rawFiles = await getFilesInDir(`${destination}/${pluginSlug}`)
  const files = []
  rawFiles.forEach((file) => {
    const re = /plugin-name/gi
    const newName = file.replace(re, pluginSlug)
    fs.renameSync(file, newName)
    files.push(newName)
  })

  // Main plugin file
  let from = [
    /http:\/\/example.com\/plugin-name-uri\//g,
    /WordPress Plugin Boilerplate/g,
    `This is a short description of what the plugin does. It's displayed in the WordPress admin area.`,
    `Your Name or Your Company`,
    /plugin_name/g,
  ]
  let to = [
    pluginURI,
    pluginName,
    pluginDescription,
    pluginAuthor,
    pluginNameInstance,
  ]

  await replace({
    from,
    to,
    files: [destination + '/' + pluginSlug + '/' + pluginSlug + '.php'],
  })

  // All inner files
  from = [
    /http:\/\/example.com/g,
    /Your Name <email@example.com>/g,
    /Plugin_Name/g,
    /plugin-name/g,
    /PLUGIN_NAME_VERSION/g,
    /http:\/\/:example.com\/plugin-name-uri\//g,
  ]
  to = [
    pluginAuthorURI,
    pluginAuthorFull,
    pluginNamePackage,
    pluginSlug,
    pluginNameVersion,
    pluginURI,
  ]

  // Find and replace all based on the arrays above
  await replace({
    from,
    to,
    files,
  })
}

const trackDownload = () => {
  ga4Track('wppb_build', {
    event_category: 'build-plugin',
    event_action: 'click',
    event_label: 'download',
  })
}

const generateTempDir = () => {
  return path.join(
    cwd,
    Date.now().toString() + '-' + Math.random().toString().substring(2),
  )
}
