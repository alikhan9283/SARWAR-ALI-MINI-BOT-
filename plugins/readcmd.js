module.exports = {
command: "readcmd",
category: "settings",
description: "read command",

async execute(sock, m, { config, reply }) {

config.readcmd = !config.readcmd;

reply("✅ Read Command: " + config.readcmd);

}
};