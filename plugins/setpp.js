module.exports = {
    command: "setpp",
    category: "owner",
    description: "set profile picture",

    async execute(sock, m, { reply }) {

        try {

            if (!m.quoted)
                return reply("❌ Reply image");

            let media = await m.quoted.download();

            await sock.updateProfilePicture(sock.user.id, media);

            reply("✅ Profile Picture Updated");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};