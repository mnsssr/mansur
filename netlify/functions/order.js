// Принимает заказ с сайта и отправляет его вам в Telegram.
// Токен и chat_id берутся из переменных окружения Netlify, в код их вписывать не нужно.
const esc = v => String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const cut = (v, n) => String(v ?? "").slice(0, n);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method not allowed" };

  let d;
  try { d = JSON.parse(event.body || "{}"); }
  catch { return { statusCode: 400, body: "Bad request" }; }

  if (d.website) return { statusCode: 200, body: "ok" }; // скрытое поле для ботов
  if (!d.name || !d.contact || !d.item) return { statusCode: 400, body: "Missing fields" };

  const { BOT_TOKEN, CHAT_ID } = process.env;
  if (!BOT_TOKEN || !CHAT_ID) return { statusCode: 500, body: "Bot is not configured" };

  const it = d.item;
  const text = [
    "🛍 <b>Новый заказ</b>",
    "",
    `<b>Вещь:</b> ${esc(cut(it.brand, 60))} — ${esc(cut(it.name, 100))}`,
    `<b>Размер:</b> ${esc(cut(it.size, 20))}`,
    `<b>Цена:</b> ${esc(cut(it.price, 12))} ₽`,
    "",
    `<b>Покупатель:</b> ${esc(cut(d.name, 60))}`,
    `<b>Контакт:</b> ${esc(cut(d.contact, 80))}`,
    `<b>Адрес:</b> ${esc(cut(d.addr, 200)) || "не указан"}`
  ].join("\n");

  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" })
  });

  return res.ok ? { statusCode: 200, body: "ok" } : { statusCode: 502, body: "Telegram error" };
};
