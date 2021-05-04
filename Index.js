const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = 't!';


var version = '1.0.1';

bot.on("ready", () => {
    console.log('der bot ist nun einsatzbereit')

    bot.user.setActivity("t!help", { type: 'PLAYING'}).catch(console.error)
})

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch (args[0]){


        case 'help':
             message.channel.send('es gibt 8 bots und 14 mitglieder!')
        break;

        case 'ping':
            message.channel.send('Pong!')
        break;

        case 'Ping':
            message.channel.send('Pong!')
        break;

        case 'clear':
            if(!args[1])return message.channel.send("Fehler, bitte zweites argument angegeben!")
            mesagge.channel.bulkDelete(args[1])
        break;
        
        case 'Clear':
            if(!args[1])return message.channel.send("Fehler, bitte zweites argument angegeben!")
            mesagge.channel.bulkDelete(args[1])
        break;
    }
})

bot.login(process.env.token) 