import {
  _ as Le,
  k as dt,
  m as Te,
  x as ft,
  y as Jt,
  l as Qe,
  u as es,
  d as ts,
  z as ss,
  j as ns,
} from "./w36zW0QG.js";
import { _ as rs } from "./9C9qpSPh.js";
import { _ as is } from "./BKZMI52-.js";
import { _ as as } from "./3AjKDk5D.js";
import { _ as os } from "./BPeIbztx.js";
import {
  l as oe,
  N as j,
  O as A,
  A as S,
  Z as T,
  _ as m,
  $ as E,
  m as z,
  Q as D,
  W as O,
  a1 as fe,
  X as Me,
  U as X,
  Y as ne,
  ag as ls,
  ah as cs,
  d as I,
  a as us,
  q as he,
  y as ht,
  D as pt,
  ai as ds,
  aj as fs,
  ak as hs,
  v as ps,
  u as p,
} from "./CG2MQ2lF.js";
import { u as gt } from "./CiCdwUBr.js";
import { _ as gs } from "./DYaz6hGO.js";
import { _ as ms } from "./DmvwyDla.js";
import { _ as vs } from "./tJXeJJ_G.js";
import { _ as ys } from "./BGfOVFyB.js";
import { _ as _s } from "./CLk6oGrE.js";
import { _ as Cs } from "./C6fOeNu_.js";
import { _ as As } from "./CiZxUmDW.js";
import { b as ws } from "./Ca9Ptn7z.js";
import { R as pe } from "./Dc0OakB1.js";
import { u as bs } from "./D87woA3U.js";
import { u as mt } from "./6ea1p-kM.js";
import { _ as re, a as vt } from "./DyeUX7V5.js";
import { u as xs } from "./D8jQnJCR.js";
const Ss = 6371;
function ue(t) {
  return t * (Math.PI / 180);
}
function Ee(t, e, s, n) {
  const r = ue(s - t),
    i = ue(n - e),
    a =
      Math.sin(r / 2) * Math.sin(r / 2) +
      Math.cos(ue(t)) * Math.cos(ue(s)) * Math.sin(i / 2) * Math.sin(i / 2),
    l = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Ss * l;
}
function Ke(t, e, s) {
  if (!t) {
    const i = `https://www.google.com/maps/search/?api=1&query=${e},${s}`;
    return { distance: "Ubicación no disponible", directionsUrl: i, to: i };
  }
  const n = Ee(t.latitude, t.longitude, e, s),
    r = `https://www.google.com/maps?saddr=${t.latitude},${t.longitude}&daddr=${e},${s}`;
  return { distance: `${n.toFixed(1)} km`, directionsUrl: r, to: r };
}
const ks = oe({
    __name: "index",
    props: {
      filterGroups: {},
      isBirthday: { type: Boolean },
      isBirthdayHome: { type: Boolean },
    },
    emits: ["apply-filters", "change-view"],
    setup(t, { emit: e }) {
      const s = e,
        n = {
          "24h": "24H",
          bigfamily: "FN",
          birthday: "CP",
          birthday_home: "CC",
          breakfast: "DY",
          delivery: "ME",
          electric_car: "CE",
          gym: "PL",
          invalid: "DC",
          mccafe: "MC",
          mcauto: "MA",
          mop_service: "MO",
          parking: "PK",
          takeaway: "LL",
          ticket: "TR",
          service_parking: "EP",
          table: "SM",
          terrace: "TR",
        };
      function r(a) {
        s("change-view", a);
      }
      function i(a) {
        s("apply-filters", a);
      }
      return (a, l) => (
        A(),
        j(
          os,
          {
            "filter-groups": t.filterGroups,
            "filter-code-map": n,
            views: { left: "map", right: "list" },
            type: "restaurant",
            "is-birthday": t.isBirthday,
            "is-birthday-home": t.isBirthdayHome,
            onApplyFilters: i,
            onChangeView: r,
          },
          null,
          8,
          ["filter-groups", "is-birthday", "is-birthday-home"],
        )
      );
    },
  }),
  Ms = oe({
    name: "RestaurantPin",
    components: {},
    inheritAttrs: !1,
    props: {
      size: { type: String, default: "small" },
      color: { type: String, default: "green" },
      value: { type: String, default: "" },
      active: { type: Boolean, default: !1 },
    },
    setup(t) {
      return {
        svgColor: z(() => (t.color === "green" ? "#264F36" : "#DB0007")),
      };
    },
  }),
  Es = { class: "relative" },
  Ds = ["width", "height"],
  Bs = ["fill"],
  Fs = {
    x: "20",
    y: "30",
    "text-anchor": "middle",
    "dominant-baseline": "top",
    fill: "#FFBC0D",
    "font-size": "24",
    "font-weight": "bold",
  },
  $s = ["width", "height"],
  Is = ["fill"],
  Rs = {
    x: "8",
    y: "12",
    "text-anchor": "middle",
    "dominant-baseline": "top",
    fill: "#FFBC0D",
    "font-size": "12",
    "font-weight": "bold",
  };
function Ls(t, e, s, n, r, i) {
  return (
    A(),
    S("div", Es, [
      t.size === "large"
        ? (A(),
          S(
            "svg",
            {
              key: 0,
              xmlns: "http://www.w3.org/2000/svg",
              width: t.active ? 56 : 32,
              height: t.active ? 80 : 46,
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 40 58",
              fill: "none",
            },
            [
              e[0] ||
                (e[0] = m(
                  "path",
                  {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M20 58C31.0457 58 40 56.2091 40 54C40 51.7909 31.0457 50 20 50C8.9543 50 0 51.7909 0 54C0 56.2091 8.9543 58 20 58Z",
                    fill: "#F1F1F1",
                  },
                  null,
                  -1,
                )),
              m(
                "path",
                {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M20 54C21.4298 54 40 39 40 19.9412C40 8.92797 31.0457 0 20 0C8.9543 0 0 8.92797 0 19.9412C0 39 18.5702 54 20 54Z",
                  fill: t.svgColor,
                },
                null,
                8,
                Bs,
              ),
              m("text", Fs, E(t.value), 1),
            ],
            8,
            Ds,
          ))
        : t.size === "small"
          ? (A(),
            S(
              "svg",
              {
                key: 1,
                xmlns: "http://www.w3.org/2000/svg",
                width: t.active ? 24 : 16,
                height: t.active ? 32 : 23,
                viewBox: "0 0 16 23",
                fill: "none",
              },
              [
                e[1] ||
                  (e[1] = m(
                    "path",
                    {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M8 23C12.4183 23 16 22.1046 16 21C16 19.8954 12.4183 19 8 19C3.58172 19 0 19.8954 0 21C0 22.1046 3.58172 23 8 23Z",
                      fill: "#F1F1F1",
                    },
                    null,
                    -1,
                  )),
                m(
                  "path",
                  {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M8 21.1527C8.5719 21.1527 16 14.8823 16 7.81129C16 3.49723 12.4183 0 8 0C3.58172 0 0 3.49723 0 7.81129C0 14.2354 7.4281 21.1527 8 21.1527Z",
                    fill: t.svgColor,
                  },
                  null,
                  8,
                  Is,
                ),
                m("text", Rs, E(t.value), 1),
              ],
              8,
              $s,
            ))
          : T("", !0),
    ])
  );
}
const yt = Le(Ms, [["render", Ls]]),
  Ts = oe({
    name: "CardHotSpot",
    components: { MCDButton: Te },
    inheritAttrs: !1,
    props: {
      valuePin: { type: String, default: () => null },
      name: { type: String, default: () => null },
      phone: { type: String, default: () => null },
      address: { type: String, default: () => null },
      cta: { type: Object, default: null },
      closeDistance: { type: String, default: () => null },
      sizeCarrousel: { type: Boolean, default: () => !1 },
      howToArrive: { type: Object, default: () => null },
      isFranquicia: { type: Boolean, default: !1, required: !1 },
    },
    emits: ["card-click", "info-click", "how-to-arrive-click"],
    setup() {
      const t = gt();
      return {
        sizeRestaurantPin: z(() => (t.isDesktop.value ? "large" : "small")),
      };
    },
  }),
  Ps = { class: "flex flex-col items-start self-stretch w-full gap-2" },
  Os = { class: "flex items-center self-stretch gap-2" },
  Ns = { class: "flex flex-1 gap-2" },
  zs = { class: "font-bold text-title-xs desktop:text-title-m" },
  js = { class: "flex flex-col items-start w-full gap-2 self-strech" },
  Hs = {
    class: "font-bold text-body-s text-text-secondary desktop:text-body-m",
  },
  qs = { class: "flex justify-between w-full" },
  Us = { class: "text-body-s text-text-secondary desktop:text-body-m" },
  Vs = {
    "aria-label": "número de teléfono",
    class: "text-body-s text-text-secondary desktop:text-body-m",
  },
  Qs = { key: 0, class: "text-body-s text-text-secondary desktop:text-body-m" };
