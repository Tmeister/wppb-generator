const capitalize = (_name) => {
  let newName = ''
  const name = _name.replace(/-/gi, ' ')
  const pieces = name.split(' ')
  pieces.forEach(function (word) {
    newName += word.charAt(0).toUpperCase() + word.slice(1) + ' '
  })

  return newName.trim().replace(/ /gi, '_')
}

export default capitalize
