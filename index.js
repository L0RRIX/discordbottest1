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


client.on("messageCreate", message => {
    if (message.content.startsWith("?clear")) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non ho il permesso');
        }
        let count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send("Inserisci un numero valido")
        }
        if (count > 100) {
            return message.channel.send("Non puoi cancellare più di 100 messaggi")
        }
        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati").then(msg => {
            setTimeout(() => msg.delete(), 5000)
        })
    }
})

//Creare i bottoni
client.on("messageCreate", message => {
    if (message.content == "!comando") {
        //Bottone unico
        let embed1 = new Discord.MessageEmbed()
            .setTitle("Embed")
            .setDescription("Premi i bottoni")

        let button1 = new Discord.MessageButton()
            .setLabel("Testo bottone")
            .setCustomId("idBottone1")
            .setStyle("PRIMARY") //Oppure "DANGER", "SECONDARY", "SUCCESS"

        let row1 = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ embeds: [embed1], components: [row1] })

        //Più bottoni
        let embed2 = new Discord.MessageEmbed()
            .setTitle("Embed")
            .setDescription("Primi i bottoni")

        let button2 = new Discord.MessageButton()
            .setLabel("Testo bottone")
            .setCustomId("idBottone2")
            .setStyle("PRIMARY")

        let button3 = new Discord.MessageButton()
            .setLabel("Testo bottone")
            .setCustomId("idBottone3")
            .setStyle("PRIMARY")

        let row2 = new Discord.MessageActionRow() //Massimo 5 bottoni per riga
            .addComponents(button2)
            .addComponents(button3)

        message.channel.send({ embeds: [embed2], components: [row2] }) //Si possono inserire massimo 5 righe (Es: components: [row1, row2, row3])
    }
})

//Evento di click
client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "idBottone1") {
        interaction.reply({ content: "Hai cliccato il bottone", ephemeral: true }) //Se ephemeral è true il messaggio verrà mostrato solo all'utente che ha cliccato il bottone

        interaction.member.roles.add("idRuolo") //Aggiungere un ruolo all'utente

        //Tutto quello che si vuole
    }
})