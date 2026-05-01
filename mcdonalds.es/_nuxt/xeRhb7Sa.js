import {
  k as F,
  _ as T,
  m as L,
  G as oe,
  d as ae,
  f as ne,
  a5 as le,
} from "./w36zW0QG.js";
import { b as se, _ as re } from "./mLrOcWp5.js";
import {
  l as $,
  d as g,
  y as O,
  N as y,
  O as f,
  T as ie,
  W as D,
  A as C,
  Z as w,
  _ as l,
  Q as _,
  $ as k,
  a1 as U,
  m as x,
  v as q,
  D as j,
  U as ce,
  Y as ue,
  R as E,
  V as N,
  u as h,
  X as de,
  P as pe,
} from "./CG2MQ2lF.js";
import { a as me, _ as fe } from "./D18dnFZp.js";
import { _ as ge } from "./0ezNE6nl.js";
import { _ as _e } from "./D_VYAWoq.js";
import { _ as P } from "./n9BDgNm5.js";
import { _ as be } from "./CL2JetmS.js";
import { u as I } from "./CiCdwUBr.js";
import { g as d } from "./DKtf60Sy.js";
import { S as A } from "./BWsqEc1I.js";
import { S as z } from "./Cpc1cBKW.js";
import { _ as he } from "./C1iML8Tv.js";
import { s as xe } from "./C3J3pyEk.js";
import { u as W } from "./Dd6G2nWB.js";
import { u as ve } from "./D87woA3U.js";
import "./Bj0JfLHo.js";
import "./D8jQnJCR.js";
import "./Ca9Ptn7z.js";
import "./X_wUNWL3.js";
import "./fwO26FrS.js";
import "./D7a1xk7w.js";
import "./BGfOVFyB.js";
import "./DNNWU6PG.js";
import "./9UZMSW1R.js";
import "./DhdId782.js";
import "./3AjKDk5D.js";
import "./CLk6oGrE.js";
import "./CR2X5H6X.js";
import "./DMEQSfw8.js";
import "./tJXeJJ_G.js";
import "./BMQmZPly.js";
import "./9C9qpSPh.js";
import "./Dn2iLLNP.js";
const we = {
    key: 0,
    class:
      "fixed top-0 left-0 right-0 bg-[#EAEAEA] z-50 pl-2 pr-4 py-3 flex items-center justify-between shadow-secondary",
  },
  ye = { class: "flex items-center gap-2" },
  Ce = $({
    __name: "SmartBanner",
    setup(e) {
      const a = g(!0),
        c = () => {
          ((a.value = !1), localStorage.setItem("smartBannerClosed", "true"));
        },
        n = () => {
          const r = "https://apps.apple.com/es/app/mcdonalds/id1217507712",
            t =
              "https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp",
            s = navigator.userAgent || navigator.vendor;
          /iPad|iPhone|iPod/.test(s)
            ? (window.location.href = r)
            : /android/i.test(s) && (window.location.href = t);
        };
      return (
        O(() => {
          localStorage.getItem("smartBannerClosed") === "true" &&
            (a.value = !1);
        }),
        (r, t) => {
          const s = F,
            i = se;
          return (
            f(),
            y(
              ie,
              { name: "slide" },
              {
                default: D(() => [
                  a.value
                    ? (f(),
                      C("div", we, [
                        l("div", ye, [
                          l("button", { onClick: c }, [
                            _(s, { name: "controlsClose" }),
                          ]),
                          _(i, { "bg-color": "white", size: "xl" }),
                          t[0] ||
                            (t[0] = l(
                              "div",
                              null,
                              [
                                l(
                                  "h3",
                                  {
                                    class: "font-bold text-black text-title-xs",
                                  },
                                  "McDonald's App",
                                ),
                                l(
                                  "p",
                                  {
                                    class:
                                      "text-body-m text-text-mcd-secondary",
                                  },
                                  " Ofertas y acumula puntos ",
                                ),
                              ],
                              -1,
                            )),
                        ]),
                        l("div", { class: "flex items-center gap-3" }, [
                          l(
                            "span",
                            { class: "text-text-link text-body-m", onClick: n },
                            " Descargar ",
                          ),
                        ]),
                      ]))
                    : w("", !0),
                ]),
                _: 1,
              },
            )
          );
        }
      );
    },
  }),
  ke = T(Ce, [["__scopeId", "data-v-3a26ee1c"]]);
