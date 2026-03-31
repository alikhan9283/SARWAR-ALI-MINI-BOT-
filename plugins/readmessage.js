module.exports = {
command: "autorecording",
category: "settings",
description: "auto recording",

async execute(sock, m, { config, reply }) {

config.autorecording = !config.autorecording;

reply("✅ Auto Recording: " + config.autorecording);

}
};