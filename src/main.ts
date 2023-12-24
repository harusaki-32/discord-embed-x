import { Client, Message, Interaction, CommandInteraction } from "discord.js";
import { config } from "dotenv";
import { convertUrl } from "./components/convertUrl";

config();

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"],
});

client.once("ready", () => {
  console.log(`準備完了！`);
  console.log(`${client.user?.username} でログインしています`);
});

client.on("messageCreate", async (message: Message) => {
  if (message.author.bot) return;
  
  const url = convertUrl(message.content);
  if (!url) return;

  await message.reply(url);
});

client.login(process.env.DISCORD_TOKEN);