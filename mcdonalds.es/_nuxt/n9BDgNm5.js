import {
  L as C,
  M as V,
  N as $,
  O as S,
  P as Y,
  Q as J,
  R as O,
  T as R,
  U as T,
  V as z,
  W as Z,
  d as U,
  J as K,
  _ as ee,
} from "./w36zW0QG.js";
import {
  m as u,
  l as E,
  aa as te,
  d as q,
  y as ie,
  A as L,
  P as re,
  O as _,
  V as I,
  u as x,
  R as ae,
  N as ne,
  a2 as A,
  X as j,
} from "./CG2MQ2lF.js";
async function oe(e, t) {
  return await se(t).catch(
    (r) => (
      console.error("Failed to get image meta for " + t, r + ""),
      { width: 0, height: 0, ratio: 0 }
    ),
  );
}
async function se(e) {
  if (typeof Image > "u") throw new TypeError("Image not supported");
  return new Promise((t, i) => {
    const r = new Image();
    ((r.onload = () => {
      const a = { width: r.width, height: r.height, ratio: r.width / r.height };
      t(a);
    }),
      (r.onerror = (a) => i(a)),
      (r.src = e));
  });
}
function M(e) {
  return (t) => (t ? e[t] || t : e.missingValue);
}
function k({ formatter: e, keyMap: t, joinWith: i = "/", valueMap: r } = {}) {
  (e || (e = (s, o) => `${s}=${o}`), t && typeof t != "function" && (t = M(t)));
  const a = r || {};
  return (
    Object.keys(a).forEach((s) => {
      typeof a[s] != "function" && (a[s] = M(a[s]));
    }),
    (s = {}) =>
      Object.entries(s)
        .filter(([l, n]) => typeof n < "u")
        .map(([l, n]) => {
          const c = a[l];
          return (
            typeof c == "function" && (n = c(s[l])),
            (l = typeof t == "function" ? t(l) : l),
            e(l, n)
          );
        })
        .join(i)
  );
}
function h(e = "") {
  if (typeof e == "number") return e;
  if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g))
    return Number.parseInt(e, 10);
}
function le(e = "") {
  if (e === void 0 || !e.length) return [];
  const t = new Set();
  for (const i of e.split(" ")) {
    const r = Number.parseInt(i.replace("x", ""));
    r && t.add(r);
  }
  return Array.from(t);
}
function de(e) {
  if (e.length === 0)
    throw new Error(
      "`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)",
    );
}
function ce(e) {
  const t = {};
  if (typeof e == "string")
    for (const i of e.split(/[\s,]+/).filter((r) => r)) {
      const r = i.split(":");
      r.length !== 2
        ? (t["1px"] = r[0].trim())
        : (t[r[0].trim()] = r[1].trim());
    }
  else Object.assign(t, e);
  return t;
}
function ue(e) {
  const t = { options: e },
    i = (a, s = {}) => D(t, a, s),
    r = (a, s = {}, o = {}) =>
      i(a, { ...o, modifiers: C(s, o.modifiers || {}) }).url;
  for (const a in e.presets)
    r[a] = (s, o, l) => r(s, o, { ...e.presets[a], ...l });
  return (
    (r.options = e),
    (r.getImage = i),
    (r.getMeta = (a, s) => me(t, a, s)),
    (r.getSizes = (a, s) => pe(t, a, s)),
    (t.$img = r),
    r
  );
}
async function me(e, t, i) {
  const r = D(e, t, { ...i });
  return typeof r.getMeta == "function"
    ? await r.getMeta()
    : await oe(e, r.url);
}
function D(e, t, i) {
  if (t && typeof t != "string")
    throw new TypeError(
      `input must be a string (received ${typeof t}: ${JSON.stringify(t)})`,
    );
  if (!t || t.startsWith("data:")) return { url: t };
  const { provider: r, defaults: a } = ge(e, i.provider || e.options.provider),
    s = fe(e, i.preset);
  if (((t = $(t) ? t : V(t)), !r.supportsAlias)) {
    for (const c in e.options.alias)
      if (t.startsWith(c)) {
        const m = e.options.alias[c];
        m && (t = S(m, t.slice(c.length)));
      }
  }
  if (r.validateDomains && $(t)) {
    const c = Y(t).host;
    if (!e.options.domains.find((m) => m === c)) return { url: t };
  }
  const o = C(i, s, a);
  o.modifiers = { ...o.modifiers };
  const l = o.modifiers.format;
  (o.modifiers?.width && (o.modifiers.width = h(o.modifiers.width)),
    o.modifiers?.height && (o.modifiers.height = h(o.modifiers.height)));
  const n = r.getImage(t, o, e);
  return ((n.format = n.format || l || ""), n);
}
function ge(e, t) {
  const i = e.options.providers[t];
  if (!i) throw new Error("Unknown provider: " + t);
  return i;
}
function fe(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
  return e.options.presets[t];
}
function pe(e, t, i) {
  const r = h(i.modifiers?.width),
    a = h(i.modifiers?.height),
    s = ce(i.sizes),
    o = i.densities?.trim() ? le(i.densities.trim()) : e.options.densities;
  de(o);
  const l = r && a ? a / r : 0,
    n = [],
    c = [];
  if (Object.keys(s).length >= 1) {
    for (const g in s) {
      const p = P(g, String(s[g]), a, l, e);
      if (p !== void 0) {
        n.push({
          size: p.size,
          screenMaxWidth: p.screenMaxWidth,
          media: `(max-width: ${p.screenMaxWidth}px)`,
        });
        for (const w of o)
          c.push({ width: p._cWidth * w, src: W(e, t, i, p, w) });
      }
    }
    he(n);
  } else
    for (const g of o) {
      const p = Object.keys(s)[0];
      let w = p ? P(p, String(s[p]), a, l, e) : void 0;
      (w === void 0 &&
        (w = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: i.modifiers?.width,
          _cHeight: i.modifiers?.height,
        }),
        c.push({ width: g, src: W(e, t, i, w, g) }));
    }
  be(c);
  const m = c[c.length - 1],
    f = n.length
      ? n.map((g) => `${g.media ? g.media + " " : ""}${g.size}`).join(", ")
      : void 0,
    y = f ? "w" : "x",
    v = c.map((g) => `${g.src} ${g.width}${y}`).join(", ");
  return { sizes: f, srcset: v, src: m?.src };
}
function P(e, t, i, r, a) {
  const s = (a.options.screens && a.options.screens[e]) || Number.parseInt(e),
    o = t.endsWith("vw");
  if ((!o && /^\d+$/.test(t) && (t = t + "px"), !o && !t.endsWith("px")))
    return;
  let l = Number.parseInt(t);
  if (!s || !l) return;
  o && (l = Math.round((l / 100) * s));
  const n = r ? Math.round(l * r) : i;
  return { size: t, screenMaxWidth: s, _cWidth: l, _cHeight: n };
}
function W(e, t, i, r, a) {
  return e.$img(
    t,
    {
      ...i.modifiers,
      width: r._cWidth ? r._cWidth * a : void 0,
      height: r._cHeight ? r._cHeight * a : void 0,
    },
    i,
  );
}
function he(e) {
  e.sort((i, r) => i.screenMaxWidth - r.screenMaxWidth);
  let t = null;
  for (let i = e.length - 1; i >= 0; i--) {
    const r = e[i];
    (r.media === t && e.splice(i, 1), (t = r.media));
  }
  for (let i = 0; i < e.length; i++) e[i].media = e[i + 1]?.media || "";
}
function be(e) {
  e.sort((i, r) => i.width - r.width);
  let t = null;
  for (let i = e.length - 1; i >= 0; i--) {
    const r = e[i];
    (r.width === t && e.splice(i, 1), (t = r.width));
  }
}
const B = k({
    keyMap: {
      width: "w",
      height: "h",
      quality: "q",
      trim: "trim",
      extend: "extend",
      extract: "extract",
      rotate: "rotate",
      flip: "flip",
      flop: "flop",
      sharpen: "sharpen",
      median: "median",
      blur: "blur",
      gamma: "gamma",
      negate: "negate",
      normalize: "normalize",
      threshold: "threshold",
      tint: "tint",
      grayscale: "grayscale",
    },
    valueMap: {
      format: {
        jpg: "jpeg",
        jpeg: "jpeg",
        webp: "webp",
        avif: "avif",
        png: "png",
      },
      fit: {
        cover: "cover",
        contain: "contain",
        fill: "fill",
        inside: "inside",
        outside: "outside",
      },
      position: {
        center: "center",
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
      },
    },
    joinWith: "&",
    formatter: (e, t) => `${e}=${t}`,
  }),
  we = (e, { modifiers: t, baseURL: i = "/_amplify/image" } = {}, r) => {
    const a = Object.values(r.options.screens || {}).sort((n, c) => n - c),
      s = a[a.length - 1] || 0;
    let o = Number(t?.width || 0);
    o ? a.includes(o) || (o = a.find((n) => n > o) || s) : (o = s);
    const l = B({
      ...t,
      width: String(o),
      quality: String(t?.quality || "100"),
    });
    return { url: S(i + `?${J("url", e)}` + (l ? `&${l}` : "")) };
  },
  ye = !0,
  ve = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        getImage: we,
        operationsGenerator: B,
        validateDomains: ye,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  N = k({
    keyMap: {
      width: "w",
      height: "h",
      format: "fm",
      quality: "q",
      backgroundColor: "bg",
      rotate: "rot",
      mask: "mask",
      auto: "auto",
      crop: "crop",
      brightness: "bri",
      contrast: "con",
      exposure: "exp",
      gamma: "gam",
      highlight: "high",
      hueShift: "hue",
      invert: "invert",
      saturation: "sat",
      shadow: "shad",
      sharpen: "sharp",
      unsharpMask: "usm",
      unsharpMaskRadius: "usmrad",
      vibrance: "vib",
      blend: "blend",
      blendAlign: "blend-align",
      blendAlpha: "blend-alpha",
      blendColor: "blend-color",
      blendCrop: "blend-crop",
      blendFit: "blend-fit",
      blendHeight: "blend-h",
      blendMode: "blend-mode",
      blendPadding: "blend-pad",
      blendSize: "blend-size",
      blendWidth: "blend-w",
      blendXPosition: "blend-x",
      blendYPosition: "blend-y",
      padding: "pad",
      borderBottom: "border-bottom",
      borderLeft: "border-left",
      innerBorderRadius: "border-radius-inner",
      outerBorderRadius: "border-radius",
      borderRight: "border-right",
      borderTop: "border-top",
      borderSizeColor: "border",
      paddingBottom: "pad-bottom",
      paddingLeft: "pad-left",
      paddingRight: "pad-right",
      paddingTop: "pad-top",
      paletteColorCount: "colors",
      colorPaletteExtraction: "palette",
      cssPrefix: "prefix",
      expirationTimestamp: "expires",
      faceIndex: "faceindex",
      facePadding: "facepad",
      jsonFaceData: "faces",
      fillMode: "fill",
      fillColor: "fill-color",
      gridColors: "grid-colors",
      gridSize: "grid-size",
      transparency: "transparency",
      focalPointDebug: "fp-debug",
      focalPointXPosition: "fp-x",
      focalPointYPosition: "fp-y",
      focalPointZoom: "fp-z",
      clientHints: "ch",
      chromaSubsampling: "chromasub",
      colorQuantization: "colorquant",
      colorSpace: "cs",
      download: "dl",
      dotsPerInch: "dpi",
      losslessCompression: "lossless",
      maskBackgroundColor: "mask-bg",
      maskCornerRadius: "corner-radius",
      noiseReductionSharp: "nrs",
      noiseReductionBound: "nr",
      pdfPageNumber: "page",
      pdfAnnotation: "pdf-annotation",
      pixelDensity: "dpr",
      orientation: "orient",
      flipAxis: "flip",
      aspectRatio: "ar",
      maximumHeight: "max-h",
      maximumWidth: "max-w",
      minimumHeight: "min-h",
      minimumWidth: "min-w",
      sourceRectangleRegion: "rect",
      gaussianBlur: "blur",
      duotoneAlpha: "duotone-alpha",
      duotone: "duotone",
      halftone: "htn",
      monochrome: "monochrome",
      pixellate: "px",
      sepiaTone: "sepia",
      textAlign: "txt-align",
      textClippingMode: "txt-clip",
      textColor: "txt-color",
      textFitMode: "txt-fit",
      textFont: "txt-font",
      textLigatures: "txt-lig",
      textOutlineColor: "txt-line-color",
      textOutline: "txt-line",
      textPadding: "txt-pad",
      textShadow: "txt-shad",
      textFontSize: "txt-size",
      textWidth: "txt-width",
      textString: "txt",
      trimColor: "trim-color",
      trimMeanDifference: "trim-md",
      trimStandardDeviation: "trim-sd",
      trimTolerance: "trim-tol",
      trimImage: "trim",
      textLeading: "txt-lead",
      textTracking: "txt-track",
      typesettingEndpoint: "~text",
      watermarkAlignment: "mark-align",
      watermarkAlpha: "mark-alpha",
      watermarkBaseURL: "mark-base",
      watermarkFitMode: "mark-fit",
      watermarkHeight: "mark-h",
      watermarkPadding: "mark-pad",
      watermarkRotation: "mark-rot",
      watermarkScale: "mark-sclae",
      watermarkTile: "mark-tile",
      watermarkWidth: "mark-w",
      watermarkXPosition: "mark-x",
      watermarkYPosition: "mark-y",
      watermarkImageURL: "mark",
    },
    valueMap: {
      fit: {
        fill: "scale",
        inside: "max",
        outside: "min",
        cover: "crop",
        contain: "fill",
        clamp: "clamp",
        clip: "clip",
        facearea: "facearea",
        fillMax: "fillmax",
      },
      format: {
        gif: "gif",
        jp2: "jp2",
        jpg: "jpg",
        json: "json",
        jxr: "jxr",
        pjpg: "pjpg",
        mp4: "mp4",
        png: "png",
        png8: "png8",
        png32: "png32",
        webm: "webm",
        webp: "webp",
        blurhash: "blurhash",
      },
    },
    joinWith: "&",
    formatter: (e, t) => `${e}=${t}`,
  }),
  F = "https://images.unsplash.com/",
  xe = (e, { modifiers: t = {}, baseURL: i = F } = {}) => {
    const r = N(t);
    return { url: O(T(e, i), R("?" + r)) };
  },
  H = "https://images.prismic.io/",
  Se = (e, { modifiers: t = {}, baseURL: i = H } = {}, r) => {
    if (e.startsWith(F)) return xe(e, { modifiers: t });
    const a = N(t);
    return { url: O(T(e, i), R("?" + a)) };
  },
  _e = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: Se, prismicCDN: H },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ke = k({
    keyMap: {
      format: "f",
      fit: "fit",
      width: "w",
      height: "h",
      resize: "s",
      quality: "q",
      background: "b",
    },
    joinWith: "&",
    formatter: (e, t) => z(e) + "_" + z(t),
  }),
  $e = (e, { modifiers: t = {}, baseURL: i } = {}, r) => {
    t.width &&
      t.height &&
      ((t.resize = `${t.width}x${t.height}`), delete t.width, delete t.height);
    const a = ke(t) || "_";
    return (
      i || (i = S(r.options.nuxt.baseURL, "/_ipx")),
      { url: S(i, a, Z(e)) }
    );
  },
  ze = !0,
  qe = !0,
  Ie = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: $e, supportsAlias: qe, validateDomains: ze },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  G = {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    presets: {},
    provider: "awsAmplify",
    domains: [],
    alias: {},
    densities: [1, 2],
    format: ["webp"],
  };
