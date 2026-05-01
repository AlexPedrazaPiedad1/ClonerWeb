import { _ as A } from "./D-GOY2YP.js";
import {
  l as K,
  A as g,
  O as u,
  _ as h,
  Q as k,
  W as N,
  Z as y,
  U as j,
  Y as q,
  N as U,
  ag as H,
  ah as O,
  X as Q,
  d as r,
  a as R,
  m as w,
  q as W,
  y as X,
  D as Y,
  ai as Z,
  aj as G,
  ak as J,
  v as _,
} from "./CG2MQ2lF.js";
import { _ as x, k as ee } from "./w36zW0QG.js";
import { u as ae } from "./CiCdwUBr.js";
const ie = K({
    components: { MCDCardFeature: A },
    inheritAttrs: !1,
    props: {
      cards: { type: Array, default: () => [], required: !0 },
      isProduct: { type: Boolean, default: !1 },
      isIngredientCarrousel: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = ae(),
        f = r(e.cards),
        l = r(!1),
        o = r(!0),
        b = r(!1),
        d = r(0),
        c = r(null),
        v = r(null),
        n = r(null),
        i = R(),
        m = i ? i.uid : Math.floor(Math.random() * 1e3),
        C = () => {
          setTimeout(() => {
            if (n.value) {
              const a = n.value;
              b.value = a.isBeginning && a.isEnd;
            }
          }, 50);
        },
        B = w(() => `Carrusel número ${m} con ${f.value.length} feature cards`),
        P = w(() => f.value.length <= 3),
        M = w(() => (t.isDesktop.value ? "l" : "m")),
        V = w(() =>
          e.isIngredientCarrousel
            ? t.isMobile.value
              ? "1/4"
              : t.isTablet.value
                ? "1/2"
                : "1/3"
            : t.isDesktop.value
              ? "1/3"
              : "1/2",
        ),
        D = async (a) => {
          if (c.value) {
            const s = a.realIndex + 1,
              p = a.slides.length,
              S = `Diapositiva ${s} de ${p}`;
            c.value.textContent = S;
          }
        },
        $ = (a) => {
          ((l.value = !a.isBeginning),
            (o.value = !a.isEnd),
            (d.value = a.realIndex),
            C(),
            D(a));
        },
        z = (a) => {
          ((n.value = a),
            (l.value = !a.isBeginning),
            (o.value = !a.isEnd),
            (d.value = a.realIndex),
            C());
        },
        E = async (a) => {
          if (!n.value || !v.value?.contains(document.activeElement)) return;
          let s = !1;
          switch (a.key) {
            case "ArrowLeft":
              (a.preventDefault(), n.value.slidePrev() && (s = !0));
              break;
            case "ArrowRight":
              (a.preventDefault(), n.value.slideNext() && (s = !0));
              break;
            case "Home":
              (a.preventDefault(), n.value.slideTo(0), (s = !0));
              break;
            case "End":
              (a.preventDefault(),
                n.value.slideTo(e.cards.length - 1),
                (s = !0));
              break;
          }
          s && (await _(), D(n.value));
        },
        T = () => {
          n.value && n.value.slideNext();
        },
        L = () => {
          n.value && n.value.slidePrev();
        };
      W(b, (a) => {
        const s = n.value;
        s &&
          (a
            ? ((l.value = !1), (o.value = !1))
            : ((l.value = s.realIndex > 0),
              (o.value = s.realIndex < s.slides.length - 1)));
      });
      function F(a, s) {
        let p = null;
        return (...S) => {
          (p && clearTimeout(p), (p = setTimeout(() => a(...S), s)));
        };
      }
      const I = F(C, 150);
      return (
        X(() => {
          window.addEventListener("resize", I);
        }),
        Y(() => {
          window.removeEventListener("resize", I);
        }),
        {
          cardsValue: f,
          generatedAriaLabel: B,
          isDot: P,
          canNavigatePrev: l,
          canNavigateNext: o,
          iconSize: M,
          gridBreakpoint: V,
          onSwiperSlideChange: $,
          onSwiperInit: z,
          modules: [Z, G, J],
          swiperContainer: v,
          swiperInstance: n,
          handleKeyDown: E,
          accessibilityAnnouncer: c,
          activeIndex: d,
          visibleSlides: b,
          slideNext: T,
          slidePrev: L,
        }
      );
    },
  }),
  ne = {
    ref: "accessibilityAnnouncer",
    class: "sr-only",
    "aria-live": "assertive",
    "aria-atomic": "true",
    role: "status",
  },
  se = {
    key: 0,
    class: "swiper-controls flex justify-center items-center gap-3",
  },
  te = ["disabled", "aria-label"],
  re = ["disabled", "aria-label"];
