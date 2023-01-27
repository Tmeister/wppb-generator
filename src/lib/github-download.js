/**
 * Taked for an old npm package
 * 
 * @see: zip.js
 */

var EventEmitter = require('events').EventEmitter
var vcsurl = require('vcsurl')
var request = require('request')
var path = require('path')
var fs = require('fs-extra')
var util = require('util')
var extractZip = require('./zip').extractZip
var os = require('os')
var cwd = os.tmpdir()

function GithubDownloader (user, repo, ref, dir) {
  this.user = user
  this.repo = repo
  this.ref = ref || 'master'
  this.dir = dir
  this._log = []
  this._getZip = false
}
util.inherits(GithubDownloader, EventEmitter)

GithubDownloader.prototype.start = function () {
  var _this = this
  var initialUrl = 'https://api.github.com/repos/' + this.user + '/' + this.repo + '/contents/'
  var initialUrlRef = this.ref ? '?ref=' + this.ref : ''
  var rawUrl = 'https://raw.github.com/' + this.user + '/' + this.repo + '/' + this.ref + '/'
  var pending = 0
  var gonnaProcess = 0

  gonnaProcess += 1
  requestJSON.call(this, initialUrl + initialUrlRef, processItems)

  function processItems (items) {
    pending += items.length
    gonnaProcess -= 1
    items.forEach(handleItem)
    checkDone()
  }

  function handleItem (item) {
    if (item.type === 'dir') {
      var dir = path.join(_this.dir, item.path)
      fs.mkdirs(dir, function (err) {
        if (err) _this.emit('error', err)
        _this._log.push(dir)
        gonnaProcess += 1
        requestJSON.call(_this, initialUrl + item.path + initialUrlRef, processItems)
        _this.emit('dir', item.path)
        pending -= 1
        checkDone()
      })
    } else if (item.type === 'file') {
      var file = path.join(_this.dir, item.path)
      fs.createFile(file, function (err) {
        if (err) _this.emit('error', err)
        request.get(rawUrl + item.path).pipe(fs.createWriteStream(file)).on('close', function () {
          _this._log.push(file)
          _this.emit('file', item.path)
          pending -= 1
          checkDone()
        })
      })
    } else {
      _this.emit('Error', new Error(JSON.stringify(item, null, 2) + '\n does not have type.'))
    }
  }

  function checkDone () {
    // console.log('PENDING: ' + pending + ' gonnaProcess: ' + gonnaProcess)
    if (pending === 0 && gonnaProcess === 0 && !this._getZip) {
      _this.emit('end')
    }
  }

  return this
}

module.exports = function GithubDownload (params, dir) {
  if (typeof params === 'string') {
    var pieces = params.split('#')
    var ref = pieces[1]
    var url = (vcsurl(pieces[0]) || pieces[0]).split('/')
    params = {user: url[url.length - 2], repo: url[url.length - 1], ref: ref}
  }

  if (typeof params !== 'object') {
    throw new Error('Invalid parameter type. Should be repo URL string or object containing repo and user.')
  }

  // console.dir(params)

  dir = dir || process.cwd()
  var gh = new GithubDownloader(params.user, params.repo, params.ref, dir)
  return gh.start()
}

// PRIVATE METHODS

function requestJSON (url, callback) {
  var _this = this
  request({url: url}, function (err, resp, body) {
    if (err) return this.emit('error', err)
    if (resp.statusCode === 403) return downloadZip.call(_this)
    if (resp.statusCode !== 200) _this.emit('error', new Error(url + ': returned ' + resp.statusCode + '\n\nbody:\n' + body))

    callback(JSON.parse(body))
  })
}

function downloadZip () {
  var _this = this
  if (_this._getZip) return
  _this._getZip = true

  _this._log.forEach(function (file) {
    fs.remove(file)
  })

  var tmpdir = generateTempDir()
  var zipBaseDir = _this.repo + '-' + _this.ref
  var zipFile = path.join(tmpdir, zipBaseDir + '.zip')

  var zipUrl = 'https://nodeload.github.com/' + _this.user + '/' + _this.repo + '/zip/' + _this.ref
  console.log('Downloading zip file from ' + zipUrl)
  console.log('Downloading zip file to ' + zipFile)
  _this.emit('zip', zipUrl)

  // console.log(zipUrl)
  fs.mkdir(tmpdir, function (err) {
    if (err) _this.emit('error', err)
    request.get(zipUrl).pipe(fs.createWriteStream(zipFile)).on('close', function () {
      extractZip.call(_this, zipFile, tmpdir, function (extractedFolderName) {
        var oldPath = path.join(tmpdir, extractedFolderName)
        fs.rename(oldPath, _this.dir, function (err) {
          if (err) _this.emit('error', err)
          fs.remove(tmpdir, function (err) {
            if (err) _this.emit('error', err)
            _this.emit('end')
          })
        })
      })
    })
  })
}

function generateTempDir () {
  console.log('Generating temp dir')
  console.log(`cwd: ${cwd}`)
  return path.join(cwd, Date.now().toString() + '-' + Math.random().toString().substring(2))
}
