// Generates editorial project tiles for repos without product screenshots.
// Run with: node scripts/generate-project-tiles.mjs
import { readFileSync, mkdirSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const root = new URL('..', import.meta.url)
const regular = readFileSync(new URL('app/fonts/Poppins-Regular.woff2', root)).toString('base64')
const medium = readFileSync(new URL('app/fonts/Poppins-Medium.woff2', root)).toString('base64')

const tiles = [
  {
    slug: 'attendiq',
    name: 'AttendIQ',
    meta: 'github.com/maheshshinde9100/AttendIQ',
    stack: 'Spring Boot · React · FastAPI',
  },
  {
    slug: 'redirectx',
    name: 'RedirectX',
    meta: 'github.com/maheshshinde9100/RedirectX',
    stack: 'Java · Spring Boot · Kafka',
  },
  {
    slug: 'opdheal',
    name: 'OPDHeal',
    meta: 'github.com/maheshshinde9100/opdheal',
    stack: 'Spring Boot · React · MongoDB',
  },
  {
    slug: 'scrapehire',
    name: 'ScrapeHire',
    meta: 'github.com/maheshshinde9100/ScrapeHire',
    stack: 'Python · Automation · Data',
  },
  {
    slug: 'nyayasetu-ai',
    name: 'NyayaSetu AI',
    meta: 'github.com/maheshshinde9100/NyayaSetu-AI',
    stack: 'Java · Spring Boot · AI',
  },
  {
    slug: 'kanji-quiz',
    name: 'Japanese Kanji Quiz',
    meta: 'github.com/maheshshinde9100/JapaneeseKanjiQuizApp',
    stack: 'Android · Java · SQLite',
  },
  {
    slug: 'hcltech-r2',
    name: 'HCLTech Amplified',
    meta: 'github.com/maheshshinde9100/hcltech-amplified-r2-project',
    stack: 'Java · Spring Boot · Cloud',
    note: 'Hackathon submission',
  },
  {
    slug: 'codecanvas',
    name: 'CodeCanvas',
    meta: 'github.com/maheshshinde9100/CodeCanvas-Hackthon',
    stack: 'Next.js · TypeScript · AI',
  },
  {
    slug: 'mastercard-encryption',
    name: 'Mastercard Client Encryption',
    meta: 'github.com/Mastercard/client-encryption-java',
    stack: 'Java · JWE · AES',
    note: 'PR #128 merged',
  },
]

function html(tile) {
  return `<!doctype html>
<html><head><meta charset="utf-8" />
<style>
  @font-face { font-family: 'Poppins'; font-weight: 400; src: url('data:font/woff2;base64,${regular}') format('woff2'); }
  @font-face { font-family: 'Poppins'; font-weight: 500; src: url('data:font/woff2;base64,${medium}') format('woff2'); }
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1600px; height: 1000px; overflow: hidden; background: #f4f2ec; }
  body { font-family: 'Poppins', sans-serif; color: #16150f; -webkit-font-smoothing: antialiased; }
  .tile { position: relative; width: 1600px; height: 1000px; padding: 74px 76px 68px; display: flex; flex-direction: column; justify-content: space-between; }
  .row { display: flex; align-items: baseline; justify-content: space-between; gap: 40px; font-size: 21px; letter-spacing: 0.16em; text-transform: uppercase; color: #6b685e; }
  .row.top { border-bottom: 1px solid rgba(22,21,15,0.14); padding-bottom: 28px; }
  .row.bottom { border-top: 1px solid rgba(22,21,15,0.14); padding-top: 26px; color: #989488; font-size: 19px; letter-spacing: 0.12em; }
  .eyebrow { display: inline-flex; align-items: center; gap: 14px; }
  .dot { width: 11px; height: 11px; border-radius: 50%; background: #2c7a4b; }
  .meta { color: #989488; font-size: 19px; letter-spacing: 0.04em; text-transform: none; }
  .middle { display: flex; flex-direction: column; }
  .note { margin-bottom: 26px; font-size: 23px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #26543c; }
  h1 { font-size: 116px; font-weight: 500; line-height: 1.04; letter-spacing: -0.04em; max-width: 1330px; }
  h1.long { font-size: 84px; }
  .stack { margin-top: 30px; font-size: 27px; color: #6b685e; }
  .url { text-transform: none; letter-spacing: 0.02em; }
</style></head>
<body>
  <div class="tile">
    <div class="row top">
      <span class="eyebrow"><span class="dot"></span>Selected work</span>
      <span class="meta">${tile.meta}</span>
    </div>
    <div class="middle">
      ${tile.note ? `<p class="note">${tile.note}</p>` : ''}
      <h1 class="${tile.name.length > 18 ? 'long' : ''}">${tile.name}</h1>
      <p class="stack">${tile.stack}</p>
    </div>
    <div class="row bottom">
      <span class="url">maheshshinde-dev.vercel.app</span>
      <span>Portfolio</span>
    </div>
  </div>
</body></html>`
}

const port = 9334
const userDataDir = mkdtempSync(join(tmpdir(), 'tiles-'))
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  'about:blank',
])

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
let wsUrl = null
for (let i = 0; i < 40; i++) {
  try {
    const res = await fetch(`http://127.0.0.1:${port}/json/version`)
    wsUrl = (await res.json()).webSocketDebuggerUrl
    break
  } catch {
    await sleep(250)
  }
}
if (!wsUrl) throw new Error('Chrome CDP not reachable')

const ws = new WebSocket(wsUrl)
await new Promise((resolve, reject) => {
  ws.onopen = resolve
  ws.onerror = reject
})

let id = 0
const pending = new Map()
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data)
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id)
    pending.delete(msg.id)
    msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result)
  }
}
const send = (method, params = {}, sessionId) =>
  new Promise((resolve, reject) => {
    const msgId = ++id
    pending.set(msgId, { resolve, reject })
    ws.send(JSON.stringify({ id: msgId, method, params, sessionId }))
  })

const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
const sendTo = (method, params) => send(method, params, sessionId)

await sendTo('Page.enable')
await sendTo('Emulation.setDeviceMetricsOverride', {
  width: 1600,
  height: 1000,
  deviceScaleFactor: 1,
  mobile: false,
})

const outDir = new URL('public/thumbnails/tiles/', root)
mkdirSync(outDir, { recursive: true })

for (const tile of tiles) {
  const dataUrl = `data:text/html;base64,${Buffer.from(html(tile)).toString('base64')}`
  await sendTo('Page.navigate', { url: dataUrl })
  await sleep(500)
  await sendTo('Runtime.evaluate', {
    awaitPromise: true,
    expression: 'document.fonts.ready.then(() => true)',
  })
  const { data } = await sendTo('Page.captureScreenshot', { format: 'png' })
  writeFileSync(new URL(`${tile.slug}.png`, outDir), Buffer.from(data, 'base64'))
  console.log(tile.slug)
}

ws.close()
chrome.kill()
try {
  rmSync(userDataDir, { recursive: true, force: true })
} catch {}
