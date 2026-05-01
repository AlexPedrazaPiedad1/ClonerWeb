import { _ as ce } from "./n9BDgNm5.js";
import {
  _ as X,
  af as Z,
  m as de,
  ad as ve,
  d as me,
  ag as N,
  ah as G,
  S as pe,
} from "./w36zW0QG.js";
import { g as s } from "./DKtf60Sy.js";
import { S as J } from "./BWsqEc1I.js";
import { S as q } from "./Cpc1cBKW.js";
import { u as R } from "./CiCdwUBr.js";
import {
  d as u,
  l as U,
  A as f,
  O as v,
  _ as y,
  Z as x,
  a2 as K,
  X as S,
  Q as z,
  $ as ge,
  N as he,
  m as k,
  w as Q,
  v as W,
  y as ee,
  D as fe,
  U as be,
  Y as ye,
  u as j,
} from "./CG2MQ2lF.js";
import { a as we, s as xe } from "./C3J3pyEk.js";
import { c as ke } from "./DLDJGiia.js";
import "./D8jQnJCR.js";
import "./Ca9Ptn7z.js";
import "./X_wUNWL3.js";
const h = {
  animation: {
    mobile: {
      speedMultiplier: 3.5,
      initialOffset: {
        title: { y: 30, scale: 0.95 },
        buttons: { y: 25, scale: 0.98 },
        legal: { y: 20, scale: 0.98 },
        image: { y: 20, scale: 0.9, rotation: -1 },
      },
      durations: { image: 0.2, title: 0.25, buttons: 0.2, legal: 0.15 },
      overlaps: { title: 0.35, buttons: 0.45, legal: 0.3 },
    },
    desktop: {
      speedMultiplier: 3.5,
      initialOffset: {
        title: { y: 50, scale: 0.95 },
        buttons: { y: 40, scale: 0.98 },
        legal: { y: 30, scale: 0.98 },
        image: { y: 30, scale: 0.7, rotation: -5 },
      },
      durations: { image: 0.1, title: 0.1, buttons: 0.1, legal: 0.1 },
      overlaps: { title: 0, buttons: 0, legal: 0 },
    },
    easing: { image: "back.out(2.0)", text: "power1.out" },
  },
  scrollTrigger: { start: "top top", end: "+=80%", scrub: 1, markers: !1 },
  videoFade: {
    duration: 0.5,
    ease: "power2.inOut",
    overlay: {
      start: "0%",
      end: "70%",
      gradient:
        "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.8) 85%, white 100%)",
    },
    blur: { start: 0, end: 8, ease: "power2.out" },
  },
  breakpoints: {
    mobile: 320,
    mobileLg: 428,
    tablet: 768,
    tabletLg: 1024,
    desktop: 1280,
    desktopLg: 1440,
    ultrawide: 1920,
  },
  typography: {
    mobile: {
      xs: { min: "1.5rem", max: "2rem", vh: "2.5vh" },
      sm: { min: "2rem", max: "2.5rem", vh: "3vh" },
      md: { min: "2.5rem", max: "3rem", vh: "3.5vh" },
      lg: { min: "3rem", max: "3.5rem", vh: "4vh" },
      xl: { min: "3.5rem", max: "4rem", vw: "2.3599vw", base: "2.8687rem" },
    },
    tablet: {
      md: { min: "4rem", max: "5rem", vw: "6.2745vw", base: "0.9882rem" },
      lg: { min: "4rem", max: "5rem", vw: "10.0629vw", base: "-4.0503rem" },
    },
    desktop: {
      lg: { size: "64px" },
      xl: { min: "5rem", max: "6rem", vw: "3.3333vw", base: "2rem" },
      xxl: { min: "6rem", max: "16rem", vw: "0.37vw", base: "-1rem" },
    },
  },
  spacing: {
    padding: {
      mobile: { x: "px-4", top: "pt-[80px]", bottom: "pb-6" },
      mobileLg: { bottom: "pb-10" },
      tablet: { x: "px-6", bottom: "pb-[160px]" },
      desktop: { x: "px-10", y: "py-[104px]" },
      desktopLg: { x: "px-10", y: "py-[120px]" },
      ultrawide: { x: "px-[120px]", y: "py-[160px]" },
    },
    gaps: {
      content: { mobile: "16px", tablet: "24px" },
      text: { mobile: "24px", tablet: "40px" },
    },
  },
  images: {
    mobile: { width: "121px", height: "48px" },
    tablet: { width: "202px", height: "80px" },
    desktop: { width: "161px", height: "64px" },
  },
};
s.registerPlugin(q);
function _e({
  titleRef: e,
  descriptionRef: i,
  buttonsRef: c,
  legalRef: n,
  imageRef: t,
  isMobile: d,
}) {
  const r = u(!1),
    l = u(null),
    a = u(null),
    m = u(null),
    p = () => (d.value ? h.animation.mobile : h.animation.desktop),
    g = () => {
      const o = p();
      !e.value ||
        !c.value ||
        (s.set(e.value, { opacity: 0 }),
        i.value && s.set(i.value, { opacity: 0, y: 20 }),
        s.set(c.value, { opacity: 0, ...o.initialOffset.buttons }),
        n.value && s.set(n.value, { opacity: 0, ...o.initialOffset.legal }),
        t.value && s.set(t.value, { opacity: 0, ...o.initialOffset.image }));
    };
  return {
    animationPlayed: r,
    animate: () => {
      if (!e.value || !c.value || r.value) return;
      const o = p(),
        b = s.timeline();
      if (
        ((l.value = b),
        g(),
        t.value &&
          b.to(t.value, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: o.durations.image * o.speedMultiplier,
            ease: h.animation.easing.image,
          }),
        e.value)
      ) {
        const w = t.value ? -o.overlaps.title : 0;
        m.value = w;
        try {
          ((a.value = new q(e.value, { type: "lines", autoSplit: !0 })),
            a.value.lines && a.value.lines.length > 0
              ? (s.set(a.value.lines, { yPercent: 100, opacity: 0 }),
                s.set(e.value, { opacity: 1 }),
                b.to(
                  a.value.lines,
                  {
                    yPercent: 0,
                    opacity: 1,
                    duration: o.durations.title * o.speedMultiplier,
                    stagger: 0.03,
                    ease: h.animation.easing.text,
                  },
                  w,
                ))
              : (s.set(e.value, { opacity: 0, y: 30 }),
                b.to(
                  e.value,
                  {
                    opacity: 1,
                    y: 0,
                    duration: o.durations.title * o.speedMultiplier,
                    ease: h.animation.easing.text,
                  },
                  w,
                )));
        } catch (D) {
          (console.warn("SplitText failed, using fallback animation:", D),
            s.set(e.value, { opacity: 0, y: 30 }),
            b.to(
              e.value,
              {
                opacity: 1,
                y: 0,
                duration: o.durations.title * o.speedMultiplier,
                ease: h.animation.easing.text,
              },
              w,
            ));
        }
      }
      (i.value &&
        b.to(
          i.value,
          {
            opacity: 1,
            y: 0,
            duration: o.durations.title * o.speedMultiplier * 0.8,
            ease: h.animation.easing.text,
          },
          "+=0.05",
        ),
        b.to(
          c.value,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: o.durations.buttons * o.speedMultiplier,
            ease: h.animation.easing.text,
          },
          `-=${o.overlaps.buttons}`,
        ),
        n.value &&
          b.to(
            n.value,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: o.durations.legal * o.speedMultiplier,
              ease: h.animation.easing.text,
            },
            `-=${o.overlaps.legal}`,
          ),
        (r.value = !0));
    },
    reset: () => {
      ((r.value = !1),
        l.value && (l.value.kill(), (l.value = null)),
        a.value && (a.value.revert(), (a.value = null)),
        [t.value, e.value, i.value, c.value, n.value].forEach((o) => {
          o && s.set(o, { clearProps: "all" });
        }));
    },
    cleanup: () => {
      (l.value && (l.value.kill(), (l.value = null)),
        a.value && (a.value.revert(), (a.value = null)));
    },
    setInitialStates: g,
  };
}
s.registerPlugin(J, q);
const Se = U({
    name: "NewHeroSlide",
    inheritAttrs: !1,
    props: {
      hero: { type: Object, required: !0 },
      playAnimation: { type: Boolean, required: !1, default: !1 },
      disableAnimations: { type: Boolean, required: !1, default: !1 },
    },
    setup(e) {
      const { color: i } = e.hero,
        c = R(),
        n = u(),
        t = u(),
        d = u(),
        r = u(),
        l = u(),
        a = u(),
        m = u(),
        p = u(!1),
        g = u(!1),
        _ = u(!1),
        C = k(() => {
          const T = { white: "text-white", black: "text-black" };
          return T[i] || T.white;
        }),
        M = k(() =>
          o.value && e.hero.videoMobile
            ? e.hero.videoMobile
            : c.isTablet.value && e.hero.videoTablet
              ? e.hero.videoTablet
              : e.hero.video
                ? e.hero.video
                : "",
        ),
        o = k(() => !c.isTablet.value && !c.isDesktop.value),
        b = k(() =>
          o.value && e.hero.imageMobile
            ? e.hero.imageMobile
            : e.hero.backgroundImage
              ? e.hero.backgroundImage
              : null,
        ),
        {
          animate: w,
          reset: D,
          cleanup: te,
        } = _e({
          titleRef: n,
          descriptionRef: t,
          buttonsRef: d,
          legalRef: r,
          imageRef: l,
          isMobile: o,
        });
      let E = null;
      const ae = k(() => !e.disableAnimations),
        F = async () => {
          a.value &&
            (await Z(async () => {
              ((a.value.muted = !0),
                a.value.readyState >= 3
                  ? (await a.value.play(), (p.value = !0))
                  : a.value.addEventListener(
                      "canplaythrough",
                      async () => {
                        await Z(async () => {
                          (await a.value.play(), (p.value = !0));
                        });
                      },
                      { once: !0 },
                    ));
            }));
        },
        oe = () => {
          g.value = !0;
        },
        ie = () => {
          if (
            !e.disableAnimations &&
            !(o.value || !m.value) &&
            (c.isTablet.value || c.isDesktop.value)
          ) {
            const T = s.timeline(),
              H = window.innerWidth,
              V = H >= 1920,
              L = H >= 2560,
              $ = H >= 3440,
              I = H >= 3840,
              le = I ? 0.08 : $ ? 0.12 : L ? 0.15 : V ? 0.2 : 0.25,
              ne = I ? 0.04 : $ ? 0.045 : L ? 0.05 : V ? 0.055 : 0.06,
              re = I ? 0.005 : 0.008,
              se = I ? 0.8 : $ ? 1 : L ? 1.2 : V ? 1.5 : 2;
            T.to(
              m.value,
              {
                opacity: 0,
                filter: `blur(${h.videoFade.blur?.end}px)`,
                scale: 1.08,
                ease: "power1.inOut",
                duration: le,
              },
              0,
            );
            const O = [n.value, t.value, d.value, r.value, l.value].filter(
              Boolean,
            );
            if (O.length > 0) {
              const B = I ? 0.003 : $ ? 0.005 : L ? 0.007 : V ? 0.01 : 0.015;
              T.to(
                O,
                {
                  opacity: 0,
                  y: -30,
                  filter: "blur(1.5px)",
                  ease: "power1.inOut",
                  duration: ne,
                  stagger: B,
                },
                re,
              );
            }
            E = J.create({
              trigger: m.value,
              start: h.scrollTrigger.start,
              end: h.scrollTrigger.end,
              markers: h.scrollTrigger.markers,
              animation: T,
              scrub: se,
              pin: !0,
              invalidateOnRefresh: !0,
              anticipatePin: 1,
              refreshPriority: -1,
              fastScrollEnd: !0,
              onUpdate: (B) => {
                const Y = B.progress;
                if (m.value) {
                  const ue = Math.min(Y * (I || $ || L ? 3 : 2), 1);
                  m.value.style.setProperty("--overlay-opacity", ue.toString());
                }
                const P = document.querySelector(".content.absolute");
                Y >= 0.45
                  ? (P &&
                      s.set(P, {
                        pointerEvents: "none",
                        visibility: "hidden",
                        zIndex: -10,
                      }),
                    O.forEach((A) => {
                      A &&
                        s.set(A, {
                          pointerEvents: "none",
                          visibility: "hidden",
                          zIndex: -1,
                        });
                    }))
                  : (P &&
                      s.set(P, {
                        pointerEvents: "auto",
                        visibility: "visible",
                        zIndex: 2,
                      }),
                    O.forEach((A) => {
                      A &&
                        s.set(A, {
                          pointerEvents: "auto",
                          visibility: "visible",
                          zIndex: "auto",
                        });
                    }));
              },
            });
          }
        };
      return (
        Q(() => {
          e.playAnimation && !e.disableAnimations
            ? W(() => {
                ((_.value = !0), D(), w());
              })
            : e.disableAnimations && (_.value = !0);
        }),
        Q(() => {
          a.value && M.value && !p.value && F();
        }),
        ee(() => {
          (a.value &&
            M.value &&
            ((p.value = !1),
            (a.value.muted = !0),
            (a.value.autoplay = !0),
            (a.value.playsInline = !0),
            (a.value.loop = !0),
            a.value.load()),
            e.disableAnimations ||
              W(() => {
                o.value || ie();
              }));
        }),
        fe(() => {
          (te(), E && (E.kill(), (E = null)));
        }),
        {
          textColor: C,
          isMobile: o,
          titleRef: n,
          descriptionRef: t,
          buttonsRef: d,
          legalRef: r,
          imageRef: l,
          videoRef: a,
          videoContainerRef: m,
          videoLoaded: p,
          imageLoaded: g,
          videoSrc: M,
          handleVideoLoad: F,
          handleImageLoad: oe,
          animate: w,
          reset: D,
          backgroundImageSrc: b,
          contentVisible: _,
          shouldAnimate: ae,
        }
      );
    },
  }),
  Me = ["src"],
  Ce = ["src", "alt"],
  Te = { class: "hero-content" },
  Le = { key: 0, ref: "imageRef", class: "hero-content__image-wrapper" },
  $e = { class: "hero-content-2" },
  Ie = ["src", "alt"],
  Ae = ["innerHTML"],
  Ve = { class: "flex flex-col gap-4 tablet:gap-6" },
  De = { ref: "buttonsRef" },
  Ee = { class: "legal-space" },
  He = ["innerHTML"];
