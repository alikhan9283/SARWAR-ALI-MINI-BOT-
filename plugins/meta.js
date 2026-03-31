const axios = require("axios");

module.exports = {
    command: "meta",
    category: "ai",
    description: "meta ai",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .meta hello");

            let query = args.join(" ");

            let res = await axios.get(
                `https://api.ryzendesu.vip/api/ai/meta-llama?text=${query}`
            );

            reply(res.data.result);

        } catch (err) {

            console.log(err);
            reply("❌ Meta AI Error");

        }
    }
};