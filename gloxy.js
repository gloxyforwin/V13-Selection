const Discord = require('discord.js');
const client = global.client = new Discord.Client({ intents: [98303]})
const { Intents, Collection } = require('discord.js');
const config = require('./config.json');
const fs = require("fs")

client.login(config.Bot.Token)

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.aliases = new Collection();

fs.readdir('./Commands', (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
      fs.readdir("./Commands/" + f, (err2, files2) => {
          files2.forEach(file => {
              let props = require(`./Commands/${f}/` + file);
              console.log(`[+] ${props.name} komutu yüklendi!`);
              client.commands.set(props.name, props);
              props.aliases.forEach(alias => {
                  client.aliases.set(alias, props.name);
              });
          })
      })
  });
});

const requestEvent = (event) => require(`./Events/${event}`)
client.on('interactionCreate', (interactionCreate) => requestEvent('[1]-Katılım')(interactionCreate, client));
client.on('interactionCreate', (interactionCreate) => requestEvent('[2]-İlişki')(interactionCreate, client));
client.on('interactionCreate', (interactionCreate) => requestEvent('[3]-Renk')(interactionCreate, client));
client.on('messageCreate', (messageCreate) => requestEvent('[4]-MessageCreate')(messageCreate, client));
client.on('ready', (ready) => requestEvent('[5]-Ready')(ready, client));