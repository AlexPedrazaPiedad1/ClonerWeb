import { _ as D } from "./n9BDgNm5.js";
import { _ as A, m as N, ad as W, d as j } from "./w36zW0QG.js";
import { u as z } from "./CiCdwUBr.js";
import {
  l as b,
  A as g,
  O as o,
  _ as d,
  Q as F,
  Z as m,
  X as f,
  $ as h,
  N as v,
  W as T,
  a1 as $,
  m as _,
  u as w,
  U as E,
  Y as O,
  d as P,
  y as L,
  D as U,
  v as V,
} from "./CG2MQ2lF.js";
import { g as r } from "./DKtf60Sy.js";
import { S as B } from "./BWsqEc1I.js";
import { S as q } from "./Cpc1cBKW.js";
import { s as I } from "./C3J3pyEk.js";
import "./D8jQnJCR.js";
import "./Ca9Ptn7z.js";
import "./X_wUNWL3.js";
const R = b({
    inheritAttrs: !1,
    props: {
      title: { type: String, required: !0 },
      description: { type: String, required: !1, default: "" },
      cta: { type: Object, required: !1, default: void 0 },
      secondaryCta: { type: Object, required: !1, default: void 0 },
      image: { type: Object, required: !1, default: () => ({}) },
      showBlackFilter: { type: Boolean, default: !0, required: !1 },
      titleWidthClasses: {
        type: String,
        default: "md:max-w-[324px]",
        required: !1,
      },
      isFullWidth: { type: Boolean, default: !1, required: !1 },
    },
    setup(e) {
      const c = z(),
        a = _(() => {
          const n = w(e.image);
          if (!n || typeof n != "object") return;
          const t = w(c.isMobile),
            l = w(c.isTablet);
          return n[t ? "mobile" : l ? "tablet" : "desktop"]?.url || n.url;
        }),
        s = _(() => ({
          primary: { "w-fit": !!e.secondaryCta, "w-full": !e.secondaryCta },
          secondary: { "w-fit": !0 },
        })),
        u = _(() => e.isFullWidth);
      return { imageUrl: a, buttonClasses: s, debugFullWidth: u };
    },
  }),
  H = { class: "absolute z-0 top-0 left-0 w-full h-full" },
  Q = {
    key: 0,
    "aria-hidden": "true",
    class: "absolute top-0 left-0 w-full h-full bg-black/50",
  },
  X = {
    class:
      "flex flex-col items-start justify-end w-full h-full gap-6 pb-8 pl-6 pr-8 text-white md:pl-6 md:pb-8",
  },
  Y = { key: 0, class: "font-bold text-title-l desktop:text-title-xl" },
  Z = ["innerHTML"],
  G = { class: "flex flex-row flex-wrap w-full gap-3 md:w-fit" };
