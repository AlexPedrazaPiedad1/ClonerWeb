import {
  y as M,
  v as $,
  a as O,
  h as j,
  i as k,
  u as T,
  g as B,
  B as A,
  d as w,
  m as p,
  w as C,
  q as x,
} from "./CG2MQ2lF.js";
function L(e) {
  return B() ? (A(e), !0) : !1;
}
const E = new WeakMap(),
  F = (...e) => {
    var t;
    const n = e[0],
      s = (t = O()) == null ? void 0 : t.proxy;
    if (s == null && !j())
      throw new Error("injectLocal must be called in setup");
    return s && E.has(s) && n in E.get(s) ? E.get(s)[n] : k(...e);
  };
function g(e) {
  return typeof e == "function" ? e() : T(e);
}
const H = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _ = Object.prototype.toString,
  G = (e) => _.call(e) === "[object Object]",
  P = () => {};
function z(e, t) {
  var n;
  if (typeof e == "number") return e + t;
  const s = ((n = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : n[0]) || "",
    c = e.slice(s.length),
    a = Number.parseFloat(s) + t;
  return Number.isNaN(a) ? e : a + c;
}
function S(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function D(e) {
  return O();
}
function N(e, t = !0, n) {
  D() ? M(e, n) : t ? e() : $(e);
}
const W = H ? window : void 0;
function q(e) {
  var t;
  const n = g(e);
  return (t = n?.$el) != null ? t : n;
}
function I(...e) {
  let t, n, s, c;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([n, s, c] = e), (t = W))
      : ([t, n, s, c] = e),
    !t)
  )
    return P;
  (Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]));
  const a = [],
    u = () => {
      (a.forEach((l) => l()), (a.length = 0));
    },
    d = (l, f, h, r) => (
      l.addEventListener(f, h, r),
      () => l.removeEventListener(f, h, r)
    ),
    o = x(
      () => [q(t), g(c)],
      ([l, f]) => {
        if ((u(), !l)) return;
        const h = G(f) ? { ...f } : f;
        a.push(...n.flatMap((r) => s.map((i) => d(l, r, i, h))));
      },
      { immediate: !0, flush: "post" },
    ),
    m = () => {
      (o(), u());
    };
  return (L(m), m);
}
function Q() {
  const e = w(!1),
    t = O();
  return (
    t &&
      M(() => {
        e.value = !0;
      }, t),
    e
  );
}
function Y(e) {
  const t = Q();
  return p(() => (t.value, !!e()));
}
const R = Symbol("vueuse-ssr-width");
function V() {
  const e = j() ? F(R, null) : null;
  return typeof e == "number" ? e : void 0;
}
function y(e, t = {}) {
  const { window: n = W, ssrWidth: s = V() } = t,
    c = Y(() => n && "matchMedia" in n && typeof n.matchMedia == "function"),
    a = w(typeof s == "number");
  let u;
  const d = w(!1),
    o = (f) => {
      d.value = f.matches;
    },
    m = () => {
      u &&
        ("removeEventListener" in u
          ? u.removeEventListener("change", o)
          : u.removeListener(o));
    },
    l = C(() => {
      if (a.value) {
        a.value = !c.value;
        const f = g(e).split(",");
        d.value = f.some((h) => {
          const r = h.includes("not all"),
            i = h.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            v = h.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let b = !!(i || v);
          return (
            i && b && (b = s >= S(i[1])),
            v && b && (b = s <= S(v[1])),
            r ? !b : b
          );
        });
        return;
      }
      c.value &&
        (m(),
        (u = n.matchMedia(g(e))),
        "addEventListener" in u
          ? u.addEventListener("change", o)
          : u.addListener(o),
        (d.value = u.matches));
    });
  return (
    L(() => {
      (l(), m(), (u = void 0));
    }),
    p(() => d.value)
  );
}
function U(e, t = {}) {
  function n(r, i) {
    let v = g(e[g(r)]);
    return (
      i != null && (v = z(v, i)),
      typeof v == "number" && (v = `${v}px`),
      v
    );
  }
  const { window: s = W, strategy: c = "min-width", ssrWidth: a = V() } = t,
    u = typeof a == "number",
    d = u ? w(!1) : { value: !0 };
  u && N(() => (d.value = !!s));
  function o(r, i) {
    return !d.value && u
      ? r === "min"
        ? a >= S(i)
        : a <= S(i)
      : s
        ? s.matchMedia(`(${r}-width: ${i})`).matches
        : !1;
  }
  const m = (r) => y(() => `(min-width: ${n(r)})`, t),
    l = (r) => y(() => `(max-width: ${n(r)})`, t),
    f = Object.keys(e).reduce(
      (r, i) => (
        Object.defineProperty(r, i, {
          get: () => (c === "min-width" ? m(i) : l(i)),
          enumerable: !0,
          configurable: !0,
        }),
        r
      ),
      {},
    );
  function h() {
    const r = Object.keys(e)
      .map((i) => [i, f[i], S(n(i))])
      .sort((i, v) => i[2] - v[2]);
    return p(() => r.filter(([, i]) => i.value).map(([i]) => i));
  }
  return Object.assign(f, {
    greaterOrEqual: m,
    smallerOrEqual: l,
    greater(r) {
      return y(() => `(min-width: ${n(r, 0.1)})`, t);
    },
    smaller(r) {
      return y(() => `(max-width: ${n(r, -0.1)})`, t);
    },
    between(r, i) {
      return y(() => `(min-width: ${n(r)}) and (max-width: ${n(i, -0.1)})`, t);
    },
    isGreater(r) {
      return o("min", n(r, 0.1));
    },
    isGreaterOrEqual(r) {
      return o("min", n(r));
    },
    isSmaller(r) {
      return o("max", n(r, -0.1));
    },
    isSmallerOrEqual(r) {
      return o("max", n(r));
    },
    isInBetween(r, i) {
      return o("min", n(r)) && o("max", n(i, -0.1));
    },
    current: h,
    active() {
      const r = h();
      return p(() =>
        r.value.length === 0 ? "" : r.value.at(c === "min-width" ? -1 : 0),
      );
    },
  });
}
function K(e = {}) {
  const {
      window: t = W,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: c = !0,
      includeScrollbar: a = !0,
      type: u = "inner",
    } = e,
    d = w(n),
    o = w(s),
    m = () => {
      if (t)
        if (u === "outer")
          ((d.value = t.outerWidth), (o.value = t.outerHeight));
        else if (u === "visual" && t.visualViewport) {
          const { width: l, height: f, scale: h } = t.visualViewport;
          ((d.value = Math.round(l * h)), (o.value = Math.round(f * h)));
        } else
          a
            ? ((d.value = t.innerWidth), (o.value = t.innerHeight))
            : ((d.value = t.document.documentElement.clientWidth),
              (o.value = t.document.documentElement.clientHeight));
    };
  if (
    (m(),
    N(m),
    I("resize", m, { passive: !0 }),
    t &&
      u === "visual" &&
      t.visualViewport &&
      I(t.visualViewport, "resize", m, { passive: !0 }),
    c)
  ) {
    const l = y("(orientation: portrait)");
    x(l, () => m());
  }
  return { width: d, height: o };
}
const X = () => {
  const e = U({ mobile: 0, tablet: 768, desktop: 1024 }),
    t = w(!1),
    n = p(() => (t.value && e.active().value) || "desktop"),
    s = p(() => t.value && n.value === "mobile"),
    c = p(() => t.value && n.value === "tablet"),
    a = p(() => t.value && n.value === "desktop");
  return (
    M(() => {
      t.value = !0;
    }),
    { isMobile: s, isTablet: c, isDesktop: a }
  );
};
export { K as a, X as u };
