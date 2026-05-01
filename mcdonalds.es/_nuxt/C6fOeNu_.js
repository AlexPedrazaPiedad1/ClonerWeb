import { _ as h, I as y, k as S } from "./w36zW0QG.js";
import { _ as F } from "./BvM2kV3M.js";
import {
  l as _,
  A as x,
  O as i,
  N as d,
  Z as f,
  _ as z,
  P as D,
  X as g,
  m as l,
} from "./CG2MQ2lF.js";
const $ = _({
    name: "BaseLabel",
    components: {},
    inheritAttrs: !1,
    props: {
      type: {
        type: String,
        default: "default",
        validator: (e) => ["default", "contrast"].includes(e),
      },
      illustration: { type: String, default: "" },
      active: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      iconLeft: { type: String, default: "" },
      iconRight: { type: String, default: "" },
      transparent: { type: Boolean, default: !1 },
      blocked: { type: Boolean, default: !1 },
      size: {
        type: String,
        required: !1,
        default: "m",
        validator: (e) => ["s", "m"].includes(e),
      },
    },
    emits: ["click"],
    setup(e, { emit: n }) {
      const b = l(() => e.active && !e.disabled),
        m = l(() => e.disabled && !e.active),
        a = l(() =>
          e.transparent
            ? "transparent"
            : e.disabled
              ? "disabled"
              : e.active
                ? "active"
                : e.blocked
                  ? "blocked"
                  : "default",
        ),
        k = l(() => {
          const t =
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-black",
            s = `hover:outline hover:outline-1 ${e.type === "contrast" || e.transparent ? "hover:outline-mcd-gold" : "hover:outline-black"}`,
            u =
              e.size === "m"
                ? "min-w-[98px] max-w-[98px]"
                : "min-w-[74px] max-w-[74px]",
            r = e.illustration
              ? `box-content ${u} flex flex-col items-center justify-between gap-1 rounded-lg py-2`
              : "flex flex-row items-center w-fit gap-2 rounded-full px-4 py-2",
            c = {
              default: "outline outline-1 outline-border-neutral",
              active: "outline outline-2 outline-border-selector-selected",
              disabled:
                "outline outline-1 outline-[#D6D6D6] cursor-not-allowed",
              blocked:
                "outline outline-2 outline-[#FFEBB6] bg-[#F9F9F9] cursor-not-allowed",
              transparent: "",
            }[a.value],
            C = {
              default: "",
              active: "bg-mcd-gold",
              disabled: "cursor-not-allowed",
              blocked:
                "outline outline-2 outline-[#FFEBB6] bg-[#FFEBB6] cursor-not-allowed",
              transparent: "",
            }[a.value],
            B = e.type === "default" ? c : C,
            w = e.active && !e.illustration && "bg-mcd-gold";
          return y(t, s, r, B, w);
        }),
        o = l(() => {
          const t = "text-center text-body-m px-1",
            s = e.illustration ? "h-full" : "max-w-[200px]",
            u =
              ((e.illustration && e.size === "s") || !e.illustration) &&
              "truncate",
            r = e.active && "font-bold",
            c = (e.disabled || e.blocked) && "text-[#959595]";
          return y(t, u, s, r, c);
        });
      return {
        classes: k,
        isActive: b,
        isDisabled: m,
        contentClasses: o,
        currentState: a,
        handleClick: () => {
          !e.disabled && !e.blocked && n("click");
        },
      };
    },
  }),
  p = ["aria-disabled"];
function A(e, n, b, m, a, k) {
  const o = S,
    v = F;
  return (
    i(),
    x(
      "button",
      {
        class: g([e.classes, "text-center"]),
        role: "button",
        tabindex: "0",
        "aria-disabled": e.disabled || e.blocked,
        onClick:
          n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t)),
      },
      [
        e.iconLeft && !e.illustration
          ? (i(),
            d(o, { key: 0, name: e.iconLeft, size: "s" }, null, 8, ["name"]))
          : f("", !0),
        e.illustration
          ? (i(),
            d(
              v,
              {
                key: 1,
                illustration: e.illustration,
                size: "40",
                active: e.transparent ? !0 : e.isActive,
                disabled: e.isDisabled,
              },
              null,
              8,
              ["illustration", "active", "disabled"],
            ))
          : f("", !0),
        z(
          "span",
          { class: g([e.contentClasses, "w-full"]), style: {} },
          [D(e.$slots, "default")],
          2,
        ),
        e.iconRight && !e.illustration
          ? (i(),
            d(o, { key: 2, name: e.iconRight, size: "s" }, null, 8, ["name"]))
          : f("", !0),
      ],
      10,
      p,
    )
  );
}
const M = h($, [["render", A]]);
export { M as _ };
