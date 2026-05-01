import { _ as v } from "./BvM2kV3M.js";
import { _ as x } from "./n9BDgNm5.js";
import { _ as z } from "./DhdId782.js";
import { _ as B } from "./9UZMSW1R.js";
import { _ as j } from "./D7a1xk7w.js";
import { _ as I, D as O, I as w } from "./w36zW0QG.js";
import {
  l as D,
  aa as $,
  m as t,
  A as C,
  O as s,
  _ as M,
  N as c,
  Z as S,
  Q as y,
  W as u,
  a1 as g,
  $ as h,
  X as o,
} from "./CG2MQ2lF.js";
const m = {
    textClass:
      "text-[#6F6F6F] hover:text-black focus-visible:text-black active:text-black active:font-bold",
    default: { size: "desktop" },
    size: { mobile: { photo: "56" }, desktop: { photo: "80" } },
  },
  A = D({
    name: "TabItem",
    inheritAttrs: !1,
    props: {
      label: { type: String, default: null },
      disabled: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: () => m.default.size,
        validator(e) {
          return ["mobile", "desktop"].includes(e);
        },
      },
      image: { type: Object, default: null },
      class: { type: [String, Object, Array], default: () => "" },
      active: { type: Boolean, default: !1 },
      useIllustration: { type: Boolean, default: !1, required: !1 },
      showIndicator: { type: Boolean, default: !1, required: !1 },
    },
    emits: ["click"],
    setup(e, { emit: a }) {
      const d = $(),
        f = t(() => O(d, ["class"])),
        p = t(() => e.class),
        _ = t(() => (e.image ? { url: e.image.url, alt: e.image.alt } : null)),
        l = t(() => m.size[e.size].photo),
        n = t(() => {
          const i = e.active,
            r = m.textClass;
          return w(r, i ? "font-bold text-black" : "");
        });
      return {
        attrs: f,
        baseClass: p,
        imageObj: _,
        photoSize: l,
        textClass: n,
        handleClick: () => {
          e.disabled || a("click");
        },
      };
    },
  }),
  N = { key: 0, class: "flex items-center justify-center" };
function T(e, a, d, f, p, _) {
  const l = v,
    n = x,
    b = z,
    i = B,
    r = j;
  return (
    s(),
    C(
      "button",
      {
        class: o([
          "flex items-center justify-center flex-col focus-visible:outline focus-visible:outline-border-white-focus cursor-pointer w-auto px-0.5",
          e.useIllustration && "desktop:min-w-[300px]",
        ]),
        role: "tab",
        onClick:
          a[0] || (a[0] = (...k) => e.handleClick && e.handleClick(...k)),
      },
      [
        M(
          "div",
          {
            class: o([
              e.active && e.showIndicator
                ? "tabmarker tabmarker-static tabmarker-static-full"
                : "",
              "flex flex-col items-center justify-center py-2 px-6",
            ]),
          },
          [
            e.useIllustration
              ? (s(),
                C("div", N, [
                  y(
                    l,
                    {
                      active: e.active,
                      disabled: "",
                      illustration: e.imageObj.url,
                      size: "64",
                      class: "mb-4",
                    },
                    null,
                    8,
                    ["active", "illustration"],
                  ),
                ]))
              : e.imageObj
                ? (s(),
                  c(
                    b,
                    { key: 1, size: e.photoSize },
                    {
                      default: u(() => [
                        y(
                          n,
                          {
                            image: { url: e.imageObj.url, alt: e.imageObj.alt },
                          },
                          null,
                          8,
                          ["image"],
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["size"],
                  ))
                : S("", !0),
            e.size === "mobile"
              ? (s(),
                c(
                  i,
                  { key: 2, as: "h2", size: "m", class: o(e.textClass) },
                  { default: u(() => [g(h(e.label), 1)]), _: 1 },
                  8,
                  ["class"],
                ))
              : (s(),
                c(
                  r,
                  { key: 3, as: "h2", size: "s", class: o(e.textClass) },
                  { default: u(() => [g(h(e.label), 1)]), _: 1 },
                  8,
                  ["class"],
                )),
          ],
          2,
        ),
      ],
      2,
    )
  );
}
const W = I(A, [
  ["render", T],
  ["__scopeId", "data-v-2e29cd0e"],
]);
export { W as _ };
