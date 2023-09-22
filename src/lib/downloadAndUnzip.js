import axios from 'axios';
import { createWriteStream } from 'fs';
import AdmZip from 'adm-zip';

async function downloadAndUnzip(url, downloadPath, extractPath) {
  try {
    // Step 1: Download the zip file
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream',
    });

    // Step 2: Save the zip file to the file system
    const writer = createWriteStream(downloadPath);
    response.data.pipe(writer);
    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    // Step 3: Unzip the zip file
    const zip = new AdmZip(downloadPath);
    zip.extractAllTo(extractPath, true);;
  } catch (error) {
    console.error('Error downloading or unzipping the file', error);
  }
}

export default downloadAndUnzip;