module.exports = {
    command: "lockgc",
    category: "group",
    description: "lock group",

    async execute(sock, m, { reply }) {

        if (!m.isGroup)
            return reply("❌ Group only");

        try {

            await sock.groupSettingUpdate(
                m.chat,
                "announcement"
            );

            reply("🔒 Group locked");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};