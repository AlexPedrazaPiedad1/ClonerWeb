import { _ as Q } from "./D_VYAWoq.js";
import {
  l as E,
  A as v,
  O as g,
  a5 as X,
  _ as a,
  al as Y,
  a2 as $,
  Q as k,
  U as q,
  Y as P,
  X as L,
  d as p,
  m as b,
  y as j,
  v as W,
  D as B,
  $ as A,
  Z as M,
  W as R,
  N as I,
  a1 as Z,
  u as D,
  V as J,
} from "./CG2MQ2lF.js";
import { g as s } from "./DKtf60Sy.js";
import { S as F } from "./BWsqEc1I.js";
import { u as V } from "./CiCdwUBr.js";
import { _ as H, m as K, ad as ee, d as te } from "./w36zW0QG.js";
import { _ as ie } from "./n9BDgNm5.js";
import { _ as re } from "./CL2JetmS.js";
import { S as U } from "./Cpc1cBKW.js";
import { s as ae } from "./C3J3pyEk.js";
import { d as ne } from "./Ca9Ptn7z.js";
import "./D8jQnJCR.js";
import "./X_wUNWL3.js";
const le = E({
    inheritAttrs: !1,
    props: {
      word: { type: String, required: !0 },
      speed: { type: Number, required: !1, default: 50 },
      font: { type: String, required: !1, default: "font-speedeecd" },
      rotationDegree: { type: Number, required: !1, default: 4 },
      showCoins: { type: Boolean, required: !1, default: !0 },
    },
    setup(e) {
      const n = V(),
        l = p(null),
        d = p(null),
        f = p(null),
        u = p(null),
        c = p(null);
      let i, r;
      const w = b(
          () => Array.from({ length: 20 }, () => e.word).join(" ") + "&nbsp;",
        ),
        y = b(() => ({
          sizes: {
            coin1: n.isMobile.value ? "2xl" : n.isTablet.value ? "3xl" : "5xl",
            coin2: n.isMobile.value ? "l" : n.isTablet.value ? "lg" : "3xl",
            coin3: n.isMobile.value ? "s" : n.isTablet.value ? "sm" : "lg",
          },
          styles: {
            coin1: { left: 0 },
            coin2: { left: 0, bottom: "20px" },
            coin3: { left: 0, bottom: "60px" },
          },
        })),
        m = () => {
          if (!d.value || !l.value) return;
          (s.registerPlugin(F),
            (i = s.timeline({
              repeat: -1,
              scrollTrigger: {
                id: "text",
                trigger: l.value,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play pause resume pause",
                markers: !1,
              },
            })),
            i.to(d.value, { xPercent: -50, duration: e.speed, ease: "none" }));
          const x = s.utils.toArray(".word-repeatable--coin");
          r = s.timeline({ toggleActions: "play pause resume pause" });
          const T = l.value.getBoundingClientRect().width,
            z = 90,
            N = s.utils.random(16, 20);
          x.forEach((o, S) => {
            (s.set(o, { x: T + S * z }),
              r.to(o, {
                x: -(T / 2),
                duration: N,
                ease: "none",
                repeat: -1,
                modifiers: {
                  x: s.utils.unitize((G) => {
                    const O = parseFloat(G);
                    return O < -T ? T + S * z : O;
                  }),
                },
              }),
              r.to(
                o,
                {
                  y: s.utils.random(-20, 20),
                  duration: s.utils.random(2, 3),
                  rotate:
                    S == 2
                      ? s.utils.random(-180, 180)
                      : s.utils.random(-12, 12),
                  repeat: -1,
                  ease: "sine.inOut",
                  yoyo: "true",
                },
                "<",
              ));
          });
        },
        C = () => {
          (r && r.kill(), m());
        };
      return (
        j(() => {
          (W(() => {
            m();
          }),
            window.addEventListener("resize", C));
        }),
        B(() => {
          (i && i.kill(),
            r && r.kill(),
            window.removeEventListener("resize", C));
        }),
        {
          props: e,
          wordRepeatableRef: l,
          containerRef: d,
          words: w,
          coin1: f,
          coin2: u,
          coin3: c,
          coinStyles: y,
        }
      );
    },
  }),
  oe = {
    ref: "wordRepeatableRef",
    "aria-hidden": "true",
    class:
      "relative flex flex-col items-center justify-center w-full max-h-[296px] overflow-x-clip",
  },
  se = {
    class: "absolute flex top-0 z-10 w-full h-full mx-auto max-w-[1560px]",
  },
  ce = {
    ref: "containerRef",
    class: "flex text-black origin-center whitespace-nowrap",
  },
  de = ["innerHTML"];
