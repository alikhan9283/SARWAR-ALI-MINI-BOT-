module.exports = {
command: "customreact",
category: "settings",
description: "set custom react",

async execute(sock, m, { args, reply, config }) {

if (!args[0]) return reply("Use .customreact 😊");

config.customreact = args[0];

reply("✅ Custom React Set: " + args[0]);

}
};