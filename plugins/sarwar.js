module.exports = {

command: "sarwar",
category: "general",
description: "Sarwar Special Command",

async execute(sock, m, { reply, sender }) {

let emojis = ["🔥","👑","⚡","💎","🤖","😎","🚀","💯"];

let emoji = emojis[Math.floor(Math.random() * emojis.length)];

let text = `
╔═══〔 SARWAR ALI MD BOT 〕═══╗

${emoji} Welcome ${sender.split("@")[0]}

🤖 Unique Bot Command
⚡ Special System Running
💎 Only Available In Sarwar Bot

👑 Owner: SARWAR ALI

╚═══════════════════════╝
`;

reply(text);

await sock.sendMessage(m.chat, {
react: {
text: emoji,
key: m.key
}
});

}

};