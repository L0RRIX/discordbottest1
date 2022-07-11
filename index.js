const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS",  "GUILD_BANS", "GUILD_MESSAGES", "GUILD_MEMBERS"] }
)

client.login(process.env.token)

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
    



    client.on('message', message => {
        if (message.content === '?ping') {  
      message.channel.send('pinging').then(m => {
          m.edit(`🏓Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        });
      }
      });

    