const { Events } = require('discord.js');
const { logChannel } = require('../config.json');

module.exports = {
  name: Events.GuildMemberAdd,
  execute(member) {
    const log = member.channels.cache.get(logChannel);
    /* const embed = new EmbedBuilder()
      .setAuthor(member.user.tag, member.user.displayAvatarURL)
      .setTitle('Member joined')
      .setDescription(`${member}, member # ${member.guild.members.size} to join. \ncreated ${member.user.createdTimestamp}`)
      .setTimestamp()
      .setColor('BLUE')
      .setFooter(`ID: ${member.id}`); */
    log.send('Test');
    console.log(`A new user, ${member.user.tag} has joined.`);
  },
};