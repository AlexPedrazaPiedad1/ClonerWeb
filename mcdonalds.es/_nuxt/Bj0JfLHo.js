import { u as j } from "./D8jQnJCR.js";
import {
  l as _,
  d as C,
  m as L,
  q as T,
  A as I,
  X as v,
  O as A,
} from "./CG2MQ2lF.js";
import { s as B, w as E } from "./X_wUNWL3.js";
import { _ as z } from "./w36zW0QG.js";
const P = ["innerHTML"],
  w = _({
    __name: "index",
    props: {
      richText: {},
      h1Colored: { type: Boolean },
      className: {},
      padding: { type: Boolean },
      headingIds: { type: Boolean },
      headingIdPrefix: {},
      blackLinks: { type: Boolean },
      smallText: { type: Boolean },
      customLinkLabels: {},
    },
    setup(r) {
      const e = r,
        $ =
          /^\s*(aqu[ií]|click|pincha|le[e|y]r?\s*m[aá]s|ver?\s*m[aá]s|click\s*aqu[ií]|pincha\s*aqu[ií])[.\s]*$/i,
        d = (t) => (t ? t.replace(/\/+$/, "").toLowerCase() : ""),
        n = C(0),
        b = E({
          heading1: ({ children: t }) => {
            const a = t.join("").replace(/([A-Z])\.\s+/g, "$1. "),
              s = e.h1Colored
                ? "h1-colored font-bold text-title-m tablet:text-title-l desktop:text-title-xl pl-2 pt-1 mb-4 tablet:mb-6 desktop:mb-8"
                : "text-title-m tablet:text-title-l desktop:text-title-xl",
              i = e.headingIds ? `${e.headingIdPrefix || ""}${n.value}` : "";
            return (n.value++, `<h1 id="${i}" class="${s}">${a}</h1>`);
          },
          heading2: ({ children: t }) => {
            const a = t.join("").replace(/([A-Z])\.\s+/g, "$1. "),
              s = e.h1Colored
                ? "h1-colored font-bold pl-2 pt-1 mb-4 tablet:mb-6 desktop:mb-8"
                : "",
              i = e.headingIds ? `${e.headingIdPrefix || ""}${n.value}` : "";
            return (n.value++, `<h2 id="${i}" class="${s}">${a}</h2>`);
          },
          heading3: ({ children: t }) => `<h3>${t.join("")}</h3>`,
          heading4: ({ children: t }) => `<h4>${t.join("")}</h4>`,
          heading5: ({ children: t }) => `<h5>${t.join("")}</h5>`,
          heading6: ({ children: t }) => {
            const a = t.join("");
            if (!a.trim()) return "";
            if (a.startsWith("*")) return `<h6 class="text-body-s">${a}</h6>`;
            const s = e.headingIds
              ? `${e.headingIdPrefix || ""}${n.value}`
              : "";
            return (
              n.value++,
              `<h6 id="${s}" class="text-body-m tablet:text-body-l mb-4 tablet:mb-6">${a}</h6>`
            );
          },
          paragraph: ({ children: t }) => {
            const a = t.join("");
            return a.trim()
              ? a.startsWith("*")
                ? `<p class="text-body-s">${a}</p>`
                : `<p class="${e.smallText ? "text-body-s" : "text-body-m tablet:text-body-l"} mb-4 tablet:mb-6">${a}</p>`
              : "";
          },
          preformatted: ({ text: t }) => `<pre><code>${t}</code></pre>`,
          strong: ({ children: t }) => `<strong>${t.join("")}</strong>`,
          em: ({ children: t }) => `<em>${t.join("")}</em>`,
          listItem: ({ children: t }) => `<li>${t.join("")}</li>`,
          oListItem: ({ children: t }) => `<li>${t.join("")}</li>`,
          list: ({ children: t }) => `<ul>${t.join("")}</ul>`,
          oList: ({ children: t }) => `<ol>${t.join("")}</ol>`,
          image: ({ node: t }) =>
            t.linkTo
              ? `<a href="${t.linkTo.url}"><img src="${t.url}" alt="${t.alt}"/></a>`
              : `<img src="${t.url}" alt="${t.alt}" class="py-2 tablet:py-4"/>`,
          embed: ({ node: t }) => `${t.oembed.html}`,
          hyperlink: ({ node: t, children: a }) => {
            const s = t.spans?.some((l) => l.type === "strong"),
              i = a.join("").replace(/\s+/g, " ").trim(),
              o = j().asLinkCustom(t.data) || "",
              x = $.test(i);
            let c = "";
            if (x) {
              const l = e.customLinkLabels || {},
                k = d(o),
                h = Object.keys(l).find((y) => d(y) === k);
              h
                ? (c = `aria-label="${l[h]}"`)
                : (c = `aria-label="Enlace a: ${o}"`);
            }
            const p = o.match(/^\/popups\/(.+)$/),
              g =
                p && p[1] ? `data-popup="${p[1]}" rel="nofollow noopener"` : "",
              f = e.blackLinks
                ? 'class="black-link rich-text-link"'
                : 'class="rich-text-link"',
              m = `<a ${c} data-gtm="" ${g} ${f} href="${o}">${i}</a>`;
            return s ? `<strong>${m}</strong>` : m;
          },
          label: ({ children: t }) => t.join(""),
          span: ({ text: t }) =>
            t.replace(
              `
`,
              "<br/>",
            ),
        }),
        u = L(() =>
          !e.richText || !Array.isArray(e.richText) || e.richText.length === 0
            ? ""
            : B(e.richText, b).join(""),
        );
      return (
        T(
          () => e.richText,
          () => {
            n.value = 0;
          },
          { immediate: !0 },
        ),
        (t, a) => (
          A(),
          I(
            "div",
            {
              class: v([
                "rich-text",
                r.className,
                { "px-4 tablet:px-6 desktop:px-[120px]": r.padding },
              ]),
              innerHTML: u.value,
            },
            null,
            10,
            P,
          )
        )
      );
    },
  }),
  H = z(w, [["__scopeId", "data-v-16c18d3b"]]);
export { H as _ };
