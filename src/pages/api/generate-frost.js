import rimraf from 'rimraf'
import path from 'path'
import ua from 'universal-analytics'
import replace from 'replace'
import fs from 'fs-extra'
import archiver from 'archiver'

// Local Libs
import ghdownload from '../../lib/github-download'
import getDefaultValues from '../../lib/get-default-values'
import walker from '../../lib/walker'

const visitor = ua('UA-56742268-1')
const tmpFolder = '/tmp'
const source = path.join(tmpFolder, 'source-frost')

let destination
let zipName

const getZip = (req, res) => {
  rimraf.sync(source)
  ghdownload(
    {
      user: 'wpengine',
      repo: 'frost',
      ref: 'trunk',
    },
    source,
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
  const { name, uri, author, authorURI, description, slug, packageName } = getDefaultValues(data, 'theme')

  // Send the data to Google Analytics
  // visitor.event('build-frost', 'click', 'download', 1).send()
  destination = path.join(tmpFolder, `${slug}`)
  zipName = slug

  fs.copy(source, destination, (err) => {
    if (err) {
      console.error(err)
      return
    }

    // Find and replace files names
    walker(destination, (err, files) => {
      if (err) {
        console.error(err)

        return
      }

      // Theme URI
      replace({
        regex: 'https://frostwp.com/',
        replacement: uri,
        paths: [destination],
        recursive: true,
        silent: true,
      })

      // Author URI
      replace({
        regex: 'https://wpengine.com/',
        replacement: authorURI,
        paths: [destination],
        recursive: true,
        silent: true,
      })

      // Theme Name
      replace({
        regex: 'Frost',
        replacement: name,
        paths: [destination],
        recursive: true,
        silent: true,
      })

      // Theme Description
      replace({
        regex:
          'With its clean, minimal design and powerful feature set, Frost enables agencies to build stylish and sophisticated WordPress websites.',
        replacement: description,
        paths: [destination],
        recursive: true,
        silent: true,
      })

      // Theme Author CSS
      replace({
        regex: 'Author: WP Engine',
        replacement: `Author: ${author}`,
        paths: [destination],
        recursive: true,
        silent: true,
      })

      // Theme Author PHP
      replace({
        regex: '@author  WP Engine',
        replacement: `@author ${author}`,
        paths: [destination],
        recursive: true,
        silent: true,
      })

      // Theme Package Name
      replace({
        regex: '@package Frost',
        replacement: `@package ${packageName}`,
        paths: [destination],
        recursive: true,
        silent: true,
      })

      // All other `frost` references
      replace({
        regex: 'frost',
        replacement: `${slug}`,
        paths: [destination],
        recursive: true,
        silent: true,
      })

      generateZip(res, destination)
    })
  })
}

// TODO Move to a unique file
const generateZip = (res, source) => {
  res.setHeader('Content-Type', 'application/zip')
  res.setHeader('Content-Disposition', `attachment; filename=${zipName}.zip`)

  const archive = archiver('zip', {
    zlib: { level: 9 },
  })

  archive.pipe(res)
  archive.directory(source, `${zipName}`)
  archive.finalize()
}

export default function handler(req, res) {
  // Just POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ response: 'Method not allowed' })
  }

  getZip(req, res)
}
