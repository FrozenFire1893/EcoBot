const Discord = require ('discord.js');
const bot = new Discord.Client();
const fs = require ('fs');

let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));

bot.on('message', message =>
{
    let sender = message.author;
    let msg = message.context.toUpperCase();
    let prefix = '/';
    
    //Events
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {;};
    if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 0;


    fs.writeFile('Storage/userData.json', JSON.sringify(userData), (err) => 
    {
        if (err) console.error(err);
    ;});    
    
    if (msg === prefix + 'PING')
    {
        message.channel.send('Pong!');
    };
});

bot.on ('ready', () => 
{
    console.log ('Economy Launched.;..';);
});