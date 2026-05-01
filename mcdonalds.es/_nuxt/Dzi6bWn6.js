import { _ as i, k as c, A as a, D as p } from "./w36zW0QG.js";
import { u as d } from "./CiCdwUBr.js";
import {
  l as u,
  A as m,
  O as o,
  N as f,
  _,
  W as b,
  a1 as y,
  $ as A,
  a0 as g,
  Q as k,
  X as x,
  aa as h,
  m as n,
} from "./CG2MQ2lF.js";
const B = u({
    name: "AccordionHeadline",
    components: {},
    inheritAttrs: !1,
    props: {
      title: { type: String, default: null },
      titleAs: {
        type: String,
        default: () => a.default.as,
        validator(e) {
          return Object.keys(a.as).includes(e);
        },
      },
      disabled: { type: Boolean, default: !1 },
      class: { type: [String, Object, Array], default: () => "" },
      isPanelOpen: { type: Boolean, default: !1 },
    },
    setup() {
      const e = d(),
        t = h(),
        s = n(() => (e.isDesktop.value ? "2xl" : "l"));
      return { attrs: n(() => p(t, ["class"])), iconSize: s };
    },
  }),
  C = {
    class:
      "flex px-2 py-3 self-strech gap-3 justify-between items-center w-full",
  },
  D = ["aria-label"];
function O(e, t, s, l, S, $) {
  const r = c;
  return (
    o(),
    m("div", C, [
      (o(),
      f(
        g(e.titleAs),
        { class: "font-bold text-title-xs desktop:text-title-m" },
        { default: b(() => [y(A(e.title), 1)]), _: 1 },
      )),
      _(
        "div",
        {
          role: "img",
          "aria-label": e.isPanelOpen
            ? "Cerrar desplegable"
            : "Abrir desplegable",
        },
        [
          k(
            r,
            {
              color: "black",
              size: e.iconSize,
              name: "customArrowDown",
              "aria-hidden": "true",
              class: x({
                "transition-transform duration-300 ease-in-out p-0": !0,
                "-rotate-180": e.isPanelOpen,
              }),
            },
            null,
            8,
            ["size", "class"],
          ),
        ],
        8,
        D,
      ),
    ])
  );
}
const N = i(B, [["render", O]]);
export { N as _ };
