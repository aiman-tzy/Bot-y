import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['60102810046', 'lynxaiman', true],
  ['0'], 
  ['0'],
  ['0']
] // Nomor Owner

global.mods = ['6,0102810046'] 
global.prems = ['60102810046', '0', '0']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'd42JjXNK'
}

// Harus di isi kalo mau ada fitur openai atau remini daftar atau login di sini : https://api.betabotz.org/
global.lann = 'd42JjXNK'

// Sticker WM
global.nans = 'lynx md'
global.packname = 'lynx MD┃ᴮᴼᵀ' 
global.author = '@lynxmd' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/aiman1_23\n' 
global.dygp = 'https://lynxaiman.my.id'
global.fgsc = 'https://github.com/ai-man-123' 
global.fgyt = 'http://lynxaiman.my.id'
global.fgpyp = 'https://saweria.co'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg'
global.thumb = 'https://i.ibb.co/y0vgNPT/20230723-112852.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})