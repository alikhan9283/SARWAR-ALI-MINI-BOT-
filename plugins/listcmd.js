const fs = require("fs");

module.exports = {
    command: "listcmd",
    category: "info",
    description: "list all commands",

    async execute(sock, m, { reply }) {

        try {

            let files = fs.readdirSync("./plugins");

            let cmds = files.map(f => f.replace(".js", "")).join("\n");

            reply("📜 Commands List:\n\n" + cmds);

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};