module.exports = {

command: "send2",
category: "owner",
description: "send message to number",
owner: true,

async execute(sock, m, { args }) {

if (!args[0]) return;

let number = args[0].replace(/[^0-9]/g, "");

let text = args.slice(1).join(" ");

if (!text) return;

let jid = number + "@s.whatsapp.net";

try {

let check = await sock.onWhatsApp(jid);
if (!check[0]?.exists) return;

await sock.sendMessage(jid, {
text: text
});

} catch (e) {
console.log(e);
}

}

};