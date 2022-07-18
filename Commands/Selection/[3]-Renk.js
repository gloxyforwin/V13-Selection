const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: 'renk',
    description: 'renk Rol',
    aliases: ['renk', 'color'],
    usage: '.renk',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */

    
  async execute(message, args, client) {

if (message.author.id != config.Bot.OwnerID) {
message.react(config.Emojies.Red)
return;
}
        
const renkMenu = new Discord.MessageActionRow().addComponents(
new Discord.MessageSelectMenu()
.setPlaceholder("Renk rollerinizi seçin.")
.setCustomId("renkMenu")
.addOptions([
    { label: `Kırmızı`, value: "k", emoji: `` },
    { label: `Turuncu`, value: "t", emoji: `` },
    { label: `Yeşil`, value: "y", emoji: `` },
    { label: `Lacivert`, value: "l", emoji: `` },
    { label: `Mor`, value: "m", emoji: `` },,
    { label: `Pembe`, value: "p", emoji: `` },
        
        ])
        );
        
        message.channel.send({
        content: `${config.Emojies.Star} Renk rollerini almak için aşağıda bulunan menüyü kullanınız.`,
        components: [renkMenu],
        });

  }}
