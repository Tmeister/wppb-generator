var AdmZip = require('adm-zip')
var fs = require('fs-extra')
var path = require('path')

// using 'this' here is weird, TODO: improve
function extractZip (zipFile, outputDir, callback) {
  var zip = new AdmZip(zipFile)
  var entries = zip.getEntries()
  var pending = entries.length
  var _this = this
  var folderName = path.basename(entries[0].entryName)

  function checkDone (err) {
    if (err) _this.emit('error', err)
    pending -= 1
    if (pending === 0) callback(folderName)
  }

  entries.forEach(function (entry) {
    if (entry.isDirectory) return checkDone()

    var file = path.resolve(outputDir, entry.entryName)
    fs.outputFile(file, entry.getData(), checkDone)
  })
}

module.exports = {
  extractZip: extractZip
}
