module.exports = {
    command: "add",
    category: "group",
    description: "add user",

    async execute(sock, m, { args, reply }) {

        if (!m.isGroup)
            return reply("❌ Group only");

        if (!args[0])
            return reply("❌ Use: .add 923xxxxxxxxx");

        try {

            let user = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";

            await sock.groupParticipantsUpdate(
                m.chat,
                [user],
                "add"
            );

            reply("✅ User added");

        } catch (err) {

            console.log(err);
            reply("❌ Error adding user");

        }
    }
};