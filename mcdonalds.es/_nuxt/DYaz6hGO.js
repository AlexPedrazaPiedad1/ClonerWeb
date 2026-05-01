import { J as je, k as Ze, g as Be, _ as qe } from "./w36zW0QG.js";
import {
  l as H,
  d as C,
  i as W,
  q as U,
  o as ne,
  A as x,
  Z as le,
  O as S,
  _ as B,
  P as ce,
  V as $e,
  m as z,
  ao as Ue,
  R as De,
  S as Fe,
  y as Ge,
  G as q,
  t as Ke,
  p as ee,
  a2 as ie,
  u as w,
  $ as We,
  Q as j,
  W as F,
  X as T,
  N as fe,
  U as Ve,
  Y as Ye,
  a3 as He,
} from "./CG2MQ2lF.js";
import { u as Xe } from "./6ea1p-kM.js";
(function () {
  try {
    if (typeof document < "u") {
      var s = document.createElement("style");
      (s.appendChild(
        document.createTextNode(
          ".mapdiv[data-v-d05fc6bc]{width:100%;height:100%}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}",
        ),
      ),
        document.head.appendChild(s));
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var Je = Object.defineProperty,
  Qe = (s, e, t) =>
    e in s
      ? Je(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[e] = t),
  ge = (s, e, t) => (Qe(s, typeof e != "symbol" ? e + "" : e, t), t);
const ue = Symbol("map"),
  de = Symbol("api"),
  Oe = Symbol("markerCluster"),
  te = Symbol("CustomMarker"),
  et = Symbol("mapTilesLoaded"),
  xe = [
    "click",
    "dblclick",
    "drag",
    "dragend",
    "dragstart",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "rightclick",
  ];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function tt(
  s,
  e,
  t,
  r,
) {
  function o(i) {
    return i instanceof t
      ? i
      : new t(function (a) {
          a(i);
        });
  }
  return new (t || (t = Promise))(function (i, a) {
    function c(u) {
      try {
        d(r.next(u));
      } catch (l) {
        a(l);
      }
    }
    function n(u) {
      try {
        d(r.throw(u));
      } catch (l) {
        a(l);
      }
    }
    function d(u) {
      u.done ? i(u.value) : o(u.value).then(c, n);
    }
    d((r = r.apply(s, [])).next());
  });
}
var rt = function s(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, o, i;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (o = r; o-- !== 0; ) if (!s(e[o], t[o])) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
      return !1;
    for (o = r; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[o])) return !1;
    for (o = r; o-- !== 0; ) {
      var a = i[o];
      if (!s(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
};
const ve = "__googleMapsScriptId";
var Z;
(function (s) {
  ((s[(s.INITIALIZED = 0)] = "INITIALIZED"),
    (s[(s.LOADING = 1)] = "LOADING"),
    (s[(s.SUCCESS = 2)] = "SUCCESS"),
    (s[(s.FAILURE = 3)] = "FAILURE"));
})(Z || (Z = {}));
class N {
  constructor({
    apiKey: e,
    authReferrerPolicy: t,
    channel: r,
    client: o,
    id: i = ve,
    language: a,
    libraries: c = [],
    mapIds: n,
    nonce: d,
    region: u,
    retries: l = 3,
    url: p = "https://maps.googleapis.com/maps/api/js",
    version: m,
  }) {
    if (
      ((this.callbacks = []),
      (this.done = !1),
      (this.loading = !1),
      (this.errors = []),
      (this.apiKey = e),
      (this.authReferrerPolicy = t),
      (this.channel = r),
      (this.client = o),
      (this.id = i || ve),
      (this.language = a),
      (this.libraries = c),
      (this.mapIds = n),
      (this.nonce = d),
      (this.region = u),
      (this.retries = l),
      (this.url = p),
      (this.version = m),
      N.instance)
    ) {
      if (!rt(this.options, N.instance.options))
        throw new Error(
          `Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(N.instance.options)}`,
        );
      return N.instance;
    }
    N.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy,
    };
  }
  get status() {
    return this.errors.length
      ? Z.FAILURE
      : this.done
        ? Z.SUCCESS
        : this.loading
          ? Z.LOADING
          : Z.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  createUrl() {
    let e = this.url;
    return (
      (e += "?callback=__googleMapsCallback"),
      this.apiKey && (e += `&key=${this.apiKey}`),
      this.channel && (e += `&channel=${this.channel}`),
      this.client && (e += `&client=${this.client}`),
      this.libraries.length > 0 &&
        (e += `&libraries=${this.libraries.join(",")}`),
      this.language && (e += `&language=${this.language}`),
      this.region && (e += `&region=${this.region}`),
      this.version && (e += `&v=${this.version}`),
      this.mapIds && (e += `&map_ids=${this.mapIds.join(",")}`),
      this.authReferrerPolicy &&
        (e += `&auth_referrer_policy=${this.authReferrerPolicy}`),
      e
    );
  }
  deleteScript() {
    const e = document.getElementById(this.id);
    e && e.remove();
  }
  load() {
    return this.loadPromise();
  }
  loadPromise() {
    return new Promise((e, t) => {
      this.loadCallback((r) => {
        r ? t(r.error) : e(window.google);
      });
    });
  }
  importLibrary(e) {
    return (this.execute(), google.maps.importLibrary(e));
  }
  loadCallback(e) {
    (this.callbacks.push(e), this.execute());
  }
  setScript() {
    var e, t;
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const r = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy,
    };
    (Object.keys(r).forEach((i) => !r[i] && delete r[i]),
      (!(
        (t =
          (e = window?.google) === null || e === void 0 ? void 0 : e.maps) ===
          null || t === void 0
      ) &&
        t.importLibrary) ||
        ((i) => {
          let a,
            c,
            n,
            d = "The Google Maps JavaScript API",
            u = "google",
            l = "importLibrary",
            p = "__ib__",
            m = document,
            h = window;
          h = h[u] || (h[u] = {});
          const f = h.maps || (h.maps = {}),
            g = new Set(),
            v = new URLSearchParams(),
            k = () =>
              a ||
              (a = new Promise((b, L) =>
                tt(this, void 0, void 0, function* () {
                  var O;
                  (yield (c = m.createElement("script")),
                    (c.id = this.id),
                    v.set("libraries", [...g] + ""));
                  for (n in i)
                    v.set(
                      n.replace(/[A-Z]/g, (y) => "_" + y[0].toLowerCase()),
                      i[n],
                    );
                  (v.set("callback", u + ".maps." + p),
                    (c.src = this.url + "?" + v),
                    (f[p] = b),
                    (c.onerror = () => (a = L(Error(d + " could not load.")))),
                    (c.nonce =
                      this.nonce ||
                      ((O = m.querySelector("script[nonce]")) === null ||
                      O === void 0
                        ? void 0
                        : O.nonce) ||
                      ""),
                    m.head.append(c));
                }),
              ));
          f[l]
            ? console.warn(d + " only loads once. Ignoring:", i)
            : (f[l] = (b, ...L) => g.add(b) && k().then(() => f[l](b, ...L)));
        })(r));
    const o = this.libraries.map((i) => this.importLibrary(i));
    (o.length || o.push(this.importLibrary("core")),
      Promise.all(o).then(
        () => this.callback(),
        (i) => {
          const a = new ErrorEvent("error", { error: i });
          this.loadErrorCallback(a);
        },
      ));
  }
  reset() {
    (this.deleteScript(),
      (this.done = !1),
      (this.loading = !1),
      (this.errors = []),
      (this.onerrorEvent = null));
  }
  resetIfRetryingFailed() {
    this.failed && this.reset();
  }
  loadErrorCallback(e) {
    if ((this.errors.push(e), this.errors.length <= this.retries)) {
      const t = this.errors.length * Math.pow(2, this.errors.length);
      (console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),
        setTimeout(() => {
          (this.deleteScript(), this.setScript());
        }, t));
    } else ((this.onerrorEvent = e), this.callback());
  }
  callback() {
    ((this.done = !0),
      (this.loading = !1),
      this.callbacks.forEach((e) => {
        e(this.onerrorEvent);
      }),
      (this.callbacks = []));
  }
  execute() {
    if ((this.resetIfRetryingFailed(), this.done)) this.callback();
    else {
      if (window.google && window.google.maps && window.google.maps.version) {
        (console.warn(
          "Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match.",
        ),
          this.callback());
        return;
      }
      this.loading || ((this.loading = !0), this.setScript());
    }
  }
}
function ot(s) {
  return class extends s.OverlayView {
    constructor(e) {
      (super(), ge(this, "element"), ge(this, "opts"));
      const { element: t, ...r } = e;
      ((this.element = t),
        (this.opts = r),
        this.opts.map && this.setMap(this.opts.map));
    }
    getPosition() {
      return this.opts.position
        ? this.opts.position instanceof s.LatLng
          ? this.opts.position
          : new s.LatLng(this.opts.position)
        : null;
    }
    getVisible() {
      if (!this.element) return !1;
      const e = this.element;
      return (
        e.style.display !== "none" &&
        e.style.visibility !== "hidden" &&
        (e.style.opacity === "" || Number(e.style.opacity) > 0.01)
      );
    }
    onAdd() {
      if (!this.element) return;
      const e = this.getPanes();
      e && e.overlayMouseTarget.appendChild(this.element);
    }
    draw() {
      if (!this.element) return;
      const e = this.getProjection(),
        t = e?.fromLatLngToDivPixel(this.getPosition());
      if (t) {
        this.element.style.position = "absolute";
        let r, o;
        switch (this.opts.anchorPoint) {
          case "TOP_CENTER":
            ((r = "-50%"), (o = "-100%"));
            break;
          case "BOTTOM_CENTER":
            ((r = "-50%"), (o = "0"));
            break;
          case "LEFT_CENTER":
            ((r = "-100%"), (o = "-50%"));
            break;
          case "RIGHT_CENTER":
            ((r = "0"), (o = "-50%"));
            break;
          case "TOP_LEFT":
            ((r = "-100%"), (o = "-100%"));
            break;
          case "TOP_RIGHT":
            ((r = "0"), (o = "-100%"));
            break;
          case "BOTTOM_LEFT":
            ((r = "-100%"), (o = "0"));
            break;
          case "BOTTOM_RIGHT":
            ((r = "0"), (o = "0"));
            break;
          default:
            ((r = "-50%"), (o = "-50%"));
        }
        const i = t.x + (this.opts.offsetX || 0) + "px",
          a = t.y + (this.opts.offsetY || 0) + "px";
        ((this.element.style.transform = `translateX(${r}) translateX(${i}) translateY(${o}) translateY(${a})`),
          this.opts.zIndex &&
            (this.element.style.zIndex = this.opts.zIndex.toString()));
      }
    }
    onRemove() {
      this.element && this.element.remove();
    }
    setOptions(e) {
      const { element: t, ...r } = e;
      ((this.element = t), (this.opts = r), this.draw());
    }
  };
}
let ye;
const ke = [
    "bounds_changed",
    "center_changed",
    "click",
    "contextmenu",
    "dblclick",
    "drag",
    "dragend",
    "dragstart",
    "heading_changed",
    "idle",
    "isfractionalzoomenabled_changed",
    "mapcapabilities_changed",
    "maptypeid_changed",
    "mousemove",
    "mouseout",
    "mouseover",
    "projection_changed",
    "renderingtype_changed",
    "rightclick",
    "tilesloaded",
    "tilt_changed",
    "zoom_changed",
  ],
  st = H({
    props: {
      apiPromise: { type: Promise },
      apiKey: { type: String, default: "" },
      version: { type: String, default: "weekly" },
      libraries: { type: Array, default: () => ["places", "marker"] },
      region: { type: String, required: !1 },
      language: { type: String, required: !1 },
      backgroundColor: { type: String, required: !1 },
      center: { type: Object, default: () => ({ lat: 0, lng: 0 }) },
      clickableIcons: { type: Boolean, required: !1, default: void 0 },
      controlSize: { type: Number, required: !1 },
      disableDefaultUi: { type: Boolean, required: !1, default: void 0 },
      disableDoubleClickZoom: { type: Boolean, required: !1, default: void 0 },
      draggable: { type: Boolean, required: !1, default: void 0 },
      draggableCursor: { type: String, required: !1 },
      draggingCursor: { type: String, required: !1 },
      fullscreenControl: { type: Boolean, required: !1, default: void 0 },
      fullscreenControlPosition: { type: String, required: !1 },
      gestureHandling: { type: String, required: !1 },
      heading: { type: Number, required: !1 },
      isFractionalZoomEnabled: { type: Boolean, required: !1, default: void 0 },
      keyboardShortcuts: { type: Boolean, required: !1, default: void 0 },
      mapTypeControl: { type: Boolean, required: !1, default: void 0 },
      mapTypeControlOptions: { type: Object, required: !1 },
      mapTypeId: { type: [Number, String], required: !1 },
      mapId: { type: String, required: !1 },
      maxZoom: { type: Number, required: !1 },
      minZoom: { type: Number, required: !1 },
      noClear: { type: Boolean, required: !1, default: void 0 },
      panControl: { type: Boolean, required: !1, default: void 0 },
      panControlPosition: { type: String, required: !1 },
      restriction: { type: Object, required: !1 },
      rotateControl: { type: Boolean, required: !1, default: void 0 },
      rotateControlPosition: { type: String, required: !1 },
      scaleControl: { type: Boolean, required: !1, default: void 0 },
      scaleControlStyle: { type: Number, required: !1 },
      scrollwheel: { type: Boolean, required: !1, default: void 0 },
      streetView: { type: Object, required: !1 },
      streetViewControl: { type: Boolean, required: !1, default: void 0 },
      streetViewControlPosition: { type: String, required: !1 },
      styles: { type: Array, required: !1 },
      tilt: { type: Number, required: !1 },
      zoom: { type: Number, required: !1 },
      zoomControl: { type: Boolean, required: !1, default: void 0 },
      zoomControlPosition: { type: String, required: !1 },
      nonce: { type: String, default: "" },
    },
    emits: ke,
    setup(s, { emit: e }) {
      const t = C(),
        r = C(!1),
        o = C(),
        i = C(),
        a = C(!1);
      (ee(ue, o), ee(de, i), ee(et, a));
      const c = () => {
          const l = { ...s };
          Object.keys(l).forEach((h) => {
            l[h] === void 0 && delete l[h];
          });
          const p = (h) => {
              var f;
              return h
                ? {
                    position:
                      (f = i.value) == null ? void 0 : f.ControlPosition[h],
                  }
                : {};
            },
            m = {
              scaleControlOptions: s.scaleControlStyle
                ? { style: s.scaleControlStyle }
                : {},
              panControlOptions: p(s.panControlPosition),
              zoomControlOptions: p(s.zoomControlPosition),
              rotateControlOptions: p(s.rotateControlPosition),
              streetViewControlOptions: p(s.streetViewControlPosition),
              fullscreenControlOptions: p(s.fullscreenControlPosition),
              disableDefaultUI: s.disableDefaultUi,
            };
          return { ...l, ...m };
        },
        n = U(
          [i, o],
          ([l, p]) => {
            const m = l,
              h = p;
            m &&
              h &&
              (m.event.addListenerOnce(h, "tilesloaded", () => {
                a.value = !0;
              }),
              setTimeout(n, 0));
          },
          { immediate: !0 },
        ),
        d = () => {
          try {
            const {
              apiKey: l,
              region: p,
              version: m,
              language: h,
              libraries: f,
              nonce: g,
            } = s;
            ye = new N({
              apiKey: l,
              region: p,
              version: m,
              language: h,
              libraries: f,
              nonce: g,
            });
          } catch (l) {
            console.error(l);
          }
        },
        u = (l) => {
          ((i.value = q(l.maps)), (o.value = q(new l.maps.Map(t.value, c()))));
          const p = ot(i.value);
          ((i.value[te] = p),
            ke.forEach((h) => {
              var f;
              (f = o.value) == null || f.addListener(h, (g) => e(h, g));
            }),
            (r.value = !0));
          const m = Object.keys(s)
            .filter(
              (h) =>
                ![
                  "apiPromise",
                  "apiKey",
                  "version",
                  "libraries",
                  "region",
                  "language",
                  "center",
                  "zoom",
                  "nonce",
                ].includes(h),
            )
            .map((h) => Ke(s, h));
          U([() => s.center, () => s.zoom, ...m], ([h, f], [g, v]) => {
            var k, b, L;
            const { center: O, zoom: y, ..._ } = c();
            ((k = o.value) == null || k.setOptions(_),
              f !== void 0 &&
                f !== v &&
                ((b = o.value) == null || b.setZoom(f)));
            const E = !g || h.lng !== g.lng || h.lat !== g.lat;
            h && E && ((L = o.value) == null || L.panTo(h));
          });
        };
      return (
        Ge(() => {
          s.apiPromise && s.apiPromise instanceof Promise
            ? s.apiPromise.then(u)
            : (d(), ye.load().then(u));
        }),
        ne(() => {
          var l;
          ((a.value = !1),
            o.value &&
              ((l = i.value) == null ||
                l.event.clearInstanceListeners(o.value)));
        }),
        { mapRef: t, ready: r, map: o, api: i, mapTilesLoaded: a }
      );
    },
  }),
  Ie = (s, e) => {
    const t = s.__vccOpts || s;
    for (const [r, o] of e) t[r] = o;
    return t;
  },
  it = { ref: "mapRef", class: "mapdiv" };
function at(s, e, t, r, o, i) {
  return (
    S(),
    x("div", null, [
      B("div", it, null, 512),
      ce(
        s.$slots,
        "default",
        De(
          Fe({
            ready: s.ready,
            map: s.map,
            api: s.api,
            mapTilesLoaded: s.mapTilesLoaded,
          }),
        ),
        void 0,
        !0,
      ),
    ])
  );
}
const nt = Ie(st, [
  ["render", at],
  ["__scopeId", "data-v-d05fc6bc"],
]);
function lt(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var ct = function s(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, o, i;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (o = r; o-- !== 0; ) if (!s(e[o], t[o])) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
      return !1;
    for (o = r; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[o])) return !1;
    for (o = r; o-- !== 0; ) {
      var a = i[o];
      if (!s(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
};
const V = lt(ct),
  ut = (s) => s === "Marker",
  dt = (s) => s === te,
  ht = (s, e, t, r) => {
    const o = C(),
      i = W(ue, C()),
      a = W(de, C()),
      c = W(Oe, C()),
      n = z(
        () =>
          !!(
            c.value &&
            a.value &&
            (o.value instanceof a.value.Marker ||
              o.value instanceof a.value[te])
          ),
      );
    return (
      U(
        [i, t],
        (d, [u, l]) => {
          var p, m, h;
          const f = !V(t.value, l) || i.value !== u;
          !i.value ||
            !a.value ||
            !f ||
            (o.value
              ? (o.value.setOptions(t.value),
                n.value &&
                  ((p = c.value) == null || p.removeMarker(o.value),
                  (m = c.value) == null || m.addMarker(o.value)))
              : (ut(s)
                  ? (o.value = q(new a.value[s](t.value)))
                  : dt(s)
                    ? (o.value = q(new a.value[s](t.value)))
                    : (o.value = q(
                        new a.value[s]({ ...t.value, map: i.value }),
                      )),
                n.value
                  ? (h = c.value) == null || h.addMarker(o.value)
                  : o.value.setMap(i.value),
                e.forEach((g) => {
                  var v;
                  (v = o.value) == null || v.addListener(g, (k) => r(g, k));
                })));
        },
        { immediate: !0 },
      ),
      ne(() => {
        var d, u;
        o.value &&
          ((d = a.value) == null || d.event.clearInstanceListeners(o.value),
          n.value
            ? (u = c.value) == null || u.removeMarker(o.value)
            : o.value.setMap(null));
      }),
      o
    );
  };
xe.concat(["bounds_changed"]);
xe.concat(["center_changed", "radius_changed"]);
const we = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
  ],
  re = 1,
  G = 8;
class he {
  static from(e) {
    if (!(e instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    const [t, r] = new Uint8Array(e, 0, 2);
    if (t !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    const o = r >> 4;
    if (o !== re) throw new Error(`Got v${o} data when expected v${re}.`);
    const i = we[r & 15];
    if (!i) throw new Error("Unrecognized array type.");
    const [a] = new Uint16Array(e, 2, 1),
      [c] = new Uint32Array(e, 4, 1);
    return new he(c, a, i, e);
  }
  constructor(e, t = 64, r = Float64Array, o) {
    if (isNaN(e) || e < 0) throw new Error(`Unpexpected numItems value: ${e}.`);
    ((this.numItems = +e),
      (this.nodeSize = Math.min(Math.max(+t, 2), 65535)),
      (this.ArrayType = r),
      (this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array));
    const i = we.indexOf(this.ArrayType),
      a = e * 2 * this.ArrayType.BYTES_PER_ELEMENT,
      c = e * this.IndexArrayType.BYTES_PER_ELEMENT,
      n = (8 - (c % 8)) % 8;
    if (i < 0) throw new Error(`Unexpected typed array class: ${r}.`);
    o && o instanceof ArrayBuffer
      ? ((this.data = o),
        (this.ids = new this.IndexArrayType(this.data, G, e)),
        (this.coords = new this.ArrayType(this.data, G + c + n, e * 2)),
        (this._pos = e * 2),
        (this._finished = !0))
      : ((this.data = new ArrayBuffer(G + a + c + n)),
        (this.ids = new this.IndexArrayType(this.data, G, e)),
        (this.coords = new this.ArrayType(this.data, G + c + n, e * 2)),
        (this._pos = 0),
        (this._finished = !1),
        new Uint8Array(this.data, 0, 2).set([219, (re << 4) + i]),
        (new Uint16Array(this.data, 2, 1)[0] = t),
        (new Uint32Array(this.data, 4, 1)[0] = e));
  }
  add(e, t) {
    const r = this._pos >> 1;
    return (
      (this.ids[r] = r),
      (this.coords[this._pos++] = e),
      (this.coords[this._pos++] = t),
      r
    );
  }
  finish() {
    const e = this._pos >> 1;
    if (e !== this.numItems)
      throw new Error(`Added ${e} items when expected ${this.numItems}.`);
    return (
      ae(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0),
      (this._finished = !0),
      this
    );
  }
  range(e, t, r, o) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: i, coords: a, nodeSize: c } = this,
      n = [0, i.length - 1, 0],
      d = [];
    for (; n.length; ) {
      const u = n.pop() || 0,
        l = n.pop() || 0,
        p = n.pop() || 0;
      if (l - p <= c) {
        for (let g = p; g <= l; g++) {
          const v = a[2 * g],
            k = a[2 * g + 1];
          v >= e && v <= r && k >= t && k <= o && d.push(i[g]);
        }
        continue;
      }
      const m = (p + l) >> 1,
        h = a[2 * m],
        f = a[2 * m + 1];
      (h >= e && h <= r && f >= t && f <= o && d.push(i[m]),
        (u === 0 ? e <= h : t <= f) &&
          (n.push(p), n.push(m - 1), n.push(1 - u)),
        (u === 0 ? r >= h : o >= f) &&
          (n.push(m + 1), n.push(l), n.push(1 - u)));
    }
    return d;
  }
  within(e, t, r) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: o, coords: i, nodeSize: a } = this,
      c = [0, o.length - 1, 0],
      n = [],
      d = r * r;
    for (; c.length; ) {
      const u = c.pop() || 0,
        l = c.pop() || 0,
        p = c.pop() || 0;
      if (l - p <= a) {
        for (let g = p; g <= l; g++)
          be(i[2 * g], i[2 * g + 1], e, t) <= d && n.push(o[g]);
        continue;
      }
      const m = (p + l) >> 1,
        h = i[2 * m],
        f = i[2 * m + 1];
      (be(h, f, e, t) <= d && n.push(o[m]),
        (u === 0 ? e - r <= h : t - r <= f) &&
          (c.push(p), c.push(m - 1), c.push(1 - u)),
        (u === 0 ? e + r >= h : t + r >= f) &&
          (c.push(m + 1), c.push(l), c.push(1 - u)));
    }
    return n;
  }
}
function ae(s, e, t, r, o, i) {
  if (o - r <= t) return;
  const a = (r + o) >> 1;
  (Pe(s, e, a, r, o, i),
    ae(s, e, t, r, a - 1, 1 - i),
    ae(s, e, t, a + 1, o, 1 - i));
}
function Pe(s, e, t, r, o, i) {
  for (; o > r; ) {
    if (o - r > 600) {
      const d = o - r + 1,
        u = t - r + 1,
        l = Math.log(d),
        p = 0.5 * Math.exp((2 * l) / 3),
        m = 0.5 * Math.sqrt((l * p * (d - p)) / d) * (u - d / 2 < 0 ? -1 : 1),
        h = Math.max(r, Math.floor(t - (u * p) / d + m)),
        f = Math.min(o, Math.floor(t + ((d - u) * p) / d + m));
      Pe(s, e, t, h, f, i);
    }
    const a = e[2 * t + i];
    let c = r,
      n = o;
    for (K(s, e, r, t), e[2 * o + i] > a && K(s, e, r, o); c < n; ) {
      for (K(s, e, c, n), c++, n--; e[2 * c + i] < a; ) c++;
      for (; e[2 * n + i] > a; ) n--;
    }
    (e[2 * r + i] === a ? K(s, e, r, n) : (n++, K(s, e, n, o)),
      n <= t && (r = n + 1),
      t <= n && (o = n - 1));
  }
}
function K(s, e, t, r) {
  (oe(s, t, r), oe(e, 2 * t, 2 * r), oe(e, 2 * t + 1, 2 * r + 1));
}
function oe(s, e, t) {
  const r = s[e];
  ((s[e] = s[t]), (s[t] = r));
}
function be(s, e, t, r) {
  const o = s - t,
    i = e - r;
  return o * o + i * i;
}
const pt = {
    minZoom: 0,
    maxZoom: 16,
    minPoints: 2,
    radius: 40,
    extent: 512,
    nodeSize: 64,
    log: !1,
    generateId: !1,
    reduce: null,
    map: (s) => s,
  },
  _e = Math.fround || ((s) => (e) => ((s[0] = +e), s[0]))(new Float32Array(1)),
  A = 2,
  P = 3,
  se = 4,
  I = 5,
  Te = 6;
class Ae {
  constructor(e) {
    ((this.options = Object.assign(Object.create(pt), e)),
      (this.trees = new Array(this.options.maxZoom + 1)),
      (this.stride = this.options.reduce ? 7 : 6),
      (this.clusterProps = []));
  }
  load(e) {
    const { log: t, minZoom: r, maxZoom: o } = this.options;
    t && console.time("total time");
    const i = `prepare ${e.length} points`;
    (t && console.time(i), (this.points = e));
    const a = [];
    for (let n = 0; n < e.length; n++) {
      const d = e[n];
      if (!d.geometry) continue;
      const [u, l] = d.geometry.coordinates,
        p = _e(J(u)),
        m = _e(Q(l));
      (a.push(p, m, 1 / 0, n, -1, 1), this.options.reduce && a.push(0));
    }
    let c = (this.trees[o + 1] = this._createTree(a));
    t && console.timeEnd(i);
    for (let n = o; n >= r; n--) {
      const d = +Date.now();
      ((c = this.trees[n] = this._createTree(this._cluster(c, n))),
        t &&
          console.log(
            "z%d: %d clusters in %dms",
            n,
            c.numItems,
            +Date.now() - d,
          ));
    }
    return (t && console.timeEnd("total time"), this);
  }
  getClusters(e, t) {
    let r = ((((e[0] + 180) % 360) + 360) % 360) - 180;
    const o = Math.max(-90, Math.min(90, e[1]));
    let i = e[2] === 180 ? 180 : ((((e[2] + 180) % 360) + 360) % 360) - 180;
    const a = Math.max(-90, Math.min(90, e[3]));
    if (e[2] - e[0] >= 360) ((r = -180), (i = 180));
    else if (r > i) {
      const l = this.getClusters([r, o, 180, a], t),
        p = this.getClusters([-180, o, i, a], t);
      return l.concat(p);
    }
    const c = this.trees[this._limitZoom(t)],
      n = c.range(J(r), Q(a), J(i), Q(o)),
      d = c.data,
      u = [];
    for (const l of n) {
      const p = this.stride * l;
      u.push(
        d[p + I] > 1 ? Ce(d, p, this.clusterProps) : this.points[d[p + P]],
      );
    }
    return u;
  }
  getChildren(e) {
    const t = this._getOriginId(e),
      r = this._getOriginZoom(e),
      o = "No cluster with the specified id.",
      i = this.trees[r];
    if (!i) throw new Error(o);
    const a = i.data;
    if (t * this.stride >= a.length) throw new Error(o);
    const c = this.options.radius / (this.options.extent * Math.pow(2, r - 1)),
      n = a[t * this.stride],
      d = a[t * this.stride + 1],
      u = i.within(n, d, c),
      l = [];
    for (const p of u) {
      const m = p * this.stride;
      a[m + se] === e &&
        l.push(
          a[m + I] > 1 ? Ce(a, m, this.clusterProps) : this.points[a[m + P]],
        );
    }
    if (l.length === 0) throw new Error(o);
    return l;
  }
  getLeaves(e, t, r) {
    ((t = t || 10), (r = r || 0));
    const o = [];
    return (this._appendLeaves(o, e, t, r, 0), o);
  }
  getTile(e, t, r) {
    const o = this.trees[this._limitZoom(e)],
      i = Math.pow(2, e),
      { extent: a, radius: c } = this.options,
      n = c / a,
      d = (r - n) / i,
      u = (r + 1 + n) / i,
      l = { features: [] };
    return (
      this._addTileFeatures(
        o.range((t - n) / i, d, (t + 1 + n) / i, u),
        o.data,
        t,
        r,
        i,
        l,
      ),
      t === 0 &&
        this._addTileFeatures(o.range(1 - n / i, d, 1, u), o.data, i, r, i, l),
      t === i - 1 &&
        this._addTileFeatures(o.range(0, d, n / i, u), o.data, -1, r, i, l),
      l.features.length ? l : null
    );
  }
  getClusterExpansionZoom(e) {
    let t = this._getOriginZoom(e) - 1;
    for (; t <= this.options.maxZoom; ) {
      const r = this.getChildren(e);
      if ((t++, r.length !== 1)) break;
      e = r[0].properties.cluster_id;
    }
    return t;
  }
  _appendLeaves(e, t, r, o, i) {
    const a = this.getChildren(t);
    for (const c of a) {
      const n = c.properties;
      if (
        (n && n.cluster
          ? i + n.point_count <= o
            ? (i += n.point_count)
            : (i = this._appendLeaves(e, n.cluster_id, r, o, i))
          : i < o
            ? i++
            : e.push(c),
        e.length === r)
      )
        break;
    }
    return i;
  }
  _createTree(e) {
    const t = new he(
      (e.length / this.stride) | 0,
      this.options.nodeSize,
      Float32Array,
    );
    for (let r = 0; r < e.length; r += this.stride) t.add(e[r], e[r + 1]);
    return (t.finish(), (t.data = e), t);
  }
  _addTileFeatures(e, t, r, o, i, a) {
    for (const c of e) {
      const n = c * this.stride,
        d = t[n + I] > 1;
      let u, l, p;
      if (d) ((u = Ne(t, n, this.clusterProps)), (l = t[n]), (p = t[n + 1]));
      else {
        const f = this.points[t[n + P]];
        u = f.properties;
        const [g, v] = f.geometry.coordinates;
        ((l = J(g)), (p = Q(v)));
      }
      const m = {
        type: 1,
        geometry: [
          [
            Math.round(this.options.extent * (l * i - r)),
            Math.round(this.options.extent * (p * i - o)),
          ],
        ],
        tags: u,
      };
      let h;
      (d || this.options.generateId
        ? (h = t[n + P])
        : (h = this.points[t[n + P]].id),
        h !== void 0 && (m.id = h),
        a.features.push(m));
    }
  }
  _limitZoom(e) {
    return Math.max(
      this.options.minZoom,
      Math.min(Math.floor(+e), this.options.maxZoom + 1),
    );
  }
  _cluster(e, t) {
    const { radius: r, extent: o, reduce: i, minPoints: a } = this.options,
      c = r / (o * Math.pow(2, t)),
      n = e.data,
      d = [],
      u = this.stride;
    for (let l = 0; l < n.length; l += u) {
      if (n[l + A] <= t) continue;
      n[l + A] = t;
      const p = n[l],
        m = n[l + 1],
        h = e.within(n[l], n[l + 1], c),
        f = n[l + I];
      let g = f;
      for (const v of h) {
        const k = v * u;
        n[k + A] > t && (g += n[k + I]);
      }
      if (g > f && g >= a) {
        let v = p * f,
          k = m * f,
          b,
          L = -1;
        const O = (((l / u) | 0) << 5) + (t + 1) + this.points.length;
        for (const y of h) {
          const _ = y * u;
          if (n[_ + A] <= t) continue;
          n[_ + A] = t;
          const E = n[_ + I];
          ((v += n[_] * E),
            (k += n[_ + 1] * E),
            (n[_ + se] = O),
            i &&
              (b ||
                ((b = this._map(n, l, !0)),
                (L = this.clusterProps.length),
                this.clusterProps.push(b)),
              i(b, this._map(n, _))));
        }
        ((n[l + se] = O),
          d.push(v / g, k / g, 1 / 0, O, -1, g),
          i && d.push(L));
      } else {
        for (let v = 0; v < u; v++) d.push(n[l + v]);
        if (g > 1)
          for (const v of h) {
            const k = v * u;
            if (!(n[k + A] <= t)) {
              n[k + A] = t;
              for (let b = 0; b < u; b++) d.push(n[k + b]);
            }
          }
      }
    }
    return d;
  }
  _getOriginId(e) {
    return (e - this.points.length) >> 5;
  }
  _getOriginZoom(e) {
    return (e - this.points.length) % 32;
  }
  _map(e, t, r) {
    if (e[t + I] > 1) {
      const a = this.clusterProps[e[t + Te]];
      return r ? Object.assign({}, a) : a;
    }
    const o = this.points[e[t + P]].properties,
      i = this.options.map(o);
    return r && i === o ? Object.assign({}, i) : i;
  }
}
function Ce(s, e, t) {
  return {
    type: "Feature",
    id: s[e + P],
    properties: Ne(s, e, t),
    geometry: { type: "Point", coordinates: [mt(s[e]), ft(s[e + 1])] },
  };
}
function Ne(s, e, t) {
  const r = s[e + I],
    o =
      r >= 1e4
        ? `${Math.round(r / 1e3)}k`
        : r >= 1e3
          ? `${Math.round(r / 100) / 10}k`
          : r,
    i = s[e + Te],
    a = i === -1 ? {} : Object.assign({}, t[i]);
  return Object.assign(a, {
    cluster: !0,
    cluster_id: s[e + P],
    point_count: r,
    point_count_abbreviated: o,
  });
}
function J(s) {
  return s / 360 + 0.5;
}
function Q(s) {
  const e = Math.sin((s * Math.PI) / 180),
    t = 0.5 - (0.25 * Math.log((1 + e) / (1 - e))) / Math.PI;
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function mt(s) {
  return (s - 0.5) * 360;
}
function ft(s) {
  const e = ((180 - s * 360) * Math.PI) / 180;
  return (360 * Math.atan(Math.exp(e))) / Math.PI - 90;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function pe(
  s,
  e,
) {
  var t = {};
  for (var r in s)
    Object.prototype.hasOwnProperty.call(s, r) &&
      e.indexOf(r) < 0 &&
      (t[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(s); o < r.length; o++)
      e.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, r[o]) &&
        (t[r[o]] = s[r[o]]);
  return t;
}
class M {
  static isAdvancedMarkerAvailable(e) {
    return (
      google.maps.marker &&
      e.getMapCapabilities().isAdvancedMarkersAvailable === !0
    );
  }
  static isAdvancedMarker(e) {
    return (
      google.maps.marker &&
      e instanceof google.maps.marker.AdvancedMarkerElement
    );
  }
  static setMap(e, t) {
    this.isAdvancedMarker(e) ? (e.map = t) : e.setMap(t);
  }
  static getPosition(e) {
    if (this.isAdvancedMarker(e)) {
      if (e.position) {
        if (e.position instanceof google.maps.LatLng) return e.position;
        if (e.position.lat && e.position.lng)
          return new google.maps.LatLng(e.position.lat, e.position.lng);
      }
      return new google.maps.LatLng(null);
    }
    return e.getPosition();
  }
  static getVisible(e) {
    return this.isAdvancedMarker(e) ? !0 : e.getVisible();
  }
}
class Y {
  constructor({ markers: e, position: t }) {
    ((this.markers = e),
      t &&
        (t instanceof google.maps.LatLng
          ? (this._position = t)
          : (this._position = new google.maps.LatLng(t))));
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position) return;
    const e = new google.maps.LatLngBounds(this._position, this._position);
    for (const t of this.markers) e.extend(M.getPosition(t));
    return e;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  get count() {
    return this.markers.filter((e) => M.getVisible(e)).length;
  }
  push(e) {
    this.markers.push(e);
  }
  delete() {
    (this.marker && (M.setMap(this.marker, null), (this.marker = void 0)),
      (this.markers.length = 0));
  }
}
const gt = (s, e, t, r) => {
    const o = ze(s.getBounds(), e, r);
    return t.filter((i) => o.contains(M.getPosition(i)));
  },
  ze = (s, e, t) => {
    const { northEast: r, southWest: o } = vt(s, e),
      i = yt({ northEast: r, southWest: o }, t);
    return kt(i, e);
  },
  Me = (s, e, t) => {
    const r = ze(s, e, t),
      o = r.getNorthEast(),
      i = r.getSouthWest();
    return [i.lng(), i.lat(), o.lng(), o.lat()];
  },
  vt = (s, e) => ({
    northEast: e.fromLatLngToDivPixel(s.getNorthEast()),
    southWest: e.fromLatLngToDivPixel(s.getSouthWest()),
  }),
  yt = ({ northEast: s, southWest: e }, t) => (
    (s.x += t),
    (s.y -= t),
    (e.x -= t),
    (e.y += t),
    { northEast: s, southWest: e }
  ),
  kt = ({ northEast: s, southWest: e }, t) => {
    const r = t.fromDivPixelToLatLng(e),
      o = t.fromDivPixelToLatLng(s);
    return new google.maps.LatLngBounds(r, o);
  };
class Re {
  constructor({ maxZoom: e = 16 }) {
    this.maxZoom = e;
  }
  noop({ markers: e }) {
    return bt(e);
  }
}
class wt extends Re {
  constructor(e) {
    var { viewportPadding: t = 60 } = e,
      r = pe(e, ["viewportPadding"]);
    (super(r), (this.viewportPadding = 60), (this.viewportPadding = t));
  }
  calculate({ markers: e, map: t, mapCanvasProjection: r }) {
    return t.getZoom() >= this.maxZoom
      ? { clusters: this.noop({ markers: e }), changed: !1 }
      : {
          clusters: this.cluster({
            markers: gt(t, r, e, this.viewportPadding),
            map: t,
            mapCanvasProjection: r,
          }),
        };
  }
}
const bt = (s) =>
  s.map((e) => new Y({ position: M.getPosition(e), markers: [e] }));
class _t extends Re {
  constructor(e) {
    var { maxZoom: t, radius: r = 60 } = e,
      o = pe(e, ["maxZoom", "radius"]);
    (super({ maxZoom: t }),
      (this.state = { zoom: -1 }),
      (this.superCluster = new Ae(
        Object.assign({ maxZoom: this.maxZoom, radius: r }, o),
      )));
  }
  calculate(e) {
    let t = !1;
    const r = { zoom: e.map.getZoom() };
    if (!V(e.markers, this.markers)) {
      ((t = !0), (this.markers = [...e.markers]));
      const o = this.markers.map((i) => {
        const a = M.getPosition(i);
        return {
          type: "Feature",
          geometry: { type: "Point", coordinates: [a.lng(), a.lat()] },
          properties: { marker: i },
        };
      });
      this.superCluster.load(o);
    }
    return (
      t ||
        ((this.state.zoom <= this.maxZoom || r.zoom <= this.maxZoom) &&
          (t = !V(this.state, r))),
      (this.state = r),
      t && (this.clusters = this.cluster(e)),
      { clusters: this.clusters, changed: t }
    );
  }
  cluster({ map: e }) {
    return this.superCluster
      .getClusters([-180, -90, 180, 90], Math.round(e.getZoom()))
      .map((t) => this.transformCluster(t));
  }
  transformCluster({
    geometry: {
      coordinates: [e, t],
    },
    properties: r,
  }) {
    if (r.cluster)
      return new Y({
        markers: this.superCluster
          .getLeaves(r.cluster_id, 1 / 0)
          .map((i) => i.properties.marker),
        position: { lat: t, lng: e },
      });
    const o = r.marker;
    return new Y({ markers: [o], position: M.getPosition(o) });
  }
}
class Ct extends wt {
  constructor(e) {
    var { maxZoom: t, radius: r = 60, viewportPadding: o = 60 } = e,
      i = pe(e, ["maxZoom", "radius", "viewportPadding"]);
    (super({ maxZoom: t, viewportPadding: o }),
      (this.superCluster = new Ae(
        Object.assign({ maxZoom: this.maxZoom, radius: r }, i),
      )),
      (this.state = { zoom: -1, view: [0, 0, 0, 0] }));
  }
  calculate(e) {
    const t = {
      zoom: Math.round(e.map.getZoom()),
      view: Me(e.map.getBounds(), e.mapCanvasProjection, this.viewportPadding),
    };
    let r = !V(this.state, t);
    if (!V(e.markers, this.markers)) {
      ((r = !0), (this.markers = [...e.markers]));
      const o = this.markers.map((i) => {
        const a = M.getPosition(i);
        return {
          type: "Feature",
          geometry: { type: "Point", coordinates: [a.lng(), a.lat()] },
          properties: { marker: i },
        };
      });
      this.superCluster.load(o);
    }
    return (
      r && ((this.clusters = this.cluster(e)), (this.state = t)),
      { clusters: this.clusters, changed: r }
    );
  }
  cluster({ map: e, mapCanvasProjection: t }) {
    const r = {
      zoom: Math.round(e.getZoom()),
      view: Me(e.getBounds(), t, this.viewportPadding),
    };
    return this.superCluster
      .getClusters(r.view, r.zoom)
      .map((o) => this.transformCluster(o));
  }
  transformCluster({
    geometry: {
      coordinates: [e, t],
    },
    properties: r,
  }) {
    if (r.cluster)
      return new Y({
        markers: this.superCluster
          .getLeaves(r.cluster_id, 1 / 0)
          .map((i) => i.properties.marker),
        position: { lat: t, lng: e },
      });
    const o = r.marker;
    return new Y({ markers: [o], position: M.getPosition(o) });
  }
}
class Mt {
  constructor(e, t) {
    this.markers = { sum: e.length };
    const r = t.map((i) => i.count),
      o = r.reduce((i, a) => i + a, 0);
    this.clusters = {
      count: t.length,
      markers: {
        mean: o / t.length,
        sum: o,
        min: Math.min(...r),
        max: Math.max(...r),
      },
    };
  }
}
class Et {
  render({ count: e, position: t }, r, o) {
    const i = `<svg fill="${e > Math.max(10, r.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`,
      a = `Cluster of ${e} markers`,
      c = Number(google.maps.Marker.MAX_ZINDEX) + e;
    if (M.isAdvancedMarkerAvailable(o)) {
      const d = document.createElement("div");
      d.innerHTML = i;
      const u = d.firstElementChild;
      u.setAttribute("transform", "translate(0 25)");
      const l = { map: o, position: t, zIndex: c, title: a, content: u };
      return new google.maps.marker.AdvancedMarkerElement(l);
    }
    const n = {
      position: t,
      zIndex: c,
      title: a,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(i)}`,
        anchor: new google.maps.Point(25, 25),
      },
    };
    return new google.maps.Marker(n);
  }
}
function Lt(s, e) {
  for (let t in e.prototype) s.prototype[t] = e.prototype[t];
}
class me {
  constructor() {
    Lt(me, google.maps.OverlayView);
  }
}
var $;
(function (s) {
  ((s.CLUSTERING_BEGIN = "clusteringbegin"),
    (s.CLUSTERING_END = "clusteringend"),
    (s.CLUSTER_CLICK = "click"));
})($ || ($ = {}));
const St = (s, e, t) => {
  t.fitBounds(e.bounds);
};
class Ot extends me {
  constructor({
    map: e,
    markers: t = [],
    algorithmOptions: r = {},
    algorithm: o = new _t(r),
    renderer: i = new Et(),
    onClusterClick: a = St,
  }) {
    (super(),
      (this.markers = [...t]),
      (this.clusters = []),
      (this.algorithm = o),
      (this.renderer = i),
      (this.onClusterClick = a),
      e && this.setMap(e));
  }
  addMarker(e, t) {
    this.markers.includes(e) || (this.markers.push(e), t || this.render());
  }
  addMarkers(e, t) {
    (e.forEach((r) => {
      this.addMarker(r, !0);
    }),
      t || this.render());
  }
  removeMarker(e, t) {
    const r = this.markers.indexOf(e);
    return r === -1
      ? !1
      : (M.setMap(e, null), this.markers.splice(r, 1), t || this.render(), !0);
  }
  removeMarkers(e, t) {
    let r = !1;
    return (
      e.forEach((o) => {
        r = this.removeMarker(o, !0) || r;
      }),
      r && !t && this.render(),
      r
    );
  }
  clearMarkers(e) {
    ((this.markers.length = 0), e || this.render());
  }
  render() {
    const e = this.getMap();
    if (e instanceof google.maps.Map && e.getProjection()) {
      google.maps.event.trigger(this, $.CLUSTERING_BEGIN, this);
      const { clusters: t, changed: r } = this.algorithm.calculate({
        markers: this.markers,
        map: e,
        mapCanvasProjection: this.getProjection(),
      });
      if (r || r == null) {
        const o = new Set();
        for (const a of t) a.markers.length == 1 && o.add(a.markers[0]);
        const i = [];
        for (const a of this.clusters)
          a.marker != null &&
            (a.markers.length == 1
              ? o.has(a.marker) || M.setMap(a.marker, null)
              : i.push(a.marker));
        ((this.clusters = t),
          this.renderClusters(),
          requestAnimationFrame(() => i.forEach((a) => M.setMap(a, null))));
      }
      google.maps.event.trigger(this, $.CLUSTERING_END, this);
    }
  }
  onAdd() {
    ((this.idleListener = this.getMap().addListener(
      "idle",
      this.render.bind(this),
    )),
      this.render());
  }
  onRemove() {
    (google.maps.event.removeListener(this.idleListener), this.reset());
  }
  reset() {
    (this.markers.forEach((e) => M.setMap(e, null)),
      this.clusters.forEach((e) => e.delete()),
      (this.clusters = []));
  }
  renderClusters() {
    const e = new Mt(this.markers, this.clusters),
      t = this.getMap();
    this.clusters.forEach((r) => {
      (r.markers.length === 1
        ? (r.marker = r.markers[0])
        : ((r.marker = this.renderer.render(r, e, t)),
          r.markers.forEach((o) => M.setMap(o, null)),
          this.onClusterClick &&
            r.marker.addListener("click", (o) => {
              (google.maps.event.trigger(this, $.CLUSTER_CLICK, r),
                this.onClusterClick(o, r, t));
            })),
        M.setMap(r.marker, t));
    });
  }
}
const Ee = Object.values($),
  xt = H({
    name: "MarkerCluster",
    props: { options: { type: Object, default: () => ({}) } },
    emits: Ee,
    setup(s, { emit: e, expose: t, slots: r }) {
      const o = C(),
        i = W(ue, C()),
        a = W(de, C());
      return (
        ee(Oe, o),
        U(
          i,
          () => {
            i.value &&
              ((o.value = q(
                new Ot({
                  map: i.value,
                  algorithm: new Ct(s.options.algorithmOptions ?? {}),
                  ...s.options,
                }),
              )),
              Ee.forEach((c) => {
                var n;
                (n = o.value) == null || n.addListener(c, (d) => e(c, d));
              }));
          },
          { immediate: !0 },
        ),
        ne(() => {
          var c;
          o.value &&
            ((c = a.value) == null || c.event.clearInstanceListeners(o.value),
            o.value.clearMarkers(),
            o.value.setMap(null));
        }),
        t({ markerCluster: o }),
        () => {
          var c;
          return (c = r.default) == null ? void 0 : c.call(r);
        }
      );
    },
  }),
  It = H({
    inheritAttrs: !1,
    props: { options: { type: Object, required: !0 } },
    setup(s, { slots: e, emit: t, expose: r }) {
      const o = C(),
        i = z(() => {
          var n;
          return (n = e.default) == null
            ? void 0
            : n.call(e).some((d) => d.type !== Ue);
        }),
        a = z(() => ({ ...s.options, element: o.value })),
        c = ht(te, [], a, t);
      return (
        r({ customMarker: c }),
        { customMarkerRef: o, customMarker: c, hasSlotContent: i }
      );
    },
  }),
  Pt = { key: 0, class: "custom-marker-wrapper" };
function Tt(s, e, t, r, o, i) {
  return s.hasSlotContent
    ? (S(),
      x("div", Pt, [
        B(
          "div",
          $e(
            {
              ref: "customMarkerRef",
              style: { cursor: s.$attrs.onClick ? "pointer" : void 0 },
            },
            s.$attrs,
          ),
          [ce(s.$slots, "default", {}, void 0, !0)],
          16,
        ),
      ]))
    : le("", !0);
}
const Le = Ie(It, [
    ["render", Tt],
    ["__scopeId", "data-v-2d2d343a"],
  ]),
  At = {
    render: ({ count: s, position: e }) =>
      new google.maps.Marker({
        position: e,
        label: {
          text: s.toString(),
          color: "#ffbc0d",
          fontWeight: "bold",
          fontSize: "24px",
          fontFamily: "Speedee",
        },
        icon: {
          url: "/images/cluster.svg",
          scaledSize: new google.maps.Size(56, 56),
        },
      }),
  },
  Nt = ["width", "height"],
  zt = H({
    __name: "MarkerLocationGreen",
    props: { size: {}, label: {} },
    setup(s) {
      const e = s,
        t = z(() => {
          const [r, o, i] = {
            xl: [56, 75.6, 48],
            l: [40, 58, 28],
            m: [24, 34.5, 18],
            s: [16, 23, 12],
          }[e.size] || [24, 34.5];
          return { width: `${r}px`, height: `${o}px`, labelFontSize: `${i}px` };
        });
      return (r, o) => (
        S(),
        x(
          "div",
          {
            style: ie({ width: w(t).width, height: w(t).height }),
            class: "relative flex justify-center items-center",
          },
          [
            (S(),
            x(
              "svg",
              {
                class: "absolute top-0 left-0",
                width: w(t).width,
                height: w(t).height,
                viewBox: "0 0 40 58",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              [
                ...(o[0] ||
                  (o[0] = [
                    B(
                      "path",
                      {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M20 54C21.4298 54 40 39 40 19.9412C40 8.92797 31.0457 0 20 0C8.9543 0 0 8.92797 0 19.9412C0 39 18.5702 54 20 54Z",
                        fill: "#264F36",
                      },
                      null,
                      -1,
                    ),
                  ])),
              ],
              8,
              Nt,
            )),
            s.label
              ? (S(),
                x(
                  "div",
                  {
                    key: 0,
                    class: "z-10 text-mcd-gold mb-2 font-semibold",
                    style: ie({ "font-size": w(t).labelFontSize }),
                  },
                  We(s.label),
                  5,
                ))
              : le("", !0),
          ],
          4,
        )
      );
    },
  }),
  Rt = { class: "relative w-full" },
  Se = 100,
  jt = 700,
  Zt = 500,
  Bt = H({
    __name: "index",
    props: {
      locations: {},
      locationSelected: {},
      showOnlyLocationMarker: { type: Boolean },
    },
    emits: ["select-location"],
    setup(s, { emit: e }) {
      const t = { lat: 40.4637, lng: -3.7492 },
        r = {
          SELECTED_LOCATION: 15,
          USER_WITH_LOCATIONS: 12,
          USER_ONLY: 13,
          LOCATIONS_ONLY: 10,
          DEFAULT: 6,
        },
        {
          public: { googleApiKey: o },
        } = je(),
        i = C(null),
        a = C(!1),
        c = C(!1),
        n = C(!1),
        d = C({}),
        u = C(!1),
        l = s,
        p = e,
        m = Xe(),
        h = z(() =>
          !m.latitude || !m.longitude
            ? null
            : { lat: m.latitude, lng: m.longitude },
        ),
        f = z(() =>
          l.locations.length > 0 &&
          l.locationSelected >= 0 &&
          l.locationSelected < l.locations.length
            ? {
                lat: l.locations[l.locationSelected].lat,
                lng: l.locations[l.locationSelected].lng,
              }
            : h.value
              ? h.value
              : l.locations.length > 0
                ? { lat: l.locations[0].lat, lng: l.locations[0].lng }
                : t,
        ),
        g = z(() =>
          l.locations.length > 0 && l.locationSelected >= 0
            ? r.SELECTED_LOCATION
            : h.value && l.locations.length > 0
              ? r.USER_WITH_LOCATIONS
              : h.value
                ? r.USER_ONLY
                : l.locations.length > 0
                  ? r.LOCATIONS_ONLY
                  : r.DEFAULT,
        );
      function v(y) {
        if (l.locations[y]) {
          const _ = l.locations[y].id;
          ((d.value[_] = !0),
            setTimeout(() => {
              d.value[_] = !1;
            }, jt));
        }
      }
      function k() {
        return i.value ? i.value.$el.__vue__?.$.exposed?.map : null;
      }
      function b() {
        const y = k();
        if (!y || !l.locations.length) return;
        u.value = !0;
        const _ = new google.maps.LatLngBounds();
        (l.locations.forEach((X) => {
          _.extend(new google.maps.LatLng(X.lat, X.lng));
        }),
          h.value && _.extend(new google.maps.LatLng(h.value.lat, h.value.lng)),
          y.fitBounds(_, { animate: !0 }));
        const E = google.maps.event.addListener(y, "idle", function () {
          (y.getZoom() > r.SELECTED_LOCATION && y.setZoom(r.SELECTED_LOCATION),
            google.maps.event.removeListener(E),
            setTimeout(() => {
              u.value = !1;
            }, 300));
        });
      }
      function L(y) {
        y !== l.locationSelected && (v(y), p("select-location", y));
      }
      function O() {
        a.value ||
          ((a.value = !0),
          setTimeout(() => {
            ((c.value = !0),
              (n.value = !0),
              i.value &&
                l.locations.length > 0 &&
                (b(),
                l.locationSelected >= 0 &&
                  l.locationSelected < l.locations.length &&
                  v(l.locationSelected)));
          }, Se));
      }
      return (
        U(
          [() => l.locations, h],
          () => {
            a.value &&
              l.locations.length > 0 &&
              setTimeout(() => {
                b();
              }, Se);
          },
          { deep: !0 },
        ),
        U(
          () => l.locationSelected,
          (y, _) => {
            if (
              a.value &&
              l.locations.length > 0 &&
              y >= 0 &&
              y < l.locations.length &&
              y !== _
            ) {
              v(y);
              const E = k();
              if (!E) return;
              ((u.value = !0),
                E.panTo({ lat: l.locations[y].lat, lng: l.locations[y].lng }),
                E.setZoom(r.SELECTED_LOCATION),
                setTimeout(() => {
                  u.value = !1;
                }, Zt));
            }
          },
        ),
        (y, _) => {
          const E = Ze,
            X = Be;
          return (
            S(),
            x(
              "div",
              {
                class: T([
                  "relative desktop:h-[536px] tablet:h-[416px] h-[360px] w-screen mx-auto overflow-hidden xl:rounded-lg rounded-none transition-all duration-500",
                  { "map-container-loaded": w(c), "map-panning": w(u) },
                ]),
              },
              [
                j(X, null, {
                  default: F(() => [
                    j(
                      w(nt),
                      {
                        ref_key: "mapRef",
                        ref: i,
                        class: T([
                          "relative w-full h-full transition-all duration-500",
                          { "opacity-0": !w(c), "opacity-100": w(c) },
                        ]),
                        "api-key": w(o),
                        center: w(f),
                        zoom: w(g),
                        "min-zoom": 6,
                        "disable-default-ui": "",
                        "aria-label":
                          "Mapa de localizaciones de restaurantes de McDonald's",
                        onIdle: O,
                      },
                      {
                        default: F(() => [
                          w(h) && !l.showOnlyLocationMarker
                            ? (S(),
                              fe(
                                w(Le),
                                {
                                  key: 0,
                                  options: { position: w(h), zIndex: 1e3 },
                                },
                                {
                                  default: F(() => [
                                    B(
                                      "div",
                                      {
                                        class: T([
                                          "relative user-location-marker",
                                          { "fade-in": !0 },
                                        ]),
                                      },
                                      [
                                        j(E, {
                                          name: "locationLocationSolid",
                                          size: "3xl",
                                          color: "gold",
                                        }),
                                      ],
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["options"],
                              ))
                            : le("", !0),
                          j(
                            w(xt),
                            { options: { renderer: w(At) } },
                            {
                              default: F(() => [
                                (S(!0),
                                x(
                                  Ve,
                                  null,
                                  Ye(
                                    s.locations,
                                    (D, R) => (
                                      S(),
                                      fe(
                                        w(Le),
                                        {
                                          key: D.id,
                                          options: {
                                            position: {
                                              lat: D.lat,
                                              lng: D.lng,
                                            },
                                            zIndex:
                                              R === s.locationSelected
                                                ? 999
                                                : 1,
                                          },
                                          onClick: He((qt) => L(R), ["stop"]),
                                        },
                                        {
                                          default: F(() => [
                                            l.showOnlyLocationMarker
                                              ? (S(),
                                                x(
                                                  "div",
                                                  {
                                                    key: 1,
                                                    class: T([
                                                      "relative location-marker",
                                                      { "fade-in": !0 },
                                                    ]),
                                                  },
                                                  [
                                                    j(E, {
                                                      name: "locationLocationSolid",
                                                      size: "3xl",
                                                      color: "gold",
                                                    }),
                                                  ],
                                                ))
                                              : (S(),
                                                x(
                                                  "div",
                                                  {
                                                    key: 0,
                                                    class: T({
                                                      "marker-wrapper": !0,
                                                      "marker-visible": !0,
                                                      "marker-staggered": !0,
                                                      "marker-hover":
                                                        R !==
                                                        s.locationSelected,
                                                    }),
                                                    style: ie({ "--index": R }),
                                                  },
                                                  [
                                                    j(
                                                      zt,
                                                      {
                                                        size:
                                                          R ===
                                                          s.locationSelected
                                                            ? "l"
                                                            : "m",
                                                        label: D.label,
                                                        class: T({
                                                          "marker-animation":
                                                            w(d)[D.id],
                                                          "selected-marker":
                                                            R ===
                                                            s.locationSelected,
                                                          "shadow-effect": !0,
                                                        }),
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "size",
                                                        "label",
                                                        "class",
                                                      ],
                                                    ),
                                                  ],
                                                  6,
                                                )),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["options", "onClick"],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ["options"],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["class", "api-key", "center", "zoom"],
                    ),
                  ]),
                  _: 1,
                }),
                B(
                  "div",
                  {
                    class: T([
                      "absolute bottom-0 left-0 right-0 z-50 pointer-events-auto slide-up-animation desktop:w-fit",
                      { visible: !0 },
                    ]),
                  },
                  [
                    B("div", Rt, [
                      ce(y.$slots, "nav-locations", {}, void 0, !0),
                    ]),
                  ],
                ),
              ],
              2,
            )
          );
        }
      );
    },
  }),
  Ft = qe(Bt, [["__scopeId", "data-v-1f2c0c90"]]);
export { Ft as _ };
