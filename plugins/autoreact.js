module.exports = {

command: "autoreact",
category: "settings",
description: "auto react on/off",

async execute(sock, m, { args, reply, config }) {

if (!args[0]) return reply(".autoreact on / off");

if (args[0] === "on") {
    config.autoreact = true;
    return reply("✅ Auto React ON");
}

if (args[0] === "off") {
    config.autoreact = false;
    return reply("❌ Auto React OFF");
}

},

auto: true,

async autoExecute(sock, m, { config }) {

try {

if (!config.autoreact) return;
if (m.key.fromMe) return;

let emojis = [
"😀","😂","😎","🔥","❤️","😍","😅","🤖","😆",
"💀","🥵","😇","🤩","😜","😹","😋","🙃",
"👀","💯","⚡","🥶","😴","🤭","😈"
];

let emoji = emojis[Math.floor(Math.random() * emojis.length)];

await sock.sendMessage(m.chat, {
    react: {
        text: emoji,
        key: m.key
    }
});

} catch (e) {
console.log("AutoReact Error:", e);
}

}

};