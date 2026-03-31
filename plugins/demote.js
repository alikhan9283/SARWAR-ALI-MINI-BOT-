module.exports = {
    command: "demote",
    category: "group",
    description: "demote user",

    async execute(sock, m, { reply }) {

        if (!m.isGroup)
            return reply("❌ Group only");

        if (!m.mentionedJid[0])
            return reply("❌ Tag user");

        try {

            await sock.groupParticipantsUpdate(
                m.chat,
                [m.mentionedJid[0]],
                "demote"
            );

            reply("✅ Demoted");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};