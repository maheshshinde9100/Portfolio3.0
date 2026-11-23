// One-off generator for app/opengraph-image.png.
// Renders an HTML card with the real self-hosted Poppins in headless Chrome/Edge.
// Run with: node scripts/generate-og.mjs
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const root = new URL('..', import.meta.url)
const light = readFileSync(new URL('app/fonts/Poppins-Light.woff2', root)).toString('base64')
const regular = readFileSync(new URL('app/fonts/Poppins-Regular.woff2', root)).toString('base64')
const medium = readFileSync(new URL('app/fonts/Poppins-Medium.woff2', root)).toString('base64')

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @font-face {
    font-family: 'Poppins';
    font-weight: 300;
    src: url('data:font/woff2;base64,${light}') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    src: url('data:font/woff2;base64,${regular}') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-weight: 500;
    src: url('data:font/woff2;base64,${medium}') format('woff2');
  }
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; background: #f4f2ec; }
  body {
    font-family: 'Poppins', sans-serif;
    color: #16150f;
    -webkit-font-smoothing: antialiased;
  }
  .card {
    width: 1200px;
    height: 630px;
    padding: 60px 72px 54px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .eyebrow {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1px solid rgba(22,21,15,0.14);
    padding-bottom: 22px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #6b685e;
  }
  .eyebrow .status {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    letter-spacing: 0.14em;
  }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: #2c7a4b; }
  h1 {
    font-size: 112px;
    font-weight: 300;
    letter-spacing: -0.045em;
    line-height: 1;
  }
  .tagline {
    margin-top: 20px;
    font-size: 26px;
    line-height: 1.45;
    color: #3b3a31;
  }
  .stack {
    margin-top: 14px;
    font-size: 18px;
    color: #989488;
  }
  .foot {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-top: 1px solid rgba(22,21,15,0.14);
    padding-top: 20px;
    font-size: 14px;
    color: #989488;
  }
  .foot .role { color: #26543c; font-weight: 500; }
</style>
</head>
<body>
  <div class="card">
    <div class="eyebrow">
      <span>Software developer &middot; Nashik, India</span>
      <span class="status"><span class="dot"></span>Open to work</span>
    </div>
    <div>
      <h1>Mahesh Shinde</h1>
      <p class="tagline">I build backend systems and the interfaces that sit on top of them.</p>
      <p class="stack">Java &middot; Spring Boot &middot; React &middot; Next.js</p>
    </div>
    <div class="foot">
      <span>maheshshinde-dev.vercel.app</span>
      <span class="role">Backend &amp; full-stack developer</span>
    </div>
  </div>
</body>
</html>`

const dir = mkdtempSync(join(tmpdir(), 'og-'))
const page = join(dir, 'og.html')
writeFileSync(page, html)

const candidates = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
]

let browser = null
for (const path of candidates) {
  try {
    readFileSync(path)
    browser = path
    break
  } catch {}
}
if (!browser) throw new Error('No Chromium browser found')

const out = new URL('app/opengraph-image.png', root)
execFileSync(
  browser,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    `--screenshot=${out.pathname.slice(1)}`,
    new URL(`file:///${page.replace(/\\/g, '/')}`).href,
  ],
  { stdio: 'inherit' },
)

rmSync(dir, { recursive: true, force: true })
console.log('app/opengraph-image.png written')
