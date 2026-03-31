module.exports = {
command: "alwaysonline",
category: "settings",
description: "always online",

async execute(sock, m, { reply, config }) {

config.alwaysonline = !config.alwaysonline;

reply("✅ Always Online: " + config.alwaysonline);

}
};