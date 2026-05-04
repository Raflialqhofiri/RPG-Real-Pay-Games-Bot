import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Bot hidup 🚀");
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).send("ok");
    await bot.handleUpdate(req.body);
    return;
  }

  return res.status(200).send("RUNNING");
}
