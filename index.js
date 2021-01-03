/*
i'm not putting in effort lol
*/

const Discord = require('discord.js');
const client = new Discord.Client();

const ElliottQuoteList = [
    'NONCE!',
    'HELLLLOOOO EVERYBODY ITS THEUPBEATGAMER HERRREEEEE',
    'But I don\'t want a spring from the seat to enter me',
    'Can trains fat shame?',
    'Becs how\'s your grandad?',
    'Imagine the Drive Thru "Hi, welcome to McDonalds, can I suck you off"',
    ''
]

client.on('ready', () => {
    client.user.setPresence({activity: {name: 'a bunch of stations', type:'LISTENING'}});
});

client.on('message', async msg => {
    const msgcontent = msg.content.toLowerCase();
    if (!msgcontent.startsWith('hey clark')) return;
    if (msgcontent.includes('quotes') || msgcontent.includes('quote')) {
        const ClarkQuote = new Discord.MessageEmbed;
        await ClarkQuote.setDescription(ClarkQuoteList[Math.floor(Math.random()*ClarkQuoteList.length)]);
        return msg.reply(ClarkQuote);
    }
    if (msgcontent.includes('burrito')) {
        const ClarkBurrito = new Discord.MessageEmbed;
        await ClarkBurrito.setImage('https://depression.is-inside.me/bdddiMAJ.png');
        return msg.reply(ClarkBurrito);
    }
    if (msgcontent.includes('impostor')) {
        const ClarkImpostor = new Discord.MessageEmbed;
        await ClarkImpostor.setImage('https://depression.is-inside.me/aNPmUajj.png');
        return msg.reply(ClarkImpostor);
    }
    if (msgcontent.includes('confusion')) {
        const ClarkConfusion = new Discord.MessageEmbed;
        await ClarkConfusion.setImage('https://cdn.discordapp.com/attachments/704843393255211087/769305469432102932/unknown.png');
        return msg.reply(ClarkConfusion);
    }
    if (msgcontent.includes('love you')) return msg.reply();
    //msg.channel.send('Hi there');
    
});

client.login('NzcxMTM2NjIyNzQ1ODc4NTU5.X5nu8Q.uix0T2VHdqMktQ6zwso_h139r7o');
