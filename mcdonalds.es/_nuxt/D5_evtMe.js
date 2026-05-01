import { a as I } from "./BFqjHXpf.js";
import {
  l as x,
  A as b,
  O as v,
  _ as C,
  Q as m,
  W as N,
  U as T,
  Y as K,
  N as j,
  ag as q,
  Z as A,
  ah as F,
  d as s,
  m as S,
  a as U,
  q as H,
  y as O,
  D as Q,
  ai as R,
  aj as W,
  ak as Y,
  v as Z,
} from "./CG2MQ2lF.js";
import { _ as G, k as J } from "./w36zW0QG.js";
import { u as X } from "./CiCdwUBr.js";
const ee = x({
    components: { MCDCardBlog: I },
    inheritAttrs: !1,
    props: { cards: { type: Array, default: () => [], required: !0 } },
    setup(a) {
      const t = X(),
        p = s(a.cards),
        h = S(() => p.value.length <= 3),
        g = s(!1),
        o = s(!1),
        l = s(!0),
        d = s(0),
        r = s(null),
        f = s(null),
        e = s(null),
        u = U(),
        B = u ? u.uid : Math.floor(Math.random() * 1e3),
        P = S(
          () => `Carrusel número ${B} con ${p.value.length} articulos del blog`,
        ),
        w = () => {
          setTimeout(() => {
            if (e.value) {
              const i = e.value;
              g.value = i.isBeginning && i.isEnd;
            }
          }, 50);
        },
        y = async (i) => {
          if (r.value) {
            const n = i.realIndex + 1,
              c = i.slides.length,
              k = `Diapositiva ${n} de ${c}`;
            r.value.textContent = k;
          }
        },
        V = (i) => {
          ((o.value = !i.isBeginning),
            (l.value = !i.isEnd),
            (d.value = i.realIndex),
            w(),
            y(i));
        },
        M = (i) => {
          ((e.value = i),
            (o.value = !i.isBeginning),
            (l.value = !i.isEnd),
            (d.value = i.realIndex),
            w());
        },
        $ = async (i) => {
          if (!e.value || !f.value?.contains(document.activeElement)) return;
          let n = !1;
          switch (i.key) {
            case "ArrowLeft":
              (i.preventDefault(), e.value.slidePrev() && (n = !0));
              break;
            case "ArrowRight":
              (i.preventDefault(), e.value.slideNext() && (n = !0));
              break;
            case "Home":
              (i.preventDefault(), e.value.slideTo(0), (n = !0));
              break;
            case "End":
              (i.preventDefault(),
                e.value.slideTo(a.cards.length - 1),
                (n = !0));
              break;
          }
          n && (await Z(), y(e.value));
        },
        z = S(() => (t.isDesktop.value ? "l" : "m")),
        _ = () => {
          e.value && e.value.slideNext();
        },
        E = () => {
          e.value && e.value.slidePrev();
        };
      H(g, (i) => {
        const n = e.value;
        n &&
          (i
            ? ((o.value = !1), (l.value = !1))
            : ((o.value = n.realIndex > 0),
              (l.value = n.realIndex < n.slides.length - 1)));
      });
      function L(i, n) {
        let c = null;
        return (...k) => {
          (c && clearTimeout(c), (c = setTimeout(() => i(...k), n)));
        };
      }
      const D = L(w, 150);
      return (
        O(() => {
          window.addEventListener("resize", D);
        }),
        Q(() => {
          window.removeEventListener("resize", D);
        }),
        {
          cardsValue: p,
          isDot: h,
          canNavigatePrev: o,
          canNavigateNext: l,
          iconSize: z,
          onSwiperSlideChange: V,
          onSwiperInit: M,
          modules: [R, W, Y],
          swiperContainer: f,
          swiperInstance: e,
          accessibilityAnnouncer: r,
          activeIndex: d,
          visibleSlides: g,
          handleKeyDown: $,
          slideNext: _,
          slidePrev: E,
          generatedAriaLabel: P,
        }
      );
    },
  }),
  ae = {
    ref: "accessibilityAnnouncer",
    class: "sr-only",
    "aria-live": "assertive",
    "aria-atomic": "true",
    role: "status",
  },
  ie = { class: "swiper-controls flex justify-center items-center gap-3" },
  ne = ["disabled", "aria-label"],
  te = ["disabled", "aria-label"];
