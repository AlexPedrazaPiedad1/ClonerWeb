import { _ as p } from "./w36zW0QG.js";
import {
  l as d,
  A as t,
  O as s,
  _ as i,
  Z as f,
  P as o,
  X as n,
} from "./CG2MQ2lF.js";
const u = d({
    name: "BaseCollapsiblePanel",
    props: {
      customClass: { type: [String, Object, Array], default: "" },
      isPanelOpen: { type: Boolean, default: !1 },
      separator: { type: Boolean, default: !1 },
      transparent: { type: Boolean, default: !1 },
      noSidePadding: { type: Boolean, default: !1 },
    },
    emits: ["toggle"],
    setup(e, { emit: a }) {
      return {
        togglePanel: () => {
          a("toggle");
        },
        noSidePaddingProp: e.noSidePadding,
      };
    },
  }),
  g = ["aria-expanded"];
function P(e, a, r, b, m, c) {
  return (
    s(),
    t(
      "div",
      {
        class: n([
          [e.customClass, e.transparent ? "bg-transparent" : "bg-white"],
          "w-full pt-2 flex flex-col items-start gap-2",
        ]),
      },
      [
        i(
          "button",
          {
            class: n([
              "w-full cursor-pointer text-start collapsible-panel",
              e.separator && !e.isPanelOpen
                ? "border-b border-border-soft"
                : "",
            ]),
            type: "button",
            "aria-expanded": e.isPanelOpen,
            onClick:
              a[0] || (a[0] = (...l) => e.togglePanel && e.togglePanel(...l)),
          },
          [o(e.$slots, "default", { isPanelOpen: e.isPanelOpen }, void 0, !0)],
          10,
          g,
        ),
        e.isPanelOpen
          ? (s(),
            t(
              "div",
              {
                key: 0,
                class: n([
                  [
                    e.separator && e.isPanelOpen
                      ? "border-b border-border-soft"
                      : "",
                    e.transparent ? "bg-transparent" : "bg-white",
                    e.noSidePaddingProp && "px-4",
                  ],
                  "flex pb-4 flex-col items-start self-stretch",
                ]),
              },
              [o(e.$slots, "content", {}, void 0, !0)],
              2,
            ))
          : f("", !0),
      ],
      2,
    )
  );
}
const B = p(u, [
  ["render", P],
  ["__scopeId", "data-v-da3caece"],
]);
export { B as _ };
