import { _ as et } from "./n9BDgNm5.js";
import { _ as ot } from "./DhdId782.js";
import { _ as nt } from "./Bj0JfLHo.js";
import {
  u as B,
  d as H,
  l as at,
  S as st,
  j as it,
  m as lt,
  _ as rt,
  e as G,
  c as U,
  r as ct,
  a1 as pt,
} from "./w36zW0QG.js";
import { _ as ut, a as mt } from "./BMQmZPly.js";
import { g as dt } from "./Ca9Ptn7z.js";
import { S as _t } from "./BSFMrA7C.js";
import { f as ft, l as gt } from "./D8jQnJCR.js";
import { c as xt } from "./DLDJGiia.js";
import {
  l as q,
  d as W,
  m as f,
  y as M,
  A as b,
  Z as d,
  u as t,
  O as l,
  U as E,
  _ as a,
  N as g,
  W as C,
  Q as h,
  a1 as L,
  $ as y,
  X as ht,
  T as wt,
  o as j,
  q as O,
  P as yt,
} from "./CG2MQ2lF.js";
import { _ as vt } from "./CiZxUmDW.js";
import { u as F } from "./B_C6Jo2n.js";
import { g as bt } from "./YHNThBl7.js";
import { a as kt, u as Ct, b as Pt } from "./w5omhzVm.js";
import { a as Lt } from "./DyeUX7V5.js";
import "./X_wUNWL3.js";
var Mt = Lt(function (o, e) {
  for (var s = {}, i = {}, n = 0, r = o.length; n < r; )
    ((i[o[n]] = 1), (n += 1));
  for (var w in e) i.hasOwnProperty(w) || (s[w] = e[w]);
  return s;
});
const $t = { key: 0 },
  Tt = { class: "flex flex-col justify-center items-center tablet:flex-row" },
  Dt = { class: "flex items-center self-stretch justify-center gap-6" },
  zt = {
    key: 1,
    class:
      "p-6 pt-10 bg-white w-full flex flex-col justify-center items-center gap-4",
  },
  Bt = { class: "flex flex-col gap-3 max-w-[480px]" },
  qt = { class: "flex flex-row items-center gap-1" },
  At = { class: "text-body-m desktop:text-body-l font-normal leading-5" },
  It = {
    class:
      "font-bold bg-gradient-to-r from-[#910063] via-[#db0007] to-[#e8720a] text-transparent bg-clip-text",
  },
  Nt = { class: "flex flex-row-reverse items-center gap-1 text-right" },
  St = { class: "text-body-m desktop:text-body-l font-normal leading-5" },
  Rt = {
    class:
      "font-bold bg-gradient-to-r from-[#910063] via-[#db0007] to-[#e8720a] text-transparent bg-clip-text",
  },
  Et = { class: "flex flex-row items-center gap-1" },
  Ht = { class: "text-body-m desktop:text-body-l font-normal leading-5" },
  Gt = {
    class:
      "font-bold bg-gradient-to-r from-[#910063] via-[#db0007] to-[#e8720a] text-transparent bg-clip-text",
  },
  Ut = { class: "flex justify-center items-center flex-col gap-6" },
  Wt = q({
    __name: "index",
    props: { popupId: {} },
    setup(p) {
      const o = p,
        { t: e } = B(),
        {
          $gtmClickBoton: s,
          $gtmDownloadApplicationIos: i,
          $gtmDownloadApplicationAndroid: n,
        } = H(),
        { locale: r } = B(),
        w = ft(r.value),
        k = at(),
        c = W(null),
        _ = f(() => c.value?.data?.title),
        P = f(() => c.value?.data?.description),
        Q = f(() => c.value?.data?.slices || []),
        $ = f(() => {
          const v = c.value?.data?.title_paint;
          return dt(v);
        }),
        V = f(() => (k.isMobile.value ? "xs" : k.isTablet.value ? "s" : "m")),
        Z = f(() => c.value?.data?.downloadqr),
        K = f(() => c.value?.data?.wifi),
        X = (v, I) => {
          const x = gt({ label: v || "", link: I });
          return ((x.onClick = () => s(x.label, x.url)), x);
        },
        u = f(() => X(c.value?.data?.cta_label, c.value?.data?.cta_link)),
        T = f(() => c.value?.data?.title_align),
        m = f(() => c.value?.data?.image);
      M(async () => {
        if (o.popupId)
          try {
            c.value = await $fetch(
              "/api/cms/collection/modal_popup/" + o.popupId,
              {
                params: {
                  lang: w,
                  graphQuery: `{
              modal_popup {
                ...modal_popupFields
                slices {
                 ${_t}
                }
              }
            }`,
                },
              },
            );
          } catch (v) {
            console.error("components/PrismicPopup - ", v);
          }
      });
      const A = f(() => (k.isMobile.value ? "s" : "m"));
      return (v, I) => {
        const x = et,
          Y = ot,
          N = nt,
          D = it,
          S = ut,
          R = lt,
          J = mt,
          tt = st;
        return t(c)
          ? (l(),
            b("div", $t, [
              t(Z)
                ? (l(),
                  b(
                    E,
                    { key: 0 },
                    [
                      a("div", Tt, [
                        t(m) && t(m).url
                          ? (l(),
                            g(
                              Y,
                              {
                                key: 0,
                                size: "240",
                                class: "block tablet:hidden",
                              },
                              {
                                default: C(() => [
                                  h(
                                    x,
                                    {
                                      image: {
                                        url: t(m).url,
                                        alt: t(m).alt || t(_),
                                      },
                                    },
                                    null,
                                    8,
                                    ["image"],
                                  ),
                                ]),
                                _: 1,
                              },
                            ))
                          : d("", !0),
                        t(m) && t(m).url
                          ? (l(),
                            g(
                              x,
                              {
                                key: 1,
                                image: { url: t(m).url, alt: t(m).alt || t(_) },
                                "wrapper-class": "hidden tablet:block w-1/2",
                              },
                              null,
                              8,
                              ["image"],
                            ))
                          : d("", !0),
                        t(_)
                          ? (l(),
                            g(
                              D,
                              {
                                key: 2,
                                title: t(_),
                                "content-align": t(T),
                                size: "md",
                                paint: t($),
                              },
                              {
                                description: C(() => [
                                  t(P)
                                    ? (l(),
                                      g(
                                        N,
                                        { key: 0, "rich-text": t(P) },
                                        null,
                                        8,
                                        ["rich-text"],
                                      ))
                                    : d("", !0),
                                ]),
                                _: 1,
                              },
                              8,
                              ["title", "content-align", "paint"],
                            ))
                          : d("", !0),
                      ]),
                      a("div", Dt, [
                        h(
                          S,
                          {
                            size: t(A),
                            target: "_blank",
                            ios: "",
                            onClick: t(i),
                          },
                          null,
                          8,
                          ["size", "onClick"],
                        ),
                        h(
                          S,
                          {
                            size: t(A),
                            target: "_blank",
                            android: "",
                            onClick: t(n),
                          },
                          null,
                          8,
                          ["size", "onClick"],
                        ),
                      ]),
                    ],
                    64,
                  ))
                : t(K)
                  ? (l(),
                    b("div", zt, [
                      a("div", Bt, [
                        t(_)
                          ? (l(),
                            g(
                              D,
                              {
                                key: 0,
                                title: t(_),
                                "content-align": t(T),
                                size: "xs",
                                paint: t($),
                              },
                              null,
                              8,
                              ["title", "content-align", "paint"],
                            ))
                          : d("", !0),
                        a("div", qt, [
                          h(x, {
                            image: {
                              url: "/images/wifi/ofertas.png",
                              alt: "Ofertas",
                            },
                            "wrapper-class": "w-[88px] h-[88px]",
                          }),
                          a("div", At, [
                            L(y(t(e)("wifi.row1.title")) + " ", 1),
                            a("span", It, y(t(e)("wifi.row1.bold")), 1),
                            L(" " + y(t(e)("wifi.row1.description")), 1),
                          ]),
                        ]),
                        a("div", Nt, [
                          h(x, {
                            image: {
                              url: "/images/wifi/puntos.png",
                              alt: "Puntos",
                            },
                            "wrapper-class": "w-[88px] h-[88px]",
                          }),
                          a("div", St, [
                            L(y(t(e)("wifi.row2.title")) + " ", 1),
                            a("span", Rt, y(t(e)("wifi.row2.bold")), 1),
                          ]),
                        ]),
                        a("div", Et, [
                          h(x, {
                            image: {
                              url: "/images/wifi/myorder.png",
                              alt: "Pide y Paga",
                            },
                            "wrapper-class": "w-[88px] h-[88px]",
                          }),
                          a("div", Ht, [
                            L(y(t(e)("wifi.row3.title")) + " ", 1),
                            a("span", Gt, y(t(e)("wifi.row3.bold")), 1),
                          ]),
                        ]),
                      ]),
                      t(u) && t(u)?.url && t(u)?.label
                        ? (l(),
                          g(
                            R,
                            {
                              key: 0,
                              to: t(u).url,
                              label: t(u).label,
                              class: "w-full tablet:w-fit",
                              onClick: t(u).onClick,
                            },
                            null,
                            8,
                            ["to", "label", "onClick"],
                          ))
                        : d("", !0),
                    ]))
                  : (l(),
                    b(
                      E,
                      { key: 2 },
                      [
                        t(_)
                          ? (l(),
                            g(
                              D,
                              {
                                key: 0,
                                title: t(_),
                                "content-align": t(T),
                                size: "xs",
                                paint: t($),
                              },
                              {
                                description: C(() => [
                                  t(P)
                                    ? (l(),
                                      g(
                                        N,
                                        { key: 0, "rich-text": t(P) },
                                        null,
                                        8,
                                        ["rich-text"],
                                      ))
                                    : d("", !0),
                                ]),
                                _: 1,
                              },
                              8,
                              ["title", "content-align", "paint"],
                            ))
                          : d("", !0),
                        a("div", Ut, [
                          t(m) && t(m).url
                            ? (l(),
                              g(
                                J,
                                {
                                  key: 0,
                                  image: {
                                    url: t(m).url,
                                    alt: t(m).alt || t(_),
                                  },
                                  size: t(V),
                                  static: !0,
                                  variant: "rectangle",
                                },
                                null,
                                8,
                                ["image", "size"],
                              ))
                            : d("", !0),
                          t(u) && t(u)?.url && t(u)?.label
                            ? (l(),
                              g(
                                R,
                                {
                                  key: 1,
                                  to: t(u).url,
                                  label: t(u).label,
                                  class: "w-full tablet:w-fit",
                                  onClick: t(u).onClick,
                                },
                                null,
                                8,
                                ["to", "label", "onClick"],
                              ))
                            : d("", !0),
                        ]),
                        h(
                          tt,
                          { wrapper: "main", slices: t(Q), components: t(xt) },
                          null,
                          8,
                          ["slices", "components"],
                        ),
                      ],
                      64,
                    )),
            ]))
          : d("", !0);
      };
    },
  }),
  jt = { class: "toast-content" },
  Ot = q({
    __name: "ToastNotification",
    setup(p) {
      const { showToast: o, toastMessage: e, toastType: s, close: i } = F();
      return (n, r) => (
        l(),
        g(
          wt,
          { name: "toast-fade" },
          {
            default: C(() => [
              t(o)
                ? (l(),
                  b(
                    "div",
                    { key: 0, class: ht(["custom-toast", `toast-${t(s)}`]) },
                    [
                      a("div", jt, [
                        a("span", null, y(t(e)), 1),
                        a(
                          "button",
                          {
                            class: "toast-close",
                            onClick:
                              r[0] || (r[0] = (...w) => t(i) && t(i)(...w)),
                          },
                          [
                            ...(r[1] ||
                              (r[1] = [
                                a(
                                  "svg",
                                  {
                                    viewBox: "0 0 24 24",
                                    width: "14",
                                    height: "14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                  [
                                    a("path", {
                                      d: "M4.22364 18.3639L10.5876 12L4.22363 5.63603L5.63785 4.22182L12.0018 10.5858L18.3657 4.2218L19.78 5.63602L13.416 12L19.7799 18.3639L18.3657 19.7782L12.0018 13.4142L5.63785 19.7781L4.22364 18.3639Z",
                                      fill: "currentColor",
                                    }),
                                  ],
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                      ]),
                    ],
                    2,
                  ))
                : d("", !0),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  Ft = rt(Ot, [["__scopeId", "data-v-4e1ce885"]]),
  Qt = {
    hamburguesasdevacuno: "hamburguesas_singluten",
    happymeallibredegluten: "happymeal_singluten",
    patatas: "complementos_singluten",
    postreslibresdegluten: "postres_singluten",
    granvariedaddeproductosdisponibles: "vermas_singluten",
    inclusivodiversoyautentico: "mycrewdiversidad",
    comunicacionmcdonaldsesmcdcom: "comunicacion_mcdonalds",
    tartadechocolatesingluten: "tartacumplenos_singluten",
    secciondepreguntasfrecuentes: "preguntasfrecuentes",
    happymeal: "masinfo_happymeal",
    menu4you: "masinfo_menú4you",
    carta: "masinfo_carta",
  };
function Vt(p) {
  return p
    .trim()
    .toLowerCase()
    .replace(/[®©™@\s.,]+/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
const Zt = () => {
    const { $gtmClickHipervinculo: p, $gtmFileDownload: o } = H();
    (M(() => {
      document.addEventListener("click", e);
    }),
      j(() => {
        document.removeEventListener("click", e);
      }));
    function e(s) {
      const i = bt(s.target);
      if (i) {
        s.stopPropagation();
        const n = i;
        if (n.href.toLowerCase().endsWith(".pdf")) {
          const r = decodeURIComponent(n.href)
            .split("/")
            .pop()
            ?.replace(/\.pdf$/i, "")
            .replace(/-/g, "")
            .replace(/pdf$/i, "");
          o(r || "", "pdf");
        } else {
          const r = Qt[Vt(n.text)] || n.text;
          p(r, n.href);
        }
      }
    }
  },
  z = "popup",
  Kt = () => {
    const p = W(null),
      o = G(),
      e = U();
    return (
      O(
        () => o.query[z],
        (n) => {
          n && s();
        },
      ),
      M(() => {
        o.query[z] && s();
      }),
      { modalPrismic: p, onCloseModal: i }
    );
    function s() {
      p.value?.openModal();
    }
    function i() {
      e.push({ query: Mt([z], o.query) });
    }
  },
  Xt = () => {
    const p = U(),
      o = G();
    (M(() => {
      document.addEventListener("click", e);
    }),
      j(() => {
        document.removeEventListener("click", e);
      }));
    function e(s) {
      const i = s.target?.closest("[data-popup]");
      if (i) {
        s.preventDefault();
        const n = i.getAttribute("data-popup");
        n && p.push({ path: o.path, query: { ...o.query, popup: n } });
      }
    }
  },
  _e = q({
    __name: "base",
    setup(p) {
      const o = pt(),
        e = F(),
        { locale: s } = B();
      (ct({ htmlAttrs: { lang: () => s.value } }),
        Xt(),
        Zt(),
        kt(),
        Ct(),
        Pt());
      const { modalPrismic: i, onCloseModal: n } = Kt();
      return (
        O(
          () => o.query.popup,
          (r) => {
            r === "wifi" &&
              setTimeout(() => {
                e.show({
                  message:
                    "Te has conectado correctamente a la Wifi de McDonald's.",
                  type: "success",
                  duration: 4e3,
                });
              }, 1e3);
          },
          { immediate: !0 },
        ),
        (r, w) => {
          const k = Wt,
            c = vt,
            _ = Ft;
          return (
            l(),
            b("div", null, [
              yt(r.$slots, "default"),
              h(
                c,
                {
                  ref_key: "modalPrismic",
                  ref: i,
                  "mobile-centered": "",
                  onClose: t(n),
                },
                {
                  default: C(() => [
                    h(
                      k,
                      {
                        "popup-id":
                          typeof t(o).query.popup == "string"
                            ? t(o).query.popup
                            : "",
                      },
                      null,
                      8,
                      ["popup-id"],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["onClose"],
              ),
              h(_),
            ])
          );
        }
      );
    },
  });
export { _e as default };
