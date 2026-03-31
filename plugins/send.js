module.exports = {
command: "send",
category: "tools",
description: "send message multiple times",

async execute(sock, m, { args, reply }) {

    try {

        if (args.length < 2)
            return reply("❌ Example: .send hello 10");

        let count = parseInt(args[args.length - 1]);
        let text = args.slice(0, -1).join(" ");

        if (isNaN(count) || count > 100)
            return reply("❌ Max 1000 messages allowed");

        for (let i = 0; i < count; i++) {

            await sock.sendMessage(
                m.chat,
                { text: text },
                { quoted: m }
            );

        }

    } catch (err) {
        console.log(err);
        reply("❌ Error sending messages");
    }
}
};