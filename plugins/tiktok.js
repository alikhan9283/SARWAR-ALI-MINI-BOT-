const axios = require("axios");

module.exports = {
    command: "tiktok",
    category: "download",
    description: "download tiktok video",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .tiktok url");

            let res = await axios.get(
                `https://www.tikwm.com/api/?url=${args[0]}`
            );

            let video = res.data.data.play;

            if (!video)
                return reply("❌ Download failed");

            await sock.sendMessage(
                m.chat,
                {
                    video: { url: video },
                    caption: "✅ TikTok Downloaded"
                },
                { quoted: m }
            );

        } catch (err) {

            console.log(err);
            reply("❌ Error downloading");

        }
    }
};