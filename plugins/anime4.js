const axios = require("axios");

module.exports = {
command: "anime4",
category: "download",
async execute(sock, m, { reply }) {

reply("🖼️ Fetching Anime Wallpaper...");

try {

let res = await axios.get("https://nekos.best/api/v2/neko");
let img = res.data.results[0].url;

await sock.sendMessage(m.chat, {
image: { url: img },
caption: "Anime HD Wallpaper"
}, { quoted: m });

} catch (e) {
console.log(e);
reply("Failed");
}

}
};