function Ae({
  welcomeOfferCard: e,
  productImage: a,
  offerContent: c,
  priceContainer: n,
  coinContainer: r,
  config: t,
  disabled: s,
}) {
  let i = null,
    u = null;
  const p = () => {
      !e.value ||
        !a.value ||
        !c.value ||
        !n.value ||
        s ||
        ((i = d.timeline({
          scrollTrigger: {
            id: "welcome-offer-card",
            trigger: e.value,
            start: "top center",
          },
        })),
        i
          .from(e.value, { scale: 0.9, duration: t.duration, ease: t.ease })
          .fromTo(
            a.value,
            { scale: 0.95 },
            { scale: 1, duration: t.duration, ease: t.ease },
            "<",
          )
          .from(
            c.value,
            { y: t.contentMovement, duration: t.duration, ease: t.ease },
            "<",
          )
          .from(
            n.value,
            { y: t.priceMovement, duration: t.duration, ease: t.ease },
            "<",
          ));
    },
    b = () => {
      if (!r.value || s) return;
      d.set("#welcomeoffer--title", { opacity: 1 });
      let m;
      (z.create("#welcomeoffer--title", {
        type: "lines",
        linesClass: "line",
        autoSplit: !0,
        mask: "lines",
        onSplit: (S) => (
          (m = d.from(S.lines, {
            duration: t.duration,
            yPercent: 100,
            opacity: 0,
            stagger: 0,
            ease: "expo.out",
            scrollTrigger: {
              id: "welcome-offer-title",
              trigger: r.value,
              start: "top center",
              markers: !1,
            },
          })),
          m
        ),
      }),
        (u = m));
    };
  return {
    setupCardAnimations: () => {
      s || (d.registerPlugin(A, z), p(), b());
    },
    cleanupCardAnimations: () => {
      (i && (i.kill(), (i = null)),
        u && (u.kill(), (u = null)),
        A.getAll().forEach((m) => {
          m.vars.id?.includes("welcome-offer") && m.kill();
        }));
    },
  };
}
const $e = { to: "/", label: "¡ÚNETE A MCDONALD'S!" },
  H = {
    url: "https://images.prismic.io/mcdonalds/aDbY1idWJ-7kSncG_bigmac-servilleta.png",
    alt: "Imagen de una Big Mac sobre una servilleta con el logo de McDonald's",
  },
  G = {
    coins: {
      duration: 8,
      scrub: 5,
      movementRange: { x: 50, y: 50, rotation: 45 },
      ease: "power2.inOut",
    },
    offerCard: {
      duration: 1.8,
      initialScale: 0.6,
      contentMovement: 500,
      priceMovement: 200,
      ease: "power2.out",
    },
    disabled: !1,
  },
  Se = $({
    name: "WelcomeOfferCard",
    inheritAttrs: !1,
    props: {
      price: { type: Number, required: !0, default: 1.5 },
      offerDesc: {
        type: String,
        required: !1,
        default:
          "Esta oferta y muchas más, <strong>¡solo en nuestra App!</strong>",
      },
      btn: { type: Object, default: () => $e, required: !1 },
      productImage: { type: Object, default: () => H, required: !0 },
      disableAnimations: { type: Boolean, default: !1, required: !1 },
      coinContainer: { type: Object, default: null, required: !1 },
    },
    setup(e) {
      const a = I(),
        c = g(null),
        n = g(null),
        r = g(null),
        t = g(null),
        s = x(() => (a.isMobile.value ? "s" : "m")),
        i = x(() => e.price.toFixed(2).split(".")),
        u = x(() => ({ ...G, disabled: e.disableAnimations })),
        { setupCardAnimations: p, cleanupCardAnimations: b } = Ae({
          welcomeOfferCard: c,
          productImage: n,
          offerContent: r,
          priceContainer: t,
          coinContainer: x(() => e.coinContainer),
          config: u.value.offerCard,
          disabled: u.value.disabled,
        }),
        v = () => {};
      return (
        O(() => {
          q(() => {
            p();
          });
        }),
        j(() => {
          b();
        }),
        {
          welcomeOfferCard: c,
          productImageRef: n,
          offerContent: r,
          priceContainer: t,
          buttonSize: s,
          priceFormatted: i,
          offerDescription: e.offerDesc,
          btnObj: e.btn,
          productImageObj: e.productImage,
          handleMymcdClick: v,
        }
      );
    },
  }),
  De = { class: "w-full px-4 overflow-hidden md:px-0" },
  Oe = {
    ref: "welcomeOfferCard",
    class:
      "flex flex-col items-center justify-center w-full pt-6 overflow-hidden rounded-lg pb-11 md:pb-6 md:px-10",
  },
  Me = {
    class:
      "flex flex-col -space-y-32 md:flex-row md:w-full md:items-center md:justify-center md:-space-x-12 md:pt-5",
  },
  Te = {
    class:
      "relative w-full flex justify-center items-center h-auto overflow-hidden md:w-auto md:pb-4",
  },
  je = ["aria-label"],
  Ie = {
    "aria-hidden": "true",
    class:
      "font-bold text-[238px] leading-[80%] md:text-[310px] xl:text-[404px]",
  },
  Be = {
    "aria-hidden": "true",
    class:
      "flex flex-col justify-center font-bold leading-[72%] text-[118px] -tracking-[2px] md:text-[146px] xl:text-[190px]",
  },
  qe = { ref: "productImageRef" },
  Pe = {
    ref: "offerContent",
    class:
      "max-w-[245px] h-auto flex flex-col gap-4 items-center justify-center md:max-w-none md:px-9 md:flex-row-reverse md:gap-6 md:pt-6",
  },
  Re = ["innerHTML"];
