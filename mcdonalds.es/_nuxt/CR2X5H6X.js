import { _ as n } from "./w36zW0QG.js";
import {
  l as o,
  A as r,
  O as d,
  P as c,
  a2 as p,
  X as u,
  m as s,
} from "./CG2MQ2lF.js";
const a = {
    default: { size: "m" },
    size: { s: "h-[3.68px]", m: "h-[5px]", l: "h-[9.2px]" },
  },
  f = o({
    name: "TabMarker",
    props: {
      static: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: () => a.default.size,
        validator(e) {
          return Object.keys(a.size).includes(e);
        },
      },
      disabled: { type: Boolean, default: !1 },
      isFull: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = s(() => e.static),
        i = s(() => a.size[e.size]),
        l = s(() => e.disabled);
      return { isStatic: t, sizeClass: i, isDisabled: l };
    },
  });
function m(e, t, i, l, b, z) {
  return (
    d(),
    r(
      "span",
      {
        class: u([
          e.isStatic ? "tabmarker-static" : "tabmarker",
          e.isFull ? "tabmarker-static-full" : "",
          e.sizeClass,
          e.isDisabled ? "tabmarker-disabled" : "",
        ]),
        style: p({
          position: "relative",
          display: "inline-block",
          pointerEvents: e.isDisabled ? "none" : "auto",
        }),
      },
      [c(e.$slots, "default", {}, void 0, !0)],
      6,
    )
  );
}
const y = n(f, [
  ["render", m],
  ["__scopeId", "data-v-cea25656"],
]);
export { y as _ };
