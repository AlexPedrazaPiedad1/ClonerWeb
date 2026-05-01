import { _ as o, A as t, X as s, E as c, I as u } from "./w36zW0QG.js";
import {
  l as d,
  N as f,
  O as p,
  W as g,
  P as m,
  X as _,
  a0 as y,
  m as h,
} from "./CG2MQ2lF.js";
const w = d({
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
        return c(u(a, i, n, l), e.class);
      }),
    };
  },
});
function x(e, r, a, i, n, l) {
  return (
    p(),
    f(
      y(e.as),
      { class: _(e.textClass) },
      { default: g(() => [m(e.$slots, "default")]), _: 3 },
      8,
      ["class"],
    )
  );
}
const b = o(w, [["render", x]]);
export { b as _ };