function Ee(e, a, c, n, r, t) {
  const s = me,
    i = P,
    u = L,
    p = be;
  return (
    f(),
    C("div", De, [
      _(
        p,
        { role: "region", class: "rounded-8" },
        {
          default: D(() => [
            l(
              "div",
              Oe,
              [
                _(
                  s,
                  {
                    "aria-label": "Descargar la app de McDonald's",
                    onClick: e.handleMymcdClick,
                  },
                  null,
                  8,
                  ["onClick"],
                ),
                l("div", Me, [
                  l("div", Te, [
                    l(
                      "div",
                      {
                        ref: "priceContainer",
                        class:
                          "text-white flex flex-row font-speedeecd items-center justify-center",
                        style: { height: "100%" },
                        "aria-label": `Precio de la oferta: ${e.priceFormatted[0]} coma ${e.priceFormatted[1]} euros`,
                        role: "text",
                      },
                      [
                        l("p", Ie, k(e.priceFormatted[0]), 1),
                        l("span", Be, [
                          l("p", null, "'" + k(e.priceFormatted[1]), 1),
                          a[0] || (a[0] = l("p", null, " €", -1)),
                        ]),
                      ],
                      8,
                      je,
                    ),
                  ]),
                  l(
                    "div",
                    qe,
                    [
                      _(
                        i,
                        {
                          image: e.productImageObj,
                          "wrapper-class":
                            "w-[328px] h-auto relative md:w-[380px] lg:w-[540px]",
                        },
                        null,
                        8,
                        ["image"],
                      ),
                    ],
                    512,
                  ),
                ]),
                l(
                  "div",
                  Pe,
                  [
                    l(
                      "p",
                      {
                        class:
                          "text-center text-title-xs text-white md:max-w-[250px] md:text-left md:leading-[26px] lg:text-[20px] lg:max-w-[271px]",
                        innerHTML: e.offerDescription,
                      },
                      null,
                      8,
                      Re,
                    ),
                    e.btnObj
                      ? (f(),
                        y(
                          u,
                          {
                            key: 0,
                            size: e.buttonSize,
                            to: e.btnObj.to,
                            target: e.btnObj.target,
                            class: "text-[14px] md:text-[16px]",
                            "aria-label": `Botón para ${e.btnObj.label}`,
                            onClick: e.btnObj.onClick,
                          },
                          { default: D(() => [U(k(e.btnObj.label), 1)]), _: 1 },
                          8,
                          ["size", "to", "target", "aria-label", "onClick"],
                        ))
                      : w("", !0),
                  ],
                  512,
                ),
              ],
              512,
            ),
          ]),
          _: 1,
        },
      ),
    ])
  );
}
const Ne = T(Se, [["render", Ee]]);
function ze({
  cardContainer: e,
  imageRef: a,
  logoRef: c,
  config: n,
  disabled: r,
}) {
  let t = null,
    s = null;
  const { isMobile: i, isTablet: u } = I(),
    p = () => {
      !e.value ||
        !a.value ||
        !c.value ||
        r ||
        ((t = d.timeline({
          scrollTrigger: {
            id: "social-card-main",
            trigger: e.value,
            start: "top center",
            toggleActions: "play pause resume pause",
            markers: !1,
            invalidateOnRefresh: !0,
          },
        })),
        d.set(a.value, { scale: n.initialScale }),
        t
          .to(a.value, {
            scale: 1.2,
            duration: n.duration,
            ease: "power2.inOut",
          })
          .fromTo(
            c.value,
            { scale: 0.6, rotate: 5 },
            { scale: 1, rotate: 0, duration: n.duration, ease: "expo.inOut" },
            "<",
          )
          .from(
            ".card-social-new--icon",
            {
              rotate: 45,
              scale: 0.8,
              ease: "power2.inOut",
              duration: n.duration,
              stagger: n.stagger,
            },
            "<",
          ));
    },
    b = () => {
      if (!e.value || !a.value || r) return;
      const m = () =>
        i.value
          ? n.parallaxStrength.mobile
          : u.value
            ? n.parallaxStrength.tablet
            : n.parallaxStrength.desktop;
      s = d.to(a.value, {
        yPercent: m(),
        scrollTrigger: {
          id: "social-card-parallax",
          trigger: e.value,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: !0,
          markers: !1,
        },
      });
    };
  return {
    setupAnimations: () => {
      r || (d.registerPlugin(A), p(), b());
    },
    cleanupAnimations: () => {
      (t && (t.kill(), (t = null)),
        s && (s.kill(), (s = null)),
        A.getAll().forEach((m) => {
          m.vars.id?.includes("social-card") && m.kill();
        }));
    },
  };
}
const Fe = [
    {
      title: "Facebook",
      url: "https://es-es.facebook.com/McDonaldsSpain",
      icon: "socialFacebookSolid",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/mcdonalds_es",
      icon: "socialInstagramSolid",
    },
    {
      title: "Youtube",
      url: "https://www.youtube.com/channel/UCnD6pQmtDCx-vhe0q0B5zkA",
      icon: "socialYoutubeSolid",
    },
    {
      title: "TikTok",
      url: "https://www.tiktok.com/@mcdonalds_es",
      icon: "socialTiktokSolid",
    },
  ],
  Le = {
    url: "https://images.prismic.io/mcdonalds-dev/aGYk-nfc4bHWi_Yi_MCD_RRSS.png?auto=format,compress",
    alt: "McDonald's social media background",
  },
  Ue = {
    duration: 1,
    stagger: 0.1,
    initialScale: 1.3,
    parallaxStrength: { mobile: -3, tablet: -5, desktop: -10 },
  },
  We = $({
    name: "CardSocialNew",
    inheritAttrs: !1,
    props: {
      target: { type: String, default: "_blank", required: !1 },
      copy: {
        type: String,
        default: "Síguenos y estate al tanto de todo :)",
        required: !1,
      },
      socialIcons: { type: Array, default: () => Fe, required: !1 },
      backgroundImage: { type: Object, default: () => Le, required: !0 },
      disableAnimations: { type: Boolean, default: !1, required: !1 },
    },
    setup(e) {
      const a = I(),
        c = g(null),
        n = g(null),
        r = g(null),
        { setupAnimations: t, cleanupAnimations: s } = ze({
          cardContainer: c,
          imageRef: n,
          logoRef: r,
          config: Ue,
          disabled: e.disableAnimations,
        }),
        i = x(() => (a.isMobile.value ? "s" : "m"));
      return (
        O(() => {
          q(() => {
            t();
          });
        }),
        j(() => {
          s();
        }),
        { cardContainer: c, imageRef: n, logoRef: r, iconSize: i }
      );
    },
  }),
  He = {
    ref: "cardContainer",
    class:
      "relative flex items-center justify-center w-full h-full rounded-lg overflow-hidden min-h-[302px] xl:max-h-none",
  },
  Ge = {
    class:
      "z-10 px-[18px] h-full pb-8 pt-6 flex flex-col gap-2 items-center justify-center text-white md:px-7 lg:px-20 xl:py-20 2xl:py-40",
  },
  Ye = { ref: "logoRef" },
  Xe = { class: "flex flex-col gap-4 md:gap-6" },
  Ve = {
    class:
      "text-[36px] leading-[38px] -tracking-[1.2px] font-bold text-center xl:text-[56px] xl:leading-[58px] xl:-tracking-[1.5px]",
  },
  Je = { class: "flex flex-row items-center justify-center gap-4" },
  Ze = {
    ref: "imageRef",
    "aria-hidden": "true",
    class: "absolute top-0 left-0 w-full h-full bg-[#264F36]",
  };
