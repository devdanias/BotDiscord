const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlist de estudos"),
    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/album/6FgiikrGyDhzUvZJCVSIzi?si=VZHGPca4RXadRgCs_1RKfw")
    }

}