module.exports = {
    command: "ship",
    category: "fun",
    description: "ship users",

    async execute(sock, m, { reply }) {

        let percent = Math.floor(Math.random() * 100);

        reply(`❤️ Love Match: ${percent}%`);
    }
};