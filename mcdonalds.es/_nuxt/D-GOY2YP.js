import { _ as j } from "./n9BDgNm5.js";
import { _ as M } from "./DNNWU6PG.js";
import { _ as I } from "./DhdId782.js";
import { _ as L, A as w, F as T, G as N, H as O, I as B } from "./w36zW0QG.js";
import { u as V } from "./CiCdwUBr.js";
import { c as t } from "./NMLSHX8I.js";
import {
  l as W,
  N as s,
  O as a,
  W as d,
  A as c,
  _ as H,
  Z as f,
  X as g,
  P as m,
  Q as p,
  a0 as z,
  a1 as E,
  $ as G,
  V as _,
  m as i,
} from "./CG2MQ2lF.js";
const F = W({
    components: { MCDLink: N },
    inheritAttrs: !1,
    props: {
      ...T,
      image: { type: Object, default: null },
      title: { type: String, default: null },
      titleAs: {
        type: String,
        default: () => w.default.as,
        validator(e) {
          return Object.keys(w.as).includes(e);
        },
      },
      description: { type: String, default: null },
      grid: {
        type: String,
        default: () => t.default.grid,
        validator(e) {
          return Object.keys(t.grid).includes(e);
        },
      },
      illustration: { type: String, default: null },
      active: { type: Boolean, default: !0 },
      activeBorder: { type: Boolean, default: !1 },
      forceActiveBorder: { type: Boolean, default: !1 },
      link: { type: Object, default: null },
      isProduct: { type: Boolean, default: !1 },
      isCover: { type: Boolean, default: !1 },
      isImageDecorative: { type: Boolean, default: !1 },
    },
    emits: ["card-click"],
    setup(e, { emit: u }) {
      const n = V(),
        h = i(() => O(e)),
        y = i(() => {
          const l = t.base,
            b = t.grid[e.grid].base;
          return B(l, b);
        }),
        C = i(() => {
          const l = t.image,
            b = t.grid[e.grid].imageContainer;
          return B(l, b);
        }),
        r = i(() => t.grid[e.grid].content.base),
        v = i(() => t.grid[e.grid].content.title),
        o = i(() => t.grid[e.grid].content.description),
        k = i(() => (n.isDesktop.value ? "160" : "120")),
        D = i(() =>
          e.grid === "overlay"
            ? n.isDesktop.value
              ? "296"
              : n.isTablet.value
                ? "272"
                : "232"
            : ["1/2", "1/3"].includes(e.grid)
              ? n.isDesktop.value
                ? "296"
                : "216"
              : e.grid === "1/4"
                ? n.isDesktop.value
                  ? "254"
                  : n.isTablet.value
                    ? "154"
                    : "148"
                : e.grid === "1/4/Mobile"
                  ? "148"
                  : "216",
        ),
        P = i(() => e.activeBorder || e.forceActiveBorder),
        S = i(
          () =>
            ((e.link?.to || e.link?.link_type || e.to) && e.active) ||
            e.onClick !== void 0,
        ),
        $ = i(() =>
          e.description
            ? /<(a|button|input|textarea)[^>]*>/i.test(e.description)
            : !1,
        ),
        A = i(() => S.value && !$.value);
      return {
        containerClass: y,
        contentClass: r,
        descriptionSize: o,
        imageContainerClass: C,
        titleSize: v,
        photoSize: k,
        photoSizeProduct: D,
        linkProps: h,
        showActiveBorder: P,
        isClickable: S,
        handleCardClick: (l) => {
          u("card-click", l);
        },
        shouldWrapWithLink: A,
      };
    },
  }),
  J = ["aria-hidden"],
  Q = ["aria-hidden"],
  X = ["innerHTML"],
  Z = { key: 3, class: "absolute inset-0 bg-white/40" };
