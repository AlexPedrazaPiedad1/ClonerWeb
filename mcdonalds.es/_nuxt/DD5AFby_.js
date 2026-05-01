import { _ as Sn } from "./C-nIiFxa.js";
import { _ as Dn } from "./Bj0JfLHo.js";
import { _ as tn } from "./s-lK3EGl.js";
import {
  _ as qe,
  k as Mn,
  j as nt,
  d as nn,
  l as an,
  e as sn,
  u as mt,
  m as on,
  n as In,
  S as Ln,
  a as En,
  o as An,
} from "./w36zW0QG.js";
import { _ as ln } from "./n9BDgNm5.js";
import { _ as rn } from "./DhdId782.js";
import { _ as it } from "./3AjKDk5D.js";
import { _ as xt } from "./DAwlR2e0.js";
import { _ as Vn } from "./BvM2kV3M.js";
import { _ as wt } from "./BiWJ4Rb5.js";
import {
  l as Be,
  A as C,
  O as h,
  _ as v,
  Q as A,
  W as U,
  Z as R,
  U as W,
  Y as re,
  N as Q,
  ag as Bn,
  $ as K,
  X as pe,
  ah as zn,
  d as O,
  a as Rn,
  m as V,
  q as un,
  y as cn,
  D as pn,
  ai as Nn,
  aj as jn,
  ak as Fn,
  v as Ue,
  F as kt,
  a2 as ye,
  a5 as On,
  al as Xn,
  a1 as Ct,
  ab as Yn,
  u as x,
  c as qn,
} from "./CG2MQ2lF.js";
import { u as Pt } from "./CiCdwUBr.js";
import { _ as Hn } from "./D-GOY2YP.js";
import { _ as Gn } from "./Dzi6bWn6.js";
import { _ as Kn } from "./C6fOeNu_.js";
import { _ as Un } from "./BCbBqfQA.js";
import { _ as Wn } from "./CLk6oGrE.js";
import { _ as Zn } from "./C-otgeyt.js";
import { _ as Jn } from "./CBSOtZb2.js";
import { _ as Qn } from "./CiZxUmDW.js";
import { g as Me } from "./DKtf60Sy.js";
import { S as Ne } from "./BWsqEc1I.js";
import { n as ht } from "./Ca9Ptn7z.js";
import { u as Ze, f as ei } from "./D8jQnJCR.js";
import { S as ti } from "./L4p7BVRY.js";
import { s as ni } from "./C3J3pyEk.js";
import { R as ii } from "./BSFMrA7C.js";
import { P as Ht } from "./Dc0OakB1.js";
import { c as ai } from "./DLDJGiia.js";
import { u as si } from "./CiwS9yAb.js";
import { u as oi } from "./CrhiQlU-.js";
import "./CkoE9dcZ.js";
import "./X_wUNWL3.js";
import "./9UZMSW1R.js";
import "./D7a1xk7w.js";
import "./DNNWU6PG.js";
import "./NMLSHX8I.js";
const li = Be({
    name: "CarrouselRichtext",
    components: { MCDRichText: wt },
    inheritAttrs: !1,
    props: {
      cards: { type: Array, default: () => [], required: !0 },
      textColor: {
        type: String,
        default: "black",
        validator: (i) => ["white", "black"].includes(i),
      },
      isAllergens: { type: Boolean, default: !1, required: !1 },
    },
    setup(i) {
      const e = Pt(),
        n = O(i.cards),
        t = O(null),
        s = O(0),
        a = O(null),
        o = O(null),
        p = O(!1),
        u = O(!1),
        l = O(!0),
        c = Rn(),
        d = c ? c.uid : Math.floor(Math.random() * 1e3),
        _ = V(
          () =>
            `Carrusel número ${d} con ${n.value.length} de texto o alergenos`,
        ),
        r = V(() => n.value.length <= 3),
        I = V(() => (e.isDesktop.value ? "l" : "m")),
        S = () => {
          setTimeout(() => {
            if (t.value) {
              const P = t.value;
              p.value = P.isBeginning && P.isEnd;
            }
          }, 50);
        },
        D = async (P) => {
          if (a.value) {
            const $ = P.realIndex + 1,
              b = P.slides.length,
              j = `Diapositiva ${$} de ${b}`;
            a.value.textContent = j;
          }
        },
        L = (P) => {
          ((u.value = !P.isBeginning),
            (l.value = !P.isEnd),
            (s.value = P.realIndex),
            S(),
            D(P));
        },
        y = (P) => {
          ((t.value = P),
            (u.value = !P.isBeginning),
            (l.value = !P.isEnd),
            (s.value = P.realIndex),
            S());
        },
        f = async (P) => {
          if (!t.value || !o.value?.contains(document.activeElement)) return;
          let $ = !1;
          switch (P.key) {
            case "ArrowLeft":
              (P.preventDefault(), t.value.slidePrev() && ($ = !0));
              break;
            case "ArrowRight":
              (P.preventDefault(), t.value.slideNext() && ($ = !0));
              break;
            case "Home":
              (P.preventDefault(), t.value.slideTo(0), ($ = !0));
              break;
            case "End":
              (P.preventDefault(),
                t.value.slideTo(i.cards.length - 1),
                ($ = !0));
              break;
          }
          $ && (await Ue(), D(t.value));
        },
        w = () => {
          t.value && t.value.slideNext();
        },
        E = () => {
          t.value && t.value.slidePrev();
        };
      un(p, (P) => {
        const $ = t.value;
        $ &&
          (P
            ? ((u.value = !1), (l.value = !1))
            : ((u.value = $.realIndex > 0),
              (l.value = $.realIndex < $.slides.length - 1)));
      });
      function k(P, $) {
        let b = null;
        return (...j) => {
          (b && clearTimeout(b), (b = setTimeout(() => P(...j), $)));
        };
      }
      const z = k(S, 150);
      return (
        cn(() => {
          window.addEventListener("resize", z);
        }),
        pn(() => {
          window.removeEventListener("resize", z);
        }),
        {
          accessibilityAnnouncer: a,
          activeIndex: s,
          canNavigatePrev: u,
          canNavigateNext: l,
          cardsValue: n,
          iconSize: I,
          isDot: r,
          modules: [Nn, jn, Fn],
          swiperContainer: o,
          visibleSlides: p,
          slideNext: w,
          slidePrev: E,
          handleKeyDown: f,
          onSwiperInit: y,
          onSwiperSlideChange: L,
          generatedAriaLabel: _,
        }
      );
    },
  }),
  ri = {
    ref: "accessibilityAnnouncer",
    class: "sr-only",
    "aria-live": "assertive",
    "aria-atomic": "true",
    role: "status",
  },
  ui = { class: "allergen-title" },
  ci = {
    key: 0,
    class: "swiper-controls flex justify-center items-center gap-3",
  },
  pi = ["disabled", "aria-label"],
  di = ["disabled", "aria-label"];
