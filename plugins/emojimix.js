const axios = require("axios");

module.exports = {
    command: "emojimix",
    category: "convert",
    description: "emoji mix",

    async execute(sock, m, { text, reply }) {

        try {

            if (!text.includes("+"))
                return reply("Example: emojimix 😎+😂");

            let [e1, e2] = text.split("+");

            let url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyB-emoji&q=${e1}_${e2}`;

            reply(`Mix: ${e1} ${e2}`);

        } catch (err) {
            console.log(err);
            reply("❌ Error");
        }
    }
};