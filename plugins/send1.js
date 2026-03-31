module.exports = {

command: "send1",
category: "owner",
description: "send message to number",
owner: true,

async execute(sock, m, { args, reply }) {

if (!args[0]) return reply("Use: .send 923xxxxxxxxx Hello");

let number = args[0].replace(/[^0-9]/g, "");

if (number.length < 11) return reply("Enter valid number");

let text = args.slice(1).join(" ");

if (!text) return reply("Write message");

let jid = number + "@s.whatsapp.net";

try {

await sock.sendMessage(jid, {
text: text
});

reply(`✅ Message sent to ${number}`);

} catch (e) {

console.log(e);
reply("❌ Failed to send message");

}

}

};