const Discord = require('discord.js');
const config = require('../config.json')

/**@param {Discord.Client} client
 * @param {Discord.interactionCreate} interactionCreate
 */

module.exports = async (interaction, client) => {


if (interaction.isSelectMenu()) {

if (interaction.values[0] == "var") {

if (interaction.member.roles.cache.get(config.İlişki.SevgilimYok)) {
interaction.member.roles.remove(config.İlişki.SevgilimYok);
}

interaction.member.roles.add(config.İlişki.SevgilimVar);
interaction.reply({ content: `Üzerinize <@&${config.İlişki.SevgilimVar}> rolü verilmiştir.`, ephemeral: true });

} else if (interaction.values[0] == "yok") {
    
if (interaction.member.roles.cache.get(config.İlişki.SevgilimVar)) {
interaction.member.roles.remove(config.İlişki.SevgilimVar);
}

interaction.member.roles.add(config.İlişki.SevgilimYok);
interaction.reply({ content: `Üzerinize <@&${config.İlişki.SevgilimYok}> rolü verilmiştir.`, ephemeral: true });
        }
      }

 
}