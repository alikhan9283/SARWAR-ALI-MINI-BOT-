module.exports = {
command: "antidelete",
category: "group",
description: "anti delete on/off",

async execute(sock, m, { args, reply, config }) {

if (!args[0]) return reply("Use .antidelete on/off");

if (args[0] === "on") {
    config.antidelete = true;
    return reply("✅ Anti Delete ON");
}

if (args[0] === "off") {
    config.antidelete = false;
    return reply("❌ Anti Delete OFF");
}

}
};