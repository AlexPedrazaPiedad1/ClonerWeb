import { _ as it, m as ft, ad as yt, d as vt } from "./w36zW0QG.js";
import { _ as pt } from "./n9BDgNm5.js";
import { _ as xt } from "./D_VYAWoq.js";
import { _ as ht } from "./CL2JetmS.js";
import { u as mt, a as Ct } from "./CiCdwUBr.js";
import { g as l } from "./DKtf60Sy.js";
import { S as lt } from "./BWsqEc1I.js";
import { S as X } from "./Cpc1cBKW.js";
import {
  l as Z,
  d as _,
  m as K,
  y as nt,
  D as st,
  v as E,
  N as bt,
  O,
  W as ot,
  _ as S,
  Q as I,
  $ as gt,
  a2 as V,
  X as $,
  q as rt,
  A,
  Z as H,
  U as ut,
  Y as ct,
  ah as wt,
  ai as _t,
  aj as St,
  ax as kt,
  av as It,
  ak as Ot,
  au as Nt,
  ag as At,
  R as Mt,
  S as zt,
  u as U,
} from "./CG2MQ2lF.js";
import { a as Tt } from "./C3J3pyEk.js";
import "./D8jQnJCR.js";
import "./Ca9Ptn7z.js";
import "./X_wUNWL3.js";
const D = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
  Et = (t) => {
    var c;
    return {
      link_type: D.Document,
      id: t.id,
      uid: t.uid ?? void 0,
      type: t.type,
      tags: t.tags,
      lang: t.lang,
      url: t.url ?? void 0,
      slug: (c = t.slugs) == null ? void 0 : c[0],
      ...(t.data && Object.keys(t.data).length > 0 ? { data: t.data } : {}),
    };
  },
  at = (t, c) => {
    if (!t) return null;
    const a = "link_type" in t ? t : Et(t);
    switch (a.link_type) {
      case D.Media:
      case D.Web:
        return "url" in a ? a.url : null;
      case D.Document:
        return "url" in a && a.url ? a.url : null;
      case D.Any:
      default:
        return null;
    }
  };
