import {
  _ as ae,
  k as H,
  u as ie,
  d as re,
  j as ce,
  m as ue,
} from "./w36zW0QG.js";
import { _ as de } from "./Dn2iLLNP.js";
import { _ as pe } from "./C6fOeNu_.js";
import { _ as fe } from "./s-lK3EGl.js";
import {
  l as K,
  A as d,
  O as r,
  _ as m,
  Q as h,
  X as N,
  d as b,
  m as me,
  y as U,
  D as ye,
  Z as A,
  u as n,
  U as V,
  Y as D,
  W as w,
  a1 as j,
  $ as v,
  N as F,
  v as he,
} from "./CG2MQ2lF.js";
import { V as q } from "./Dc0OakB1.js";
import { u as _e } from "./D87woA3U.js";
const ve = K({
    name: "SegmentedButton",
    props: {
      iconLeft: { type: String, required: !0 },
      iconRight: { type: String, required: !0 },
    },
    emits: ["change"],
    setup(o, { emit: _ }) {
      const g = b("left"),
        a = (y) => {
          ((g.value = y), _("change", y));
        },
        p = {
          solidMap: "Ver en mapa",
          solidBars: "Ver en lista",
          solidGrid: "Ver cuadriculado",
        },
        x = me(() => ({ iconLeft: p[o.iconLeft], iconRight: p[o.iconRight] }));
      return { selectedValue: g, updateValue: a, iconAriaLabels: x };
    },
  }),
  ge = { class: "inline-flex items-start" },
  be = ["aria-label"],
  ke = ["aria-label"];
