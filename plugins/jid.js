module.exports = {
    command: "jid",
    category: "info",
    description: "get user jid",

    async execute(sock, m, { reply }) {

        try {

            reply(m.sender);

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};