function $t(t) {
  const c = [],
    a = (d) => {
      (i(),
        d.forEach(({ $el: r, floatMod: h, rotateMod: x }) => {
          if (!r) return;
          const v = l.utils.random(
              t.float.duration[0] * h,
              t.float.duration[1] * h,
            ),
            b = l.utils.random(
              t.rotate.duration[0] * x,
              t.rotate.duration[1] * x,
            ),
            n = l.to(r, {
              y: l.utils.random(t.float.range[0], t.float.range[1]),
              duration: v,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: !0,
              overwrite: "auto",
            }),
            g = l.to(r, {
              rotation: t.rotate.degrees,
              transformOrigin: "center center",
              duration: b,
              ease: "none",
              repeat: -1,
              overwrite: "auto",
            });
          c.push(n, g);
        }));
    },
    i = () => {
      (c.forEach((d) => d?.kill()), (c.length = 0));
    };
  return { animateCoins: a, cleanupAnimations: i };
}
const dt = [
    {
      ref: "coin1",
      direction: "left",
      sizeDesktop: "2xl",
      sizeLg: "l",
      sizeMobile: "xl",
      rotate: 330,
      blur: !0,
      blurAmount: 1,
      classes: {
        mobile: "left-0 top-[-20px]",
        desktop:
          "lg:right-[280px] lg:top-6 lg:left-auto xl:right-[320px] xl:top-8 1440:right-[380px] 1440:top-6 1920:right-[420px] 1920:top-8 2200:right-[480px]",
      },
      animation: { floatMod: 0.7, rotateMod: 1.6 },
      zIndex: 11,
    },
    {
      ref: "coin2",
      direction: "front",
      sizeDesktop: "2xl",
      sizeLg: "xl",
      sizeMobile: "l",
      rotate: -30,
      classes: {
        mobile: "right-[-10px] top-[60px]",
        desktop:
          "lg:left-[160px] lg:right-auto lg:top-auto lg:bottom-[50px] xl:left-[180px] xl:bottom-[40px] 1440:left-[220px] 1440:bottom-[50px] 1920:left-[260px] 1920:bottom-[40px] 2200:left-[300px]",
      },
      animation: { floatMod: 0.8, rotateMod: 1.5 },
      zIndex: 9,
    },
    {
      ref: "coin3",
      direction: "right",
      sizeDesktop: "l",
      sizeLg: "sm",
      sizeMobile: "sm",
      rotate: 0,
      blur: !0,
      blurAmount: 3,
      opacity: 0.7,
      classes: {
        mobile: "left-2 top-[100px]",
        desktop:
          "lg:right-[380px] lg:left-auto lg:bottom-[160px] lg:top-auto xl:right-[440px] xl:bottom-[200px] 1440:right-[480px] 1440:bottom-[200px] 1920:right-[520px] 1920:bottom-[220px] 2200:right-[580px] 2200:bottom-[240px]",
      },
      animation: { floatMod: 0.8, rotateMod: 2.5 },
      zIndex: 9,
    },
  ],
  B = {
    float: { range: [-20, 20], duration: [2, 4] },
    rotate: { degrees: 360, duration: [4, 8] },
    title: { duration: 0.8, stagger: 0.1 },
    button: { duration: 0.6, delay: 0.3 },
  },
  Ft = Z({
    name: "SectionMainOffer",
    inheritAttrs: !1,
    props: {
      title: {
        type: String,
        required: !1,
        default: "Sumérgete en un mundo de ventajas solo en MyMcDonald's App",
      },
      buttonLabel: { type: String, default: "¡Descubre más!" },
      cta: { type: Object, required: !0, default: void 0 },
      image: {
        type: Object,
        default: () => ({
          url: "https://images.prismic.io/mcdonalds/aEqI67NJEFaPX4-n_phone_mymcdonalds.png?auto=format,compress",
          alt: "Una mano sostiene un teléfono inteligente que muestra una pantalla de la aplicación MyMcDonalds",
        }),
      },
      disableAnimations: { type: Boolean, default: !1 },
    },
    setup(t) {
      l.registerPlugin(X, lt);
      const c = mt(),
        { width: a } = Ct(),
        { animateCoins: i, cleanupAnimations: d } = $t(B),
        r = _(null),
        h = _(null),
        x = _(null),
        v = { coin1: r, coin2: h, coin3: x },
        b = _(null),
        n = _(null),
        g = _(null);
      let f = null,
        y = null,
        C = null,
        M = null,
        N = !1;
      const L = async () => {
          if (!(!b.value || t.disableAnimations))
            try {
              if (
                (f && (f.kill(), (f = null)),
                C && (C.revert(), (C = null)),
                await E(),
                !b.value)
              )
                return;
              if (
                ((C = new X(b.value, {
                  type: "words,lines",
                  linesClass: "split-line",
                  wordsClass: "split-word",
                })),
                !C.lines || C.lines.length === 0)
              ) {
                console.warn("SplitText: No lines found to animate");
                return;
              }
              (l.set(C.lines, { yPercent: 100, opacity: 0 }),
                (f = l.timeline({ paused: !0 })),
                f.to(C.lines, {
                  duration: B.title.duration,
                  yPercent: 0,
                  opacity: 1,
                  stagger: B.title.stagger,
                  ease: "expo.out",
                }));
            } catch (u) {
              console.error("SplitText animation error:", u);
            }
        },
        P = () => {
          if (!(!n.value || t.disableAnimations))
            try {
              y && (y.kill(), (y = null));
              const u = n.value?.$el || n.value;
              (l.set(u, { y: 30, opacity: 0, scale: 0.9 }),
                (y = l.timeline({ paused: !0 })),
                y.to(u, {
                  duration: B.button.duration,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  ease: "back.out(1.7)",
                  delay: B.button.delay,
                }));
            } catch (u) {
              console.error("Button animation error:", u);
            }
        },
        J = () => {
          !g.value ||
            t.disableAnimations ||
            (M = lt.create({
              trigger: g.value,
              start: "top 80%",
              end: "bottom 20%",
              onEnter: () => {
                N || (F(), (N = !0));
              },
              onEnterBack: () => {
                N || (F(), (N = !0));
              },
            }));
        },
        F = () => {
          (Q(),
            f && !f.isActive() && f.restart(),
            y && !y.isActive() && y.restart());
        },
        Q = () => {
          const u = dt
            .map((z) => {
              const j = v[z.ref];
              return {
                $el: j?.value?.$el || j?.value,
                floatMod: z.animation.floatMod,
                rotateMod: z.animation.rotateMod,
              };
            })
            .filter((z) => z.$el);
          u.length > 0 && i(u);
        },
        R = (u) => {
          if (!c.isDesktop.value && (c.isMobile.value || c.isTablet.value))
            return u.sizeMobile;
          if (typeof window < "u" && a.value > 0) {
            if (a.value >= 1024 && a.value < 1280)
              return u.sizeLg || u.sizeMobile;
            if (a.value >= 1280) return u.sizeDesktop;
          }
          return u.sizeDesktop;
        },
        Y = (u) =>
          `absolute coin ${u.classes.mobile} ${u.classes.desktop} lg:z-0`,
        tt = K(() =>
          t.cta
            ? t.cta
            : {
                label: t.buttonLabel,
                to: "",
                color: void 0,
                target: void 0,
                onClick: void 0,
              },
        ),
        q = async () => {
          if (!t.disableAnimations)
            try {
              (await E(), await L(), P(), J());
            } catch (u) {
              console.error("Animation setup error:", u);
            }
        },
        W = () => {
          (M && (M.kill(), (M = null)),
            f && (f.kill(), (f = null)),
            y && (y.kill(), (y = null)),
            C && (C.revert(), (C = null)),
            (N = !1));
        },
        et =
          typeof window < "u"
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : !1;
      return (
        nt(() => {
          if (typeof window > "u" || et) {
            if ((b.value && l.set(b.value, { opacity: 1, y: 0 }), n.value)) {
              const u = n.value?.$el || n.value;
              l.set(u, { opacity: 1, y: 0, scale: 1 });
            }
            return;
          }
          requestAnimationFrame(() => {
            q();
          });
        }),
        st(() => {
          (d(),
            W(),
            lt.getAll().forEach((u) => {
              u.trigger === g.value && u.kill();
            }));
        }),
        {
          coin1: r,
          coin2: h,
          coin3: x,
          titleElement: b,
          buttonElement: n,
          containerElement: g,
          getCoinSize: R,
          getCoinClasses: Y,
          COINS_CONFIG: dt,
          buttonConfig: tt,
        }
      );
    },
  }),
  jt = {
    ref: "containerElement",
    class:
      "flex py-0 px-6 justify-start items-start self-stretch w-full h-full relative z-10 smaller-tablet:px-6 tablet:px-8 lg:z-10 lg:relative lg:pl-10 lg:max-w-[55%] 1920:max-w-[500px] 2200:max-w-[600px] 3000:max-w-[800px]",
  },
  Gt = {
    class:
      "flex flex-col gap-6 items-start justify-start self-stretch w-full h-full smaller-tablet:gap-5 tablet:gap-6 lg:pt-16",
  },
  Bt = {
    class:
      "flex flex-col items-start justify-end gap-3 self-stretch tablet:gap-4",
  },
  Dt = ["aria-live"],
  Lt = {
    class:
      "flex flex-col justify-end items-center self-stretch relative h-full min-h-[300px] smaller-tablet:min-h-[370px] smaller-tablet:justify-end tablet:min-h-[450px] tablet:justify-end tablet:items-end lg:absolute lg:top-8 lg:bottom-0 lg:left-0 lg:flex lg:justify-end lg:items-end lg:right-[-100px] xl:right-[-100px] 1440:right-[-125px] mt-5 tablet:mt-0",
    "aria-hidden": "true",
  },
  Pt = {
    class: "coins-container absolute inset-0",
    "aria-hidden": "true",
    role: "presentation",
  };
