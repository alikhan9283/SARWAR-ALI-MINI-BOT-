module.exports = {
    command: "unblock",
    category: "owner",
    description: "unblock user",

    async execute(sock, m, { args, reply }) {

        try {

            if (!m.quoted)
                return reply("❌ Reply user to unblock");

            let user = m.quoted.sender;

            await sock.updateBlockStatus(user, "unblock");

            reply("✅ User unblocked");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};