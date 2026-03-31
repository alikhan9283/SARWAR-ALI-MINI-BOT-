module.exports = {
    command: "fancy",
    category: "text",
    description: "fancy text",

    async execute(sock, m, { text, reply }) {

        try {

            if (!text)
                return reply("Enter text");

            reply(`✨ ${text} ✨`);

        } catch (err) {
            console.log(err);
            reply("❌ Error");
        }
    }
};