module.exports = {
command: "vv2",
category: "tools",
description: "remove view once media",

async execute(sock, m, { quoted, reply }) {

try {

if (!quoted)
return reply("❌ Reply to view once media");

let media = await quoted.download();

if (!media)
return reply("❌ Failed to download media");

let mime = quoted.mimetype || "";

if (/image/.test(mime)) {

await sock.sendMessage(
m.chat,
{ image: media, caption: "✅ View Once Removed" },
{ quoted: m }
);

} else if (/video/.test(mime)) {

await sock.sendMessage(
m.chat,
{ video: media, caption: "✅ View Once Removed" },
{ quoted: m }
);

} else if (/audio/.test(mime) || /voice/.test(mime)) {

await sock.sendMessage(
m.chat,
{ audio: media, mimetype: "audio/mp4", ptt: true },
{ quoted: m }
);

} else if (/document/.test(mime)) {

await sock.sendMessage(
m.chat,
{ document: media, fileName: "file" },
{ quoted: m }
);

} else {

reply("❌ Unsupported media");

}

} catch (err) {
console.log(err);
reply("❌ Error");
}

}
};