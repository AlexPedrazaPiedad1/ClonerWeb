import { _ as q, k as O, D as T, E as Q } from "./w36zW0QG.js";
import { _ as X } from "./9UZMSW1R.js";
import {
  l as G,
  A as d,
  O as s,
  Z as f,
  _ as $,
  $ as v,
  V as J,
  X as B,
  U as N,
  a1 as E,
  Q as S,
  N as K,
  W as Y,
  aa as _,
  m as b,
  d as A,
  q as ee,
} from "./CG2MQ2lF.js";
const c = {
    base: "h-12 w-full w-min-[328px] pl-4 pr-2 py-2 gap-4 items-center bg-surface-primary border border-border-neutral justify-between flex items-center text-text-secondary",
    default: "border-border-neutral text-text-secondary cursor-pointer",
    hover: "hover:border-black hover:text-black cursor-pointer",
    focus: "focus-visible:border-black cursor-pointer",
    active: "active:border-black active:text-black cursor-pointer",
    filled: "text-black",
    disabled:
      "disabled:border-border-neutral-disabled disabled:text-text-tertiary disabled:hover:border-border-neutral-disabled disabled:cursor-not-allowed",
    error: "text-text-error border-text-error ",
    loading: "",
    icon: {
      default: "text-text-secondary",
      disabled: "text-icon-secondary-disabled",
      error: "text-icon-error",
    },
  },
  le = G({
    inheritAttrs: !1,
    props: {
      modelValue: { type: [String, Array], default: "" },
      placeholder: { type: String, default: "" },
      type: { type: String, default: "text" },
      validation: { type: Function, default: null },
      error: { type: String, default: "" },
      icon: { type: String, default: "arrowsChevronRight" },
      class: { type: [String, Object, Array], default: () => "" },
      loading: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      label: { type: String, default: "" },
      readonly: { type: Boolean, default: !1 },
      hideIcon: { type: Boolean, default: !1 },
      maxFileSize: { type: Number, default: 5242880 },
      allowedFormats: {
        type: Array,
        default: () => ["image/jpeg", "image/png", "image/gif"],
      },
      multiple: { type: Boolean, default: !1 },
      maxFiles: { type: Number, default: 3 },
    },
    emits: ["update:modelValue", "submit", "clear", "error", "icon-click"],
    setup(e, { emit: l }) {
      const z = _(),
        L = b(() => T(z, ["class"])),
        a = A(""),
        h = A([]),
        r = A(),
        g = A(!1),
        i = (o) => {
          const t = o.target.value;
          l("update:modelValue", t);
        },
        x = () => {
          const o = Array.isArray(e.modelValue)
            ? e.modelValue.join(",")
            : e.modelValue;
          (!e.validation || e.validation(o)) && (l("submit"), l("icon-click"));
        },
        I = () => {
          (l("update:modelValue", e.multiple ? [] : ""),
            (h.value = []),
            (a.value = ""),
            l("clear"),
            l("error", ""),
            e.type === "upload" && r.value && (r.value.value = ""));
        },
        M = b(() => e.type === "search"),
        p = b(() => !!(e.error || a.value)),
        j = b(() => {
          const o = e.multiple
              ? Array.isArray(e.modelValue) && e.modelValue.length > 0
              : !!e.modelValue,
            t = [
              c.base,
              c.default,
              o && c.filled,
              e.disabled && c.disabled,
              p.value && c.error,
              e.loading && c.loading,
              e.type === "search" ? "rounded-full" : "rounded-8",
            ];
          return (
            !e.disabled && !p.value && t.push(c.hover, c.focus, c.active),
            g.value && t.push("border-black text-black"),
            Q(...t.filter(Boolean), e.class)
          );
        }),
        U = b(() =>
          e.type === "upload" &&
          ((e.multiple &&
            Array.isArray(e.modelValue) &&
            e.modelValue.length > 0) ||
            (!e.multiple && e.modelValue))
            ? "#000000"
            : e.disabled
              ? c.icon.disabled
              : p.value
                ? c.icon.error
                : c.icon.default,
        ),
        D = b(() =>
          e.type === "upload" &&
          ((e.multiple &&
            Array.isArray(e.modelValue) &&
            e.modelValue.length > 0) ||
            (!e.multiple && e.modelValue))
            ? "#000000"
            : "#ADADAD",
        ),
        P = b(() =>
          e.loading
            ? "spinner"
            : M.value
              ? "controlsSearch"
              : e.type === "upload"
                ? "solidUpload"
                : e.icon,
        ),
        Z = b(() => ({
          search: e.disabled ? "Accion deshabilitada" : "Buscar",
          text: e.disabled ? "Accion deshabilitada" : "Enviar",
          upload: e.disabled
            ? "Accion deshabilitada"
            : e.multiple
              ? `Subir archivos (máximo ${e.maxFiles})`
              : "Subir archivo",
          clear: "Limpiar barra de búsqueda",
        })),
        H = (o) => {
          const t = o.target.files;
          if (t && t.length > 0) {
            if (
              ((a.value = ""),
              l("error", ""),
              e.multiple && t.length > e.maxFiles)
            ) {
              ((a.value = `Solo se permiten máximo ${e.maxFiles} archivos`),
                l("error", a.value),
                r.value && (r.value.value = ""));
              return;
            }
            if (!e.multiple && t.length > 1) {
              ((a.value = "Solo se permite un archivo"),
                l("error", a.value),
                r.value && (r.value.value = ""));
              return;
            }
            const y = e.allowedFormats.map((n) =>
                n.split("/")[1].toUpperCase(),
              ),
              m = [],
              u = [];
            if (
              (Array.from(t).forEach((n) => {
                if (!e.allowedFormats.includes(n.type)) {
                  u.push(
                    `El archivo "${n.name}" tiene un formato no válido. Formatos aceptados: ${y.join(", ")}`,
                  );
                  return;
                }
                if (n.size > e.maxFileSize) {
                  const w = Math.ceil(e.maxFileSize / 1048576);
                  u.push(
                    `El archivo "${n.name}" excede el tamaño máximo de ${w}MB`,
                  );
                  return;
                }
                m.push(n);
              }),
              u.length > 0)
            ) {
              ((a.value = u.join(". ")),
                l("error", a.value),
                r.value && (r.value.value = ""));
              return;
            }
            const C = [],
              F = [],
              V = (n) =>
                new Promise((w, W) => {
                  const k = new FileReader();
                  ((k.onload = () => {
                    (C.push(n.name), F.push(k.result), w());
                  }),
                    (k.onerror = () =>
                      W(`Error al leer el archivo "${n.name}"`)),
                    k.readAsDataURL(n));
                }),
              R = m.map((n) => V(n));
            Promise.all(R)
              .then(() => {
                ((h.value = C),
                  e.multiple
                    ? l("update:modelValue", F)
                    : l("update:modelValue", F[0]),
                  l("error", ""));
              })
              .catch((n) => {
                ((a.value = n),
                  l("update:modelValue", e.multiple ? [] : ""),
                  l("error", a.value),
                  (h.value = []),
                  r.value && (r.value.value = ""));
              });
          }
        };
      return (
        ee(
          () => e.modelValue,
          (o) => {
            if (e.type === "upload") {
              if (
                (e.multiple && Array.isArray(o) && o.length === 0) ||
                (!e.multiple && !o)
              ) {
                ((a.value = ""), l("error", ""));
                return;
              }
              if (e.multiple && Array.isArray(o)) {
                const t = [],
                  y = e.allowedFormats.map((m) =>
                    m.split("/")[1].toUpperCase(),
                  );
                for (let m = 0; m < o.length; m++) {
                  const u = o[m];
                  if (typeof u == "string" && u.startsWith("data:")) {
                    const C = u.split(";")[0].split(":")[1];
                    if (!e.allowedFormats.includes(C)) {
                      t.push(
                        `Archivo ${m + 1}: Formato no permitido. Formatos aceptados: ${y.join(", ")}`,
                      );
                      continue;
                    }
                    if (u.length * (3 / 4) > e.maxFileSize) {
                      const V = Math.ceil(e.maxFileSize / 1048576);
                      t.push(
                        `Archivo ${m + 1}: Excede el tamaño máximo permitido de ${V}MB`,
                      );
                      continue;
                    }
                  }
                }
                if (t.length > 0) {
                  ((a.value = t.join(". ")),
                    l("update:modelValue", []),
                    l("error", a.value),
                    (h.value = []));
                  return;
                }
              } else if (typeof o == "string" && o.startsWith("data:")) {
                const t = o.split(";")[0].split(":")[1],
                  y = e.allowedFormats.map((u) =>
                    u.split("/")[1].toUpperCase(),
                  );
                if (!e.allowedFormats.includes(t)) {
                  ((a.value = `Formato no permitido. Formatos aceptados: ${y.join(", ")}`),
                    l("update:modelValue", ""),
                    l("error", a.value));
                  return;
                }
                if (o.length * (3 / 4) > e.maxFileSize) {
                  const u = Math.ceil(e.maxFileSize / 1048576);
                  ((a.value = `El archivo excede el tamaño máximo permitido de ${u}MB`),
                    l("update:modelValue", ""),
                    l("error", a.value));
                  return;
                }
              }
              (l("error", ""), (a.value = ""));
            }
          },
        ),
        {
          ariaLabels: Z,
          attrs: L,
          computedClasses: j,
          errorMessage: a,
          hasError: p,
          iconColor: U,
          iconName: P,
          isSearchInput: M,
          iconColorUpload: D,
          fileNames: h,
          fileInput: r,
          handleInput: i,
          handleIconClick: x,
          handleClear: I,
          handleFileUpload: H,
          setFocusedState: (o) => (g.value = o),
        }
      );
    },
  }),
  ae = { class: "w-full flex flex-col items-start gap-2" },
  oe = { key: 0, class: "font-bold text-body-m" },
  te = [
    "value",
    "placeholder",
    "disabled",
    "readonly",
    "aria-invalid",
    "aria-describedby",
  ],
  re = ["multiple", "disabled"],
  ie = ["aria-label", "disabled"],
  se = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
  },
  ne = ["fill"],
  de = { key: 0 },
  ue = { key: 0, class: "text-sm text-gray-500 ml-1" },
  ce = { key: 1 },
  me = { class: "flex items-center gap-1 absolute right-0 min-w-10 h-full" },
  fe = ["aria-label"],
  be = ["aria-label"],
  ve = {
    key: 1,
    id: "feedback-message",
    class: "flex gap-1 justify-center items-center",
    role: "alert",
  };