function q(e, u, n, h, y, C) {
  const r = j,
    v = M,
    o = I;
  return (
    a(),
    s(
      z(e.shouldWrapWithLink ? "MCDLink" : "div"),
      _(
        { ...e.linkProps },
        {
          class: [
            "rounded-2xl overflow-hidden containerAnim bg-white relative text-black shadow-long-blur",
            [
              e.containerClass,
              {
                interactive: e.isClickable,
                "active-border": e.showActiveBorder,
                "hover:shadow-blur":
                  (e.link?.to || e.link?.link_type || e.to) && e.active,
                "focus-visible:outline-[#ffbc0d] focus-visible:outline-2":
                  e.link?.to || e.link?.link_type || e.to,
              },
            ],
          ],
          onClick: u[0] || (u[0] = (k) => e.handleCardClick(k)),
        },
      ),
      {
        default: d(() => [
          e.image && !e.isProduct && !e.isCover
            ? (a(),
              c(
                "div",
                {
                  key: 0,
                  "aria-hidden": e.isImageDecorative || void 0,
                  class: g([e.imageContainerClass]),
                },
                [
                  e.image && !e.isProduct
                    ? (a(),
                      s(
                        r,
                        {
                          key: 0,
                          image: { url: e.image.url, alt: e.image?.alt || "" },
                          "wrapper-class": [
                            "w-full h-full",
                            e.isProduct
                              ? "object-contain"
                              : e.grid === "1/4" ||
                                  e.grid === "1/3" ||
                                  e.grid === "1/4/Mobile" ||
                                  e.grid === "1/2"
                                ? "object-cover"
                                : "",
                          ],
                        },
                        null,
                        8,
                        ["image", "wrapper-class"],
                      ))
                    : e.illustration
                      ? (a(),
                        s(
                          o,
                          { key: 1, size: e.photoSize },
                          {
                            default: d(() => [
                              p(
                                v,
                                { "type-variant": e.illustration },
                                null,
                                8,
                                ["type-variant"],
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["size"],
                        ))
                      : f("", !0),
                  m(e.$slots, "badge"),
                  m(e.$slots, "badgeSecondary"),
                ],
                10,
                J,
              ))
            : e.isCover
              ? (a(),
                s(
                  o,
                  {
                    key: 1,
                    "aria-hidden": e.isImageDecorative || void 0,
                    size: e.photoSizeProduct,
                  },
                  {
                    default: d(() => [
                      p(
                        r,
                        {
                          image: { url: e.image.url, alt: e.image?.alt || "" },
                          "wrapper-class": "w-full h-full object-cover",
                        },
                        null,
                        8,
                        ["image"],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["aria-hidden", "size"],
                ))
              : (a(),
                c(
                  "div",
                  {
                    key: 2,
                    "aria-hidden": e.isImageDecorative || void 0,
                    class:
                      "w-full h-auto relative flex items-center justify-center",
                  },
                  [
                    p(
                      o,
                      { size: e.photoSizeProduct },
                      {
                        default: d(() => [
                          p(
                            r,
                            {
                              image: {
                                url: e.image.url,
                                alt: e.image?.alt || "",
                              },
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
                    ),
                    m(e.$slots, "badge"),
                    m(e.$slots, "badgeSecondary"),
                  ],
                  8,
                  Q,
                )),
          H(
            "div",
            { class: g(e.contentClass) },
            [
              e.title
                ? (a(),
                  s(
                    z(e.titleAs),
                    { key: 0, class: g([e.titleSize, "font-bold"]) },
                    { default: d(() => [E(G(e.title), 1)]), _: 1 },
                    8,
                    ["class"],
                  ))
                : f("", !0),
              e.description
                ? (a(),
                  c(
                    "p",
                    {
                      key: 1,
                      class: g(e.descriptionSize),
                      innerHTML: e.description,
                    },
                    null,
                    10,
                    X,
                  ))
                : f("", !0),
            ],
            2,
          ),
          e.active ? f("", !0) : (a(), c("div", Z)),
        ]),
        _: 3,
      },
      16,
      ["class"],
    )
  );
}
const ae = L(F, [["render", q]]);
export { ae as _ };
