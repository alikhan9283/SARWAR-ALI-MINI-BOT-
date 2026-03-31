module.exports = {
command: "autotyping",
category: "settings",
description: "auto typing",

async execute(sock, m, { config, reply }) {

config.autotyping = !config.autotyping;

reply("✅ Auto Typing: " + config.autotyping);

}
};