module.exports = {
    command: "insult",
    category: "fun",
    description: "insult user",

    async execute(sock, m, { reply }) {

        let list = [
            "You are lazy 😂",
            "You are noob 😆",
            "You need sleep 😴",
            "You are funny 🤣",
            "You are crazy 😜"
        ];

        reply(list[Math.floor(Math.random() * list.length)]);
    }
};