function Ks(t, e, s, n, r, i) {
  const a = yt,
    l = dt,
    c = ft,
    u = Te;
  return (
    A(),
    S(
      "div",
      {
        class: Me([
          t.sizeCarrousel
            ? "w-[232px]  tablet:w-[348px] desktop:w-[373px]"
            : "w-[328px] tablet:w-[348px] desktop:w-[373px]",
          "flex flex-col items-start h-auto h-full gap-3 px-4 pt-2 pb-4 bg-white rounded-4 shadow-secondary",
        ]),
      },
      [
        m("div", Ps, [
          m("div", Os, [
            m("div", Ns, [
              D(a, { size: t.sizeRestaurantPin, value: t.valuePin }, null, 8, [
                "size",
                "value",
              ]),
              m("p", zs, E(t.name), 1),
            ]),
            m(
              "div",
              {
                role: "button",
                "aria-label": "Más información",
                class: "cursor-pointer",
                onClick: e[0] || (e[0] = (o) => t.$emit("info-click")),
              },
              [D(l, { name: "infoCircle", size: "l" })],
            ),
          ]),
          m("div", js, [
            m("p", Hs, E(t.address), 1),
            m("div", qs, [
              t.howToArrive
                ? (A(),
                  j(
                    c,
                    {
                      key: 0,
                      to: t.howToArrive.to,
                      target: "_blank",
                      class: "text-body-s text-text-link desktop:text-body-m",
                      onClick:
                        e[1] || (e[1] = (o) => t.$emit("how-to-arrive-click")),
                    },
                    {
                      default: O(() => [
                        fe(E(t.howToArrive.label || "Como llegar"), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to"],
                  ))
                : T("", !0),
              m("p", Us, E(t.closeDistance), 1),
            ]),
            m("p", Vs, E(t.phone), 1),
            t.isFranquicia
              ? (A(), S("p", Qs, " Operado en régimen de Franquicia "))
              : T("", !0),
          ]),
        ]),
        t.cta
          ? (A(),
            j(
              u,
              {
                key: 0,
                to: t.cta.to,
                label: t.cta.label,
                size: "s",
                class: "w-full",
                onClick: e[2] || (e[2] = (o) => t.$emit("card-click")),
              },
              null,
              8,
              ["to", "label"],
            ))
          : T("", !0),
      ],
      2,
    )
  );
}
const Pe = Le(Ts, [["render", Ks]]),
  Ws = oe({
    name: "CarrouselCardHotSpot",
    components: { MCDCardHotSpot: Pe },
    inheritAttrs: !1,
    props: {
      cards: { type: Array, default: () => [], required: !0 },
      selectedIndex: { type: Number, default: 0 },
    },
    emits: ["info-click", "card-click", "how-to-arrive-click"],
    setup(t, { emit: e }) {
      const s = gt(),
        n = I(t.cards),
        r = z(() => n.value.length <= 3),
        i = z(() => (s.isDesktop.value ? "l" : "m")),
        a = I(!1),
        l = I(!0),
        c = I(!1),
        u = I(0),
        o = I(null),
        f = I(null),
        h = I(null),
        w = us(),
        b = w ? w.uid : Math.floor(Math.random() * 1e3),
        M = z(() => `Carrusel número ${b} con ${n.value.length} hotspot cards`),
        F = () => {
          setTimeout(() => {
            if (h.value) {
              const y = h.value;
              c.value = y.isBeginning && y.isEnd;
            }
          }, 50);
        },
        P = async (y) => {
          if (o.value) {
            const L = y.realIndex + 1,
              $ = y.slides.length,
              Q = `Diapositiva ${L} de ${$}`;
            o.value.textContent = Q;
          }
        };
      (he(
        () => t.selectedIndex,
        (y) => {
          h.value && typeof y == "number" && h.value.slideTo(y);
        },
      ),
        he(
          () => t.cards,
          (y) => {
            ((n.value = y),
              h.value &&
                (h.value.slideTo(0),
                (a.value = !1),
                (l.value = h.value.slides.length > 1)));
          },
          { deep: !0 },
        ));
      const R = (y) => {
          ((a.value = !y.isBeginning),
            (l.value = !y.isEnd),
            (u.value = y.realIndex),
            F(),
            P(y));
        },
        V = (y) => {
          ((h.value = y),
            (a.value = !y.isBeginning),
            (l.value = !y.isEnd),
            (u.value = y.realIndex),
            F());
        },
        k = () => {
          h.value && h.value.slideNext();
        },
        ae = () => {
          h.value && h.value.slidePrev();
        },
        J = async (y) => {
          if (!h.value || !f.value?.contains(document.activeElement)) return;
          let L = !1;
          switch (y.key) {
            case "ArrowLeft":
            case "ArrowUp":
              (y.preventDefault(), h.value.slidePrev() && (L = !0));
              break;
            case "ArrowRight":
            case "ArrowDown":
              (y.preventDefault(), h.value.slideNext() && (L = !0));
              break;
            case "Home":
              (y.preventDefault(), h.value.slideTo(0), (L = !0));
              break;
            case "End":
              (y.preventDefault(),
                h.value.slideTo(t.cards.length - 1),
                (L = !0));
              break;
          }
          L && (await ps(), P(h.value));
        },
        B = (y) => {
          e("info-click", y);
        },
        q = (y) => {
          e("card-click", y);
        },
        N = (y) => {
          e("how-to-arrive-click", y);
        };
      he(c, (y) => {
        const L = h.value;
        L &&
          (y
            ? ((a.value = !1), (l.value = !1))
            : ((a.value = L.realIndex > 0),
              (l.value = L.realIndex < L.slides.length - 1)));
      });
      function te(y, L) {
        let $ = null;
        return (...Q) => {
          ($ && clearTimeout($), ($ = setTimeout(() => y(...Q), L)));
        };
      }
      const W = te(F, 150);
      return (
        ht(() => {
          window.addEventListener("resize", W);
        }),
        pt(() => {
          window.removeEventListener("resize", W);
        }),
        {
          cardsValue: n,
          isDot: r,
          canNavigatePrev: a,
          canNavigateNext: l,
          iconSize: i,
          onSwiperSlideChange: R,
          onSwiperInit: V,
          handleInfoClick: B,
          handleCardClick: q,
          handleHowToArriveClick: N,
          modules: [ds, fs, hs],
          swiperRef: h,
          accessibilityAnnouncer: o,
          handleKeyDown: J,
          swiperContainer: f,
          activeIndex: u,
          visibleSlides: c,
          slideNext: k,
          slidePrev: ae,
          generatedAriaLabel: M,
        }
      );
    },
  }),
  Gs = {
    ref: "accessibilityAnnouncer",
    class: "sr-only",
    "aria-live": "assertive",
    "aria-atomic": "true",
    role: "status",
  },
  Ys = {
    key: 0,
    class: "swiper-controls flex justify-center items-center gap-3",
  },
  Xs = ["disabled", "aria-label"],
  Zs = ["disabled", "aria-label"];
function Js(t, e, s, n, r, i) {
  const a = Pe,
    l = ls,
    c = dt,
    u = cs;
  return (
    A(),
    S(
      "section",
      {
        ref: "swiperContainer",
        class:
          "w-fit swiperCarrouselCardHotSpot flex items-start justify-start",
        onKeydown:
          e[2] || (e[2] = (...o) => t.handleKeyDown && t.handleKeyDown(...o)),
      },
      [
        m("div", Gs, null, 512),
        D(
          u,
          {
            modules: t.modules,
            breakpoints: {
              240: {
                slidesPerView: "auto",
                spaceBetween: 8,
                direction: "horizontal",
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 16,
                direction: "horizontal",
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 16,
                direction: "vertical",
                height: 536,
              },
            },
            "watch-slides-progress": !0,
            "aria-label": t.generatedAriaLabel,
            keyboard: { enabled: !0, onlyInViewport: !0 },
            a11y: {
              enabled: !0,
              prevSlideMessage: "Diapositiva anterior",
              nextSlideMessage: "Diapositiva siguiente",
              firstSlideMessage: "Primera diapositiva",
              lastSlideMessage: "Última diapositiva",
              paginationBulletMessage: "Ir a la diapositiva {{index}}",
            },
            "initial-slide": t.selectedIndex,
            onInit: t.onSwiperInit,
            onSlideChange: t.onSwiperSlideChange,
          },
          {
            default: O(() => [
              (A(!0),
              S(
                X,
                null,
                ne(
                  t.cardsValue,
                  (o, f) => (
                    A(),
                    j(
                      l,
                      {
                        key: o.name,
                        role: "group",
                        "aria-roledescription": "slide",
                        "aria-label": `Diapositiva ${f + 1} de ${t.cardsValue.length}`,
                        "aria-current": f === t.activeIndex ? "true" : "false",
                      },
                      {
                        default: O(() => [
                          D(
                            a,
                            {
                              "size-carrousel": !0,
                              "value-pin": o.valuePin,
                              name: o.name,
                              address: o.address,
                              phone: o.phone,
                              "close-distance": o.closeDistance,
                              "how-to-arrive": {
                                label: o.howToArrive.label,
                                to: o.howToArrive.to,
                              },
                              cta: o.cta,
                              tabindex: f === t.activeIndex ? "0" : "-1",
                              onInfoClick: (h) => t.handleInfoClick(o),
                              onCardClick: (h) => t.handleCardClick(o),
                              onHowToArriveClick: (h) =>
                                t.handleHowToArriveClick(o),
                            },
                            null,
                            8,
                            [
                              "value-pin",
                              "name",
                              "address",
                              "phone",
                              "close-distance",
                              "how-to-arrive",
                              "cta",
                              "tabindex",
                              "onInfoClick",
                              "onCardClick",
                              "onHowToArriveClick",
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
              t.isDot
                ? T("", !0)
                : (A(),
                  S("div", Ys, [
                    t.visibleSlides
                      ? T("", !0)
                      : (A(),
                        S(
                          "button",
                          {
                            key: 0,
                            class: Me([
                              "swiper-button-prev",
                              { "swiper-button-disabled": !t.canNavigatePrev },
                            ]),
                            disabled: !t.canNavigatePrev,
                            "aria-label": t.canNavigatePrev
                              ? "Ir a la diapositiva anterior"
                              : "No hay diapositiva anterior",
                            onClick:
                              e[0] ||
                              (e[0] = (...o) =>
                                t.slidePrev && t.slidePrev(...o)),
                          },
                          [
                            D(
                              c,
                              {
                                name: "customArrow",
                                color: t.canNavigatePrev ? "black" : "#ADADAD",
                                class: "rotate-180",
                                size: t.iconSize,
                              },
                              null,
                              8,
                              ["color", "size"],
                            ),
                          ],
                          10,
                          Xs,
                        )),
                    t.visibleSlides
                      ? T("", !0)
                      : (A(),
                        S(
                          "button",
                          {
                            key: 1,
                            class: Me([
                              "swiper-button-next",
                              { "swiper-button-disabled": !t.canNavigateNext },
                            ]),
                            disabled: !t.canNavigateNext,
                            "aria-label": t.canNavigateNext
                              ? "Ir a la siguiente diapositiva"
                              : "No hay siguiente diapositiva",
                            onClick:
                              e[1] ||
                              (e[1] = (...o) =>
                                t.slideNext && t.slideNext(...o)),
                          },
                          [
                            D(
                              c,
                              {
                                size: t.iconSize,
                                name: "customArrow",
                                color: t.canNavigateNext ? "black" : "#ADADAD",
                              },
                              null,
                              8,
                              ["size", "color"],
                            ),
                          ],
                          10,
                          Zs,
                        )),
                  ])),
            ]),
            _: 1,
          },
          8,
          ["modules", "aria-label", "initial-slide", "onInit", "onSlideChange"],
        ),
      ],
      544,
    )
  );
}
const en = Le(Ws, [["render", Js]]);
function Y(t) {
  return Array.isArray ? Array.isArray(t) : At(t) === "[object Array]";
}
function tn(t) {
  if (typeof t == "string") return t;
  let e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function sn(t) {
  return t == null ? "" : tn(t);
}
function K(t) {
  return typeof t == "string";
}
function _t(t) {
  return typeof t == "number";
}
function nn(t) {
  return t === !0 || t === !1 || (rn(t) && At(t) == "[object Boolean]");
}
function Ct(t) {
  return typeof t == "object";
}
function rn(t) {
  return Ct(t) && t !== null;
}
function H(t) {
  return t != null;
}
function xe(t) {
  return !t.trim().length;
}
function At(t) {
  return t == null
    ? t === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(t);
}
const an = "Incorrect 'index' type",
  on = (t) => `Invalid value for key ${t}`,
  ln = (t) => `Pattern length exceeds max of ${t}.`,
  cn = (t) => `Missing ${t} property in key`,
  un = (t) => `Property 'weight' in key '${t}' must be a positive integer`,
  We = Object.prototype.hasOwnProperty;
class dn {
  constructor(e) {
    ((this._keys = []), (this._keyMap = {}));
    let s = 0;
    (e.forEach((n) => {
      let r = wt(n);
      (this._keys.push(r), (this._keyMap[r.id] = r), (s += r.weight));
    }),
      this._keys.forEach((n) => {
        n.weight /= s;
      }));
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function wt(t) {
  let e = null,
    s = null,
    n = null,
    r = 1,
    i = null;
  if (K(t) || Y(t)) ((n = t), (e = Ge(t)), (s = De(t)));
  else {
    if (!We.call(t, "name")) throw new Error(cn("name"));
    const a = t.name;
    if (((n = a), We.call(t, "weight") && ((r = t.weight), r <= 0)))
      throw new Error(un(a));
    ((e = Ge(a)), (s = De(a)), (i = t.getFn));
  }
  return { path: e, id: s, weight: r, src: n, getFn: i };
}
function Ge(t) {
  return Y(t) ? t : t.split(".");
}
function De(t) {
  return Y(t) ? t.join(".") : t;
}
function fn(t, e) {
  let s = [],
    n = !1;
  const r = (i, a, l) => {
    if (H(i))
      if (!a[l]) s.push(i);
      else {
        let c = a[l];
        const u = i[c];
        if (!H(u)) return;
        if (l === a.length - 1 && (K(u) || _t(u) || nn(u))) s.push(sn(u));
        else if (Y(u)) {
          n = !0;
          for (let o = 0, f = u.length; o < f; o += 1) r(u[o], a, l + 1);
        } else a.length && r(u, a, l + 1);
      }
  };
  return (r(t, K(e) ? e.split(".") : e, 0), n ? s : s[0]);
}
const hn = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  pn = {
    isCaseSensitive: !1,
    ignoreDiacritics: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (t, e) =>
      t.score === e.score
        ? t.idx < e.idx
          ? -1
          : 1
        : t.score < e.score
          ? -1
          : 1,
  },
  gn = { location: 0, threshold: 0.6, distance: 100 },
  mn = {
    useExtendedSearch: !1,
    getFn: fn,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1,
  };
var v = { ...pn, ...hn, ...gn, ...mn };
const vn = /[^ ]+/g;
function yn(t = 1, e = 3) {
  const s = new Map(),
    n = Math.pow(10, e);
  return {
    get(r) {
      const i = r.match(vn).length;
      if (s.has(i)) return s.get(i);
      const a = 1 / Math.pow(i, 0.5 * t),
        l = parseFloat(Math.round(a * n) / n);
      return (s.set(i, l), l);
    },
    clear() {
      s.clear();
    },
  };
}
class Oe {
  constructor({
    getFn: e = v.getFn,
    fieldNormWeight: s = v.fieldNormWeight,
  } = {}) {
    ((this.norm = yn(s, 3)),
      (this.getFn = e),
      (this.isCreated = !1),
      this.setIndexRecords());
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    ((this.keys = e),
      (this._keysMap = {}),
      e.forEach((s, n) => {
        this._keysMap[s.id] = n;
      }));
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      K(this.docs[0])
        ? this.docs.forEach((e, s) => {
            this._addString(e, s);
          })
        : this.docs.forEach((e, s) => {
            this._addObject(e, s);
          }),
      this.norm.clear());
  }
  add(e) {
    const s = this.size();
    K(e) ? this._addString(e, s) : this._addObject(e, s);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let s = e, n = this.size(); s < n; s += 1) this.records[s].i -= 1;
  }
  getValueForItemAtKeyId(e, s) {
    return e[this._keysMap[s]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, s) {
    if (!H(e) || xe(e)) return;
    let n = { v: e, i: s, n: this.norm.get(e) };
    this.records.push(n);
  }
  _addObject(e, s) {
    let n = { i: s, $: {} };
    (this.keys.forEach((r, i) => {
      let a = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
      if (H(a)) {
        if (Y(a)) {
          let l = [];
          const c = [{ nestedArrIndex: -1, value: a }];
          for (; c.length; ) {
            const { nestedArrIndex: u, value: o } = c.pop();
            if (H(o))
              if (K(o) && !xe(o)) {
                let f = { v: o, i: u, n: this.norm.get(o) };
                l.push(f);
              } else
                Y(o) &&
                  o.forEach((f, h) => {
                    c.push({ nestedArrIndex: h, value: f });
                  });
          }
          n.$[i] = l;
        } else if (K(a) && !xe(a)) {
          let l = { v: a, n: this.norm.get(a) };
          n.$[i] = l;
        }
      }
    }),
      this.records.push(n));
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function bt(
  t,
  e,
  { getFn: s = v.getFn, fieldNormWeight: n = v.fieldNormWeight } = {},
) {
  const r = new Oe({ getFn: s, fieldNormWeight: n });
  return (r.setKeys(t.map(wt)), r.setSources(e), r.create(), r);
}
function _n(
  t,
  { getFn: e = v.getFn, fieldNormWeight: s = v.fieldNormWeight } = {},
) {
  const { keys: n, records: r } = t,
    i = new Oe({ getFn: e, fieldNormWeight: s });
  return (i.setKeys(n), i.setIndexRecords(r), i);
}
function de(
  t,
  {
    errors: e = 0,
    currentLocation: s = 0,
    expectedLocation: n = 0,
    distance: r = v.distance,
    ignoreLocation: i = v.ignoreLocation,
  } = {},
) {
  const a = e / t.length;
  if (i) return a;
  const l = Math.abs(n - s);
  return r ? a + l / r : l ? 1 : a;
}
function Cn(t = [], e = v.minMatchCharLength) {
  let s = [],
    n = -1,
    r = -1,
    i = 0;
  for (let a = t.length; i < a; i += 1) {
    let l = t[i];
    l && n === -1
      ? (n = i)
      : !l &&
        n !== -1 &&
        ((r = i - 1), r - n + 1 >= e && s.push([n, r]), (n = -1));
  }
  return (t[i - 1] && i - n >= e && s.push([n, i - 1]), s);
}
const ee = 32;
function An(
  t,
  e,
  s,
  {
    location: n = v.location,
    distance: r = v.distance,
    threshold: i = v.threshold,
    findAllMatches: a = v.findAllMatches,
    minMatchCharLength: l = v.minMatchCharLength,
    includeMatches: c = v.includeMatches,
    ignoreLocation: u = v.ignoreLocation,
  } = {},
) {
  if (e.length > ee) throw new Error(ln(ee));
  const o = e.length,
    f = t.length,
    h = Math.max(0, Math.min(n, f));
  let w = i,
    b = h;
  const M = l > 1 || c,
    F = M ? Array(f) : [];
  let P;
  for (; (P = t.indexOf(e, b)) > -1; ) {
    let B = de(e, {
      currentLocation: P,
      expectedLocation: h,
      distance: r,
      ignoreLocation: u,
    });
    if (((w = Math.min(B, w)), (b = P + o), M)) {
      let q = 0;
      for (; q < o; ) ((F[P + q] = 1), (q += 1));
    }
  }
  b = -1;
  let R = [],
    V = 1,
    k = o + f;
  const ae = 1 << (o - 1);
  for (let B = 0; B < o; B += 1) {
    let q = 0,
      N = k;
    for (; q < N; )
      (de(e, {
        errors: B,
        currentLocation: h + N,
        expectedLocation: h,
        distance: r,
        ignoreLocation: u,
      }) <= w
        ? (q = N)
        : (k = N),
        (N = Math.floor((k - q) / 2 + q)));
    k = N;
    let te = Math.max(1, h - N + 1),
      W = a ? f : Math.min(h + N, f) + o,
      y = Array(W + 2);
    y[W + 1] = (1 << B) - 1;
    for (let $ = W; $ >= te; $ -= 1) {
      let Q = $ - 1,
        U = s[t.charAt(Q)];
      if (
        (M && (F[Q] = +!!U),
        (y[$] = ((y[$ + 1] << 1) | 1) & U),
        B && (y[$] |= ((R[$ + 1] | R[$]) << 1) | 1 | R[$ + 1]),
        y[$] & ae &&
          ((V = de(e, {
            errors: B,
            currentLocation: Q,
            expectedLocation: h,
            distance: r,
            ignoreLocation: u,
          })),
          V <= w))
      ) {
        if (((w = V), (b = Q), b <= h)) break;
        te = Math.max(1, 2 * h - b);
      }
    }
    if (
      de(e, {
        errors: B + 1,
        currentLocation: h,
        expectedLocation: h,
        distance: r,
        ignoreLocation: u,
      }) > w
    )
      break;
    R = y;
  }
  const J = { isMatch: b >= 0, score: Math.max(0.001, V) };
  if (M) {
    const B = Cn(F, l);
    B.length ? c && (J.indices = B) : (J.isMatch = !1);
  }
  return J;
}
function wn(t) {
  let e = {};
  for (let s = 0, n = t.length; s < n; s += 1) {
    const r = t.charAt(s);
    e[r] = (e[r] || 0) | (1 << (n - s - 1));
  }
  return e;
}
const ge = String.prototype.normalize
  ? (t) =>
      t
        .normalize("NFD")
        .replace(
          /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,
          "",
        )
  : (t) => t;
class xt {
  constructor(
    e,
    {
      location: s = v.location,
      threshold: n = v.threshold,
      distance: r = v.distance,
      includeMatches: i = v.includeMatches,
      findAllMatches: a = v.findAllMatches,
      minMatchCharLength: l = v.minMatchCharLength,
      isCaseSensitive: c = v.isCaseSensitive,
      ignoreDiacritics: u = v.ignoreDiacritics,
      ignoreLocation: o = v.ignoreLocation,
    } = {},
  ) {
    if (
      ((this.options = {
        location: s,
        threshold: n,
        distance: r,
        includeMatches: i,
        findAllMatches: a,
        minMatchCharLength: l,
        isCaseSensitive: c,
        ignoreDiacritics: u,
        ignoreLocation: o,
      }),
      (e = c ? e : e.toLowerCase()),
      (e = u ? ge(e) : e),
      (this.pattern = e),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    const f = (w, b) => {
        this.chunks.push({ pattern: w, alphabet: wn(w), startIndex: b });
      },
      h = this.pattern.length;
    if (h > ee) {
      let w = 0;
      const b = h % ee,
        M = h - b;
      for (; w < M; ) (f(this.pattern.substr(w, ee), w), (w += ee));
      if (b) {
        const F = h - ee;
        f(this.pattern.substr(F), F);
      }
    } else f(this.pattern, 0);
  }
  searchIn(e) {
    const {
      isCaseSensitive: s,
      ignoreDiacritics: n,
      includeMatches: r,
    } = this.options;
    if (
      ((e = s ? e : e.toLowerCase()), (e = n ? ge(e) : e), this.pattern === e)
    ) {
      let M = { isMatch: !0, score: 0 };
      return (r && (M.indices = [[0, e.length - 1]]), M);
    }
    const {
      location: i,
      distance: a,
      threshold: l,
      findAllMatches: c,
      minMatchCharLength: u,
      ignoreLocation: o,
    } = this.options;
    let f = [],
      h = 0,
      w = !1;
    this.chunks.forEach(({ pattern: M, alphabet: F, startIndex: P }) => {
      const {
        isMatch: R,
        score: V,
        indices: k,
      } = An(e, M, F, {
        location: i + P,
        distance: a,
        threshold: l,
        findAllMatches: c,
        minMatchCharLength: u,
        includeMatches: r,
        ignoreLocation: o,
      });
      (R && (w = !0), (h += V), R && k && (f = [...f, ...k]));
    });
    let b = { isMatch: w, score: w ? h / this.chunks.length : 1 };
    return (w && r && (b.indices = f), b);
  }
}
class Z {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return Ye(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return Ye(e, this.singleRegex);
  }
  search() {}
}
function Ye(t, e) {
  const s = t.match(e);
  return s ? s[1] : null;
}
class bn extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const s = e === this.pattern;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class xn extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const n = e.indexOf(this.pattern) === -1;
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Sn extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const s = e.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class kn extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const s = !e.startsWith(this.pattern);
    return { isMatch: s, score: s ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Mn extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const s = e.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1],
    };
  }
}
class En extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const s = !e.endsWith(this.pattern);
    return { isMatch: s, score: s ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class St extends Z {
  constructor(
    e,
    {
      location: s = v.location,
      threshold: n = v.threshold,
      distance: r = v.distance,
      includeMatches: i = v.includeMatches,
      findAllMatches: a = v.findAllMatches,
      minMatchCharLength: l = v.minMatchCharLength,
      isCaseSensitive: c = v.isCaseSensitive,
      ignoreDiacritics: u = v.ignoreDiacritics,
      ignoreLocation: o = v.ignoreLocation,
    } = {},
  ) {
    (super(e),
      (this._bitapSearch = new xt(e, {
        location: s,
        threshold: n,
        distance: r,
        includeMatches: i,
        findAllMatches: a,
        minMatchCharLength: l,
        isCaseSensitive: c,
        ignoreDiacritics: u,
        ignoreLocation: o,
      })));
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class kt extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let s = 0,
      n;
    const r = [],
      i = this.pattern.length;
    for (; (n = e.indexOf(this.pattern, s)) > -1; )
      ((s = n + i), r.push([n, s - 1]));
    const a = !!r.length;
    return { isMatch: a, score: a ? 0 : 1, indices: r };
  }
}
const Be = [bn, kt, Sn, kn, En, Mn, xn, St],
  Xe = Be.length,
  Dn = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  Bn = "|";
function Fn(t, e = {}) {
  return t.split(Bn).map((s) => {
    let n = s
        .trim()
        .split(Dn)
        .filter((i) => i && !!i.trim()),
      r = [];
    for (let i = 0, a = n.length; i < a; i += 1) {
      const l = n[i];
      let c = !1,
        u = -1;
      for (; !c && ++u < Xe; ) {
        const o = Be[u];
        let f = o.isMultiMatch(l);
        f && (r.push(new o(f, e)), (c = !0));
      }
      if (!c)
        for (u = -1; ++u < Xe; ) {
          const o = Be[u];
          let f = o.isSingleMatch(l);
          if (f) {
            r.push(new o(f, e));
            break;
          }
        }
    }
    return r;
  });
}
const $n = new Set([St.type, kt.type]);
class In {
  constructor(
    e,
    {
      isCaseSensitive: s = v.isCaseSensitive,
      ignoreDiacritics: n = v.ignoreDiacritics,
      includeMatches: r = v.includeMatches,
      minMatchCharLength: i = v.minMatchCharLength,
      ignoreLocation: a = v.ignoreLocation,
      findAllMatches: l = v.findAllMatches,
      location: c = v.location,
      threshold: u = v.threshold,
      distance: o = v.distance,
    } = {},
  ) {
    ((this.query = null),
      (this.options = {
        isCaseSensitive: s,
        ignoreDiacritics: n,
        includeMatches: r,
        minMatchCharLength: i,
        findAllMatches: l,
        ignoreLocation: a,
        location: c,
        threshold: u,
        distance: o,
      }),
      (e = s ? e : e.toLowerCase()),
      (e = n ? ge(e) : e),
      (this.pattern = e),
      (this.query = Fn(this.pattern, this.options)));
  }
  static condition(e, s) {
    return s.useExtendedSearch;
  }
  searchIn(e) {
    const s = this.query;
    if (!s) return { isMatch: !1, score: 1 };
    const {
      includeMatches: n,
      isCaseSensitive: r,
      ignoreDiacritics: i,
    } = this.options;
    ((e = r ? e : e.toLowerCase()), (e = i ? ge(e) : e));
    let a = 0,
      l = [],
      c = 0;
    for (let u = 0, o = s.length; u < o; u += 1) {
      const f = s[u];
      ((l.length = 0), (a = 0));
      for (let h = 0, w = f.length; h < w; h += 1) {
        const b = f[h],
          { isMatch: M, indices: F, score: P } = b.search(e);
        if (M) {
          if (((a += 1), (c += P), n)) {
            const R = b.constructor.type;
            $n.has(R) ? (l = [...l, ...F]) : l.push(F);
          }
        } else {
          ((c = 0), (a = 0), (l.length = 0));
          break;
        }
      }
      if (a) {
        let h = { isMatch: !0, score: c / a };
        return (n && (h.indices = l), h);
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
const Fe = [];
function Rn(...t) {
  Fe.push(...t);
}
function $e(t, e) {
  for (let s = 0, n = Fe.length; s < n; s += 1) {
    let r = Fe[s];
    if (r.condition(t, e)) return new r(t, e);
  }
  return new xt(t, e);
}
const me = { AND: "$and", OR: "$or" },
  Ie = { PATH: "$path", PATTERN: "$val" },
  Re = (t) => !!(t[me.AND] || t[me.OR]),
  Ln = (t) => !!t[Ie.PATH],
  Tn = (t) => !Y(t) && Ct(t) && !Re(t),
  Ze = (t) => ({ [me.AND]: Object.keys(t).map((e) => ({ [e]: t[e] })) });
function Mt(t, e, { auto: s = !0 } = {}) {
  const n = (r) => {
    let i = Object.keys(r);
    const a = Ln(r);
    if (!a && i.length > 1 && !Re(r)) return n(Ze(r));
    if (Tn(r)) {
      const c = a ? r[Ie.PATH] : i[0],
        u = a ? r[Ie.PATTERN] : r[c];
      if (!K(u)) throw new Error(on(c));
      const o = { keyId: De(c), pattern: u };
      return (s && (o.searcher = $e(u, e)), o);
    }
    let l = { children: [], operator: i[0] };
    return (
      i.forEach((c) => {
        const u = r[c];
        Y(u) &&
          u.forEach((o) => {
            l.children.push(n(o));
          });
      }),
      l
    );
  };
  return (Re(t) || (t = Ze(t)), n(t));
}
function Pn(t, { ignoreFieldNorm: e = v.ignoreFieldNorm }) {
  t.forEach((s) => {
    let n = 1;
    (s.matches.forEach(({ key: r, norm: i, score: a }) => {
      const l = r ? r.weight : null;
      n *= Math.pow(a === 0 && l ? Number.EPSILON : a, (l || 1) * (e ? 1 : i));
    }),
      (s.score = n));
  });
}
function On(t, e) {
  const s = t.matches;
  ((e.matches = []),
    H(s) &&
      s.forEach((n) => {
        if (!H(n.indices) || !n.indices.length) return;
        const { indices: r, value: i } = n;
        let a = { indices: r, value: i };
        (n.key && (a.key = n.key.src),
          n.idx > -1 && (a.refIndex = n.idx),
          e.matches.push(a));
      }));
}
function Nn(t, e) {
  e.score = t.score;
}
function zn(
  t,
  e,
  {
    includeMatches: s = v.includeMatches,
    includeScore: n = v.includeScore,
  } = {},
) {
  const r = [];
  return (
    s && r.push(On),
    n && r.push(Nn),
    t.map((i) => {
      const { idx: a } = i,
        l = { item: e[a], refIndex: a };
      return (
        r.length &&
          r.forEach((c) => {
            c(i, l);
          }),
        l
      );
    })
  );
}
class ie {
  constructor(e, s = {}, n) {
    ((this.options = { ...v, ...s }),
      this.options.useExtendedSearch,
      (this._keyStore = new dn(this.options.keys)),
      this.setCollection(e, n));
  }
  setCollection(e, s) {
    if (((this._docs = e), s && !(s instanceof Oe))) throw new Error(an);
    this._myIndex =
      s ||
      bt(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight,
      });
  }
  add(e) {
    H(e) && (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    const s = [];
    for (let n = 0, r = this._docs.length; n < r; n += 1) {
      const i = this._docs[n];
      e(i, n) && (this.removeAt(n), (n -= 1), (r -= 1), s.push(i));
    }
    return s;
  }
  removeAt(e) {
    (this._docs.splice(e, 1), this._myIndex.removeAt(e));
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: s = -1 } = {}) {
    const {
      includeMatches: n,
      includeScore: r,
      shouldSort: i,
      sortFn: a,
      ignoreFieldNorm: l,
    } = this.options;
    let c = K(e)
      ? K(this._docs[0])
        ? this._searchStringList(e)
        : this._searchObjectList(e)
      : this._searchLogical(e);
    return (
      Pn(c, { ignoreFieldNorm: l }),
      i && c.sort(a),
      _t(s) && s > -1 && (c = c.slice(0, s)),
      zn(c, this._docs, { includeMatches: n, includeScore: r })
    );
  }
  _searchStringList(e) {
    const s = $e(e, this.options),
      { records: n } = this._myIndex,
      r = [];
    return (
      n.forEach(({ v: i, i: a, n: l }) => {
        if (!H(i)) return;
        const { isMatch: c, score: u, indices: o } = s.searchIn(i);
        c &&
          r.push({
            item: i,
            idx: a,
            matches: [{ score: u, value: i, norm: l, indices: o }],
          });
      }),
      r
    );
  }
  _searchLogical(e) {
    const s = Mt(e, this.options),
      n = (l, c, u) => {
        if (!l.children) {
          const { keyId: f, searcher: h } = l,
            w = this._findMatches({
              key: this._keyStore.get(f),
              value: this._myIndex.getValueForItemAtKeyId(c, f),
              searcher: h,
            });
          return w && w.length ? [{ idx: u, item: c, matches: w }] : [];
        }
        const o = [];
        for (let f = 0, h = l.children.length; f < h; f += 1) {
          const w = l.children[f],
            b = n(w, c, u);
          if (b.length) o.push(...b);
          else if (l.operator === me.AND) return [];
        }
        return o;
      },
      r = this._myIndex.records,
      i = {},
      a = [];
    return (
      r.forEach(({ $: l, i: c }) => {
        if (H(l)) {
          let u = n(s, l, c);
          u.length &&
            (i[c] || ((i[c] = { idx: c, item: l, matches: [] }), a.push(i[c])),
            u.forEach(({ matches: o }) => {
              i[c].matches.push(...o);
            }));
        }
      }),
      a
    );
  }
  _searchObjectList(e) {
    const s = $e(e, this.options),
      { keys: n, records: r } = this._myIndex,
      i = [];
    return (
      r.forEach(({ $: a, i: l }) => {
        if (!H(a)) return;
        let c = [];
        (n.forEach((u, o) => {
          c.push(...this._findMatches({ key: u, value: a[o], searcher: s }));
        }),
          c.length && i.push({ idx: l, item: a, matches: c }));
      }),
      i
    );
  }
  _findMatches({ key: e, value: s, searcher: n }) {
    if (!H(s)) return [];
    let r = [];
    if (Y(s))
      s.forEach(({ v: i, i: a, n: l }) => {
        if (!H(i)) return;
        const { isMatch: c, score: u, indices: o } = n.searchIn(i);
        c &&
          r.push({ score: u, key: e, value: i, idx: a, norm: l, indices: o });
      });
    else {
      const { v: i, n: a } = s,
        { isMatch: l, score: c, indices: u } = n.searchIn(i);
      l && r.push({ score: c, key: e, value: i, norm: a, indices: u });
    }
    return r;
  }
}
ie.version = "7.1.0";
ie.createIndex = bt;
ie.parseIndex = _n;
ie.config = v;
ie.parseQuery = Mt;
Rn(In);
const Et =
  Array.isArray ||
  function (e) {
    return (
      e != null &&
      e.length >= 0 &&
      Object.prototype.toString.call(e) === "[object Array]"
    );
  };
function jn(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function Hn(t, e, s) {
  return function () {
    if (arguments.length === 0) return s();
    var n = arguments[arguments.length - 1];
    if (!Et(n)) {
      for (var r = 0; r < t.length; ) {
        if (typeof n[t[r]] == "function")
          return n[t[r]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        r += 1;
      }
      if (jn(n)) {
        var i = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return i(n);
      }
    }
    return s.apply(this, arguments);
  };
}
const Je = {
  init: function () {
    return this.xf["@@transducer/init"]();
  },
  result: function (t) {
    return this.xf["@@transducer/result"](t);
  },
};
function et(t) {
  for (var e = [], s; !(s = t.next()).done; ) e.push(s.value);
  return e;
}
function tt(t, e, s) {
  for (var n = 0, r = s.length; n < r; ) {
    if (t(e, s[n])) return !0;
    n += 1;
  }
  return !1;
}
function qn(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function ve(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Un(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const Se = typeof Object.is == "function" ? Object.is : Un;
var st = Object.prototype.toString,
  Vn = (function () {
    return st.call(arguments) === "[object Arguments]"
      ? function (e) {
          return st.call(e) === "[object Arguments]";
        }
      : function (e) {
          return ve("callee", e);
        };
  })(),
  Qn = !{ toString: null }.propertyIsEnumerable("toString"),
  nt = [
    "constructor",
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString",
  ],
  rt = (function () {
    return arguments.propertyIsEnumerable("length");
  })(),
  Kn = function (e, s) {
    for (var n = 0; n < e.length; ) {
      if (e[n] === s) return !0;
      n += 1;
    }
    return !1;
  },
  it =
    typeof Object.keys == "function" && !rt
      ? re(function (e) {
          return Object(e) !== e ? [] : Object.keys(e);
        })
      : re(function (e) {
          if (Object(e) !== e) return [];
          var s,
            n,
            r = [],
            i = rt && Vn(e);
          for (s in e) ve(s, e) && (!i || s !== "length") && (r[r.length] = s);
          if (Qn)
            for (n = nt.length - 1; n >= 0; )
              ((s = nt[n]),
                ve(s, e) && !Kn(r, s) && (r[r.length] = s),
                (n -= 1));
          return r;
        }),
  at = re(function (e) {
    return e === null
      ? "Null"
      : e === void 0
        ? "Undefined"
        : Object.prototype.toString.call(e).slice(8, -1);
  });
function ot(t, e, s, n) {
  var r = et(t),
    i = et(e);
  function a(l, c) {
    return Ne(l, c, s.slice(), n.slice());
  }
  return !tt(
    function (l, c) {
      return !tt(a, c, l);
    },
    i,
    r,
  );
}
function Ne(t, e, s, n) {
  if (Se(t, e)) return !0;
  var r = at(t);
  if (r !== at(e)) return !1;
  if (
    typeof t["fantasy-land/equals"] == "function" ||
    typeof e["fantasy-land/equals"] == "function"
  )
    return (
      typeof t["fantasy-land/equals"] == "function" &&
      t["fantasy-land/equals"](e) &&
      typeof e["fantasy-land/equals"] == "function" &&
      e["fantasy-land/equals"](t)
    );
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return (
      typeof t.equals == "function" &&
      t.equals(e) &&
      typeof e.equals == "function" &&
      e.equals(t)
    );
  switch (r) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && qn(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && Se(t.valueOf(), e.valueOf()))) return !1;
      break;
    case "Date":
      if (!Se(t.valueOf(), e.valueOf())) return !1;
      break;
    case "Error":
      return t.name === e.name && t.message === e.message;
    case "RegExp":
      if (
        !(
          t.source === e.source &&
          t.global === e.global &&
          t.ignoreCase === e.ignoreCase &&
          t.multiline === e.multiline &&
          t.sticky === e.sticky &&
          t.unicode === e.unicode
        )
      )
        return !1;
      break;
  }
  for (var i = s.length - 1; i >= 0; ) {
    if (s[i] === t) return n[i] === e;
    i -= 1;
  }
  switch (r) {
    case "Map":
      return t.size !== e.size
        ? !1
        : ot(t.entries(), e.entries(), s.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size
        ? !1
        : ot(t.values(), e.values(), s.concat([t]), n.concat([e]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return !1;
  }
  var a = it(t);
  if (a.length !== it(e).length) return !1;
  var l = s.concat([t]),
    c = n.concat([e]);
  for (i = a.length - 1; i >= 0; ) {
    var u = a[i];
    if (!(ve(u, e) && Ne(e[u], t[u], l, c))) return !1;
    i -= 1;
  }
  return !0;
}
var Wn = vt(function (e, s) {
  return Ne(e, s, [], []);
});
function Gn(t, e, s) {
  var n, r;
  if (typeof t.indexOf == "function")
    switch (typeof e) {
      case "number":
        if (e === 0) {
          for (n = 1 / e; s < t.length; ) {
            if (((r = t[s]), r === 0 && 1 / r === n)) return s;
            s += 1;
          }
          return -1;
        } else if (e !== e) {
          for (; s < t.length; ) {
            if (((r = t[s]), typeof r == "number" && r !== r)) return s;
            s += 1;
          }
          return -1;
        }
        return t.indexOf(e, s);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return t.indexOf(e, s);
      case "object":
        if (e === null) return t.indexOf(e, s);
    }
  for (; s < t.length; ) {
    if (Wn(t[s], e)) return s;
    s += 1;
  }
  return -1;
}
function lt(t, e) {
  return Gn(e, t, 0) >= 0;
}
function Yn(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
var Xn = re(function (e) {
  return Et(e)
    ? !0
    : !e || typeof e != "object" || Yn(e)
      ? !1
      : e.length === 0
        ? !0
        : e.length > 0
          ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1)
          : !1;
});
function Zn(t) {
  return function e(s) {
    for (var n, r, i, a = [], l = 0, c = s.length; l < c; ) {
      if (Xn(s[l]))
        for (n = e(s[l]), i = 0, r = n.length; i < r; )
          ((a[a.length] = n[i]), (i += 1));
      else a[a.length] = s[l];
      l += 1;
    }
    return a;
  };
}
function Jn(t) {
  return t;
}
var er = re(Jn),
  Dt = (function () {
    function t() {
      ((this._nativeSet = typeof Set == "function" ? new Set() : null),
        (this._items = {}));
    }
    return (
      (t.prototype.add = function (e) {
        return !ct(e, !0, this);
      }),
      (t.prototype.has = function (e) {
        return ct(e, !1, this);
      }),
      t
    );
  })();
function ct(t, e, s) {
  var n = typeof t,
    r,
    i;
  switch (n) {
    case "string":
    case "number":
      return t === 0 && 1 / t === -1 / 0
        ? s._items["-0"]
          ? !0
          : (e && (s._items["-0"] = !0), !1)
        : s._nativeSet !== null
          ? e
            ? ((r = s._nativeSet.size),
              s._nativeSet.add(t),
              (i = s._nativeSet.size),
              i === r)
            : s._nativeSet.has(t)
          : n in s._items
            ? t in s._items[n]
              ? !0
              : (e && (s._items[n][t] = !0), !1)
            : (e && ((s._items[n] = {}), (s._items[n][t] = !0)), !1);
    case "boolean":
      if (n in s._items) {
        var a = t ? 1 : 0;
        return s._items[n][a] ? !0 : (e && (s._items[n][a] = !0), !1);
      } else return (e && (s._items[n] = t ? [!1, !0] : [!0, !1]), !1);
    case "function":
      return s._nativeSet !== null
        ? e
          ? ((r = s._nativeSet.size),
            s._nativeSet.add(t),
            (i = s._nativeSet.size),
            i === r)
          : s._nativeSet.has(t)
        : n in s._items
          ? lt(t, s._items[n])
            ? !0
            : (e && s._items[n].push(t), !1)
          : (e && (s._items[n] = [t]), !1);
    case "undefined":
      return s._items[n] ? !0 : (e && (s._items[n] = !0), !1);
    case "object":
      if (t === null)
        return s._items.null ? !0 : (e && (s._items.null = !0), !1);
    default:
      return (
        (n = Object.prototype.toString.call(t)),
        n in s._items
          ? lt(t, s._items[n])
            ? !0
            : (e && s._items[n].push(t), !1)
          : (e && (s._items[n] = [t]), !1)
      );
  }
}
var tr = re(Zn()),
  sr = (function () {
    function t(e, s) {
      ((this.xf = s), (this.f = e), (this.set = new Dt()));
    }
    return (
      (t.prototype["@@transducer/init"] = Je.init),
      (t.prototype["@@transducer/result"] = Je.result),
      (t.prototype["@@transducer/step"] = function (e, s) {
        return this.set.add(this.f(s)) ? this.xf["@@transducer/step"](e, s) : e;
      }),
      t
    );
  })();
function nr(t) {
  return function (e) {
    return new sr(t, e);
  };
}
var rr = vt(
    Hn([], nr, function (t, e) {
      for (var s = new Dt(), n = [], r = 0, i, a; r < e.length; )
        ((a = e[r]), (i = t(a)), s.add(i) && n.push(a), (r += 1));
      return n;
    }),
  ),
  ir = rr(er);
const ar = {
    keys: [
      { name: "city", weight: 0.3 },
      { name: "province", weight: 0.3 },
      { name: "cp", weight: 1 },
    ],
    threshold: 0.1,
    shouldSort: !0,
  },
  or = 5,
  lr = 10;
let ke = null;
const cr = Jt("restaurants", {
    state: () => ({
      filterServices: [],
      restaurants: [],
      restaurantServices: [],
      searchQuery: "",
      searchResults: [],
      isLoading: !1,
      error: null,
    }),
    actions: {
      search() {
        const t = mt();
        if (!this.searchQuery && !t.latitude) {
          this.searchResults = [];
          return;
        }
        if (!this.searchQuery && t.latitude) {
          const e = this.restaurants
            .map((s) => {
              const n = Number(
                Ee(t.latitude, t.longitude, s.lat, s.lng).toFixed(1),
              );
              return {
                ...s,
                birthday: s.birthday || null,
                currentDistance: n,
                howToArrive: Ke(
                  t.latitude && t.longitude
                    ? { latitude: t.latitude, longitude: t.longitude }
                    : null,
                  s.lat,
                  s.lng,
                ),
              };
            })
            .filter((s) => s.currentDistance <= or)
            .filter((s) =>
              this.filterServices.length === 0
                ? !0
                : this.filterServices.every((n) => {
                    const r = s.services && s.services.includes(n);
                    return ["birthday", "birthday_home"].includes(n)
                      ? r && s.birthday?.valid
                      : r;
                  }),
            )
            .sort((s, n) => s.currentDistance - n.currentDistance)
            .slice(0, lr);
          this.searchResults = e;
          return;
        }
        if (this.searchQuery) {
          ke || (ke = new ie(this.restaurants, ar));
          const e = ke.search(this.searchQuery).map((s) => s.item);
          this.searchResults = e
            .filter((s) =>
              this.filterServices.length === 0
                ? !0
                : this.filterServices.every((n) => {
                    const r = s.services && s.services.includes(n);
                    return ["birthday", "birthday_home"].includes(n)
                      ? r && s.birthday?.valid
                      : r;
                  }),
            )
            .map((s) => {
              const n = {
                ...s,
                birthday: s.birthday || null,
                howToArrive: Ke(
                  t.latitude && t.longitude
                    ? { latitude: t.latitude, longitude: t.longitude }
                    : null,
                  s.lat,
                  s.lng,
                ),
              };
              return (
                t.latitude &&
                  t.longitude &&
                  (n.currentDistance = Number(
                    Ee(t.latitude, t.longitude, s.lat, s.lng).toFixed(1),
                  )),
                n
              );
            });
        }
      },
      async fetchRestaurants(t = !1) {
        if (!(!t && this.restaurants.length > 0)) {
          ((this.isLoading = !0), (this.error = null));
          try {
            const e = await $fetch("/api/restaurants");
            ((this.restaurants = e.results),
              (this.restaurantServices = ir(
                tr(e.results.map((s) => s.services)),
              )));
          } catch (e) {
            ((this.error = "Failed to fetch restaurants"), console.error(e));
          } finally {
            this.isLoading = !1;
          }
        }
      },
      clearFilterServices() {
        ((this.filterServices = []), this.search());
      },
      toggleFilterService(t) {
        (this.filterServices.find((s) => s === t)
          ? (this.filterServices = this.filterServices.filter((s) => s !== t))
          : (this.filterServices = [...this.filterServices, t]),
          this.search());
      },
    },
    getters: {
      filterServicesApplied: (t) =>
        t.restaurantServices.map((e) => ({
          service: e,
          applied: t.filterServices.includes(e),
        })),
      filterToolServices: (t) =>
        t.restaurantServices.map((e) => ({
          service: e,
          illustration: pe[e]?.illustration,
          name: pe[e]?.name,
        })),
    },
  }),
  ur = { class: "relative w-full" },
  dr = {
    class:
      "w-full pt-[56px] tablet:pt-10 desktop:pt-20 xl:pt-10 gap-6 flex flex-col items-start justify-center tablet:gap-8 desktop:gap-10 relative max-w-[1440px] mx-auto",
  },
  fr = {
    class:
      "flex flex-col gap-6 tablet:gap-8 desktop:gap-10 items-center justify-center mx-auto desktop:max-w-[786px] w-full overflow-visible px-4",
  },
  hr = { class: "flex flex-col items-center gap-4 tablet:gap-6 desktop:gap-8" },
  pr = { class: "text-center max-w-[328px] text-body-s tablet:max-w-[580px]" },
  gr = {
    class: "relative flex flex-col items-center justify-center w-full gap-2",
  },
  mr = {
    class: "relative flex flex-col items-center justify-center w-full gap-2",
  },
  vr = {
    class:
      "flex w-full items-start justify-start absolute top-14 left-0 z-[40] h-fit dropdown-container",
  },
  yr = { class: "flex flex-col items-start justify-center w-full gap-4" },
  _r = {
    key: 1,
    class: "flex flex-row items-center justify-center w-full gap-2",
  },
  Cr = { class: "z-20 flex justify-center w-full" },
  Ar = {
    class:
      "flex flex-wrap justify-center w-full h-full gap-4 tablet:gap-6 desktop:gap-10",
  },
  wr = {
    key: 1,
    class:
      "flex flex-col items-start justify-center w-full h-full gap-4 tablet:gap-6 desktop:gap-10",
  },
  br = {
    class:
      "flex flex-wrap items-stretch justify-center w-full h-full gap-6 mx-auto desktop:gap-10",
  },
  xr = { key: 0, class: "flex items-center justify-center w-full gap-3 mt-4" },
  Sr = { class: "flex flex-col items-start w-full h-full gap-3 py-2" },
  kr = { class: "flex flex-col items-start self-stretch w-full gap-2 mb-4" },
  Mr = { class: "flex items-center self-stretch gap-2" },
  Er = { class: "flex flex-1 gap-2" },
  Dr = { class: "font-bold text-title-xs desktop:text-title-m" },
  Br = { class: "flex flex-col items-start w-full gap-2 self-strech" },
  Fr = { class: "text-body-s text-text-secondary desktop:text-body-m" },
  $r = { class: "flex justify-between w-full" },
  Ir = { class: "text-body-s text-text-secondary desktop:text-body-m" },
  Rr = { class: "text-body-s text-text-secondary desktop:text-body-m" },
  Lr = { class: "flex items-center w-full h-auto gap-2" },
  Tr = { class: "w-[40px] h-auto" },
  Pr = { key: 0, class: "text-body-s desktop:text-body-m" },
  Or = { class: "flex flex-col w-full gap-4" },
  Nr = {
    class: "font-bold text-body-s desktop:text-body-m text-text-secondary",
  },
  zr = { key: 0, class: "text-body-s text-text-secondary desktop:text-body-m" },
  jr = { key: 1 },
  Hr = {
    class:
      "flex flex-wrap items-start justify-start w-full gap-1 tablet:gap-2 desktop:gap-0",
  },
  qr = {
    class:
      "flex flex-wrap items-start justify-start w-full gap-1 tablet:gap-2 desktop:gap-0",
  },
  Ur = 300,
  ut = 2,
  Vr = 6,
  fi = oe({
    __name: "index",
    props: {
      searchPlaceholder: {},
      title: {},
      description: {},
      subtitle: {},
      isBirthday: { type: Boolean },
      isBirthdayHome: { type: Boolean },
      q: {},
      services: {},
    },
    emits: ["select-restaurant"],
    setup(t, { emit: e }) {
      const s = t,
        n = Qe(),
        r = e,
        { t: i } = es(),
        { $gtmClickBoton: a, $gtmClickHipervinculo: l } = ts(),
        { asLinkCustomPideYPaga: c } = xs(),
        u = Qe(),
        o = cr(),
        f = mt(),
        h = bs(),
        w = I(""),
        b = I(!1),
        M = I(0),
        F = I(!0),
        P = I(Vr),
        R = I(1),
        V = I(null),
        k = I(null),
        ae = I([]),
        J = I([]),
        B = I(-1),
        q = ss(async () => {
          (o.searchQuery && o.searchQuery.length >= ut
            ? (a(`buscar_${o.searchQuery}`), await o.search(), (b.value = !0))
            : ((b.value = !1), f.latitude && f.longitude && (await L())),
            (M.value = 0),
            (R.value = 1));
        }, Ur),
        N = () => {
          (o.searchQuery && o.searchQuery.length >= ut
            ? (b.value = !0)
            : (b.value = !1),
            q());
        };
      he(
        () => o.searchQuery,
        () => {
          N();
        },
      );
      const te = () => {
          ((o.searchQuery = ""), (b.value = !1));
        },
        W = async () => {
          if (!f.isLoading) {
            (a("usarubicacion"), (o.searchQuery = ""), (o.searchResults = []));
            try {
              (await f.requestLocation(),
                f.latitude &&
                  f.longitude &&
                  ((M.value = 0),
                  (R.value = 1),
                  await o.search(),
                  (b.value = !1)));
            } catch (d) {
              (console.error(
                "Error getting location and searching restaurants:",
                d,
              ),
                (w.value = i("search-restaurants.error-fetching-location")));
            }
          }
        },
        y = (d) => {
          l(`comollegar_${d.name}`, d.howToArrive.to);
        },
        L = async () => {
          if (!f.latitude || !f.longitude) {
            await W();
            return;
          }
          try {
            await o.search();
          } catch (d) {
            (console.error(
              "components/SearchRestaurants - useMyLocation - ",
              d,
            ),
              (w.value = i("search-restaurants.error-fetching-location")));
          }
        },
        $ = z(() => {
          const d = (R.value - 1) * P.value,
            g = d + P.value;
          return U.value.slice(d, g);
        }),
        Q = z(() => Math.ceil(U.value.length / P.value)),
        U = z(() =>
          (o.searchResults.length > 0 ? o.searchResults : [])
            .filter((x) => x.lat > 0)
            .sort((x, C) => {
              const G = x.currentDistance || 1 / 0,
                ce = C.currentDistance || 1 / 0;
              return G - ce;
            })
            .map((x, C) => ({
              id: x.site,
              label: Ce(C),
              name: x.name,
              city: x.city,
              province: x.province,
              cp: x.cp,
              address: x.address + ", " + x.city + ", " + x.cp,
              phone: x.phone,
              lat: x.lat,
              lng: x.lng,
              valuePin: Ce(C),
              howToArrive: {
                label: i("search-restaurants.how-to-arrive"),
                to: x.howToArrive?.directionsUrl ?? null,
              },
              closeDistance: x.currentDistance
                ? i("search-restaurants.close-distance", {
                    distance: x.currentDistance,
                  })
                : "",
              index: C,
              services: x.services,
              schedules: x.schedules,
              birthday: x.birthday,
              mcopco: x.mcopco,
              cta:
                s.isBirthday || s.isBirthdayHome
                  ? { label: i("search-restaurants.select") }
                  : void 0,
            })),
        ),
        Bt = () => {
          (h.setIsOpen(!0),
            (document.body.style.overflow = "hidden"),
            V.value?.openModal());
        },
        ye = (d) => {
          B.value = B.value === d ? -1 : d;
        };
      function le(d) {
        (a(`masinfo_${d.name}`),
          (k.value = d),
          (ae.value = d.services || []),
          (J.value = d.services || []),
          Bt());
      }
      const _e = (d, g = !1) => {
          if (typeof d == "number") M.value = d;
          else if (d && "id" in d) {
            if (g) {
              a(`seleccionarrestaurante_${d.name}`);
              const C = U.value.find((G) => G.id === d.id);
              C && (r("select-restaurant", C), ze());
            }
            const x = U.value.findIndex((C) => C.id === d.id);
            x !== -1 && (M.value = x);
          }
        },
        ze = () => {
          h.setIsOpen(!1);
        };
      function Ce(d) {
        const g = (x) => String.fromCharCode(x + 97).toUpperCase();
        return d < 0 ? g(0) : d > 25 ? Ce(d - 26) : g(d);
      }
      const Ft = z(() =>
          U.value.map((d) => ({
            id: d.id,
            label: `${d.city} - ${d.name} ${d.cp ? `(${d.cp})` : ""}`,
            name: d.name,
            value: d,
          })),
        ),
        $t = (d) => {
          (_e(d, !1), (b.value = !1));
        },
        It = z(() => {
          const d = [
              "playPlace",
              "parking",
              "terrace",
              "invalid",
              "electric_car",
            ],
            g = o.filterToolServices
              .filter((C) => !d.includes(C.service))
              .map((C) => ({
                id: C.service,
                name: i(`filters.${C.service}`),
                illustration: C.illustration,
                preselected:
                  (s.isBirthday && C.service === "birthday") ||
                  (s.isBirthdayHome && C.service === "birthday_home") ||
                  ((s.services || "").includes("mccafe") &&
                    C.service === "mccafe"),
              })),
            x = o.filterToolServices
              .filter((C) => d.includes(C.service))
              .map((C) => ({
                id: C.service,
                name: i(`filters.${C.service}`),
                illustration: C.illustration,
                preselected: !1,
              }));
          return [
            {
              title: i("search-restaurants.filters.services"),
              type: "service",
              filters: g,
              element: "card",
            },
            {
              title: i("search-restaurants.filters.instalations"),
              type: "instalation",
              filters: x,
              element: "card",
            },
          ].filter((C) => C.filters.length > 0);
        }),
        Rt = (d) => {
          (o.clearFilterServices(),
            d.forEach((g) => {
              o.toggleFilterService(g.id);
            }));
        },
        Lt = (d) => {
          F.value = d === "map";
        };
      function je(d) {
        const g = document.querySelector(".dropdown-container");
        g && !g.contains(d.target) && (b.value = !1);
      }
      (ht(async () => {
        (document.addEventListener("click", je),
          await o.fetchRestaurants(),
          s.q && ((o.searchQuery = s.q), await o.search()),
          f.latitude && f.longitude && (await o.search()));
      }),
        pt(() => {
          document.removeEventListener("click", je);
        }));
      const He = z(() => (u.isMobile.value ? "sm" : "md")),
        Tt = z(() => {
          const d = k.value?.services;
          return d
            ? d
                .filter(
                  (g) =>
                    ![
                      "gym",
                      "parking",
                      "invalid",
                      "terrace",
                      "electric_car",
                    ].includes(g),
                )
                .map((g) => pe[g] || { id: g, name: g, illustration: g })
            : [];
        }),
        Pt = z(() => {
          const d = k.value?.services;
          return d
            ? d
                .filter((g) =>
                  [
                    "gym",
                    "parking",
                    "invalid",
                    "terrace",
                    "electric_car",
                  ].includes(g),
                )
                .map((g) => pe[g] || { id: g, name: g, illustration: g })
            : [];
        });
      function Ot(d) {
        return (
          {
            restaurant: i("search-restaurants.filters.restaurant"),
            delivery: i("search-restaurants.filters.delivery"),
            mcauto: i("search-restaurants.filters.mcauto"),
            takeaway: i("search-restaurants.filters.takeaway"),
            mcexpress: i("search-restaurants.filters.mcexpress"),
            "24h": i("search-restaurants.filters.24h"),
          }[d] || d
        );
      }
      function Nt(d) {
        if (!d || typeof d == "string") return d;
        const g = {};
        return (
          [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
            "festive",
          ].forEach((C) => {
            if (!d[C]) return;
            const G = `${d[C].start}-${d[C].end}`;
            (g[G] || (g[G] = { days: [], schedule: d[C] }), g[G].days.push(C));
          }),
          Object.values(g).map((C) => ({
            days: C.days,
            start: C.schedule.start,
            end: C.schedule.end,
          }))
        );
      }
      const zt = () => {
          (f.clearCurrentLocation(),
            (o.searchQuery = ""),
            (o.searchResults = []),
            (M.value = 0),
            (R.value = 1));
        },
        jt = () => {
          const d = k.value?.name;
          l(`pidemyorder_${d}`, "/mymcdonalds/pide-y-paga");
        },
        qe = z(() => (n.isDesktop.value ? "m" : "s"));
      return (d, g) => {
        const x = ns,
          C = rs,
          G = is,
          ce = as,
          Ht = ks,
          qt = en,
          Ut = gs,
          Vt = Pe,
          Qt = ms,
          Kt = yt,
          Ue = ft,
          Wt = vs,
          Gt = Te,
          Ae = ys,
          we = _s,
          Ve = Cs,
          Yt = As;
        return (
          A(),
          S("div", ur, [
            m("div", dr, [
              m("div", fr, [
                m("div", hr, [
                  D(
                    x,
                    { size: "lg", title: t.title, description: t.description },
                    null,
                    8,
                    ["title", "description"],
                  ),
                  m("p", pr, E(t.subtitle), 1),
                ]),
                m("div", gr, [
                  m("div", mr, [
                    !p(f).latitude || !p(f).longitude
                      ? (A(),
                        j(
                          C,
                          {
                            key: 0,
                            modelValue: p(o).searchQuery,
                            "onUpdate:modelValue": [
                              g[0] || (g[0] = (_) => (p(o).searchQuery = _)),
                              N,
                            ],
                            placeholder: `${p(o).isLoading ? "Cargando restaurantes..." : t.searchPlaceholder}`,
                            type: "search",
                            disabled: p(o).isLoading,
                            onInput: N,
                            onClear: te,
                          },
                          null,
                          8,
                          ["modelValue", "placeholder", "disabled"],
                        ))
                      : T("", !0),
                    m("div", vr, [
                      p(F) && p(b) && p(U).length >= 2
                        ? (A(),
                          j(
                            G,
                            {
                              key: 0,
                              items: p(Ft),
                              "is-dropdown-open": !0,
                              onClick: $t,
                            },
                            null,
                            8,
                            ["items"],
                          ))
                        : T("", !0),
                    ]),
                    m("div", yr, [
                      !p(f).latitude || !p(f).longitude
                        ? (A(),
                          j(
                            ce,
                            {
                              key: 0,
                              label: p(f).isLoading
                                ? p(i)("search-restaurants.getting-location")
                                : p(i)("search-restaurants.use-location"),
                              "show-icon-left": "",
                              size: p(He),
                              animate: !1,
                              "icon-left": "locationLocateMe",
                              class: "ml-2",
                              disabled: p(f).isLoading,
                              onClick: W,
                            },
                            null,
                            8,
                            ["label", "size", "disabled"],
                          ))
                        : p(f).latitude && p(f).longitude
                          ? (A(),
                            S("div", _r, [
                              D(
                                ce,
                                {
                                  label: p(i)(
                                    "search-restaurants.stop-using-location",
                                  ),
                                  "show-icon-left": "",
                                  size: p(He),
                                  animate: !1,
                                  "icon-left": "locationLocateMe",
                                  class: "ml-2",
                                  onClick: zt,
                                },
                                null,
                                8,
                                ["label", "size"],
                              ),
                            ]))
                          : T("", !0),
                      p(o).isLoading
                        ? T("", !0)
                        : (A(),
                          j(
                            Ht,
                            {
                              key: 2,
                              "filter-groups": p(It),
                              "is-birthday": t.isBirthday,
                              "is-birthday-home": t.isBirthdayHome,
                              onApplyFilters: Rt,
                              onChangeView: Lt,
                            },
                            null,
                            8,
                            [
                              "filter-groups",
                              "is-birthday",
                              "is-birthday-home",
                            ],
                          )),
                    ]),
                  ]),
                ]),
              ]),
              m("div", Cr, [
                m("div", Ar, [
                  p(F)
                    ? (A(),
                      j(
                        Ut,
                        {
                          key: 0,
                          "location-selected": p(M),
                          locations: p(U),
                          onSelectLocation: _e,
                        },
                        {
                          "nav-locations": O(() => [
                            p(U).length > 0
                              ? (A(),
                                j(
                                  qt,
                                  {
                                    key: 0,
                                    cards: p(U),
                                    "selected-index": p(M),
                                    onInfoClick: g[1] || (g[1] = (_) => le(_)),
                                    onCardClick: g[2] || (g[2] = (_) => le(_)),
                                    onHowToArriveClick:
                                      g[3] || (g[3] = (_) => y(_)),
                                  },
                                  null,
                                  8,
                                  ["cards", "selected-index"],
                                ))
                              : T("", !0),
                          ]),
                          _: 1,
                        },
                        8,
                        ["location-selected", "locations"],
                      ))
                    : (A(),
                      S("div", wr, [
                        m("div", br, [
                          (A(!0),
                          S(
                            X,
                            null,
                            ne(
                              p($),
                              (_) => (
                                A(),
                                S(
                                  "div",
                                  {
                                    key: _.id,
                                    class:
                                      "h-auto w-full flex justify-center md:w-auto",
                                  },
                                  [
                                    D(
                                      Vt,
                                      {
                                        "value-pin": _.valuePin,
                                        "size-carrousel": !1,
                                        name: _.name,
                                        address: _.address,
                                        phone: _.phone,
                                        "close-distance": _.closeDistance,
                                        "how-to-arrive": _.howToArrive,
                                        cta: _.cta,
                                        "is-franquicia": _.mcopco,
                                        onCardClick: (se) => le(_),
                                        onInfoClick: (se) => le(_),
                                        onHowToArriveClick: (se) => y(se),
                                      },
                                      null,
                                      8,
                                      [
                                        "value-pin",
                                        "name",
                                        "address",
                                        "phone",
                                        "close-distance",
                                        "how-to-arrive",
                                        "cta",
                                        "is-franquicia",
                                        "onCardClick",
                                        "onInfoClick",
                                        "onHowToArriveClick",
                                      ],
                                    ),
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        p(Q) > 1
                          ? (A(),
                            S("div", xr, [
                              D(
                                Qt,
                                {
                                  "total-pages": p(Q),
                                  "current-page": p(R),
                                  "onUpdate:currentPage":
                                    g[4] || (g[4] = (_) => (R.value = _)),
                                },
                                null,
                                8,
                                ["total-pages", "current-page"],
                              ),
                            ]))
                          : T("", !0),
                      ])),
                ]),
              ]),
            ]),
            D(
              Yt,
              { ref_key: "modal", ref: V, onClose: ze },
              {
                default: O(() => [
                  m("div", Sr, [
                    m("div", kr, [
                      m("div", Mr, [
                        m("div", Er, [
                          D(
                            Kt,
                            { size: "large", value: p(k)?.label },
                            null,
                            8,
                            ["value"],
                          ),
                          m("p", Dr, E(p(k)?.name), 1),
                        ]),
                      ]),
                      m("div", Br, [
                        m("p", Fr, E(p(k)?.address), 1),
                        m("div", $r, [
                          D(
                            Ue,
                            {
                              class:
                                "text-body-s text-text-link desktop:text-body-m",
                              to: p(k)?.howToArrive.to,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            {
                              default: O(() => [
                                fe(E(p(k)?.howToArrive.label), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["to"],
                          ),
                          m("p", Ir, E(p(k)?.closeDistance), 1),
                        ]),
                        m("p", Rr, E(p(k)?.phone), 1),
                      ]),
                    ]),
                    m("div", Lr, [
                      m("div", Tr, [D(Wt, { "type-variant": "pideypaga" })]),
                      p(k)?.services?.includes("mop_service")
                        ? (A(),
                          S("p", Pr, [
                            fe(
                              E(p(i)("search-restaurants.pide-y-paga")) + " ",
                              1,
                            ),
                            D(
                              Ue,
                              {
                                class: "text-[#006BAE]",
                                to: p(c)(),
                                onClick: jt,
                              },
                              {
                                default: O(() => [
                                  fe(
                                    E(
                                      p(i)(
                                        "search-restaurants.pide-y-paga-app",
                                      ),
                                    ),
                                    1,
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["to"],
                            ),
                          ]))
                        : T("", !0),
                    ]),
                    t.isBirthday || t.isBirthdayHome
                      ? (A(),
                        j(
                          Gt,
                          {
                            key: 0,
                            size: "s",
                            class: "w-full",
                            label: p(i)("search-restaurants.select-restaurant"),
                            onClick: g[5] || (g[5] = (_) => _e(p(k), !0)),
                          },
                          null,
                          8,
                          ["label"],
                        ))
                      : T("", !0),
                    D(
                      we,
                      {
                        "is-panel-open": p(B) === 0,
                        onToggle: g[6] || (g[6] = (_) => ye(0)),
                      },
                      {
                        default: O(({ isPanelOpen: _ }) => [
                          D(
                            Ae,
                            {
                              title: p(i)("search-restaurants.schedules"),
                              "is-panel-open": _,
                              icon: "myapp-mymcd-horario",
                            },
                            null,
                            8,
                            ["title", "is-panel-open"],
                          ),
                        ]),
                        content: O(() => [
                          m("div", Or, [
                            (A(!0),
                            S(
                              X,
                              null,
                              ne(
                                p(k)?.schedules,
                                (_, se) => (
                                  A(),
                                  S(
                                    X,
                                    { key: se },
                                    [
                                      _
                                        ? (A(),
                                          S(
                                            X,
                                            { key: 0 },
                                            [
                                              m("h3", Nr, E(Ot(se)), 1),
                                              typeof _ == "string"
                                                ? (A(), S("p", zr, E(_), 1))
                                                : (A(),
                                                  S("ul", jr, [
                                                    (A(!0),
                                                    S(
                                                      X,
                                                      null,
                                                      ne(
                                                        Nt(_),
                                                        (be, Xt) => (
                                                          A(),
                                                          S(
                                                            "li",
                                                            {
                                                              key: Xt,
                                                              class:
                                                                "text-body-s text-text-secondary flex justify-between py-2 border-b border-[#D6D6D6] w-full border-dashed desktop:text-body-m",
                                                            },
                                                            [
                                                              m(
                                                                "span",
                                                                null,
                                                                E(
                                                                  be.days
                                                                    .map((Zt) =>
                                                                      p(ws)(Zt),
                                                                    )
                                                                    .join(
                                                                      " - ",
                                                                    ),
                                                                ) + ": ",
                                                                1,
                                                              ),
                                                              m(
                                                                "span",
                                                                null,
                                                                E(be.start) +
                                                                  " - " +
                                                                  E(be.end),
                                                                1,
                                                              ),
                                                            ],
                                                          )
                                                        ),
                                                      ),
                                                      128,
                                                    )),
                                                  ])),
                                            ],
                                            64,
                                          ))
                                        : T("", !0),
                                    ],
                                    64,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["is-panel-open"],
                    ),
                    D(
                      we,
                      {
                        "is-panel-open": p(B) === 1,
                        "no-side-padding": "",
                        onToggle: g[7] || (g[7] = (_) => ye(1)),
                      },
                      {
                        default: O(({ isPanelOpen: _ }) => [
                          D(
                            Ae,
                            {
                              title: p(i)(
                                "search-restaurants.filters.services",
                              ),
                              "is-panel-open": _,
                              icon: "myapp-mymcd-car",
                            },
                            null,
                            8,
                            ["title", "is-panel-open"],
                          ),
                        ]),
                        content: O(() => [
                          m("div", Hr, [
                            (A(!0),
                            S(
                              X,
                              null,
                              ne(
                                p(Tt),
                                (_) => (
                                  A(),
                                  j(
                                    Ve,
                                    {
                                      key: _.name,
                                      illustration: _.illustration,
                                      active: !0,
                                      size: p(qe),
                                      transparent: "",
                                    },
                                    {
                                      default: O(() => [
                                        m("span", null, E(_.name), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["illustration", "size"],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["is-panel-open"],
                    ),
                    D(
                      we,
                      {
                        "is-panel-open": p(B) === 2,
                        onToggle: g[8] || (g[8] = (_) => ye(2)),
                      },
                      {
                        default: O(({ isPanelOpen: _ }) => [
                          D(
                            Ae,
                            {
                              title: p(i)(
                                "search-restaurants.filters.instalations",
                              ),
                              "is-panel-open": _,
                              icon: "myapp-mymcd-restaurant3",
                            },
                            null,
                            8,
                            ["title", "is-panel-open"],
                          ),
                        ]),
                        content: O(() => [
                          m("div", qr, [
                            (A(!0),
                            S(
                              X,
                              null,
                              ne(
                                p(Pt),
                                (_) => (
                                  A(),
                                  j(
                                    Ve,
                                    {
                                      key: _.name,
                                      illustration: _.illustration,
                                      active: !0,
                                      size: p(qe),
                                      transparent: "",
                                    },
                                    {
                                      default: O(() => [
                                        m("span", null, E(_.name), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["illustration", "size"],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["is-panel-open"],
                    ),
                  ]),
                ]),
                _: 1,
              },
              512,
            ),
          ])
        );
      };
    },
  });
export { fi as _ };
