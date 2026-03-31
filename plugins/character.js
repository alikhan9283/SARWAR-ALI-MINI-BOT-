module.exports = {
    command: "character",
    category: "fun",
    description: "random character",

    async execute(sock, m, { reply }) {

        let list = [
            "Kind 😊",
            "Funny 😂",
            "Cool 😎",
            "Smart 🧠",
            "Cute 🥰"
        ];

        reply(list[Math.floor(Math.random() * list.length)]);
    }
};