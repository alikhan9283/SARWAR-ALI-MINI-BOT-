module.exports = {
    command: "imagine2",
    category: "ai",
    description: "generate image 2",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .imagine2 car");

            let query = args.join(" ");

            let img = `https://image.pollinations.ai/prompt/${query}?model=flux`;

            await sock.sendMessage(
                m.chat,
                {
                    image: { url: img },
                    caption: "🎨 Image Generated 2"
                },
                { quoted: m }
            );

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};