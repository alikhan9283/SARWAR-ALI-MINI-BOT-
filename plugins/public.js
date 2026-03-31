module.exports = {
command: "public",
category: "owner",
description: "public mode",

async execute(sock, m, { isCreator, reply }) {

if (!isCreator) return;

sock.public = true;

reply("✅ Bot Public Mode ON");

}
};