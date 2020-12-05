process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();
console.clear()
console.log('Starting Bot...')
const Discord = require("discord.js");
const config = require('config.json');
const { readdirSync } = require("fs");

const client = new Discord.Client({
    status: 'online',
    autoReconnect: true,
    disableMentions: 'everyone',
    interval: 60,
    retryLimit: 35,
    messageCacheMaxSize: 2024,
    messageCacheLifetime: 1680,
    messageSweepInterval: 1680,
    compress: true,
    afk: false,
    large_threshold: 250,
    disabledEvents: [
      'USER_NOTE_UPDATE',
      'TYPING_START',
      'RELATIONSHIP_ADD',
      'RELATIONSHIP_REMOVE',
      'guildMemberSpeaking'
    ]
});

///////////////////////////////////////////////////////////////

client.mutes = {};

//////////////////////////Commands/////////////////////////////

const commands = readdirSync("./source/commands");
client.commands = new Discord.Collection();
commands.forEach(folder => {
  if (folder === ".DS_Store") return;
  var all = readdirSync(`./source/commands/${folder}`, { withFileTypes: true });
  var files = all.filter(f => f.name.split('.').slice(-1)[0] === "js" && !f.isDirectory());
  files.forEach(file => {
      let name = file.name.split('.')[0];
      let exported = require(`./source/commands/${folder}/${file.name}`);
      client.commands[name] = exported;
      delete require.cache[require.resolve(`./source/commands/${folder}/${file.name}`)];
  });
  var utils = all.filter(f => f.isDirectory());
  utils.forEach(subFolder => {
      client[subFolder.name] = new Discord.Collection();
      var subFiles = readdirSync(`./source/commands/${folder}/${subFolder.name}`);
      subFiles = subFiles.filter(f => f.split('.').slice(-1)[0] === "js");
      subFiles.forEach(subFile => {
          let name = subFile.split('.')[0];
          let exported = require(`./source/commands/${folder}/${subFolder.name}/${subFile}`);
          client[subFolder.name][name] = exported;
          delete require.cache[require.resolve(`./source/commands/${folder}/${subFolder.name}/${subFile}`)];
      });
  });
});

//////////////////////////Events/////////////////////////////

const events = readdirSync("./source/events");
events.forEach(folder => {
    var files = readdirSync(`./source/events/${folder}`);
    files = files.filter(f => f.split('.').slice(-1)[0] === "js");
    files.forEach(file => {
        let name = file.split('.')[0];
        let exported = require(`./source/events/${folder}/${file}`);
        client.on(name, exported.bind(null, client));
        delete require.cache[require.resolve(`./source/events/${folder}/${file}`)];
    });
});

//////////////////////////Login/////////////////////////////

client.login(config.token).catch(e => {
    console.log(`Erro em Meu Login - Erro:\n${e}`)
    process.exit(2)
});