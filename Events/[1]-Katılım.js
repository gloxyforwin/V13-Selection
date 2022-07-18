const Discord = require('discord.js');
const config = require("../config.json")

/**@param {Discord.Client} client
 * @param {Discord.interactionCreate} interactionCreate
 */

module.exports = async (interaction, client) => {

if (interaction.isButton()) {

if (interaction.customId === "b1") {

interaction.member.roles.cache.get(config.Katılım.ÇekilişKatılımcısı) ? interaction.member.roles.remove(config.Katılım.ÇekilişKatılımcısı) : interaction.member.roles.add(config.Katılım.ÇekilişKatılımcısı)
const returnText = interaction.member.roles.cache.get(config.Katılım.ÇekilişKatılımcısı) ? `<@&${config.Katılım.ÇekilişKatılımcısı}> rolü üzerinizden kaldırıldı.` : `<@&${config.Katılım.ÇekilişKatılımcısı}> rolü üzerinize eklendi.` 

await interaction.reply({ content: returnText, ephemeral: true})
}
if (interaction.customId === "b2") {

interaction.member.roles.cache.get(config.Katılım.EtkinlikKatılımcısı) ? interaction.member.roles.remove(config.Katılım.EtkinlikKatılımcısı) : interaction.member.roles.add(config.Katılım.EtkinlikKatılımcısı)
const returnText = interaction.member.roles.cache.get(config.Katılım.EtkinlikKatılımcısı) ? `<@&${config.Katılım.EtkinlikKatılımcısı}> rolü üzerinizden kaldırıldı.` : `<@&${config.Katılım.EtkinlikKatılımcısı}> rolü üzerinize eklendi.` 

await interaction.deferReply({ephemeral: true})
await interaction.followUp({ content: returnText, ephemeral: true})
}
}}
