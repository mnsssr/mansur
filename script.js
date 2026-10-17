const CATS = [
  "Верхняя одежда",
  "Футболки и худи",
  "Штаны",
  "Обувь",
  "Аксессуары",
];
let items = [
  {
    id: 1,
    brand: "Carhartt WIP",
    name: "Куртка Detroit",
    cat: 0,
    size: "L",
    price: 14500,
    old: 19800,
    cond: "Отличное",
    tone: "#c9b79c",
    ago: 1,
  },
  {
    id: 2,
    brand: "Nike",
    name: "Air Force 1 Low, белые",
    cat: 3,
    size: "42",
    price: 8900,
    cond: "Хорошее",
    tone: "#e6e6e3",
    ago: 2,
  },
  {
    id: 3,
    brand: "Stüssy",
    name: "Футболка 8 Ball",
    cat: 1,
    size: "M",
    price: 4200,
    old: 5500,
    cond: "Новое",
    tone: "#d7d3c7",
    ago: 3,
  },
  {
    id: 4,
    brand: "Levi’s",
    name: "Джинсы 501, 90-е",
    cat: 2,
    size: "32",
    price: 6300,
    cond: "Хорошее",
    tone: "#9fb0c4",
    ago: 4,
  },
  {
    id: 5,
    brand: "Arc’teryx",
    name: "Куртка Beta LT",
    cat: 0,
    size: "M",
    price: 48000,
    old: 56000,
    cond: "Отличное",
    tone: "#8a9a8f",
    ago: 1,
  },
  {
    id: 6,
    brand: "New Balance",
    name: "574 Legacy, серые",
    cat: 3,
    size: "43",
    price: 7400,
    cond: "Отличное",
    tone: "#bfbfc2",
    ago: 5,
  },
  {
    id: 7,
    brand: "Acne Studios",
    name: "Шарф из шерсти",
    cat: 4,
    size: "Один размер",
    price: 5800,
    old: 9000,
    cond: "Хорошее",
    tone: "#d9b8b0",
    ago: 6,
  },
  {
    id: 8,
    brand: "Dickies",
    name: "Брюки 874 Work Pant",
    cat: 2,
    size: "34",
    price: 3900,
    cond: "Новое",
    tone: "#a8a38f",
    ago: 2,
  },
  {
    id: 9,
    brand: "Champion",
    name: "Худи Reverse Weave",
    cat: 1,
    size: "XL",
    price: 5100,
    cond: "С следами носки",
    tone: "#b9bcc6",
    ago: 7,
  },
  {
    id: 10,
    brand: "Salomon",
    name: "XT-6, чёрные",
    cat: 3,
    size: "41",
    price: 15900,
    old: 18500,
    cond: "Отличное",
    tone: "#8f8f93",
    ago: 3,
  },
  {
    id: 11,
    brand: "Patagonia",
    name: "Флис Better Sweater",
    cat: 0,
    size: "S",
    price: 9200,
    cond: "Хорошее",
    tone: "#b7a58a",
    ago: 4,
  },
  {
    id: 12,
    brand: "Casio",
    name: "Часы F-91W",
    cat: 4,
    size: "Один размер",
    price: 2100,
    cond: "Новое",
    tone: "#c7c7c2",
    ago: 8,
  },
  {
    id: 13,
    brand: "Adidas",
    name: "Samba OG",
    cat: 3,
    size: "42",
    price: 7800,
    cond: "Отличное",
    tone: "#d4d0c8",
    ago: 1,
  },
  {
    id: 14,
    brand: "The North Face",
    name: "Пуховик Nuptse",
    cat: 0,
    size: "M",
    price: 21000,
    old: 27000,
    cond: "Хорошее",
    tone: "#a9a9b0",
    ago: 2,
  },
  {
    id: 15,
    brand: "Supreme",
    name: "Худи Box Logo",
    cat: 1,
    size: "L",
    price: 32000,
    cond: "Отличное",
    tone: "#b8b8bd",
    ago: 3,
  },
  {
    id: 16,
    brand: "Wrangler",
    name: "Джинсы Texas",
    cat: 2,
    size: "33",
    price: 4800,
    cond: "Хорошее",
    tone: "#97a4b3",
    ago: 5,
  },
  {
    id: 17,
    brand: "Converse",
    name: "Chuck 70 High",
    cat: 3,
    size: "41",
    price: 6900,
    cond: "Новое",
    tone: "#cfcfcb",
    ago: 4,
  },
  {
    id: 18,
    brand: "Ralph Lauren",
    name: "Поло Custom Fit",
    cat: 1,
    size: "M",
    price: 3600,
    cond: "Хорошее",
    tone: "#a8b3bf",
    ago: 6,
  },
  {
    id: 19,
    brand: "Maison Margiela",
    name: "Кожаный ремень",
    cat: 4,
    size: "90 см",
    price: 6500,
    old: 9800,
    cond: "Отличное",
    tone: "#9a9690",
    ago: 2,
  },
  {
    id: 20,
    brand: "Patagonia",
    name: "Шорты Baggies",
    cat: 2,
    size: "M",
    price: 4100,
    cond: "Хорошее",
    tone: "#a3aea6",
    ago: 7,
  },
  {
    id: 21,
    brand: "Stone Island",
    name: "Свитшот с патчем",
    cat: 1,
    size: "L",
    price: 12900,
    old: 16500,
    cond: "Отличное",
    tone: "#9da3a0",
    ago: 1,
  },
  {
    id: 22,
    brand: "Dr. Martens",
    name: "Ботинки 1460",
    cat: 3,
    size: "43",
    price: 11200,
    cond: "Хорошее",
    tone: "#8c8a88",
    ago: 5,
  },
  {
    id: 23,
    brand: "Barbour",
    name: "Куртка Beacon",
    cat: 0,
    size: "L",
    price: 17500,
    cond: "Отличное",
    tone: "#9b9a8c",
    ago: 3,
  },
  {
    id: 24,
    brand: "Carhartt WIP",
    name: "Кепка Watch Hat",
    cat: 4,
    size: "Один размер",
    price: 2300,
    cond: "Новое",
    tone: "#b3aaa0",
    ago: 9,
  },
  {
    id: 25,
    brand: "Uniqlo U",
    name: "Футболка оверсайз",
    cat: 1,
    size: "S",
    price: 1500,
    cond: "Новое",
    tone: "#d6d6d8",
    ago: 6,
  },
  {
    id: 26,
    brand: "A.P.C.",
    name: "Джинсы Petit New Standard",
    cat: 2,
    size: "30",
    price: 7900,
    old: 11000,
    cond: "Отличное",
    tone: "#8e99a8",
    ago: 2,
  },
  {
    id: 27,
    brand: "Maison Kitsuné",
    name: "Худи Fox",
    cat: 1,
    size: "M",
    price: 8700,
    cond: "Хорошее",
    tone: "#bdb7b9",
    ago: 8,
  },
  {
    id: 28,
    brand: "Ray-Ban",
    name: "Очки Wayfarer",
    cat: 4,
    size: "Один размер",
    price: 5400,
    cond: "Отличное",
    tone: "#a5a5a5",
    ago: 4,
  },
  {
    id: 29,
    brand: "ASICS",
    name: "Gel-Kayano 14",
    cat: 3,
    size: "42",
    price: 9800,
    cond: "Отличное",
    tone: "#c3c4c9",
    ago: 3,
  },
  {
    id: 30,
    brand: "Helly Hansen",
    name: "Дождевик Moss",
    cat: 0,
    size: "M",
    price: 6400,
    cond: "Хорошее",
    tone: "#b0b19a",
    ago: 7,
  },
  {
    id: 31,
    brand: "Nike",
    name: "Штаны Tech Fleece",
    cat: 2,
    size: "L",
    price: 5600,
    cond: "Хорошее",
    tone: "#7f8084",
    ago: 5,
  },
  {
    id: 32,
    brand: "Fjällräven",
    name: "Рюкзак Kånken",
    cat: 4,
    size: "Один размер",
    price: 4300,
    cond: "Отличное",
    tone: "#b9a99a",
    ago: 6,
  },
];
const S = {
  cat: -1,
  q: "",
  brand: "",
  size: "",
  max: 0,
  sort: "new",
  fav: false,
};
let favs = new Set();
try {
  favs = new Set(JSON.parse(localStorage.getItem("fav") || "[]"));
} catch (e) {}
const $ = (s) => document.querySelector(s);
const fmt = (n) => n.toLocaleString("ru-RU") + " ₽";
function saveFav() {
  try {
    localStorage.setItem("fav", JSON.stringify([...favs]));
  } catch (e) {}
}
function toast(t) {
  const e = $("#toast");
  e.textContent = t;
  e.classList.add("on");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => e.classList.remove("on"), 1800);
}
function tabs() {
  const all = ["Все", ...CATS];
  $("#tabs").innerHTML = all
    .map(
      (c, i) =>
        `<button data-c="${i - 1}" aria-pressed="${S.cat === i - 1}">${c}</button>`,
    )
    .join("");
}
function opts() {
  const b = [...new Set(items.map((i) => i.brand))].sort(),
    s = [...new Set(items.map((i) => i.size))].sort();
  $("#brand").innerHTML =
    '<option value="">Все бренды</option>' +
    b
      .map((x) => `<option ${S.brand === x ? "selected" : ""}>${x}</option>`)
      .join("");
  $("#size").innerHTML =
    '<option value="">Любой размер</option>' +
    s
      .map((x) => `<option ${S.size === x ? "selected" : ""}>${x}</option>`)
      .join("");
}
function render(a) {
  let r = items.filter(
    (i) =>
      (S.cat < 0 || i.cat === S.cat) &&
      (!S.brand || i.brand === S.brand) &&
      (!S.size || i.size === S.size) &&
      (!S.max || i.price <= S.max) &&
      (!S.fav || favs.has(i.id)) &&
      `${i.brand} ${i.name}`.toLowerCase().includes(S.q),
  );
  r.sort((a, b) =>
    S.sort === "asc"
      ? a.price - b.price
      : S.sort === "desc"
        ? b.price - a.price
        : a.ago - b.ago,
  );
  $("#count").textContent =
    r.length +
    " " +
    (r.length % 10 === 1 && r.length % 100 !== 11
      ? "вещь"
      : [2, 3, 4].includes(r.length % 10) &&
          ![12, 13, 14].includes(r.length % 100)
        ? "вещи"
        : "вещей");
  $("#fc").textContent = favs.size;
  $("#grid").classList.toggle("anim", !!a);
  $("#grid").innerHTML = r.length
    ? r
        .map(
          (i, n) => `
  <div style="--i:${Math.min(n, 12)}">
    <div style="position:relative"><button class="card" data-o="${i.id}"><div class="pic" style="--tone:${i.tone}"><span>${i.brand}</span>${i.sold ? "<i>Продано</i>" : i.old ? `<i>−${Math.round(100 - (i.price / i.old) * 100)}%</i>` : ""}</div></button>
    <button class="heart" data-f="${i.id}" aria-pressed="${favs.has(i.id)}" aria-label="В избранное">${favs.has(i.id) ? "♥" : "♡"}</button></div>
    <div class="meta"><b>${i.brand}</b><span class="sz">${i.size}</span></div>
    <div class="nm">${i.name}</div>
    <div class="pr">${fmt(i.price)}${i.old ? `<s>${fmt(i.old)}</s>` : ""}</div>
  </div>`,
        )
        .join("")
    : '<div class="empty" style="grid-column:1/-1">Ничего не найдено. Сбросьте фильтры или поменяйте запрос.</div>';
}
const calm = matchMedia("(prefers-reduced-motion:reduce)").matches;
function pop(id) {
  if (calm) return;
  document
    .querySelectorAll('.heart[data-f="' + id + '"]')
    .forEach((b) =>
      b.animate(
        [
          { transform: "scale(.7)" },
          { transform: "scale(1.25)", offset: 0.6 },
          { transform: "scale(1)" },
        ],
        { duration: 450, easing: "cubic-bezier(.22,.61,.36,1)" },
      ),
    );
}
let cur = null;
function order(id) {
  cur = items.find((x) => x.id === id);
  $("#dlg").close();
  $("#osum").textContent =
    cur.brand + " — " + cur.name + ", " + cur.size + ", " + fmt(cur.price);
  $("#orderDlg").showModal();
}
$("#ox").onclick = () => $("#orderDlg").close();
$("#of").onsubmit = async (e) => {
  e.preventDefault();
  const f = new FormData(e.target),
    b = $("#osub");
  b.disabled = true;
  b.textContent = "Отправляем…";
  try {
    const r = await fetch("/.netlify/functions/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item: {
          brand: cur.brand,
          name: cur.name,
          size: cur.size,
          price: cur.price,
        },
        name: f.get("name"),
        contact: f.get("contact"),
        addr: f.get("addr"),
        website: f.get("website"),
      }),
    });
    if (!r.ok) throw 0;
    cur.sold = true;
    e.target.reset();
    $("#orderDlg").close();
    render();
    toast("Заказ отправлен. Продавец свяжется с вами");
  } catch (x) {
    toast("Не удалось отправить. Попробуйте ещё раз");
  }
  b.disabled = false;
  b.textContent = "Отправить заказ";
};
function open(id) {
  const i = items.find((x) => x.id === id),
    d = $("#dlg");
  d.innerHTML = `<button class="x" data-close aria-label="Закрыть">×</button><div class="det"><div class="pic" style="--tone:${i.tone}"><span style="font-size:42px">${i.brand}</span></div>
  <div class="info"><div><div class="nm">${i.brand}</div><h2>${i.name}</h2></div>
  <div class="big">${fmt(i.price)}${i.old ? `<s style="font-size:15px;color:var(--mute);font-weight:400;margin-left:8px">${fmt(i.old)}</s>` : ""}</div>
  <dl><dt>Размер</dt><dd>${i.size}</dd><dt>Состояние</dt><dd>${i.cond}</dd><dt>Категория</dt><dd>${CATS[i.cat]}</dd><dt>Доставка</dt><dd>3–5 дней, от 390 ₽</dd></dl>
  ${i.sold ? '<button class="btn" disabled>Продано</button>' : `<button class="btn dark" data-buy="${i.id}">Купить</button>`}
  <button class="btn" data-offer="${i.id}">Предложить цену</button>
  <button class="btn" style="border-color:var(--line)" data-f="${i.id}" data-in>${favs.has(i.id) ? "Убрать из избранного" : "В избранное"}</button></div></div>`;
  d.showModal();
}
document.addEventListener("click", (e) => {
  const t = e.target.closest("button");
  if (!t) return;
  if (t.dataset.c !== undefined) {
    S.cat = +t.dataset.c;
    tabs();
    render(1);
  } else if (t.dataset.o) {
    open(+t.dataset.o);
  } else if (t.dataset.f) {
    const id = +t.dataset.f;
    favs.has(id) ? favs.delete(id) : favs.add(id);
    saveFav();
    render();
    pop(id);
    if (t.hasAttribute("data-in"))
      t.textContent = favs.has(id) ? "Убрать из избранного" : "В избранное";
  } else if (t.hasAttribute("data-close")) $("#dlg").close();
  else if (t.dataset.buy) {
    order(+t.dataset.buy);
  } else if (t.dataset.offer) {
    const v = prompt("Ваша цена, ₽");
    if (v) {
      $("#dlg").close();
      toast("Предложение " + fmt(+v) + " отправлено");
    }
  } else if (t.id === "onlyFav") {
    S.fav = !S.fav;
    t.setAttribute("aria-pressed", S.fav);
    t.style.borderColor = S.fav ? "var(--fg)" : "var(--line)";
    render(1);
  } else if (t.id === "sellBtn") $("#sellDlg").showModal();
  else if (t.id === "sx") $("#sellDlg").close();
});
["dlg", "sellDlg", "orderDlg"].forEach((id) =>
  $("#" + id).addEventListener("click", (e) => {
    if (e.target.id === id) e.target.close();
  }),
);
$("#q").oninput = (e) => {
  S.q = e.target.value.toLowerCase().trim();
  render(1);
};
$("#brand").onchange = (e) => {
  S.brand = e.target.value;
  render(1);
};
$("#size").onchange = (e) => {
  S.size = e.target.value;
  render(1);
};
$("#max").oninput = (e) => {
  S.max = +e.target.value || 0;
  render(1);
};
$("#sort").onchange = (e) => {
  S.sort = e.target.value;
  render(1);
};
$("#sf").querySelector("[name=cat]").innerHTML = CATS.map(
  (c, i) => `<option value="${i}">${c}</option>`,
).join("");
$("#sf").onsubmit = (e) => {
  e.preventDefault();
  const f = new FormData(e.target),
    tones = ["#c9b79c", "#9fb0c4", "#b9bcc6", "#d9b8b0", "#a8a38f", "#8a9a8f"];
  items.unshift({
    id: Date.now(),
    brand: f.get("brand").trim(),
    name: f.get("name").trim(),
    cat: +f.get("cat"),
    size: f.get("size").trim(),
    price: +f.get("price"),
    cond: f.get("cond"),
    tone: tones[items.length % tones.length],
    ago: 0,
  });
  e.target.reset();
  $("#sellDlg").close();
  S.cat = -1;
  S.brand = "";
  S.size = "";
  S.sort = "new";
  $("#sort").value = "new";
  tabs();
  opts();
  render(1);
  toast("Вещь опубликована");
};
tabs();
opts();
render(1);
