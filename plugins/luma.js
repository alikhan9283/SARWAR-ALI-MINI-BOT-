const axios = require("axios");

module.exports = {
    command: "luma",
    category: "ai",
    description: "luma ai",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .luma hello");

            let query = args.join(" ");

            let res = await axios.get(
                `https://api.ryzendesu.vip/api/ai/luma?text=${query}`
            );

            reply(res.data.result);

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};