function ue(e, n, l, d, f, u) {
  const c = Q;
  return (
    g(),
    v(
      "div",
      oe,
      [
        X(
          a(
            "div",
            se,
            [
              a(
                "div",
                {
                  ref: "coin1",
                  class: "absolute word-repeatable--coin",
                  style: $(e.coinStyles.styles.coin1),
                },
                [
                  k(
                    c,
                    { direction: "right", size: e.coinStyles.sizes.coin1 },
                    null,
                    8,
                    ["size"],
                  ),
                ],
                4,
              ),
              a(
                "div",
                {
                  ref: "coin2",
                  class: "absolute word-repeatable--coin",
                  style: $(e.coinStyles.styles.coin2),
                },
                [
                  k(
                    c,
                    {
                      direction: "left",
                      size: e.coinStyles.sizes.coin2,
                      rotate: 316,
                      blur: "",
                    },
                    null,
                    8,
                    ["size"],
                  ),
                ],
                4,
              ),
              a(
                "div",
                {
                  ref: "coin3",
                  class: "absolute word-repeatable--coin",
                  style: $(e.coinStyles.styles.coin3),
                },
                [
                  k(
                    c,
                    { direction: "front", size: e.coinStyles.sizes.coin3 },
                    null,
                    8,
                    ["size"],
                  ),
                ],
                4,
              ),
            ],
            512,
          ),
          [[Y, e.props.showCoins]],
        ),
        a(
          "div",
          {
            class: "flex items-center w-full h-full overflow-hidden",
            style: $({ transform: `rotate(${e.props.rotationDegree}deg)` }),
          },
          [
            a(
              "div",
              ce,
              [
                (g(),
                v(
                  q,
                  null,
                  P(2, (i) =>
                    a(
                      "p",
                      {
                        key: i,
                        class: L([
                          "font-bold text-[120px] md:text-[160px] lg:text-[256px]",
                          e.props.font,
                        ]),
                        innerHTML: e.words,
                      },
                      null,
                      10,
                      de,
                    ),
                  ),
                  64,
                )),
              ],
              512,
            ),
          ],
          4,
        ),
      ],
      512,
    )
  );
}
const me = H(le, [["render", ue]]),
  t = {
    scrollTrigger: {
      start: "top 40%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
    image: {
      initial: { scale: 0.85, y: 60, opacity: 0, rotation: -2 },
      final: { scale: 1, y: 0, opacity: 1, rotation: 0 },
      duration: 0.8,
      ease: "power2.out",
    },
    title: {
      duration: 0.4,
      yPercent: 0,
      stagger: 0.08,
      ease: "power2.out",
      delay: "-=0.3",
    },
    date: { duration: 0.3, y: 20, ease: "power2.out", delay: "-=0.15" },
    price: {
      initial: { yPercent: 60, opacity: 0, scale: 0.9 },
      final: { yPercent: 0, opacity: 1, scale: 1 },
      duration: 0.5,
      ease: "back.out(1.2)",
      delay: "-=0.15",
    },
  },
  h = {
    image: {
      url: "https://images.prismic.io/mcdonalds/aD8Lz7h8WN-LVigz_new_home_creatividad_offer.jpg",
      alt: "Una hamburguesa de McDonalds sobre una servilleta con su logo y un vaso de Coca Cola en el lado derecho",
    },
    title: "Hamburguesa a elegir + Refresco Pequeño",
    dateText: "Hoy por",
    price: 3.5,
    description:
      "Esta oferta y muchas más, <strong>¡solo en nuestra App!</strong>",
    repeatedWord: "HOY",
    btn: { to: "/", label: "¡LO QUIERO!" },
    disableAnimations: !1,
  };
s.registerPlugin(F, U);
const _ = {
    image: (e) =>
      typeof e == "string"
        ? e.length > 0
        : e && typeof e.url == "string" && e.url.length > 0,
    title: (e) => e.length > 0,
    price: (e) => e >= 0 && Number.isFinite(e),
  },
  pe = E({
    name: "MCDNewOffer",
    inheritAttrs: !1,
    props: {
      image: {
        type: [String, Object],
        required: !1,
        default: () => h.image,
        validator: _.image,
      },
      title: {
        type: String,
        required: !0,
        default: h.title,
        validator: _.title,
      },
      dateText: { type: String, required: !1, default: h.dateText },
      price: {
        type: Number,
        required: !0,
        default: h.price,
        validator: _.price,
      },
      description: { type: String, required: !1, default: h.description },
      repeatedWord: { type: String, required: !1, default: h.repeatedWord },
      btn: { type: Object, default: () => h.btn, required: !1 },
      disableAnimations: { type: Boolean, default: h.disableAnimations },
    },
    setup(e) {
      const n = V(),
        l = p(null),
        d = p(null),
        f = p(null),
        u = p(null),
        c = p(null);
      let i = null,
        r = null;
      const w = b(() => e.dateText?.split(" ") || []),
        y = b(() => e.price.toFixed(2).split(".")),
        m = b(() =>
          typeof window > "u"
            ? !1
            : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        ),
        C = b(() => !e.disableAnimations && !m.value),
        x = b(() =>
          n.isMobile.value
            ? { size: "s", class: "w-fit px-0 min-w-[120px]" }
            : { size: "m", class: "" },
        ),
        T = () =>
          !l.value || !d.value || !f.value || !u.value || !c.value
            ? (console.warn(
                "NewOffer: Missing required elements for animation",
              ),
              null)
            : {
                container: l.value,
                imageContainer: d.value,
                offerDate: f.value,
                priceContainer: u.value,
                titleElement: c.value,
              },
        z = () => {
          (i && (i.kill(), (i = null)),
            r && (r.revert(), (r = null)),
            F.getAll().forEach((o) => {
              o.trigger === l.value && o.kill();
            }));
        },
        N = () => {
          if (!C.value) return;
          const o = T();
          if (o)
            try {
              if (
                (z(),
                (r = new U(o.titleElement, {
                  type: "lines",
                  linesClass: "newoffer--title-line",
                })),
                !r.lines || r.lines.length === 0)
              ) {
                console.warn("No lines found in SplitText");
                return;
              }
              (o.titleElement.classList.add("split-ready"),
                (i = s.timeline({
                  scrollTrigger: {
                    trigger: o.container,
                    start: t.scrollTrigger.start,
                    end: t.scrollTrigger.end,
                    toggleActions: t.scrollTrigger.toggleActions,
                    invalidateOnRefresh: !0,
                    markers: !1,
                  },
                })),
                i.fromTo(o.imageContainer, t.image.initial, {
                  ...t.image.final,
                  duration: t.image.duration,
                  ease: t.image.ease,
                }),
                s.set(r.lines, {
                  yPercent: t.title.yPercent || 100,
                  opacity: 0,
                }),
                i.to(
                  r.lines,
                  {
                    yPercent: 0,
                    opacity: 1,
                    duration: t.title.duration,
                    stagger: t.title.stagger || 0.1,
                    ease: t.title.ease || "power2.out",
                  },
                  t.title.delay || "-=0.5",
                ),
                i.from(
                  o.offerDate,
                  {
                    opacity: 0,
                    y: t.date.y,
                    duration: t.date.duration,
                    ease: t.date.ease,
                  },
                  t.date.delay,
                ),
                i.fromTo(
                  o.priceContainer,
                  t.price.initial,
                  {
                    ...t.price.final,
                    duration: t.price.duration,
                    ease: t.price.ease,
                  },
                  t.price.delay,
                ));
            } catch (S) {
              console.error("NewOffer: Animation setup failed", S);
            }
        };
      return (
        j(() => {
          typeof window < "u" &&
            W(() => {
              setTimeout(() => {
                N();
              }, 100);
            });
        }),
        B(z),
        {
          newOfferContainer: l,
          imageContainer: d,
          offerDate: f,
          priceContainer: u,
          titleElement: c,
          dataFormatted: w,
          priceFormatted: y,
          btnSizeAndClass: x,
        }
      );
    },
  }),
  fe = { ref: "newOfferContainer", class: "flex flex-col pt-20 md:pt-0" },
  ge = {
    class:
      "flex flex-col items-center justify-center -space-y-8 md:flex-row md:px-4 lg:px-0 md:space-y-0 md:-space-x-8",
  },
  ye = { ref: "imageContainer" },
  xe = { class: "w-full max-w-[330px] flex flex-col lg:max-w-[441px] z-10" },
  he = ["aria-label"],
  we = {
    ref: "offerDate",
    "aria-hidden": "true",
    class: "flex flex-col pt-6 leading-5 uppercase text-title-m md:text-[28px]",
  },
  ve = {
    ref: "priceContainer",
    "aria-hidden": "true",
    class: "flex flex-row justify-center items-center",
  },
  be = {
    key: 0,
    class:
      "font-bold font-speedeecd text-[238px] leading-[80%] -tracking-[0.16px] md:text-[254px] md:tracking-0 xl:text-[389px]",
  },
  Ce = {
    key: 1,
    "aria-hidden": "true",
    class:
      "flex flex-col items-start justify-center font-bold font-speedeecd text-[114px] leading-[80%] -tracking-[2.8px] md:text-[126px] md:-tracking-[2px] xl:text-[190px]",
  },
  Te = {
    class: "relative w-full py-3 md:py-0 overflow-x-clip h-full lg:-top-8",
  },
  ke = ["innerHTML"];
function ze(e, n, l, d, f, u) {
  const c = me,
    i = ie,
    r = K,
    w = re;
  return (
    g(),
    v(
      "div",
      fe,
      [
        k(c, { word: e.repeatedWord, speed: 80 }, null, 8, ["word"]),
        a("div", ge, [
          a(
            "div",
            ye,
            [
              k(
                i,
                {
                  image: e.image,
                  "wrapper-class":
                    "w-[328px] h-[328px] md:w-[368px] md:h-[368px] lg:w-[484px] lg:h-[484px] xl:w-[584px] xl:h-[584px]",
                },
                null,
                8,
                ["image"],
              ),
            ],
            512,
          ),
          a("div", xe, [
            a(
              "h3",
              {
                ref: "titleElement",
                class:
                  "text-title-m leading-[28px] -tracking-[0.2px] text-center font-bold px-10 md:text-[28px] md:leading-[120%] md:px-0 lg:text-[42px] lg:tracking-0 lg:leading-[120%] overflow-hidden",
              },
              A(e.title),
              513,
            ),
            a(
              "div",
              {
                role: "text",
                "aria-label": `${e.dateText} ${e.priceFormatted.join(".")}€`,
                class: "flex flex-row justify-center overflow-hidden",
              },
              [
                a(
                  "div",
                  we,
                  [
                    (g(!0),
                    v(
                      q,
                      null,
                      P(
                        e.dataFormatted,
                        (y, m) => (
                          g(),
                          v("p", { key: m, class: "font-bold" }, A(y), 1)
                        ),
                      ),
                      128,
                    )),
                  ],
                  512,
                ),
                a(
                  "div",
                  ve,
                  [
                    e.priceFormatted[0]
                      ? (g(), v("p", be, A(e.priceFormatted[0]), 1))
                      : M("", !0),
                    e.priceFormatted[1]
                      ? (g(),
                        v("div", Ce, [
                          a("p", null, "'" + A(e.priceFormatted[1]), 1),
                          n[0] || (n[0] = a("p", null, " €", -1)),
                        ]))
                      : M("", !0),
                  ],
                  512,
                ),
              ],
              8,
              he,
            ),
          ]),
        ]),
        a("div", Te, [
          k(
            w,
            {
              class:
                "gradient-container absolute left-1/2 -translate-x-1/2 flex flex-row gap-2 p-6 -rotate-[4deg] justify-center items-center md:gap-6 transition-transform duration-300 ease-out hover:scale-[1.02] hover:rotate-[-3deg] hover:scale-[1.1]",
              style: { width: "105vw", "max-width": "none" },
            },
            {
              default: R(() => [
                a(
                  "p",
                  {
                    class:
                      "z-10 text-right text-white text-title-xs md:text-title-s lg:text-title-m tracking-[-0.75px]",
                    innerHTML: e.description,
                  },
                  null,
                  8,
                  ke,
                ),
                e.btn
                  ? (g(),
                    I(
                      r,
                      {
                        key: 0,
                        to: e.btn.to,
                        target: e.btn.target,
                        size: e.btnSizeAndClass.size,
                        class: L(e.btnSizeAndClass.class),
                        onClick: e.btn.onClick,
                      },
                      { default: R(() => [Z(A(e.btn.label), 1)]), _: 1 },
                      8,
                      ["to", "target", "size", "class", "onClick"],
                    ))
                  : M("", !0),
              ]),
              _: 1,
            },
          ),
        ]),
      ],
      512,
    )
  );
}
const Se = H(pe, [
    ["render", ze],
    ["__scopeId", "data-v-42566652"],
  ]),
  je = E({
    __name: "index",
    props: ee(),
    setup(e) {
      const { $gtmSelectContent: n } = te(),
        l = e.slice.primary.image?.url,
        d = e.slice.primary.title,
        f = e.slice.primary.price !== null && e.slice.primary.price !== void 0,
        u =
          e.slice.primary.cta &&
          "url" in e.slice.primary.cta &&
          e.slice.primary.cta.url,
        c = e.slice.primary.description,
        i = l && d && f && u && c,
        r = l
          ? {
              url: e.slice.primary.image.url,
              alt: e.slice.primary.image.alt || "",
              dimensions: e.slice.primary.image.dimensions
                ? {
                    width: e.slice.primary.image.dimensions.width,
                    height: e.slice.primary.image.dimensions.height,
                  }
                : void 0,
            }
          : void 0,
        w =
          u &&
          e.slice.primary.cta &&
          "url" in e.slice.primary.cta &&
          e.slice.primary.cta.url
            ? {
                to: e.slice.primary.cta.url,
                label:
                  ("text" in e.slice.primary.cta && e.slice.primary.cta.text) ||
                  "Ver más",
                onClick: () => {
                  const x = `loquiero_${(e.slice.primary.title?.toLowerCase() || "").split(/\s+|_/).filter(Boolean).slice(0, 3).join("_")}`;
                  n(
                    x,
                    ne(e.slice.primary.title),
                    e.slice.primary.cta.url || "#",
                  );
                },
                target:
                  ("target" in e.slice.primary.cta &&
                    e.slice.primary.cta.target) ||
                  void 0,
              }
            : void 0,
        y = i
          ? {
              image: r,
              title: e.slice.primary.title,
              dateText: e.slice.primary.date_text || void 0,
              price: e.slice.primary.price,
              description: ae(e.slice.primary.description),
              repeatedWord: e.slice.primary.repeated_word || void 0,
              btn: w,
              disableAnimations: !1,
            }
          : void 0;
      return (m, C) => {
        const x = Se;
        return D(i) && D(y)
          ? (g(),
            I(
              x,
              J(
                {
                  key: 0,
                  "data-slice-type": m.slice.slice_type,
                  "data-slice-variation": m.slice.variation,
                },
                D(y),
              ),
              null,
              16,
              ["data-slice-type", "data-slice-variation"],
            ))
          : M("", !0);
      };
    },
  });
export { je as default };