function fi(i, e, n, t, s, a) {
  const o = Vn,
    p = wt,
    u = Bn,
    l = Mn,
    c = zn;
  return (
    h(),
    C(
      "section",
      {
        ref: "swiperContainer",
        class: pe([
          "w-full mx-auto swiperCarrouselRichtext",
          { "few-cards": i.visibleSlides },
        ]),
        onKeydown:
          e[2] || (e[2] = (...d) => i.handleKeyDown && i.handleKeyDown(...d)),
      },
      [
        v("div", ri, null, 512),
        A(
          c,
          {
            modules: i.modules,
            "space-between": "16",
            "slides-per-view": 3,
            role: "region",
            "aria-roledescription": "carrusel",
            "aria-label": i.generatedAriaLabel,
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
              768: { slidesPerView: 5, spaceBetween: 0 },
              1024: { slidesPerView: 6, spaceBetween: 0 },
            },
            pagination:
              !i.isDot && !i.visibleSlides
                ? { clickable: !0, type: "fraction" }
                : { clickable: !0 },
            class: pe({ "has-controls": i.visibleSlides }),
            onInit: i.onSwiperInit,
            onSlideChange: i.onSwiperSlideChange,
          },
          {
            default: U(() => [
              (h(!0),
              C(
                W,
                null,
                re(
                  i.cardsValue,
                  (d, _) => (
                    h(),
                    Q(
                      u,
                      {
                        key: d.title,
                        role: "group",
                        "aria-roledescription": "slide",
                        "aria-label": `Diapositiva ${_ + 1} de ${i.cardsValue.length}`,
                        "aria-current": _ === i.activeIndex ? "true" : "false",
                      },
                      {
                        default: U(() => [
                          A(
                            p,
                            {
                              title: d.title,
                              direction: "vertical",
                              "is-allergens": i.isAllergens,
                            },
                            {
                              image: U(() => [
                                A(
                                  o,
                                  {
                                    active: "",
                                    size: "56",
                                    illustration: d.illustration,
                                  },
                                  null,
                                  8,
                                  ["illustration"],
                                ),
                              ]),
                              title: U(() => [
                                v("div", ui, [v("span", null, K(d.title), 1)]),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["title", "is-allergens"],
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
              i.isDot
                ? R("", !0)
                : (h(),
                  C("div", ci, [
                    i.visibleSlides
                      ? R("", !0)
                      : (h(),
                        C(
                          "button",
                          {
                            key: 0,
                            class: "swiper-button-prev",
                            disabled: !i.canNavigatePrev,
                            "aria-label": i.canNavigatePrev
                              ? "Ir a la diapositiva anterior"
                              : "No hay diapositiva anterior",
                            onClick:
                              e[0] ||
                              (e[0] = (...d) =>
                                i.slidePrev && i.slidePrev(...d)),
                          },
                          [
                            A(
                              l,
                              {
                                size: i.iconSize,
                                name: "customArrow",
                                color: i.canNavigatePrev ? "black" : "#ADADAD",
                                class: "rotate-180",
                              },
                              null,
                              8,
                              ["size", "color"],
                            ),
                          ],
                          8,
                          pi,
                        )),
                    e[3] ||
                      (e[3] = v(
                        "div",
                        { class: "swiper-pagination" },
                        null,
                        -1,
                      )),
                    i.visibleSlides
                      ? R("", !0)
                      : (h(),
                        C(
                          "button",
                          {
                            key: 1,
                            class: "swiper-button-next",
                            disabled: !i.canNavigateNext,
                            "aria-label": i.canNavigateNext
                              ? "Ir a la siguiente diapositiva"
                              : "No hay siguiente diapositiva",
                            onClick:
                              e[1] ||
                              (e[1] = (...d) =>
                                i.slideNext && i.slideNext(...d)),
                          },
                          [
                            A(
                              l,
                              {
                                size: i.iconSize,
                                name: "customArrow",
                                color: i.canNavigateNext ? "black" : "#ADADAD",
                              },
                              null,
                              8,
                              ["size", "color"],
                            ),
                          ],
                          8,
                          di,
                        )),
                  ])),
            ]),
            _: 1,
          },
          8,
          [
            "modules",
            "aria-label",
            "pagination",
            "class",
            "onInit",
            "onSlideChange",
          ],
        ),
      ],
      34,
    )
  );
}
const gi = qe(li, [["render", fi]]),
  mi = Be({
    name: "CarrouselRichTextAllergens",
    components: { CarrouselRichtext: gi },
    props: {
      cards: { type: Array, default: () => [], required: !0 },
      textColor: {
        type: String,
        default: "black",
        validator: (i) => ["white", "black"].includes(i),
      },
      noAllergensText: { type: String, default: "No contiene alérgenos" },
      containsText: { type: String, default: "Contiene:" },
      mayContainText: {
        type: String,
        default: "Puede contener y no es posible excluir su presencia:",
      },
    },
    setup(i) {
      const e = V(() => i.cards.filter((t) => t.allergenType === "contains")),
        n = V(() => i.cards.filter((t) => t.allergenType === "mayContain"));
      return { containsCards: e, mayContainCards: n };
    },
  }),
  hi = { class: "carrousel-allergens-container" },
  bi = { key: 0, class: "allergen-section w-full" },
  vi = { key: 1, class: "allergen-section w-full" },
  _i = { key: 2, class: "allergen-section w-full" };
function yi(i, e, n, t, s, a) {
  const o = kt("CarrouselRichtext");
  return (
    h(),
    C("div", hi, [
      i.containsCards.length === 0 && i.mayContainCards.length === 0
        ? (h(),
          C("div", bi, [
            v(
              "p",
              {
                class: "no-allergens-message text-body-m tablet:text-body-l",
                style: ye({ color: i.textColor }),
              },
              K(i.noAllergensText),
              5,
            ),
          ]))
        : R("", !0),
      i.containsCards.length > 0
        ? (h(),
          C("div", vi, [
            v(
              "p",
              {
                class:
                  "allergen-section-title text-body-m tablet:text-body-l mb-6 desktop:mb-10",
                style: ye({ color: i.textColor }),
              },
              K(i.containsText),
              5,
            ),
            A(
              o,
              {
                cards: i.containsCards,
                "text-color": i.textColor,
                class: "w-full",
                "is-allergens": "",
              },
              null,
              8,
              ["cards", "text-color"],
            ),
          ]))
        : R("", !0),
      i.mayContainCards.length > 0
        ? (h(),
          C("div", _i, [
            v(
              "p",
              {
                class:
                  "allergen-section-title text-body-m tablet:text-body-l mb-6 desktop:mb-10",
                style: ye({ color: i.textColor }),
              },
              K(i.mayContainText),
              5,
            ),
            A(
              o,
              {
                cards: i.mayContainCards,
                "text-color": i.textColor,
                class: "w-full",
                "is-allergens": "",
              },
              null,
              8,
              ["cards", "text-color"],
            ),
          ]))
        : R("", !0),
    ])
  );
}
const $t = qe(mi, [
    ["render", yi],
    ["__scopeId", "data-v-8076d8f9"],
  ]),
  xi = Be({
    name: "SectionCarrousels",
    components: {
      MCDTitle: nt,
      MCDCarrouselCardFeature: xt,
      MCDCarrouselRichTextAllergens: $t,
      MCDBaseLink: it,
    },
    inheritAttrs: !1,
    props: {
      themeColor: {
        type: String,
        default: "white",
        required: !1,
        validator: (i) => ["white", "gold", "gold-gradient"].includes(i),
      },
      carrousels: { type: Array, default: () => [], required: !1 },
      backgroundImage: { type: Object, default: null, required: !1 },
    },
    setup(i) {
      const e = Pt(),
        n = V(() =>
          !i.themeColor || i.themeColor === "white"
            ? "bg-transparent"
            : i.themeColor === "gold-gradient"
              ? "bg-gradient-mccafe-gold"
              : i.themeColor === "gold"
                ? "bg-surface-gold"
                : "bg-transparent",
        ),
        t = V(() =>
          e.isMobile.value ? "320%" : e.isTablet.value ? "200%" : "170%",
        ),
        s = V(() => (e.isMobile.value || e.isTablet.value, "center 70%"));
      return { themeColorClass: n, backgroundSize: t, backgroundPosition: s };
    },
  }),
  wi = {
    key: 1,
    class: "absolute inset-0 bg-black bg-opacity-50",
    style: { "backdrop-filter": "blur(6px)" },
  },
  ki = { class: "relative z-10" },
  Ci = {
    class:
      "flex w-full py-10 px-4 items-center gap-6 flex-col tablet:gap-10 tablet:py-10 tablet:px-6 desktop:py-20 desktop:px-[120px] desktop:gap-16",
  },
  Pi = { key: 0, class: "flex flex-col items-center gap-4" };
function $i(i, e, n, t, s, a) {
  const o = nt,
    p = xt,
    u = $t,
    l = it;
  return (
    h(),
    C(
      "section",
      { class: pe(["relative overflow-hidden", i.themeColorClass]) },
      [
        i.backgroundImage
          ? (h(),
            C(
              "div",
              {
                key: 0,
                class: "absolute inset-0 bg-cover bg-center",
                style: ye({
                  backgroundImage: `url(${i.backgroundImage.url})`,
                  backgroundPosition: i.backgroundPosition,
                  backgroundSize: i.backgroundSize,
                }),
              },
              null,
              4,
            ))
          : R("", !0),
        i.backgroundImage ? (h(), C("div", wi)) : R("", !0),
        v("div", ki, [
          v("div", Ci, [
            v(
              "div",
              {
                class: pe([
                  "w-screen flex flex-col items-center gap-6 desktop:gap-10 self-strech justify-center",
                  [i.backgroundImage ? "text-white" : ""],
                ]),
              },
              [
                (h(!0),
                C(
                  W,
                  null,
                  re(
                    i.carrousels,
                    (c, d) => (
                      h(),
                      C(
                        W,
                        { key: d },
                        [
                          c.carrouselType === "richtext" || c.cards?.length
                            ? (h(),
                              C(
                                W,
                                { key: 0 },
                                [
                                  c.title
                                    ? (h(),
                                      C("div", Pi, [
                                        A(
                                          o,
                                          {
                                            "title-as": "span",
                                            title: c.title,
                                            size: "sm",
                                          },
                                          null,
                                          8,
                                          ["title"],
                                        ),
                                      ]))
                                    : R("", !0),
                                  c.carrouselType === "feature"
                                    ? (h(),
                                      Q(
                                        p,
                                        {
                                          key: 1,
                                          cards: c.cards,
                                          "is-product": !0,
                                          "is-ingredient-carrousel": !0,
                                        },
                                        null,
                                        8,
                                        ["cards"],
                                      ))
                                    : R("", !0),
                                  c.carrouselType === "richtext"
                                    ? (h(),
                                      Q(
                                        u,
                                        {
                                          key: 2,
                                          cards: c.cards,
                                          "text-color": i.backgroundImage
                                            ? "white"
                                            : "black",
                                          "no-allergens-text":
                                            c.noAllergensText,
                                          "contains-text": c.containsText,
                                          "may-contain-text": c.mayContainText,
                                        },
                                        null,
                                        8,
                                        [
                                          "cards",
                                          "text-color",
                                          "no-allergens-text",
                                          "contains-text",
                                          "may-contain-text",
                                        ],
                                      ))
                                    : R("", !0),
                                  c.bottomLink
                                    ? (h(),
                                      Q(
                                        l,
                                        {
                                          key: 3,
                                          to: c.bottomLink.to,
                                          label: c.bottomLink.label,
                                          color: i.backgroundImage
                                            ? "white"
                                            : "black",
                                          size: "xs",
                                          "show-icon-right": !0,
                                          onClick: c.bottomLink.onClick,
                                        },
                                        null,
                                        8,
                                        ["to", "label", "color", "onClick"],
                                      ))
                                    : R("", !0),
                                ],
                                64,
                              ))
                            : R("", !0),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              2,
            ),
          ]),
        ]),
      ],
      2,
    )
  );
}
const Ti = qe(xi, [["render", $i]]),
  Si = {
    class:
      "flex flex-col items-start bg-transparent w-full tablet:max-w-[580px] desktop:max-w-[768px] mx-auto gap-6 border-b border-[#D6D6D6] pb-4",
  },
  Di = { key: 0, class: "flex flex-wrap gap-2" },
  Mi = {
    class:
      "flex flex-row py-2 relative items-center gap-2 justify-center w-fit tablet:justify-start",
  },
  Ii = { class: "w-full" },
  Li = { class: "flex items-center justify-end" },
  Ei = { key: 1 },
  Ai = { class: "nutrient-header" },
  Vi = { class: "nutrient-value" },
  Bi = { key: 0, class: "subcategory-label" },
  zi = { key: 1, class: "progress-bar-container" },
  Ri = { key: 1, class: "text-start text-body-s text-text-secondary" },
  Ni = Be({
    __name: "NutritionalChart",
    props: {
      products: {},
      bottomContent: {},
      showReferencesValues: { type: Boolean, default: !0 },
      hideProgressBar: { type: Boolean, default: !1 },
    },
    emits: ["tabChanged", "tabTypeClick"],
    setup(i, { emit: e }) {
      const n = i,
        t = Pt(),
        s = V(() => (t.isDesktop.value ? "desktop" : "mobile")),
        a = O(0),
        o = O(n.products[0]),
        p = V(() => [
          { label: o.value.nutritionalValues.per100g.title, value: "per100g" },
          {
            label: o.value.nutritionalValues.perPortion.title,
            value: "perPortion",
          },
          { label: "% I.R.*", value: "ir" },
        ]),
        u = e,
        l = (f) => {
          a.value = f;
          const w = p.value[f].label,
            E = p.value[f].value;
          (u("tabChanged", w), u("tabTypeClick", E));
        },
        c = (f) => {
          const w = p.value[a.value]?.value;
          switch (f) {
            case "energyKcal":
              return " kcal";
            case "energyKj":
              return " kj";
            default:
              return (w && o.value?.nutritionalValues[w]?.[f]?.unit) || "";
          }
        },
        d = (f, w) => {
          if (f === 0)
            return w === "energyKj" ||
              w === "energyKcal" ||
              w === "sugars" ||
              w === "salt"
              ? "0"
              : "0,00";
          const E = f.toFixed(1);
          return E.endsWith(".0")
            ? Math.floor(f).toString().replace(".", ",")
            : E.replace(".", ",");
        },
        _ = {
          energyKj: 8400,
          energyKcal: 2e3,
          proteins: 70,
          carbs: 260,
          fiber: 20,
          sugars: 90,
          fats: 70,
          saturatedFats: 30,
          salt: 50,
        },
        r = (f) => _[f],
        I = (f, w) => {
          const E = r(w),
            z =
              ((p.value[a.value].value === "per100g"
                ? f
                : o.value.nutritionalValues.perPortion[w].value) *
                100) /
              E;
          return Math.min(Math.max(z, 0), 100);
        },
        S = (f) => o.value.title === f.title,
        D = (f) => {
          ((o.value = f), u("tabChanged", f.title));
        },
        L = V(() => {
          const f = t.isDesktop.value ? 24 : t.isTablet.value ? 20 : 18,
            w = t.isDesktop.value ? 40 : (t.isTablet.value, 30);
          return `translateX(calc(${f}px + ${a.value * 100}% + ${a.value * w}px))`;
        }),
        y = (f) => {
          const w = o.value.nutritionalValues.perIr?.[f]?.value;
          if (w != null) return w;
          if (f === "fiber") return null;
          const E = o.value.nutritionalValues.perPortion[f].value;
          return Math.ceil((E * 100) / _[f]);
        };
      return (f, w) => {
        const E = Kn,
          k = Un;
        return (
          h(),
          C("div", Si, [
            i.products.length > 1
              ? (h(),
                C("div", Di, [
                  (h(!0),
                  C(
                    W,
                    null,
                    re(
                      i.products,
                      (z) => (
                        h(),
                        Q(
                          E,
                          { key: z.title, active: S(z), onClick: (P) => D(z) },
                          {
                            default: U(() => [v("span", null, K(z.title), 1)]),
                            _: 2,
                          },
                          1032,
                          ["active", "onClick"],
                        )
                      ),
                    ),
                    128,
                  )),
                ]))
              : R("", !0),
            v("div", Mi, [
              (h(!0),
              C(
                W,
                null,
                re(
                  p.value,
                  (z, P) => (
                    h(),
                    Q(
                      k,
                      {
                        key: P,
                        label: z.label,
                        size: s.value,
                        active: a.value === P,
                        onClick: ($) => l(P),
                      },
                      null,
                      8,
                      ["label", "size", "active", "onClick"],
                    )
                  ),
                ),
                128,
              )),
              v(
                "div",
                {
                  class:
                    "absolute bottom-0 left-0 transition-all duration-200 ease-in-out flex",
                  style: ye({
                    transform: L.value,
                    width: "25%",
                    height: "5px",
                    background: "var(--gold-500)",
                    borderRadius: "0 6px",
                    marginTop: "4px",
                  }),
                },
                null,
                4,
              ),
            ]),
            v("div", Ii, [
              (h(!0),
              C(
                W,
                null,
                re(p.value, (z, P) =>
                  On(
                    (h(),
                    C("div", { key: P, class: "flex flex-col mt-6 gap-3" }, [
                      v("div", Li, [
                        v("span", null, [
                          z.value !== "ir"
                            ? (h(),
                              C(
                                W,
                                { key: 0 },
                                [
                                  v(
                                    "strong",
                                    null,
                                    K(o.value.nutritionalValues[z.value].title),
                                    1,
                                  ),
                                  Ct(
                                    K(i.showReferencesValues ? "/ I.R.*" : ""),
                                    1,
                                  ),
                                ],
                                64,
                              ))
                            : (h(), C("strong", Ei, "% I.R.*")),
                        ]),
                      ]),
                      (h(!0),
                      C(
                        W,
                        null,
                        re(
                          z.value === "ir"
                            ? o.value.nutritionalValues.perPortion
                            : o.value.nutritionalValues[z.value],
                          ($, b) => (
                            h(),
                            C(
                              "div",
                              {
                                key: `${o.value.title}-${b}`,
                                class: pe([
                                  "nutrient-item",
                                  {
                                    "sub-nutrient":
                                      b === "saturatedFats" || b === "sugars",
                                  },
                                ]),
                              },
                              [
                                b !== "title"
                                  ? (h(),
                                    C(
                                      W,
                                      { key: 0 },
                                      [
                                        v("div", Ai, [
                                          v(
                                            "span",
                                            {
                                              class: pe([
                                                "nutrient-name",
                                                {
                                                  "font-bold": !(
                                                    b === "saturatedFats" ||
                                                    b === "sugars"
                                                  ),
                                                  "main-nutrient":
                                                    b === "fats" ||
                                                    b === "carbs",
                                                },
                                              ]),
                                            },
                                            K($.label),
                                            3,
                                          ),
                                          v(
                                            "span",
                                            Vi,
                                            K(
                                              z.value === "ir"
                                                ? y(b) !== null
                                                  ? Math.ceil(y(b)) + "%"
                                                  : ""
                                                : d($.value, b) +
                                                    c(b) +
                                                    (i.showReferencesValues
                                                      ? " /" +
                                                        Math.ceil(r(b)) +
                                                        c(b)
                                                      : ""),
                                            ),
                                            1,
                                          ),
                                        ]),
                                        (b === "fats" || b === "carbs") &&
                                        $.sublabel
                                          ? (h(),
                                            C("div", Bi, K($.sublabel), 1))
                                          : R("", !0),
                                        i.hideProgressBar
                                          ? R("", !0)
                                          : (h(),
                                            C("div", zi, [
                                              v(
                                                "div",
                                                {
                                                  class: "progress-bar",
                                                  style: ye({
                                                    width: `${z.value === "ir" ? Math.ceil(y(b)) : I($.value, b)}%`,
                                                  }),
                                                },
                                                null,
                                                4,
                                              ),
                                            ])),
                                      ],
                                      64,
                                    ))
                                  : R("", !0),
                              ],
                              2,
                            )
                          ),
                        ),
                        128,
                      )),
                    ])),
                    [[Xn, a.value === P]],
                  ),
                ),
                128,
              )),
            ]),
            i.bottomContent && a.value === 2
              ? (h(), C("span", Ri, K(i.bottomContent), 1))
              : R("", !0),
          ])
        );
      };
    },
  }),
  ji = qe(Ni, [["__scopeId", "data-v-9a22bd33"]]);
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ve,
  $e,
  Tt,
  at,
  je,
  We,
  Je,
  Fe,
  de = "transform",
  bt = de + "Origin",
  dn,
  St = function (e) {
    var n = e.ownerDocument || e;
    for (
      !(de in e.style) &&
      ("msTransform" in e.style) &&
      ((de = "msTransform"), (bt = de + "Origin"));
      n.parentNode && (n = n.parentNode);
    );
    if ((($e = window), (Je = new Te()), n)) {
      ((ve = n),
        (Tt = n.documentElement),
        (at = n.body),
        (Fe = ve.createElementNS("http://www.w3.org/2000/svg", "g")),
        (Fe.style.transform = "none"));
      var t = n.createElement("div"),
        s = n.createElement("div"),
        a = n && (n.body || n.firstElementChild);
      a &&
        a.appendChild &&
        (a.appendChild(t),
        t.appendChild(s),
        t.setAttribute(
          "style",
          "position:static;transform:translate3d(0,0,1px)",
        ),
        (dn = s.offsetParent !== t),
        a.removeChild(t));
    }
    return n;
  },
  Fi = function (e) {
    for (var n, t; e && e !== at; )
      ((t = e._gsap),
        t && t.uncache && t.get(e, "x"),
        t &&
          !t.scaleX &&
          !t.scaleY &&
          t.renderTransform &&
          ((t.scaleX = t.scaleY = 1e-4),
          t.renderTransform(1, t),
          n ? n.push(t) : (n = [t])),
        (e = e.parentNode));
    return n;
  },
  fn = [],
  gn = [],
  Dt = function () {
    return $e.pageYOffset || ve.scrollTop || Tt.scrollTop || at.scrollTop || 0;
  },
  Mt = function () {
    return (
      $e.pageXOffset || ve.scrollLeft || Tt.scrollLeft || at.scrollLeft || 0
    );
  },
  It = function (e) {
    return (
      e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    );
  },
  Oi = function i(e) {
    if ($e.getComputedStyle(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return i(e);
  },
  lt = function i(e, n) {
    if (e.parentNode && (ve || St(e))) {
      var t = It(e),
        s = t
          ? t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        a = t ? (n ? "rect" : "g") : "div",
        o = n !== 2 ? 0 : 100,
        p = n === 3 ? 100 : 0,
        u =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        l = ve.createElementNS
          ? ve.createElementNS(s.replace(/^https/, "http"), a)
          : ve.createElement(a);
      return (
        n &&
          (t
            ? (We || (We = i(e)),
              l.setAttribute("width", 0.01),
              l.setAttribute("height", 0.01),
              l.setAttribute("transform", "translate(" + o + "," + p + ")"),
              We.appendChild(l))
            : (je || ((je = i(e)), (je.style.cssText = u)),
              (l.style.cssText =
                u +
                "width:0.1px;height:0.1px;top:" +
                p +
                "px;left:" +
                o +
                "px"),
              je.appendChild(l))),
        l
      );
    }
    throw "Need document and parent.";
  },
  Xi = function (e) {
    for (var n = new Te(), t = 0; t < e.numberOfItems; t++)
      n.multiply(e.getItem(t).matrix);
    return n;
  },
  mn = function (e) {
    var n = e.getCTM(),
      t;
    return (
      n ||
        ((t = e.style[de]),
        (e.style[de] = "none"),
        e.appendChild(Fe),
        (n = Fe.getCTM()),
        e.removeChild(Fe),
        t
          ? (e.style[de] = t)
          : e.style.removeProperty(
              de.replace(/([A-Z])/g, "-$1").toLowerCase(),
            )),
      n || Je.clone()
    );
  },
  Yi = function (e, n) {
    var t = It(e),
      s = e === t,
      a = t ? fn : gn,
      o = e.parentNode,
      p =
        o && !t && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o,
      u,
      l,
      c,
      d,
      _,
      r;
    if (e === $e) return e;
    if (
      (a.length || a.push(lt(e, 1), lt(e, 2), lt(e, 3)), (u = t ? We : je), t)
    )
      (s
        ? ((c = mn(e)), (d = -c.e / c.a), (_ = -c.f / c.d), (l = Je))
        : e.getBBox
          ? ((c = e.getBBox()),
            (l = e.transform ? e.transform.baseVal : {}),
            (l = l.numberOfItems
              ? l.numberOfItems > 1
                ? Xi(l)
                : l.getItem(0).matrix
              : Je),
            (d = l.a * c.x + l.c * c.y),
            (_ = l.b * c.x + l.d * c.y))
          : ((l = new Te()), (d = _ = 0)),
        n && e.tagName.toLowerCase() === "g" && (d = _ = 0),
        (s ? t : o).appendChild(u),
        u.setAttribute(
          "transform",
          "matrix(" +
            l.a +
            "," +
            l.b +
            "," +
            l.c +
            "," +
            l.d +
            "," +
            (l.e + d) +
            "," +
            (l.f + _) +
            ")",
        ));
    else {
      if (((d = _ = 0), dn))
        for (
          l = e.offsetParent, c = e;
          c && (c = c.parentNode) && c !== l && c.parentNode;
        )
          ($e.getComputedStyle(c)[de] + "").length > 4 &&
            ((d = c.offsetLeft), (_ = c.offsetTop), (c = 0));
      if (
        ((r = $e.getComputedStyle(e)),
        r.position !== "absolute" && r.position !== "fixed")
      )
        for (l = e.offsetParent; o && o !== l; )
          ((d += o.scrollLeft || 0),
            (_ += o.scrollTop || 0),
            (o = o.parentNode));
      ((c = u.style),
        (c.top = e.offsetTop - _ + "px"),
        (c.left = e.offsetLeft - d + "px"),
        (c[de] = r[de]),
        (c[bt] = r[bt]),
        (c.position = r.position === "fixed" ? "fixed" : "absolute"),
        p.appendChild(u));
    }
    return u;
  },
  rt = function (e, n, t, s, a, o, p) {
    return (
      (e.a = n),
      (e.b = t),
      (e.c = s),
      (e.d = a),
      (e.e = o),
      (e.f = p),
      e
    );
  },
  Te = (function () {
    function i(n, t, s, a, o, p) {
      (n === void 0 && (n = 1),
        t === void 0 && (t = 0),
        s === void 0 && (s = 0),
        a === void 0 && (a = 1),
        o === void 0 && (o = 0),
        p === void 0 && (p = 0),
        rt(this, n, t, s, a, o, p));
    }
    var e = i.prototype;
    return (
      (e.inverse = function () {
        var t = this.a,
          s = this.b,
          a = this.c,
          o = this.d,
          p = this.e,
          u = this.f,
          l = t * o - s * a || 1e-10;
        return rt(
          this,
          o / l,
          -s / l,
          -a / l,
          t / l,
          (a * u - o * p) / l,
          -(t * u - s * p) / l,
        );
      }),
      (e.multiply = function (t) {
        var s = this.a,
          a = this.b,
          o = this.c,
          p = this.d,
          u = this.e,
          l = this.f,
          c = t.a,
          d = t.c,
          _ = t.b,
          r = t.d,
          I = t.e,
          S = t.f;
        return rt(
          this,
          c * s + _ * o,
          c * a + _ * p,
          d * s + r * o,
          d * a + r * p,
          u + I * s + S * o,
          l + I * a + S * p,
        );
      }),
      (e.clone = function () {
        return new i(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (e.equals = function (t) {
        var s = this.a,
          a = this.b,
          o = this.c,
          p = this.d,
          u = this.e,
          l = this.f;
        return (
          s === t.a &&
          a === t.b &&
          o === t.c &&
          p === t.d &&
          u === t.e &&
          l === t.f
        );
      }),
      (e.apply = function (t, s) {
        s === void 0 && (s = {});
        var a = t.x,
          o = t.y,
          p = this.a,
          u = this.b,
          l = this.c,
          c = this.d,
          d = this.e,
          _ = this.f;
        return (
          (s.x = a * p + o * l + d || 0),
          (s.y = a * u + o * c + _ || 0),
          s
        );
      }),
      i
    );
  })();
function be(i, e, n, t) {
  if (!i || !i.parentNode || (ve || St(i)).documentElement === i)
    return new Te();
  var s = Fi(i),
    a = It(i),
    o = a ? fn : gn,
    p = Yi(i, n),
    u = o[0].getBoundingClientRect(),
    l = o[1].getBoundingClientRect(),
    c = o[2].getBoundingClientRect(),
    d = p.parentNode,
    _ = !t && Oi(i),
    r = new Te(
      (l.left - u.left) / 100,
      (l.top - u.top) / 100,
      (c.left - u.left) / 100,
      (c.top - u.top) / 100,
      u.left + (_ ? 0 : Mt()),
      u.top + (_ ? 0 : Dt()),
    );
  if ((d.removeChild(p), s))
    for (u = s.length; u--; )
      ((l = s[u]), (l.scaleX = l.scaleY = 0), l.renderTransform(1, l));
  return e ? r.inverse() : r;
}
/*!
 * Flip 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var qi = 1,
  Ae,
  ne,
  X,
  Oe,
  we,
  _e,
  vt,
  Gt = function (e, n) {
    return e.actions.forEach(function (t) {
      return t.vars[n] && t.vars[n](t);
    });
  },
  _t = {},
  Kt = 180 / Math.PI,
  Hi = Math.PI / 180,
  Qe = {},
  Ut = {},
  st = {},
  Lt = function (e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e;
  },
  Gi = Lt("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
  ot = Lt(
    "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight",
  ),
  Xe = function (e) {
    return Ae(e)[0] || console.warn("Element not found:", e);
  },
  Ie = function (e) {
    return Math.round(e * 1e4) / 1e4 || 0;
  },
  ut = function (e, n, t) {
    return e.forEach(function (s) {
      return s.classList[t](n);
    });
  },
  Wt = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1,
  },
  hn = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1,
  },
  bn = function (e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase();
  },
  Le = function (e, n) {
    var t = {},
      s;
    for (s in e) n[s] || (t[s] = e[s]);
    return t;
  },
  Et = {},
  vn = function (e) {
    var n = (Et[e] = Lt(e));
    return ((st[e] = n.concat(ot)), n);
  },
  Ki = function (e) {
    var n = e._gsap || ne.core.getCache(e);
    return n.gmCache === ne.ticker.frame
      ? n.gMatrix
      : ((n.gmCache = ne.ticker.frame), (n.gMatrix = be(e, !0, !1, !0)));
  },
  Ui = function i(e, n, t) {
    t === void 0 && (t = 0);
    for (
      var s = e.parentNode,
        a = 1e3 * Math.pow(10, t) * (n ? -1 : 1),
        o = n ? -a * 900 : 0;
      e;
    )
      ((o += a), (e = e.previousSibling));
    return s ? o + i(s, n, t + 1) : o;
  },
  et = function (e, n, t) {
    return (
      e.forEach(function (s) {
        return (s.d = Ui(t ? s.element : s.t, n));
      }),
      e.sort(function (s, a) {
        return s.d - a.d;
      }),
      e
    );
  },
  Ye = function (e, n) {
    for (
      var t = e.element.style, s = (e.css = e.css || []), a = n.length, o, p;
      a--;
    )
      ((o = n[a]),
        (p = t[o] || t.getPropertyValue(o)),
        s.push(p ? o : Ut[o] || (Ut[o] = bn(o)), p));
    return t;
  },
  tt = function (e) {
    var n = e.css,
      t = e.element.style,
      s = 0;
    for (e.cache.uncache = 1; s < n.length; s += 2)
      n[s + 1] ? (t[n[s]] = n[s + 1]) : t.removeProperty(n[s]);
    !n[n.indexOf("transform") + 1] &&
      t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  Zt = function (e, n) {
    (e.forEach(function (t) {
      return (t.a.cache.uncache = 1);
    }),
      n || e.finalStates.forEach(tt));
  },
  ct =
    "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
      ",",
    ),
  At = function (e, n, t) {
    var s = e.element,
      a = e.width,
      o = e.height,
      p = e.uncache,
      u = e.getProp,
      l = s.style,
      c = 4,
      d,
      _,
      r;
    if ((typeof n != "object" && (n = e), X && t !== 1))
      return (
        X._abs.push({ t: s, b: e, a: e, sd: 0 }),
        X._final.push(function () {
          return (e.cache.uncache = 1) && tt(e);
        }),
        s
      );
    for (
      _ = u("display") === "none",
        (!e.isVisible || _) &&
          (_ && (Ye(e, ["display"]).display = n.display),
          (e.matrix = n.matrix),
          (e.width = a = e.width || n.width),
          (e.height = o = e.height || n.height)),
        Ye(e, ct),
        r = window.getComputedStyle(s);
      c--;
    )
      l[ct[c]] = r[ct[c]];
    if (
      ((l.gridArea = "1 / 1 / 1 / 1"),
      (l.transition = "none"),
      (l.position = "absolute"),
      (l.width = a + "px"),
      (l.height = o + "px"),
      l.top || (l.top = "0px"),
      l.left || (l.left = "0px"),
      p)
    )
      d = new Se(s);
    else if (((d = Le(e, Qe)), (d.position = "absolute"), e.simple)) {
      var I = s.getBoundingClientRect();
      d.matrix = new Te(1, 0, 0, 1, I.left + Mt(), I.top + Dt());
    } else d.matrix = be(s, !1, !1, !0);
    return (
      (d = Ee(d, e, !0)),
      (e.x = _e(d.x, 0.01)),
      (e.y = _e(d.y, 0.01)),
      s
    );
  },
  Jt = function (e, n) {
    return (
      n !== !0 &&
        ((n = Ae(n)),
        (e = e.filter(function (t) {
          if (n.indexOf((t.sd < 0 ? t.b : t.a).element) !== -1) return !0;
          (t.t._gsap.renderTransform(1),
            t.b.isVisible &&
              ((t.t.style.width = t.b.width + "px"),
              (t.t.style.height = t.b.height + "px")));
        }))),
      e
    );
  },
  _n = function (e) {
    return et(e, !0).forEach(function (n) {
      return (
        (n.a.isVisible || n.b.isVisible) && At(n.sd < 0 ? n.b : n.a, n.b, 1)
      );
    });
  },
  Wi = function (e, n) {
    return (n && e.idLookup[yt(n).id]) || e.elementStates[0];
  },
  yt = function (e, n, t, s) {
    return e instanceof Se
      ? e
      : e instanceof fe
        ? Wi(e, s)
        : new Se(
            typeof e == "string" ? Xe(e) || console.warn(e + " not found") : e,
            n,
            t,
          );
  },
  Zi = function (e, n) {
    for (
      var t = ne.getProperty(e.element, null, "native"),
        s = (e.props = {}),
        a = n.length;
      a--;
    )
      s[n[a]] = (t(n[a]) + "").trim();
    return (s.zIndex && (s.zIndex = parseFloat(s.zIndex) || 0), e);
  },
  yn = function (e, n) {
    var t = e.style || e,
      s;
    for (s in n) t[s] = n[s];
  },
  Ji = function (e) {
    var n = e.getAttribute("data-flip-id");
    return (n || e.setAttribute("data-flip-id", (n = "auto-" + qi++)), n);
  },
  xn = function (e) {
    return e.map(function (n) {
      return n.element;
    });
  },
  Qt = function (e, n, t) {
    return e && n.length && t.add(e(xn(n), t, new fe(n, 0, !0)), 0);
  },
  Ee = function (e, n, t, s, a, o) {
    var p = e.element,
      u = e.cache,
      l = e.parent,
      c = e.x,
      d = e.y,
      _ = n.width,
      r = n.height,
      I = n.scaleX,
      S = n.scaleY,
      D = n.rotation,
      L = n.bounds,
      y = o && vt && vt(p, "transform,width,height"),
      f = e,
      w = n.matrix,
      E = w.e,
      k = w.f,
      z =
        e.bounds.width !== L.width ||
        e.bounds.height !== L.height ||
        e.scaleX !== I ||
        e.scaleY !== S ||
        e.rotation !== D,
      P = !z && e.simple && n.simple && !a,
      $,
      b,
      j,
      ee,
      te,
      G,
      M;
    return (
      P || !l
        ? ((I = S = 1), (D = $ = 0))
        : ((te = Ki(l)),
          (G = te
            .clone()
            .multiply(n.ctm ? n.matrix.clone().multiply(n.ctm) : n.matrix)),
          (D = Ie(Math.atan2(G.b, G.a) * Kt)),
          ($ = Ie(Math.atan2(G.c, G.d) * Kt + D) % 360),
          (I = Math.sqrt(Math.pow(G.a, 2) + Math.pow(G.b, 2))),
          (S =
            Math.sqrt(Math.pow(G.c, 2) + Math.pow(G.d, 2)) * Math.cos($ * Hi)),
          a &&
            ((a = Ae(a)[0]),
            (ee = ne.getProperty(a)),
            (M = a.getBBox && typeof a.getBBox == "function" && a.getBBox()),
            (f = {
              scaleX: ee("scaleX"),
              scaleY: ee("scaleY"),
              width: M ? M.width : Math.ceil(parseFloat(ee("width", "px"))),
              height: M ? M.height : parseFloat(ee("height", "px")),
            })),
          (u.rotation = D + "deg"),
          (u.skewX = $ + "deg")),
      t
        ? ((I *= _ === f.width || !f.width ? 1 : _ / f.width),
          (S *= r === f.height || !f.height ? 1 : r / f.height),
          (u.scaleX = I),
          (u.scaleY = S))
        : ((_ = _e((_ * I) / f.scaleX, 0)),
          (r = _e((r * S) / f.scaleY, 0)),
          (p.style.width = _ + "px"),
          (p.style.height = r + "px")),
      s && yn(p, n.props),
      P || !l
        ? ((c += E - e.matrix.e), (d += k - e.matrix.f))
        : z || l !== n.parent
          ? (u.renderTransform(1, u),
            (G = be(a || p, !1, !1, !0)),
            (b = te.apply({ x: G.e, y: G.f })),
            (j = te.apply({ x: E, y: k })),
            (c += j.x - b.x),
            (d += j.y - b.y))
          : ((te.e = te.f = 0),
            (j = te.apply({ x: E - e.matrix.e, y: k - e.matrix.f })),
            (c += j.x),
            (d += j.y)),
      (c = _e(c, 0.02)),
      (d = _e(d, 0.02)),
      o && !(o instanceof Se)
        ? y && y.revert()
        : ((u.x = c + "px"), (u.y = d + "px"), u.renderTransform(1, u)),
      o &&
        ((o.x = c),
        (o.y = d),
        (o.rotation = D),
        (o.skewX = $),
        t ? ((o.scaleX = I), (o.scaleY = S)) : ((o.width = _), (o.height = r))),
      o || u
    );
  },
  pt = function (e, n) {
    return e instanceof fe ? e : new fe(e, n);
  },
  wn = function (e, n, t) {
    var s = e.idLookup[t],
      a = e.alt[t];
    return a.isVisible &&
      (!(n.getElementState(a.element) || a).isVisible || !s.isVisible)
      ? a
      : s;
  },
  dt = [],
  ft = "width,height,overflowX,overflowY".split(","),
  Ge,
  en = function (e) {
    if (e !== Ge) {
      var n = we.style,
        t = we.clientWidth === window.outerWidth,
        s = we.clientHeight === window.outerHeight,
        a = 4;
      if (e && (t || s)) {
        for (; a--; ) dt[a] = n[ft[a]];
        (t && ((n.width = we.clientWidth + "px"), (n.overflowY = "hidden")),
          s && ((n.height = we.clientHeight + "px"), (n.overflowX = "hidden")),
          (Ge = e));
      } else if (Ge) {
        for (; a--; ) dt[a] ? (n[ft[a]] = dt[a]) : n.removeProperty(bn(ft[a]));
        Ge = e;
      }
    }
  },
  gt = function (e, n, t, s) {
    ((e instanceof fe && n instanceof fe) ||
      console.warn("Not a valid state object."),
      (t = t || {}));
    var a = t,
      o = a.clearProps,
      p = a.onEnter,
      u = a.onLeave,
      l = a.absolute,
      c = a.absoluteOnLeave,
      d = a.custom,
      _ = a.delay,
      r = a.paused,
      I = a.repeat,
      S = a.repeatDelay,
      D = a.yoyo,
      L = a.toggleClass,
      y = a.nested,
      f = a.zIndex,
      w = a.scale,
      E = a.fade,
      k = a.stagger,
      z = a.spin,
      P = a.prune,
      $ = ("props" in t ? t : e).props,
      b = Le(t, Wt),
      j = ne.timeline({
        delay: _,
        paused: r,
        repeat: I,
        repeatDelay: S,
        yoyo: D,
        data: "isFlip",
      }),
      ee = b,
      te = [],
      G = [],
      M = [],
      ge = [],
      ke = z === !0 ? 1 : z || 0,
      ze =
        typeof z == "function"
          ? z
          : function () {
              return ke;
            },
      Ce = e.interrupted || n.interrupted,
      xe = j[s !== 1 ? "to" : "from"],
      le,
      Z,
      Pe,
      ie,
      q,
      F,
      ae,
      se,
      De,
      T,
      H,
      oe,
      N,
      J;
    for (Z in n.idLookup)
      ((H = n.alt[Z] ? wn(n, e, Z) : n.idLookup[Z]),
        (q = H.element),
        (T = e.idLookup[Z]),
        e.alt[Z] &&
          q === T.element &&
          (e.alt[Z].isVisible || !H.isVisible) &&
          (T = e.alt[Z]),
        T
          ? ((F = {
              t: q,
              b: T,
              a: H,
              sd: T.element === q ? 0 : H.isVisible ? 1 : -1,
            }),
            M.push(F),
            F.sd &&
              (F.sd < 0 && ((F.b = H), (F.a = T)),
              Ce && Ye(F.b, $ ? st[$] : ot),
              E &&
                M.push(
                  (F.swap = {
                    t: T.element,
                    b: F.b,
                    a: F.a,
                    sd: -F.sd,
                    swap: F,
                  }),
                )),
            (q._flip = T.element._flip = X ? X.timeline : j))
          : H.isVisible &&
            (M.push({
              t: q,
              b: Le(H, { isVisible: 1 }),
              a: H,
              sd: 0,
              entering: 1,
            }),
            (q._flip = X ? X.timeline : j)));
    if (
      ($ &&
        (Et[$] || vn($)).forEach(function (ue) {
          return (b[ue] = function (me) {
            return M[me].a.props[ue];
          });
        }),
      (M.finalStates = De = []),
      (oe = function () {
        for (et(M), en(!0), ie = 0; ie < M.length; ie++)
          ((F = M[ie]),
            (N = F.a),
            (J = F.b),
            P && !N.isDifferent(J) && !F.entering
              ? M.splice(ie--, 1)
              : ((q = F.t),
                y && !(F.sd < 0) && ie && (N.matrix = be(q, !1, !1, !0)),
                J.isVisible && N.isVisible
                  ? (F.sd < 0
                      ? ((ae = new Se(q, $, e.simple)),
                        Ee(ae, N, w, 0, 0, ae),
                        (ae.matrix = be(q, !1, !1, !0)),
                        (ae.css = F.b.css),
                        (F.a = N = ae),
                        E && (q.style.opacity = Ce ? J.opacity : N.opacity),
                        k && ge.push(q))
                      : F.sd > 0 &&
                        E &&
                        (q.style.opacity = Ce ? N.opacity - J.opacity : "0"),
                    Ee(N, J, w, $))
                  : J.isVisible !== N.isVisible &&
                    (J.isVisible
                      ? N.isVisible ||
                        ((J.css = N.css),
                        G.push(J),
                        M.splice(ie--, 1),
                        l && y && Ee(N, J, w, $))
                      : (N.isVisible && te.push(N), M.splice(ie--, 1))),
                w ||
                  ((q.style.maxWidth = Math.max(N.width, J.width) + "px"),
                  (q.style.maxHeight = Math.max(N.height, J.height) + "px"),
                  (q.style.minWidth = Math.min(N.width, J.width) + "px"),
                  (q.style.minHeight = Math.min(N.height, J.height) + "px")),
                y && L && q.classList.add(L)),
            De.push(N));
        var me;
        if (
          (L &&
            ((me = De.map(function (g) {
              return g.element;
            })),
            y &&
              me.forEach(function (g) {
                return g.classList.remove(L);
              })),
          en(!1),
          w
            ? ((b.scaleX = function (g) {
                return M[g].a.scaleX;
              }),
              (b.scaleY = function (g) {
                return M[g].a.scaleY;
              }))
            : ((b.width = function (g) {
                return M[g].a.width + "px";
              }),
              (b.height = function (g) {
                return M[g].a.height + "px";
              }),
              (b.autoRound = t.autoRound || !1)),
          (b.x = function (g) {
            return M[g].a.x + "px";
          }),
          (b.y = function (g) {
            return M[g].a.y + "px";
          }),
          (b.rotation = function (g) {
            return M[g].a.rotation + (z ? ze(g, se[g], se) * 360 : 0);
          }),
          (b.skewX = function (g) {
            return M[g].a.skewX;
          }),
          (se = M.map(function (g) {
            return g.t;
          })),
          (f || f === 0) &&
            ((b.modifiers = {
              zIndex: function () {
                return f;
              },
            }),
            (b.zIndex = f),
            (b.immediateRender = t.immediateRender !== !1)),
          E &&
            (b.opacity = function (g) {
              return M[g].sd < 0 ? 0 : M[g].sd > 0 ? M[g].a.opacity : "+=0";
            }),
          ge.length)
        ) {
          k = ne.utils.distribute(k);
          var Bt = se.slice(ge.length);
          b.stagger = function (g, he) {
            return k(~ge.indexOf(he) ? se.indexOf(M[g].swap.t) : g, he, Bt);
          };
        }
        if (
          (Gi.forEach(function (g) {
            return t[g] && j.eventCallback(g, t[g], t[g + "Params"]);
          }),
          d && se.length)
        ) {
          ((ee = Le(b, Wt)),
            "scale" in d && ((d.scaleX = d.scaleY = d.scale), delete d.scale));
          for (Z in d)
            ((le = Le(d[Z], hn)),
              (le[Z] = b[Z]),
              !("duration" in le) &&
                "duration" in b &&
                (le.duration = b.duration),
              (le.stagger = b.stagger),
              xe.call(j, se, le, 0),
              delete ee[Z]);
        }
        ((se.length || G.length || te.length) &&
          (L &&
            j.add(function () {
              return ut(me, L, j._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !r &&
            ut(me, L, "add"),
          se.length && xe.call(j, se, ee, 0)),
          Qt(p, te, j),
          Qt(u, G, j));
        var m = X && X.timeline;
        (m &&
          (m.add(j, 0),
          X._final.push(function () {
            return Zt(M, !o);
          })),
          (Pe = j.duration()),
          j.call(function () {
            var g = j.time() >= Pe;
            (g && !m && Zt(M, !o), L && ut(me, L, g ? "remove" : "add"));
          }));
      }),
      c &&
        (l = M.filter(function (ue) {
          return !ue.sd && !ue.a.isVisible && ue.b.isVisible;
        }).map(function (ue) {
          return ue.a.element;
        })),
      X)
    ) {
      var He;
      (l && (He = X._abs).push.apply(He, Jt(M, l)), X._run.push(oe));
    } else (l && _n(Jt(M, l)), oe());
    var Re = X ? X.timeline : j;
    return (
      (Re.revert = function () {
        return Vt(Re, 1, 1);
      }),
      Re
    );
  },
  Qi = function i(e) {
    (e.vars.onInterrupt &&
      e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
      e.getChildren(!0, !1, !0).forEach(i));
  },
  Vt = function (e, n, t) {
    if (e && e.progress() < 1 && (!e.paused() || t))
      return (n && (Qi(e), n < 2 && e.progress(1), e.kill()), !0);
  },
  Ke = function (e) {
    for (
      var n = (e.idLookup = {}),
        t = (e.alt = {}),
        s = e.elementStates,
        a = s.length,
        o;
      a--;
    )
      ((o = s[a]), n[o.id] ? (t[o.id] = o) : (n[o.id] = o));
  },
  fe = (function () {
    function i(n, t, s) {
      if (((this.props = t && t.props), (this.simple = !!(t && t.simple)), s))
        ((this.targets = xn(n)), (this.elementStates = n), Ke(this));
      else {
        this.targets = Ae(n);
        var a = t && (t.kill === !1 || (t.batch && !t.kill));
        (X && !a && X._kill.push(this), this.update(a || !!X));
      }
    }
    var e = i.prototype;
    return (
      (e.update = function (t) {
        var s = this;
        return (
          (this.elementStates = this.targets.map(function (a) {
            return new Se(a, s.props, s.simple);
          })),
          Ke(this),
          this.interrupt(t),
          this.recordInlineStyles(),
          this
        );
      }),
      (e.clear = function () {
        return (
          (this.targets.length = this.elementStates.length = 0),
          Ke(this),
          this
        );
      }),
      (e.fit = function (t, s, a) {
        for (
          var o = et(this.elementStates.slice(0), !1, !0),
            p = (t || this).idLookup,
            u = 0,
            l,
            c;
          u < o.length;
          u++
        )
          ((l = o[u]),
            a && (l.matrix = be(l.element, !1, !1, !0)),
            (c = p[l.id]),
            c && Ee(l, c, s, !0, 0, l),
            (l.matrix = be(l.element, !1, !1, !0)));
        return this;
      }),
      (e.getProperty = function (t, s) {
        var a = this.getElementState(t) || Qe;
        return (s in a ? a : a.props || Qe)[s];
      }),
      (e.add = function (t) {
        for (
          var s = t.targets.length, a = this.idLookup, o = this.alt, p, u, l;
          s--;
        )
          ((u = t.elementStates[s]),
            (l = a[u.id]),
            l &&
            (u.element === l.element ||
              (o[u.id] && o[u.id].element === u.element))
              ? ((p = this.elementStates.indexOf(
                  u.element === l.element ? l : o[u.id],
                )),
                this.targets.splice(p, 1, t.targets[s]),
                this.elementStates.splice(p, 1, u))
              : (this.targets.push(t.targets[s]), this.elementStates.push(u)));
        return (
          t.interrupted && (this.interrupted = !0),
          t.simple || (this.simple = !1),
          Ke(this),
          this
        );
      }),
      (e.compare = function (t) {
        var s = t.idLookup,
          a = this.idLookup,
          o = [],
          p = [],
          u = [],
          l = [],
          c = [],
          d = t.alt,
          _ = this.alt,
          r = function (P, $, b) {
            return (
              (P.isVisible !== $.isVisible
                ? P.isVisible
                  ? u
                  : l
                : P.isVisible
                  ? p
                  : o
              ).push(b) && c.push(b)
            );
          },
          I = function (P, $, b) {
            return c.indexOf(b) < 0 && r(P, $, b);
          },
          S,
          D,
          L,
          y,
          f,
          w,
          E,
          k;
        for (L in s)
          ((f = d[L]),
            (w = _[L]),
            (S = f ? wn(t, this, L) : s[L]),
            (y = S.element),
            (D = a[L]),
            w
              ? ((k = D.isVisible || (!w.isVisible && y === D.element) ? D : w),
                (E =
                  f && !S.isVisible && !f.isVisible && k.element === f.element
                    ? f
                    : S),
                E.isVisible && k.isVisible && E.element !== k.element
                  ? ((E.isDifferent(k) ? p : o).push(E.element, k.element),
                    c.push(E.element, k.element))
                  : r(E, k, E.element),
                f && E.element === f.element && (f = s[L]),
                I(E.element !== D.element && f ? f : E, D, D.element),
                I(f && f.element === w.element ? f : E, w, w.element),
                f && I(f, w.element === f.element ? w : D, f.element))
              : (D ? (D.isDifferent(S) ? r(S, D, y) : o.push(y)) : u.push(y),
                f && I(f, D, f.element)));
        for (L in a)
          s[L] || (l.push(a[L].element), _[L] && l.push(_[L].element));
        return { changed: p, unchanged: o, enter: u, leave: l };
      }),
      (e.recordInlineStyles = function () {
        for (var t = st[this.props] || ot, s = this.elementStates.length; s--; )
          Ye(this.elementStates[s], t);
      }),
      (e.interrupt = function (t) {
        var s = this,
          a = [];
        (this.targets.forEach(function (o) {
          var p = o._flip,
            u = Vt(p, t ? 0 : 1);
          (t &&
            u &&
            a.indexOf(p) < 0 &&
            p.add(function () {
              return s.updateVisibility();
            }),
            u && a.push(p));
        }),
          !t && a.length && this.updateVisibility(),
          this.interrupted || (this.interrupted = !!a.length));
      }),
      (e.updateVisibility = function () {
        this.elementStates.forEach(function (t) {
          var s = t.element.getBoundingClientRect();
          ((t.isVisible = !!(s.width || s.height || s.top || s.left)),
            (t.uncache = 1));
        });
      }),
      (e.getElementState = function (t) {
        return this.elementStates[this.targets.indexOf(Xe(t))];
      }),
      (e.makeAbsolute = function () {
        return et(this.elementStates.slice(0), !0, !0).map(At);
      }),
      i
    );
  })(),
  Se = (function () {
    function i(n, t, s) {
      ((this.element = n), this.update(t, s));
    }
    var e = i.prototype;
    return (
      (e.isDifferent = function (t) {
        var s = this.bounds,
          a = t.bounds;
        return (
          s.top !== a.top ||
          s.left !== a.left ||
          s.width !== a.width ||
          s.height !== a.height ||
          !this.matrix.equals(t.matrix) ||
          this.opacity !== t.opacity ||
          (this.props &&
            t.props &&
            JSON.stringify(this.props) !== JSON.stringify(t.props))
        );
      }),
      (e.update = function (t, s) {
        var a = this,
          o = a.element,
          p = ne.getProperty(o),
          u = ne.core.getCache(o),
          l = o.getBoundingClientRect(),
          c =
            o.getBBox &&
            typeof o.getBBox == "function" &&
            o.nodeName.toLowerCase() !== "svg" &&
            o.getBBox(),
          d = s
            ? new Te(1, 0, 0, 1, l.left + Mt(), l.top + Dt())
            : be(o, !1, !1, !0);
        ((u.uncache = 1),
          (a.getProp = p),
          (a.element = o),
          (a.id = Ji(o)),
          (a.matrix = d),
          (a.cache = u),
          (a.bounds = l),
          (a.isVisible = !!(l.width || l.height || l.left || l.top)),
          (a.display = p("display")),
          (a.position = p("position")),
          (a.parent = o.parentNode),
          (a.x = p("x")),
          (a.y = p("y")),
          (a.scaleX = u.scaleX),
          (a.scaleY = u.scaleY),
          (a.rotation = p("rotation")),
          (a.skewX = p("skewX")),
          (a.opacity = p("opacity")),
          (a.width = c ? c.width : _e(p("width", "px"), 0.04)),
          (a.height = c ? c.height : _e(p("height", "px"), 0.04)),
          t && Zi(a, Et[t] || vn(t)),
          (a.ctm =
            o.getCTM && o.nodeName.toLowerCase() === "svg" && mn(o).inverse()),
          (a.simple =
            s || (Ie(d.a) === 1 && !Ie(d.b) && !Ie(d.c) && Ie(d.d) === 1)),
          (a.uncache = 0));
      }),
      i
    );
  })(),
  ea = (function () {
    function i(n, t) {
      ((this.vars = n),
        (this.batch = t),
        (this.states = []),
        (this.timeline = t.timeline));
    }
    var e = i.prototype;
    return (
      (e.getStateById = function (t) {
        for (var s = this.states.length; s--; )
          if (this.states[s].idLookup[t]) return this.states[s];
      }),
      (e.kill = function () {
        this.batch.remove(this);
      }),
      i
    );
  })(),
  ta = (function () {
    function i(n) {
      ((this.id = n),
        (this.actions = []),
        (this._kill = []),
        (this._final = []),
        (this._abs = []),
        (this._run = []),
        (this.data = {}),
        (this.state = new fe()),
        (this.timeline = ne.timeline()));
    }
    var e = i.prototype;
    return (
      (e.add = function (t) {
        var s = this.actions.filter(function (a) {
          return a.vars === t;
        });
        return s.length
          ? s[0]
          : ((s = new ea(typeof t == "function" ? { animate: t } : t, this)),
            this.actions.push(s),
            s);
      }),
      (e.remove = function (t) {
        var s = this.actions.indexOf(t);
        return (s >= 0 && this.actions.splice(s, 1), this);
      }),
      (e.getState = function (t) {
        var s = this,
          a = X,
          o = Oe;
        return (
          (X = this),
          this.state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (p) {
            (p.vars.getState &&
              ((p.states.length = 0), (Oe = p), (p.state = p.vars.getState(p))),
              t &&
                p.states.forEach(function (u) {
                  return s.state.add(u);
                }));
          }),
          (Oe = o),
          (X = a),
          this.killConflicts(),
          this
        );
      }),
      (e.animate = function () {
        var t = this,
          s = X,
          a = this.timeline,
          o = this.actions.length,
          p,
          u;
        for (
          X = this,
            a.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (l) {
              l.vars.animate && l.vars.animate(l);
              var c = l.vars.onEnter,
                d = l.vars.onLeave,
                _ = l.targets,
                r,
                I;
              _ &&
                _.length &&
                (c || d) &&
                ((r = new fe()),
                l.states.forEach(function (S) {
                  return r.add(S);
                }),
                (I = r.compare(Ve.getState(_))),
                I.enter.length && c && c(I.enter),
                I.leave.length && d && d(I.leave));
            }),
            _n(this._abs),
            this._run.forEach(function (l) {
              return l();
            }),
            u = a.duration(),
            p = this._final.slice(0),
            a.add(function () {
              u <= a.time() &&
                (p.forEach(function (l) {
                  return l();
                }),
                Gt(t, "onComplete"));
            }),
            X = s;
          o--;
        )
          this.actions[o].vars.once && this.actions[o].kill();
        return (Gt(this, "onStart"), a.restart(), this);
      }),
      (e.loadState = function (t) {
        t ||
          (t = function () {
            return 0;
          });
        var s = [];
        return (
          this.actions.forEach(function (a) {
            if (a.vars.loadState) {
              var o,
                p = function u(l) {
                  (l && (a.targets = l),
                    (o = s.indexOf(u)),
                    ~o && (s.splice(o, 1), s.length || t()));
                };
              (s.push(p), a.vars.loadState(p));
            }
          }),
          s.length || t(),
          this
        );
      }),
      (e.setState = function () {
        return (
          this.actions.forEach(function (t) {
            return (t.targets = t.vars.setState && t.vars.setState(t));
          }),
          this
        );
      }),
      (e.killConflicts = function (t) {
        return (
          this.state.interrupt(t),
          this._kill.forEach(function (s) {
            return s.interrupt(t);
          }),
          this
        );
      }),
      (e.run = function (t, s) {
        var a = this;
        return (
          this !== X &&
            (t || this.getState(s),
            this.loadState(function () {
              a._killed || (a.setState(), a.animate());
            })),
          this
        );
      }),
      (e.clear = function (t) {
        (this.state.clear(), t || (this.actions.length = 0));
      }),
      (e.getStateById = function (t) {
        for (var s = this.actions.length, a; s--; )
          if (((a = this.actions[s].getStateById(t)), a)) return a;
        return this.state.idLookup[t] && this.state;
      }),
      (e.kill = function () {
        ((this._killed = 1), this.clear(), delete _t[this.id]);
      }),
      i
    );
  })(),
  Ve = (function () {
    function i() {}
    return (
      (i.getState = function (n, t) {
        var s = pt(n, t);
        return (
          Oe && Oe.states.push(s),
          t && t.batch && i.batch(t.batch).state.add(s),
          s
        );
      }),
      (i.from = function (n, t) {
        return (
          (t = t || {}),
          "clearProps" in t || (t.clearProps = !0),
          gt(
            n,
            pt(t.targets || n.targets, {
              props: t.props || n.props,
              simple: t.simple,
              kill: !!t.kill,
            }),
            t,
            -1,
          )
        );
      }),
      (i.to = function (n, t) {
        return gt(
          n,
          pt(t.targets || n.targets, {
            props: t.props || n.props,
            simple: t.simple,
            kill: !!t.kill,
          }),
          t,
          1,
        );
      }),
      (i.fromTo = function (n, t, s) {
        return gt(n, t, s);
      }),
      (i.fit = function (n, t, s) {
        var a = s ? Le(s, hn) : {},
          o = s || a,
          p = o.absolute,
          u = o.scale,
          l = o.getVars,
          c = o.props,
          d = o.runBackwards,
          _ = o.onComplete,
          r = o.simple,
          I = s && s.fitChild && Xe(s.fitChild),
          S = yt(t, c, r, n),
          D = yt(n, 0, r, S),
          L = c ? st[c] : ot,
          y = ne.context();
        return (
          c && yn(a, S.props),
          Ye(D, L),
          d &&
            ("immediateRender" in a || (a.immediateRender = !0),
            (a.onComplete = function () {
              (tt(D), _ && _.apply(this, arguments));
            })),
          p && At(D, S),
          (a = Ee(D, S, u || I, !a.duration && c, I, a.duration || l ? a : 0)),
          typeof s == "object" && "zIndex" in s && (a.zIndex = s.zIndex),
          y &&
            !l &&
            y.add(function () {
              return function () {
                return tt(D);
              };
            }),
          l ? a : a.duration ? ne.to(D.element, a) : null
        );
      }),
      (i.makeAbsolute = function (n, t) {
        return (n instanceof fe ? n : new fe(n, t)).makeAbsolute();
      }),
      (i.batch = function (n) {
        return (n || (n = "default"), _t[n] || (_t[n] = new ta(n)));
      }),
      (i.killFlipsOf = function (n, t) {
        (n instanceof fe ? n.targets : Ae(n)).forEach(function (s) {
          return s && Vt(s._flip, t !== !1 ? 1 : 2);
        });
      }),
      (i.isFlipping = function (n) {
        var t = i.getByTarget(n);
        return !!t && t.isActive();
      }),
      (i.getByTarget = function (n) {
        return (Xe(n) || Qe)._flip;
      }),
      (i.getElementState = function (n, t) {
        return new Se(Xe(n), t);
      }),
      (i.convertCoordinates = function (n, t, s) {
        var a = be(t, !0, !0).multiply(be(n));
        return s ? a.apply(s) : a;
      }),
      (i.register = function (n) {
        if (((we = typeof document < "u" && document.body), we)) {
          ((ne = n),
            St(we),
            (Ae = ne.utils.toArray),
            (vt = ne.core.getStyleSaver));
          var t = ne.utils.snap(0.1);
          _e = function (a, o) {
            return t(parseFloat(a) + o);
          };
        }
      }),
      i
    );
  })();
Ve.version = "3.13.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Ve);
Me.registerPlugin(Ne, Ve);
const na = Be({
    name: "DetailsProductStar",
    props: {
      productUid: { type: String, required: !0 },
      sinGluten: { type: Boolean, required: !1, default: !1 },
      title: { type: String, required: !0 },
      imageHero: { type: Object, default: null },
      imagePin: { type: Object, default: null },
      carrousels: { type: Array, default: () => [], required: !1 },
      description: { type: String, default: "", required: !1 },
      themeColor: {
        type: String,
        default: "white",
        required: !1,
        validator: (i) => ["white", "gold", "gold-gradient"].includes(i),
      },
      themeColorPins: {
        type: String,
        default: "none",
        validator: (i) => ["gold", "white", "none"].includes(i),
      },
      titlePins: { type: String, default: null, required: !1 },
      pins: { type: Array, default: () => [] },
      consumoInmediato: { type: Boolean, default: !0, required: !1 },
    },
    emits: ["pin-click"],
    setup(i, { emit: e }) {
      const { asLinkCustomProductCatSinGluten: n } = Ze(),
        t = Ze(),
        {
          $gtmClickHipervinculo: s,
          $gtmDownloadApplication: a,
          $gtmSelectContent: o,
        } = nn(),
        p = an(),
        u = sn(),
        l = O(!1),
        c = O(u.path),
        d = "bg-gradient-neutral-100",
        { t: _ } = mt(),
        r =
          "text-black min-h-[264px] tablet:min-h-[284px] desktop:min-h-[358px]",
        I = O(null),
        S = O(null),
        D = O(null),
        L = O(null),
        y = O(null),
        f = O(null),
        w = O(null),
        E = V(() =>
          p.isMobile.value ? "320%" : p.isTablet.value ? "200%" : "170%",
        ),
        k = V(() => (p.isMobile.value || p.isTablet.value, "center 70%")),
        z = () => {
          D.value &&
            Me.to(D.value, {
              height: "0%",
              duration: 0.6,
              ease: "power2.inOut",
              onComplete: () => ee(),
            });
        },
        P = V(() => {
          switch (i.productUid) {
            case "cuarto-de-libra":
            case "mc-royaldeluxe":
              return "pb-8 tablet:pb-8 desktop:pb-[50px]";
            default:
              return "pb-12 tablet:pb-14 desktop:pb-[80px]";
          }
        });
      let $ = null;
      const b = () => {
        if (!y.value || !f.value || !w.value) {
          console.log("REF ERROR: ", {
            initialContainer: y.value,
            endContainer: f.value,
            imageRef: w.value,
          });
          return;
        }
        ($ && $.kill(),
          (!w.value.parentElement || w.value.parentElement !== y.value) &&
            y.value.appendChild(w.value));
        const T = Ve.getState(f.value);
        Me.set(w.value, { scale: 1.6 });
        const H = Me.timeline({
            scrollTrigger: {
              trigger: y.value,
              start: "top top",
              endTrigger: f.value,
              end: "top center",
              scrub: 1,
              onUpdate: (N) => {
                $ = N;
              },
            },
          }),
          oe = Ve.fit(w.value, T, { ease: "none", duration: 10, scale: !0 });
        (oe && "progress" in oe && H.add(oe),
          H.fromTo(
            ".titlePinsProp",
            { autoAlpha: 0 },
            { autoAlpha: 1 },
            "+=80%",
          ),
          H.to(
            ".pin-button",
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              stagger: {
                amount: 0.6,
                from: "center",
                grid: "auto",
                ease: "power2.inOut",
              },
            },
            "+=80%",
          ),
          un(l, () => {
            if (!$ || !w.value || !y.value || !f.value) return;
            const N = $.progress;
            ($.kill(),
              N > 0.5
                ? f.value.appendChild(w.value)
                : y.value.appendChild(w.value),
              Ue(() => {
                (Ne.refresh(), b());
              }));
          }));
      };
      cn(() => {
        (Ue(() => {
          (z(),
            b(),
            Ne.refresh(),
            setTimeout(() => {
              (b(), Ne.refresh());
            }, 2e3),
            window.addEventListener("resize", () => {
              (Ne.killAll(), b());
            }));
        }),
          pn(() => {
            ($?.kill(), window.removeEventListener("resize", () => {}));
          }));
      });
      const j = () => {
          L.value &&
            Me.fromTo(
              L.value,
              { y: -50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.inOut",
                delay: 0.1,
              },
            );
        },
        ee = () => {
          S.value &&
            Me.fromTo(
              S.value,
              { scaleY: 0 },
              {
                scaleY: 1,
                transformOrigin: "center bottom",
                duration: 0.7,
                delay: 0.2,
                ease: "power4.out",
                onComplete: () => j(),
              },
            );
        },
        te = V(() =>
          i.themeColor === "gold-gradient"
            ? "bg-gradient-mccafe-gold"
            : i.themeColor === "gold"
              ? "bg-surface-gold"
              : "bg-surface-white",
        ),
        G = V(() => (p.isMobile.value ? "1/4" : "1/3"));
      function M(T) {
        T?.onClick && typeof T.onClick == "function" && T.onClick(T);
      }
      const ge = V(() => i.titlePins),
        ke = V(() =>
          i.themeColorPins === "gold"
            ? "bg-gradient-mccafe-gold"
            : i.themeColorPins === "white"
              ? "bg-white"
              : "bg-transparent",
        ),
        ze = V(() => (p.isMobile.value ? "left" : "center")),
        Ce = V(() => (p.isMobile.value ? "xs" : "sm")),
        xe = O(null),
        le = O(null),
        Z = (T) => {
          ((le.value = T),
            o(
              `ingredientes_${ht(i.productUid.replace(/[-,%]/g, ""))}`,
              `pin_${T.id}_${ht(T.title.replace(/[-,%]/g, ""))}`,
              c.value,
            ),
            Ue(() => {
              (xe.value?.openModal(), (document.body.style.overflow = "auto"));
            }),
            e("pin-click", T));
        },
        Pe = () => {
          ((le.value = null), (document.body.style.overflow = "auto"));
        },
        ie = (T) => (T === void 0 ? null : `${Math.max(0, Math.min(100, T))}%`);
      return {
        asLinkCustomProductCatSinGluten: n,
        bp: p,
        t: _,
        headerRef: I,
        svgRef: S,
        whiteBackgroundRef: D,
        gradientColorTheme: d,
        textColorClass: r,
        sinGlutenLinkSize: Ce,
        themeColorClass: te,
        cardGrid: G,
        handleClickCta: M,
        titlePinsProp: ge,
        themeColorPropPins: ke,
        modalRef: xe,
        selectedPin: le,
        openPopup: Z,
        closePopup: Pe,
        getPinStyle: (T) => ({
          left: T.left !== void 0 ? ie(T.left) : null,
          right: T.right !== void 0 ? ie(T.right) : null,
          top: T.top !== void 0 ? ie(T.top) : null,
          transform: "translate(-50%, -50%)",
          position: "absolute",
        }),
        getModalStyle: (T) => {
          const H = window.innerWidth <= 768,
            oe = window.innerWidth > 768 && window.innerWidth < 1440;
          let N;
          return (
            H
              ? (N =
                  T.top !== void 0
                    ? `${T.top < 50 ? Math.min(100, T.top + 35) : Math.max(0, T.top - 35)}%`
                    : void 0)
              : oe
                ? (N =
                    T.top !== void 0
                      ? `${T.top < 50 ? Math.min(100, T.top + 35) : Math.max(0, T.top - 35)}%`
                      : void 0)
                : (N = T.top !== void 0 ? ie(T.top) : void 0),
            {
              left: H || oe ? "50%" : T.right !== void 0 ? "0" : void 0,
              right: H || oe ? void 0 : T.left !== void 0 ? "0" : void 0,
              top: N,
              transform:
                H || oe ? "translate(-50%, -45%)" : "translate(0, -45%)",
              position: "absolute",
            }
          );
        },
        titleAlign: ze,
        isOpenExpand: l,
        backgroundSize: E,
        backgroundPosition: k,
        handleExpandDropdown: (T) => {
          T && s(`leermas_${i.productUid}`, c.value);
        },
        handleSinGlutenClick: () => {
          s(`singluten_${i.productUid}`, "/productos/sin-gluten");
        },
        handleAppClick: () => {
          a("boton", "pedir_appmymcdonalds", "/mymcdonalds/pide-y-paga");
        },
        titleDivRef: L,
        initialContainer: y,
        endContainer: f,
        imageRef: w,
        titleClassMap: P,
        prismicLinkCustom: t,
      };
    },
  }),
  ia = {
    ref: "headerRef",
    class:
      "relative flex w-full flex-col items-start bg-gradient-neutral-100 pb-4 pt-[49px] tablet:pt-[65px] desktop:pt-[81px] overflow-x-clip",
  },
  aa = {
    ref: "whiteBackgroundRef",
    class: "bg-white w-full absolute bottom-0 left-0 z-50",
    style: { height: "100%", transition: "height 0.7s ease" },
  },
  sa = {
    class:
      "w-full items-start justify-center tablet:px-6 hidden tablet:block px-4 desktop:px-[120px] relative z-[60] overflow-hidden",
  },
  oa = {
    class:
      "text-headline-xl font-bold -z-10 tablet:text-[120px] desktop:text-[144px] tablet:leading-[124px] desktop:leading-[144px] tablet:tracking-[-2.5px] desktop:tracking-[-2.5px] text-center max-w-[328px] tablet:max-w-[512px] desktop:max-w-[957px]",
  },
  la = {
    ref: "initialContainer",
    class:
      "flex items-center justify-center w-[328px] h-[218px] tablet:w-[472px] tablet:h-[336px] desktop:w-[578px] desktop:h-[411px] z-40",
  },
  ra = ["src", "alt"],
  ua = {
    ref: "svgRef",
    class: "w-full absolute bottom-[35%] tablet:bottom-[30%] z-30",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 171",
    fill: "none",
    preserveAspectRatio: "none",
    style: { "transform-origin": "center bottom", transform: "scaleY(0)" },
  },
  ca = {
    class:
      "py-16 px-4 flex items-center justify-center z-[150] relative bg-white tablet:py-20 desktop:py-28",
  },
  pa = { class: "flex flex-col items-center gap-8 tablet:max-w-[580px]" },
  da = ["innerHTML"],
  fa = { class: "flex flex-col gap-2 text-center" },
  ga = { key: 0, class: "texy-body-s desktop:text-body-l" },
  ma = { key: 1, class: "texy-body-s desktop:text-body-l" },
  ha = { class: "flex flex-row gap-4" },
  ba = { class: "flex flex-col gap-2 tablet:flex-row" },
  va = { class: "flex flex-col gap-4 text-sm tablet:text-base" },
  _a = {
    class:
      "flex flex-col items-center justify-center w-full desktop:max-w-[1440px] mx-auto tablet:max-w-[768px] overflow-x-clip -space-y-4",
  },
  ya = {
    class:
      "flex flex-col items-center justify-center w-full px-4 tablet:px-6 desktop:px-[120px]",
  },
  xa = {
    class:
      "titlePinsProp text-center text-[46px] leading-[46px] tracking-[-1px] font-bold font-speedee tablet:text-[52px] desktop:text-[80px] desktop:leading-[78px] desktop:tracking-[-1.75px] pin-button",
  },
  wa = {
    class:
      "w-fit h-auto flex items-center justify-center relative overflow-x-clip pb-10",
  },
  ka = {
    ref: "endContainer",
    class:
      "flex items-center justify-center w-[328px] h-[218px] tablet:w-[472px] tablet:h-[336px] desktop:w-[578px] desktop:h-[411px] z-40",
  },
  Ca = {
    key: 0,
    class: "absolute inset-0 bg-black bg-opacity-50",
    style: { "backdrop-filter": "blur(6px)" },
  },
  Pa = { class: "relative z-10" },
  $a = {
    class:
      "flex w-full py-10 px-4 items-center gap-6 flex-col tablet:gap-10 tablet:py-10 tablet:px-6 desktop:py-20 desktop:px-[120px] desktop:gap-16",
  },
  Ta = { key: 0, class: "flex flex-col items-center gap-4" };
function Sa(i, e, n, t, s, a) {
  const o = Zn,
    p = tn,
    u = on,
    l = ln,
    c = rn,
    d = kt("i18n-t"),
    _ = it,
    r = Jn,
    I = Qn,
    S = nt,
    D = xt,
    L = $t;
  return (
    h(),
    C(
      W,
      null,
      [
        v(
          "section",
          ia,
          [
            v("div", aa, null, 512),
            v(
              "div",
              {
                ref: "titleDivRef",
                class: pe([
                  "relative z-40 w-full flex flex-col justify-start items-center h-full pb-32 gap-4",
                  i.textColorClass,
                ]),
                style: "opacity: 0; transform: translateY(-50px);",
              },
              [
                v("div", sa, [A(o)]),
                v(
                  "div",
                  {
                    class: pe([
                      "w-full flex flex-col items-center justify-start",
                      i.titleClassMap,
                    ]),
                  },
                  [v("h1", oa, K(i.title), 1)],
                  2,
                ),
                v(
                  "div",
                  la,
                  [
                    v(
                      "img",
                      {
                        ref: "imageRef",
                        src: i.imageHero?.url,
                        alt: i.imageHero?.alt || "",
                        class: "w-full h-auto object-cover object-center z-40",
                      },
                      null,
                      8,
                      ra,
                    ),
                  ],
                  512,
                ),
              ],
              2,
            ),
            (h(),
            C(
              "svg",
              ua,
              [
                ...(e[1] ||
                  (e[1] = [
                    v(
                      "path",
                      {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M0 0.363295L0 170.363H719.684C460.823 170.313 216.328 109.066 0 0.363295ZM720.316 170.363H1440V0.363281C1223.67 109.066 979.177 170.313 720.316 170.363Z",
                        fill: "white",
                      },
                      null,
                      -1,
                    ),
                  ])),
              ],
              512,
            )),
            e[2] ||
              (e[2] = v(
                "div",
                {
                  class:
                    "absolute bottom-0 w-full h-[36%] tablet:h-[31%] bg-white z-20",
                },
                null,
                -1,
              )),
          ],
          512,
        ),
        v("div", ca, [
          v("div", pa, [
            A(
              p,
              {
                "is-open": i.isOpenExpand,
                "onUpdate:isOpen": [
                  e[0] || (e[0] = (y) => (i.isOpenExpand = y)),
                  i.handleExpandDropdown,
                ],
                size: "xl",
                labels: {
                  more: i.$t("common.leermas"),
                  less: i.$t("common.leermenos"),
                },
              },
              {
                text: U(() => [
                  v(
                    "p",
                    {
                      class: "text-xl tablet:text-2xl",
                      innerHTML: i.description,
                    },
                    null,
                    8,
                    da,
                  ),
                ]),
                _: 1,
              },
              8,
              ["is-open", "labels", "onUpdate:isOpen"],
            ),
            A(
              u,
              {
                class: "w-fit",
                to: i.prismicLinkCustom.asLinkCustomPideYPaga(),
                size: "s",
                onClick: i.handleAppClick,
              },
              {
                default: U(() => [Ct(K(i.t("products-stars.pedir-app")), 1)]),
                _: 1,
              },
              8,
              ["to", "onClick"],
            ),
            v("div", fa, [
              i.consumoInmediato
                ? (h(),
                  C(
                    "p",
                    ga,
                    K(i.t("products-stars.sin-gluten.consumo-inmediato")),
                    1,
                  ))
                : R("", !0),
              i.sinGluten
                ? (h(),
                  C(
                    "p",
                    ma,
                    K(i.t("products-stars.sin-gluten.disponibility")),
                    1,
                  ))
                : R("", !0),
            ]),
            v("div", ha, [
              v("div", ba, [
                A(
                  c,
                  { size: "56" },
                  {
                    default: U(() => [
                      A(l, {
                        image: {
                          url: "/api/cms/images/Z63EJpbqstJ9-j51_gluten-free-badge.png?auto=format,compress",
                          alt: "Logo de pan sin gluten",
                        },
                      }),
                    ]),
                    _: 1,
                  },
                ),
                A(
                  c,
                  { size: "56" },
                  {
                    default: U(() => [
                      A(l, {
                        image: {
                          url: "/api/cms/images/Z63EJ5bqstJ9-j52_gluten-free-schar-badge.png?auto=format,compress",
                          alt: "Logo de marcha Schar",
                        },
                      }),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              v("div", va, [
                A(
                  d,
                  { keypath: "products-stars.sin-gluten.main", tag: "p" },
                  {
                    boldText: U(() => [
                      v(
                        "b",
                        null,
                        K(i.t("products-stars.sin-gluten.bold-text")),
                        1,
                      ),
                    ]),
                    _: 1,
                  },
                ),
                A(
                  _,
                  {
                    label: i.t("products-stars.sin-gluten.discover"),
                    to: i.asLinkCustomProductCatSinGluten(),
                    "show-icon-right": "",
                    size: i.sinGlutenLinkSize,
                    onClick: i.handleSinGlutenClick,
                  },
                  null,
                  8,
                  ["label", "to", "size", "onClick"],
                ),
              ]),
            ]),
          ]),
        ]),
        v(
          "section",
          {
            class: pe([
              "pin-section w-full pt-6 pb-12 tablet:pt-6 tablet:pb-12 desktop:pt-12 desktop:pb-20 desktop:gap-12 flex flex-col items-center justify-center tablet:items-end",
              i.themeColorPropPins,
            ]),
          },
          [
            v("div", _a, [
              v("div", ya, [v("h2", xa, K(i.titlePinsProp), 1)]),
              v("div", wa, [
                v("div", ka, null, 512),
                i.imagePin
                  ? (h(),
                    Q(
                      l,
                      {
                        key: 0,
                        image: {
                          url: "/api/cms/images/Z32hAZbqstJ99JjV_Servilleta_21.png?auto=format,compress",
                          alt: i.imagePin?.alt,
                        },
                        "wrapper-class":
                          "shrink-0 w-full -z-10 absolute bottom-[-26px] opacity-0 max-w-[600px] pin-button h-[100px] mobile:h-[130px] desktop:h-[165px]",
                      },
                      null,
                      8,
                      ["image"],
                    ))
                  : R("", !0),
                (h(!0),
                C(
                  W,
                  null,
                  re(
                    i.pins,
                    (y) => (
                      h(),
                      Q(
                        r,
                        {
                          key: y.id,
                          class: "absolute pin-button opacity-0 z-50",
                          style: ye(i.getPinStyle(y)),
                          "aria-label": `Abrir pin con id ${y.id}`,
                          onClick: (f) => i.openPopup(y),
                        },
                        null,
                        8,
                        ["style", "aria-label", "onClick"],
                      )
                    ),
                  ),
                  128,
                )),
                i.selectedPin
                  ? (h(),
                    Q(
                      I,
                      {
                        key: 1,
                        ref: "modalRef",
                        "is-fixed": "false",
                        title: i.selectedPin.title,
                        description: i.selectedPin.description,
                        "theme-color": "gold",
                        "has-overlay": !1,
                        style: ye(i.getModalStyle(i.selectedPin)),
                        class: "max-w-[350px] absolute",
                        "mobile-centered": !0,
                        onClose: i.closePopup,
                      },
                      null,
                      8,
                      ["title", "description", "style", "onClose"],
                    ))
                  : R("", !0),
              ]),
            ]),
          ],
          2,
        ),
        v(
          "section",
          { class: pe(["relative overflow-hidden", i.themeColorClass]) },
          [
            v(
              "div",
              {
                class: "absolute inset-0 bg-cover bg-center",
                style: ye({
                  backgroundImage: `url(${i.imageHero?.url})`,
                  backgroundPosition: i.backgroundPosition,
                  backgroundSize: i.backgroundSize,
                }),
              },
              null,
              4,
            ),
            i.imageHero?.url ? (h(), C("div", Ca)) : R("", !0),
            v("div", Pa, [
              v("div", $a, [
                v(
                  "div",
                  {
                    class: pe([
                      "w-screen flex flex-col items-center gap-6 desktop:gap-10 self-strech justify-center",
                      [i.imageHero ? "text-white" : ""],
                    ]),
                  },
                  [
                    (h(!0),
                    C(
                      W,
                      null,
                      re(
                        i.carrousels,
                        (y, f) => (
                          h(),
                          C(
                            W,
                            { key: f },
                            [
                              y.cards?.length
                                ? (h(),
                                  C(
                                    W,
                                    { key: 0 },
                                    [
                                      y.title
                                        ? (h(),
                                          C("div", Ta, [
                                            A(
                                              S,
                                              { title: y.title, size: "sm" },
                                              null,
                                              8,
                                              ["title"],
                                            ),
                                          ]))
                                        : R("", !0),
                                      y.carrouselType === "feature"
                                        ? (h(),
                                          Q(
                                            D,
                                            {
                                              key: 1,
                                              cards: y.cards,
                                              "is-product": !0,
                                              "is-ingredient-carrousel": !0,
                                            },
                                            null,
                                            8,
                                            ["cards"],
                                          ))
                                        : R("", !0),
                                      y.carrouselType === "richtext"
                                        ? (h(),
                                          Q(
                                            L,
                                            {
                                              key: 2,
                                              cards: y.cards,
                                              "no-allergens-text":
                                                y.noAllergensText,
                                              "contains-text": y.containsText,
                                              "may-contain-text":
                                                y.mayContainText,
                                              "text-color": "white",
                                            },
                                            null,
                                            8,
                                            [
                                              "cards",
                                              "no-allergens-text",
                                              "contains-text",
                                              "may-contain-text",
                                            ],
                                          ))
                                        : R("", !0),
                                      y.bottomLink
                                        ? (h(),
                                          Q(
                                            _,
                                            {
                                              key: 3,
                                              to: y.bottomLink.to,
                                              label: y.bottomLink.label,
                                              color: i.imageHero
                                                ? "white"
                                                : "black",
                                              size: "xs",
                                              "show-icon-right": !0,
                                              onClick: y.bottomLink.onClick,
                                            },
                                            null,
                                            8,
                                            ["to", "label", "color", "onClick"],
                                          ))
                                        : R("", !0),
                                    ],
                                    64,
                                  ))
                                : R("", !0),
                            ],
                            64,
                          )
                        ),
                      ),
                      128,
                    )),
                  ],
                  2,
                ),
              ]),
            ]),
          ],
          2,
        ),
      ],
      64,
    )
  );
}
const Da = qe(na, [["render", Sa]]),
  Ma = { key: 0 },
  Ia = { key: 0, class: "w-full" },
  La = {
    class:
      "flex flex-col py-10 px-4 items-center self-stretch gap-8 max-w-[768px] mx-auto justify-center",
  },
  Ea = { class: "flex flex-col gap-2 text-center" },
  Aa = { key: 0, class: "texy-body-s desktop:text-body-l" },
  Va = { class: "texy-body-s desktop:text-body-l" },
  Ba = { key: 0, class: "flex flex-row gap-4 tablet:max-w-[580px]" },
  za = { class: "flex flex-col gap-2 tablet:flex-row" },
  Ra = {
    class: "flex flex-col gap-4 text-sm tablet:text-base desktop:items-center",
  },
  Na = {
    key: 0,
    class:
      "flex flex-col justify-center items-center gap-4 tablet:gap-6 desktop:gap-10 py-10 px-4 tablet:px-6 desktop:py-20 desktop:px-[120px] bg-white w-full",
  },
  ja = {
    class:
      "flex flex-wrap justify-center items-center gap-4 tablet:gap-6 desktop:gap-10 w-full",
  },
  Fa = { class: "bg-surface-secondary" },
  Oa = {
    class:
      "px-4 tablet:px-0 tablet:max-w-[580px] desktop:max-w-[768px] mx-auto py-10",
  },
  Xa = { key: 1 },
  Ya = {
    key: 0,
    class:
      "flex flex-col justify-center items-center gap-4 tablet:gap-6 desktop:gap-10 py-10 px-4 tablet:px-6 desktop:py-20 desktop:px-[120px] bg-white w-full",
  },
  qa = {
    class:
      "flex flex-wrap justify-center items-center gap-4 tablet:gap-6 desktop:gap-10 w-full",
  },
  Ha = { class: "bg-surface-secondary" },
  Ga = {
    class:
      "px-4 tablet:px-0 tablet:max-w-[580px] desktop:max-w-[768px] mx-auto py-10",
  },
  Ls = Be({
    __name: "index",
    async setup(i) {
      let e, n;
      const {
          asLinkCustomProductCatSinGluten: t,
          asLinkCustomProductCatAlergenos: s,
          asLinkCustomPideYPaga: a,
        } = Ze(),
        o = Ze(),
        p = sn(),
        u = O(p.params.slug.toString()),
        l = O(p.params.uid),
        c = O(p.path),
        d = an(),
        { handleError: _ } = si(),
        { t: r } = mt(),
        {
          $gtmClickDesplegable: I,
          $gtmClickBoton: S,
          $gtmClickHipervinculo: D,
          $gtmDownloadApplication: L,
          $gtmSelectContent: y,
        } = nn(),
        f = `{
  product_page {
    ...product_pageFields
    allergens {
      allergen {
        uid
        name
        illustration
      }
    }
  ingredients {
    ingredient {
      uid
      name
      image
    }
  }
  non_excludable_allergens {
    allergen {
      uid
      name
      illustration
    }
  }
    sizes {
        size {
          ...on product_page {
            ...product_pageFields
          }
        }
      }

    slices {
      ${ii}
    }
  }
}`,
        { locale: w } = mt(),
        E = ei(w.value),
        { data: k, error: z } =
          (([e, n] = Yn(async () =>
            En(
              u.value,
              async () => {
                try {
                  return await $fetch(
                    "/api/cms/collection/product_page/" + u.value,
                    { params: { lang: E, graphQuery: f } },
                  );
                } catch (m) {
                  if (m.status === 404 && l.value)
                    return (An(`/productos/${l.value}`), { data: {} });
                  throw m;
                }
              },
              { watch: [u] },
            ),
          )),
          (e = await e),
          n(),
          e);
      _(z.value);
      const P = V(() => k.value?.data.sin_gluten),
        $ = V(
          () =>
            u.value === "bigmac" ||
            u.value === "cuarto-de-libra" ||
            u.value === "mc-royaldeluxe" ||
            u.value === "mcpollo" ||
            u.value === "hamburguesa-depollocbo",
        ),
        b = V(() => {
          switch (u.value) {
            case "bigmac":
              return r("products-stars.bigmac.title");
            case "cuarto-de-libra":
              return r("products-stars.cuarto-de-libra.title");
            case "mc-royaldeluxe":
              return r("products-stars.mc-royaldeluxe.title");
            case "mcpollo":
              return r("products-stars.mcpollo.title");
            case "hamburguesa-depollocbo":
              return "La favorita";
            default:
              return "";
          }
        }),
        j = V(() => {
          switch (u.value) {
            case "bigmac":
              return [
                {
                  id: "0",
                  left: 10,
                  top: 10,
                  title: r("products-stars.bigmac.pins.0.title"),
                  description: r("products-stars.bigmac.pins.0.description"),
                },
                {
                  id: "1",
                  right: 5,
                  top: 25,
                  title: r("products-stars.bigmac.pins.1.title"),
                  description: r("products-stars.bigmac.pins.1.description"),
                },
                {
                  id: "2",
                  right: 45,
                  top: 45,
                  title: r("products-stars.bigmac.pins.2.title"),
                  description: r("products-stars.bigmac.pins.2.description"),
                },
              ];
            case "cuarto-de-libra":
              return [
                {
                  id: "0",
                  right: 15,
                  top: 30,
                  title: r("products-stars.cuarto-de-libra.pins.0.title"),
                  description: r(
                    "products-stars.cuarto-de-libra.pins.0.description",
                  ),
                },
                {
                  id: "1",
                  left: 0,
                  top: 45,
                  title: r("products-stars.cuarto-de-libra.pins.1.title"),
                  description: r(
                    "products-stars.cuarto-de-libra.pins.1.description",
                  ),
                },
                {
                  id: "2",
                  right: 20,
                  top: 60,
                  title: r("products-stars.cuarto-de-libra.pins.2.title"),
                  description: r(
                    "products-stars.cuarto-de-libra.pins.2.description",
                  ),
                },
              ];
            case "mc-royaldeluxe":
              return [
                {
                  id: "0",
                  right: 20,
                  top: 25,
                  title: r("products-stars.mc-royaldeluxe.pins.0.title"),
                  description: r(
                    "products-stars.mc-royaldeluxe.pins.0.description",
                  ),
                },
                {
                  id: "1",
                  left: 15,
                  top: 48,
                  title: r("products-stars.mc-royaldeluxe.pins.1.title"),
                  description: r(
                    "products-stars.mc-royaldeluxe.pins.1.description",
                  ),
                },
                {
                  id: "2",
                  right: 10,
                  top: 65,
                  title: r("products-stars.mc-royaldeluxe.pins.2.title"),
                  description: r(
                    "products-stars.mc-royaldeluxe.pins.2.description",
                  ),
                },
              ];
            case "mcpollo":
              return [
                {
                  id: "0",
                  right: 25,
                  top: 20,
                  title: r("products-stars.mcpollo.pins.0.title"),
                  description: r("products-stars.mcpollo.pins.0.description"),
                },
                {
                  id: "1",
                  left: 20,
                  top: 45,
                  title: r("products-stars.mcpollo.pins.1.title"),
                  description: r("products-stars.mcpollo.pins.1.description"),
                },
              ];
            case "hamburguesa-depollocbo":
              return [
                {
                  id: "0",
                  left: 30,
                  top: 20,
                  title: r(
                    "products-stars.hamburguesa-depollocbo.pins.0.title",
                  ),
                  description: r(
                    "products-stars.hamburguesa-depollocbo.pins.0.description",
                  ),
                },
                {
                  id: "1",
                  left: 5,
                  top: 40,
                  title: r(
                    "products-stars.hamburguesa-depollocbo.pins.1.title",
                  ),
                  description: r(
                    "products-stars.hamburguesa-depollocbo.pins.1.description",
                  ),
                },
                {
                  id: "2",
                  right: 15,
                  top: 55,
                  title: r(
                    "products-stars.hamburguesa-depollocbo.pins.2.title",
                  ),
                  description: r(
                    "products-stars.hamburguesa-depollocbo.pins.2.description",
                  ),
                },
              ];
            default:
              return [];
          }
        }),
        ee = O(!1),
        te = () => {
          (I("infonutricional", c.value), (ee.value = !ee.value));
        },
        G = V(() => (d.isMobile.value ? "1/4" : "1/2")),
        M = O(!1),
        ge = V(() => k.value?.data?.title || "Default Title"),
        ke = V(() => k.value?.data.image),
        ze = V(() => k.value?.data.ingredients ?? []),
        Ce = V(() => k.value?.data.allergens ?? []),
        xe = V(() => k.value?.data.description),
        le = V(() => k.value?.data.non_excludable_allergens ?? []),
        Z = V(() => k.value?.data.consumo_inmediato ?? !0),
        Pe = (m) => {
          S(
            m === "per100g" || m === "perPortion" || m === "ir"
              ? `infonutricional_${m}`
              : m,
            c.value,
          );
        },
        ie = (m) => ({
          title: r("ingredients"),
          carrouselType: "feature",
          cards: m
            .filter((g) => !!g.ingredient.data)
            .map((g) => ({
              image: {
                url: g.ingredient.data.image?.url,
                alt: `Imagen de ingrediente ${g.ingredient.data.name}`,
              },
              title: g.ingredient.data.name,
              link: {
                onClick: () =>
                  y(
                    `carrouselingrediente_${u.value}`,
                    ht(g.ingredient.data.name),
                    c.value,
                  ),
              },
            })),
        }),
        q = (m, g = [], he) => {
          const Y = [...m, ...g];
          return {
            title: r("allergens"),
            carrouselType: "richtext",
            bottomLink: {
              label: r("allergens-details"),
              to: s(),
              onClick: () =>
                D(`detallealergenos_${u.value}`, "/productos/alergenos"),
            },
            cards: Y.length
              ? [
                  ...m
                    .filter((ce) => !!ce.allergen.data)
                    .map((ce) => ({
                      illustration: ce.allergen.data.illustration,
                      title: ce.allergen.data.name,
                      allergenType: "contains",
                    })),
                  ...g
                    .filter((ce) => !!ce.allergen.data)
                    .map((ce) => ({
                      illustration: ce.allergen.data.illustration,
                      title: ce.allergen.data.name,
                      allergenType: "mayContain",
                    })),
                ]
              : [{ illustration: "todos", title: "Sin alérgenos" }],
            ...he,
          };
        },
        F = (m, g) => {
          if (!m)
            return (
              console.warn("Nutritional data is undefined or null"),
              { per100g: {}, perPortion: {} }
            );
          const he = g === "ml" ? "ml" : "g";
          return {
            per100g: {
              title: `${r("nutritional-info.per100g.title")}${he}`,
              energyKj: {
                label: r("nutritional-info.per100g.energyKj.label"),
                value: m["100g_valor_energetico_kj"] ?? 0,
                unit: "kJ",
              },
              energyKcal: {
                label: r("nutritional-info.per100g.energyKcal.label"),
                value: m["100g_valor_energetico_kcal"] ?? 0,
                unit: "kcal",
              },
              fats: {
                label: r("nutritional-info.per100g.fats.label"),
                sublabel: r("nutritional-info.per100g.fats.subLabel"),
                value: m["100g_grasas"] ?? 0,
                unit: "g",
              },
              saturatedFats: {
                label: r("nutritional-info.per100g.saturatedFats.label"),
                value: m["100g_ac_grasos_saturados"] ?? 0,
                unit: "g",
              },
              carbs: {
                label: r("nutritional-info.per100g.carbs.label"),
                sublabel: r("nutritional-info.per100g.carbs.subLabel"),
                value: m["100g_hidratos_de_carbono"] ?? 0,
                unit: "g",
              },
              sugars: {
                label: r("nutritional-info.per100g.sugars.label"),
                value: m["100g_azucares"] ?? 0,
                unit: "g",
              },
              fiber: {
                label: r("nutritional-info.per100g.fiber.label"),
                value: m["100g_fibra"] ?? 0,
                unit: "g",
              },
              proteins: {
                label: r("nutritional-info.per100g.proteins.label"),
                value: m["100g_proteinas"] ?? 0,
                unit: "g",
              },
              salt: {
                label: r("nutritional-info.per100g.salt.label"),
                value: m["100g_sal"] ?? 0,
                unit: "g",
              },
            },
            perPortion: {
              title: r("nutritional-info.perPortion.title"),
              energyKj: {
                label: r("nutritional-info.perPortion.energyKj.label"),
                value: m.porcion_valor_energetico_kj,
                unit: "kJ",
              },
              energyKcal: {
                label: r("nutritional-info.perPortion.energyKcal.label"),
                value: m.porcion_valor_energetico_kcal,
                unit: "kcal",
              },
              fats: {
                label: r("nutritional-info.perPortion.fats.label"),
                sublabel: r("nutritional-info.perPortion.fats.subLabel"),
                value: m.porcion_grasas,
                unit: "g",
              },
              saturatedFats: {
                label: r("nutritional-info.perPortion.saturatedFats.label"),
                value: m.porcion_ac_grasos_saturados,
                unit: "g",
              },
              carbs: {
                label: r("nutritional-info.perPortion.carbs.label"),
                sublabel: r("nutritional-info.perPortion.carbs.subLabel"),
                value: m.porcion_hidratos_de_carbono,
                unit: "g",
              },
              sugars: {
                label: r("nutritional-info.perPortion.sugars.label"),
                value: m.porcion_azucares,
                unit: "g",
              },
              fiber: {
                label: r("nutritional-info.perPortion.fiber.label"),
                value: m.porcion_fibra,
                unit: "g",
              },
              proteins: {
                label: r("nutritional-info.perPortion.proteins.label"),
                value: m.porcion_proteinas,
                unit: "g",
              },
              salt: {
                label: r("nutritional-info.perPortion.salt.label"),
                value: m.porcion_sal,
                unit: "g",
              },
            },
            perIr: {
              title: r("nutritional-info.perIr.title"),
              energyKj: {
                label: r("nutritional-info.perIr.energyKj.label"),
                value: m.ir_valor_energetico_kj,
              },
              energyKcal: {
                label: r("nutritional-info.perIr.energyKcal.label"),
                value: m.ir_valor_energetico_kcal,
              },
              fats: {
                label: r("nutritional-info.perIr.fats.label"),
                sublabel: r("nutritional-info.perIr.fats.subLabel"),
                value: m.ir_grasas_g,
              },
              saturatedFats: {
                label: r("nutritional-info.perIr.saturatedFats.label"),
                value: m.ir_ac_grasos_saturados_g,
              },
              carbs: {
                label: r("nutritional-info.perIr.carbs.label"),
                sublabel: r("nutritional-info.perIr.carbs.subLabel"),
                value: m.ir_hidratos_de_carbono_g,
              },
              sugars: {
                label: r("nutritional-info.perIr.sugars.label"),
                value: m.ir_azucares_g,
              },
              fiber: {
                label: r("nutritional-info.perIr.fiber.label"),
                value: m.ir_fibra_g,
              },
              proteins: {
                label: r("nutritional-info.perIr.proteins.label"),
                value: m.ir_proteinas_g,
              },
              salt: {
                label: r("nutritional-info.perIr.salt.label"),
                value: m.ir_sal_g,
              },
            },
          };
        },
        ae = V(() => {
          const m = {
              uid: k.value?.uid,
              prismicDocLink: o.asLinkCustomProduct(
                k.value?.uid,
                k.value?.data?.main_product_category?.uid,
              ),
              title: k.value?.data?.listing_title || "Default Title",
              image: {
                url: k.value?.data?.listing_image?.url || "default-image.jpg",
                alt:
                  k.value?.data?.listing_image?.alt ||
                  `Hamburguesa ${k.value?.data?.listing_title || "Default Title"}`,
              },
              nutritionalValues: F(
                k.value?.data,
                k.value?.data?.nutritional_unit,
              ),
              nutritionalUnit: k.value?.data?.nutritional_unit,
            },
            g =
              k.value?.data?.sizes
                ?.filter((Y) => Y.size?.data)
                ?.map((Y) => ({
                  uid: Y.size.uid,
                  prismicDocLink: o.asLinkCustomProduct(
                    Y.size.uid,
                    Y.size.data?.main_product_category?.uid,
                  ),
                  title: Y.size.data?.listing_title,
                  image: {
                    url: Y.size.data?.listing_image?.url,
                    alt:
                      Y.size.data?.listing_image?.alt ||
                      `Hamburguesa ${Y.size.data?.listing_title}`,
                  },
                  nutritionalValues: F(
                    Y.size.data,
                    Y.size.data?.nutritional_unit,
                  ),
                  nutritionalUnit: Y.size.data?.nutritional_unit,
                }))
                ?.filter((Y) => Y.title && Y.image) || [],
            he = Object.values(m.nutritionalValues.per100g).some((Y) =>
              g.length
                ? Y.value !== 0 && Y.value !== void 0
                : typeof Y.value == "number",
            );
          return g.length && he ? [m, ...g] : g.length ? g : m ? [m] : [];
        }),
        se = V(() => [
          ie(ze.value),
          q(Ce.value, le.value, {
            noAllergensText: r("no-allergens"),
            containsText: r("contains"),
            mayContainText: r("may-contain"),
          }),
        ]);
      oi(k);
      const De = (m) => (m.endsWith("s") ? m.slice(0, -1) : m),
        T = V(() => r(`singular-categories.${l.value}`, De(l.value))),
        H = V(() =>
          l.value === "sandwiches-principales"
            ? [
                {
                  title: k.value?.data.listing_title,
                  image: k.value?.data.listing_image,
                  nutritionalValues: F(
                    k.value?.data,
                    k.value?.data?.nutritional_unit,
                  ),
                },
              ]
            : ae.value,
        ),
        oe = (m) => {
          m && D(`leermas_${u.value}`, c.value);
        },
        N = () => {
          L("pedir_appmymcdonalds", "testing");
        },
        J = () => {
          D(`singluten_${u.value}`, c.value);
        },
        He = (m) => {
          m === "per100g"
            ? S("infonutricional_100g", c.value)
            : m === "perPortion"
              ? S("infonutricional_racion", c.value)
              : m === "ir" && S("infonutricional_IR", c.value);
        },
        Re = (m, g) => {
          S(m, g);
        },
        ue = V(() => (d.isMobile.value ? "xs" : "sm")),
        me = V(() =>
          k.value?.data.product_categories
            .flatMap((m) => m.product_category?.slug)
            .includes("hamburguesas"),
        );
      if (
        (V(() => {
          const m = [
            { name: "Inicio", item: "/" },
            { name: "Productos", item: "/productos" },
          ];
          if (l.value) {
            const g = Ht[String(l.value)] || T.value;
            m.push({ name: g, item: `/productos/${l.value}` });
          }
          return (m.push({ name: ge.value || "", item: c.value }), m);
        }),
        !Object.keys(Ht).includes(l.value))
      )
        throw In({ statusCode: 404 });
      return (m, g) => {
        const he = Sn,
          Y = Dn,
          ce = tn,
          kn = on,
          zt = ln,
          Rt = rn,
          Cn = kt("i18n-t"),
          Nt = it,
          Pn = Ti,
          jt = nt,
          Ft = Hn,
          Ot = wt,
          Xt = Gn,
          Yt = ji,
          qt = Wn,
          $n = Da,
          Tn = Ln;
        return x(k)
          ? (h(),
            C("div", Ma, [
              x($)
                ? (h(),
                  C("div", Xa, [
                    A(
                      $n,
                      {
                        "sin-gluten": x(P),
                        "product-uid": x(u),
                        title: x(ge),
                        "image-hero": x(ke),
                        "image-pin": x(ke),
                        carrousels: x(se),
                        "title-pins": x(b),
                        description: x(ni)(x(xe)),
                        pins: x(j),
                        "consumo-inmediato": x(Z),
                      },
                      null,
                      8,
                      [
                        "sin-gluten",
                        "product-uid",
                        "title",
                        "image-hero",
                        "image-pin",
                        "carrousels",
                        "title-pins",
                        "description",
                        "pins",
                        "consumo-inmediato",
                      ],
                    ),
                    x(ae).length > 1
                      ? (h(),
                        C("div", Ya, [
                          A(
                            jt,
                            {
                              size: "sm",
                              title: `Descubre los tamaños de tu ${x(T)}`,
                            },
                            null,
                            8,
                            ["title"],
                          ),
                          v("div", qa, [
                            x(l) === "sandwiches-principales"
                              ? (h(!0),
                                C(
                                  W,
                                  { key: 0 },
                                  re(
                                    x(ae),
                                    (B) => (
                                      h(),
                                      Q(
                                        Ft,
                                        {
                                          key: B.image,
                                          grid: x(G),
                                          "is-product": !0,
                                          image: B.image,
                                          title: B.title,
                                          to: B.prismicDocLink,
                                        },
                                        null,
                                        8,
                                        ["grid", "image", "title", "to"],
                                      )
                                    ),
                                  ),
                                  128,
                                ))
                              : (h(!0),
                                C(
                                  W,
                                  { key: 1 },
                                  re(
                                    x(ae),
                                    (B) => (
                                      h(),
                                      Q(
                                        Ot,
                                        {
                                          key: B.image,
                                          image: B.image,
                                          title: B.title,
                                          direction: "vertical",
                                        },
                                        null,
                                        8,
                                        ["image", "title"],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                          ]),
                        ]))
                      : R("", !0),
                    v("div", Ha, [
                      v("div", Ga, [
                        A(
                          qt,
                          {
                            "is-panel-open": x(ee),
                            transparent: "",
                            onToggle: g[6] || (g[6] = (B) => te()),
                          },
                          {
                            default: U(({ isPanelOpen: B }) => [
                              A(
                                Xt,
                                {
                                  title: x(r)(
                                    "products-stars.nutritional-information",
                                  ),
                                  "is-panel-open": B,
                                },
                                null,
                                8,
                                ["title", "is-panel-open"],
                              ),
                            ]),
                            content: U(() => [
                              A(
                                Yt,
                                {
                                  products: x(H),
                                  "bottom-content":
                                    "* La Ingesta Diaria de Referencia (I.D.R.) es el porcentaje de la ingesta diaria de referencia de un adulto promedio.",
                                  "show-references-values": !1,
                                  "hide-progress-bar": !0,
                                  onTabChange: g[4] || (g[4] = (B) => Pe(B)),
                                  onTabTypeClick: g[5] || (g[5] = (B) => He(B)),
                                },
                                null,
                                8,
                                ["products"],
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["is-panel-open"],
                        ),
                      ]),
                    ]),
                  ]))
                : (h(),
                  C("div", Ia, [
                    A(
                      he,
                      {
                        title: x(ge),
                        "title-as": "h1",
                        "image-desktop": x(ke),
                      },
                      null,
                      8,
                      ["title", "image-desktop"],
                    ),
                    v("div", La, [
                      A(
                        ce,
                        {
                          "is-open": x(M),
                          "onUpdate:isOpen": [
                            g[0] ||
                              (g[0] = (B) => (qn(M) ? (M.value = B) : null)),
                            oe,
                          ],
                          size: "xl",
                          labels: {
                            more: m.$t("common.leermas"),
                            less: m.$t("common.leermenos"),
                          },
                        },
                        {
                          text: U(() => [
                            A(Y, { "rich-text": x(xe) }, null, 8, [
                              "rich-text",
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["is-open", "labels"],
                      ),
                      A(
                        kn,
                        { to: x(a)(), size: "s", onClick: N },
                        {
                          default: U(() => [
                            Ct(K(x(r)("products-stars.pedir-app")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"],
                      ),
                      v("div", Ea, [
                        x(Z)
                          ? (h(),
                            C(
                              "p",
                              Aa,
                              K(
                                x(r)(
                                  "products-stars.sin-gluten.consumo-inmediato",
                                ),
                              ),
                              1,
                            ))
                          : R("", !0),
                        v(
                          "p",
                          Va,
                          K(x(r)("products-stars.sin-gluten.disponibility")),
                          1,
                        ),
                      ]),
                      x(P) && x(me)
                        ? (h(),
                          C("div", Ba, [
                            v("div", za, [
                              A(
                                Rt,
                                { size: "56" },
                                {
                                  default: U(() => [
                                    A(zt, {
                                      image: {
                                        url: "https://images.prismic.io/mcdonalds/Z63EJpbqstJ9-j51_gluten-free-badge.png?auto=format,compress",
                                        alt: "",
                                      },
                                    }),
                                  ]),
                                  _: 1,
                                },
                              ),
                              A(
                                Rt,
                                { size: "56" },
                                {
                                  default: U(() => [
                                    A(zt, {
                                      image: {
                                        url: "/api/cms/images/Z63EJ5bqstJ9-j52_gluten-free-schar-badge.png?auto=format,compress",
                                        alt: "",
                                      },
                                    }),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            v("div", Ra, [
                              A(
                                Cn,
                                {
                                  keypath: "products-stars.sin-gluten.main",
                                  tag: "p",
                                },
                                {
                                  boldText: U(() => [
                                    v(
                                      "b",
                                      null,
                                      K(
                                        x(r)(
                                          "products-stars.sin-gluten.bold-text",
                                        ),
                                      ),
                                      1,
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                              A(
                                Nt,
                                {
                                  label: x(r)(
                                    "products-stars.sin-gluten.discover",
                                  ),
                                  "show-icon-right": "",
                                  size: x(ue),
                                  to: x(t)(),
                                  onClick: J,
                                },
                                null,
                                8,
                                ["label", "size", "to"],
                              ),
                            ]),
                          ]))
                        : R("", !0),
                      x(P) && !x(me)
                        ? (h(),
                          Q(
                            Nt,
                            {
                              key: 1,
                              label: x(r)("products-stars.sin-gluten.discover"),
                              "show-icon-right": "",
                              size: "xs",
                              to: x(t)(),
                              onClick: g[1] || (g[1] = (B) => J()),
                            },
                            null,
                            8,
                            ["label", "to"],
                          ))
                        : R("", !0),
                    ]),
                    A(
                      Pn,
                      { carrousels: x(se), "theme-color": "gold-gradient" },
                      null,
                      8,
                      ["carrousels"],
                    ),
                    x(ae).length > 1
                      ? (h(),
                        C("div", Na, [
                          A(
                            jt,
                            {
                              size: "sm",
                              title: `${x(r)("products-stars.discover-sizes")} ${x(T)}`,
                            },
                            null,
                            8,
                            ["title"],
                          ),
                          v("div", ja, [
                            x(l) === "sandwiches-principales"
                              ? (h(!0),
                                C(
                                  W,
                                  { key: 0 },
                                  re(
                                    x(ae),
                                    (B) => (
                                      h(),
                                      Q(
                                        Ft,
                                        {
                                          key: B.image,
                                          grid: x(G),
                                          "is-product": !0,
                                          image: B.image,
                                          title: B.title,
                                          "active-border": B.uid === x(u),
                                          to: B.prismicDocLink,
                                          onCardClick: (Ka) =>
                                            Re(B.title, B.prismicDocLink),
                                        },
                                        null,
                                        8,
                                        [
                                          "grid",
                                          "image",
                                          "title",
                                          "active-border",
                                          "to",
                                          "onCardClick",
                                        ],
                                      )
                                    ),
                                  ),
                                  128,
                                ))
                              : (h(!0),
                                C(
                                  W,
                                  { key: 1 },
                                  re(
                                    x(ae),
                                    (B) => (
                                      h(),
                                      Q(
                                        Ot,
                                        {
                                          key: B.image,
                                          image: B.image,
                                          title: B.title,
                                          direction: "vertical",
                                        },
                                        null,
                                        8,
                                        ["image", "title"],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                          ]),
                        ]))
                      : R("", !0),
                    v("div", Fa, [
                      v("div", Oa, [
                        A(
                          qt,
                          {
                            "is-panel-open": x(ee),
                            transparent: "",
                            onToggle: g[3] || (g[3] = (B) => te()),
                          },
                          {
                            default: U(({ isPanelOpen: B }) => [
                              A(
                                Xt,
                                {
                                  title: x(r)(
                                    "products-stars.nutritional-information",
                                  ),
                                  "is-panel-open": B,
                                },
                                null,
                                8,
                                ["title", "is-panel-open"],
                              ),
                            ]),
                            content: U(() => [
                              A(
                                Yt,
                                {
                                  products: x(H),
                                  "bottom-content":
                                    "* La Ingesta Diaria de Referencia (I.D.R.) es el porcentaje de la ingesta diaria de referencia de un adulto promedio.",
                                  "show-references-values": !1,
                                  "hide-progress-bar": !0,
                                  onTabChanged: g[2] || (g[2] = (B) => Pe(B)),
                                },
                                null,
                                8,
                                ["products"],
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["is-panel-open"],
                        ),
                      ]),
                    ]),
                  ])),
              A(
                Tn,
                {
                  wrapper: "div",
                  slices: x(k)?.data.slices ?? [],
                  components: x(ai),
                },
                null,
                8,
                ["slices", "components"],
              ),
            ]))
          : (h(), Q(ti, { key: 1 }));
      };
    },
  });
export { Ls as default };
