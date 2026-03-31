module.exports = {
    command: "tagall",
    category: "group",
    description: "tag all",

    async execute(sock, m, { reply }) {

        if (!m.isGroup)
            return reply("❌ Group only");

        try {

            let metadata = await sock.groupMetadata(m.chat);

            let members = metadata.participants;

            let text = members
                .map(v => `@${v.id.split("@")[0]}`)
                .join("\n");

            await sock.sendMessage(
                m.chat,
                {
                    text,
                    mentions: members.map(v => v.id)
                },
                { quoted: m }
            );

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};