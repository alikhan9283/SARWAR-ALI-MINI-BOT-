const axios = require("axios");

module.exports = {

command: "anime",
category: "download",
description: "send anime images",

async execute(sock, m, { args, reply }) {

let count = parseInt(args[0]) || 1;

if (count > 10) count = 10;

reply(`🎌 Sending ${count} Anime Images...`);

try {

for (let i = 0; i < count; i++) {

let res = await axios.get("https://api.waifu.pics/sfw/waifu");

let img = res.data.url;

await sock.sendMessage(m.chat, {
image: { url: img },
caption: `🎌 Anime ${i+1} | SARWAR ALI MD`
}, { quoted: m });

}

} catch (e) {
console.log(e);
reply("❌ Error fetching anime");
}

}

};