function he(e, l, z, L, a, h) {
  const r = O,
    g = X;
  return (
    s(),
    d("div", ae, [
      e.label ? (s(), d("label", oe, v(e.label), 1)) : f("", !0),
      $(
        "div",
        { class: B([e.computedClasses, "relative"]) },
        [
          e.type !== "upload"
            ? (s(),
              d(
                "input",
                J({ key: 0 }, e.attrs, {
                  value: Array.isArray(e.modelValue)
                    ? e.modelValue.join(",")
                    : e.modelValue,
                  placeholder: e.placeholder,
                  disabled: e.disabled,
                  readonly: e.readonly,
                  "aria-invalid": e.hasError,
                  "aria-describedby": e.hasError ? "feedback-message" : void 0,
                  class: [
                    "w-full bg-transparent border-none focus-visible:outline-none",
                    { "placeholder:text-text-error": e.hasError },
                  ],
                  onInput:
                    l[0] ||
                    (l[0] = (...i) => e.handleInput && e.handleInput(...i)),
                  onFocusin: l[1] || (l[1] = (i) => e.setFocusedState(!0)),
                  onFocusout: l[2] || (l[2] = (i) => e.setFocusedState(!1)),
                }),
                null,
                16,
                te,
              ))
            : (s(),
              d(
                "input",
                {
                  key: 1,
                  ref: "fileInput",
                  type: "file",
                  multiple: e.multiple,
                  disabled: e.disabled,
                  class: "hidden w-full",
                  onChange:
                    l[3] ||
                    (l[3] = (...i) =>
                      e.handleFileUpload && e.handleFileUpload(...i)),
                },
                null,
                40,
                re,
              )),
          e.type === "upload"
            ? (s(),
              d(
                "button",
                {
                  key: 2,
                  type: "button",
                  "aria-label": e.ariaLabels.upload,
                  disabled: e.disabled,
                  class: B([
                    "cursor-pointer flex w-full gap-2 focus-visible:outline-none items-center justify-start",
                    { "pointer-events-none": e.disabled },
                  ]),
                  onFocusin: l[4] || (l[4] = (i) => e.setFocusedState(!0)),
                  onFocusout: l[5] || (l[5] = (i) => e.setFocusedState(!1)),
                  onClick: l[6] || (l[6] = (i) => e.fileInput?.click()),
                },
                [
                  (s(),
                  d("svg", se, [
                    $(
                      "path",
                      {
                        d: "M14 3C14.275 3 14.5 3.225 14.5 3.5V13.4937L14.3438 13.2906L10.0938 7.79063C9.95312 7.60625 9.73125 7.5 9.5 7.5C9.26875 7.5 9.05 7.60625 8.90625 7.79063L6.3125 11.1469L5.35938 9.8125C5.21875 9.61563 4.99375 9.5 4.75 9.5C4.50625 9.5 4.28125 9.61563 4.14062 9.81563L1.64062 13.3156L1.5 13.5094V13.5V3.5C1.5 3.225 1.725 3 2 3H14ZM2 1.5C0.896875 1.5 0 2.39688 0 3.5V13.5C0 14.6031 0.896875 15.5 2 15.5H14C15.1031 15.5 16 14.6031 16 13.5V3.5C16 2.39688 15.1031 1.5 14 1.5H2ZM4.5 7.5C4.69698 7.5 4.89204 7.4612 5.07403 7.38582C5.25601 7.31044 5.42137 7.19995 5.56066 7.06066C5.69995 6.92137 5.81044 6.75601 5.88582 6.57403C5.9612 6.39204 6 6.19698 6 6C6 5.80302 5.9612 5.60796 5.88582 5.42597C5.81044 5.24399 5.69995 5.07863 5.56066 4.93934C5.42137 4.80005 5.25601 4.68956 5.07403 4.61418C4.89204 4.5388 4.69698 4.5 4.5 4.5C4.30302 4.5 4.10796 4.5388 3.92597 4.61418C3.74399 4.68956 3.57863 4.80005 3.43934 4.93934C3.30005 5.07863 3.18956 5.24399 3.11418 5.42597C3.0388 5.60796 3 5.80302 3 6C3 6.19698 3.0388 6.39204 3.11418 6.57403C3.18956 6.75601 3.30005 6.92137 3.43934 7.06066C3.57863 7.19995 3.74399 7.31044 3.92597 7.38582C4.10796 7.4612 4.30302 7.5 4.5 7.5Z",
                        fill: e.iconColorUpload,
                      },
                      null,
                      8,
                      ne,
                    ),
                  ])),
                  e.fileNames.length > 0
                    ? (s(),
                      d("span", de, [
                        e.multiple
                          ? (s(),
                            d(
                              N,
                              { key: 0 },
                              [
                                E(v(e.fileNames.join(", ")) + " ", 1),
                                e.fileNames.length > 1
                                  ? (s(),
                                    d(
                                      "span",
                                      ue,
                                      " (" +
                                        v(e.fileNames.length) +
                                        " archivo" +
                                        v(e.fileNames.length > 1 ? "s" : "") +
                                        ") ",
                                      1,
                                    ))
                                  : f("", !0),
                              ],
                              64,
                            ))
                          : (s(),
                            d(N, { key: 1 }, [E(v(e.fileNames[0]), 1)], 64)),
                      ]))
                    : (s(), d("span", ce, v(e.placeholder), 1)),
                ],
                42,
                ie,
              ))
            : f("", !0),
          $("div", me, [
            e.isSearchInput && e.modelValue
              ? (s(),
                d(
                  "button",
                  {
                    key: 0,
                    "aria-label": e.ariaLabels.clear,
                    type: "button",
                    class:
                      "cursor-pointer px-2 min-w-10 w-full h-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:text-black",
                    onClick:
                      l[7] ||
                      (l[7] = (...i) => e.handleClear && e.handleClear(...i)),
                  },
                  [
                    S(
                      r,
                      { name: "menuClose", size: "s", color: e.iconColor },
                      null,
                      8,
                      ["color"],
                    ),
                  ],
                  8,
                  fe,
                ))
              : f("", !0),
            e.type === "upload" && e.fileNames.length > 0
              ? (s(),
                d(
                  "button",
                  {
                    key: 1,
                    "aria-label": "Limpiar archivos",
                    type: "button",
                    class:
                      "cursor-pointer px-1 min-w-8 h-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:text-black",
                    onClick:
                      l[8] ||
                      (l[8] = (...i) => e.handleClear && e.handleClear(...i)),
                  },
                  [S(r, { name: "menuClose", size: "s", color: "#999999" })],
                ))
              : f("", !0),
            e.hideIcon
              ? f("", !0)
              : (s(),
                d(
                  "button",
                  {
                    key: 2,
                    type: "button",
                    "aria-label":
                      e.type === "text"
                        ? e.ariaLabels.text
                        : e.type === "upload"
                          ? e.ariaLabels.upload
                          : e.ariaLabels.search,
                    class: B([
                      "cursor-pointer w-full h-full px-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:text-black",
                      {
                        "pointer-events-none": e.disabled,
                        "rounded-r-lg": e.type !== "search",
                        "rounded-r-full": e.type === "search",
                      },
                    ]),
                    onClick:
                      l[9] ||
                      (l[9] = (...i) =>
                        e.handleIconClick && e.handleIconClick(...i)),
                  },
                  [
                    e.icon
                      ? (s(),
                        K(
                          r,
                          { key: 0, name: e.iconName, color: e.iconColor },
                          null,
                          8,
                          ["name", "color"],
                        ))
                      : f("", !0),
                  ],
                  10,
                  be,
                )),
          ]),
        ],
        2,
      ),
      e.errorMessage || e.error
        ? (s(),
          d("div", ve, [
            S(r, { name: "labelsError", color: "red", size: "s" }),
            S(
              g,
              { class: "text-red-600" },
              { default: Y(() => [E(v(e.errorMessage || e.error), 1)]), _: 1 },
            ),
          ]))
        : f("", !0),
    ])
  );
}
const Fe = q(le, [["render", he]]);
export { Fe as _ };
