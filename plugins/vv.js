module.exports = {
    command: "vv",
    category: "tools",
    description: "remove view once media",

    async execute(sock, m, { quoted, reply }) {

        try {

            if (!m.quoted)
                return reply("❌ Reply to view once photo or video");

            let media = await m.quoted.download();

            if (!media)
                return reply("❌ Failed to download media");

            let mime = m.quoted.mimetype || "";

            if (/image/.test(mime)) {

                await sock.sendMessage(
                    m.chat,
                    { image: media, caption: "✅ Thanks for using SARWAR ALI MD" },
                    { quoted: m }
                );

            } else if (/video/.test(mime)) {

                await sock.sendMessage(
                    m.chat,
                    { video: media, caption: "✅ Thanks for using SARWAR ALI MD" },
                    { quoted: m }
                );

            } else {

                reply("❌ Only image/video supported");

            }

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};