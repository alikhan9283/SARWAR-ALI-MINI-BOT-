const axios = require("axios");

module.exports = {
    command: "gptmini",
    category: "ai",
    description: "mini ai",

    async execute(sock, m, { args, reply }) {

        try {

            if (!args[0])
                return reply("❌ Use: .gptmini hello");

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

            reply(res.data.message);

        } catch (err) {

            console.log(err);
            reply("❌ Mini AI Error");

        }
    }
};