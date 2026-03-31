const axios = require("axios");

module.exports = {
command: "anime7",
category: "download",
async execute(sock, m, { reply }) {

reply("🎨 Fetching Anime HDR Wallpaper...");

try {

let res = await axios.get("https://api.nekosapi.com/v3/images/random?rating=safe");
let img = res.data.items[0].image_url;

await sock.sendMessage(m.chat, {
image: { url: img },
caption: "Anime HDR 4K"
}, { quoted: m });

} catch (e) {
console.log(e);
reply("API Error");
}

}
};