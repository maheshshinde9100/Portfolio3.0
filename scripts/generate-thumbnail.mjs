// Node script to beautify raw screenshots into polished thumbnails.
// Usage:
//   node scripts/generate-thumbnails.mjs public/project-shots public/thumbs
//
// - Reads images from inputDir (png/jpg/jpeg/webp)
// - Creates 1280x720 gradient backgrounds
// - Centers the screenshot with padding and rounded corners
// - Outputs optimized JPEG thumbnails to outputDir

import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const [, , inputDir = 'public/project-shots', outputDir = 'public/thumbs'] = process.argv
const TARGET = { w: 1280, h: 720 }
const PADDING = 72
const RADIUS = 24

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

function gradientSVG(width, height) {
  return Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="20%" cy="-10%" r="80%">
      <stop offset="0%" stop-color="rgba(34,211,238,0.35)"/>
      <stop offset="60%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
    <radialGradient id="g2" cx="110%" cy="10%" r="80%">
      <stop offset="0%" stop-color="rgba(167,139,250,0.32)"/>
      <stop offset="55%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0f1f"/>
      <stop offset="100%" stop-color="#100618"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#g1)"/>
  <rect width="100%" height="100%" fill="url(#g2)"/>
</svg>`)
}

function roundedMaskSVG(width, height, radius) {
  return Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="#fff"/>
</svg>`)
}

async function listImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      files.push(...await listImages(p))
    } else if (/\.(png|jpe?g|webp)$/i.test(e.name)) {
      files.push(p)
    }
  }
  return files
}

async function processOne(file, outDir) {
  const base = path.basename(file).replace(/\.(png|jpe?g|webp)$/i, '')
  const outPath = path.join(outDir, `${base}.jpg`)

  const bg = await sharp(gradientSVG(TARGET.w, TARGET.h)).png().toBuffer()

  // Resize screenshot to fit with padding
  const shot = sharp(file).resize({
    width: TARGET.w - PADDING * 2,
    height: TARGET.h - PADDING * 2,
    fit: 'inside',
    withoutEnlargement: true,
  })

  const shotMeta = await shot.metadata()
  const shotBuf = await shot.toBuffer()

  // Create rounded mask for screenshot
  const mask = await sharp(roundedMaskSVG(shotMeta.width, shotMeta.height, RADIUS)).png().toBuffer()
  const rounded = await sharp(shotBuf).composite([{ input: mask, blend: 'dest-in' }]).toBuffer()

  // Compose final
  const composite = await sharp(bg)
    .composite([
      // subtle outer ring
      {
        input: Buffer.from(`<svg width="${TARGET.w}" height="${TARGET.h}" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="${TARGET.w-1}" height="${TARGET.h-1}" rx="16" ry="16"
            fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
        </svg>`),
        top: 0, left: 0, blend: 'over'
      },
      // screenshot centered
      {
        input: rounded,
        top: Math.round((TARGET.h - (shotMeta.height || TARGET.h)) / 2),
        left: Math.round((TARGET.w - (shotMeta.width || TARGET.w)) / 2),
      },
      // chrome bar
      {
        input: Buffer.from(`<svg width="${TARGET.w}" height="48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="c" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(255,255,255,.16)"/>
              <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
            </linearGradient>
          </defs>
          <rect width="${TARGET.w}" height="48" fill="url(#c)"/>
          <circle cx="24" cy="24" r="6" fill="#ef4444" opacity=".8"/>
          <circle cx="44" cy="24" r="6" fill="#f59e0b" opacity=".8"/>
          <circle cx="64" cy="24" r="6" fill="#22c55e" opacity=".8"/>
        </svg>`),
        top: 0, left: 0, blend: 'over'
      },
    ])
    .jpeg({ quality: 88, chromaSubsampling: '4:4:4', mozjpeg: true })
    .toFile(outPath)

  return outPath
}

async function main() {
  console.log('Generating thumbnails...')
  await ensureDir(outputDir)
  const files = await listImages(inputDir)
  if (!files.length) {
    console.log('No images found in', inputDir)
    return
  }
  for (const f of files) {
    try {
      const out = await processOne(f, outputDir)
      console.log('✔', path.relative(process.cwd(), out))
    } catch (err) {
      console.error('✖ Failed for', f, err.message)
    }
  }
  console.log('Done. Update your project image paths to /thumbs/<name>.jpg')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
