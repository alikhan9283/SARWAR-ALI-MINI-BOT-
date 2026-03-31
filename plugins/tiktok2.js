const axios = require("axios");

module.exports = {
    command: "tiktok2",
    category: "download",
    description: "download tiktok hd",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .tiktok2 url");

            let res = await axios.get(
                `https://www.tikwm.com/api/?url=${args[0]}`
            );

            let video = res.data.data.hdplay;

            if (!video)
                return reply("❌ Download failed");

            await sock.sendMessage(
                m.chat,
                {
                    video: { url: video },
                    caption: "✅ TikTok HD Downloaded"
                },
                { quoted: m }
            );

        } catch (err) {

            console.log(err);
            reply("❌ Error downloading");

        }
    }
};