import { u as h } from "./D8jQnJCR.js";
import { s as m, w as c } from "./X_wUNWL3.js";
const d = c({
    paragraph: ({ children: t }) => {
      const e = t.join("");
      return e.trim() === "" ? "<br/><br/>" : e;
    },
    strong: ({ children: t }) => `<strong>${t.join("")}</strong>`,
    em: ({ children: t }) => `<em>${t.join("")}</em>`,
    heading1: ({ children: t }) => `<h1>${t.join("")}</h1>`,
    heading2: ({ children: t }) => `<h2>${t.join("")}</h2>`,
    heading3: ({ children: t }) => `<h3>${t.join("")}</h3>`,
    heading4: ({ children: t }) => `<h4>${t.join("")}</h4>`,
    heading5: ({ children: t }) => `<h5>${t.join("")}</h5>`,
    heading6: ({ children: t }) => `<h6>${t.join("")}</h6>`,
    listItem: ({ children: t }) =>
      `<li style="margin-bottom: 0.5em;">${t.join("")}</li>`,
    oListItem: ({ children: t }) =>
      `<li style="margin-bottom: 0.5em;">${t.join("")}</li>`,
    list: ({ children: t }) =>
      `<ul style="list-style-type: disc; padding-left: 1.5em; margin: 1.5em 0;">${t.join("")}</ul>`,
    oList: ({ children: t }) =>
      `<ol style="list-style-type: decimal; padding-left: 1.5em; margin: 1.5em 0;">${t.join("")}</ol>`,
    hyperlink: ({ node: t, children: e }) => {
      const r = t.spans?.some((a) => a.type === "strong"),
        o = h().asLinkCustom(t.data) || "",
        n = o.match(/^\/popups\/(.+)$/),
        s = `<a data-gtm ${n && n[1] ? `data-popup=${n[1]} rel="nofollow noopener"` : ""} href="${o}" class="border-2 border-transparent underline" style="color: #006bae; outline: none;" onfocus="this.style.borderColor='#959595'; this.style.borderWidth='2px'; this.style.borderStyle='solid';" onblur="this.style.borderColor='transparent';">${e.join("")}</a>`;
      return r ? `<strong>${s}</strong>` : s;
    },
    span: ({ text: t, node: e }) => {
      const r = e.spans || [];
      if (!r || r.length === 0) return t;
      let o = t;
      const n = [...r].sort((i, s) => s.start - i.start);
      for (const i of n) {
        const s = o.slice(0, i.start),
          a = o.slice(i.start, i.end),
          l = o.slice(i.end);
        switch (i.type) {
          case "strong":
            o = `${s}<strong>${a}</strong>${l}`;
            break;
          case "em":
            o = `${s}<em>${a}</em>${l}`;
            break;
        }
      }
      return o;
    },
  }),
  $ = (t) =>
    c({
      paragraph: ({ children: e }) => {
        const r = e.join("");
        return r.trim() === "" ? "<br/><br/>" : r;
      },
      strong: ({ children: e }) => `<strong>${e.join("")}</strong>`,
      em: ({ children: e }) => `<em>${e.join("")}</em>`,
      heading1: ({ children: e }) => `<h1>${e.join("")}</h1>`,
      heading2: ({ children: e }) => `<h2>${e.join("")}</h2>`,
      heading3: ({ children: e }) => `<h3>${e.join("")}</h3>`,
      heading4: ({ children: e }) => `<h4>${e.join("")}</h4>`,
      heading5: ({ children: e }) => `<h5>${e.join("")}</h5>`,
      heading6: ({ children: e }) => `<h6>${e.join("")}</h6>`,
      listItem: ({ children: e }) =>
        `<li style="margin-bottom: 0.5em;">${e.join("")}</li>`,
      oListItem: ({ children: e }) =>
        `<li style="margin-bottom: 0.5em;">${e.join("")}</li>`,
      list: ({ children: e }) =>
        `<ul style="list-style-type: disc; padding-left: 1.5em; margin: 1.5em 0;">${e.join("")}</ul>`,
      oList: ({ children: e }) =>
        `<ol style="list-style-type: decimal; padding-left: 1.5em; margin: 1.5em 0;">${e.join("")}</ol>`,
      hyperlink: ({ node: e, children: r }) => {
        const o = h().asLinkCustom(e.data) || "",
          n = o.match(/^\/popups\/(.+)$/);
        return `<a data-gtm ${n && n[1] ? `data-popup=${n[1]} rel="nofollow noopener"` : ""} href="${o}" class="border-2 border-transparent underline" style="color: ${t}; outline: none;" onfocus="this.style.borderColor='#959595'; this.style.borderWidth='2px'; this.style.borderStyle='solid';" onblur="this.style.borderColor='transparent';">${r.join("")}</a>`;
      },
      span: ({ text: e, node: r }) => {
        const o = r.spans || [];
        if (!o || o.length === 0) return e;
        let n = e;
        const i = [...o].sort((s, a) => a.start - s.start);
        for (const s of i) {
          const a = n.slice(0, s.start),
            l = n.slice(s.start, s.end),
            p = n.slice(s.end);
          switch (s.type) {
            case "strong":
              n = `${a}<strong>${l}</strong>${p}`;
              break;
            case "em":
              n = `${a}<em>${l}</em>${p}`;
              break;
          }
        }
        return n;
      },
    }),
  y = (t) => (t ? m(t, d).join("") : ""),
  j = (t, e = "white") => {
    if (!t) return "";
    const r = $(e);
    return m(t, r).join("");
  };
export { j as a, y as s };
