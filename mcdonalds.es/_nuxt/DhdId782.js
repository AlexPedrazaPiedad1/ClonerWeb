import { _ as i, E as c } from "./w36zW0QG.js";
import {
  l as r,
  A as x,
  O as l,
  P as d,
  a2 as m,
  X as u,
  m as t,
} from "./CG2MQ2lF.js";
const s = {
    base: "flex justify-center items-center object-contain",
    default: { size: "40" },
    size: {
      40: "40px",
      56: "56px",
      64: "64px",
      72: "72px",
      76: "76px",
      80: "80px",
      96: "96px",
      120: "120px",
      148: "148px",
      154: "154px",
      160: "160px",
      180: "180px",
      216: "216px",
      224: "224px",
      232: "232px",
      235: "235px",
      240: "240px",
      276: "276px",
      254: "254px",
      272: "272px",
      296: "296px",
      328: "328px",
      400: "400px",
      472: "472px",
      560: "560px",
      854: "854px",
    },
  },
  f = r({
    name: "Photo",
    props: {
      class: { type: [String, Object, Array], default: "" },
      size: {
        type: String,
        default: () => s.default.size,
        validator(e) {
          return Object.keys(s.size).includes(e);
        },
      },
    },
    setup(e) {
      const a = t(() => s.size[e.size]),
        p = t(() => s.size[e.size]);
      return {
        className: t(() => {
          const n = s.base;
          return c(n, e.class);
        }),
        width: a,
        height: p,
      };
    },
  });
function _(e, a, p, o, n, h) {
  return (
    l(),
    x(
      "div",
      { class: u(e.className), style: m({ width: e.width, height: e.height }) },
      [d(e.$slots, "default")],
      6,
    )
  );
}
const y = i(f, [
  ["render", _],
  ["__scopeId", "data-v-dc20607a"],
]);
export { y as _ };
