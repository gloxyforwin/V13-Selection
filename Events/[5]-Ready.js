const Discord = require('discord.js');
const config = require("../config.json")
const { joinVoiceChannel } = require('@discordjs/voice');
/**@param {Discord.Client} client
 * @param {Discord.messageCreate} ready
 */

 module.exports = async (message,client) => {

    client.user.setPresence({activities: [{name: config.Bot.Activity}], status: "dnd"})
    console.log("[+] Bota " + client.user.username + " adıyla giriş yapıldı!");

    joinVoiceChannel({
      channelId: config.Bot.VoiceChannelID,
      guildId: config.Bot.GuildID,
      adapterCreator: client.guilds.cache.get(config.Bot.GuildID).voiceAdapterCreator
  }
  
  );
      
 }