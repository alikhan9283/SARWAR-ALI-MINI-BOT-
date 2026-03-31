module.exports = {
    command: "shutdown",
    category: "owner",
    description: "shutdown bot",

    async execute(sock, m, { reply }) {

        try {

            reply("🛑 Bot Shutdown");

            process.exit(0);

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};