// Credit By Dray
const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '62831515168511'
global.botNumber = ''
global.versi = version
global.versiBot = "17.0"
global.namaOwner = "Dray"
global.namaown = "DrayXD Official"
global.packname = 'Bot WhatsApp'
global.botname = 'Zeno'
global.botname2 = 'Zeno Karma'
global.prefa = ['','!','.',',','🐤','🗿']
global.tele = 't.me/Drayoffc'
global.version = version

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/6283151568511"
global.linkTelegram = "https://t.me/Drayoffc"
global.linkGrup = ""
global.ApikeyRestApi = "ubot" // Jangan diubah kalo tidak paham

//~~~~~~~~~~~ Manage Vercell ~~~~~~~~~~//
global.vercelToken = "AnLcrZENIT3qx9d742Ycoc7g" //Your Vercel Token

//~~~~~~~~~~~ Manage GitHub ~~~~~~~~~~//
global.githubToken = "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" //Your GitHub Token
global.githubUsername = "website-terbaru" //Your GitHub Username

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000
global.cd = 600 // 600 detik = 10 menit (Set Cd Own Js)

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VbArpFn6LwHrXWJkjE2B"
global.idSaluran = "120363402560843922@newsletter"
global.namaSaluran = "Dray Official"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "Tidak Tersedia"
global.ovo = "Tidak Tersedia"
global.gopay = "083151568511"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://files.catbox.moe/pgtspt.png", 
reply: "https://files.catbox.moe/pgtspt.png", 
logo: "https://files.catbox.moe/pgtspt.png", 
qris: "https://files.catbox.moe/np5wry.jpg"
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
  owner: 
`╭─❌ ACCESS DENIED
│
│ 🔑 This feature is restricted
│ for the *Bot Owner only*
│
╰───────────────`,

  admin: 
`╭─❌ ACCESS DENIED
│
│ ⚙️ This command is available
│ only for *Group Admin*
│
╰───────────────`,

  botAdmin: 
`╭─⚠️ BOT NOT ADMIN
│
│ 👑 Please promote the bot
│ to *Admin* first
│
╰───────────────`,

  group: 
`╭─💬 GROUP ONLY
│
│ 🫂 This feature can only be
│ used inside a *Group Chat*
│
╰───────────────`,

  private: 
`╭─📩 PRIVATE ONLY
│
│ 💬 Please use this feature
│ in *Private Chat* with bot
│
╰───────────────`,

  prem: 
`╭─💎 PREMIUM FEATURE
│
│ ✨ This command is exclusive
│ for *Premium Users*
│
╰───────────────`,

  premium: 
`╭─💎 PREMIUM FEATURE
│
│ ✨ This command is exclusive
│ for *Premium Users*
│
╰───────────────`,

  wait: 
`⏳ *Processing...*
Please wait a moment ⚡`,

  error: 
`❌ *Something went wrong!*
Please try again later 🧩`,

  done: 
`✅ *Success!*
Your command has been executed 🚀`
}
global.devGreetCooldown = {}
// format:
// {
//   groupId: timestamp
// }        
        

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})