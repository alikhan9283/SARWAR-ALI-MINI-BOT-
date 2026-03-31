const axios = require("axios");

module.exports = {
    command: "blackbox",
    category: "ai",
    description: "blackbox ai",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .blackbox hello");

            let query = args.join(" ");

            let res = await axios.get(
                `https://api.ryzendesu.vip/api/ai/blackbox?text=${query}`
            );

            reply(res.data.result);

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};