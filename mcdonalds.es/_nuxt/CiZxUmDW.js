import { _ as E, k as A, A as y, I as q, j as B } from "./w36zW0QG.js";
import {
  l as S,
  A as D,
  Z as v,
  O as h,
  _ as m,
  N as _,
  P as z,
  a3 as w,
  Q as $,
  X as C,
  a2 as j,
  d as i,
  m as O,
  y as T,
  D as V,
  v as N,
} from "./CG2MQ2lF.js";
const R = S({
    name: "Modal",
    inheritAttrs: !1,
    props: {
      title: { type: String, default: "", required: !1 },
      titleAs: {
        type: String,
        default: () => y.default.as,
        validator(e) {
          return Object.keys(y.as).includes(e);
        },
      },
      description: { type: String, default: "", required: !1 },
      themeColor: {
        type: String,
        default: "white",
        validator: (e) => ["white", "coffee", "gold"].includes(e),
        required: !1,
      },
      hasOverlay: { type: Boolean, default: !0, required: !1 },
      class: { type: String, default: "", required: !1 },
      mobileCentered: { type: Boolean, default: !1, required: !1 },
      style: { type: Object, default: null, required: !1 },
    },
    emits: ["close"],
    setup(e, { emit: o }) {
      const l = i(!1),
        n = i(),
        a = i(),
        r = i(),
        u = i(!1),
        d = async () => {
          ((r.value = document.activeElement),
            (l.value = !0),
            (document.body.style.overflow = "hidden"),
            await N(),
            u.value && a.value && a.value && a.value.focus());
        },
        s = () => {
          ((l.value = !1),
            (document.body.style.overflow = ""),
            r.value && (r.value.focus(), (r.value = null)),
            o("close"));
        },
        g = (t) => {
          if (!n.value) return;
          const M = n.value.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            ),
            f = Array.from(M),
            p = f[0],
            b = f[f.length - 1];
          t.shiftKey
            ? document.activeElement === p && (t.preventDefault(), b?.focus())
            : document.activeElement === b && (t.preventDefault(), p?.focus());
        },
        c = (t) => {
          if (
            l.value &&
            (t.key === "Escape" && s(),
            t.key === "Tab" &&
              ((u.value = !0), !n.value.contains(document.activeElement)))
          ) {
            (t.preventDefault(), a.value.focus(), g(t));
            return;
          }
        },
        k = O(() => {
          const t =
            "top-0 left-0 w-full h-full flex justify-center items-center z-[99999] fixed";
          return e.class
            ? q(
                "w-full h-full flex justify-center items-center z-[99999] absolute",
                e.class,
              )
            : t;
        });
      return (
        T(() => {
          window.addEventListener("keydown", c);
        }),
        V(() => {
          (window.removeEventListener("keydown", c),
            l.value && (document.body.style.overflow = ""));
        }),
        {
          isVisible: l,
          openModal: d,
          closeModal: s,
          modalClass: k,
          handleKeyDown: c,
          modalRef: n,
          closeButtonRef: a,
        }
      );
    },
  }),
  F = ["aria-label"],
  I = { class: "modal-content custom-scrollbar" };
function K(e, o, l, n, a, r) {
  const u = B,
    d = A;
  return e.isVisible
    ? (h(),
      D(
        "div",
        {
          key: 0,
          ref: "modalRef",
          class: C([e.modalClass, e.hasOverlay ? "bg-black/50" : ""]),
          style: j(e.style),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": `Modal de ${e.title}`,
          onClick:
            o[1] ||
            (o[1] = w((...s) => e.closeModal && e.closeModal(...s), ["self"])),
        },
        [
          m(
            "div",
            {
              class: C([
                "modal-container",
                {
                  "bg-white text-black": e.themeColor === "white",
                  "bg-gradient-mccafe text-white": e.themeColor === "coffee",
                  "bg-surface-gold text-black": e.themeColor === "gold",
                  "bottom-0 rounded-t-16 modal-animation-up": !e.mobileCentered,
                  "bottom-auto rounded-16 modal-animation-down":
                    e.mobileCentered,
                },
              ]),
            },
            [
              m("div", I, [
                e.title || e.description
                  ? (h(),
                    _(
                      u,
                      {
                        key: 0,
                        "title-as": e.titleAs,
                        title: e.title,
                        description: e.description,
                        "content-align": (e.themeColor, "center"),
                        size: "xs",
                      },
                      null,
                      8,
                      ["title-as", "title", "description", "content-align"],
                    ))
                  : v("", !0),
                z(e.$slots, "default", {}, void 0, !0),
              ]),
              m(
                "button",
                {
                  ref: "closeButtonRef",
                  class: "absolute top-2 right-2 cursor-pointer close-btn",
                  "aria-label": "Cerrar modal",
                  onClick:
                    o[0] ||
                    (o[0] = w(
                      (...s) => e.closeModal && e.closeModal(...s),
                      ["stop"],
                    )),
                },
                [
                  $(
                    d,
                    {
                      "aria-hidden": "true",
                      class: "modal-close",
                      color: e.themeColor === "coffee" ? "white" : "black",
                      name: "controlsClose",
                      size: "xs",
                    },
                    null,
                    8,
                    ["color"],
                  ),
                ],
                512,
              ),
            ],
            2,
          ),
        ],
        14,
        F,
      ))
    : v("", !0);
}
const J = E(R, [
  ["render", K],
  ["__scopeId", "data-v-47b87e7e"],
]);
export { J as _ };
