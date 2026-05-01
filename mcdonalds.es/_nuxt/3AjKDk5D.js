import {
  _ as I,
  k as _,
  F as S,
  G as y,
  D as B,
  H as L,
  I as N,
} from "./w36zW0QG.js";
import { _ as k } from "./9UZMSW1R.js";
import { _ as v } from "./D7a1xk7w.js";
import {
  l as D,
  N as n,
  O as s,
  W as d,
  Z as m,
  P as $,
  X as R,
  V as M,
  aa as T,
  m as t,
  a1 as g,
  $ as p,
} from "./CG2MQ2lF.js";
const o = {
    base: "flex flex-row items-center justify-start gap-1 hover:border-b  active:border-none disabled:border-none w-fit cursor-pointer border-b border-transparent focus-visible:outline focus-visible:outline-border-white-focus",
    baseNoIcon:
      "flex flex-row items-center justify-start gap-1 w-fit cursor-pointer border-b-0 focus-visible:outline focus-visible:outline-border-white-focus",
    default: { color: "black", size: "md" },
    color: {
      black: {
        base: "text-black disabled:text-text-link-disabled",
        other:
          "hover:border-black hover:text-black  disabled:border-none disabled:text-text-link-disabled disabled:hover:border-none",
        otherNoIcon:
          "hover:underline hover:decoration-black disabled:no-underline",
      },
      white: {
        base: "text-white disabled:text-text-link-disabled focus-visible:outline focus-visible:outline-border-white-focus",
        other:
          "hover:border-border-subtle hover:text-white  disabled:border-none disabled:text-text-link-disabled disabled:hover:border-none",
        otherNoIcon:
          "hover:underline hover:decoration-white disabled:no-underline",
      },
      gray: {
        base: "text-gray-500 disabled:text-text-green-disabled focus-visible:outline focus-visible:outline-border-white-focus",
        other:
          "hover:border-black hover:text-black  active:text-text-link-secondary-active disabled:border-none disabled:text-text-green-disabled disabled:hover:border-none",
        otherNoIcon:
          "hover:underline hover:decoration-gray-500 disabled:no-underline",
      },
    },
    size: {
      xs: { text: "m", icon: "s" },
      sm: { text: "l", icon: "s" },
      md: { text: "s", icon: "s" },
      lg: { text: "m", icon: "m" },
      xl: { text: "l", icon: "l" },
    },
  },
  P = D({
    components: { MCDLink: y, MCDTextBody: k, MCDTextTitle: v },
    inheritAttrs: !1,
    props: {
      ...S,
      type: { type: String, default: "button" },
      label: { type: String, default: null },
      loading: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      showIconLeft: { type: Boolean, default: !1 },
      showIconRight: { type: Boolean, default: !1 },
      animate: { type: Boolean, default: !0 },
      size: {
        type: String,
        default: () => o.default.size,
        validator(e) {
          return Object.keys(o.size).includes(e);
        },
      },
      color: {
        type: String,
        default: () => o.default.color,
        validator(e) {
          return Object.keys(o.color).includes(e);
        },
      },
      iconLeft: {
        type: String,
        default: () => "arrowsChevronLeft",
        required: !1,
      },
      iconRight: {
        type: String,
        default: () => "arrowsChevronRight",
        required: !1,
      },
      class: { type: [String, Object, Array], default: () => "" },
      isBold: { type: Boolean, default: !1 },
    },
    setup(e) {
      const c = T(),
        u = t(() => B(c, ["class"])),
        b = t(() => L(e)),
        f = t(() => o.size[e.size].text || o.size[o.default.size].text),
        h = t(() => o.size[e.size].icon || o.size[o.default.size].icon),
        i = t(() => {
          const l = e.showIconLeft || e.showIconRight ? "base" : "baseNoIcon",
            w = e.showIconLeft || e.showIconRight ? "other" : "otherNoIcon",
            z = o[l],
            x = o.color[e.color].base,
            C = o.color[e.color][w];
          return N(z, x, C, e.class);
        }),
        r = t(() => (e.animate ? "icon-link" : "")),
        a = t(() => o.color[e.color].base);
      return {
        attrs: u,
        linkProps: b,
        linkClass: i,
        textSize: f,
        iconSize: h,
        animationClass: r,
        iconColor: a,
      };
    },
  });
function j(e, c, u, b, f, h) {
  const i = _,
    r = k,
    a = v,
    l = y;
  return (
    s(),
    n(
      l,
      M(
        {
          class: [
            "mcd-base-link",
            [e.linkClass, { "has-icon": e.showIconLeft || e.showIconRight }],
          ],
          type: e.type,
          disabled: e.disabled || e.loading,
        },
        { ...e.linkProps, ...e.attrs },
      ),
      {
        default: d(() => [
          e.showIconLeft
            ? (s(),
              n(
                i,
                {
                  key: 0,
                  name: e.iconLeft,
                  size: e.iconSize,
                  color: e.iconColor,
                  class: R(e.animationClass),
                  "aria-hidden": "true",
                },
                null,
                8,
                ["name", "size", "color", "class"],
              ))
            : m("", !0),
          $(
            e.$slots,
            "default",
            {},
            () => [
              e.size === "xs" || e.size === "sm"
                ? (s(),
                  n(
                    r,
                    {
                      key: 0,
                      size: e.textSize,
                      weight: e.isBold ? "bold" : "regular",
                    },
                    { default: d(() => [g(p(e.label), 1)]), _: 1 },
                    8,
                    ["size", "weight"],
                  ))
                : (s(),
                  n(
                    a,
                    {
                      key: 1,
                      size: e.textSize,
                      weight: e.isBold ? "bold" : "regular",
                    },
                    { default: d(() => [g(p(e.label), 1)]), _: 1 },
                    8,
                    ["size", "weight"],
                  )),
            ],
            !0,
          ),
          e.showIconRight
            ? (s(),
              n(
                i,
                {
                  key: 1,
                  name: e.iconRight,
                  size: e.iconSize,
                  color: e.iconColor,
                  "aria-hidden": "true",
                },
                null,
                8,
                ["name", "size", "color"],
              ))
            : m("", !0),
        ]),
        _: 3,
      },
      16,
      ["type", "disabled", "class"],
    )
  );
}
const F = I(P, [
  ["render", j],
  ["__scopeId", "data-v-7ef2645a"],
]);
export { F as _ };
