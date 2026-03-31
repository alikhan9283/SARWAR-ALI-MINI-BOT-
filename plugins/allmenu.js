const fs = require("fs");

module.exports = {
    command: "allmenu",
    category: "info",
    description: "show all menu",

    async execute(sock, m, { reply }) {

        try {

            let files = fs.readdirSync("./plugins");

            let menu = files.map(f => "┃ ❍ " + f.replace(".js", "")).join("\n");

            reply("📜 ALL MENU\n\n" + menu);

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};