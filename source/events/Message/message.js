const Discord = require('discord.js');
const config = require("config.json");
const emoji = require("emoji.json");

module.exports = async (client, message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        const embedDM = new Discord.MessageEmbed()
        .setDescription(`${emoji.errado} | **${message.author.tag},**Você não pode executar Comandos/Conversas em minha DM!`)
        .setColor(`${config.embedColor}`)
        message.channel.send(embedDM).then(msg => { 
        msg.delete({ timeout: 10000, reason: 'Auto' }).catch(()=>{})}).catch(()=>{});
    } else {
        if (!message.guild.members.cache.get(client.user.id).hasPermission('SEND_MESSAGES')) { return; }
        let prefixo = config.prefix
        if (message.channel.id == "784641457905729536") {
            message.delete().catch(()=>{})
            if(message.content.startsWith(prefixo)) {
                const args = message.content.slice(prefixo.length).trim().split(/ +/g);
                const command = args.shift().toLowerCase();
                const cmd = client.commands[command];
                if (cmd) {
                    cmd(client, message, args, prefixo);
                }
            }
        }
    }
}