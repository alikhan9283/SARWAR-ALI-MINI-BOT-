module.exports = {
    command: "tomp3",
    category: "convert",
    description: "video to mp3",

    async execute(sock, m, { quoted, reply }) {

        try {

            if (!m.quoted)
                return reply("Reply to video");

            let media = await m.quoted.download();

            await sock.sendMessage(
                m.chat,
                {
                    audio: media,
                    mimetype: "audio/mpeg"
                },
                { quoted: m }
            );

        } catch (err) {
            console.log(err);
            reply("❌ Error");
        }
    }
};