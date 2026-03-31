module.exports = {
    command: "gjid",
    category: "info",
    description: "get group id",

    async execute(sock, m, { reply }) {

        try {

            if (!m.isGroup)
                return reply("❌ Group only");

            reply(m.chat);

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};