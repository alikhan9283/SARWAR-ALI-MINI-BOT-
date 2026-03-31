module.exports = {
    command: "joke",
    category: "fun",
    description: "random joke",

    async execute(sock, m, { reply }) {

        let list = [
            "Why did the bot sleep? Because low battery 😂",
            "Why WhatsApp slow? Internet gone 😆",
            "Bot is smart but owner smarter 🤣"
        ];

        reply(list[Math.floor(Math.random() * list.length)]);
    }
};