const axios = require("axios");

module.exports = {
    command: "trt",
    category: "text",
    description: "translate",

    async execute(sock, m, { text, reply }) {

        try {

            if (!text)
                return reply("Enter text");

            let res = await axios.get(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|ur`);

            reply(res.data.responseData.translatedText);

        } catch (err) {
            console.log(err);
            reply("❌ Error");
        }
    }
};