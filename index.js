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

  client.on("messageCreate", message => {
    if (message.content.startsWith("?kick")) {
        let utente = message.mentions.members.first();

        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.kick()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} kickato`)
                    .setDescription(`Utente kickato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
})

client.on("messageCreate", message => {
    if (message.content.startsWith("?ban")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.bannable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.ban()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} bannato`)
                    .setDescription(`Utente bannato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
})


