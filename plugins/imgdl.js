const fs = require("fs");

module.exports = {

command: "imgdl",
category: "download",

async execute(sock, m, { quoted, reply }) {

if (!quoted) return reply("Reply to image");

try {

let buffer = await quoted.download();

let path = "./anime.jpg";

fs.writeFileSync(path, buffer);

await sock.sendMessage(m.chat, {
document: { url: path },
mimetype: "image/jpeg",
fileName: "anime-hdr.jpg"
}, { quoted: m });

} catch (e) {
console.log(e);
reply("Download failed");
}

}

};