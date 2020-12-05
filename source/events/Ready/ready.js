const Discord = require("discord.js")
const config = require("config.json")
const client = new Discord.Client();
module.exports = (client) => {

console.log(`[BOT PRODUCT(2)] > Iniciada com ${client.guilds.cache.size} servidores e ${client.users.cache.size} usuários!`)

let canalLog = client.channels.cache.get(`784598139084079114`)
if (canalLog) {
    let statusdc = new Discord.MessageEmbed()
    .setTitle(`Bot __${client.user.username}__ foi iniciado com esses status:`)
    .addField(`>  Usuários: `,`\`\`\`fix\n - ${client.users.cache.size} - \`\`\``, true)
    .addField(`>  Canais: `,`\`\`\`fix\n - ${client.channels.cache.size} - \`\`\``, true)
    .addField(`>  Servidores: `,`\`\`\`fix\n - ${client.guilds.cache.size} - \`\`\``, true)
    .setColor(`${config.embedColor}`)
    .setFooter('Verificação de Starting Bot')
    canalLog.send(statusdc)
}

/*
    //  0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
*/

let presence = [{
    name: `Created by Dragon`,
    type: 3,
    url: "https://www.twitch.tv/zmrdragonz"
    }, {
    name: `Equipe S.O.H`,
    type: 2,
    url: "https://www.twitch.tv/zmrdragonz"
    }, {
    name: `Formulários de Streamers`,
    type: 1,
    url: "https://www.twitch.tv/zmrdragonz"
}]
            
function setStatus() {
        let randomStatus = presence[Math.floor(Math.random() * presence.length)];
        client.user.setPresence({activity: randomStatus});
      }

  setStatus();
    setInterval(() => setStatus(), 60000); 
}
