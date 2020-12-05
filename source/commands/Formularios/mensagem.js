const Discord = require('discord.js');
const config = require("config.json");
const emoji = require("emoji.json");

module.exports = async(client, message, args) => {
	if (message.author.id == "559681569325973505") {
	    let mensagemOption = new Discord.MessageEmbed()
	    .setAuthor(client.user.username, client.user.displayAvatarURL())
	    .setDescription(`Faça seu formulário para ser Streamer na nossa comunidade!`)
	    .addField(`**> Escreva:**`, `\`\`\`fix\n!formulario\`\`\``)
	    .setColor(`${config.embedColor}`)
	    .setFooter('Verificação de Formularios')
	    message.channel.send(mensagemOption)
	}
}