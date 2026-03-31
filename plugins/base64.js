module.exports = {
    command: "base64",
    category: "text",
    description: "encode base64",

    async execute(sock, m, { text, reply }) {

        try {

            if (!text)
                return reply("Enter text");

            reply(Buffer.from(text).toString("base64"));

        } catch (err) {
            console.log(err);
            reply("❌ Error");
        }
    }
};