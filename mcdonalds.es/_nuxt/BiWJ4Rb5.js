import { _ } from "./n9BDgNm5.js";
import { _ as h } from "./DhdId782.js";
import { _ as z } from "./DNNWU6PG.js";
import { _ as C } from "./3AjKDk5D.js";
import { u as v } from "./CiCdwUBr.js";
import { _ as B, A as b, I as j } from "./w36zW0QG.js";
import {
  l as S,
  A as s,
  O as t,
  P as k,
  _ as M,
  N as u,
  W as d,
  Q as c,
  X as p,
  Z as a,
  a1 as $,
  $ as A,
  a0 as T,
  m as i,
} from "./CG2MQ2lF.js";
const n = {
    default: { direction: "horizontal" },
    direction: {
      horizontal: "flex flex-row items-center justify-center gap-4 ",
      vertical: "flex flex-col items-center justify-center self-start gap-2",
    },
    size: {
      horizontal: "max-w-[328px] tablet:max-w-[348px] desktop:max-w-[373px]",
      vertical: "max-w-[156px] tablet:max-w-[224px] desktop:max-w-[208px]",
    },
  },
  D = S({
    inheritAttrs: !1,
    props: {
      image: { type: Object, default: null },
      title: { type: String, default: null },
      titleAs: {
        type: String,
        default: () => b.default.as,
        validator(e) {
          return Object.keys(b.as).includes(e);
        },
      },
      description: { type: String, default: null },
      direction: {
        type: String,
        default: () => n.default.direction,
        validator(e) {
          return Object.keys(n.direction).includes(e);
        },
      },
      link: { type: Object, default: null, required: !1 },
      useIllustration: { type: Boolean, default: !1, required: !1 },
      showBackgroundCircles: { type: Boolean, default: !1, required: !1 },
      isAllergens: { type: Boolean, default: !1, required: !1 },
      isWider: { type: Boolean, default: !1, required: !1 },
    },
    setup(e) {
      const l = v(),
        f = i(() => n.direction[e.direction]),
        m = i(() => !e.isWider && n.size[e.direction]),
        g = i(() => {
          const o = e.isAllergens
            ? "allergens"
            : e.isWider
              ? "wider"
              : "default";
          return {
            allergens: "w-[96px] tablet:w-[120px] desktop:w-[160px]",
            wider:
              "max-w-[328px] tablet:max-w-[226px] desktop:max-w-[373px] desktop:w-auto",
            default: "min-w-[96px] tablet:min-w-[120px] desktop:min-w-[160px]",
          }[o];
        }),
        w = i(() =>
          e.direction === "vertical"
            ? l.isMobile.value
              ? "148"
              : l.isTablet.value
                ? "216"
                : "160"
            : l.isMobile.value
              ? "96"
              : l.isTablet.value
                ? "120"
                : "160",
        );
      return {
        directionClass: f,
        directionSizeClass: m,
        illuSize: w,
        sizeClass: g,
        twJoin: j,
      };
    },
  }),
  q = {
    key: 0,
    class:
      "bg-gold-100 absolute rounded-full object-center w-24 h-24 tablet:w-36 tablet:h-36 desktop:w-28 desktop:h-28",
  },
  I = ["innerHTML"];
function N(e, l, f, m, g, w) {
  const o = _,
    r = h,
    y = z,
    x = C;
  return (
    t(),
    s(
      "div",
      {
        class: p([
          e.twJoin(e.directionClass, e.directionSizeClass, e.sizeClass),
          "h-full",
        ]),
      },
      [
        k(e.$slots, "image", {}, () => [
          e.useIllustration
            ? (t(),
              s(
                "div",
                {
                  key: 1,
                  class: p([
                    e.showBackgroundCircles && "bg-gold-200",
                    "p-4 rounded-full relative flex items-center justify-center",
                  ]),
                },
                [
                  c(
                    r,
                    { size: e.illuSize, class: "z-10" },
                    {
                      default: d(() => [
                        c(y, { "type-variant": e.image.url }, null, 8, [
                          "type-variant",
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["size"],
                  ),
                  e.showBackgroundCircles ? (t(), s("span", q)) : a("", !0),
                ],
                2,
              ))
            : (t(),
              u(
                r,
                { key: 0, size: e.illuSize },
                {
                  default: d(() => [
                    c(
                      o,
                      {
                        image: { url: e.image.url, alt: e.image.alt },
                        "wrapper-class": "w-full h-full object-contain",
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
              )),
        ]),
        M(
          "div",
          {
            class: p([
              "flex flex-col self-strech flex-1 h-full gap-2",
              e.direction === "horizontal"
                ? "justify-center items-start text-start"
                : "justify-start text-center items-center px-2",
            ]),
          },
          [
            e.title
              ? (t(),
                u(
                  T(e.titleAs),
                  {
                    key: 0,
                    class: "text-title-s tablet:text-title-m font-bold",
                  },
                  {
                    default: d(() => [
                      k(e.$slots, "title", {}, () => [$(A(e.title), 1)]),
                    ]),
                    _: 3,
                  },
                ))
              : a("", !0),
            e.description
              ? (t(),
                s(
                  "p",
                  {
                    key: 1,
                    class: "text-body-m tablet:text-body-l",
                    innerHTML: e.description,
                  },
                  null,
                  8,
                  I,
                ))
              : a("", !0),
            e.link && e.link.label && e.link.to
              ? (t(),
                u(
                  x,
                  {
                    key: 2,
                    target: e.link.to,
                    label: e.link.label,
                    "show-icon-right": "",
                  },
                  null,
                  8,
                  ["target", "label"],
                ))
              : a("", !0),
          ],
          2,
        ),
      ],
      2,
    )
  );
}
const E = B(D, [["render", N]]);
export { E as _ };
