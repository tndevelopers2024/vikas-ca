const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CANDIDATES_DIR = path.join(ROOT, 'public', 'images', 'bright', 'candidates');
const OUTPUT_DIR = path.join(ROOT, 'public', 'images', 'bright');

const HERO_IMAGES = [
  {
    candidate: 'slide1-pexels-7580636.jpg',
    target: 'hero-indian-professionals.jpg',
    flop: false,
    position: sharp.position.north,
    description: 'Slide 1: Indian corporate advisory and finance professionals reviewing documents'
  },
  {
    candidate: 'slide2-pexels-7580650.jpg',
    target: 'hero-indian-accountant.jpg',
    flop: true, // Horizontally flipped so subject is on the right, leaving left open for typography & white scrim
    position: sharp.position.north, // Preserves hair bun and full headroom
    description: 'Slide 2: Indian professional accountant working at modern workstation'
  },
  {
    candidate: 'slide3-pexels-7580648.jpg',
    target: 'hero-indian-dedicated-team.jpg',
    flop: false,
    position: sharp.position.center,
    description: 'Slide 3: Indian dedicated offshore operations team lead and analysts at modern workstations'
  },
  {
    candidate: 'slide4-pexels-7580644.jpg',
    target: 'hero-governance-partnership.jpg',
    flop: false,
    position: sharp.position.center,
    description: 'Slide 4: Indian corporate executives and managing partner reviewing governance documentation'
  }
];

async function processImages() {
  console.log('Starting Hero Banner processing with sharp...\n');
  const results = [];

  for (const item of HERO_IMAGES) {
    const inputPath = path.join(CANDIDATES_DIR, item.candidate);
    const outputPath = path.join(OUTPUT_DIR, item.target);

    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input file missing: ${inputPath}`);
    }

    console.log(`Processing ${item.candidate} -> ${item.target}...`);
    let pipeline = sharp(inputPath);

    if (item.flop) {
      console.log(`  Applying horizontal flip (flop) for open-left text layout`);
      pipeline = pipeline.flop();
    }

    pipeline = pipeline.resize(1920, 1080, {
      fit: 'cover',
      position: item.position
    });

    pipeline = pipeline.jpeg({
      quality: 90,
      mozjpeg: true,
      progressive: true
    });

    await pipeline.toFile(outputPath);

    // Verify metadata and size
    const meta = await sharp(outputPath).metadata();
    const stat = fs.statSync(outputPath);
    const sizeKB = (stat.size / 1024).toFixed(1);

    results.push({
      file: item.target,
      width: meta.width,
      height: meta.height,
      format: meta.format,
      sizeKB: `${sizeKB} KB`,
      bytes: stat.size,
      description: item.description
    });

    console.log(`  ✓ Output: ${meta.width}x${meta.height} ${meta.format.toUpperCase()} (${sizeKB} KB)`);
  }

  // Also create mirror for backwards compatibility if needed
  fs.copyFileSync(
    path.join(OUTPUT_DIR, 'hero-indian-accountant.jpg'),
    path.join(OUTPUT_DIR, 'hero-accounting-talent.jpg')
  );
  fs.copyFileSync(
    path.join(OUTPUT_DIR, 'hero-indian-dedicated-team.jpg'),
    path.join(OUTPUT_DIR, 'hero-dedicated-teams.jpg')
  );
  fs.copyFileSync(
    path.join(OUTPUT_DIR, 'hero-indian-professionals.jpg'),
    path.join(OUTPUT_DIR, 'hero-scale-business.jpg')
  );
  fs.copyFileSync(
    path.join(OUTPUT_DIR, 'hero-indian-professionals.jpg'),
    path.join(OUTPUT_DIR, 'hero-main.jpg')
  );
  console.log('\n✓ Backwards-compatible aliases updated (hero-accounting-talent, hero-dedicated-teams, hero-scale-business, hero-main).');

  console.log('\n--- Final Summary ---');
  console.table(results);
}

processImages().catch((err) => {
  console.error('Error processing banner images:', err);
  process.exit(1);
});
