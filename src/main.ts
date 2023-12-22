import { Client, Message, Interaction, CommandInteraction } from "discord.js";
import { config } from "dotenv";

config();

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"],
});

client.once("ready", () => {
  console.log(`準備完了！`);
  console.log(`${client.user?.username} でログインしています`);
});

client.on("messageCreate", (message: Message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("https://twitter.com/")) {
    message.reply("twitter");
  }
});

client.login(process.env.DISCORD_TOKEN);