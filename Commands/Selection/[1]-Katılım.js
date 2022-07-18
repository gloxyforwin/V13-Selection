const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: 'katılım',
    description: 'Katılım Rolleri',
    aliases: ['katılım'],
    usage: '.katılım',
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

const button1 = new Discord.MessageButton()
.setCustomId("b1")
.setLabel("Çekiliş Katılımcısı 🎉")
.setStyle("DANGER")
const button2 = new Discord.MessageButton()
.setCustomId("b2")
.setLabel("Etkinlik Katılımcısı 🎉")
.setStyle("DANGER")


const row = new Discord.MessageActionRow().addComponents(button1, button2)
message.channel.send({content: `
Sunucuda sizleri rahatsız etmemek için \`\`@everyone\`\` veya \`\`@here\`\` atmayacağız. Sadece isteğiniz doğrultusunda aşağıda bulunan tepkilere tıklarsanız Çekiliş ve Etkinlikler'den haberdar olacaksınız.

\`\`⦁\`\` Eğer <@&${config.Katılım.EtkinlikKatılımcısı}> Rolünü alırsanız sunucumuzda düzenlenecek olan Dc,Vk gibi etkinliklerden haberdar olabilirsiniz

\`\`⦁\`\` Eğer <@&${config.Katılım.ÇekilişKatılımcısı}> Rolünü alırsanız sunucumuzda sıkça  vereceğimiz Nitro.Spotify,Netflix,Deezer,Exxen ve daha nice ödüllerin bulunduğu çekilişlerden haberdar olabilirsiniz

\`\`>\`\` \`\`Çekilişlerimizden haberdar olmak için\`\` = <@&${config.Katılım.ÇekilişKatılımcısı}>
\`\`>\`\` \`\`Etkinliklerimizden haberdar olmak için\`\` = <@&${config.Katılım.EtkinlikKatılımcısı}>`, components: [row]})}}
