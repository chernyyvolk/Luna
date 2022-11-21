import { SlashCommandBuilder } from "@discordjs/builders";

const requestSupport = new SlashCommandBuilder()
    .setName('requestsupport')
    .setDescription('Request Support')
    .addStringOption((option) =>
        option
            .setName('supporttype')
            .setDescription('What Type of Support do you need?')
            .setRequired(true)
            .setChoices(
                {
                    name: 'Medical Support',
                    value: 'medical',
                },

                {
                    name: 'Ground Fire Support',
                    value: 'fire'
                },

                {
                    name: 'Ship Fire Support',
                    value: 'shipfire'
                },

                {
                    name: 'Evac Support',
                    value: 'evac'
                },

                {
                    name: 'Transport',
                    value: 'transport',
                },

                {
                    name: 'Refueling',
                    value: 'refuel',
                },
            )
    )
    .addStringOption((option) =>
        option
            .setName('location')
            .setDescription('Where is the Support Needed?').setRequired(true)
    )
    .addStringOption((option) =>
        option
            .setName('missiontime')
            .setDescription('How long will the mission take? For Medical how long do you have left?')
            .setRequired(true)
    )

export default requestSupport.toJSON();