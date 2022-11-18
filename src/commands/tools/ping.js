const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns my ping!"),
  async execute(interaction) {
    await interaction.replay({
      content: "hello there", //`API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`,
    });
  },
};
//ephemeral true, esconde el mensaje de las demas personas
