const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_BANS"] }
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
      message.channel.send(`🏓Pong!${Math.round(client.ws.ping)}ms🏓`);
    }
  });

client.on("message", (message) =>{
    if(message.content.startsWith("?kick")) {
    
        var utentekick = message.mentions.members.first();


    
    
        if(!utentekick) {
            message.channel.send("Non hai menzionato nessun utente");
            return;

        }

        if(!utentekick.kickable) {
            message.channel.send("Il bot non ha il permesspo di eseguire questo comando, contatta lorrix ");
            return;
        }

        utentekick.kick()
            .then(() => message.channel.send("<@" + utentekick + "> è stato kiccato"))

        
    }

 })