function we(o, _, g, a, p, x) {
  const y = H;
  return (
    r(),
    d("div", ge, [
      m(
        "button",
        {
          class: N([
            "flex items-center justify-center h-10 gap-2 py-2 pl-6 pr-4 bg-white rounded-l-full cursor-pointer seg-button",
            {
              "border-[#FFD700] border-2 z-10": o.selectedValue === "left",
              "border border-[#ADADAD]": o.selectedValue !== "left",
              "mr-[-2px]": o.selectedValue === "left",
              "z-0": o.selectedValue === "right",
            },
          ]),
          "aria-label": o.iconAriaLabels.iconLeft,
          onClick: _[0] || (_[0] = (t) => o.updateValue("left")),
        },
        [
          h(
            y,
            { name: o.iconLeft, size: "s", "aria-hidden": "true" },
            null,
            8,
            ["name"],
          ),
        ],
        10,
        be,
      ),
      m(
        "button",
        {
          class: N([
            "flex items-center justify-center h-10 gap-2 py-2 pl-4 pr-6 bg-white rounded-r-full cursor-pointer seg-button",
            {
              "border-[#FFD700] border-2 z-10": o.selectedValue === "right",
              "border border-[#ADADAD]": o.selectedValue !== "right",
              "ml-[-2px]": o.selectedValue === "right",
              "z-0": o.selectedValue === "left",
            },
          ]),
          "aria-label": o.iconAriaLabels.iconRight,
          onClick: _[1] || (_[1] = (t) => o.updateValue("right")),
        },
        [
          h(
            y,
            { name: o.iconRight, size: "s", "aria-hidden": "true" },
            null,
            8,
            ["name"],
          ),
        ],
        10,
        ke,
      ),
    ])
  );
}
const xe = ae(ve, [
    ["render", we],
    ["__scopeId", "data-v-d5b0be5f"],
  ]),
  Ce = {
    class:
      "heading-filter w-full flex flex-col items-start self-stretch shadow-primary relative pt-8 pb-2 px-4 mb-2",
  },
  Ae = { class: "flex-1 overflow-y-auto bg-gray-50" },
  Ve = { class: "flex flex-col items-start justify-center gap-6 p-4" },
  Fe = { class: "flex flex-col gap-4 items-start justify-start w-full" },
  Be = { key: 0, class: "flex flex-col gap-4 w-full" },
  De = { class: "cursor-pointer" },
  $e = {
    key: 1,
    class:
      "flex flex-wrap gap-4 justify-start h-full items-stretch w-full [&>*]:cursor-pointer",
  },
  Se = { key: 0 },
  Le = { key: 1 },
  Me = { class: "flex justify-end w-full" },
  ze = { class: "flex justify-center gap-2 p-4 bg-white shadow-long-blur" },
  Ee = { class: "flex justify-between items-center w-full h-fit px-2" },
  Te = { key: 2, class: "flex gap-2 flex-wrap px-2" },
  Ke = K({
    __name: "index",
    props: {
      filterGroups: {},
      filterCodeMap: {},
      views: {},
      type: {},
      isBirthday: { type: Boolean },
      isBirthdayHome: { type: Boolean },
      filterBtnLabel: {},
    },
    emits: ["apply-filters", "change-view"],
    setup(o, { emit: _ }) {
      const g = _,
        a = o,
        { t: p } = ie(),
        x = _e(),
        y = b(!1),
        t = b([]),
        $ = b({}),
        S = b(),
        L = b(),
        P = b(),
        { $gtmClickBoton: C, $gtmFiltro: W } = re(),
        Y = (e) => {
          const l = e === "left" ? a.views.left : a.views.right;
          (g("change-view", l),
            C(
              l === "list"
                ? (a.type === "restaurant", "vista_lista")
                : a.type === "restaurant"
                  ? "vista_mapa"
                  : "vista_cuadricula",
            ));
        };
      ((t.value = a.filterGroups.flatMap((e) =>
        e.filters
          .filter((l) => l.preselected)
          .map((l) => ({ ...l, type: e.type })),
      )),
        U(() => {
          g("apply-filters", t.value);
        }));
      function Q() {
        ((t.value = t.value.filter((e) => e.preselected)),
          C((a.type === "restaurant", "borrarfiltro")));
      }
      function X() {
        ((t.value = t.value.filter((e) => e.preselected)),
          C((a.type === "restaurant", "borrarresultados")));
      }
      function M() {
        if ((B(), g("apply-filters", t.value), t.value.length === 0)) return;
        const e = Object.keys(a.filterCodeMap),
          l = t.value.map((c) => (c.type === "allergen" ? c.name : c.id)),
          f = e.every((c) => l.includes(c));
        let i;
        f
          ? (i = [a.type === "restaurant" ? "TS" : "TA"])
          : (i = t.value.map((c) =>
              c.type === "allergen"
                ? a.filterCodeMap[c.name] || c.name
                : a.filterCodeMap[c.id] || c.id,
            ));
        const k = i.join("_");
        W(k);
      }
      function Z() {
        (X(), M());
      }
      function z(e, l) {
        l.preselected ||
          (E(e, l.id)
            ? (t.value = [...t.value.filter((f) => f.id !== l.id)])
            : (t.value = [...t.value, { ...l, type: e }]));
      }
      function J(e, l) {
        (z(e, l), M());
      }
      function E(e, l) {
        return !!t.value.find((i) => i.type === e && i.id === l);
      }
      async function G() {
        ((P.value = document.activeElement),
          (y.value = !0),
          x.setIsOpen(!0),
          (document.body.style.overflow = "hidden"),
          C(
            a.type === "restaurant"
              ? a.isBirthday || a.isBirthdayHome
                ? "filtrorestaurantes_cumpleanos"
                : "filtrorestaurantes"
              : "filtroalergenos",
          ),
          await he(),
          L.value && L.value.focus());
      }
      function B() {
        ((y.value = !1),
          x.setIsOpen(!1),
          (document.body.style.overflow = "auto"));
      }
      function ee(e) {
        if (!S.value) return;
        const l = S.value.querySelectorAll(
            'button, [href], input, a, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
          f = Array.from(l),
          i = f[0],
          k = f[f.length - 1];
        e.shiftKey
          ? document.activeElement === i && (e.preventDefault(), k?.focus())
          : document.activeElement === k && (e.preventDefault(), i?.focus());
      }
      function I(e) {
        y.value && (e.key === "Escape" && B(), e.key === "Tab" && ee(e));
      }
      function te(e, l) {
        $.value[e] = l;
      }
      function R(e, l) {
        return $.value[l] ? e : e.slice(0, 5);
      }
      function le(e) {
        return e.length > 6;
      }
      function O(e) {
        return (
          t.value.filter((f) => f.type === e.type).length === e.filters.length
        );
      }
      function se(e) {
        const l = e.type;
        O(e)
          ? (t.value = t.value.filter((i) => i.type !== l || i.preselected))
          : (t.value = [
              ...t.value.filter((i) => i.type !== l),
              ...e.filters.map((i) => ({ ...i, type: l })),
            ]);
      }
      return (
        U(() => {
          window.addEventListener("keydown", I);
        }),
        ye(() => {
          window.removeEventListener("keydown", I);
        }),
        (e, l) => {
          const f = H,
            i = ce,
            k = de,
            c = pe,
            ne = fe,
            T = ue,
            oe = xe;
          return (
            r(),
            d(
              V,
              null,
              [
                n(y)
                  ? (r(),
                    d("div", {
                      key: 0,
                      class:
                        "fixed inset-0 bg-black/50 z-[9998] cursor-pointer",
                      onClick: B,
                    }))
                  : A("", !0),
                n(y)
                  ? (r(),
                    d(
                      "div",
                      {
                        key: 1,
                        ref_key: "modalRef",
                        ref: S,
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "Modal de filtros",
                        class:
                          "bg-white fixed top-0 left-0 shadow-blur z-[9999] w-screen min-h-screen flex flex-col h-screen desktop:left-auto desktop:right-0 desktop:w-[400px]",
                      },
                      [
                        m("div", Ce, [
                          m(
                            "button",
                            {
                              ref_key: "closeButtonRef",
                              ref: L,
                              "aria-label": "Cerrar panel de filtros",
                              class:
                                "cursor-pointer absolute top-2 right-2 focus-visible:border focus-visible:border-black",
                              onClick: B,
                            },
                            [
                              h(f, {
                                "aria-hidden": "true",
                                name: "controlsClose",
                                size: "m",
                              }),
                            ],
                            512,
                          ),
                          h(
                            i,
                            {
                              title: n(p)("search-filter-tool.filters"),
                              size: "sm",
                              "content-align": "left",
                            },
                            null,
                            8,
                            ["title"],
                          ),
                        ]),
                        m("div", Ae, [
                          m("div", Ve, [
                            (r(!0),
                            d(
                              V,
                              null,
                              D(
                                o.filterGroups,
                                (s) => (
                                  r(),
                                  d(
                                    "div",
                                    {
                                      key: s.key,
                                      class:
                                        "flex flex-col items-start justify-center gap-4 w-full",
                                    },
                                    [
                                      h(
                                        i,
                                        {
                                          title: s.title,
                                          size: "xs",
                                          "content-align": "left",
                                        },
                                        null,
                                        8,
                                        ["title"],
                                      ),
                                      m("div", Fe, [
                                        s.element === "checkbox"
                                          ? (r(),
                                            d("div", Be, [
                                              (r(!0),
                                              d(
                                                V,
                                                null,
                                                D(
                                                  R(s.filters, s.type),
                                                  (u) => (
                                                    r(),
                                                    F(
                                                      k,
                                                      {
                                                        id: u.id,
                                                        key: u.id,
                                                        "model-value": E(
                                                          s.type,
                                                          u.id,
                                                        ),
                                                        "onUpdate:modelValue":
                                                          () => z(s.type, u),
                                                      },
                                                      {
                                                        default: w(() => [
                                                          m(
                                                            "span",
                                                            De,
                                                            v(u.name),
                                                            1,
                                                          ),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      [
                                                        "id",
                                                        "model-value",
                                                        "onUpdate:modelValue",
                                                      ],
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ]))
                                          : (r(),
                                            d("div", $e, [
                                              h(
                                                c,
                                                {
                                                  illustration: "todos",
                                                  active: O(s),
                                                  onClick: (u) => se(s),
                                                },
                                                {
                                                  default: w(() => [
                                                    m(
                                                      "span",
                                                      null,
                                                      v(
                                                        n(p)(
                                                          "search-filter-tool.all",
                                                        ),
                                                      ),
                                                      1,
                                                    ),
                                                  ]),
                                                  _: 1,
                                                },
                                                8,
                                                ["active", "onClick"],
                                              ),
                                              (r(!0),
                                              d(
                                                V,
                                                null,
                                                D(
                                                  R(s.filters, s.type),
                                                  (u) => (
                                                    r(),
                                                    F(
                                                      c,
                                                      {
                                                        key: u.id,
                                                        illustration:
                                                          u.illustration,
                                                        active: E(s.type, u.id),
                                                        onClick: (je) =>
                                                          z(s.type, u),
                                                      },
                                                      {
                                                        default: w(() => [
                                                          s.type !== "allergen"
                                                            ? (r(),
                                                              d(
                                                                "span",
                                                                Se,
                                                                v(
                                                                  n(p)(
                                                                    `filters.${u.id}`,
                                                                  ),
                                                                ),
                                                                1,
                                                              ))
                                                            : (r(),
                                                              d(
                                                                "span",
                                                                Le,
                                                                v(u.name),
                                                                1,
                                                              )),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      [
                                                        "illustration",
                                                        "active",
                                                        "onClick",
                                                      ],
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ])),
                                        m("div", Me, [
                                          le(s.filters)
                                            ? (r(),
                                              F(
                                                ne,
                                                {
                                                  key: 0,
                                                  size: "s",
                                                  labels: {
                                                    more: n(p)(
                                                      "search-filter-tool.more",
                                                    ),
                                                    less: n(p)(
                                                      "search-filter-tool.less",
                                                    ),
                                                  },
                                                  "is-open": n($)[s.type],
                                                  "link-always-visible": !0,
                                                  "onUpdate:isOpen": (u) =>
                                                    te(s.type, u),
                                                },
                                                null,
                                                8,
                                                [
                                                  "labels",
                                                  "is-open",
                                                  "onUpdate:isOpen",
                                                ],
                                              ))
                                            : A("", !0),
                                        ]),
                                      ]),
                                    ],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ]),
                        m("div", ze, [
                          h(
                            T,
                            {
                              size: "s",
                              label: `${n(p)("search-filter-tool.clear")} (${n(t).length})`,
                              variant: "ghost",
                              disabled:
                                n(t).length === 0 ||
                                n(t).length ===
                                  n(t).filter((s) => s.preselected).length,
                              onClick: Q,
                            },
                            null,
                            8,
                            ["label", "disabled"],
                          ),
                          h(
                            T,
                            {
                              size: "s",
                              label: n(p)("search-filter-tool.apply"),
                              onClick: M,
                            },
                            null,
                            8,
                            ["label"],
                          ),
                        ]),
                      ],
                      512,
                    ))
                  : A("", !0),
                m("div", Ee, [
                  h(
                    T,
                    {
                      size: "s",
                      variant: "ghost",
                      "icon-name": "settingsSettings",
                      "icon-position": "right",
                      onClick: G,
                    },
                    {
                      default: w(() => [
                        j(
                          v(
                            a.filterBtnLabel ||
                              n(p)("search-filter-tool.filters"),
                          ) +
                            " " +
                            v(n(t).length ? `(${n(t).length})` : ""),
                          1,
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  h(
                    oe,
                    {
                      "icon-left": n(q)[a.views.left],
                      "icon-right": n(q)[a.views.right],
                      onChange: l[0] || (l[0] = (s) => Y(s)),
                    },
                    null,
                    8,
                    ["icon-left", "icon-right"],
                  ),
                ]),
                n(t).length > 0
                  ? (r(),
                    d("div", Te, [
                      (r(!0),
                      d(
                        V,
                        null,
                        D(
                          n(t),
                          (s) => (
                            r(),
                            F(
                              c,
                              {
                                key: s.id,
                                "icon-right": "controlsClose",
                                disabled: s.preselected,
                                onClick: (u) => J(s.type, s),
                              },
                              { default: w(() => [j(v(s.name), 1)]), _: 2 },
                              1032,
                              ["disabled", "onClick"],
                            )
                          ),
                        ),
                        128,
                      )),
                      n(t).some((s) => !s.preselected)
                        ? (r(),
                          F(
                            c,
                            {
                              key: 0,
                              "icon-left": n(t).every((s) => s.preselected)
                                ? ""
                                : "solidTrash",
                              onClick: Z,
                            },
                            {
                              default: w(() => [
                                j(v(n(p)("search-filter-tool.delete")), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["icon-left"],
                          ))
                        : A("", !0),
                    ]))
                  : A("", !0),
              ],
              64,
            )
          );
        }
      );
    },
  });
export { Ke as _ };