G.providers = {
  awsAmplify: { provider: ve, defaults: {} },
  prismic: { provider: _e, defaults: { baseURL: "https://images.prismic.io" } },
  ipx: { provider: Ie, defaults: void 0 },
};
const Q = () => {
  const e = K(),
    t = U();
  return (
    t.$img ||
    t._img ||
    (t._img = ue({ ...G, nuxt: { baseURL: e.app.baseURL }, runtimeConfig: e }))
  );
};
function Ae(e) {
  performance?.mark?.("mark_feature_usage", { detail: { feature: e } });
}
const je = {
    src: { type: String, required: !1 },
    format: { type: String, required: !1 },
    quality: { type: [Number, String], required: !1 },
    background: { type: String, required: !1 },
    fit: { type: String, required: !1 },
    modifiers: { type: Object, required: !1 },
    preset: { type: String, required: !1 },
    provider: { type: String, required: !1 },
    sizes: { type: [Object, String], required: !1 },
    densities: { type: String, required: !1 },
    preload: { type: [Boolean, Object], required: !1 },
    width: { type: [String, Number], required: !1 },
    height: { type: [String, Number], required: !1 },
    alt: { type: String, required: !1 },
    referrerpolicy: { type: String, required: !1 },
    usemap: { type: String, required: !1 },
    longdesc: { type: String, required: !1 },
    ismap: { type: Boolean, required: !1 },
    loading: {
      type: String,
      required: !1,
      validator: (e) => ["lazy", "eager"].includes(e),
    },
    crossorigin: {
      type: [Boolean, String],
      required: !1,
      validator: (e) =>
        ["anonymous", "use-credentials", "", !0, !1].includes(e),
    },
    decoding: {
      type: String,
      required: !1,
      validator: (e) => ["async", "auto", "sync"].includes(e),
    },
    nonce: { type: [String], required: !1 },
  },
  Me = (e) => {
    const t = u(() => ({ provider: e.provider, preset: e.preset })),
      i = u(() => ({
        width: h(e.width),
        height: h(e.height),
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        usemap: e.usemap,
        longdesc: e.longdesc,
        ismap: e.ismap,
        crossorigin:
          e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
        loading: e.loading,
        decoding: e.decoding,
        nonce: e.nonce,
      })),
      r = Q(),
      a = u(() => ({
        ...e.modifiers,
        width: h(e.width),
        height: h(e.height),
        format: e.format,
        quality: e.quality || r.options.quality,
        background: e.background,
        fit: e.fit,
      }));
    return { options: t, attrs: i, modifiers: a };
  },
  Pe = {
    ...je,
    placeholder: { type: [Boolean, String, Number, Array], required: !1 },
    placeholderClass: { type: String, required: !1 },
    custom: { type: Boolean, required: !1 },
  },
  We = ["src"],
  X = E({
    __name: "NuxtImg",
    props: Pe,
    emits: ["load", "error"],
    setup(e, { emit: t }) {
      const i = e,
        r = te(),
        a = t,
        s = !1,
        o = Q(),
        l = Me(i),
        n = q(!1),
        c = q(),
        m = u(() =>
          o.getSizes(i.src, {
            ...l.options.value,
            sizes: i.sizes,
            densities: i.densities,
            modifiers: {
              ...l.modifiers.value,
              width: h(i.width),
              height: h(i.height),
            },
          }),
        ),
        f = u(() => {
          const d = { ...l.attrs.value, "data-nuxt-img": "" };
          return (
            (!i.placeholder || n.value) &&
              ((d.sizes = m.value.sizes), (d.srcset = m.value.srcset)),
            d
          );
        }),
        y = u(() => {
          let d = i.placeholder;
          if ((d === "" && (d = !0), !d || n.value)) return !1;
          if (typeof d == "string") return d;
          const b = Array.isArray(d)
            ? d
            : typeof d == "number"
              ? [d, d]
              : [10, 10];
          return o(
            i.src,
            {
              ...l.modifiers.value,
              width: b[0],
              height: b[1],
              quality: b[2] || 50,
              blur: b[3] || 3,
            },
            l.options.value,
          );
        }),
        v = u(() =>
          i.sizes ? m.value.src : o(i.src, l.modifiers.value, l.options.value),
        ),
        g = u(() => (y.value ? y.value : v.value)),
        w = U().isHydrating;
      return (
        ie(() => {
          if (y.value || i.custom) {
            const d = new Image();
            (v.value && (d.src = v.value),
              i.sizes &&
                ((d.sizes = m.value.sizes || ""), (d.srcset = m.value.srcset)),
              (d.onload = (b) => {
                ((n.value = !0), a("load", b));
              }),
              (d.onerror = (b) => {
                a("error", b);
              }),
              Ae("nuxt-image"));
            return;
          }
          c.value &&
            (c.value.complete &&
              w &&
              (c.value.getAttribute("data-error")
                ? a("error", new Event("error"))
                : a("load", new Event("load"))),
            (c.value.onload = (d) => {
              a("load", d);
            }),
            (c.value.onerror = (d) => {
              a("error", d);
            }));
        }),
        (d, b) =>
          d.custom
            ? re(
                d.$slots,
                "default",
                ae(
                  I(
                    { key: 1 },
                    {
                      ...(x(s)
                        ? { onerror: "this.setAttribute('data-error', 1)" }
                        : {}),
                      imgAttrs: { ...f.value, ...x(r) },
                      isLoaded: n.value,
                      src: g.value,
                    },
                  ),
                ),
              )
            : (_(),
              L(
                "img",
                I(
                  {
                    key: 0,
                    ref_key: "imgEl",
                    ref: c,
                    class: y.value && !n.value ? d.placeholderClass : void 0,
                  },
                  {
                    ...(x(s)
                      ? { onerror: "this.setAttribute('data-error', 1)" }
                      : {}),
                    ...f.value,
                    ...x(r),
                  },
                  { src: g.value },
                ),
                null,
                16,
                We,
              ))
      );
    },
  }),
  Ce = 80,
  Oe = "webp",
  Re = "100vw",
  Te = E({
    components: { NuxtImg: X },
    props: {
      image: { type: [String, Object], required: !0 },
      wrapperClass: { type: [String, Array], default: "" },
      wrapperStyle: { type: [String, Object], default: () => ({}) },
      disableOptimization: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = u(() =>
          typeof e.image == "string"
            ? { url: e.image, alt: "" }
            : {
                url: e.image.url || "",
                alt: e.image.alt || "",
                width: e.image.dimensions?.width,
                height: e.image.dimensions?.height,
              },
        ),
        i = u(() => {
          const n = t.value.url;
          if (!n) return "";
          if (
            e.disableOptimization ||
            (n.endsWith(".svg") && !n.includes("://"))
          )
            return n;
          const c = n.match(/rect=([^&]+)/),
            m = n.split("?")[0],
            f = [];
          return (
            c && f.push(`rect=${c[1]}`),
            n.includes("prismic.io")
              ? (f.push("auto=compress", "fm=webp"), `${m}?${f.join("&")}`)
              : n.includes("/api/cms/images")
                ? (f.push("auto=compress", "fm=webp"), `${m}?${f.join("&")}`)
                : !n.includes("prismic.io") &&
                    !n.includes("/api/cms/images") &&
                    !n.endsWith(".svg")
                  ? n.includes("://")
                    ? (f.push("auto=compress", "fm=webp"),
                      `${m}?${f.join("&")}`)
                    : n
                  : `${m}?auto=compress&fm=webp`
          );
        }),
        r = u(() => e.disableOptimization || a.value || s.value || o.value),
        a = u(() => i.value.endsWith(".svg")),
        s = u(() => i.value.includes("/api/cms/images")),
        o = u(() => {
          const n = t.value.url;
          return !n.includes("://") || n.startsWith("/");
        }),
        l = u(() => (i.value.includes("prismic.io") ? "prismic" : "ipx"));
      return {
        imageUrl: u(() => t.value.url),
        imageAlt: u(() => t.value?.alt || ""),
        imageWidth: u(() => t.value.width),
        imageHeight: u(() => t.value.height),
        cleanUrl: i,
        isSvg: a,
        isCmsImg: s,
        isPublicImage: o,
        shouldUseBasicImg: r,
        imageProvider: l,
        DEFAULT_IMAGE_QUALITY: Ce,
        DEFAULT_IMAGE_FORMAT: Oe,
        DEFAULT_IMAGE_SIZE: Re,
      };
    },
  }),
  Ue = ["src", "alt", "width", "height"];
function Ee(e, t, i, r, a, s) {
  const o = X;
  return e.shouldUseBasicImg
    ? (_(),
      L(
        "img",
        {
          key: 0,
          src: e.cleanUrl,
          alt: e.imageAlt,
          loading: "lazy",
          class: j(e.wrapperClass),
          style: A(e.wrapperStyle),
          width: e.imageWidth,
          height: e.imageHeight,
        },
        null,
        14,
        Ue,
      ))
    : (_(),
      ne(
        o,
        {
          key: 1,
          src: e.cleanUrl,
          alt: e.imageAlt,
          loading: "lazy",
          class: j(e.wrapperClass),
          style: A(e.wrapperStyle),
          provider: e.imageProvider,
          quality: e.DEFAULT_IMAGE_QUALITY,
          format: e.DEFAULT_IMAGE_FORMAT,
          width: e.imageWidth,
          height: e.imageHeight,
          placeholder: "",
        },
        null,
        8,
        [
          "src",
          "alt",
          "class",
          "style",
          "provider",
          "quality",
          "format",
          "width",
          "height",
        ],
      ));
}
const Be = ee(Te, [["render", Ee]]);
export { Be as _ };
