const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {
    if (message.content == "?help") {
        message.channel.send("bot in costruzione!")
    }

    if (message.content == "?chiappette") {
        var embed = new Discord.MessageEmbed()
            .setTitle("chiappette")
            .setDescription(`${message.author.username} voleva una foto di chiappette`)
            .setThumbnail("https://www.nonsprecare.it/wp-content/uploads/2017/03/come-parlano-alberi-significato-simbolico-1.jpg")

        message.channel.send({ embeds: [embed] })
    }
})

client.on('message', message => {
    if (message.content === '?ping') {  
      message.channel.send(`🏓Pong!${Math.round(client.ws.ping)}ms`🏓);
    }
  });