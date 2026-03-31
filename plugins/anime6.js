const axios = require("axios");

module.exports = {
command: "anime6",
category: "download",
async execute(sock, m, { reply }) {

reply("✨ Getting Anime Wallpaper...");

try {

let res = await axios.get("https://api.waifu.im/search");
let img = res.data.images[0].url;

await sock.sendMessage(m.chat, {
image: { url: img },
caption: "Anime 4K Wallpaper"
}, { quoted: m });

} catch (e) {
console.log(e);
reply("Error");
}

}
};