module.exports = {
    command: "unbase64",
    category: "text",
    description: "decode base64",

    async execute(sock, m, { text, reply }) {

        try {

            if (!text)
                return reply("Enter base64");

            reply(Buffer.from(text, "base64").toString("utf-8"));

        } catch (err) {
            console.log(err);
            reply("❌ Error");
        }
    }
};