const { SlashCommandBuilder } = require('discord.js');
module.exports = {

  data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Deletes a set amount of messages.')
    .addIntegerOption(option =>
      option.setName('deletions')
        .setDescription('Number of messages to delete')
        .setRequired(true)),
  async execute(interaction) {
    const amount = interaction.options.getInteger('deletions');
    await interaction.channel.bulkDelete(amount).then(() => interaction.reply({ content: `Deleted ${amount} messages.`, ephemeral:true }));
  },
};