module.exports = {
    command: "hack",
    category: "fun",
    description: "fake hack",

    async execute(sock, m, { reply }) {

        reply("💻 Hacking started...");
        
        setTimeout(() => {
            reply("📂 Data found...");
        }, 2000);

        setTimeout(() => {
            reply("📱 WhatsApp hacked 😂");
        }, 4000);
    }
};