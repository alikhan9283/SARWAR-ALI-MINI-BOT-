module.exports = {
    command: "remove",
    category: "group",
    description: "remove user",

    async execute(sock, m, { reply }) {

        if (!m.isGroup)
            return reply("❌ Group only");

        if (!m.mentionedJid[0])
            return reply("❌ Tag user");

        try {

            await sock.groupParticipantsUpdate(
                m.chat,
                [m.mentionedJid[0]],
                "remove"
            );

            reply("✅ User removed");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};