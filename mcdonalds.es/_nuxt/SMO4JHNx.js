import { _ as ke } from "./5PIdz10t.js";
import { _ as xe } from "./B-_Bh8rr.js";
import { _ as be } from "./Bj0JfLHo.js";
import {
  _ as ye,
  G as Ce,
  m as fe,
  x as Se,
  ad as we,
  d as Me,
  l as $e,
  f as De,
  c as Pe,
  u as Te,
  a as le,
} from "./w36zW0QG.js";
import { _ as Ae } from "./n9BDgNm5.js";
import {
  l as ge,
  A as $,
  O as p,
  Z as J,
  _ as d,
  $ as S,
  Q as L,
  N as w,
  W as h,
  U as ce,
  Y as de,
  ag as Le,
  ah as Be,
  a1 as Ee,
  d as D,
  m as f,
  y as Re,
  v as ue,
  D as Ie,
  ak as ze,
  au as Oe,
  u as a,
  am as pe,
} from "./CG2MQ2lF.js";
import { g as u } from "./DKtf60Sy.js";
import { S as X } from "./BWsqEc1I.js";
import { S as me } from "./Cpc1cBKW.js";
import { u as je } from "./CiCdwUBr.js";
import { u as qe, f as Fe } from "./D8jQnJCR.js";
import { O as Ne } from "./Dc0OakB1.js";
import "./D-GOY2YP.js";
import "./DNNWU6PG.js";
import "./9UZMSW1R.js";
import "./DhdId782.js";
import "./NMLSHX8I.js";
import "./AvGzUA97.js";
import "./CoWls7Gm.js";
import "./X_wUNWL3.js";
import "./Ca9Ptn7z.js";
const Ye = ge({
    inheritAttrs: !1,
    props: {
      title: {
        type: String,
        required: !1,
        default: "Nuestros productos más icónicos",
      },
      description: {
        type: String,
        required: !1,
        default:
          "Disfruta de opciones deliciosas, desde nuestra carta de hamburguesas hasta nuestros McFlurry®.",
      },
      btn: {
        type: Object,
        default: () => ({ to: "/", label: "VER TODA LA CARTA" }),
        required: !1,
      },
      cards: { type: Array, required: !0 },
    },
    setup(i) {
      const n = je(),
        g = D(null),
        P = D([]),
        _ = D(null),
        k = D(0),
        M = D(null),
        x = D([]),
        b = D([]),
        B = D(!1),
        y = D(!1),
        T = f(() => n.isMobile.value),
        c = f(() => k.value === 0),
        m = f(() => k.value === i.cards.length - 1);
      let l;
      const O = (o, s) => {
          o instanceof HTMLElement && (P.value[s] = o);
        },
        ee = (o, s) => {
          o instanceof HTMLElement && (x.value[s] = o);
        },
        j = (o, s) => {
          o instanceof HTMLElement && (b.value[s] = o);
        },
        E = (o) => {
          const s = x.value[o],
            r = b.value[o];
          !s ||
            !r ||
            (u.to(s.querySelector(".slide-card-content"), {
              scale: 1.005,
              duration: 0.6,
              ease: "power2.out",
            }),
            u.to(r, { y: -8, duration: 0.6, ease: "power2.out" }));
        },
        V = (o, s) => {
          const r = x.value[s],
            v = b.value[s];
          if (!r || !v) return;
          const C = r.getBoundingClientRect(),
            U = C.width / 2,
            N = C.height / 2,
            ae = o.clientX - C.left,
            ne = o.clientY - C.top,
            K = (ae - U) / U,
            z = (ne - N) / N,
            Y = 0.8,
            Z = z * Y,
            _e = -K * Y,
            re = 6,
            ve = K * re,
            he = z * re;
          (u.to(r.querySelector(".slide-card-content"), {
            rotationX: Z,
            rotationY: _e,
            duration: 0.4,
            ease: "power2.out",
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
          }),
            u.to(v, { x: ve, y: he - 8, duration: 0.3, ease: "power2.out" }));
        },
        Q = 80;
      let W = 0;
      const te = (o, s) => {
          const r = performance.now();
          r - W < Q || ((W = r), V(o, s));
        },
        oe = (o) => {
          const s = x.value[o],
            r = b.value[o];
          !s ||
            !r ||
            (u.to(s.querySelector(".slide-card-content"), {
              scale: 1,
              rotationX: 0,
              rotationY: 0,
              duration: 0.8,
              ease: "power2.out",
            }),
            u.to(r, { x: 0, y: 0, duration: 0.8, ease: "power2.out" }));
        },
        R = (o) => {
          ((_.value = o),
            (k.value = o.activeIndex),
            P.value.forEach((s, r) => {
              s && u.set(s, { scale: o.activeIndex === r ? 1 : 0.9 });
            }));
        },
        ie = (o) => {
          if (((k.value = o.activeIndex), M.value)) {
            const s = i.cards[k.value];
            M.value.textContent = `Producto ${k.value + 1} de ${i.cards.length}: ${s.title}`;
          }
          P.value.forEach((s, r) => {
            s &&
              u.to(s, {
                duration: 0.4,
                ease: "power2.out",
                scale: o.activeIndex === r ? 1 : 0.9,
              });
          });
        },
        G = () => {
          if (y.value || !g.value) return;
          const o = X.getById("pcpcarousel--anims");
          (o && o.kill(),
            l && (l.kill(), (l = void 0)),
            ue(() => {
              if (!g.value) return;
              const s = g.value.querySelector(".pcpcarousel--title"),
                r = g.value.querySelector(".pcpcarousel--description");
              (!s && !r) ||
                ((l = u.timeline({
                  scrollTrigger: {
                    id: "pcpcarousel--anims-text",
                    trigger: g.value,
                    start: n.isMobile.value ? "top 80%" : "top center",
                    markers: !1,
                  },
                  onComplete: () => {
                    y.value = !0;
                  },
                })),
                s &&
                  me.create(s, {
                    type: "lines",
                    autoSplit: !0,
                    mask: "lines",
                    linesClass: "pcpcarousel--title-line",
                    onSplit: (v) =>
                      u.from(v.lines, {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                          id: "pcpcarousel--anims-title",
                          trigger: g.value,
                          start: n.isMobile.value ? "top 80%" : "top center",
                          markers: !1,
                        },
                        onComplete: () => {
                          y.value || (y.value = !0);
                        },
                      }),
                  }),
                r &&
                  (u.set(r, { clearProps: "all" }),
                  l.from(
                    r,
                    { yPercent: 50, duration: 0.5, ease: "expo.out" },
                    "<",
                  )));
            }),
            n.isMobile.value ||
              u.matchMedia().add("(min-width: 767px)", () => {
                H();
              }));
        },
        H = () => {
          const o = X.getById("horizontal-scroll");
          o && o.kill();
          const r = u.utils.toArray(".slide").length - 1;
          let v = 0.6;
          const C = window.innerWidth;
          C >= 1700
            ? (v = 0.9)
            : C >= 1600
              ? (v = 0.8)
              : C >= 1440
                ? (v = 0.6)
                : C >= 1280
                  ? (v = 0.4)
                  : C >= 1024
                    ? (v = 0.2)
                    : (v = 0.1);
          const U = r > 1 ? -100 * (r - v) : 0,
            N = u.to(".slide", { ease: "none", xPercent: U }),
            ae = u.utils.toArray(".slide-card"),
            ne = "top top",
            K = Math.max(r * 25 + 10, 80);
          (X.create({
            id: "horizontal-scroll",
            trigger: g.value,
            start: ne,
            end: `+=${K}%`,
            scrub: 0.05,
            pin: !0,
            pinSpacing: !0,
            animation: N,
            markers: !1,
            invalidateOnRefresh: !0,
            anticipatePin: 1,
          }),
            ae.forEach((z, Y) => {
              const Z = Y % 2 === 0;
              (u.set(z, { rotate: Z ? 2.5 : -2.5 }),
                u.to(z, {
                  rotate: Z ? 0.5 : -0.5,
                  duration: 0.3,
                  ease: "power1.out",
                  scrollTrigger: {
                    id: `slide--card-${Y}`,
                    trigger: z,
                    markers: !1,
                    start: "left right-=10%",
                    end: "left left+=10%",
                    scrub: 0.05,
                    containerAnimation: N,
                  },
                }));
            }));
        };
      let I;
      const e = () => {
          (clearTimeout(I),
            (I = setTimeout(() => {
              y.value ? n.isMobile.value || H() : G();
            }, 100)));
        },
        t = (o) => {
          o &&
            o.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
        },
        A = (o) => {
          const s = o.target;
          s &&
            s.classList &&
            s.classList.contains("slide-card-content--desktop") &&
            t(s);
        };
      (Re(() => {
        (u.registerPlugin(X),
          u.registerPlugin(me),
          ue(() => {
            G();
          }),
          window.addEventListener("resize", e));
      }),
        Ie(() => {
          (l && (l.kill(), (l = void 0)),
            X.getAll().forEach((o) => {
              (o.vars.id === "pcpcarousel--anims" ||
                o.vars.id === "pcpcarousel--anims-text" ||
                o.vars.id === "pcpcarousel--anims-title" ||
                o.vars.id === "horizontal-scroll" ||
                o.vars.id?.toString().startsWith("slide--card-")) &&
                o.kill();
            }),
            I && clearTimeout(I),
            window.removeEventListener("resize", e));
        }));
      const q = () => {
          _.value && (F(), _.value.slideNext());
        },
        se = () => {
          _.value && (F(), _.value.slidePrev());
        },
        F = () => {
          ((B.value = !0),
            setTimeout(() => {
              B.value = !1;
            }, 500));
        };
      return {
        pcpCarouselRef: g,
        showSwiper: T,
        initializeSlideScales: R,
        updateSlideScales: ie,
        mobileCarouselEls: P,
        setImageRef: O,
        swiperModules: [ze, Oe],
        currentSlideIndex: k,
        announceSlideChange: M,
        setDesktopImageRef: j,
        setCardRef: ee,
        handleMouseEnter: E,
        handleMouseLeave: oe,
        handleMouseMove: te,
        focusCardToCenter: t,
        atCardFocus: A,
        disabledButtons: B,
        tempButtonsDisable: F,
        prevSlide: se,
        nextSlide: q,
        isFirstSlide: c,
        isLastSlide: m,
      };
    },
  }),
  Xe = {
    ref: "pcpCarouselRef",
    class:
      "flex flex-col items-center justify-center gap-10 py-14 md:relative md:h-[100dvh] md:overflow-hidden md:flex-none",
  },
  Ve = {
    key: 0,
    ref: "announceSlideChange",
    class: "sr-only",
    "aria-live": "polite",
    "aria-atomic": "true",
  },
  Qe = { key: 1, class: "px-4" },
  We = { class: "flex flex-col gap-4 mr-10" },
  Ge = { class: "font-bold text-headline-xs pcpcarousel--title" },
  He = { class: "text-body-xl pcpcarousel--description" },
  Ue = {
    key: 2,
    class: "w-full mx-auto productscarousel--swiper md:hidden relative",
  },
  Ke = { class: "carousel-nav-mobile" },
  Ze = { key: 1, style: { width: "40px", height: "40px" } },
  Je = { key: 3, style: { width: "40px", height: "40px" } },
  et = { class: "flex flex-row items-center justify-between w-full pt-4 pb-6" },
  tt = { class: "flex-1 font-bold text-center text-title-l" },
  ot = { class: "mt-4 text-sm text-center text-gray-600 sr-only" },
  it = { "aria-live": "polite" },
  st = {
    id: "pcpcarousel--button",
    class:
      "pb-3 w-fit px-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:px-0",
  },
  at = {
    class:
      "slides hidden md:flex absolute bottom-1/2 translate-y-1/2 left-0 gap-6 lg:gap-12 xl:gap-16 2xl:gap-20 px-4 lg:px-6",
  },
  nt = { class: "flex flex-col gap-6 w-[348px] slide xl:w-[580px] slide" },
  rt = {
    class:
      "pcpcarousel--title font-bold text-headline-m xl:text-[120px] xl:leading-[90%] xl:-tracking-[2.5px]",
  },
  lt = { class: "pcpcarousel--description text-body-xl xl:text-title-m" },
  ct = ["onMouseenter", "onMousemove", "onMouseleave"],
  dt = { class: "flex flex-row items-center justify-between w-full pt-4 pb-6" },
  ut = {
    class:
      "flex-1 font-bold text-center text-title-l xl:text-title-xl 1440:text-headline-s",
  };
