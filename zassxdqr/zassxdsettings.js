const fs = require('fs')
const chalk = require('chalk')

global.domain = "Isi link panel lu dek" // Isi Domain Lu
global.apikey = 'ptla_d4GhvzbUR0XB2jlXmjtOaJYw8TuNUZibD6umbNotETA' // Isi Apikey Plta Lu
global.capikey = 'ptlc_TaEIP478AyrCrFNLbm5mfRUf04GSEbCUJSUNQ4dOLNr' // Isi Apikey Pltc Lu
global.creAtor = "6285718828566@s.whatsapp.net"
global.owner = ['6285718828566']
global.ownerNumber = ["6285718828566@s.whatsapp.net"]
global.nomerOwner = "6285718828566"
global.namabotnya = 'XynaBotz'
global.namaownernya = 'FaelFilaa'
global.packname = 'XynaBotz ©FaelFilaa'
global.author = 'youtube.com/@xynabotzreal'
global.sessionName = 'session'
global.email = 'kukisjumbonime@gmail.com'
global.group = 'https://chat.whatsapp.com/Iwngx7s2deGAVQUeoGctux'
global.youtube = 'https://www.youtube.com/@xynabotzreal'
global.website = ''
global.github = 'https://github.com//xynabotz'
global.nomorowner = 'https://wa.me/6285718828566'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.qris = fs.readFileSync(`./qris.jpeg`)
global.krmd = 
{
success: '```Success✅```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Fitur Khusus Owner Bot!!!```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./zassxdjs/image/thumb.jpg')
global.imagekir = fs.readFileSync('./zassxdjs/image/zassxd.jpg')
global.videokir = fs.readFileSync('./zassxdjs/image/zassxd.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
