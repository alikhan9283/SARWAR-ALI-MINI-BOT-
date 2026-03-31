module.exports = {
command: "repo",
category: "general",
description: "show bot repo",

aliases: ["sc"],

async execute(sock, m, { reply }) {

    try {

        let text = `╭───〔 BOT SOURCE 〕
│
│ 👑 Owner: SARWAR ALI MD
│ 📱 Number: 03005448162
│
│ 🔗 Repo: https://github.com/
│
╰───────────────`;

        reply(text);

    } catch (err) {
        console.log(err);
        reply("❌ Error");
    }
}
};