function se(a, t, p, h, g, o) {
  const l = I,
    d = q,
    r = J,
    f = F;
  return (
    v(),
    b(
      "section",
      {
        ref: "swiperContainer",
        class: "w-full mx-auto swiperCarrouselCardBlog",
        onKeydown:
          t[2] || (t[2] = (...e) => a.handleKeyDown && a.handleKeyDown(...e)),
      },
      [
        C("div", ae, null, 512),
        m(
          f,
          {
            modules: a.modules,
            "space-between": "24",
            "slides-per-view": 1,
            role: "region",
            "aria-roledescription": "carrusel",
            "aria-label": a.generatedAriaLabel,
            keyboard: { enabled: !0, onlyInViewport: !0 },
            "watch-slides-progress": !0,
            a11y: {
              enabled: !0,
              prevSlideMessage: "Diapositiva anterior",
              nextSlideMessage: "Diapositiva siguiente",
              firstSlideMessage: "Primera diapositiva",
              lastSlideMessage: "Última diapositiva",
              paginationBulletMessage: "Ir a la diapositiva {{index}}",
            },
            breakpoints: {
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 40 },
              1440: { slidesPerView: 3, spaceBetween: 40 },
            },
            pagination: a.isDot
              ? { clickable: !0 }
              : { clickable: !0, type: "fraction" },
            onInit: a.onSwiperInit,
            onSlideChange: a.onSwiperSlideChange,
          },
          {
            default: N(() => [
              (v(!0),
              b(
                T,
                null,
                K(
                  a.cardsValue,
                  (e, u) => (
                    v(),
                    j(
                      d,
                      {
                        key: e.title,
                        role: "group",
                        "aria-roledescription": "slide",
                        "aria-label": `Diapositiva ${u + 1} de ${a.cardsValue.length}`,
                        "aria-current": u === a.activeIndex ? "true" : "false",
                      },
                      {
                        default: N(() => [
                          m(
                            l,
                            {
                              title: e.title,
                              categorie: e.categorie,
                              duration: e.duration,
                              date: e.date,
                              "cta-label": e.ctaLabel,
                              "cta-link": e.ctaLink,
                              image: e.image,
                              onCardClick: e.cta?.onClick,
                            },
                            null,
                            8,
                            [
                              "title",
                              "categorie",
                              "duration",
                              "date",
                              "cta-label",
                              "cta-link",
                              "image",
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
              C("div", ie, [
                a.visibleSlides
                  ? A("", !0)
                  : (v(),
                    b(
                      "button",
                      {
                        key: 0,
                        class: "swiper-button-prev",
                        disabled: !a.canNavigatePrev,
                        "aria-label": a.canNavigatePrev
                          ? "Ir a la diapositiva anterior"
                          : "No hay diapositiva anterior",
                        onClick:
                          t[0] ||
                          (t[0] = (...e) => a.slidePrev && a.slidePrev(...e)),
                      },
                      [
                        m(
                          r,
                          {
                            name: "customArrow",
                            color: a.canNavigatePrev ? "black" : "#ADADAD",
                            class: "rotate-180",
                            size: a.iconSize,
                          },
                          null,
                          8,
                          ["color", "size"],
                        ),
                      ],
                      8,
                      ne,
                    )),
                t[3] ||
                  (t[3] = C("div", { class: "swiper-pagination" }, null, -1)),
                a.visibleSlides
                  ? A("", !0)
                  : (v(),
                    b(
                      "button",
                      {
                        key: 1,
                        class: "swiper-button-next",
                        disabled: !a.canNavigateNext,
                        "aria-label": a.canNavigateNext
                          ? "Ir a la siguiente diapositiva"
                          : "No hay siguiente diapositiva",
                        onClick:
                          t[1] ||
                          (t[1] = (...e) => a.slideNext && a.slideNext(...e)),
                      },
                      [
                        m(
                          r,
                          {
                            size: a.iconSize,
                            name: "customArrow",
                            color: a.canNavigateNext ? "black" : "#ADADAD",
                          },
                          null,
                          8,
                          ["size", "color"],
                        ),
                      ],
                      8,
                      te,
                    )),
              ]),
            ]),
            _: 1,
          },
          8,
          ["modules", "aria-label", "pagination", "onInit", "onSlideChange"],
        ),
      ],
      544,
    )
  );
}
const ue = G(ee, [["render", se]]);
export { ue as _ };
