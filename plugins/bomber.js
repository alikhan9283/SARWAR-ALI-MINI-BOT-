module.exports = {

command: "bomber",
category: "fun",
description: "education demo bomber",

async execute(sock, m, { args, reply }) {

if (!m.isGroup) return reply("Group only");

let count = args[0] || 5;

reply("💣 Bomber Demo Start");

for (let i = 0; i < count; i++) {

await sock.sendMessage(m.chat, {
text: `💣 Bomb ${i+1} 💥`
});

}

reply("✅ Bomber Demo Completed");

}

};