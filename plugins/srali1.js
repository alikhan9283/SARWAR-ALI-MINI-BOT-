module.exports = {
command: "srali1",
category: "tools",
description: "download voice/audio",

async execute(sock, m, { quoted, reply }) {

try {

if (!quoted)
return reply("❌ Reply to voice message");

let mime = quoted.mimetype || "";

if (!/audio/.test(mime))
return reply("❌ Reply to voice/audio only");

let media = await quoted.download();

if (!media)
return reply("❌ Failed to download");

await sock.sendMessage(
m.chat,
{
audio: media,
mimetype: "audio/mp4",
ptt: true
},
{ quoted: m }
);

} catch (err) {
console.log(err);
reply("❌ Error");
}

}
};