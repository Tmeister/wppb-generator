import rimraf from 'rimraf'
import path from 'path'
import replace from 'replace'
import fs from 'fs-extra'
import archiver from 'archiver'

// Local Libs
import ghdownload from '@/lib/github-download'
import getDefaultValues from '@/lib/get-default-values'
import walker from '@/lib/walker'
import ga4Track from '@/lib/ga4'

const tmpFolder = '/tmp'
const source = path.join(tmpFolder, 'source')

let destination
let zipName

const getZip = (req, res) => {
  rimraf.sync(source)
  ghdownload(
    {
      user: 'DevinVinson',
      repo: 'WordPress-Plugin-Boilerplate',
      ref: 'master',
    },
    source
  )
    .on('error', function (err) {
      console.error(err)
    })
    .on('end', function () {
      replaceStrings(req, res)
    })
}

const replaceStrings = (req, res) => {
  const data = JSON.parse(req.body)
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

  // Send the data to Google Analytics
  ga4Track('wppb_build', {
    event_category: 'build-plugin',
    event_action: 'click',
    event_label: 'download',
  })

  destination = path.join(tmpFolder, `${pluginSlug}-${new Date().getTime()}`)
  zipName = pluginSlug

  fs.copy(source, destination, (err) => {
    if (err) {
      console.error(err)
      return
    }

    // Rename the main plugin directory
    fs.renameSync(destination + '/plugin-name', destination + '/' + pluginSlug)

    // Find and replace files names
    walker(destination + '/' + pluginSlug, (err, files) => {
      if (err) {
        console.error(err)

        return
      }

      files.forEach((file) => {
        const re = /plugin-name/gi
        const newName = file.replace(re, pluginSlug)
        fs.renameSync(file, newName)
      })

      // Plugin URI
      replace({
        regex: 'http://example.com/plugin-name-uri/',
        replacement: pluginURI,
        paths: [destination + '/' + pluginSlug + '/' + pluginSlug + '.php'],
        recursive: false,
        silent: true,
      })

      // Plugin Name
      replace({
        regex: 'WordPress Plugin Boilerplate',
        replacement: pluginName,
        paths: [destination + '/' + pluginSlug + '/' + pluginSlug + '.php'],
        recursive: true,
        silent: true,
      })

      // Plugin URI
      replace({
        regex: 'http://example.com/plugin-name-uri/',
        replacement: pluginURI,
        paths: [destination + '/' + pluginSlug + '/' + pluginSlug + '.php'],
        recursive: true,
        silent: true,
      })

      // Plugin Description
      replace({
        regex:
          "This is a short description of what the plugin does. It's displayed in the WordPress admin area.",
        replacement: pluginDescription,
        paths: [destination + '/' + pluginSlug + '/' + pluginSlug + '.php'],
        recursive: false,
        silent: true,
      })

      //find Plugin Author
      replace({
        regex: 'Your Name or Your Company',
        replacement: pluginAuthor,
        paths: [destination + '/' + pluginSlug + '/' + pluginSlug + '.php'],
        recursive: true,
        silent: true,
      })

      // Find Plugin Author Full
      replace({
        regex: 'Your Name <email@example.com>',
        replacement: pluginAuthorFull,
        paths: [destination + '/' + pluginSlug],
        recursive: true,
        silent: true,
      })

      // Find Plugin_Name
      replace({
        regex: 'Plugin_Name',
        replacement: pluginNamePackage,
        paths: [destination + '/' + pluginSlug],
        recursive: true,
        silent: true,
      })

      // Find Plugin slug
      replace({
        regex: 'plugin-name',
        replacement: pluginSlug,
        paths: [destination + '/' + pluginSlug],
        recursive: true,
        silent: true,
      })

      // Find Author URI
      replace({
        regex: 'http://example.com/?',
        replacement: pluginAuthorURI,
        paths: [destination + '/' + pluginSlug],
        recursive: true,
        silent: true,
      })

      // Find Plugin Version
      replace({
        regex: 'PLUGIN_NAME_VERSION',
        replacement: pluginNameVersion,
        paths: [destination + '/' + pluginSlug],
        recursive: true,
        silent: true,
      })

      // Find Author URI
      replace({
        regex: 'plugin_name',
        replacement: pluginNameInstance,
        paths: [destination + '/' + pluginSlug + '/' + pluginSlug + '.php'],
        recursive: true,
        silent: true,
      })

      generateZip(res, destination + '/' + pluginSlug)
    })
  })
}

// TODO Move to a unique file
const generateZip = (res, pluginSource) => {
  res.setHeader('Content-Type', 'application/zip')
  res.setHeader('Content-Disposition', `attachment; filename=${zipName}.zip`)

  const archive = archiver('zip', {
    zlib: { level: 9 },
  })

  archive.pipe(res)
  archive.directory(pluginSource, `${zipName}`)
  archive.finalize()
}

export default function handler(req, res) {
  // Just POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ response: 'Method not allowed' })
  }

  getZip(req, res)
}
