module.exports = {
    command: "happy",
    category: "fun",
    description: "happy meter",

    async execute(sock, m, { reply }) {

        reply("😊 You are happy today");
    }
};