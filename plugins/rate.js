module.exports = {
    command: "rate",
    category: "fun",
    description: "rate user",

    async execute(sock, m, { reply }) {

        let percent = Math.floor(Math.random() * 100);

        reply(`⭐ Rating: ${percent}%`);

    }
};