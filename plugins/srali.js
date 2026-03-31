module.exports = {
command: "srali",
category: "tools",
description: "download all media & remove view once",

async execute(sock, m, { quoted, reply }) {

try {

if (!quoted)
return reply("❌ Reply to any media");

let mime = quoted.mimetype || "";
let media = await quoted.download();

if (!media)
return reply("❌ Failed to download media");

// IMAGE
if (/image/.test(mime)) {

await sock.sendMessage(
m.chat,
{
image: media,
caption: "✅ Image Downloaded"
},
{ quoted: m }
);

}

// VIDEO
else if (/video/.test(mime)) {

await sock.sendMessage(
m.chat,
{
video: media,
caption: "✅ Video Downloaded"
},
{ quoted: m }
);

}

// AUDIO / VOICE
else if (/audio/.test(mime)) {

await sock.sendMessage(
m.chat,
{
audio: media,
mimetype: "audio/mp4",
ptt: true
},
{ quoted: m }
);

}

// DOCUMENT
else if (/document/.test(mime)) {

await sock.sendMessage(
m.chat,
{
document: media,
fileName: "srali-file"
},
{ quoted: m }
);

}

// STICKER
else if (/sticker/.test(mime)) {

await sock.sendMessage(
m.chat,
{
sticker: media
},
{ quoted: m }
);

}

else {

reply("❌ Unsupported media");

}

} catch (err) {
console.log(err);
reply("❌ Error");
}

}
};