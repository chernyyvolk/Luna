import { config } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`${client.user.tag}/(${client.user.id}) has initialized. Awaiting operating parameters...`);
})

client.on('messageCreate', (message) => {
  console.log(message.content);
})
