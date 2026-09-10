const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BRIGHT_DIR = path.join(ROOT, 'public', 'images', 'bright');
const HEROES_INDIAN_DIR = path.join(ROOT, 'public', 'images', 'heroes-indian');
const PHOTOS_DIR = path.join(ROOT, 'public', 'images', 'photos');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');

// Ensure output directories exist
fs.mkdirSync(BRIGHT_DIR, { recursive: true });
fs.mkdirSync(HEROES_INDIAN_DIR, { recursive: true });

// Source definitions
const SOURCES = {
  // Ultra-high res Indian Corporate Office Photo Shoot (1920x1280 AVIF)
  'delivery-floor': path.join(PHOTOS_DIR, 'delivery-floor.avif'),
  'office-team': path.join(PHOTOS_DIR, 'office-team.avif'),
  'document-review': path.join(PHOTOS_DIR, 'document-review.avif'),
  'team-collaboration': path.join(PHOTOS_DIR, 'team-collaboration.avif'),
  'workshop-session': path.join(PHOTOS_DIR, 'workshop-session.avif'),
  'interview': path.join(PHOTOS_DIR, 'interview.avif'),
  'team-meeting': path.join(PHOTOS_DIR, 'team-meeting.avif'),
  'focused-work': path.join(PHOTOS_DIR, 'focused-work.avif'),
  'support-agent': path.join(PHOTOS_DIR, 'support-agent.avif'),

  // Indian Corporate Flagship Heroes
  'hero-indian-professionals': path.join(BRIGHT_DIR, 'hero-indian-professionals.jpg'),
  'hero-accounting-talent': path.join(BRIGHT_DIR, 'hero-accounting-talent.jpg'),
  'hero-dedicated-teams': path.join(BRIGHT_DIR, 'hero-dedicated-teams.jpg'),
  'hero-governance-partnership': path.join(BRIGHT_DIR, 'hero-governance-partnership.jpg'),
  'hero-information-technology': path.join(IMAGES_DIR, 'hero-information-technology.jpg'),
};

