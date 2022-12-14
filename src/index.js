import { config } from "dotenv";
import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import requestSupport from "./commands/requestSupport.js";
import rolesCommand from "./commands/roles.js";

config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
],
 });

 const rest = new REST({ version: '10'}).setToken(TOKEN);

client.on("ready", () => { console.log(`${client.user.tag}/(${client.user.id}) has initialized. Awaiting operating parameters...`); })


client.on('interactionCreate', (interaction) => {

  if (interaction.isChatInputCommand()) {
    console.log('hello friend');
    interaction.reply({ content: 'Request has been recieved...' });
  }

});


async function main() {

    const commands = [requestSupport, rolesCommand];

      try{
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
          body: commands,
        });
        client.login(TOKEN);
      } catch (err) {
        console.log(err);
      }
}

main();
