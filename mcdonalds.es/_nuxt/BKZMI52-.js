import { _ as r } from "./w36zW0QG.js";
import {
  l as a,
  A as e,
  O as t,
  Z as n,
  U as l,
  Y as c,
  _ as i,
  $ as u,
} from "./CG2MQ2lF.js";
const p = a({
    props: {
      items: { type: Array, required: !0 },
      isDropdownOpen: { type: Boolean, required: !0 },
    },
    emits: ["click"],
  }),
  d = { class: "containerDropdown" },
  f = {
    key: 0,
    class:
      "absolute w-full bg-white mt-2 z-10 rounded-16 shadow-blur overflow-y-auto max-h-[200px] contentDropdown custom-scrollbar flex items-start flex-col justify-start text-start",
  },
  _ = ["onClick"];
function m(o, y, b, w, x, k) {
  return (
    t(),
    e("div", d, [
      o.isDropdownOpen
        ? (t(),
          e("ul", f, [
            (t(!0),
            e(
              l,
              null,
              c(
                o.items,
                (s) => (
                  t(),
                  e("li", { key: s.value, class: "w-full" }, [
                    i(
                      "button",
                      {
                        class:
                          "flex items-start w-full px-4 py-2 cursor-pointer hover:bg-surface-secondary text-text-secondary focus-visible:outline-black focus-visible:bg-surface-secondary",
                        onClick: (v) => o.$emit("click", s.value),
                      },
                      u(s.label),
                      9,
                      _,
                    ),
                  ])
                ),
              ),
              128,
            )),
          ]))
        : n("", !0),
    ])
  );
}
const g = r(p, [
  ["render", m],
  ["__scopeId", "data-v-ae4442f5"],
]);
export { g as _ };