function pt(i, n, g, P, _, k) {
  const M = fe,
    x = Ae,
    b = Ce,
    B = Le,
    y = Be,
    T = Se;
  return (
    p(),
    $(
      "section",
      Xe,
      [
        i.showSwiper ? (p(), $("div", Ve, null, 512)) : J("", !0),
        i.showSwiper
          ? (p(),
            $("div", Qe, [
              d("div", We, [
                d("h2", Ge, S(i.title), 1),
                d("p", He, S(i.description), 1),
              ]),
            ]))
          : J("", !0),
        i.showSwiper
          ? (p(),
            $("div", Ue, [
              d("div", Ke, [
                i.isFirstSlide
                  ? (p(), $("div", Ze))
                  : (p(),
                    w(
                      M,
                      {
                        key: 0,
                        role: "button",
                        "aria-label": "Diapositiva anterior",
                        variant: "white",
                        size: "s",
                        shape: "icon",
                        "icon-name": "customArrow",
                        disabled: i.disabledButtons,
                        class: "rotate-90",
                        onClick:
                          n[0] ||
                          (n[0] = (c) => !i.disabledButtons && i.prevSlide()),
                      },
                      null,
                      8,
                      ["disabled"],
                    )),
                i.isLastSlide
                  ? (p(), $("div", Je))
                  : (p(),
                    w(
                      M,
                      {
                        key: 2,
                        role: "button",
                        "aria-label": "Siguiente diapositiva",
                        variant: "white",
                        shape: "icon",
                        size: "s",
                        "icon-name": "customArrow",
                        disabled: i.disabledButtons,
                        class: "drop-shadow-md",
                        onClick:
                          n[1] ||
                          (n[1] = (c) => !i.disabledButtons && i.nextSlide()),
                      },
                      null,
                      8,
                      ["disabled"],
                    )),
              ]),
              L(
                y,
                {
                  modules: i.swiperModules,
                  role: "group",
                  "aria-roledescription": "carousel",
                  "aria-label": `Carousel de ${i.cards.length} productos`,
                  "space-between": 12,
                  "slides-per-view": "auto",
                  "centered-slides": "",
                  keyboard: !0,
                  a11y: {
                    enabled: !0,
                    prevSlideMessage: "Diapositiva anterior",
                    nextSlideMessage: "Diapositiva siguiente",
                    firstSlideMessage: "Primera diapositiva",
                    lastSlideMessage: "Última diapositiva",
                  },
                  onInit: i.initializeSlideScales,
                  onSlideChange: i.updateSlideScales,
                },
                {
                  default: h(() => [
                    (p(!0),
                    $(
                      ce,
                      null,
                      de(
                        i.cards,
                        (c, m) => (
                          p(),
                          w(
                            B,
                            {
                              key: `${c.uid}-${m}`,
                              "aria-roledescription": "slide",
                              "aria-label": `Producto ${m + 1} de ${i.cards.length}: ${c.title}`,
                            },
                            {
                              default: h(() => [
                                L(
                                  b,
                                  {
                                    to: c.link.to,
                                    class:
                                      "slide-card-content--mobile flex flex-col items-center justify-center w-full h-full px-3 pt-1 cursor-pointer bg-mcd-gold rounded-2xl focus:border-2 focus:border-[#e6b800]",
                                    onClick: () => c.link?.onClick?.(),
                                  },
                                  {
                                    default: h(() => [
                                      d(
                                        "div",
                                        {
                                          ref_for: !0,
                                          ref: (l) => i.setImageRef(l, m),
                                          class: "pcpcarousel--slide-image",
                                        },
                                        [
                                          L(
                                            x,
                                            {
                                              image: c.image,
                                              "wrapper-class":
                                                "w-[296px] h-[300px] object-contain",
                                            },
                                            null,
                                            8,
                                            ["image"],
                                          ),
                                        ],
                                        512,
                                      ),
                                      d("div", et, [d("p", tt, S(c.title), 1)]),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["to", "onClick"],
                                ),
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
                ["modules", "aria-label", "onInit", "onSlideChange"],
              ),
              d("div", ot, [
                d(
                  "span",
                  it,
                  " Producto " +
                    S(i.currentSlideIndex + 1) +
                    " de " +
                    S(i.cards.length),
                  1,
                ),
              ]),
              n[4] ||
                (n[4] = d(
                  "div",
                  { id: "carousel-end", tabindex: "-1" },
                  null,
                  -1,
                )),
            ]))
          : J("", !0),
        d("div", st, [
          L(
            M,
            {
              to: i.btn.to,
              target: i.btn.target,
              onClick: n[2] || (n[2] = () => i.btn.onClick?.()),
            },
            { default: h(() => [Ee(S(i.btn.label), 1)]), _: 1 },
            8,
            ["to", "target"],
          ),
        ]),
        d("div", at, [
          d("div", nt, [
            d("h2", rt, S(i.title), 1),
            d("p", lt, S(i.description), 1),
          ]),
          (p(!0),
          $(
            ce,
            null,
            de(
              i.cards,
              (c, m) => (
                p(),
                $(
                  "div",
                  {
                    key: `desktop-${c.uid}-${m}`,
                    ref_for: !0,
                    ref: (l) => i.setCardRef(l, m),
                    class: "slide slide-card rounded-2xl flex items-center",
                    tabindex: "-1",
                    onFocusin:
                      n[3] ||
                      (n[3] = (...l) => i.atCardFocus && i.atCardFocus(...l)),
                    onMouseenter: () => i.handleMouseEnter(m),
                    onMousemove: (l) => i.handleMouseMove(l, m),
                    onMouseleave: () => i.handleMouseLeave(m),
                  },
                  [
                    L(
                      T,
                      {
                        to: c.link.to,
                        "aria-label": c.title,
                        class:
                          "slide-card-content slide-card-content--desktop flex flex-col items-center justify-end px-4 xl:px-6 bg-mcd-gold rounded-2xl flex-shrink-0",
                        tabindex: "0",
                        onClick: () => c.link?.onClick?.(),
                      },
                      {
                        default: h(() => [
                          d(
                            "div",
                            {
                              ref_for: !0,
                              ref: (l) => i.setDesktopImageRef(l, m),
                              class:
                                "absolute pcpcarousel--slide-image pcpcarousel--slide-image--container -top-20 lg:-top-[50%] xl:-top-[30%] 3000:-top-[60%]",
                            },
                            [
                              L(
                                x,
                                {
                                  image: c.image,
                                  "wrapper-class":
                                    "pcpcarousel--slide-image--image object-contain",
                                },
                                null,
                                8,
                                ["image"],
                              ),
                            ],
                            512,
                          ),
                          d("div", dt, [d("p", ut, S(c.title), 1)]),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["to", "aria-label", "onClick"],
                    ),
                  ],
                  40,
                  ct,
                )
              ),
            ),
            128,
          )),
        ]),
      ],
      512,
    )
  );
}
const mt = ye(Ye, [["render", pt]]),
  ft = { class: "desktop:max-w-[786px] w-full mt-8" },
  gt = { class: "text-body-m desktop:text-body-l text-center" },
  _t = `{
  filtering_product_categories_home {
    product_categories {
      product_category {
        ...on product_category_page {
          uid
          listing_title
          listing_image
          pcp_image
        }
      }
    }
  }
}`,
  Ot = ge({
    __name: "index",
    props: we(),
    setup(i) {
      const n = i,
        { $gtmCarrusel: g, $gtmClickBoton: P } = Me(),
        _ = qe(),
        k = $e(),
        M = De(),
        x = Pe(),
        { t: b, locale: B } = Te(),
        y = Fe(B.value),
        T = f(() => n.slice.primary.title || b("carrousel-products.title")),
        c = f(() => n.slice.primary.bottom_content || void 0),
        { data: m } = le("product_categories", async () =>
          (
            await $fetch("/api/cms/single/filtering_product_categories_home", {
              params: { graphQuery: _t, lang: y },
            })
          ).data.product_categories.map((t) => ({
            prismicDoc: t.product_category,
            uid: t.product_category.uid,
            title: t.product_category.data.listing_title,
            image: t.product_category.data.listing_image,
            pcpImage: t.product_category.data.pcp_image,
          })),
        ),
        { data: l } = le("novedades_products", async () => {
          try {
            return (
              await $fetch(
                "/api/cms/collection/product_category_group/novedades-group",
                {
                  params: {
                    graphQuery: `{
        product_category_group {
          products {
            product {
              ...on product_page {
                uid
                listing_title
                listing_image
                main_product_category {
                  uid
                }
              }
            }
          }
        }
      }`,
                    lang: y,
                  },
                },
              )
            ).data.products;
          } catch (e) {
            return (console.error(e), null);
          }
        }),
        O = f(() =>
          n.slice.variation === "novedades" && l.value
            ? l.value
                .filter(({ product: e }) => e && !e.isBroken)
                .filter(({ product: e }) => e.uid !== void 0)
                .map(({ product: e }) => {
                  const t = _.asLinkCustomProduct(
                    e.uid,
                    e.data?.main_product_category?.uid,
                  );
                  return {
                    id: e.id,
                    uid: e.uid,
                    title: e.data?.listing_title ?? "",
                    image: {
                      url: e.data?.listing_image.url,
                      alt: e.data?.listing_image?.alt || "",
                    },
                    link: {
                      link_type: "Document",
                      to: t,
                      url: t,
                      onClick: () => {
                        (g(`${e.data?.listing_title}_sugerencias`, e.uid),
                          x.push(t));
                      },
                    },
                  };
                })
            : [],
        ),
        ee = f(() => n.slice.primary.products || []),
        j = f(() =>
          (ee.value || [])
            .filter(
              ({ product: t }) =>
                t && t.data && t.data.listing_title && t.data.listing_image,
            )
            .map(({ product: t }) => {
              const A = _.asLinkCustomProduct(
                t.uid,
                t.data?.main_product_category?.uid,
              );
              return {
                id: t.id,
                uid: t.uid,
                title: t.data?.listing_title ?? "",
                image: {
                  url: t.data?.listing_image?.url || "",
                  alt: t.data?.listing_image?.alt || "",
                },
                link: {
                  link_type: "Document",
                  to: A,
                  onClick: () => {
                    (g(`${t.data?.listing_title}_sugerencias`, t.uid),
                      x.push(A));
                  },
                },
              };
            }),
        ),
        E = f(() => n.slice.variation),
        V = f(() =>
          m.value
            ? m.value
                .filter((e) => e.uid && e.title && e.image)
                .filter((e) => !M.isApp || !Ne.has(e.uid))
                .map((e) => {
                  const t = _.asLinkCustom(e.prismicDoc);
                  return {
                    uid: e.uid,
                    title: e.title,
                    image: e.image,
                    link: {
                      link_type: "Document",
                      uid: e.uid,
                      to: t,
                      onClick: () => {
                        g(e.title, e.uid);
                      },
                    },
                  };
                })
            : [],
        ),
        Q = f(() => {
          if (!m.value) return [];
          const e = ["complementos-y-masxmenos", "packs-para-compartir"];
          return m.value
            .map((t) => ({
              uid: t.uid,
              title: e.includes(t.uid) ? b(`pcpcategories.${t.uid}`) : t.title,
              image: t?.pcpImage ?? { url: "", alt: "" },
              link: {
                link_type: "Document",
                to: _.asLinkCustomProductCat(t.uid),
                onClick: () => {
                  g(t.title, t.uid);
                },
              },
            }))
            .filter(
              (t) =>
                t.uid &&
                t.title &&
                t.image &&
                t.image.url &&
                t.link &&
                t.link.to,
            );
        }),
        W = f(() => {
          const e = n.slice.primary.cta;
          return e && e.url && e.text
            ? {
                to: e.url,
                label: e.text,
                onClick: () => {
                  P(e.text, e.url);
                },
              }
            : { to: "/", label: "VER TODA LA CARTA" };
        }),
        te = f(() => n.slice.primary.desktop_big || !1),
        oe = f(() => n.slice.primary.separator_bottom?.data ?? void 0),
        R = f(() => n.slice.primary.description || []),
        ie = f(() => (k.isMobile.value ? "s" : "m")),
        G = f(() => n.slice.primary.top_image || ""),
        H = () => {
          P("explorarcarta", "/productos");
        },
        I = f(() => n.slice.primary.container_cards_direction ?? void 0);
      return (e, t) => {
        const A = ke,
          q = xe,
          se = be,
          F = fe,
          o = mt;
        return a(E) === "default" && a(j).length > 0
          ? (p(),
            w(
              q,
              { key: 0, title: a(T), description: "" },
              pe(
                {
                  carrousel: h(() => [
                    (p(),
                    w(A, { key: a(j).toString(), cards: a(j) }, null, 8, [
                      "cards",
                    ])),
                  ]),
                  _: 2,
                },
                [
                  a(c)
                    ? {
                        name: "bottomContent",
                        fn: h(() => [d("div", ft, [d("p", gt, S(a(c)), 1)])]),
                        key: "0",
                      }
                    : void 0,
                ],
              ),
              1032,
              ["title"],
            ))
          : a(E) === "pcp" && a(m)
            ? (p(),
              w(
                q,
                {
                  key: 1,
                  title: a(T),
                  description: "",
                  "top-image": a(G),
                  "desktop-big": a(te),
                  "separator-bottom": a(oe),
                  "container-cards-direction": a(I),
                  animated: "",
                },
                pe(
                  {
                    carrousel: h(() => [
                      (p(),
                      w(A, { key: a(V).toString(), cards: a(V) }, null, 8, [
                        "cards",
                      ])),
                    ]),
                    bottomContent: h(() => [
                      L(
                        F,
                        {
                          size: a(ie),
                          to: a(_).asLinkCustomCarta(),
                          label: a(b)("explore-carta"),
                          onClick: H,
                        },
                        null,
                        8,
                        ["size", "to", "label"],
                      ),
                    ]),
                    _: 2,
                  },
                  [
                    a(R) && a(R).length > 0
                      ? {
                          name: "description",
                          fn: h(() => [
                            L(se, { "rich-text": a(R) }, null, 8, [
                              "rich-text",
                            ]),
                          ]),
                          key: "0",
                        }
                      : void 0,
                  ],
                ),
                1032,
                [
                  "title",
                  "top-image",
                  "desktop-big",
                  "separator-bottom",
                  "container-cards-direction",
                ],
              ))
            : a(E) === "newPcP" && a(Q)
              ? (p(),
                w(
                  o,
                  {
                    key: 2,
                    title: a(T),
                    description: a(R),
                    cards: a(Q),
                    btn: a(W),
                  },
                  null,
                  8,
                  ["title", "description", "cards", "btn"],
                ))
              : a(E) === "novedades" && a(O).length > 0
                ? (p(),
                  w(
                    q,
                    { key: 3, title: a(T), description: "" },
                    {
                      carrousel: h(() => [
                        (p(),
                        w(A, { key: a(O).toString(), cards: a(O) }, null, 8, [
                          "cards",
                        ])),
                      ]),
                      _: 1,
                    },
                    8,
                    ["title"],
                  ))
                : J("", !0);
      };
    },
  });
export { Ot as default };
