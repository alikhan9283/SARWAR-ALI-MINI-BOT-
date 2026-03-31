module.exports = {
    command: "grouplink",
    category: "group",
    description: "get group link",

    async execute(sock, m, { reply }) {

        if (!m.isGroup)
            return reply("❌ Group only");

        try {

            let code = await sock.groupInviteCode(m.chat);

            reply(`https://chat.whatsapp.com/${code}`);

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};