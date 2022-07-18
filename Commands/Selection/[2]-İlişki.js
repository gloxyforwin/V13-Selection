const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: 'ilişki',
    description: 'İlişki Rol',
    aliases: ['ilişki', 'iliski'],
    usage: '.ilişki',
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

const iliskiMenu = new Discord.MessageActionRow().addComponents(
    new Discord.MessageSelectMenu()
      .setPlaceholder("İlişki durumunuzu seçin.")
      .setCustomId("iliskiMenu")
      .addOptions([
        { label: `Sevgilim Var`, value: "var", emoji: `981173367652618280` },
        { label: `Sevgilim Yok`, value: "yok", emoji: `981173255048159252` },
      ])
  );

  message.channel.send({
    content: `${config.Emojies.Star} İlişki durumunuza uygun rollerini almak için aşağıda bulunan menüyü kullanınız.`,
    components: [iliskiMenu],
  });

  }}