function le(e, t, f, l, o, b) {
  const d = A,
    c = H,
    v = ee,
    n = O;
  return (
    u(),
    g(
      "section",
      {
        ref: "swiperContainer",
        class: Q([
          "w-full mx-auto swiperCarrouselCard",
          {
            "desktop:flex desktop:justify-center": e.visibleSlides,
            "few-cards": e.visibleSlides,
          },
        ]),
        onKeydown:
          t[2] || (t[2] = (...i) => e.handleKeyDown && e.handleKeyDown(...i)),
      },
      [
        h("div", ne, null, 512),
        k(
          n,
          {
            modules: e.modules,
            "slides-per-view": e.isIngredientCarrousel ? 2 : 1,
            "space-between": "24",
            breakpoints: {
              768: {
                slidesPerView: (e.isIngredientCarrousel, 2),
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: (e.isIngredientCarrousel, 2),
                spaceBetween: (e.isIngredientCarrousel, 40),
              },
              1440: {
                slidesPerView: (e.isIngredientCarrousel, 3),
                spaceBetween: (e.isIngredientCarrousel, 40),
              },
            },
            role: "region",
            "aria-roledescription": "carrusel",
            "aria-label": e.generatedAriaLabel,
            keyboard: { enabled: !0, onlyInViewport: !0 },
            a11y: {
              enabled: !0,
              prevSlideMessage: "Diapositiva anterior",
              nextSlideMessage: "Diapositiva siguiente",
              firstSlideMessage: "Primera diapositiva",
              lastSlideMessage: "Última diapositiva",
              paginationBulletMessage: "Ir a la diapositiva {{index}}",
            },
            "watch-slides-progress": !0,
            pagination:
              !e.isDot && !e.visibleSlides
                ? { clickable: !0, type: "fraction" }
                : { clickable: !0 },
            onInit: e.onSwiperInit,
            onSlideChange: e.onSwiperSlideChange,
          },
          {
            default: N(() => [
              (u(!0),
              g(
                j,
                null,
                q(
                  e.cardsValue,
                  (i, m) => (
                    u(),
                    U(
                      c,
                      {
                        key: i.title,
                        role: "group",
                        "aria-roledescription": "slide",
                        "aria-label": `Diapositiva ${m + 1} de ${e.cardsValue.length}: ${i.title}`,
                        "aria-current": m === e.activeIndex ? "true" : "false",
                      },
                      {
                        default: N(() => [
                          k(
                            d,
                            {
                              grid: e.gridBreakpoint,
                              image: !i.illustration && {
                                url: i.image.url,
                                alt: i.image.alt,
                              },
                              title: i.title,
                              description: i.description,
                              "is-product": e.isProduct,
                              link: i?.link,
                              to: i?.link?.to,
                              illustration: i.illustration,
                              onCardClick: i?.link?.onClick,
                            },
                            null,
                            8,
                            [
                              "grid",
                              "image",
                              "title",
                              "description",
                              "is-product",
                              "link",
                              "to",
                              "illustration",
                              "onCardClick",
                            ],
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["aria-label", "aria-current"],
                    )
                  ),
                ),
                128,
              )),
              !e.isDot && !e.visibleSlides
                ? (u(),
                  g("div", se, [
                    e.visibleSlides
                      ? y("", !0)
                      : (u(),
                        g(
                          "button",
                          {
                            key: 0,
                            class: "swiper-button-prev",
                            disabled: !e.canNavigatePrev,
                            "aria-label": e.canNavigatePrev
                              ? "Ir a la diapositiva anterior"
                              : "No hay diapositiva anterior",
                            onClick:
                              t[0] ||
                              (t[0] = (...i) =>
                                e.slidePrev && e.slidePrev(...i)),
                          },
                          [
                            k(
                              v,
                              {
                                size: e.iconSize,
                                name: "customArrow",
                                color: e.canNavigatePrev ? "black" : "#ADADAD",
                                class: "rotate-180",
                              },
                              null,
                              8,
                              ["size", "color"],
                            ),
                          ],
                          8,
                          te,
                        )),
                    t[3] ||
                      (t[3] = h(
                        "div",
                        { class: "swiper-pagination" },
                        null,
                        -1,
                      )),
                    e.visibleSlides
                      ? y("", !0)
                      : (u(),
                        g(
                          "button",
                          {
                            key: 1,
                            class: "swiper-button-next",
                            disabled: !e.canNavigateNext,
                            "aria-label": e.canNavigateNext
                              ? "Ir a la siguiente diapositiva"
                              : "No hay siguiente diapositiva",
                            onClick:
                              t[1] ||
                              (t[1] = (...i) =>
                                e.slideNext && e.slideNext(...i)),
                          },
                          [
                            k(
                              v,
                              {
                                size: e.iconSize,
                                name: "customArrow",
                                color: e.canNavigateNext ? "black" : "#ADADAD",
                              },
                              null,
                              8,
                              ["size", "color"],
                            ),
                          ],
                          8,
                          re,
                        )),
                  ]))
                : y("", !0),
            ]),
            _: 1,
          },
          8,
          [
            "modules",
            "slides-per-view",
            "breakpoints",
            "aria-label",
            "pagination",
            "onInit",
            "onSlideChange",
          ],
        ),
      ],
      34,
    )
  );
}
const ve = x(ie, [["render", le]]);
export { ve as _ };
