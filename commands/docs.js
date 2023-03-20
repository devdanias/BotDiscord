const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions({
                label: "javascript",
                description: "A documentação de Javascript",
                value: "javascript"
                },
                {
                    label: "python",
                    description: "A documentação de Python",
                    value: "python"
                },
                {
                    label: "C#",
                    description: "A documentação de C#",
                    value: "csharp"
                },
                {
                    label: "discord.js",
                    description: "A documentação de Discord.js",
                    value: "discordjs"
                }
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que quiser"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das techs abaixo:", components: [row]})
    }
}