// Curation & Mapping
const CURATION_TASKS = [
  // 1. Accounting Services
  {
    target: 'page-accounting.jpg',
    sourceKey: 'hero-accounting-talent',
    description: 'Indian Chartered Accountant with dual cloud accounting monitors & ledgers',
    cropPosition: 'center',
    isUpscale: true,
  },
  // 2. Administrative Support
  {
    target: 'page-administrative.jpg',
    sourceKey: 'support-agent',
    description: 'Indian administrative coordinator & operations support team on delivery floor',
    cropPosition: 'center',
    isUpscale: false,
  },
  // 3. Financial Research & Blogs
  {
    target: 'page-blogs.jpg',
    sourceKey: 'team-collaboration',
    description: 'Indian financial research & editorial team reviewing audit folder',
    cropPosition: 'center',
    isUpscale: false,
  },
  // 4. Build Your Team
  {
    target: 'page-build-your-team.jpg',
    sourceKey: 'interview',
    description: 'Indian executive talent interview, evaluation & onboarding consultation',
    cropPosition: 'center',
    isUpscale: false,
  },
  // 5. Compliance & Audit
  {
    target: 'page-compliance.jpg',
    sourceKey: 'team-meeting',
    description: 'Three Indian corporate tax and statutory audit compliance professionals reviewing filings',
    cropPosition: 'center',
    isUpscale: false,
  },
  // 6. Corporate Contact & Advisory Reception
  {
    target: 'page-contact.jpg',
    sourceKey: 'hero-indian-professionals',
    description: 'Indian corporate consultation & practice advisory executive boardroom',
    cropPosition: 'center',
    isUpscale: true,
  },
  // 7. Discover More / Practice Growth
  {
    target: 'page-discover-more.jpg',
    sourceKey: 'hero-dedicated-teams',
    description: 'Indian operational governance & advisory delivery team collaborating on tablet with bright greenery',
    cropPosition: 'center',
    isUpscale: true,
  },
  // 8. How It Works
  {
    target: 'page-how-it-works.jpg',
    sourceKey: 'workshop-session',
    description: 'Indian operations team mapping 4-step onboarding workflows at whiteboard',
    cropPosition: 'center',
    isUpscale: false,
  },
  // 9. Information Technology & Security
  {
    target: 'page-information-technology.jpg',
    sourceKey: 'hero-information-technology',
    description: 'Enterprise ISO 27001 secure NOC / cloud server operations center',
    cropPosition: 'center',
    isUpscale: true,
  },
  // 10. Corporate Legal & Contracts
  {
    target: 'page-legal.jpg',
    sourceKey: 'document-review',
    description: 'Indian corporate legal counsel and contracts review specialists',
    cropPosition: 'center',
    isUpscale: false,
  },
  // 11. Customer Operations Floor
  {
    target: 'page-operational.jpg',
    sourceKey: 'delivery-floor',
    description: 'Indian customer operations & delivery floor with team at modern workstations',
    cropPosition: 'center',
    isUpscale: false,
  },
  // 12. Who We Are / Leadership
  {
    target: 'page-who-we-are.jpg',
    sourceKey: 'hero-indian-professionals',
    description: 'Indian founders and corporate leadership team in executive boardroom',
    cropPosition: 'center',
    isUpscale: true,
  },
  // 13. Why Outsourcing / Global Partnership
  {
    target: 'page-why-outsourcing.jpg',
    sourceKey: 'hero-governance-partnership',
    description: 'Indian managing partner and international firm leadership collaboration',
    cropPosition: 'center',
    isUpscale: true,
  },
  // Additional page/banner variants matching Why Outsourcing page
  {
    target: 'why-outsourcing-banner.jpg',
    sourceKey: 'hero-governance-partnership',
    description: 'Indian practice partner & international firm executive partnership (banner)',
    cropPosition: 'center',
    isUpscale: true,
  },
  {
    target: 'why-outsourcing-collaboration.jpg',
    sourceKey: 'hero-dedicated-teams',
    description: 'Indian dedicated operations team collaboration in sunlit corporate office',
    cropPosition: 'center',
    isUpscale: true,
  },

  // 14. Homepage Hero Slides & Scale Business
  {
    target: 'hero-indian-professionals.jpg',
    sourceKey: 'hero-indian-professionals',
    description: 'Homepage Hero Slide 1: Indian corporate advisory and finance team in modern sunlit office',
    cropPosition: 'center',
    isUpscale: true,
  },
  {
    target: 'hero-scale-business.jpg',
    sourceKey: 'hero-indian-professionals',
    description: 'Scale Your Business hero featuring Indian corporate advisory leaders',
    cropPosition: 'center',
    isUpscale: true,
  },
  {
    target: 'hero-main.jpg',
    sourceKey: 'hero-indian-professionals',
    description: 'Homepage main hero plate featuring Indian corporate advisory leaders',
    cropPosition: 'center',
    isUpscale: true,
  },
  {
    target: 'hero-accounting-talent.jpg',
    sourceKey: 'hero-accounting-talent',
    description: 'Homepage Hero Slide 2: Indian female Chartered Accountant with dual cloud monitors',
    cropPosition: 'center',
    isUpscale: true,
  },
  {
    target: 'hero-indian-accountant.jpg',
    sourceKey: 'hero-accounting-talent',
    description: 'Homepage Hero Slide 2 (alias): Indian Chartered Accountant at cloud monitors',
    cropPosition: 'center',
    isUpscale: true,
  },
  {
    target: 'hero-dedicated-teams.jpg',
    sourceKey: 'hero-dedicated-teams',
    description: 'Homepage Hero Slide 3: Indian corporate delivery team collaborating on tablet',
    cropPosition: 'center',
    isUpscale: true,
  },
  {
    target: 'hero-indian-dedicated-team.jpg',
    sourceKey: 'hero-dedicated-teams',
    description: 'Homepage Hero Slide 3 (alias): Indian dedicated delivery team at workstations',
    cropPosition: 'center',
    isUpscale: true,
  },
  {
    target: 'hero-governance-partnership.jpg',
    sourceKey: 'hero-governance-partnership',
    description: 'Homepage Hero Slide 4: Indian managing partner handshake with international partner',
    cropPosition: 'center',
    isUpscale: true,
  },
];

