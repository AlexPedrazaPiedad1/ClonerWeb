import { _ as De } from "./D_VYAWoq.js";
import { a as ze, _ as Ee } from "./BMQmZPly.js";
import {
  _ as Ce,
  u as Re,
  l as Ae,
  d as Le,
  e as Ne,
  ab as Oe,
  j as Ve,
  m as je,
} from "./w36zW0QG.js";
import { _ as We } from "./9C9qpSPh.js";
import { _ as $e } from "./9UZMSW1R.js";
import { _ as Ue } from "./Dn2iLLNP.js";
import {
  y as ke,
  A as N,
  O as T,
  l as qe,
  m as M,
  d as w,
  w as Ze,
  _ as Y,
  Z as L,
  N as ne,
  Q as P,
  X as ee,
  T as Ge,
  W as pe,
  P as He,
  u as le,
} from "./CG2MQ2lF.js";
import { g as Qe } from "./DKtf60Sy.js";
import { u as Je } from "./D8jQnJCR.js";
import { c as xe } from "./Ca9Ptn7z.js";
var be = {};
(function O(g, h, z, d) {
  var V = !!(
      g.Worker &&
      g.Blob &&
      g.Promise &&
      g.OffscreenCanvas &&
      g.OffscreenCanvasRenderingContext2D &&
      g.HTMLCanvasElement &&
      g.HTMLCanvasElement.prototype.transferControlToOffscreen &&
      g.URL &&
      g.URL.createObjectURL
    ),
    F = typeof Path2D == "function" && typeof DOMMatrix == "function",
    j = (function () {
      if (!g.OffscreenCanvas) return !1;
      var t = new OffscreenCanvas(1, 1),
        e = t.getContext("2d");
      e.fillRect(0, 0, 1, 1);
      var a = t.transferToImageBitmap();
      try {
        e.createPattern(a, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })();
  function W() {}
  function E(t) {
    var e = h.exports.Promise,
      a = e !== void 0 ? e : g.Promise;
    return typeof a == "function" ? new a(t) : (t(W, W), null);
  }
  var k = (function (t, e) {
      return {
        transform: function (a) {
          if (t) return a;
          if (e.has(a)) return e.get(a);
          var o = new OffscreenCanvas(a.width, a.height),
            l = o.getContext("2d");
          return (l.drawImage(a, 0, 0), e.set(a, o), o);
        },
        clear: function () {
          e.clear();
        },
      };
    })(j, new Map()),
    I = (function () {
      var t = Math.floor(16.666666666666668),
        e,
        a,
        o = {},
        l = 0;
      return (
        typeof requestAnimationFrame == "function" &&
        typeof cancelAnimationFrame == "function"
          ? ((e = function (i) {
              var n = Math.random();
              return (
                (o[n] = requestAnimationFrame(function r(c) {
                  l === c || l + t - 1 < c
                    ? ((l = c), delete o[n], i())
                    : (o[n] = requestAnimationFrame(r));
                })),
                n
              );
            }),
            (a = function (i) {
              o[i] && cancelAnimationFrame(o[i]);
            }))
          : ((e = function (i) {
              return setTimeout(i, t);
            }),
            (a = function (i) {
              return clearTimeout(i);
            })),
        { frame: e, cancel: a }
      );
    })(),
    R = (function () {
      var t,
        e,
        a = {};
      function o(l) {
        function i(n, r) {
          l.postMessage({ options: n || {}, callback: r });
        }
        ((l.init = function (r) {
          var c = r.transferControlToOffscreen();
          l.postMessage({ canvas: c }, [c]);
        }),
          (l.fire = function (r, c, v) {
            if (e) return (i(r, null), e);
            var p = Math.random().toString(36).slice(2);
            return (
              (e = E(function (u) {
                function f(m) {
                  m.data.callback === p &&
                    (delete a[p],
                    l.removeEventListener("message", f),
                    (e = null),
                    k.clear(),
                    v(),
                    u());
                }
                (l.addEventListener("message", f),
                  i(r, p),
                  (a[p] = f.bind(null, { data: { callback: p } })));
              })),
              e
            );
          }),
          (l.reset = function () {
            l.postMessage({ reset: !0 });
            for (var r in a) (a[r](), delete a[r]);
          }));
      }
      return function () {
        if (t) return t;
        if (!z && V) {
          var l = [
            "var CONFETTI, SIZE = {}, module = {};",
            "(" + O.toString() + ")(this, module, true, SIZE);",
            "onmessage = function(msg) {",
            "  if (msg.data.options) {",
            "    CONFETTI(msg.data.options).then(function () {",
            "      if (msg.data.callback) {",
            "        postMessage({ callback: msg.data.callback });",
            "      }",
            "    });",
            "  } else if (msg.data.reset) {",
            "    CONFETTI && CONFETTI.reset();",
            "  } else if (msg.data.resize) {",
            "    SIZE.width = msg.data.resize.width;",
            "    SIZE.height = msg.data.resize.height;",
            "  } else if (msg.data.canvas) {",
            "    SIZE.width = msg.data.canvas.width;",
            "    SIZE.height = msg.data.canvas.height;",
            "    CONFETTI = module.exports.create(msg.data.canvas);",
            "  }",
            "}",
          ].join(`
`);
          try {
            t = new Worker(URL.createObjectURL(new Blob([l])));
          } catch (i) {
            return (
              typeof console !== void 0 &&
                typeof console.warn == "function" &&
                console.warn("🎊 Could not load worker", i),
              null
            );
          }
          o(t);
        }
        return t;
      };
    })(),
    Z = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ],
      disableForReducedMotion: !1,
      scalar: 1,
    };
  function A(t, e) {
    return e ? e(t) : t;
  }
  function B(t) {
    return t != null;
  }
  function b(t, e, a) {
    return A(t && B(t[e]) ? t[e] : Z[e], a);
  }
  function se(t) {
    return t < 0 ? 0 : Math.floor(t);
  }
  function te(t, e) {
    return Math.floor(Math.random() * (e - t)) + t;
  }
  function G(t) {
    return parseInt(t, 16);
  }
  function ae(t) {
    return t.map(H);
  }
  function H(t) {
    var e = String(t).replace(/[^0-9a-f]/gi, "");
    return (
      e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
      {
        r: G(e.substring(0, 2)),
        g: G(e.substring(2, 4)),
        b: G(e.substring(4, 6)),
      }
    );
  }
  function Q(t) {
    var e = b(t, "origin", Object);
    return ((e.x = b(e, "x", Number)), (e.y = b(e, "y", Number)), e);
  }
  function J(t) {
    ((t.width = document.documentElement.clientWidth),
      (t.height = document.documentElement.clientHeight));
  }
  function $(t) {
    var e = t.getBoundingClientRect();
    ((t.width = e.width), (t.height = e.height));
  }
  function U(t) {
    var e = document.createElement("canvas");
    return (
      (e.style.position = "fixed"),
      (e.style.top = "0px"),
      (e.style.left = "0px"),
      (e.style.pointerEvents = "none"),
      (e.style.zIndex = t),
      e
    );
  }
  function K(t, e, a, o, l, i, n, r, c) {
    (t.save(),
      t.translate(e, a),
      t.rotate(i),
      t.scale(o, l),
      t.arc(0, 0, 1, n, r, c),
      t.restore());
  }
  function ie(t) {
    var e = t.angle * (Math.PI / 180),
      a = t.spread * (Math.PI / 180);
    return {
      x: t.x,
      y: t.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: t.startVelocity * 0.5 + Math.random() * t.startVelocity,
      angle2D: -e + (0.5 * a - Math.random() * a),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: t.color,
      shape: t.shape,
      tick: 0,
      totalTicks: t.ticks,
      decay: t.decay,
      drift: t.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: t.gravity * 3,
      ovalScalar: 0.6,
      scalar: t.scalar,
      flat: t.flat,
    };
  }
  function ce(t, e) {
    ((e.x += Math.cos(e.angle2D) * e.velocity + e.drift),
      (e.y += Math.sin(e.angle2D) * e.velocity + e.gravity),
      (e.velocity *= e.decay),
      e.flat
        ? ((e.wobble = 0),
          (e.wobbleX = e.x + 10 * e.scalar),
          (e.wobbleY = e.y + 10 * e.scalar),
          (e.tiltSin = 0),
          (e.tiltCos = 0),
          (e.random = 1))
        : ((e.wobble += e.wobbleSpeed),
          (e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble)),
          (e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble)),
          (e.tiltAngle += 0.1),
          (e.tiltSin = Math.sin(e.tiltAngle)),
          (e.tiltCos = Math.cos(e.tiltAngle)),
          (e.random = Math.random() + 2)));
    var a = e.tick++ / e.totalTicks,
      o = e.x + e.random * e.tiltCos,
      l = e.y + e.random * e.tiltSin,
      i = e.wobbleX + e.random * e.tiltCos,
      n = e.wobbleY + e.random * e.tiltSin;
    if (
      ((t.fillStyle =
        "rgba(" +
        e.color.r +
        ", " +
        e.color.g +
        ", " +
        e.color.b +
        ", " +
        (1 - a) +
        ")"),
      t.beginPath(),
      F &&
        e.shape.type === "path" &&
        typeof e.shape.path == "string" &&
        Array.isArray(e.shape.matrix))
    )
      t.fill(
        de(
          e.shape.path,
          e.shape.matrix,
          e.x,
          e.y,
          Math.abs(i - o) * 0.1,
          Math.abs(n - l) * 0.1,
          (Math.PI / 10) * e.wobble,
        ),
      );
    else if (e.shape.type === "bitmap") {
      var r = (Math.PI / 10) * e.wobble,
        c = Math.abs(i - o) * 0.1,
        v = Math.abs(n - l) * 0.1,
        p = e.shape.bitmap.width * e.scalar,
        u = e.shape.bitmap.height * e.scalar,
        f = new DOMMatrix([
          Math.cos(r) * c,
          Math.sin(r) * c,
          -Math.sin(r) * v,
          Math.cos(r) * v,
          e.x,
          e.y,
        ]);
      f.multiplySelf(new DOMMatrix(e.shape.matrix));
      var m = t.createPattern(k.transform(e.shape.bitmap), "no-repeat");
      (m.setTransform(f),
        (t.globalAlpha = 1 - a),
        (t.fillStyle = m),
        t.fillRect(e.x - p / 2, e.y - u / 2, p, u),
        (t.globalAlpha = 1));
    } else if (e.shape === "circle")
      t.ellipse
        ? t.ellipse(
            e.x,
            e.y,
            Math.abs(i - o) * e.ovalScalar,
            Math.abs(n - l) * e.ovalScalar,
            (Math.PI / 10) * e.wobble,
            0,
            2 * Math.PI,
          )
        : K(
            t,
            e.x,
            e.y,
            Math.abs(i - o) * e.ovalScalar,
            Math.abs(n - l) * e.ovalScalar,
            (Math.PI / 10) * e.wobble,
            0,
            2 * Math.PI,
          );
    else if (e.shape === "star")
      for (
        var s = (Math.PI / 2) * 3,
          y = 4 * e.scalar,
          _ = 8 * e.scalar,
          x = e.x,
          S = e.y,
          D = 5,
          C = Math.PI / D;
        D--;
      )
        ((x = e.x + Math.cos(s) * _),
          (S = e.y + Math.sin(s) * _),
          t.lineTo(x, S),
          (s += C),
          (x = e.x + Math.cos(s) * y),
          (S = e.y + Math.sin(s) * y),
          t.lineTo(x, S),
          (s += C));
    else
      (t.moveTo(Math.floor(e.x), Math.floor(e.y)),
        t.lineTo(Math.floor(e.wobbleX), Math.floor(l)),
        t.lineTo(Math.floor(i), Math.floor(n)),
        t.lineTo(Math.floor(o), Math.floor(e.wobbleY)));
    return (t.closePath(), t.fill(), e.tick < e.totalTicks);
  }
  function ue(t, e, a, o, l) {
    var i = e.slice(),
      n = t.getContext("2d"),
      r,
      c,
      v = E(function (p) {
        function u() {
          ((r = c = null),
            n.clearRect(0, 0, o.width, o.height),
            k.clear(),
            l(),
            p());
        }
        function f() {
          (z &&
            !(o.width === d.width && o.height === d.height) &&
            ((o.width = t.width = d.width), (o.height = t.height = d.height)),
            !o.width &&
              !o.height &&
              (a(t), (o.width = t.width), (o.height = t.height)),
            n.clearRect(0, 0, o.width, o.height),
            (i = i.filter(function (m) {
              return ce(n, m);
            })),
            i.length ? (r = I.frame(f)) : u());
        }
        ((r = I.frame(f)), (c = u));
      });
    return {
      addFettis: function (p) {
        return ((i = i.concat(p)), v);
      },
      canvas: t,
      promise: v,
      reset: function () {
        (r && I.cancel(r), c && c());
      },
    };
  }
  function re(t, e) {
    var a = !t,
      o = !!b(e || {}, "resize"),
      l = !1,
      i = b(e, "disableForReducedMotion", Boolean),
      n = V && !!b(e || {}, "useWorker"),
      r = n ? R() : null,
      c = a ? J : $,
      v = t && r ? !!t.__confetti_initialized : !1,
      p =
        typeof matchMedia == "function" &&
        matchMedia("(prefers-reduced-motion)").matches,
      u;
    function f(s, y, _) {
      for (
        var x = b(s, "particleCount", se),
          S = b(s, "angle", Number),
          D = b(s, "spread", Number),
          C = b(s, "startVelocity", Number),
          ve = b(s, "decay", Number),
          q = b(s, "gravity", Number),
          Be = b(s, "drift", Number),
          ye = b(s, "colors", ae),
          Se = b(s, "ticks", Number),
          Me = b(s, "shapes"),
          Te = b(s, "scalar"),
          Fe = !!b(s, "flat"),
          we = Q(s),
          _e = x,
          he = [],
          Pe = t.width * we.x,
          Ie = t.height * we.y;
        _e--;
      )
        he.push(
          ie({
            x: Pe,
            y: Ie,
            angle: S,
            spread: D,
            startVelocity: C,
            color: ye[_e % ye.length],
            shape: Me[te(0, Me.length)],
            ticks: Se,
            decay: ve,
            gravity: q,
            drift: Be,
            scalar: Te,
            flat: Fe,
          }),
        );
      return u ? u.addFettis(he) : ((u = ue(t, he, c, y, _)), u.promise);
    }
    function m(s) {
      var y = i || b(s, "disableForReducedMotion", Boolean),
        _ = b(s, "zIndex", Number);
      if (y && p)
        return E(function (C) {
          C();
        });
      (a && u
        ? (t = u.canvas)
        : a && !t && ((t = U(_)), document.body.appendChild(t)),
        o && !v && c(t));
      var x = { width: t.width, height: t.height };
      (r && !v && r.init(t), (v = !0), r && (t.__confetti_initialized = !0));
      function S() {
        if (r) {
          var C = {
            getBoundingClientRect: function () {
              if (!a) return t.getBoundingClientRect();
            },
          };
          (c(C),
            r.postMessage({ resize: { width: C.width, height: C.height } }));
          return;
        }
        x.width = x.height = null;
      }
      function D() {
        ((u = null),
          o && ((l = !1), g.removeEventListener("resize", S)),
          a &&
            t &&
            (document.body.contains(t) && document.body.removeChild(t),
            (t = null),
            (v = !1)));
      }
      return (
        o && !l && ((l = !0), g.addEventListener("resize", S, !1)),
        r ? r.fire(s, x, D) : f(s, x, D)
      );
    }
    return (
      (m.reset = function () {
        (r && r.reset(), u && u.reset());
      }),
      m
    );
  }
  var X;
  function oe() {
    return (X || (X = re(null, { useWorker: !0, resize: !0 })), X);
  }
  function de(t, e, a, o, l, i, n) {
    var r = new Path2D(t),
      c = new Path2D();
    c.addPath(r, new DOMMatrix(e));
    var v = new Path2D();
    return (
      v.addPath(
        c,
        new DOMMatrix([
          Math.cos(n) * l,
          Math.sin(n) * l,
          -Math.sin(n) * i,
          Math.cos(n) * i,
          a,
          o,
        ]),
      ),
      v
    );
  }
  function fe(t) {
    if (!F) throw new Error("path confetti are not supported in this browser");
    var e, a;
    typeof t == "string" ? (e = t) : ((e = t.path), (a = t.matrix));
    var o = new Path2D(e),
      l = document.createElement("canvas"),
      i = l.getContext("2d");
    if (!a) {
      for (var n = 1e3, r = n, c = n, v = 0, p = 0, u, f, m = 0; m < n; m += 2)
        for (var s = 0; s < n; s += 2)
          i.isPointInPath(o, m, s, "nonzero") &&
            ((r = Math.min(r, m)),
            (c = Math.min(c, s)),
            (v = Math.max(v, m)),
            (p = Math.max(p, s)));
      ((u = v - r), (f = p - c));
      var y = 10,
        _ = Math.min(y / u, y / f);
      a = [_, 0, 0, _, -Math.round(u / 2 + r) * _, -Math.round(f / 2 + c) * _];
    }
    return { type: "path", path: e, matrix: a };
  }
  function me(t) {
    var e,
      a = 1,
      o = "#000000",
      l =
        '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof t == "string"
      ? (e = t)
      : ((e = t.text),
        (a = "scalar" in t ? t.scalar : a),
        (l = "fontFamily" in t ? t.fontFamily : l),
        (o = "color" in t ? t.color : o));
    var i = 10 * a,
      n = "" + i + "px " + l,
      r = new OffscreenCanvas(i, i),
      c = r.getContext("2d");
    c.font = n;
    var v = c.measureText(e),
      p = Math.ceil(v.actualBoundingBoxRight + v.actualBoundingBoxLeft),
      u = Math.ceil(v.actualBoundingBoxAscent + v.actualBoundingBoxDescent),
      f = 2,
      m = v.actualBoundingBoxLeft + f,
      s = v.actualBoundingBoxAscent + f;
    ((p += f + f),
      (u += f + f),
      (r = new OffscreenCanvas(p, u)),
      (c = r.getContext("2d")),
      (c.font = n),
      (c.fillStyle = o),
      c.fillText(e, m, s));
    var y = 1 / a;
    return {
      type: "bitmap",
      bitmap: r.transferToImageBitmap(),
      matrix: [y, 0, 0, y, (-p * y) / 2, (-u * y) / 2],
    };
  }
  ((h.exports = function () {
    return oe().apply(this, arguments);
  }),
    (h.exports.reset = function () {
      oe().reset();
    }),
    (h.exports.create = re),
    (h.exports.shapeFromPath = fe),
    (h.exports.shapeFromText = me));
})(
  (function () {
    return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
  })(),
  be,
  !1,
);
const ge = be.exports;
be.exports.create;
const Ke = { id: "my-canvas" },
  Xe = {
    __name: "Confetti",
    setup(O) {
      return (
        ke(() => {
          const g = document.getElementById("my-canvas");
          g.confetti = g.confetti || ge.create(g, { resize: !0 });
          const h = ge.shapeFromPath({
              path: "M50.5553 47.5623L61.6172 23.1416L11.4838 0.367553L0.421968 24.7882L50.5553 47.5623Z",
            }),
            z = ge.shapeFromPath({
              path: "M0.665527 19.2238L19.5488 0.208984L29.6339 29.1491L58.6022 39.1093L39.7188 58.1241L29.6339 29.1491L0.665527 19.2238Z",
            }),
            d = 250,
            V = { gravity: 2, origin: { y: 0.8 } };
          function F(j, W) {
            g.confetti({ ...V, ...W, particleCount: Math.floor(d * j) });
          }
          (F(0.25, {
            spread: 100,
            startVelocity: 55,
            shapes: [h],
            colors: ["#FFBC0D", "#DB0007", "#56AFD1"],
          }),
            F(0.2, {
              spread: 100,
              shapes: [z],
              colors: ["#FFBC0D", "#DB0007", "#56AFD1"],
            }),
            F(0.35, {
              spread: 100,
              decay: 0.91,
              scalar: 3,
              shapes: [h],
              colors: ["#FFBC0D", "#DB0007", "#56AFD1"],
            }),
            F(0.1, {
              spread: 150,
              startVelocity: 25,
              decay: 0.92,
              scalar: 3.5,
              shapes: [z],
              colors: ["#FFBC0D", "#DB0007", "#56AFD1"],
            }),
            F(0.1, {
              spread: 150,
              startVelocity: 45,
              shapes: [h, z],
              colors: ["#FFBC0D", "#DB0007", "#56AFD1"],
            }));
        }),
        (g, h) => (T(), N("canvas", Ke))
      );
    },
  },
  Ye = Ce(Xe, [["__scopeId", "data-v-57f2dd77"]]),
  et = { class: "relative" },
  tt = {
    key: 0,
    class: "flex flex-col items-start gap-4 desktop:w-[478px] w-full",
  },
  at = {
    key: 0,
    class: "flex items-center self-stretch justify-center gap-6 button",
    role: "region",
    "aria-label": "Botones de descarga de la aplicación",
  },
  rt = qe({
    __name: "PrefooterNewsletter",
    props: {
      title: {},
      description: {},
      successTitle: {},
      successDescription: {},
      isNewsletter: { type: Boolean },
      ctaLabel: {},
      ctaLink: {},
      offerImage: {},
      isNewsletterSlice: { type: Boolean },
      titlePaint: {},
      reverse: { type: Boolean },
      theme: {},
      isPromo: { type: Boolean },
      isPreFooter: { type: Boolean },
      ctaColor: {},
      ctaGtm: {},
      animated: { type: Boolean },
      showCoins: { type: Boolean },
    },
    setup(O) {
      const { t: g } = Re(),
        h = Ae(),
        { asLinkCustomByUrlPath: z } = Je(),
        d = O,
        {
          $gtmDownloadApplicationIos: V,
          $gtmDownloadApplicationAndroid: F,
          $gtmDownloadApplication: j,
        } = Le(),
        W = Ne(),
        E = M(() => W.path),
        k = w(""),
        I = w(!1),
        R = w(!1),
        Z = w(!1),
        A = w(!1),
        B = w(!1),
        b = w(!1),
        se = w(null),
        te = w(null),
        G = w(null),
        ae = w(!1),
        H = w(),
        Q = w(),
        J = w(),
        $ = w(),
        U = w(),
        K = M(() =>
          B.value
            ? { title: d.successTitle || "", body: d.successDescription || "" }
            : { title: d.title, body: d.description },
        ),
        ie = M(() => g("subscription.email.error")),
        ce = M(() => g("subscription.email.placeholder")),
        ue = M(() => g("subscription.checkbox.error")),
        { width: re } = Oe(),
        X = M(() => (ae.value ? re.value : 1e3)),
        oe = M(() =>
          d.isNewsletterSlice
            ? h.isMobile.value
              ? "s"
              : h.isTablet.value
                ? "l"
                : X.value > 1300
                  ? "xl"
                  : (h.isDesktop.value, "m")
            : h.isMobile.value
              ? "m"
              : h.isTablet.value
                ? "s"
                : "xl",
        ),
        de = M(() => (d.isNewsletterSlice ? "rectangle" : "square")),
        fe = M(() =>
          d.isNewsletterSlice
            ? h.isMobile.value || h.isTablet.value
              ? "center"
              : "left"
            : h.isMobile.value
              ? "center"
              : "left",
        ),
        me = M(() => (h.isMobile.value ? "s" : "m")),
        t = M(() => (h.isMobile.value ? "s" : "m")),
        e = M(() => (h.isMobile.value ? "s" : "m")),
        a = M(() => d.ctaColor ?? "gold"),
        o = M(
          () =>
            ({
              white: "bg-white",
              gold: "bg-surface-gold",
              gray: "bg-neutral-50",
              gradient_loyalty: "bg-gradient-loyalty",
              default: "bg-transparent",
            })[d.theme ?? "default"] || "bg-transparent",
        ),
        l = M(
          () =>
            ({ gradient_loyalty: "white", default: "" })[d.theme ?? "default"],
        ),
        i = () =>
          d.ctaGtm
            ? `${((f) => {
                let m = 0;
                for (let s = 0; s < f.length; s++) {
                  const y = f.charCodeAt(s);
                  ((m = (m << 5) - m + y), (m = m & m));
                }
                return Math.abs(m).toString().substring(0, 6);
              })(d.ctaGtm)}`
            : `${Math.random().toString(36).substring(2, 9)}`,
        n = M(() => z(d.ctaLink ?? "")),
        r = M(() => {
          const u = h.isMobile.value
            ? "mobile"
            : h.isTablet.value
              ? "tablet"
              : "desktop";
          return {
            mobile: { first: "s", second: "xs" },
            tablet: { first: "l", second: "s" },
            desktop: { first: "xl", second: "l" },
          }[u];
        }),
        c = M(() => d.showCoins || d.theme === "gradient_loyalty"),
        v = M(() => (d.isPromo || h.isTablet.value ? "md" : "lg")),
        p = () => {
          ((b.value = !0),
            (I.value = !xe(k.value)),
            (A.value = !R.value),
            !I.value &&
              !A.value &&
              ((Z.value = !0),
              setTimeout(() => {
                ((B.value = !0),
                  (Z.value = !1),
                  (k.value = ""),
                  (R.value = !1));
              }, 2e3)));
        };
      return (
        Ze(() => {
          b.value &&
            ((I.value = !!(k.value && !xe(k.value))), (A.value = !R.value));
        }),
        ke(() => {
          if (
            ((ae.value = !0),
            d.animated && H.value && Q.value && J.value && $ && U)
          ) {
            const u = Qe.timeline({
              scrollTrigger: {
                trigger: H.value,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            });
            u.from(te.value, { opacity: 0, duration: 0.5, y: 50 });
            const f = $.value?.querySelector(".first-top-coin"),
              m = $.value?.querySelector(".second-top-coin"),
              s = U.value?.querySelector(".first-bottom-coin"),
              y = U.value?.querySelector(".second-bottom-coin");
            (u
              .from(f, { y: -200, rotate: 45, duration: 0.5 })
              .from(m, { y: -240, rotate: -160, duration: 0.4 }, "<")
              .from(s, { y: -500, rotate: 60, duration: 0.4 }, "<")
              .from(y, { y: -450, rotate: -120, duration: 0.5 }, "<"),
              u.from(
                Q.value,
                h.isDesktop.value
                  ? { opacity: 0, x: 60, duration: 0.5, ease: "expo.out" }
                  : { opacity: 0, y: 20, duration: 0.5, ease: "expo.out" },
                "<",
              ),
              u.from(J.value.$el, {
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
                ease: "elastic.out(1, 0.5)",
              }));
          }
        }),
        (u, f) => {
          const m = De,
            s = ze,
            y = Ve,
            _ = We,
            x = $e,
            S = Ue,
            D = je,
            C = Ee,
            ve = Ye;
          return (
            T(),
            N(
              "div",
              {
                ref_key: "prefooterMainRef",
                ref: H,
                class: ee([o.value, "prefooter-newsletter-main"]),
              },
              [
                Y(
                  "div",
                  {
                    ref_key: "containerRef",
                    ref: se,
                    class: ee([
                      "flex w-full py-10 px-4 tablet:px-6 tablet:py-10 tablet:flex-row flex-col items-center gap-6 self-stretch desktop:py-20 desktop:gap-10 tablet:items-center tablet:justify-center relative max-w-[1440px] mx-auto overflow-hidden",
                      [
                        B.value || d.isNewsletterSlice
                          ? "tablet:flex-col tablet:items-center desktop:flex-row desktop:items-center"
                          : "",
                        d.reverse
                          ? "desktop:flex-row-reverse desktop:px-[120px] desktop:justify-between"
                          : "desktop:justify-center",
                      ],
                    ]),
                  },
                  [
                    Y("div", et, [
                      c.value
                        ? (T(),
                          N(
                            "div",
                            {
                              key: 0,
                              ref_key: "topCoins",
                              ref: $,
                              class: "absolute top-0 left-0 z-[1]",
                            },
                            [
                              P(
                                m,
                                {
                                  direction: "front",
                                  size: r.value.second,
                                  rotate: 45,
                                  class:
                                    "absolute bottom-2 -left-2 second-top-coin",
                                },
                                null,
                                8,
                                ["size"],
                              ),
                              P(
                                m,
                                {
                                  direction: "right",
                                  size: r.value.first,
                                  rotate: 0,
                                  class: "-translate-y-5 first-top-coin",
                                },
                                null,
                                8,
                                ["size"],
                              ),
                            ],
                            512,
                          ))
                        : L("", !0),
                      c.value
                        ? (T(),
                          N(
                            "div",
                            {
                              key: 1,
                              ref_key: "bottomCoins",
                              ref: U,
                              class: "absolute bottom-0 right-0 z-[1]",
                            },
                            [
                              P(
                                m,
                                {
                                  direction: "front",
                                  size: r.value.second,
                                  rotate: -45,
                                  class: "absolute -right-2 second-bottom-coin",
                                },
                                null,
                                8,
                                ["size"],
                              ),
                              P(
                                m,
                                {
                                  direction: "left",
                                  size: r.value.first,
                                  rotate: -30,
                                  class: "translate-y-5 first-bottom-coin",
                                },
                                null,
                                8,
                                ["size"],
                              ),
                            ],
                            512,
                          ))
                        : L("", !0),
                      Y(
                        "div",
                        { ref_key: "imageRef", ref: te },
                        [
                          B.value
                            ? L("", !0)
                            : (T(),
                              ne(
                                s,
                                {
                                  key: 0,
                                  image: {
                                    url: d.offerImage.src,
                                    alt: d.offerImage.alt || K.value.title,
                                  },
                                  size: oe.value,
                                  static: !0,
                                  variant: de.value,
                                },
                                null,
                                8,
                                ["image", "size", "variant"],
                              )),
                        ],
                        512,
                      ),
                    ]),
                    Y(
                      "div",
                      {
                        ref_key: "contentRef",
                        ref: G,
                        class: ee([
                          "flex flex-col gap-6 tablet:flex-1 desktop:gap-8",
                          d.isNewsletterSlice
                            ? "tablet:w-full max-w-full desktop:max-w-[333px] items-center justify-center desktop:items-start"
                            : "desktop:max-w-[788px] h-full tablet:max-w-[450px] items-start tablet:pl-6",
                        ]),
                      },
                      [
                        Y(
                          "div",
                          {
                            ref_key: "titleRef",
                            ref: Q,
                            class: ee([
                              "flex flex-col items-start gap-4 text-center tablet:selft-stretch tablet:justify-center desktop:gap-6",
                              {
                                "tablet:items-center tablet:text-center":
                                  B.value,
                                "tablet:items-start tablet:text-start":
                                  !B.value,
                              },
                            ]),
                          },
                          [
                            P(
                              y,
                              {
                                size: v.value,
                                title: K.value.title,
                                description: K.value.body,
                                "content-align": fe.value,
                                "title-color": l.value,
                                paint: O.titlePaint,
                              },
                              null,
                              8,
                              [
                                "size",
                                "title",
                                "description",
                                "content-align",
                                "title-color",
                                "paint",
                              ],
                            ),
                          ],
                          2,
                        ),
                        d.isNewsletter
                          ? (T(),
                            N("div", tt, [
                              B.value
                                ? L("", !0)
                                : (T(),
                                  ne(
                                    _,
                                    {
                                      key: 0,
                                      modelValue: k.value,
                                      "onUpdate:modelValue":
                                        f[0] || (f[0] = (q) => (k.value = q)),
                                      placeholder: ce.value,
                                      icon: "arrowsChevronRight",
                                      type: "email",
                                      error:
                                        (I.value &&
                                          "Formato de email no válido") ||
                                        "",
                                      "show-feedback": I.value,
                                      "feedback-message": ie.value,
                                      loading: Z.value,
                                      onSubmit: p,
                                    },
                                    null,
                                    8,
                                    [
                                      "modelValue",
                                      "placeholder",
                                      "error",
                                      "show-feedback",
                                      "feedback-message",
                                      "loading",
                                    ],
                                  )),
                              P(
                                Ge,
                                { name: "fade-in" },
                                {
                                  default: pe(() => [
                                    k.value && k.value.length > 0 && !B.value
                                      ? (T(),
                                        ne(
                                          S,
                                          {
                                            key: 0,
                                            id: "newsletter",
                                            modelValue: R.value,
                                            "onUpdate:modelValue":
                                              f[1] ||
                                              (f[1] = (q) => (R.value = q)),
                                            error:
                                              (A.value &&
                                                "Debes aceptar las condiciones") ||
                                              "",
                                            "show-feedback": A.value,
                                            "feedback-message": ue.value,
                                          },
                                          {
                                            default: pe(() => [
                                              P(
                                                x,
                                                { size: me.value },
                                                {
                                                  default: pe(() => [
                                                    He(
                                                      u.$slots,
                                                      "legalText",
                                                      {},
                                                      void 0,
                                                      !0,
                                                    ),
                                                  ]),
                                                  _: 3,
                                                },
                                                8,
                                                ["size"],
                                              ),
                                            ]),
                                            _: 3,
                                          },
                                          8,
                                          [
                                            "modelValue",
                                            "error",
                                            "show-feedback",
                                            "feedback-message",
                                          ],
                                        ))
                                      : L("", !0),
                                  ]),
                                  _: 3,
                                },
                              ),
                            ]))
                          : (T(),
                            N(
                              "div",
                              {
                                key: 1,
                                class: ee([
                                  "flex flex-col gap-4",
                                  d.isNewsletterSlice
                                    ? "items-start justify-start desktop:w-[478px]"
                                    : "items-center justify-center tablet:items-start w-full desktop:w-[478px]",
                                ]),
                              },
                              [
                                P(
                                  D,
                                  {
                                    ref_key: "buttonRef",
                                    ref: J,
                                    size: t.value,
                                    label: d.ctaLabel,
                                    to: n.value,
                                    variant: a.value,
                                    class: "w-fit button",
                                    role: "button",
                                    onClick:
                                      f[2] ||
                                      (f[2] = (q) =>
                                        O.isPromo
                                          ? u.$gtmSelectContent(
                                              d.ctaGtm || "",
                                              i(),
                                              n.value,
                                            )
                                          : E.value === "/"
                                            ? u.$gtmClickBoton(
                                                "unete_mymcd",
                                                n.value,
                                              )
                                            : E.value ===
                                                  "/mymcdonalds/pide-y-paga" &&
                                                !d.isPreFooter
                                              ? u.$gtmClickBoton(
                                                  "ofertaprimerpedido_pideypaga",
                                                  n.value,
                                                )
                                              : E.value.includes(
                                                    "/mymcdonalds",
                                                  ) && d.isNewsletterSlice
                                                ? le(j)(
                                                    "boton",
                                                    "unete_mymcdonalds_puntos",
                                                    n.value,
                                                  )
                                                : le(j)(
                                                    "boton",
                                                    "unete_mymcdonalds_ofertabienvenida",
                                                    n.value,
                                                  )),
                                  },
                                  null,
                                  8,
                                  ["size", "label", "to", "variant"],
                                ),
                              ],
                              2,
                            )),
                      ],
                      2,
                    ),
                    B.value && d.isNewsletter
                      ? (T(),
                        N("div", at, [
                          P(
                            C,
                            { size: e.value, ios: "", onClick: le(V) },
                            null,
                            8,
                            ["size", "onClick"],
                          ),
                          P(
                            C,
                            { size: e.value, android: "", onClick: le(F) },
                            null,
                            8,
                            ["size", "onClick"],
                          ),
                        ]))
                      : L("", !0),
                    B.value
                      ? (T(), ne(ve, { key: 1, class: "absolute inset-0" }))
                      : L("", !0),
                  ],
                  2,
                ),
              ],
              2,
            )
          );
        }
      );
    },
  }),
  vt = Ce(rt, [["__scopeId", "data-v-31e8be27"]]);
export { vt as _ };
