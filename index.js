const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();

client.build();
client.on("ready",()=>{
      client.user.setActivity(`${client.botconfig.DefaultPrefix}help | ${client.guilds.cache.size} Guilds | ${Math.ceil(client.users.cache.size/1000)}k Members`, { type: "PLAYING"})
})
module.exports = client; //;-;
