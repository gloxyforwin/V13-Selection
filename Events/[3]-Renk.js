const Discord = require('discord.js');
const config = require('../config.json')

/**@param {Discord.Client} client
 * @param {Discord.interactionCreate} interactionCreate
 */

module.exports = async (interaction, client) => {
if(!interaction.isSelectMenu()) return;
if (interaction.customId === "renkMenu") {
const roller = [config.Renk.Kırmızı, config.Renk.Turuncu, config.Renk.Lacivert, config.Renk.Yeşil, config.Renk.Mor, config.Renk.Pembe]
await Object.keys(config.Renk).forEach(async(obje) => {
if(obje.toLowerCase().charAt(0) != interaction.values[0]) {
    await interaction.member.roles.remove(config.Renk[obje]).catch(e => {})
} else {
    interaction.member.roles.add(config.Renk[obje]).catch(e => {})
} 
  
})
await interaction.deferReply({ephemeral: true}) 
await interaction.followUp({content: `Rollerin düzenlendi!`, ephemeral: true})
}
}