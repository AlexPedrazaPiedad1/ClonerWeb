import { _ as x } from "./D-GOY2YP.js";
import {
  l as K,
  A as b,
  O as p,
  _ as C,
  Q as h,
  W as A,
  U as F,
  Y as R,
  N as j,
  ag as q,
  X as I,
  Z as P,
  ah as O,
  d as s,
  a as U,
  m as g,
  q as H,
  y as Q,
  D as W,
  ai as X,
  aj as Y,
  ak as Z,
  v as G,
} from "./CG2MQ2lF.js";
import { _ as J, k as ee } from "./w36zW0QG.js";
import { u as ae } from "./CiCdwUBr.js";
const ie = K({
    inheritAttrs: !1,
    props: {
      cards: { type: Array, default: () => [], required: !0 },
      themeColor: { type: String, default: "black" },
    },
    setup(e) {
      const r = ae(),
        n = s(null),
        l = s(!1),
        o = s(!0),
        m = s(!1),
        u = s(0),
        d = s(null),
        c = s(null),
        w = U(),
        i = w ? w.uid : Math.floor(Math.random() * 1e3),
        v = g(
          () => `Carrusel número ${i} con ${y.value.length} cards en bucle`,
        ),
        y = g(() => (e.cards.length <= 3 ? [...e.cards, ...e.cards] : e.cards)),
        V = g(() => (r.isDesktop.value ? !1 : e.cards.length <= 3)),
        B = g(() => (r.isDesktop.value ? "l" : "m")),
        k = () => {
          setTimeout(() => {
            if (n.value) {
              const a = n.value;
              m.value = a.isBeginning && a.isEnd;
            }
          }, 50);
        },
        D = async (a) => {
          if (d.value) {
            const t = a.realIndex + 1,
              f = a.slides.length,
              S = `Diapositiva ${t} de ${f}`;
            d.value.textContent = S;
          }
        },
        $ = (a) => {
          ((l.value = !a.isBeginning),
            (o.value = !a.isEnd),
            (u.value = a.realIndex),
            k(),
            D(a));
        },
        z = (a) => {
          ((n.value = a),
            (l.value = !a.isBeginning),
            (o.value = !a.isEnd),
            (u.value = a.realIndex),
            k());
        },
        E = () => {
          n.value && n.value.slideNext();
        },
        M = () => {
          n.value && n.value.slidePrev();
        },
        T = async (a) => {
          if (!n.value || !c.value?.contains(document.activeElement)) return;
          let t = !1;
          switch (a.key) {
            case "ArrowLeft":
              (a.preventDefault(), n.value.slidePrev() && (t = !0));
              break;
            case "ArrowRight":
              (a.preventDefault(), n.value.slideNext() && (t = !0));
              break;
            case "Home":
              (a.preventDefault(), n.value.slideTo(0), (t = !0));
              break;
            case "End":
              (a.preventDefault(),
                n.value.slideTo(e.cards.length - 1),
                (t = !0));
              break;
          }
          t && (await G(), D(n.value));
        },
        L = g(() =>
          e.cards.length <= 3
            ? {
                clickable: !0,
                type: "bullets",
                renderBullet: function (a, t) {
                  return a >= e.cards.length
                    ? ""
                    : `<div role="navigation" aria-label="Ir a producto ${a + 1}" class="${t}"></div>`;
                },
              }
            : { clickable: !0, type: "fraction" },
        );
      H(m, (a) => {
        const t = n.value;
        t &&
          (a
            ? ((l.value = !1), (o.value = !1))
            : ((l.value = t.realIndex > 0),
              (o.value = t.realIndex < t.slides.length - 1)));
      });
      function _(a, t) {
        let f = null;
        return (...S) => {
          (f && clearTimeout(f), (f = setTimeout(() => a(...S), t)));
        };
      }
      const N = _(k, 150);
      return (
        Q(() => {
          window.addEventListener("resize", N);
        }),
        W(() => {
          window.removeEventListener("resize", N);
        }),
        {
          cardsValue: y,
          isDot: V,
          iconSize: B,
          canNavigatePrev: l,
          canNavigateNext: o,
          onSwiperSlideChange: $,
          onSwiperInit: z,
          modules: [X, Y, Z],
          swiperRef: n,
          activeIndex: u,
          paginationType: L,
          coverflowEffect: {
            rotate: 0,
            stretch: -250,
            depth: 100,
            modifier: 2,
            slideShadows: !1,
          },
          slidesPerView: 3,
          watchSlidesProgress: !0,
          accessibilityAnnouncer: d,
          swiperContainer: c,
          visibleSlides: m,
          handleKeyDown: T,
          slideNext: E,
          slidePrev: M,
          generatedAriaLabel: v,
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
  te = ["aria-label"],
  re = ["aria-label"];
function se(e, r, n, l, o, m) {
  const u = x,
    d = q,
    c = ee,
    w = O;
  return (
    p(),
    b(
      "section",
      {
        ref: "swiperContainer",
        class: I([
          "w-full mx-auto swiperCarrouselCardOverlay max-w-[1500px] overflow-hidden",
          `theme-${e.themeColor}`,
        ]),
        onKeydown:
          r[2] || (r[2] = (...i) => e.handleKeyDown && e.handleKeyDown(...i)),
      },
      [
        C("div", ne, null, 512),
        h(
          w,
          {
            ref: "swiperRef",
            modules: e.modules,
            effect: "coverflow",
            "coverflow-effect": e.coverflowEffect,
            loop: !0,
            "centered-slides": !0,
            "slides-per-view": e.slidesPerView,
            "watch-slides-progress": !0,
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
            "prevent-interaction-on-transition": !0,
            breakpoints: {
              320: { slidesPerView: 1.2, spaceBetween: -50 },
              768: { slidesPerView: 3, spaceBetween: -100 },
              1024: { slidesPerView: 3, spaceBetween: -100 },
            },
            pagination: e.paginationType,
            onInit: e.onSwiperInit,
            onSlideChange: e.onSwiperSlideChange,
          },
          {
            default: A(() => [
              (p(!0),
              b(
                F,
                null,
                R(
                  e.cardsValue,
                  (i, v) => (
                    p(),
                    j(
                      d,
                      {
                        key: i.title,
                        role: "group",
                        "aria-roledescription": "slide",
                        "aria-label": `Diapositiva ${v + 1} de ${e.cardsValue.length}`,
                        "aria-current": v === e.activeIndex ? "true" : "false",
                      },
                      {
                        default: A(() => [
                          h(
                            u,
                            {
                              grid: "overlay",
                              image: { url: i.image.url, alt: i.image.alt },
                              "is-product": !0,
                              title: i.title,
                              description: i.description,
                              icon: i.icon,
                              active: e.activeIndex === v,
                              link: i?.link,
                              to: i?.link?.to,
                              onCardClick: i?.link?.onClick,
                            },
                            null,
                            8,
                            [
                              "image",
                              "title",
                              "description",
                              "icon",
                              "active",
                              "link",
                              "to",
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
              C(
                "div",
                {
                  role: "group",
                  "aria-label": "Controles de navegación del carrusel",
                  class: I([
                    "swiper-controls flex justify-center items-center gap-3",
                    { "hide-controls": !1 },
                  ]),
                },
                [
                  e.visibleSlides
                    ? P("", !0)
                    : (p(),
                      b(
                        "button",
                        {
                          key: 0,
                          class: "swiper-button-prev",
                          "aria-label": e.canNavigatePrev
                            ? "Ir a la diapositiva anterior"
                            : "No hay diapositiva anterior",
                          onClick:
                            r[0] ||
                            (r[0] = (...i) => e.slidePrev && e.slidePrev(...i)),
                        },
                        [
                          h(
                            c,
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
                  r[3] ||
                    (r[3] = C("div", { class: "swiper-pagination" }, null, -1)),
                  e.visibleSlides
                    ? P("", !0)
                    : (p(),
                      b(
                        "button",
                        {
                          key: 1,
                          class: "swiper-button-next",
                          "aria-label": e.canNavigateNext
                            ? "Ir a la siguiente diapositiva"
                            : "No hay siguiente diapositiva",
                          onClick:
                            r[1] ||
                            (r[1] = (...i) => e.slideNext && e.slideNext(...i)),
                        },
                        [
                          h(
                            c,
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
                ],
              ),
            ]),
            _: 1,
          },
          8,
          [
            "modules",
            "coverflow-effect",
            "slides-per-view",
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
const ce = J(ie, [["render", se]]);
export { ce as _ };