function Rt(t, c, a, i, d, r) {
  const h = ft,
    x = pt,
    v = xt,
    b = ht;
  return (
    O(),
    bt(
      b,
      {
        class:
          "flex flex-col items-start gap-6 justify-between w-full pt-10 self-stretch overflow-hidden tablet:rounded-8 smaller-tablet:rounded-8 tablet:gap-8 tablet:pt-8 tablet:pb-10 tablet:h-full smaller-tablet:h-full lg:flex-row lg:gap-10 lg:pt-10 h-full relative tablet:max-h-[584px] smaller-tablet:max-h-[584px] lg:max-h-full",
        "aria-label": "Oferta principal de MyMcDonald's",
      },
      {
        default: ot(() => [
          S(
            "div",
            jt,
            [
              S("div", Gt, [
                S("div", Bt, [
                  S(
                    "h2",
                    {
                      id: "main-offer-title",
                      ref: "titleElement",
                      class:
                        "text-start font-bold text-title-l smaller-tablet:text-title-l tablet:text-title-l lg:text-title-l xl:text-title-xl 1440:text-headline-xs 1920:text-headline-m 2200:text-headline-xl 3000:text-headline-xxl text-white splittext-mainoffer-title w-full",
                      "aria-live": t.disableAnimations ? "off" : "polite",
                    },
                    gt(t.title),
                    9,
                    Dt,
                  ),
                ]),
                I(
                  h,
                  {
                    ref: "buttonElement",
                    label: t.buttonConfig.label,
                    to: t.buttonConfig.to,
                    variant: t.buttonConfig.color,
                    target: t.buttonConfig.target,
                    "aria-describedby": "main-offer-title",
                    class: "text-sm tablet:text-base",
                    onClick: t.buttonConfig.onClick,
                  },
                  null,
                  8,
                  ["label", "to", "variant", "target", "onClick"],
                ),
              ]),
            ],
            512,
          ),
          S("div", Lt, [
            I(
              x,
              {
                image: t.image,
                "wrapper-class":
                  "w-full h-full object-cover object-bottom smaller-tablet:object-contain smaller-tablet:object-bottom tablet:object-contain tablet:object-bottom tablet:h-full lg:relative lg:h-full lg:w-auto lg:object-contain lg:object-bottom xl:object-center z-10",
              },
              null,
              8,
              ["image"],
            ),
            S("div", Pt, [
              I(
                v,
                {
                  ref: "coin1",
                  direction: t.COINS_CONFIG[0].direction,
                  size: t.getCoinSize(t.COINS_CONFIG[0]),
                  rotate: t.COINS_CONFIG[0].rotate,
                  blur: t.COINS_CONFIG[0].blur,
                  opacity: t.COINS_CONFIG[0].opacity,
                  class: $(t.getCoinClasses(t.COINS_CONFIG[0])),
                  "aria-hidden": !0,
                  "blur-amount": t.COINS_CONFIG[0].blurAmount,
                  style: V({ "z-index": t.COINS_CONFIG[0].zIndex }),
                },
                null,
                8,
                [
                  "direction",
                  "size",
                  "rotate",
                  "blur",
                  "opacity",
                  "class",
                  "blur-amount",
                  "style",
                ],
              ),
              I(
                v,
                {
                  ref: "coin2",
                  direction: t.COINS_CONFIG[1].direction,
                  size: t.getCoinSize(t.COINS_CONFIG[1]),
                  rotate: t.COINS_CONFIG[1].rotate,
                  blur: t.COINS_CONFIG[1].blur,
                  opacity: t.COINS_CONFIG[1].opacity,
                  class: $(t.getCoinClasses(t.COINS_CONFIG[1])),
                  "aria-hidden": !0,
                  style: V({ "z-index": t.COINS_CONFIG[1].zIndex }),
                },
                null,
                8,
                [
                  "direction",
                  "size",
                  "rotate",
                  "blur",
                  "opacity",
                  "class",
                  "style",
                ],
              ),
              I(
                v,
                {
                  ref: "coin3",
                  direction: t.COINS_CONFIG[2].direction,
                  size: t.getCoinSize(t.COINS_CONFIG[2]),
                  rotate: t.COINS_CONFIG[2].rotate,
                  blur: t.COINS_CONFIG[2].blur,
                  opacity: t.COINS_CONFIG[2].opacity,
                  class: $(t.getCoinClasses(t.COINS_CONFIG[2])),
                  "aria-hidden": !0,
                  "blur-amount": t.COINS_CONFIG[2].blurAmount,
                  style: V({ "z-index": t.COINS_CONFIG[2].zIndex }),
                },
                null,
                8,
                [
                  "direction",
                  "size",
                  "rotate",
                  "blur",
                  "opacity",
                  "class",
                  "blur-amount",
                  "style",
                ],
              ),
            ]),
          ]),
        ]),
        _: 1,
      },
    )
  );
}
const qt = it(Ft, [
    ["render", Rt],
    ["__scopeId", "data-v-d3204247"],
  ]),
  Wt = {
    key: 0,
    class:
      "absolute top-0 left-0 right-0 tablet:top-3 tablet:left-3 tablet:right-3 z-20 flex items-center gap-2 tablet:gap-4 px-6 py-4",
  },
  Ht = { class: "flex flex-1 gap-1" },
  Ut = { class: "flex flex-row gap-2 items-center justify-center" },
  Kt = { class: "drop-shadow-md" },
  Vt = ["id"],
  Xt = { key: 0 },
  Zt = ["innerHTML"],
  Jt = {
    key: 0,
    class: "carrousel-bg-gradient carrousel-bg-gradient--subtle",
    "aria-hidden": "true",
    style: { "z-index": "1" },
  },
  Qt = Z({
    __name: "CarrouselStories",
    props: {
      slides: {},
      defaultDuration: { default: 5e3 },
      autoHeight: { type: Boolean, default: !1 },
      showControls: { type: Boolean, default: !0 },
      speed: { default: 800 },
      loop: { type: Boolean, default: !0 },
    },
    setup(t) {
      const c = t;
      l.registerPlugin(X);
      const a = _(null),
        i = _(0),
        d = _(0),
        r = _(null),
        h = _(!1),
        x = _([]),
        v = _([]),
        b = _([]);
      let n = [],
        g = null,
        f = null;
      const y = K(() => c.showControls && c.slides.length > 1),
        C = [_t, St, kt, It, Ot, Nt],
        M = K(() => c.slides.map((e) => e.duration ?? c.defaultDuration)),
        N = K(() => M.value[i.value] ?? c.defaultDuration),
        L = (e) => (e.textColor === "black" ? "text-black" : "text-white"),
        P = () => {
          (g && (g.kill(), (g = null)),
            f && (f.kill(), (f = null)),
            n.forEach((e) => {
              e.revert();
            }),
            (n = []),
            x.value.forEach((e) => {
              e && l.set(e, { clearProps: "all" });
            }),
            v.value.forEach((e) => {
              e && l.set(e, { clearProps: "all" });
            }),
            b.value.forEach((e) => {
              e && l.set(e, { clearProps: "all" });
            }));
        },
        J = () => (g && g.kill(), l.timeline()),
        F = async (e) => {
          (P(), await E());
          const o = x.value[e],
            s = v.value[e],
            p = b.value[e];
          if (!(!o && !s && !p)) {
            if (
              (o && l.set(o, { clearProps: "all", opacity: 0 }),
              s && l.set(s, { clearProps: "all", opacity: 0 }),
              p && l.set(p, { clearProps: "all", opacity: 0 }),
              await E(),
              await document.fonts.ready,
              (g = J()),
              o)
            ) {
              const w = new X(o, {
                type: "words,lines",
                linesClass: "split-line",
                wordsClass: "split-word",
              });
              (n.push(w),
                l.set(w.lines, { yPercent: 100, opacity: 0 }),
                g.to(
                  w.lines,
                  {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                  },
                  0.2,
                ));
            }
            (s &&
              (l.set(s, { y: 40, opacity: 0, scale: 0.8 }),
              g.to(
                s,
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.6,
                  ease: "back.out(1.2)",
                },
                0.6,
              )),
              p &&
                (l.set(p, { y: 20, opacity: 0 }),
                g.to(
                  p,
                  { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                  0.8,
                )));
          }
        },
        Q = (e) =>
          new Promise((o) => {
            const s = l.timeline({ onComplete: o }),
              p = x.value[e],
              w = v.value[e],
              T = b.value[e],
              m = { duration: 0.25, ease: "power2.in" };
            (p && s.to(p, { ...m, y: -30, opacity: 0 }, 0),
              w && s.to(w, { ...m, scale: 0.8, y: -20, opacity: 0 }, 0.05),
              T && s.to(T, { ...m, y: -15, opacity: 0, duration: 0.2 }, 0.1));
          }),
        R = () => {
          (f && f.kill(),
            (d.value = 0),
            (f = l.timeline()),
            f.to(d, {
              value: 100,
              duration: N.value / 1e3,
              ease: "none",
              onUpdate: () => {
                d.value = Math.round(d.value * 100) / 100;
              },
              onComplete: () => {
                a.value &&
                  y.value &&
                  (a.value.slideNext(),
                  setTimeout(() => {
                    a.value && a.value.realIndex !== i.value && q();
                  }, 50));
              },
            }));
        },
        Y = () => {
          (f && f.kill(), l.set(d, { value: 0 }));
        },
        tt = (e) => {
          ((a.value = e),
            (i.value = e.realIndex),
            e.autoplay && e.autoplay.stop());
          const o = x.value[i.value],
            s = v.value[i.value],
            p = b.value[i.value];
          (o && l.set(o, { opacity: 0 }),
            s && l.set(s, { opacity: 0 }),
            p && l.set(p, { opacity: 0 }),
            setTimeout(() => {
              if (
                (F(i.value), y.value && setTimeout(() => R(), 300), r.value)
              ) {
                const w = c.slides[i.value];
                r.value.textContent = w.title;
              }
            }, 150));
        },
        q = async () => {
          if (!a.value) return;
          const e = i.value,
            o = a.value.realIndex;
          if (e === o) return;
          f && f.kill();
          const s = x.value[o],
            p = v.value[o],
            w = b.value[o];
          if (
            (s && l.set(s, { opacity: 0 }),
            p && l.set(p, { opacity: 0 }),
            w && l.set(w, { opacity: 0 }),
            e >= 0 && e < c.slides.length && (await Q(e)),
            (i.value = o),
            Y(),
            r.value)
          ) {
            const T = c.slides[i.value];
            r.value.textContent = T.title;
          }
          (await E(),
            setTimeout(() => {
              F(i.value);
            }, 50),
            y.value && setTimeout(() => R(), 250));
        },
        W = (e) => {
          if (e.key === "Tab") {
            if (!e.shiftKey) {
              const o = document.querySelector(".swiper"),
                s = document.getElementById("carousel-end");
              o?.contains(document.activeElement) &&
                s &&
                (e.preventDefault(), s.focus());
            }
            if (e.shiftKey) {
              const o = document.getElementById("carousel-end");
              if (document.activeElement === o) {
                e.preventDefault();
                const s = document.querySelector(
                  '[role="region"][aria-roledescription="carousel"]',
                );
                if (s) {
                  const p = document.querySelectorAll(
                      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
                    ),
                    w = Array.from(p),
                    T = w.indexOf(s),
                    m = w[T - 1];
                  m && m.focus();
                }
              }
            }
          }
        },
        et = (e) => {
          if (!a.value || !y.value || h.value) return;
          const o = e.currentTarget.getBoundingClientRect();
          e.clientX - o.left < o.width / 2 ? z() : u();
        },
        u = () => {
          a.value && (j(), a.value.slideNext());
        },
        z = () => {
          a.value && (j(), a.value.slidePrev());
        },
        j = () => {
          ((h.value = !0),
            setTimeout(() => {
              h.value = !1;
            }, 500));
        };
      return (
        nt(async () => {
          (await E(), document.addEventListener("keydown", W));
        }),
        st(() => {
          (P(), document.removeEventListener("keydown", W));
        }),
        rt(
          () => c.slides,
          async () => {
            await E();
          },
          { deep: !0 },
        ),
        rt(
          () => i.value,
          async (e) => {
            (await E(),
              setTimeout(() => {
                const o = x.value[e],
                  s = v.value[e],
                  p = b.value[e];
                (o &&
                  o instanceof HTMLElement &&
                  getComputedStyle(o).opacity === "0" &&
                  l.set(o, { opacity: 1, transform: "none" }),
                  s &&
                    s instanceof HTMLElement &&
                    getComputedStyle(s).opacity === "0" &&
                    l.set(s, { opacity: 1, transform: "none" }),
                  p &&
                    p instanceof HTMLElement &&
                    getComputedStyle(p).opacity === "0" &&
                    l.set(p, { opacity: 1, transform: "none" }));
              }, 500));
          },
        ),
        (e, o) => {
          const s = ft,
            p = pt,
            w = At,
            T = wt;
          return (
            O(),
            A(
              "div",
              {
                class:
                  "relative tablet:rounded-lg overflow-hidden h-[584px] smaller-tablet:rounded-lg smaller-tablet:h-full tablet:h-full tablet:max-h-[584px] smaller-tablet:max-h-[584px] w-full lg:h-full lg:max-h-full",
                onClick: et,
              },
              [
                S(
                  "div",
                  {
                    ref_key: "announceSlideChange",
                    ref: r,
                    class: "sr-only",
                    "aria-live": "polite",
                    "aria-atomic": "true",
                  },
                  null,
                  512,
                ),
                y.value
                  ? (O(),
                    A("div", Wt, [
                      o[2] ||
                        (o[2] = S(
                          "div",
                          { class: "swiper-pagination-fraction" },
                          null,
                          -1,
                        )),
                      S("div", Ht, [
                        (O(!0),
                        A(
                          ut,
                          null,
                          ct(
                            t.slides,
                            (m, k) => (
                              O(),
                              A(
                                "div",
                                {
                                  key: k,
                                  class:
                                    "flex-1 h-[2px] bg-white bg-opacity-40 rounded-full overflow-hidden",
                                },
                                [
                                  S(
                                    "div",
                                    {
                                      class:
                                        "h-full bg-yellow-400 rounded-full transition-all duration-100 ease-out",
                                      style: V({
                                        width:
                                          k < i.value
                                            ? "100%"
                                            : k === i.value
                                              ? `${d.value}%`
                                              : "0%",
                                        transform:
                                          k === i.value
                                            ? "translateZ(0)"
                                            : "none",
                                      }),
                                    },
                                    null,
                                    4,
                                  ),
                                ],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      S("div", Ut, [
                        S("div", Kt, [
                          I(
                            s,
                            {
                              role: "button",
                              "aria-label": "Diapositiva anterior",
                              variant: "white",
                              size: "s",
                              shape: "icon",
                              "icon-name": "customArrow",
                              disabled: h.value,
                              class: "rotate-90",
                              onClick: o[0] || (o[0] = (m) => z()),
                            },
                            null,
                            8,
                            ["disabled"],
                          ),
                        ]),
                        I(
                          s,
                          {
                            role: "button",
                            "aria-label": "Siguiente diapositiva",
                            variant: "white",
                            shape: "icon",
                            size: "s",
                            "icon-name": "customArrow",
                            disabled: h.value,
                            class: "drop-shadow-md",
                            onClick: o[1] || (o[1] = (m) => u()),
                          },
                          null,
                          8,
                          ["disabled"],
                        ),
                      ]),
                    ]))
                  : H("", !0),
                I(
                  T,
                  {
                    role: "region",
                    "aria-roledescription": "carousel",
                    "aria-label": `Carousel de ${t.slides.length} stories`,
                    tabindex: "0",
                    class: "w-full h-full mx-auto relative tablet:rounded-8",
                    "space-between": "0",
                    "slides-per-view": 1,
                    pagination: {
                      el: ".swiper-pagination-fraction",
                      type: "fraction",
                    },
                    keyboard: {
                      enabled: !0,
                      onlyInViewport: !1,
                      pageUpDown: !1,
                    },
                    a11y: {
                      enabled: !0,
                      prevSlideMessage: "Story anterior",
                      nextSlideMessage: "Story siguiente",
                      firstSlideMessage: "Primera story",
                      lastSlideMessage: "Última story",
                      containerMessage:
                        "Carousel de stories. Usa las flechas izquierda y derecha para navegar.",
                    },
                    autoplay: !1,
                    speed: t.speed,
                    effect: "fade",
                    modules: C,
                    loop: t.loop && y.value,
                    "allow-touch-move": !1,
                    onSwiper: tt,
                    onSlideChange: q,
                  },
                  {
                    default: ot(() => [
                      (O(!0),
                      A(
                        ut,
                        null,
                        ct(
                          t.slides,
                          (m, k) => (
                            O(),
                            bt(
                              w,
                              {
                                key: `slide-${k}`,
                                "aria-label": `Story ${k + 1} de ${t.slides.length}: ${m.title}`,
                                "aria-roledescription": "slide",
                                class: "relative h-full",
                              },
                              {
                                default: ot(() => [
                                  S(
                                    "div",
                                    {
                                      class: $([
                                        "absolute bottom-0 left-0 flex flex-col gap-6 items-start will-change-transform max-w-full pt-4 pb-10 px-6 w-full z-10",
                                        { "opacity-0": k !== i.value },
                                      ]),
                                    },
                                    [
                                      S(
                                        "h2",
                                        {
                                          id: `story-title-${k}`,
                                          ref_for: !0,
                                          ref: (G) => (x.value[k] = G),
                                          class: $([
                                            "text-title-m tablet:text-title-l 1920:text-title-xl font-bold will-change-transform block",
                                            L(m),
                                          ]),
                                        },
                                        gt(m.title),
                                        11,
                                        Vt,
                                      ),
                                      m.cta
                                        ? (O(),
                                          A("div", Xt, [
                                            I(
                                              s,
                                              {
                                                ref_for: !0,
                                                ref: (G) => (v.value[k] = G),
                                                label: m.cta.label,
                                                to: m.cta.url,
                                                variant:
                                                  m.cta.variant || "white",
                                                class:
                                                  "will-change-transform text-sm tablet:text-base",
                                                "aria-describedby": `story-title-${k}`,
                                                onClick: m.cta.onClick,
                                              },
                                              null,
                                              8,
                                              [
                                                "label",
                                                "to",
                                                "variant",
                                                "aria-describedby",
                                                "onClick",
                                              ],
                                            ),
                                          ]))
                                        : H("", !0),
                                      m.legalText
                                        ? (O(),
                                          A(
                                            "p",
                                            {
                                              key: 1,
                                              ref_for: !0,
                                              ref: (G) => (b.value[k] = G),
                                              class: $([
                                                "text-xs tablet:text-sm xxl:text-body-lg line-clamp-2 tablet:line-clamp-1 will-change-transform",
                                                L(m),
                                              ]),
                                              role: "note",
                                              "aria-label": "Texto legal",
                                              innerHTML: m.legalText,
                                            },
                                            null,
                                            10,
                                            Zt,
                                          ))
                                        : H("", !0),
                                    ],
                                    2,
                                  ),
                                  I(
                                    p,
                                    {
                                      image: {
                                        url: m.src,
                                        alt: `Story ${k + 1}: ${m.title}`,
                                      },
                                      "wrapper-class":
                                        "h-full w-full object-cover object-top",
                                      "aria-hidden": k !== i.value,
                                    },
                                    null,
                                    8,
                                    ["image", "aria-hidden"],
                                  ),
                                  m.src ? (O(), A("div", Jt)) : H("", !0),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["aria-label"],
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["aria-label", "speed", "loop"],
                ),
              ],
            )
          );
        }
      );
    },
  }),
  Yt = it(Qt, [["__scopeId", "data-v-d89a631e"]]),
  te = {
    class:
      "flex flex-col items-stretch justify-start w-full p-0 z-10 smaller-tablet:flex-row smaller-tablet:items-stretch smaller-tablet:justify-center smaller-tablet:gap-6 smaller-tablet:px-6 smaller-tablet:pb-16 tablet:flex-row tablet:items-stretch tablet:justify-center tablet:gap-6 1250:pb-[96px] 1250:gap-10 min-h-auto desktop:px-10 1440:px-[120px]",
    role: "region",
    "aria-label": "Nuevas ofertas y promociones",
  },
  ee = Z({
    __name: "SectionNewOffersCombo",
    props: {
      storySlides: { default: () => [] },
      mainOffer: { default: () => ({}) },
    },
    setup(t) {
      const c = mt(),
        a = _(null),
        i = _(null);
      let d = null;
      const r = () => {
          const x = window.matchMedia(
              "(prefers-reduced-motion: reduce)",
            ).matches,
            v = c.isMobile?.value;
          if (x || v) {
            (a.value && l.set(a.value, { opacity: 1, y: 0 }),
              i.value && l.set(i.value, { opacity: 1, y: 0 }));
            return;
          }
          (a.value &&
            l.set(a.value, {
              opacity: 0,
              y: 80,
              transformOrigin: "center bottom",
            }),
            i.value &&
              l.set(i.value, {
                opacity: 0,
                y: 80,
                transformOrigin: "center bottom",
              }),
            (d = l.timeline({ delay: 1.5 })),
            a.value &&
              d.to(a.value, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
              }),
            i.value &&
              d.to(
                i.value,
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=0.7",
              ));
        },
        h = () => {
          d && (d.kill(), (d = null));
        };
      return (
        nt(() => {
          typeof window < "u" &&
            requestAnimationFrame(() => {
              r();
            });
        }),
        st(() => {
          h();
        }),
        (x, v) => {
          const b = qt,
            n = Yt;
          return (
            O(),
            A("section", te, [
              S(
                "div",
                {
                  ref_key: "mainOfferRef",
                  ref: a,
                  class:
                    "w-full flex flex-col smaller-tablet:rounded-8 tablet:w-1/2 smaller-tablet:w-1/2 lg:w-2/3 lg:max-h-full",
                  role: "article",
                  "aria-label": "Oferta principal",
                },
                [I(b, Mt(zt(t.mainOffer)), null, 16)],
                512,
              ),
              S(
                "div",
                {
                  ref_key: "storiesRef",
                  ref: i,
                  class:
                    "w-full flex flex-col smaller-tablet:rounded-8 tablet:w-1/2 smaller-tablet:w-1/2 lg:w-1/3",
                  "aria-label": "Stories y ofertas",
                },
                [
                  I(
                    n,
                    {
                      "show-controls": "",
                      slides: t.storySlides,
                      "aria-label": `Carrusel de ${t.storySlides.length} ofertas`,
                    },
                    null,
                    8,
                    ["slides", "aria-label"],
                  ),
                ],
                512,
              ),
            ])
          );
        }
      );
    },
  }),
  le = it(ee, [["__scopeId", "data-v-2cec30f2"]]),
  ae = ["data-slice-type", "data-slice-variation"],
  ye = Z({
    __name: "index",
    props: yt(),
    setup(t) {
      const c = t,
        { $gtmClickBoton: a, $gtmClickBotonCarrusel: i } = vt(),
        d = c.slice,
        r = d.primary.main_offer,
        h = r?.data
          ? {
              title: r.data.title?.trim() || "",
              ...(r.data.cta && {
                cta: {
                  label: r.data.cta.text,
                  onClick: () => {
                    a(r.data?.cta?.text ?? "", at(r.data?.cta) ?? "#");
                  },
                  to: at(r.data.cta) || "#",
                  ...(r.data.cta_color && { color: r.data.cta_color }),
                  target:
                    "target" in r.data.cta && r.data.cta.target
                      ? r.data.cta.target
                      : "_self",
                },
              }),
              disableAnimations: !1,
            }
          : {
              title: "",
              cta: { label: "", to: "#", target: "_self" },
              image: { url: "", alt: "" },
              disableAnimations: !1,
            },
        v = (d.primary.stories ?? [])
          .map(({ story: b }) => {
            const n = b?.data;
            if (!n) return null;
            const g = n.title?.trim() || "",
              f = n.image?.url || "";
            let y;
            if (n.cta && n.cta.link_type && n.cta.link_type !== "Any") {
              const N = at(n.cta) || "";
              N &&
                (y = {
                  label: n.cta.text?.trim() || "",
                  url: N,
                  gtm: n.cta_gtm?.trim() || n.title?.trim() || "",
                  onClick: () =>
                    i(n.cta_gtm?.trim() || n.title?.trim() || "", N),
                });
            }
            let C;
            Array.isArray(n.legal) &&
              n.legal.length > 0 &&
              (C = Tt(n.legal, "white"));
            const M = n.text_color?.trim() || "white";
            return g
              ? { title: g, src: f, cta: y, legalText: C, textColor: M }
              : null;
          })
          .filter(Boolean);
      return (b, n) => {
        const g = le;
        return (
          O(),
          A(
            "div",
            {
              "data-slice-type": U(d).slice_type,
              "data-slice-variation": U(d).variation,
              class:
                "mt-[-64px] smaller-tablet:-mt-[80px] desktop:mt-[-64px] flex flex-row items-center justify-center",
            },
            [
              I(g, { "story-slides": U(v), "main-offer": U(h) }, null, 8, [
                "story-slides",
                "main-offer",
              ]),
            ],
            8,
            ae,
          )
        );
      };
    },
  });
export { ye as default };