function J(e, c, a, s, u, n) {
  const t = D,
    l = N;
  return (
    o(),
    g(
      "div",
      {
        class: f([
          "w-full relative rounded-lg overflow-hidden drop-shadow-lg md:rounded-2xl flex flex-col justify-end",
          e.debugFullWidth
            ? " min-h-[430px] md:min-h-[318px] desktop:h-full "
            : " h-full min-h-[430px] ",
        ]),
      },
      [
        d("div", H, [
          F(
            t,
            {
              image: { url: e.imageUrl, alt: "" },
              "wrapper-class":
                "absolute top-0 left-0 z-0 object-cover w-full h-full",
            },
            null,
            8,
            ["image"],
          ),
          e.showBlackFilter ? (o(), g("div", Q)) : m("", !0),
        ]),
        d("div", X, [
          d(
            "div",
            { class: f(["flex flex-col gap-2 z-10", e.titleWidthClasses]) },
            [
              e.title ? (o(), g("span", Y, h(e.title), 1)) : m("", !0),
              e.description
                ? (o(),
                  g(
                    "p",
                    {
                      key: 1,
                      class: "lg:text-title-xs",
                      innerHTML: e.description,
                    },
                    null,
                    8,
                    Z,
                  ))
                : m("", !0),
            ],
            2,
          ),
          d("div", G, [
            e.cta
              ? (o(),
                v(
                  l,
                  {
                    key: 0,
                    variant: e.cta.color,
                    size: "s",
                    to: e.cta.to,
                    target: e.cta.target,
                    class: f(e.buttonClasses.primary),
                    onClick: e.cta.onClick,
                  },
                  { default: T(() => [$(h(e.cta.label), 1)]), _: 1 },
                  8,
                  ["variant", "to", "target", "class", "onClick"],
                ))
              : m("", !0),
            e.secondaryCta
              ? (o(),
                v(
                  l,
                  {
                    key: 1,
                    variant: e.secondaryCta.color,
                    to: e.secondaryCta.to,
                    target: e.secondaryCta.target,
                    size: "s",
                    class: f(e.buttonClasses.secondary),
                    onClick: e.secondaryCta.onClick,
                  },
                  { default: T(() => [$(h(e.secondaryCta.label), 1)]), _: 1 },
                  8,
                  ["variant", "to", "target", "class", "onClick"],
                ))
              : m("", !0),
          ]),
        ]),
      ],
      2,
    )
  );
}
const K = A(R, [["render", J]]),
  ee = b({
    inheritAttrs: !1,
    props: {
      title: { type: String, required: !0 },
      cards: { type: Array, default: [] },
    },
    setup() {
      const e = P(null),
        c = [
          "",
          "lg:order-3",
          "md:col-span-full lg:col-auto lg:order-2 lg:row-span-2",
        ];
      let a,
        s = [];
      const u = () => {
          (a && a.kill(),
            s.forEach((t) => t.kill()),
            (s = []),
            B.getAll().forEach((t) => {
              (t.trigger?.closest?.(".newsectionsinglecard--card") ||
                t.trigger === e.value) &&
                t.kill();
            }));
        },
        n = async () => {
          if (!e.value) return;
          (await V(),
            (a = r.timeline({
              scrollTrigger: {
                id: "sectionsinglecard--anims",
                trigger: e.value,
                start: "top 25%",
                markers: !1,
              },
            })),
            r.set(e.value, {
              backgroundColor: "white",
              willChange: "background-color",
            }));
          const t = r.to(e.value, {
            scrollTrigger: {
              trigger: e.value,
              start: "start center",
              markers: !1,
            },
            backgroundColor: "#FFBC0D",
            duration: 1,
            ease: "power2.out",
          });
          (t.eventCallback("onComplete", () => {
            e.value && r.set(e.value, { willChange: "auto" });
          }),
            t.scrollTrigger && s.push(t.scrollTrigger));
          const l = e.value.querySelector(".newsectionsinglecard--title");
          l &&
            q.create(l, {
              type: "lines",
              linesClass: "newsectionsinglecard--title-line",
              autoSplit: !0,
              mask: "lines",
              onSplit: (C) => {
                r.from(C.lines, {
                  yPercent: 100,
                  duration: 0.5,
                  stagger: 0.1,
                  opacity: 0,
                  ease: "power2.in",
                  scrollTrigger: { trigger: e.value, start: "start center" },
                });
              },
            });
          const i = e.value.querySelectorAll(".newsectionsinglecard--card");
          (a.from(
            i,
            { yPercent: 40, duration: 1.4, scale: 0.8, ease: "power2.out" },
            "<",
          ),
            i.forEach((C, x) => {
              const y = C,
                p = y.querySelector("img, .mcd-image-wrapper img");
              if (p) {
                r.set(p, {
                  scale: 1.12,
                  transformOrigin: "50% 100%",
                  y: "0%",
                  willChange: "transform",
                });
                const M = x === 0 ? 12 : x === 1 ? 18 : 15,
                  S = r.to(p, {
                    yPercent: M,
                    ease: "none",
                    scrollTrigger: {
                      trigger: y,
                      start: "top center+=200",
                      end: "bottom center-=200",
                      scrub: 0.8,
                      invalidateOnRefresh: !0,
                    },
                  }),
                  k = r.to(p, {
                    scale: 1.2,
                    ease: "none",
                    scrollTrigger: {
                      trigger: y,
                      start: "top center+=150",
                      end: "bottom center-=150",
                      scrub: 1.8,
                      invalidateOnRefresh: !0,
                    },
                  });
                (k.eventCallback("onComplete", () => {
                  r.set(p, { willChange: "auto" });
                }),
                  S.scrollTrigger && s.push(S.scrollTrigger),
                  k.scrollTrigger && s.push(k.scrollTrigger));
              }
            }));
        };
      return (
        L(() => {
          (r.registerPlugin(B), r.registerPlugin(q), n());
        }),
        U(() => {
          u();
        }),
        { mainContainer: e, cardClasses: c }
      );
    },
  }),
  te = { ref: "mainContainer", class: "newsectionsinglecard--container" },
  le = {
    class:
      "px-4 py-14 flex flex-col gap-10 md:py-16 md:px-6 lg:gap-16 lg:py-24 xl:px-[120px]",
  },
  ae = {
    class:
      "mr-10 md:pr-[210px] xl:pr-[413px] text-headline-xs md:text-headline-m xl:text-headline-xxl xl:max-w-[1160px]",
  },
  se = { class: "font-bold newsectionsinglecard--title" },
  re = { class: "flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-2" };
