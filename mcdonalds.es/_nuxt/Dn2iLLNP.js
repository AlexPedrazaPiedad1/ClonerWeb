import { _ as g, D as _, k as y } from "./w36zW0QG.js";
import { _ as k } from "./9UZMSW1R.js";
import {
  l as C,
  aa as B,
  m as V,
  A as c,
  O as p,
  _ as a,
  Z as $,
  V as v,
  P as w,
  a1 as u,
  $ as f,
  Q as h,
  W as S,
} from "./CG2MQ2lF.js";
const W = {
    container: "w-4 h-4 tablet:w-5 tablet:h-5",
    iconWidth: "w-[4px] tablet:w-[8px]",
    iconHeight: "h-[4px] tablet:h-[8px]",
    iconBorderWidth: "border-r border-b tablet:border-r-2 tablet:border-b-2",
  },
  x = C({
    name: "Checkbox",
    inheritAttrs: !1,
    props: {
      id: { type: String, default: "" },
      modelValue: { type: Boolean, default: !1 },
      label: { type: String, default: null },
      disabled: { type: Boolean, default: !1 },
      class: { type: [String, Object, Array], default: () => "" },
      error: { type: String, default: "" },
      feedbackMessage: { type: String, default: "" },
      rounded: { type: Boolean, default: !1 },
    },
    emits: ["update:modelValue"],
    setup(e, { emit: t }) {
      const n = B(),
        d = V(() => _(n, ["class"])),
        i = (b) => {
          const m = b.target;
          t("update:modelValue", m.checked);
        },
        { container: l, iconWidth: o, iconHeight: s, iconBorderWidth: r } = W;
      return {
        attrs: d,
        handleChange: i,
        inputClass: l,
        iconWidth: o,
        iconHeight: s,
        iconBorderWidth: r,
      };
    },
  }),
  A = { class: "flex flex-col gap-1 items-start" },
  D = { class: "flex items-start gap-2 justify-start" },
  N = ["id", "checked", "disabled", "aria-invalid", "aria-describedby"],
  H = ["for"],
  M = {
    key: 0,
    id: "feedback-message",
    class: "flex gap-1 items-center",
    role: "alert",
  };
function j(e, t, n, d, i, l) {
  const o = y,
    s = k;
  return (
    p(),
    c("div", A, [
      a("div", D, [
        a("div", null, [
          a(
            "input",
            v(
              {
                id: e.id,
                type: "checkbox",
                checked: e.modelValue,
                disabled: e.disabled,
                class: [e.inputClass, { "rounded-full": e.rounded }],
                "aria-invalid": !!e.error,
                "aria-describedby": e.error ? "feedback-message" : void 0,
                style: {
                  "--icon-width": e.iconWidth,
                  "--icon-height": e.iconHeight,
                  "--icon-border-width": e.iconBorderWidth,
                },
              },
              e.attrs,
              {
                onChange:
                  t[0] ||
                  (t[0] = (...r) => e.handleChange && e.handleChange(...r)),
              },
            ),
            null,
            16,
            N,
          ),
        ]),
        a(
          "label",
          { for: e.id, class: "flex items-start text-start" },
          [w(e.$slots, "default", {}, () => [u(f(e.label), 1)], !0)],
          8,
          H,
        ),
      ]),
      e.error
        ? (p(),
          c("div", M, [
            h(o, { name: "labelsError", color: "red", size: "s" }),
            h(
              s,
              { class: "text-red-600" },
              { default: S(() => [u(f(e.error), 1)]), _: 1 },
            ),
          ]))
        : $("", !0),
    ])
  );
}
const P = g(x, [
  ["render", j],
  ["__scopeId", "data-v-abac74b2"],
]);
export { P as _ };
