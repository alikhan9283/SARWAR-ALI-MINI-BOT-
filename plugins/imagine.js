const axios = require("axios");

module.exports = {
    command: "imagine",
    category: "ai",
    description: "generate image",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .imagine cat");

            let query = args.join(" ");

            let img = `https://image.pollinations.ai/prompt/${query}`;

            await sock.sendMessage(
                m.chat,
                { image: { url: img }, caption: "🎨 Image Generated" },
                { quoted: m }
            );

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};