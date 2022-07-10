const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS",  "GUILD_BANS", "GUILD_MESSAGES", "GUILD_MEMBERS"] }
)

client.login("OTk1NzQ3MDg4MjgzNDcxOTUy.GIvj01.UJvt0D9yZUfxzIp6WGN_2fsx2ZeQxY1zRY4yg8")

client.on("ready", ()=> {
    console.log("Bot Online")
})

client.on("messageCreate", (message) => {
    if(message.content == "?help"){
        message.channel.send("Bot in costruzione!")

    }

    if(message.content == "?chiappette")
        var embed = new Discord.MessageEmbed()
        .setTitle("Chiappette")
        .setDescription(`${message.author.username} voleva una foto di chiappette`)
        .setThumbnail("https://pbs.twimg.com/media/ErfDEnzWMAIws_M.jpg")

    message.channel.send({ embeds: [embed]}
    )
    })

    