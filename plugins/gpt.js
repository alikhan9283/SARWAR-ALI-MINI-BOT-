const axios = require("axios");

module.exports = {
    command: "gpt",
    category: "ai",
    description: "chat gpt",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .gpt hello");

            let query = args.join(" ");

            let res = await axios.get(
                `https://api.ryzendesu.vip/api/ai/chatgpt?text=${query}`
            );

            let text = res.data.result;

            if (!text)
                return reply("❌ No response");

            reply(text);

        } catch (err) {

            console.log(err);
            reply("❌ GPT Error");

        }
    }
};