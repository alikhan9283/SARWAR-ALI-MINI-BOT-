module.exports = {
    command: "block",
    category: "owner",
    description: "block user",

    async execute(sock, m, { args, reply }) {

        try {

            if (!m.quoted)
                return reply("❌ Reply user to block");

            let user = m.quoted.sender;

            await sock.updateBlockStatus(user, "block");

            reply("✅ User blocked");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};