function Oe(e, i, c, n, t, d) {
  const r = ce,
    l = de;
  return (
    v(),
    f(
      "div",
      {
        class: S([
          "flex flex-col relative w-full overflow-hidden h-[100dvh] tablet:h-[100vh] max-w-full",
          e.isMobile && e.videoSrc
            ? "h-[calc(100dvh-64px)] min-h-[calc(100dvh-64px)] max-h-[calc(100dvh-64px)]"
            : "",
        ]),
      },
      [
        y(
          "div",
          {
            ref: "videoContainerRef",
            class: S([
              "hero-bg-container",
              { "image-background": !e.videoSrc },
            ]),
          },
          [
            e.videoSrc
              ? (v(),
                f(
                  "video",
                  {
                    key: 0,
                    ref: "videoRef",
                    muted: "",
                    loop: "",
                    playsinline: "",
                    autoplay: "",
                    preload: "auto",
                    class: S([
                      "absolute inset-0 w-screen h-[100dvh] object-cover",
                      e.isMobile
                        ? "h-[calc(100dvh-64px)] min-h-[calc(100dvh-64px)] max-h-[calc(100dvh-64px)]"
                        : "",
                    ]),
                    style: K({
                      opacity: e.videoLoaded ? 1 : 0,
                      transition: "opacity 0.3s ease-out",
                    }),
                    "aria-hidden": "true",
                    onLoadeddata:
                      i[0] ||
                      (i[0] = (...a) =>
                        e.handleVideoLoad && e.handleVideoLoad(...a)),
                    onCanplay:
                      i[1] ||
                      (i[1] = (...a) =>
                        e.handleVideoLoad && e.handleVideoLoad(...a)),
                    onError:
                      i[2] || (i[2] = (a) => console.error("Video error:", a)),
                  },
                  [
                    y(
                      "source",
                      { src: e.videoSrc, type: "video/mp4" },
                      null,
                      8,
                      Me,
                    ),
                  ],
                  38,
                ))
              : e.backgroundImageSrc
                ? (v(),
                  f(
                    "img",
                    {
                      key: 1,
                      src: e.backgroundImageSrc.url,
                      alt: e.backgroundImageSrc.alt,
                      class: "absolute inset-0 w-full h-full object-cover",
                      "aria-hidden": "true",
                      onLoad:
                        i[3] ||
                        (i[3] = (...a) =>
                          e.handleImageLoad && e.handleImageLoad(...a)),
                    },
                    null,
                    40,
                    Ce,
                  ))
                : x("", !0),
          ],
          2,
        ),
        y(
          "div",
          {
            class: S([
              e.textColor,
              "content absolute h-full w-full flex flex-col justify-end desktop:justify-center items-center hero-wrapper",
            ]),
            style: K({
              opacity: e.contentVisible ? 1 : 0,
              transition: "opacity 0.2s",
            }),
          },
          [
            y("div", Te, [
              e.hero.image
                ? (v(),
                  f(
                    "div",
                    Le,
                    [
                      z(
                        r,
                        {
                          image: e.hero.image,
                          "wrapper-class": "hero-content__image",
                        },
                        null,
                        8,
                        ["image"],
                      ),
                    ],
                    512,
                  ))
                : x("", !0),
              y("div", $e, [
                e.hero.logo
                  ? (v(),
                    f(
                      "img",
                      {
                        key: 0,
                        src: e.hero.logo.url,
                        alt: e.hero.logo.alt,
                        class: "w-full h-full max-w-full max-h-full",
                      },
                      null,
                      8,
                      Ie,
                    ))
                  : x("", !0),
                e.hero.title
                  ? (v(),
                    f(
                      "h2",
                      {
                        key: 1,
                        ref: "titleRef",
                        class: S([
                          "hero-title hero-title-splittext text-left font-bold font-speedee selft-strech",
                          e.textColor,
                        ]),
                      },
                      ge(e.hero.title),
                      3,
                    ))
                  : x("", !0),
                e.hero.description
                  ? (v(),
                    f(
                      "p",
                      {
                        key: 2,
                        ref: "descriptionRef",
                        class:
                          "text-title-xs desktop:text-title-s tablet:w-2/3 desktop:w-1/2",
                        innerHTML: e.hero.description,
                      },
                      null,
                      8,
                      Ae,
                    ))
                  : x("", !0),
                y("div", Ve, [
                  y(
                    "div",
                    De,
                    [
                      e.hero.cta
                        ? (v(),
                          he(
                            l,
                            {
                              key: 0,
                              label: e.hero.cta.label,
                              to: e.hero.cta.to,
                              variant: e.hero.cta.color,
                              target: e.hero.cta.target,
                              onClick: e.hero.cta.onClick,
                            },
                            null,
                            8,
                            ["label", "to", "variant", "target", "onClick"],
                          ))
                        : x("", !0),
                    ],
                    512,
                  ),
                  y("div", Ee, [
                    e.hero.legal
                      ? (v(),
                        f(
                          "p",
                          {
                            key: 0,
                            ref: "legalRef",
                            class: "text-center text-body-s tablet:text-body-m",
                            innerHTML: e.hero.legal,
                          },
                          null,
                          8,
                          He,
                        ))
                      : x("", !0),
                  ]),
                ]),
              ]),
            ]),
          ],
          6,
        ),
      ],
      2,
    )
  );
}
const Pe = X(Se, [
    ["render", Oe],
    ["__scopeId", "data-v-92747b7a"],
  ]),
  ze = U({
    inheritAttrs: !1,
    props: {
      hero: { type: Object, required: !0 },
      animated: { type: Boolean, default: !1, required: !1 },
    },
    setup(e) {
      const i = R(),
        c = u(),
        n = u(),
        t = u(),
        d = u(!1),
        r = u(!1),
        l = k(
          () =>
            `/images/separators/wave-${i.isMobile.value ? "mobile" : i.isTablet.value ? "tablet" : "desktop"}-white-hero.png`,
        ),
        a = k(() => (e.animated ? 4 : 1)),
        m = k(() => (i.isMobile.value ? "h-[100dvh]" : "h-[100vh]"));
      return (
        ee(() => {
          if (!e.animated) {
            ((d.value = !0), (r.value = !0));
            return;
          }
          W(() => {
            if (!n.value || !t.value) {
              (console.warn(
                "Ref error: White container or separators not found",
              ),
                (d.value = !0),
                (r.value = !0));
              return;
            }
            const p = i.isMobile.value ? "100dvh" : "100vh",
              g = (i.isMobile.value || i.isTablet.value, "0vh");
            (s.set(n.value, { height: p, opacity: 1 }),
              s.fromTo(
                t.value,
                { xPercent: 0, scaleY: 1, transformOrigin: "top center" },
                { xPercent: -200, scaleY: 0, duration: 1.6, ease: "linear" },
              ));
            const _ = s.timeline({
                onComplete: () => {
                  r.value = !0;
                },
              }),
              C = i.isMobile.value ? 1.8 : i.isTablet.value ? 1.6 : 1.4;
            _.to(n.value, {
              height: g,
              duration: C,
              ease: "power2.out",
              onUpdate: function () {
                this.progress() >= 0.6 && !d.value && (d.value = !0);
              },
            }).to(n.value, {
              opacity: 0,
              height: 0,
              duration: i.isMobile.value ? 0.4 : i.isTablet.value ? 0.3 : 0.2,
              ease: "power2.out",
            });
          });
        }),
        {
          mainSectionRef: c,
          whiteContainerRef: n,
          animationTrigger: d,
          separatorsDivRef: t,
          isAnimated: e.animated,
          waveAnimationCompleted: r,
          imageSrc: l,
          separatorArrayNumber: a,
          containerHeightClass: m,
        }
      );
    },
  }),
  Be = { class: "absolute top-0 w-full h-full overflow-clip" },
  Ne = { class: "absolute h-auto w-full top-0 z-[1]" },
  je = {
    ref: "whiteContainerRef",
    class: "flex items-center justify-center w-full bg-white h-dvh block",
  },
  We = {
    ref: "separatorsDivRef",
    class: "w-full h-auto object-cover flex flex-row flex-nowrap -mt-[2px]",
  },
  qe = ["src"];
