import { _ as u, A as c, m as p } from "./w36zW0QG.js";
import {
  A as i,
  O as t,
  P as y,
  l as _,
  _ as a,
  Z as l,
  N as o,
  W as h,
  a1 as k,
  $ as r,
  X as n,
  m as v,
} from "./CG2MQ2lF.js";
import { _ as x } from "./n9BDgNm5.js";
const w = {},
  $ = {
    class:
      "inline-flex py-1 px-2 flex-col items-center justify-center rounded-full bg-surface-green text-white font-bold text-body-xs hover:bg-surface-green-hover cursor-pointer focus-visible:border-2 focus-visible:border-surface-green-focus active:bg-surface-green-active disabled:bg-surface-green-disabled disabled:cursor-not-allowed disabled:text-text-tertiary capitalize",
  };
function C(e, s) {
  return (t(), i("span", $, [y(e.$slots, "default")]));
}
const f = u(w, [["render", C]]),
  L = _({
    name: "CardBlog",
    components: { MCDTag: f, MCDButton: p },
    inheritAttrs: !1,
    props: {
      image: { type: Object, default: () => null },
      title: { type: String, default: () => null },
      titleAs: {
        type: String,
        default: () => c.default.as,
        validator(e) {
          return Object.keys(c.as).includes(e);
        },
      },
      categorie: { type: String, required: !0 },
      duration: { type: Number, required: !0, validator: (e) => e > 0 },
      date: { type: Date, required: !0 },
      ctaLabel: { type: String, required: !0 },
      ctaLink: { type: String, required: !0 },
      mobileVersion: { type: Boolean, default: !1, required: !1 },
      isTransparent: { type: Boolean, default: !1, required: !1 },
    },
    emits: ["card-click"],
    setup(e) {
      return { titleAsProp: v(() => e.titleAs) };
    },
  }),
  B = {
    class: "main flex flex-col items-start justify-between h-full gap-4 flex-1",
  },
  j = { class: "flex flex-col items-start justify-center gap-3 flex-1" },
  D = {
    class:
      "flex flex-row items-center justify-between w-full tablet:gap-2 tablet:justify-start",
  },
  S = { key: 1, class: "font-bold text-text-secondary text-body-s" },
  q = {
    key: 0,
    class:
      "text-title-s tablet:text-title-m self-stretch font-bold line-clamp-4",
  },
  A = {
    class: "other flex flex-col items-end justify-between gap-4 self-stretch",
  };
function T(e, s, V, M, N, z) {
  const b = f,
    d = p,
    m = x;
  return (
    t(),
    i(
      "div",
      {
        class: n([
          "flex pb-0.5 containerBlog max-w-[328px]",
          e.mobileVersion ? "tablet:max-w-[348px]" : "desktop:max-w-[373px]",
        ]),
      },
      [
        a(
          "div",
          {
            class: n([
              "flex p-4 items-start flex-1 gap-4 rounded-16 h-full",
              e.isTransparent
                ? "bg-transparent"
                : "bg-white hover:shadow-blur shadow-long-blur",
            ]),
          },
          [
            a("div", B, [
              a("div", j, [
                a("div", D, [
                  e.categorie
                    ? (t(),
                      o(
                        b,
                        { key: 0 },
                        { default: h(() => [k(r(e.categorie), 1)]), _: 1 },
                      ))
                    : l("", !0),
                  e.duration
                    ? (t(),
                      i(
                        "span",
                        S,
                        r(e.duration) +
                          " min | " +
                          r(new Date(e.date).toLocaleDateString("es-ES")),
                        1,
                      ))
                    : l("", !0),
                ]),
                e.title ? (t(), i("span", q, r(e.title), 1)) : l("", !0),
              ]),
              a(
                "div",
                {
                  class: n(e.mobileVersion ? "hidden" : "hidden desktop:block"),
                },
                [
                  e.ctaLink
                    ? (t(),
                      o(
                        d,
                        {
                          key: 0,
                          to: e.ctaLink,
                          label: e.ctaLabel,
                          size: "s",
                          "aria-label": `${e.ctaLabel} - ${e.title}`,
                          onClick:
                            s[0] || (s[0] = (g) => e.$emit("card-click")),
                        },
                        null,
                        8,
                        ["to", "label", "aria-label"],
                      ))
                    : l("", !0),
                ],
                2,
              ),
            ]),
            a("div", A, [
              e.image
                ? (t(),
                  o(
                    m,
                    {
                      key: 0,
                      image: { url: e.image.url, alt: "" },
                      "wrapper-class":
                        "rounded-4 w-[90px] h-[90px] object-cover",
                    },
                    null,
                    8,
                    ["image"],
                  ))
                : l("", !0),
              a(
                "div",
                {
                  class: n(e.mobileVersion ? "block" : "block desktop:hidden"),
                },
                [
                  e.ctaLink
                    ? (t(),
                      o(
                        d,
                        {
                          key: 0,
                          to: e.ctaLink,
                          label: e.ctaLabel,
                          size: "s",
                          "icon-name": "arrowsChevronRight",
                          shape: "icon",
                          "aria-label": `${e.ctaLabel} - ${e.title}`,
                          onClick:
                            s[1] || (s[1] = (g) => e.$emit("card-click")),
                        },
                        null,
                        8,
                        ["to", "label", "aria-label"],
                      ))
                    : l("", !0),
                ],
                2,
              ),
            ]),
          ],
          2,
        ),
      ],
      2,
    )
  );
}
const I = u(L, [
  ["render", T],
  ["__scopeId", "data-v-ccedadf0"],
]);
export { f as _, I as a };
