import { _ as x } from "./3AjKDk5D.js";
import { _ as z, D as b } from "./w36zW0QG.js";
import {
  l as k,
  N as y,
  O as p,
  V as S,
  aa as O,
  m as t,
  A as f,
  _ as v,
  Z as $,
  W as B,
  P as A,
  a0 as M,
  X as g,
  Q as _,
  d as L,
  y as D,
  q as T,
} from "./CG2MQ2lF.js";
const n = {
    default: { color: "black", size: "md" },
    color: {
      black: { base: "black", other: "" },
      white: { base: "white", other: "" },
    },
    size: { sm: "xs", md: "sm" },
  },
  V = k({
    name: "LinkViewMore",
    inheritAttrs: !1,
    props: {
      label: { type: String, default: null },
      size: {
        type: String,
        default: () => n.default.size,
        validator(e) {
          return Object.keys(n.size).includes(e);
        },
      },
      color: {
        type: String,
        default: () => n.default.color,
        validator(e) {
          return Object.keys(n.color).includes(e);
        },
      },
      isBold: { type: Boolean, default: !1 },
      class: { type: [String, Object, Array], default: () => "" },
      isOpen: { type: Boolean, default: !1 },
    },
    emits: ["update:isOpen"],
    setup(e, { emit: o }) {
      const a = O(),
        i = t(() => b(a, ["class"])),
        r = t(() => n.size[e.size]),
        c = t(() => n.base),
        l = t(() => n.color[e.color].base),
        s = t(() => (e.isOpen ? "arrowsChevronUp" : "arrowsChevronDown"));
      return {
        attrs: i,
        linkClass: c,
        linkSize: r,
        iconColor: l,
        toggleOpen: () => o("update:isOpen", !e.isOpen),
        iconName: s,
      };
    },
  });
function j(e, o, a, i, r, c) {
  const l = x;
  return (
    p(),
    y(
      l,
      S(e.attrs, {
        label: e.label,
        size: e.linkSize,
        color: e.iconColor,
        "is-bold": e.isBold,
        "icon-right": e.iconName,
        "show-icon-right": "",
        onClick: e.toggleOpen,
      }),
      null,
      16,
      ["label", "size", "color", "is-bold", "icon-right", "onClick"],
    )
  );
}
const H = z(V, [["render", j]]),
  h = {
    default: { size: "md" },
    size: { s: "", m: "", l: "", xl: "", "2xl": "" },
  },
  N = k({
    name: "ExpandDropdown",
    inheritAttrs: !1,
    props: {
      text: { type: String, default: null },
      size: {
        type: String,
        default: () => h.default.size,
        validator(e) {
          return Object.keys(h.size).includes(e);
        },
      },
      color: { type: String, default: () => "black", required: !1 },
      isOpen: { type: Boolean, default: !1 },
      labels: {
        type: Object,
        default: () => ({ more: "Leer más", less: "Leer menos" }),
      },
      linkAlwaysVisible: { type: Boolean, default: !1 },
      textAlign: { type: String, default: () => "left", required: !1 },
    },
    emits: ["update:isOpen"],
    setup(e, { emit: o, slots: a }) {
      const i = t(() => !!a.text),
        r = O(),
        c = t(() => b(r, ["class"])),
        l = t(() => ({ s: "s", m: "m", l: "l", xl: "s", "2xl": "m" })),
        s = L(null),
        d = t(
          () =>
            e.linkAlwaysVisible ||
            (s.value && s.value.scrollHeight > s.value.clientHeight),
        ),
        m = () => {
          if (s.value) {
            const { scrollHeight: u, clientHeight: w } = s.value;
            d.value = u > w;
          }
        },
        C = t(() => {
          switch (e.textAlign) {
            case "left":
            default:
              return "text-left";
            case "right":
              return "text-right";
            case "center":
              return "text-center";
          }
        });
      return (
        D(() => {
          m();
        }),
        T(
          () => e.text,
          () => {
            m();
          },
        ),
        {
          attrs: c,
          textContainerRef: s,
          shouldShowLink: d,
          textProp: t(() => e.text),
          getSizeMapping: l,
          handleOpenChange: (u) => o("update:isOpen", u),
          hasTextSlot: i,
          textAlignClass: C,
        }
      );
    },
  }),
  P = ["innerHTML"],
  q = { key: 0, class: "flex justify-end" };
function E(e, o, a, i, r, c) {
  const l = H;
  return (
    p(),
    f(
      "div",
      {
        class: g([
          "flex flex-col gap-2",
          [
            e.size === "l" || e.size === "xl" || e.size === "2xl"
              ? "gap-3"
              : "gap-2",
            e.color === "white" ? "text-white" : "text-black",
            e.textAlignClass,
          ],
        ]),
      },
      [
        v(
          "div",
          { ref: "textContainerRef", class: g({ "line-clamp-2": !e.isOpen }) },
          [
            (p(),
            y(
              M(
                e.size === "xl" || e.size === "2xl"
                  ? "MCDTexTitle"
                  : "MCDTextBody",
              ),
              { size: e.getSizeMapping[e.size] },
              {
                default: B(() => [
                  e.hasTextSlot
                    ? A(e.$slots, "text", { key: 0 })
                    : (p(),
                      f("p", { key: 1, innerHTML: e.textProp }, null, 8, P)),
                ]),
                _: 3,
              },
              8,
              ["size"],
            )),
          ],
          2,
        ),
        e.shouldShowLink
          ? (p(),
            f("div", q, [
              _(
                l,
                {
                  size: e.size === "2xl" ? "md" : "sm",
                  label: e.isOpen ? e.labels.less : e.labels.more,
                  "is-open": e.isOpen,
                  color: e.color,
                  "onUpdate:isOpen": e.handleOpenChange,
                },
                null,
                8,
                ["size", "label", "is-open", "color", "onUpdate:isOpen"],
              ),
            ]))
          : $("", !0),
      ],
      2,
    )
  );
}
const W = z(N, [["render", E]]);
export { W as _, H as a };