function Qe(e, a, c, n, r, t) {
  const s = F,
    i = oe,
    u = P;
  return (
    f(),
    C(
      "article",
      He,
      [
        l("div", Ge, [
          l(
            "div",
            Ye,
            [
              _(s, {
                name: "bottomNavigationHome",
                size: "5xl",
                color: "#FFBC0D",
                "aria-hidden": "true",
              }),
            ],
            512,
          ),
          l("div", Xe, [
            l("p", Ve, k(e.copy), 1),
            l("div", Je, [
              (f(!0),
              C(
                ce,
                null,
                ue(
                  e.socialIcons,
                  (p, b) => (
                    f(),
                    y(
                      i,
                      {
                        key: b,
                        target: e.target,
                        to: p.url,
                        title: p.title,
                        "aria-label": `Ir a la red social de McDonald's en ${p.title}`,
                        class:
                          "flex items-center justify-center w-8 h-8 rounded-full bg-mcd-gold card-social-new--icon md:w-12 md:h-12 focus-visible:outline-2 focus-visible:outline-white",
                        onClick: p.onClick,
                      },
                      {
                        default: D(() => [
                          _(
                            s,
                            {
                              "aria-hidden": "true",
                              name: p.icon,
                              size: e.iconSize,
                            },
                            null,
                            8,
                            ["name", "size"],
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["target", "to", "title", "aria-label", "onClick"],
                    )
                  ),
                ),
                128,
              )),
            ]),
          ]),
        ]),
        l(
          "div",
          Ze,
          [
            _(
              u,
              {
                image: e.backgroundImage,
                "wrapper-class": "object-cover w-full h-full",
              },
              null,
              8,
              ["image"],
            ),
          ],
          512,
        ),
      ],
      512,
    )
  );
}
const Ke = T(We, [["render", Qe]]),
  et = {
    background: {
      yPercentStart: { mobile: 5, tablet: 7, desktop: 10 },
      scaleStart: 1.4,
      yPercentEnd: { mobile: -5, tablet: -7, desktop: -10 },
      scaleEnd: 1.2,
      scrub: 0.3,
      startOffset: "top bottom+=100",
      endOffset: "bottom top-=100",
    },
    content: { yMovement: 0, scrub: 0.8 },
    backgroundScale: {
      scaleStart: 1.8,
      scaleEnd: 1.2,
      duration: 1,
      ease: "power2.inOut",
    },
    pin: {
      jumpHeight: -20,
      squashScale: 0.8,
      stretchScale: 1.1,
      timing: {
        preJumpSquash: 0.15,
        jumpUp: 0.3,
        atPeak: 0.1,
        fallDown: 0.25,
        landingSquash: 0.2,
        bounceBack: 0.3,
        pause: 0.2,
      },
      easing: {
        preJumpSquash: "power2.out",
        jumpUp: "power2.out",
        atPeak: "none",
        fallDown: "power2.in",
        landingSquash: "power2.out",
        bounceBack: "elastic.out(1, 0.5)",
      },
    },
    shadow: {
      scaleMin: 0.5,
      timing: { shrink: 0.45, expand: 0.35 },
      easing: { shrink: "bounce.out", expand: "power2.in" },
      delay: { shrink: 0.15, expand: 0.6 },
    },
    disabled: !1,
  },
  tt = $({
    inheritAttrs: !1,
    props: {
      copy: {
        type: String,
        default: "Encuentra tu restaurante favorito",
        required: !1,
      },
      btn: {
        type: Object,
        default: () => ({ to: "/", label: "BUSCA TU RESTAURANTE" }),
        required: !1,
      },
      disableAnimations: { type: Boolean, default: !1, required: !1 },
    },
    setup(e) {
      const a = g(null),
        c = g(null),
        n = g(null),
        r = g(null),
        { isMobile: t, isTablet: s } = I();
      let i, u;
      const p = x(() => ({ ...et, disabled: e.disableAnimations })),
        b = (o) =>
          typeof o == "object" && o.mobile !== void 0
            ? t.value
              ? o.mobile
              : s.value
                ? o.tablet
                : o.desktop
            : o,
        v = () => {
          if (!a.value || !c.value || !n.value || !r.value || p.value.disabled)
            return;
          d.registerPlugin(A);
          const o = p.value;
          ((i = d.timeline({
            scrollTrigger: {
              id: "search-restaurant",
              trigger: a.value,
              start: "top center",
              toggleActions: "play pause resume pause",
              markers: !1,
            },
          })),
            i.fromTo(
              c.value,
              { scale: o.backgroundScale.scaleStart },
              {
                scale: o.backgroundScale.scaleEnd,
                ease: "power2.inOut",
                duration: 1.2,
              },
            ),
            d.fromTo(
              c.value,
              { yPercent: b(o.background.yPercentStart) },
              {
                yPercent: b(o.background.yPercentEnd),
                scrollTrigger: {
                  id: "search-restaurant-bg",
                  trigger: a.value,
                  start: o.background.startOffset,
                  end: o.background.endOffset,
                  scrub: o.background.scrub,
                  invalidateOnRefresh: !0,
                  markers: !1,
                },
              },
            ));
          const m = a.value.querySelector(".z-10");
          (m &&
            o.content.yMovement !== 0 &&
            d.fromTo(
              m,
              { y: 0 },
              {
                y: o.content.yMovement,
                scrollTrigger: {
                  id: "search-restaurant-content",
                  trigger: a.value,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: o.content.scrub,
                  invalidateOnRefresh: !0,
                  markers: !1,
                },
              },
            ),
            (u = d.timeline({
              scrollTrigger: {
                id: "search-restaurant-pin",
                trigger: a.value,
                start: "top-=40% center",
                markers: !1,
                invalidateOnRefresh: !0,
              },
              repeat: -1,
            })),
            u
              .to(n.value, {
                scaleX: o.pin.squashScale,
                scaleY: o.pin.squashScale,
                duration: o.pin.timing.preJumpSquash,
                ease: o.pin.easing.preJumpSquash,
              })
              .to(n.value, {
                y: o.pin.jumpHeight,
                scaleX: o.pin.stretchScale,
                scaleY: 1,
                duration: o.pin.timing.jumpUp,
                ease: o.pin.easing.jumpUp,
              })
              .to(n.value, {
                scaleX: 1,
                duration: o.pin.timing.atPeak,
                ease: o.pin.easing.atPeak,
              })
              .to(n.value, {
                y: 0,
                scaleX: 1.05,
                duration: o.pin.timing.fallDown,
                ease: o.pin.easing.fallDown,
              })
              .to(n.value, {
                scaleX: 0.9,
                scaleY: 0.9,
                duration: o.pin.timing.landingSquash,
                ease: o.pin.easing.landingSquash,
              })
              .to(n.value, {
                scaleX: 1,
                scaleY: 1,
                duration: o.pin.timing.bounceBack,
                ease: o.pin.easing.bounceBack,
              })
              .to(n.value, { duration: o.pin.timing.pause }),
            u
              .to(
                r.value,
                {
                  scaleX: o.shadow.scaleMin,
                  duration: o.shadow.timing.shrink,
                  ease: o.shadow.easing.shrink,
                },
                o.shadow.delay.shrink,
              )
              .to(
                r.value,
                {
                  scaleX: 1,
                  duration: o.shadow.timing.expand,
                  ease: o.shadow.easing.expand,
                },
                o.shadow.delay.expand,
              ));
        };
      return (
        O(() => {
          v();
        }),
        j(() => {
          (i && i.kill(), u && u.kill());
        }),
        { searchResCard: a, backgroundImg: c, mcdPin: n, mcdPinShadow: r }
      );
    },
  }),
  ot = {
    ref: "searchResCard",
    class:
      "relative flex items-center justify-center w-full h-full rounded-lg overflow-hidden min-h-[318px] xl:max-h-none",
  },
  at = {
    class:
      "z-10 px-[18px] pb-8 pt-6 w-full h-full flex flex-col gap-2 items-center justify-center md:px-7 xl:px-20 xl:py-20 2xl:py-40",
  },
  nt = {
    "aria-hidden": "true",
    class: "relative flex items-center justify-center",
  },
  lt = { ref: "mcdPin", class: "z-10 origin-bottom" },
  st = { ref: "mcdPinShadow", class: "opacity-50 absolute -bottom-1" },
  rt = { class: "flex flex-col items-center justify-center gap-4 md:gap-6" },
  it = {
    class:
      "text-[36px] leading-[38px] -tracking-[1.2px] font-bold text-center xl:text-[56px] xl:leading-[58px] xl:-tracking-[1.5px]",
  },
  ct = {
    ref: "backgroundImg",
    "aria-hidden": "true",
    class: "absolute top-0 left-0 w-full h-full",
  };
function ut(e, a, c, n, r, t) {
  const s = L,
    i = P;
  return (
    f(),
    C(
      "div",
      ot,
      [
        l("div", at, [
          l("div", nt, [
            l(
              "div",
              lt,
              [
                ...(a[0] ||
                  (a[0] = [
                    l(
                      "svg",
                      {
                        width: "56",
                        height: "76",
                        viewBox: "0 0 56 76",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      [
                        l("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M28.0003 75.2093C29.9723 75.2093 55.5865 54.5197 55.5865 28.2316C55.5865 13.041 43.2357 0.726562 28.0003 0.726562C12.7648 0.726562 0.414063 13.041 0.414062 28.2316C0.414062 54.5197 26.0282 75.2093 28.0003 75.2093Z",
                          fill: "#264F36",
                        }),
                        l("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M35.4645 15.0686C38.1821 15.0686 40.3841 26.2916 40.3841 40.1352H44.3224C44.3224 25.2256 40.3561 13.1401 35.4645 13.1401C32.6813 13.1401 30.1985 16.7731 28.5753 22.4526C26.952 16.7731 24.4692 13.1401 21.686 13.1401C16.7956 13.1401 12.8281 25.2256 12.8281 40.1352H16.7664C16.7664 26.2916 18.9696 15.0686 21.686 15.0686C24.4035 15.0686 26.6067 25.4281 26.6067 38.2067H30.5438C30.5438 25.4281 32.747 15.0686 35.4645 15.0686Z",
                          fill: "#FFBC0D",
                        }),
                      ],
                      -1,
                    ),
                  ])),
              ],
              512,
            ),
            l(
              "div",
              st,
              [
                ...(a[1] ||
                  (a[1] = [
                    l(
                      "svg",
                      {
                        width: "56",
                        height: "12",
                        viewBox: "0 0 56 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      [
                        l("g", { style: { "mix-blend-mode": "multiply" } }, [
                          l("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M28.0003 11.7264C43.2357 11.7264 55.5865 9.25622 55.5865 6.20914C55.5865 3.16205 43.2357 0.691895 28.0003 0.691895C12.7648 0.691895 0.414062 3.16205 0.414062 6.20914C0.414062 9.25622 12.7648 11.7264 28.0003 11.7264Z",
                            fill: "#111111",
                          }),
                        ]),
                      ],
                      -1,
                    ),
                  ])),
              ],
              512,
            ),
          ]),
          l("div", rt, [
            l("p", it, k(e.copy), 1),
            e.btn
              ? (f(),
                y(
                  s,
                  {
                    key: 0,
                    variant: "white",
                    size: "m",
                    to: e.btn.to,
                    onClick: e.btn.onClick,
                  },
                  { default: D(() => [U(k(e.btn.label), 1)]), _: 1 },
                  8,
                  ["to", "onClick"],
                ))
              : w("", !0),
          ]),
        ]),
        l(
          "div",
          ct,
          [
            _(i, {
              image: {
                url: "https://images.prismic.io/mcdonalds/aD7HzLh8WN-LVhDf_search-restaurant-card.jpg",
                alt: "Fondo amarillo con líneas que hacen que se parezca a un mapa donde las líneas son calles o carreteras",
              },
              "wrapper-class": "object-cover w-full h-full",
            }),
          ],
          512,
        ),
      ],
      512,
    )
  );
}
const dt = T(tt, [["render", ut]]);
function pt({
  coinContainer: e,
  coin1: a,
  coin2: c,
  coin3: n,
  coin4: r,
  config: t,
  disabled: s,
}) {
  let i = null,
    u = null;
  const p = () => {
      if (!e.value || !a.value || !c.value || !n.value || !r.value || s) return;
      (d.set(a.value.$el, { bottom: "-50%", left: -20 }),
        d.set(c.value.$el, { left: "15%", bottom: "-50%" }),
        d.set(n.value.$el, { bottom: "-75%", right: "15%" }),
        d.set(r.value.$el, { bottom: "-40%", right: -20 }),
        (i = d.timeline({
          scrollTrigger: {
            id: "welcome-offer-coins-scroll",
            trigger: e.value,
            start: "top bottom",
            end: "bottom bottom",
            scrub: t.scrub,
            markers: !1,
            invalidateOnRefresh: !0,
          },
        })));
      const m = d.matchMedia();
      (i
        .to(a.value.$el, {
          top: t.movementRange.y,
          duration: t.duration,
          yoyo: !0,
          ease: t.ease,
        })
        .to(
          c.value.$el,
          { top: t.movementRange.y * 0.2, duration: t.duration, ease: t.ease },
          "<",
        )
        .to(
          n.value.$el,
          {
            top: t.movementRange.y * 0.8,
            duration: t.duration,
            yoyo: !0,
            ease: t.ease,
          },
          "<",
        )
        .to(r.value.$el, { top: 0, duration: t.duration, ease: t.ease }, "<"),
        m.add("(max-width: 768px)", () => {
          (d.set(a.value.$el, {
            top: t.movementRange.y,
            left: -20,
            bottom: "auto",
          }),
            d.set(c.value.$el, {
              left: "15%",
              top: t.movementRange.y * 0.2,
              bottom: "auto",
            }),
            d.set(n.value.$el, {
              top: t.movementRange.y * 0.8,
              right: "15%",
              bottom: "auto",
            }),
            d.set(r.value.$el, { top: 0, right: -20, bottom: "auto" }));
        }));
    },
    b = () => {
      if (s) return;
      ((u = d.timeline()),
        d.utils.toArray(".welcome-offer--coin").forEach((S) => {
          u.to(S, {
            x: d.utils.random(-t.movementRange.x, t.movementRange.x),
            rotation: d.utils.random(
              -t.movementRange.rotation,
              t.movementRange.rotation,
            ),
            duration: d.utils.random(4, 8),
            ease: "power1.inOut",
            repeat: -1,
            yoyo: !0,
          });
        }));
    };
  return {
    setupCoinsAnimations: () => {
      s || (d.registerPlugin(A), p(), b());
    },
    cleanupCoinsAnimations: () => {
      (i && (i.kill(), (i = null)),
        u && (u.kill(), (u = null)),
        A.getAll().forEach((m) => {
          m.vars.id?.includes("welcome-offer-coins") && m.kill();
        }));
    },
  };
}
const mt = $({
    name: "NewPreFooter",
    inheritAttrs: !1,
    props: {
      title: {
        type: String,
        required: !0,
        default: "Tu oferta de bienvenida te espera",
      },
      price: { type: Number, required: !0, default: 1.5 },
      offerDesc: {
        type: String,
        required: !1,
        default:
          "Esta oferta y muchas más, <strong>¡solo en nuestra App!</strong>",
      },
      btn: { type: Object, default: () => {}, required: !1 },
      productImage: { type: Object, default: () => H, required: !0 },
      disableAnimations: { type: Boolean, default: !1, required: !1 },
      socialCard: { type: Object, default: () => ({}), required: !1 },
      searchCard: { type: Object, default: () => ({}), required: !1 },
    },
    setup(e) {
      const a = g(null),
        c = g(null),
        n = g(null),
        r = g(null),
        t = g(null),
        s = x(() => ({ ...G, disabled: e.disableAnimations })),
        { setupCoinsAnimations: i, cleanupCoinsAnimations: u } = pt({
          coinContainer: a,
          coin1: c,
          coin2: n,
          coin3: r,
          coin4: t,
          config: s.value.coins,
          disabled: s.value.disabled,
        }),
        p = x(
          () =>
            e.title.trim() !== "" &&
            e.price > 0 &&
            e.offerDesc.trim() !== "" &&
            e.productImage !== void 0,
        );
      return (
        O(() => {
          q(() => {
            i();
          });
        }),
        j(() => {
          u();
        }),
        {
          coinContainer: a,
          coin1: c,
          coin2: n,
          coin3: r,
          coin4: t,
          titleProp: e.title,
          showWelcomeOfferCard: p,
        }
      );
    },
  }),
  ft = {
    class:
      "flex flex-col justify-center items-center gap-6 lg:gap-10 py-14 md:px-6 lg:py-24 lg:px-[80px] xl:px-[120px] overflow-x-clip",
  },
  gt = {
    key: 0,
    ref: "coinContainer",
    class: "z-10 w-full flex flex-col md:flex-row-reverse lg:justify-between",
  },
  _t = {
    class:
      "h-[176px] w-full md:w-full md:h-[192px] lg:w-full xl:min-w-[580px] relative",
  },
  bt = { class: "self-end px-4 md:px-0 lg:max-w-[580px] z-10 w-full" },
  ht = {
    id: "welcomeoffer--title",
    class:
      "mr-10 font-bold text-headline-xs md:mr-0 md:text-headline-m xl:text-headline-xxl",
    role: "text",
  },
  xt = {
    class:
      "grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full h-full px-4 items-center justify-center gap-6 md:flex-row md:px-0 lg:gap-10",
  };
function vt(e, a, c, n, r, t) {
  const s = _e,
    i = Ne,
    u = Ke,
    p = dt;
  return (
    f(),
    C("section", ft, [
      e.showWelcomeOfferCard
        ? (f(),
          C(
            "div",
            gt,
            [
              l("div", _t, [
                _(
                  s,
                  {
                    ref: "coin1",
                    direction: "left",
                    size: "l",
                    rotate: -25,
                    blur: "",
                    class: "absolute welcome-offer--coin",
                  },
                  null,
                  512,
                ),
                _(
                  s,
                  {
                    ref: "coin2",
                    direction: "right",
                    size: "3xl",
                    class: "absolute welcome-offer--coin",
                  },
                  null,
                  512,
                ),
                _(
                  s,
                  {
                    ref: "coin3",
                    direction: "left",
                    size: "lg",
                    blur: "",
                    rotate: -25,
                    class: "absolute welcome-offer--coin",
                  },
                  null,
                  512,
                ),
                _(
                  s,
                  {
                    ref: "coin4",
                    direction: "front",
                    size: "l",
                    rotate: -25,
                    class: "absolute welcome-offer--coin",
                  },
                  null,
                  512,
                ),
              ]),
              l("div", bt, [l("div", ht, k(e.titleProp), 1)]),
            ],
            512,
          ))
        : w("", !0),
      e.showWelcomeOfferCard
        ? (f(),
          y(
            i,
            {
              key: 1,
              price: e.price,
              "offer-desc": e.offerDesc,
              btn: e.btn,
              "product-image": e.productImage,
              "disable-animations": e.disableAnimations,
              "coin-container": e.coinContainer,
            },
            null,
            8,
            [
              "price",
              "offer-desc",
              "btn",
              "product-image",
              "disable-animations",
              "coin-container",
            ],
          ))
        : w("", !0),
      l("div", xt, [
        e.socialCard
          ? (f(), y(u, E(N({ key: 0 }, e.socialCard)), null, 16))
          : w("", !0),
        e.searchCard
          ? (f(), y(p, E(N({ key: 1 }, e.searchCard)), null, 16))
          : w("", !0),
      ]),
    ])
  );
}
const wt = T(mt, [
    ["render", vt],
    ["__scopeId", "data-v-0127159f"],
  ]),
  yt = $({
    __name: "NewPrefooter",
    props: { showRowRepeatable: { type: Boolean, default: !0 } },
    setup(e) {
      const { newprefooter: a } = W(),
        {
          title: c,
          price: n,
          offer_description: r,
          button_label: t,
          button_gtm: s,
          button_link: i,
          product_image: u,
          disable_animations: p,
          social_card_background_image: b,
          social_card_copy: v,
          socials: o,
          search_card_button_color: m,
          search_card_button_label: S,
          search_card_button_link: B,
          search_card_button_gtm: Y,
          search_card_copy: X,
        } = a.value,
        { $gtmClickBoton: R, $gtmSocialNetworks: V } = ae(),
        J = x(() => xe(r)),
        Z = x(() => ({
          label: t ?? "",
          to: i?.url ?? "",
          onClick: () => {
            R(s ?? t, i?.url ?? "");
          },
        })),
        Q = x(() => ({
          backgroundImage: b,
          copy: v ?? "",
          socialIcons: o?.map((M) => ({
            ...M,
            url: M.url?.url ?? "",
            onClick: () => {
              V(M.title ?? "", M.url?.url ?? "");
            },
          })),
          disableAnimations: p ?? !1,
        })),
        K = x(() => ({
          btn: {
            to: B?.url ?? "",
            label: S ?? "",
            color: m ?? void 0,
            onClick: () => {
              R(Y || S || "", (B && B.url) || "");
            },
          },
          copy: X ?? "",
          disabledAnimations: p ?? !1,
        }));
      return (M, $t) => {
        const ee = wt,
          te = he;
        return (
          f(),
          C("div", null, [
            _(
              ee,
              {
                title: h(c) ?? "",
                price: h(n) ?? 0,
                "offer-desc": h(J),
                btn: h(Z),
                "product-image": h(u),
                "disable-animations": h(p),
                "social-card": h(Q),
                "search-card": h(K),
              },
              null,
              8,
              [
                "title",
                "price",
                "offer-desc",
                "btn",
                "product-image",
                "disable-animations",
                "social-card",
                "search-card",
              ],
            ),
            e.showRowRepeatable ? (f(), y(te, { key: 0 })) : w("", !0),
          ])
        );
      };
    },
  }),
  Ct = { class: "app-wrapper" },
  kt = { key: 0, class: "block tablet:hidden" },
  At = { class: "w-full mx-auto my-0" },
  ro = $({
    __name: "home",
    setup(e) {
      const a = ve(),
        c = ne(),
        { flyingButtonLinkUrl: n } = W(),
        r = g(!1);
      O(() => {
        setTimeout(() => {
          r.value = !0;
        }, 3500);
      });
      const t = x(() => r.value && !c.isApp);
      return (s, i) => {
        const u = ke,
          p = fe,
          b = ge,
          v = yt,
          o = re,
          m = le;
        return (
          f(),
          y(
            m,
            { name: "base" },
            {
              default: D(() => [
                l("div", Ct, [
                  h(t)
                    ? (f(), C("div", kt, [_(u, { class: "z-[1000]" })]))
                    : w("", !0),
                  _(p),
                  h(n) && !h(c).isApp
                    ? (f(),
                      y(
                        b,
                        {
                          key: 1,
                          bottom: 50,
                          "flying-button-link-url": h(n),
                          "is-fixed": "",
                        },
                        null,
                        8,
                        ["flying-button-link-url"],
                      ))
                    : w("", !0),
                  l(
                    "main",
                    {
                      class: de([
                        "flex-1 absolute top-0 w-full",
                        { "z-10": !h(a).isOpen, "z-50": h(a).isOpen },
                      ]),
                    },
                    [
                      l("div", At, [pe(s.$slots, "default")]),
                      _(v),
                      _(o, { "hide-tagline-and-banner": !0 }),
                    ],
                    2,
                  ),
                ]),
              ]),
              _: 3,
            },
          )
        );
      };
    },
  });
export { ro as default };