async function main() {
  console.log('=== Indian Corporate Hero Image Curation & Processing ===\n');
  console.log('Target Specification:');
  console.log('  - Dimensions: 1920 x 1080 (16:9 full-bleed)');
  console.log('  - Format: JPEG (Quality=90, Progressive, Chroma 4:4:4, mozjpeg)');
  console.log('  - Grading: Bright, clean, corporate, high-clarity color balance\n');

  // Step 1: Pre-load all source files into memory buffers to avoid any race/overwrite conflicts
  console.log('Step 1: Reading source images into memory cache...');
  const sourceBuffers = new Map();
  for (const [key, filePath] of Object.entries(SOURCES)) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Source file missing: ${filePath}`);
    }
    const buf = fs.readFileSync(filePath);
    sourceBuffers.set(key, buf);
    const meta = await sharp(buf).metadata();
    console.log(`  [OK] ${key.padEnd(28)} : ${meta.width}x${meta.height} (${(buf.length / 1024).toFixed(1)} KB)`);
  }
  console.log(`\nCached ${sourceBuffers.size} source images.\n`);

  // Step 2: Process and output each target hero image
  console.log('Step 2: Processing and grading 16:9 hero images (1920x1080)...');
  const results = [];

  for (const task of CURATION_TASKS) {
    const rawBuffer = sourceBuffers.get(task.sourceKey);
    if (!rawBuffer) {
      throw new Error(`Source buffer missing for key: ${task.sourceKey}`);
    }

    let pipeline = sharp(rawBuffer);

    if (task.isUpscale) {
      // 1376x768 to 1920x1080: upscale using Lanczos3 + unsharp masking for crisp clarity
      pipeline = pipeline
        .resize(1920, 1080, {
          fit: 'cover',
          position: task.cropPosition || 'center',
          kernel: sharp.kernel.lanczos3,
        })
        .sharpen({ sigma: 0.6, m1: 0.5, m2: 2.0 })
        .modulate({
          brightness: 1.02,
          saturation: 1.02,
        });
    } else {
      // 1920x1280 AVIF to 1920x1080 JPEG: crop 200px height with center/attention framing
      pipeline = pipeline
        .resize(1920, 1080, {
          fit: 'cover',
          position: task.cropPosition || 'center',
          kernel: sharp.kernel.lanczos3,
        })
        .modulate({
          brightness: 1.02,
          saturation: 1.02,
        });
    }

    // High quality corporate JPEG encoding
    const outputBuffer = await pipeline
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true,
        chromaSubsampling: '4:4:4',
      })
      .toBuffer();

    // Write to public/images/bright/
    const brightPath = path.join(BRIGHT_DIR, task.target);
    fs.writeFileSync(brightPath, outputBuffer);

    // Also write to public/images/heroes-indian/
    const heroesIndianPath = path.join(HEROES_INDIAN_DIR, task.target);
    fs.writeFileSync(heroesIndianPath, outputBuffer);

    const stat = fs.statSync(brightPath);
    const meta = await sharp(outputBuffer).metadata();

    results.push({
      target: task.target,
      source: task.sourceKey,
      width: meta.width,
      height: meta.height,
      aspect: `${meta.width}:${meta.height} (16:9)`,
      sizeKB: (stat.size / 1024).toFixed(1),
      description: task.description,
    });

    console.log(`  [DONE] ${task.target.padEnd(35)} -> 1920x1080 | ${(stat.size / 1024).toFixed(1)} KB`);
  }

  console.log('\n=== Curation & Processing Completed Successfully ===\n');
  console.log('Summary of Generated Indian Hero Images:');
  console.log('----------------------------------------------------------------------------------------------------');
  console.log(
    'Target File'.padEnd(34) +
    'Dimensions'.padEnd(14) +
    'Size (KB)'.padEnd(12) +
    'Genre / Subject'
  );
  console.log('----------------------------------------------------------------------------------------------------');
  for (const r of results) {
    console.log(
      r.target.padEnd(34) +
      `${r.width}x${r.height}`.padEnd(14) +
      `${r.sizeKB} KB`.padEnd(12) +
      r.description
    );
  }
  console.log('----------------------------------------------------------------------------------------------------');
}

main().catch(err => {
  console.error('Fatal curation error:', err);
  process.exit(1);
});
