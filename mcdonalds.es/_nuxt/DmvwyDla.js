import {
  l as p,
  m as g,
  A as s,
  Z as l,
  O as o,
  U as f,
  Y as P,
  X as _,
  a1 as b,
  $ as h,
} from "./CG2MQ2lF.js";
import { _ as x } from "./w36zW0QG.js";
const k = { key: 0, class: "flex gap-2 items-center justify-center" },
  y = ["aria-label", "onClick"],
  v = { key: 0, class: "sr-only" },
  C = p({
    __name: "PaginationController",
    props: { currentPage: {}, totalPages: {} },
    emits: ["update:currentPage"],
    setup(c, { emit: u }) {
      const a = c,
        i = u,
        m = g(() => {
          const t = a.totalPages,
            n = a.currentPage,
            e = [];
          if (t <= 5) for (let r = 1; r <= t; r++) e.push(r);
          else {
            (e.push(1), n > 3 && e.push("..."));
            for (let r = Math.max(2, n - 1); r <= Math.min(t - 1, n + 1); r++)
              e.push(r);
            (n < t - 2 && e.push("..."), e.push(t));
          }
          return e;
        }),
        d = (t) => {
          if (t === "...") {
            a.currentPage < a.totalPages / 2
              ? i(
                  "update:currentPage",
                  Math.min(a.currentPage + 2, a.totalPages),
                )
              : i("update:currentPage", Math.max(a.currentPage - 2, 1));
            return;
          }
          typeof t == "number" &&
            t >= 1 &&
            t <= a.totalPages &&
            i("update:currentPage", t);
        };
      return (t, n) =>
        c.totalPages > 1
          ? (o(),
            s("div", k, [
              (o(!0),
              s(
                f,
                null,
                P(
                  m.value,
                  (e, r) => (
                    o(),
                    s(
                      "button",
                      {
                        key: r,
                        class: _([
                          "min-w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors bg-white cursor-pointer pag-btn",
                          e === c.currentPage
                            ? "border-2 border-yellow-400 text-black font-bold"
                            : "border text-[#6F6F6F] hover:border-border-neutral border-transparent active:border-black",
                        ]),
                        "aria-label":
                          e === "..." ? "Más páginas" : `Ir a página ${e}`,
                        onClick: (M) => d(e),
                      },
                      [
                        e === "..."
                          ? (o(), s("span", v, "Más páginas"))
                          : l("", !0),
                        b(" " + h(e), 1),
                      ],
                      10,
                      y,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : l("", !0);
    },
  }),
  N = x(C, [["__scopeId", "data-v-127ea27a"]]);
export { N as _ };