function ne(e, c, a, s, u, n) {
  const t = K;
  return (
    o(),
    g(
      "section",
      te,
      [
        d("div", le, [
          d("div", ae, [d("h2", se, h(e.title), 1)]),
          d("div", re, [
            (o(!0),
            g(
              E,
              null,
              O(
                e.cards,
                (l, i) => (
                  o(),
                  g(
                    "article",
                    {
                      key: i,
                      class: f([
                        "newsectionsinglecard--card",
                        e.cardClasses[i],
                      ]),
                    },
                    [
                      F(
                        t,
                        {
                          title: l.title,
                          description: l.description,
                          image: l.image,
                          cta: l.cta,
                          "secondary-cta": l.secondaryCta,
                          "show-black-filter": l.showBlackFilter,
                          "title-width-classes":
                            i === 2 ? "md:w-1/2 lg:w-full" : "w-full",
                          "is-full-width": i === 2,
                        },
                        null,
                        8,
                        [
                          "title",
                          "description",
                          "image",
                          "cta",
                          "secondary-cta",
                          "show-black-filter",
                          "title-width-classes",
                          "is-full-width",
                        ],
                      ),
                    ],
                    2,
                  )
                ),
              ),
              128,
            )),
          ]),
        ]),
      ],
      512,
    )
  );
}
const ie = A(ee, [
    ["render", ne],
    ["__scopeId", "data-v-2a4a3e11"],
  ]),
  Ce = b({
    __name: "index",
    props: W(),
    setup(e) {
      const c = e,
        { $gtmClickBoton: a } = j(),
        { title: s, cards: u } = c.slice.primary,
        n = _(() =>
          u.map((t) => ({
            ...t.newsinglecard?.data,
            description: I(t.newsinglecard?.data.description),
            cta: t.newsinglecard?.data?.link
              ? {
                  label: t.newsinglecard?.data?.link?.text ?? "",
                  to: t.newsinglecard?.data?.link?.url ?? "",
                  color:
                    t.newsinglecard?.data.variant?.toLowerCase() ===
                    "ghost inverted"
                      ? "ghost-inverted"
                      : (t.newsinglecard?.data.variant ?? void 0),
                  onClick: () => {
                    a(
                      t.newsinglecard?.data?.cta_gtm ??
                        t.newsinglecard?.data?.link.text,
                      t.newsinglecard?.data?.link?.url ?? "",
                    );
                  },
                }
              : void 0,
            secondaryCta: t.newsinglecard?.data?.sec_link
              ? {
                  label: t.newsinglecard?.data?.sec_link?.text ?? "",
                  to: t.newsinglecard?.data?.sec_link?.url ?? "",
                  color:
                    t.newsinglecard?.data?.sec_variant?.toLowerCase() ===
                    "ghost inverted"
                      ? "ghost-inverted"
                      : (t.newsinglecard?.data?.sec_variant ?? void 0),
                  onClick: () => {
                    a(
                      t.newsinglecard?.data?.cta_gtm_2 &&
                        t.newsinglecard?.data?.cta_gtm_2.trim() !== ""
                        ? t.newsinglecard?.data?.cta_gtm_2
                        : t.newsinglecard?.data?.sec_link.text,
                      t.newsinglecard?.data?.sec_link?.url ?? "",
                    );
                  },
                }
              : void 0,
          })),
        );
      return (t, l) => {
        const i = ie;
        return (
          o(),
          v(i, { title: w(s) ?? "", cards: w(n) }, null, 8, ["title", "cards"])
        );
      };
    },
  });
export { Ce as default };