function Ue(e, i, c, n, t, d) {
  const r = Pe;
  return (
    v(),
    f(
      "section",
      {
        ref: "mainSectionRef",
        class: S([
          "w-full relative tablet:pb-10 desktop:pb-0",
          e.containerHeightClass,
        ]),
        role: "region",
        "aria-label": "Hero video",
      },
      [
        z(
          r,
          {
            hero: e.hero,
            "play-animation": e.animationTrigger,
            "disable-animations": !e.animated,
          },
          null,
          8,
          ["hero", "play-animation", "disable-animations"],
        ),
        e.isAnimated && !e.waveAnimationCompleted
          ? (v(),
            f(
              "div",
              {
                key: 0,
                class: S([
                  "absolute top-0 w-full overflow-hidden z-[10]",
                  e.containerHeightClass,
                ]),
              },
              [
                y("div", Be, [
                  y("div", Ne, [
                    y("div", je, null, 512),
                    y(
                      "div",
                      We,
                      [
                        (v(!0),
                        f(
                          be,
                          null,
                          ye(
                            e.separatorArrayNumber,
                            (l) => (
                              v(),
                              f(
                                "img",
                                {
                                  key: l,
                                  src: e.imageSrc,
                                  alt: "Separator",
                                  class: S([
                                    "flex-shrink-0 object-cover w-dvw h-auto separator-image -ml-[1px] separator rotate-180",
                                    `separator-${l}`,
                                  ]),
                                },
                                null,
                                10,
                                qe,
                              )
                            ),
                          ),
                          128,
                        )),
                      ],
                      512,
                    ),
                  ]),
                ]),
              ],
              2,
            ))
          : x("", !0),
      ],
      2,
    )
  );
}
const Fe = X(ze, [
    ["render", Ue],
    ["__scopeId", "data-v-c9019ded"],
  ]),
  Ye = ["data-slice-type", "data-slice-variation"],
  lt = U({
    __name: "index",
    props: ve(),
    setup(e) {
      const i = e,
        { $gtmClickBoton: c } = me(),
        n = i.slice.primary.content,
        t = n && "data" in n ? n.data : {},
        d = t.slices ?? [],
        r = N(t.video),
        l = N(t.videomobile),
        a = N(t.videotablet),
        m = !!t.image_background,
        p = !!t.logo_image?.url,
        g = u({
          title: t.title || "",
          description: xe(t.description) || "",
          color:
            t.text_color === "white" || t.text_color === "black"
              ? t.text_color
              : "black",
          ...(t.legal && { legal: we(t.legal, "white") }),
          video: r && t.video && "url" in t.video ? t.video.url : void 0,
          videoMobile:
            l && t.videomobile && "url" in t.videomobile
              ? t.videomobile.url
              : void 0,
          videoTablet:
            a && t.videotablet && "url" in t.videotablet
              ? t.videotablet.url
              : void 0,
          backgroundImage:
            !r && !l && !a && m && t.image_background?.url
              ? {
                  url: t.image_background.url,
                  alt: t.image_background.alt || "",
                }
              : void 0,
          imageMobile:
            !r && !l && !a && m && t.image_mobile?.url
              ? { url: t.image_mobile.url, alt: t.image_mobile.alt || "" }
              : void 0,
          image:
            p && t.logo_image?.url
              ? { url: t.logo_image.url, alt: t.logo_image.alt || "" }
              : void 0,
          ...(t.cta &&
            t.cta.text &&
            G(t.cta) && {
              cta: {
                label: t.cta.text,
                to: t.cta.url || "#",
                ...(t.cta_color && { color: t.cta_color }),
                onClick: () => {
                  t.cta.text &&
                    G(t.cta) &&
                    c(`header_${t.cta.text}`, t.cta.url);
                },
                target: ("target" in t.cta && t.cta.target) || "_self",
              },
            }),
        }),
        _ = k(() =>
          !g.value.title || g.value.title.trim() === ""
            ? !1
            : !!(g.value.video || g.value.image),
        ),
        C = i.slice.primary.animated ?? !0;
      return (M, o) => {
        const b = Fe,
          w = pe;
        return _.value
          ? (v(),
            f(
              "section",
              {
                key: 0,
                "data-slice-type": M.slice.slice_type,
                "data-slice-variation": M.slice.variation,
                class: "relative",
              },
              [
                z(b, { hero: g.value, animated: j(C) }, null, 8, [
                  "hero",
                  "animated",
                ]),
                z(w, { slices: j(d), components: j(ke) }, null, 8, [
                  "slices",
                  "components",
                ]),
              ],
              8,
              Ye,
            ))
          : x("", !0);
      };
    },
  });
export { lt as default };
