import fs from 'fs-extra'

const walker = (dir, done) => {
  let results = []
  fs.readdir(dir, (err, list) => {
    if (err) return done(err)
    let i = 0

    ;(function next() {
      let file = list[i++]
      if (!file) return done(null, results)
      file = dir + '/' + file
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          walker(file, function (err, res) {
            results = results.concat(res)

            next()
          })
        } else {
          results.push(file)
          next()
        }
      })
    })()
  })
}

export default walker
