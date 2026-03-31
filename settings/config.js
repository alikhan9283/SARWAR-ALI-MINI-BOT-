
// 漏 2025 Debraj. All Rights Reserved.
// respect the work, don鈥檛 just copy-paste.

const fs = require('fs')

const config = {
    owner: "923005448162",
    botNumber: "923242895504",
    setPair: "K0MRAID1",
    thumbUrl: "https://i.postimg.cc/25pGH5Lr/file-00000000cf887208ab4baf9ffa7d6f46.jpg",
    session: "sessions",
    status: {
    public: false,
    terminal: true,
    reactsw: false
},
message: {
    owner: "no, this is for owners only",
    group: "this is for groups only",
    admin: "this command is for admin only",
    private: "this is specifically for private chat"
},
    mess: {
        owner: 'This command is only for the bot owner!',
        done: 'Mode changed successfully!',
        error: 'Something went wrong!',
        wait: 'Please wait...'
    },
    settings: {
        title: "𝐒𝐀𝐑𝐖𝐀𝐑-𝐀𝐋𝐈-𝐌𝐃",
        packname: 'WA-BASE',
        description: "this script was created by 𝐒𝐀𝐑𝐖𝐀𝐑 𝐀𝐋𝐈 ",
        author: '',
        footer: ""
    },
    newsletter: {
        name: "𝐒𝐀𝐑𝐖𝐀𝐑 𝐀𝐋𝐈",
        id: "0@newsletter"
    },
    api: {
        baseurl: "http://localhost:3000",
        apikey: "hector"
    },
    sticker: {
        packname: "𝐒𝐀𝐑𝐖𝐀𝐑 𝐀𝐋𝐈 𝐌𝐃",
        author: "WA-BASE"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
      
