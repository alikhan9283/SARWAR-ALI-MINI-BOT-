module.exports = {
    command: "unlockgc",
    category: "group",
    description: "unlock group",

    async execute(sock, m, { reply }) {

        if (!m.isGroup)
            return reply("❌ Group only");

        try {

            await sock.groupSettingUpdate(
                m.chat,
                "not_announcement"
            );

            reply("🔓 Group unlocked");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};