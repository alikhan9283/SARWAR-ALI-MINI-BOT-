const axios = require("axios");

module.exports = {
    command: "SR",
    category: "ai",
    description: "smart ai",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .SR hello");

            let query = args.join(" ");

            let res = await axios.get(
                `https://api.ryzendesu.vip/api/ai/smart?text=${query}`
            );

            reply(res.data.result);

        } catch (err) {

            console.log(err);
            reply("❌ Error");

        }
    }
};