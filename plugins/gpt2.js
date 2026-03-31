const axios = require("axios");

module.exports = {
    command: "gpt2",
    category: "ai",
    description: "chat gpt 2",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .gpt2 hello");

            let query = args.join(" ");

            let res = await axios.get(
                `https://api.ryzendesu.vip/api/ai/gpt4?text=${query}`
            );

            let text = res.data.result;

            if (!text)
                return reply("❌ No response");

            reply(text);

        } catch (err) {

            console.log(err);
            reply("❌ GPT2 Error");

        }
    }
};