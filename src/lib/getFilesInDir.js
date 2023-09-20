import { promises as fs } from 'fs'
import path from 'path'

async function getFilesInDir(dir) {
  let files = []
  try {
    const items = await fs.readdir(dir, { withFileTypes: true })

    for (const item of items) {
      if (item.isDirectory()) {
        files = [...files, ...(await getFilesInDir(path.join(dir, item.name)))]
      } else if (item.isFile()) {
        files.push(path.join(dir, item.name))
      }
    }
  } catch (error) {
    console.error('Error reading directory', error)
  }
  
  return files
}

export default getFilesInDir
