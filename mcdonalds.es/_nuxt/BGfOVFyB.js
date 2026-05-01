import { _ as u } from "./DNNWU6PG.js";
import { _ as d } from "./DhdId782.js";
import { _ as f } from "./9UZMSW1R.js";
import { _ as y } from "./D7a1xk7w.js";
import { _ as x, k as h, D as k } from "./w36zW0QG.js";
import {
  l as B,
  A as C,
  O as t,
  N as o,
  Z as D,
  _ as $,
  Q as s,
  W as n,
  a1 as a,
  $ as l,
  aa as g,
  m as M,
} from "./CG2MQ2lF.js";
const b = B({
    name: "DropdownHeadline",
    inheritAttrs: !1,
    props: {
      title: { type: String, default: null },
      disabled: { type: Boolean, default: !1 },
      bold: { type: Boolean, default: !1 },
      class: { type: [String, Object, Array], default: () => "" },
      isPanelOpen: { type: Boolean, default: !1 },
      icon: { type: String, default: null, required: !1 },
    },
    setup() {
      const e = g();
      return { attrs: M(() => k(e, ["class"])) };
    },
  }),
  v = { class: "flex w-full h-10 items-center gap-2 shrink-0 cursor-pointer" },
  w = { class: "flex py-1 flex-col justify-center items-start w-full" };
function N(e, r, A, O, P, S) {
  const _ = u,
    c = d,
    i = f,
    p = y,
    m = h;
  return (
    t(),
    C("div", v, [
      e.icon
        ? (t(),
          o(
            c,
            { key: 0, size: "40" },
            {
              default: n(() => [
                s(_, { "type-variant": e.icon }, null, 8, ["type-variant"]),
              ]),
              _: 1,
            },
          ))
        : D("", !0),
      $("div", w, [
        e.bold
          ? (t(),
            o(
              p,
              { key: 1, size: "xs", weight: "bold" },
              { default: n(() => [a(l(e.title), 1)]), _: 1 },
            ))
          : (t(),
            o(
              i,
              { key: 0, size: "l" },
              { default: n(() => [a(l(e.title), 1)]), _: 1 },
            )),
      ]),
      s(
        m,
        { name: e.isPanelOpen ? "controlsMinus" : "controlsPlus" },
        null,
        8,
        ["name"],
      ),
    ])
  );
}
const E = x(b, [
  ["render", N],
  ["__scopeId", "data-v-c5e5f228"],
]);
export { E as _ };
