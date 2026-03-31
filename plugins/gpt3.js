const axios = require("axios");

module.exports = {
    command: "gpt3",
    category: "ai",
    description: "chat gpt3",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .gpt3 hello");

            let query = args.join(" ");

            let res = await axios.get(
                `https://api.popcat.xyz/chatbot?msg=${query}&owner=Sarwar&botname=MD-Bot`
            );

            let text = res.data.response;

            if (!text)
                return reply("❌ No response");

            reply(text);

        } catch (err) {

            console.log(err);
            reply("❌ GPT3 Error");

        }
    }
};