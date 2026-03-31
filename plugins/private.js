module.exports = {
command: "private",
category: "owner",
description: "private mode",

async execute(sock, m, { isCreator, reply }) {

if (!isCreator) return;

sock.public = false;

reply("✅ Bot Private Mode ON");

}
};