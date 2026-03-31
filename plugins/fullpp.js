module.exports = {
    command: "fullpp",
    category: "owner",
    description: "set full profile picture",

    async execute(sock, m, { reply }) {

        try {

            if (!m.quoted)
                return reply("❌ Reply image");

            let media = await m.quoted.download();

            await sock.updateProfilePicture(sock.user.id, media);

            reply("✅ Full Profile Updated");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};