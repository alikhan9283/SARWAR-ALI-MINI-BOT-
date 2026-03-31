
const axios = require("axios");

module.exports = {
    command: "ai",
    category: "ai",
    description: "ai chat",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .ai hello");

            let query = args.join(" ");

            let res = await axios.get(
                `https://api.simsimi.vn/v2/simtalk`,
                {
                    params: {
                        text: query,
                        lc: "en"
                    }
                }
            );

            let text = res.data.message;

            if (!text)
                return reply("❌ No response");

            reply(text);

        } catch (err) {

            console.log(err);
            reply("❌ AI Error");

        }
    }
};