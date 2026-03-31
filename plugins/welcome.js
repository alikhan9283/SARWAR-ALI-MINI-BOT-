module.exports = {
command: "welcome",
category: "group",
description: "welcome on/off",

async execute(sock, m, { args, reply, config }) {

if (!m.isGroup) return reply("Group only");

if (!args[0]) return reply("Use .welcome on/off");

if (args[0] === "on") {
    config.welcome = true;
    return reply("✅ Welcome ON");
}

if (args[0] === "off") {
    config.welcome = false;
    return reply("❌ Welcome OFF");
}

}
};