const axios = require("axios");

module.exports = {
    command: "tt2",
    category: "download",
    description: "download tiktok video 2",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .tt2 url");

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
                    caption: "✅ TikTok Downloaded (Server 2)"
                },
                { quoted: m }
            );

        } catch (err) {

            console.log(err);
            reply("❌ Error downloading");

        }
    }
};