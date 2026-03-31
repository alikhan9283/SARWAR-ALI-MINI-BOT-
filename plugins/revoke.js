module.exports = {
    command: "revoke",
    category: "group",
    description: "revoke link",

    async execute(sock, m, { reply }) {

        if (!m.isGroup)
            return reply("❌ Group only");

        try {

            await sock.groupRevokeInvite(m.chat);

            reply("✅ Group link revoked");

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};