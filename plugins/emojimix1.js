const axios = require("axios");

module.exports = {
    command: "emojimix",
    category: "convert",
    description: "emoji mix",

    async execute(sock, m, { text, reply }) {

        try {

            if (!text.includes("+"))
                return reply("Example: emojimix 😎+😂");

            let [emoji1, emoji2] = text.split("+");

            let url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyB-7KZ_emoji&q=${emoji1}_${emoji2}`;

            let res = await axios.get(url);

            if (!res.data.results.length)
                return reply("❌ Emoji not supported");

            let img = res.data.results[0].media_formats.png.url;

            await sock.sendMessage(
                m.chat,
                { sticker: { url: img } },
                { quoted: m }
            );

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};