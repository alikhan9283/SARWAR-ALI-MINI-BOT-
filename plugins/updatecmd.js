const fs = require("fs");
const path = require("path");

module.exports = {
    command: "updatecmd",
    category: "owner",
    description: "reload commands",

    async execute(sock, m, { reply }) {

        try {

            let pluginPath = "./plugins";

            fs.readdirSync(pluginPath).forEach(file => {
                delete require.cache[require.resolve(path.join("../plugins", file))];
            });

            reply("✅ Commands Updated");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};