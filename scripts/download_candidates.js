const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const TARGET_DIR = path.join(__dirname, '..', 'public', 'images', 'bright', 'candidates');
fs.mkdirSync(TARGET_DIR, { recursive: true });

const CANDIDATES = [
  {
    slide: 1,
    id: 7581119,
    filename: 'slide1-pexels-7581119.jpg',
    description: 'Team collaboration around folder'
  },
  {
    slide: 1,
    id: 7580636,
    filename: 'slide1-pexels-7580636.jpg',
    description: 'Colleagues reviewing document smiling'
  },
  {
    slide: 2,
    id: 7580650,
    filename: 'slide2-pexels-7580650.jpg',
    description: 'Indian professional working at workstation with papers'
  },
  {
    slide: 2,
    id: 7580645,
    filename: 'slide2-pexels-7580645.jpg',
    description: 'Colleagues at computer reviewing accounts'
  },
  {
    slide: 3,
    id: 7580648,
    filename: 'slide3-pexels-7580648.jpg',
    description: 'Delivery floor lead and team at workstations'
  },
  {
    slide: 4,
    id: 7580644,
    filename: 'slide4-pexels-7580644.jpg',
    description: 'Executive team reviewing documents in bright daylight'
  }
];

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Downloading ${CANDIDATES.length} candidate images to ${TARGET_DIR}...`);
  for (const item of CANDIDATES) {
    const url = `https://images.pexels.com/photos/${item.id}/pexels-photo-${item.id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;
    const dest = path.join(TARGET_DIR, item.filename);
    try {
      console.log(`Fetching Pexels #${item.id} -> ${item.filename}...`);
      await downloadImage(url, dest);
      const meta = await sharp(dest).metadata();
      const stat = fs.statSync(dest);
      console.log(`✓ Saved ${item.filename}: ${meta.width}x${meta.height} (${(stat.size / 1024).toFixed(1)} KB) - ${item.description}`);
    } catch (err) {
      console.error(`✗ Error downloading #${item.id}:`, err.message);
    }
  }
}

run();
