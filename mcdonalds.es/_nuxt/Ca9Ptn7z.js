function g(t) {
  return typeof t != "string"
    ? ""
    : t
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
function u(t) {
  return /^(https?:\/\/)[^\s$.?#].[^\s]*$/i.test(t);
}
const l = /[^\s@]+@[^\s@]+\.[^\s@]+/;
function d(t) {
  return new RegExp(`^${l.source}$`).test(t);
}
function p(t) {
  return new RegExp(`^mailto:${l.source}$`).test(t);
}
function f(t) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/®/g, "")
    .replace(/™/g, "");
}
const i = {
    red: "text-red-500",
    gradient: "bg-gradient-loyalty text-transparent bg-clip-text",
    gold: "text-surface-gold",
    coffee: "text-[#C2945C]",
    blue: "text-blue-500",
    orange: "text-surface-gold",
    loyalty_red: "bg-gradient-loyalty text-transparent bg-clip-text",
  },
  m = (t) => {
    if (t)
      return t.map((r) => ({
        word: r.word || "",
        color: (r.word_color && i[r.word_color]) || "",
      }));
  };
function y(t) {
  const r = {
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo",
    festive: "Festivo",
  };
  return t
    .split(", ")
    .map((e) => r[e.trim()] || e)
    .join(", ");
}
const $ = (t) =>
    `${((e) => {
      let o = 0;
      for (let a = 0; a < e.length; a++) {
        const s = e.charCodeAt(a);
        ((o = (o << 5) - o + s), (o = o & o));
      }
      return Math.abs(o).toString().substring(0, 6);
    })(t)}`,
  b = (t, r) => {
    if (r === "date" && t) {
      const e = new Date(t),
        o = e.getDate().toString().padStart(2, "0"),
        a = (e.getMonth() + 1).toString().padStart(2, "0"),
        s = e.getFullYear().toString().slice(-2),
        n = e.getHours().toString().padStart(2, "0"),
        c = e.getMinutes().toString().padStart(2, "0");
      return `${o}/${a}/${s} a las ${n}:${c}`;
    }
    return t;
  };
function h(t) {
  let r = "",
    e = "",
    o = "",
    a = "";
  if (t)
    for (const n of t)
      switch (n.types[0]) {
        case "street_number": {
          ((r = `${r}`), (a = `${n.long_name}`));
          break;
        }
        case "route": {
          r += n.short_name;
          break;
        }
        case "postal_code": {
          e = `${n.long_name}${e}`;
          break;
        }
        case "postal_code_suffix": {
          e = `${e}-${n.long_name}`;
          break;
        }
        case "locality":
          o = n.long_name;
          break;
      }
  const s = r + (a ? ` ${a}` : "") + (o ? `, ${o}` : "");
  return {
    address1: r,
    formattedAddress: s,
    locality: o,
    streetNumber: a,
    postcode: e,
  };
}
export {
  p as a,
  y as b,
  d as c,
  $ as d,
  h as e,
  b as f,
  m as g,
  u as i,
  f as n,
  g as t,
};
