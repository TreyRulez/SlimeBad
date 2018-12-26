const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./configbotprueba.json");
let cooldown= new Set();

let prefix = config.prefix;

client.on("ready", () => {
    console.log("En Linea");
    
    client.user.setPresence( {
        status: "En Linea",
        game: {
            name: "-help",
            type: ""
        }
    } );
 
 });

client.on("message", (message) => {
const args = message.content.slice(prefix.length).trim().split(" ");
const command = args.shift().toLowerCase();
const YouTube = require('youtube-node');
let youTube = new YouTube();

  if(message.author.bot) return;
  if(message.content == "Hola") {
    message.channel.sendMessage("Hola que cuentas?");
}
if(command === 'kick' ){

    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escriba una razón, `-kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
     
    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);

}
if (command === "ping") {

    let ping = Math.floor(message.client.ping);
    
    message.channel.send(":ping_pong: Pong!")
      .then(m => {

          m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
      
      });

  }
  
  if(command === 'ban'){
    
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');

    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    if(!razon) return message.channel.send('Escriba un razón, `-ban @username [razón]`');
    if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
    

    message.guild.member(user).ban(razon);
    message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);

}



});
client.login(config.token);