import { _ as c, X as s, E as o, I as p } from "./w36zW0QG.js";
import {
  l as d,
  N as u,
  O as x,
  W as g,
  P as f,
  X as m,
  a0 as _,
  m as h,
} from "./CG2MQ2lF.js";
const t = {
    base: "",
    default: { as: "span", size: "m", weight: "regular" },
    as: { span: "", p: "", div: "" },
    size: {
      l: "text-[16px] leading-[24px] tracking-[0px]",
      m: "text-[14px] leading-[20px] tracking-[0px]",
      s: "text-[12px] leading-[18px] tracking-[0px]",
      xs: "text-[10px] leading-[12px] tracking-[0px]",
    },
  },
  w = d({
    inheritAttrs: !1,
    props: {
      class: { type: [String, Object, Array], default: () => "" },
      as: {
        type: String,
        default: () => t.default.as,
        validator(e) {
          return Object.keys(t.as).includes(e);
        },
      },
      italic: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: () => t.default.size,
        validator(e) {
          return Object.keys(t.size).includes(e);
        },
      },
      weight: {
        type: String,
        default: () => t.default.weight,
        validator(e) {
          return Object.keys(s.weight).includes(e);
        },
      },
    },
    setup(e) {
      return {
        textClass: h(() => {
          const a = t.base,
            i = t.size[e.size],
            n = s.weight[e.weight],
            l = e.italic ? s.italic : "";
          return o(p(a, i, n, l), e.class);
        }),
      };
    },
  });
function y(e, r, a, i, n, l) {
  return (
    x(),
    u(
      _(e.as),
      { class: m(e.textClass) },
      { default: g(() => [f(e.$slots, "default")]), _: 3 },
      8,
      ["class"],
    )
  );
}
const b = c(w, [["render", y]]);
export { b as _ };
