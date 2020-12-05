const Discord = require('discord.js');
const config = require("config.json");
const emoji = require("emoji.json");

module.exports = async(client, message, args) => {
    var pergunta = ""
    var pergunta1 = ""
    var pergunta2 = ""
    var pergunta3 = ""
    var pergunta4 = ""
    var pergunta5 = ""
    var pergunta6 = ""
    var pergunta7 = ""
    var pergunta8 = ""
    var pergunta9 = ""
    var pergunta10 = ""
    var pergunta11 = ""
    var pergunta12 = ""

    if (!message.guild.channels.cache.find(channel => channel.name == `formulário-${message.author.id}`)) {
        message.guild.channels.create(`formulário-${message.author.id}`, {type: 'text',}).then((channel)=>{
            channel.createOverwrite(message.guild.roles.everyone, {
                "VIEW_CHANNEL": false
            })
            channel.createOverwrite(message.guild.members.cache.get(message.author.id), {
                "VIEW_CHANNEL": true
            }).catch(()=>{})
            channel.setParent("784557503425282101").catch(()=>{})
            channel.send(`<@${message.author.id}>`)
            let mensagemOption = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setDescription(`Responda as perguntas que serão mandadas!`)
            .addField(`Desistiu de fazer o Formulário?`, `Marque a reação ( ${emoji.errado} ) para cancelar seu formulario`)
            .setColor(`${config.embedColor}`)
            .setFooter('Verificação de Formularios')
            channel.send(mensagemOption).then((c)=>{
                c.react(`${emoji.erradoID}`).catch(()=>{})
                let CancelarFilter = (reaction, user, ) => reaction.emoji.id === `${emoji.erradoID}` && user.id === message.author.id;
                let Cancelar = c.createReactionCollector(CancelarFilter, { time: 300000 });
                Cancelar.on('collect', (r2, user) => { 
                    channel.delete().catch(()=>{})
                }).catch(()=>{})
            }).catch(()=>{})
            var mensagemPergunta = new Discord.MessageEmbed()
            .setDescription(`Qual seu nome?`)
            .setFooter('Pergunta[1/12]')
            .setColor(`${config.embedColor}`)
            channel.send(mensagemPergunta).then((msg)=>{
                pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                    max: 1 
                });
                pergunta.on("collect", (m) => {
                    pergunta1 = m.content
                    m.delete().catch(()=>{})
                    msg.delete().catch(()=>{})
                    var mensagemPergunta = new Discord.MessageEmbed()
                    .setDescription(`Qual sua idade?`)
                    .setFooter('Pergunta[2/12]')
                    .setColor(`${config.embedColor}`)
                    channel.send(mensagemPergunta).then((msg)=>{
                        pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                            max: 1 
                        });
                        pergunta.on("collect", (m) => {
                            pergunta2 = m.content
                            m.delete().catch(()=>{})
                            msg.delete().catch(()=>{})
                            var mensagemPergunta = new Discord.MessageEmbed()
                            .setDescription(`Qual seu nick?`)
                            .setFooter('Pergunta[3/12]')
                            .setColor(`${config.embedColor}`)
                            channel.send(mensagemPergunta).then((msg)=>{
                                pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                    max: 1 
                                });
                                pergunta.on("collect", (m) => {
                                    pergunta3 = m.content
                                    m.delete().catch(()=>{})
                                    msg.delete().catch(()=>{})
                                    var mensagemPergunta = new Discord.MessageEmbed()
                                    .setDescription(`Qual seu Email?`)
                                    .setFooter('Pergunta[4/12]')
                                    .setColor(`${config.embedColor}`)
                                    channel.send(mensagemPergunta).then((msg)=>{
                                        pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                            max: 1 
                                        });
                                        pergunta.on("collect", (m) => {
                                            pergunta4 = m.content
                                            m.delete().catch(()=>{})
                                            msg.delete().catch(()=>{})
                                            var mensagemPergunta = new Discord.MessageEmbed()
                                            .setDescription(`Qual a plataforma que você faz live?`)
                                            .setFooter('Pergunta[5/12]')
                                            .setColor(`${config.embedColor}`)
                                            channel.send(mensagemPergunta).then((msg)=>{
                                                pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                    max: 1 
                                                });
                                                pergunta.on("collect", (m) => {
                                                    pergunta5 = m.content
                                                    m.delete().catch(()=>{})
                                                    msg.delete().catch(()=>{})
                                                    var mensagemPergunta = new Discord.MessageEmbed()
                                                    .setDescription(`Quantas lives você faz por semana?`)
                                                    .setFooter('Pergunta[6/12]')
                                                    .setColor(`${config.embedColor}`)
                                                    channel.send(mensagemPergunta).then((msg)=>{
                                                        pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                            max: 1 
                                                        });
                                                        pergunta.on("collect", (m) => {
                                                            pergunta6 = m.content
                                                            m.delete().catch(()=>{})
                                                            msg.delete().catch(()=>{})
                                                            var mensagemPergunta = new Discord.MessageEmbed()
                                                            .setDescription(`Quantas horas de live você faz por dia?`)
                                                            .setFooter('Pergunta[7/12]')
                                                            .setColor(`${config.embedColor}`)
                                                            channel.send(mensagemPergunta).then((msg)=>{
                                                                pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                                    max: 1 
                                                                });
                                                                pergunta.on("collect", (m) => {
                                                                    pergunta7 = m.content
                                                                    m.delete().catch(()=>{})
                                                                    msg.delete().catch(()=>{})
                                                                    var mensagemPergunta = new Discord.MessageEmbed()
                                                                    .setDescription(`Quais plataformas sociais você usa?`)
                                                                    .setFooter('Pergunta[8/12]')
                                                                    .setColor(`${config.embedColor}`)
                                                                    channel.send(mensagemPergunta).then((msg)=>{
                                                                        pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                                            max: 1 
                                                                        });
                                                                        pergunta.on("collect", (m) => {
                                                                            pergunta8 = m.content
                                                                            m.delete().catch(()=>{})
                                                                            msg.delete().catch(()=>{})
                                                                            var mensagemPergunta = new Discord.MessageEmbed()
                                                                            .setDescription(`Porque desejas entrar para a comunidade dos oficiais?`)
                                                                            .setFooter('Pergunta[9/12]')
                                                                            .setColor(`${config.embedColor}`)
                                                                            channel.send(mensagemPergunta).then((msg)=>{
                                                                                pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                                                    max: 1 
                                                                                });
                                                                                pergunta.on("collect", (m) => {
                                                                                    pergunta9 = m.content
                                                                                    m.delete().catch(()=>{})
                                                                                    msg.delete().catch(()=>{})
                                                                                    var mensagemPergunta = new Discord.MessageEmbed()
                                                                                    .setDescription(`Onde você conheceu nossa comunidade?`)
                                                                                    .setFooter('Pergunta[10/12]')
                                                                                    .setColor(`${config.embedColor}`)
                                                                                    channel.send(mensagemPergunta).then((msg)=>{
                                                                                        pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                                                            max: 1 
                                                                                        });
                                                                                        pergunta.on("collect", (m) => {
                                                                                            pergunta10 = m.content
                                                                                            m.delete().catch(()=>{})
                                                                                            msg.delete().catch(()=>{})
                                                                                            var mensagemPergunta = new Discord.MessageEmbed()
                                                                                            .setDescription(`Esta ciente de todas as nossas regras?`)
                                                                                            .setFooter('Pergunta[11/12]')
                                                                                            .setColor(`${config.embedColor}`)
                                                                                            channel.send(mensagemPergunta).then((msg)=>{
                                                                                                pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                                                                    max: 1 
                                                                                                });
                                                                                                pergunta.on("collect", (m) => {
                                                                                                    pergunta11 = m.content
                                                                                                    m.delete().catch(()=>{})
                                                                                                    msg.delete().catch(()=>{})
                                                                                                    var mensagemPergunta = new Discord.MessageEmbed()
                                                                                                    .setDescription(`Gostaria de indicar alguem?`)
                                                                                                    .setFooter('Pergunta[12/12]')
                                                                                                    .setColor(`${config.embedColor}`)
                                                                                                    channel.send(mensagemPergunta).then((msg)=>{
                                                                                                        pergunta = channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                                                                            max: 1 
                                                                                                        });
                                                                                                        pergunta.on("collect", (m) => {
                                                                                                            pergunta12 = m.content
                                                                                                            m.delete().catch(()=>{})
                                                                                                            msg.delete().catch(()=>{})
                                                                                                            channel.delete().catch(()=>{})
                                                                                                            var formularioCompleto = new Discord.MessageEmbed()
                                                                                                            .setTitle(`Novo Formulário:`)
                                                                                                            .setDescription(`• Author: <@${message.author.id}>\n• Username: ${message.author.username}\n• ID: ${message.author.id}`)
                                                                                                            .addField(`**> Qual seu nome?**`,pergunta1)
                                                                                                            .addField(`**> Qual sua idade?**`,pergunta2)
                                                                                                            .addField(`**> Qual seu nick?**`,pergunta3)
                                                                                                            .addField(`**> Qual seu email?**`,pergunta4)
                                                                                                            .addField(`**> Qual a plataforma que você faz live?**`,pergunta5)
                                                                                                            .addField(`**> Quantas lives você faz por semana?**`,pergunta6)
                                                                                                            .addField(`**> Quantas horas de live você faz por dia?**`,pergunta7)
                                                                                                            .addField(`**> Quais plataformas sociais você usa?**`,pergunta8)
                                                                                                            .addField(`**> Porque desejas entrar para a comunidade dos oficiais?**`,pergunta9)
                                                                                                            .addField(`**> Onde você conheceu nossa comunidade?**`,pergunta10)
                                                                                                            .addField(`**> Esta ciente de todas as nossas regras?**`,pergunta11)
                                                                                                            .addField(`**> Gostaria de indicar alguem?**`,pergunta12)
                                                                                                            .setColor(`${config.embedColor}`)
                                                                                                            .setFooter('Novo Formulário')
                                                                                                            let canalFormularios = message.guild.channels.cache.get('784567322596999238')
                                                                                                            if (canalFormularios) { canalFormularios.send(formularioCompleto).then((msg)=>{
                                                                                                                msg.react(`${emoji.certoID}`).catch(()=>{})
                                                                                                                msg.react(`${emoji.erradoID}`).catch(()=>{})
                                                                                                                let CertoFilter = (reaction, user, ) => reaction.emoji.id === `${emoji.certoID}` && user.id !== `784597032550531122`;
                                                                                                                let ReprovadoFilter = (reaction, user, ) => reaction.emoji.id === `${emoji.erradoID}` && user.id !== `784597032550531122`;
                                                                                                                let Certo = msg.createReactionCollector(CertoFilter, { time: 300000 });
                                                                                                                let Reprovado = msg.createReactionCollector(ReprovadoFilter, { time: 300000 });

                                                                                                                Certo.on('collect', (r2, user) => { 
                                                                                                                    var canalLogs = message.guild.channels.cache.get('784603570975670292')
                                                                                                                    msg.delete().catch(()=>{})
                                                                                                                    let authorUser = message.guild.members.cache.get(message.author.id)
                                                                                                                    if (authorUser) {
                                                                                                                        authorUser.roles.add('769059152374005771').catch(()=>{})
                                                                                                                        authorUser.setNickname(`[STREAMER] ${message.author.username}`).catch(()=>{})
                                                                                                                    }
                                                                                                                    if (canalLogs) {
                                                                                                                        var formularioAprovado = new Discord.MessageEmbed()
                                                                                                                        .setTitle(`Formulário Aprovado:`)
                                                                                                                        .addField(`**> Staff:**`,`• Usuário: <@${user.id}>\n• Username: ${user.username}\n• ID: ${user.id}`)
                                                                                                                        .addField(`**> Streamer Aprovado:**`,`• Usuário: <@${message.author.id}>\n• Username: ${message.author.username}\n• ID: ${message.author.id}`)
                                                                                                                        .setColor(`#00FF00`)
                                                                                                                        .setFooter('Formulário Aprovado')
                                                                                                                        canalLogs.send(formularioAprovado)
                                                                                                                    }
                                                                                                                });

                                                                                                                Reprovado.on('collect', (r2, user) => { 
                                                                                                                    var canalLogs = message.guild.channels.cache.get('784603570975670292')
                                                                                                                    msg.delete().catch(()=>{})
                                                                                                                    if (canalLogs) {
                                                                                                                        var formularioReprovado = new Discord.MessageEmbed()
                                                                                                                        .setTitle(`Formulário Reprovado:`)
                                                                                                                        .addField(`**> Staff:**`,`• Usuário: <@${user.id}>\n• Username: ${user.username}\n• ID: ${user.id}`)
                                                                                                                        .addField(`**> Streamer Reprovado:**`,`• Usuário: <@${message.author.id}>\n• Username: ${message.author.username}\n• ID: ${message.author.id}`)
                                                                                                                        .setColor(`#FF0000`)
                                                                                                                        .setFooter('Formulário Reprovado')
                                                                                                                        canalLogs.send(formularioReprovado)
                                                                                                                    }
                                                                                                                });
                                                                                                                
                                                                                                            }).catch(()=>{}) }
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }).catch(()=>{})
    }
}