module.exports = {
    command: "take",
    category: "convert",
    description: "take sticker",

    async execute(sock, m, { quoted, text, reply }) {

        try {

            if (!m.quoted)
                return reply("Reply to sticker");

            let media = await m.quoted.download();

            await sock.sendMessage(
                m.chat,
                {
                    sticker: media,
                    packname: text || "SARWAR",
                    author: "ALI"
                },
                { quoted: m }
            );

        } catch (err) {
            console.log(err);
            reply("❌ Error");
        }
    }
};