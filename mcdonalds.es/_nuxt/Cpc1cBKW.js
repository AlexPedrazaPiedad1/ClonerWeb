/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let M,
  F,
  G,
  re = () => G || oe.register(window.gsap),
  U = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  q = (e) =>
    typeof e == "string"
      ? q(document.querySelectorAll(e))
      : "length" in e
        ? Array.from(e)
        : [e],
  V = (e) => q(e).filter((t) => t instanceof HTMLElement),
  J = [],
  $ = function () {},
  ne = /\s+/g,
  X = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu",
  ),
  Y = { left: 0, top: 0, width: 0, height: 0 },
  Z = (e, t) => {
    if (t) {
      let n = new Set(e.join("").match(t) || J),
        i = e.length,
        o,
        f,
        s,
        a;
      if (n.size)
        for (; --i > -1; ) {
          f = e[i];
          for (s of n)
            if (s.startsWith(f) && s.length > f.length) {
              for (
                o = 0, a = f;
                s.startsWith((a += e[i + ++o])) && a.length < s.length;
              );
              if (o && a.length === s.length) {
                ((e[i] = s), e.splice(i + 1, o));
                break;
              }
            }
        }
    }
    return e;
  },
  ee = (e) =>
    window.getComputedStyle(e).display === "inline" &&
    (e.style.display = "inline-block"),
  z = (e, t, n) =>
    t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n),
  K = (e, t, n) => {
    let i = t[e + "sClass"] || "",
      { tag: o = "div", aria: f = "auto", propIndex: s = !1 } = t,
      a = e === "line" ? "block" : "inline-block",
      d = i.indexOf("++") > -1,
      b = (S) => {
        let g = document.createElement(o),
          y = n.length + 1;
        return (
          i && (g.className = i + (d ? " " + i + y : "")),
          s && g.style.setProperty("--" + e, y + ""),
          f !== "none" && g.setAttribute("aria-hidden", "true"),
          o !== "span" &&
            ((g.style.position = "relative"), (g.style.display = a)),
          (g.textContent = S),
          n.push(g),
          g
        );
      };
    return (d && (i = i.replace("++", "")), (b.collection = n), b);
  },
  le = (e, t, n, i) => {
    let o = K("line", n, i),
      f = window.getComputedStyle(e).textAlign || "left";
    return (s, a) => {
      let d = o("");
      for (d.style.textAlign = f, e.insertBefore(d, t[s]); s < a; s++)
        d.appendChild(t[s]);
      d.normalize();
    };
  },
  te = (e, t, n, i, o, f, s, a, d, b) => {
    var S;
    let g = Array.from(e.childNodes),
      y = 0,
      { wordDelimiter: N, reduceWhiteSpace: R = !0, prepareText: H } = t,
      P = e.getBoundingClientRect(),
      k = P,
      D = !R && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre",
      C = 0,
      x = n.collection,
      l,
      c,
      j,
      r,
      m,
      v,
      O,
      h,
      u,
      A,
      _,
      W,
      E,
      L,
      w,
      p,
      B,
      T;
    for (
      typeof N == "object"
        ? ((j = N.delimiter || N), (c = N.replaceWith || ""))
        : (c = N === "" ? "" : N || " "),
        l = c !== " ";
      y < g.length;
      y++
    )
      if (((r = g[y]), r.nodeType === 3)) {
        for (
          w = r.textContent || "",
            R
              ? (w = w.replace(ne, " "))
              : D &&
                (w = w.replace(
                  /\n/g,
                  c +
                    `
`,
                )),
            H && (w = H(w, e)),
            r.textContent = w,
            m = c || j ? w.split(j || c) : w.match(a) || J,
            B = m[m.length - 1],
            h = l ? B.slice(-1) === " " : !B,
            B || m.pop(),
            k = P,
            O = l ? m[0].charAt(0) === " " : !m[0],
            O && z(" ", e, r),
            m[0] || m.shift(),
            Z(m, d),
            (f && b) || (r.textContent = ""),
            u = 1;
          u <= m.length;
          u++
        )
          if (
            ((p = m[u - 1]),
            !R &&
              D &&
              p.charAt(0) ===
                `
` &&
              ((S = r.previousSibling) == null || S.remove(),
              z(document.createElement("br"), e, r),
              (p = p.slice(1))),
            !R && p === "")
          )
            z(c, e, r);
          else if (p === " ") e.insertBefore(document.createTextNode(" "), r);
          else {
            if (
              (l && p.charAt(0) === " " && z(" ", e, r),
              C && u === 1 && !O && x.indexOf(C.parentNode) > -1
                ? ((v = x[x.length - 1]),
                  v.appendChild(document.createTextNode(i ? "" : p)))
                : ((v = n(i ? "" : p)),
                  z(v, e, r),
                  C && u === 1 && !O && v.insertBefore(C, v.firstChild)),
              i)
            )
              for (
                _ = U
                  ? Z(
                      [...U.segment(p)].map((I) => I.segment),
                      d,
                    )
                  : p.match(a) || J,
                  T = 0;
                T < _.length;
                T++
              )
                v.appendChild(
                  _[T] === " " ? document.createTextNode(" ") : i(_[T]),
                );
            if (f && b) {
              if (
                ((w = r.textContent = w.substring(p.length + 1, w.length)),
                (A = v.getBoundingClientRect()),
                A.top > k.top && A.left <= k.left)
              ) {
                for (W = e.cloneNode(), E = e.childNodes[0]; E && E !== v; )
                  ((L = E), (E = E.nextSibling), W.appendChild(L));
                (e.parentNode.insertBefore(W, e), o && ee(W));
              }
              k = A;
            }
            (u < m.length || h) &&
              z(
                u >= m.length ? " " : l && p.slice(-1) === " " ? " " + c : c,
                e,
                r,
              );
          }
        (e.removeChild(r), (C = 0));
      } else
        r.nodeType === 1 &&
          (s && s.indexOf(r) > -1
            ? (x.indexOf(r.previousSibling) > -1 &&
                x[x.length - 1].appendChild(r),
              (C = r))
            : (te(r, t, n, i, o, f, s, a, d, !0), (C = 0)),
          o && ee(r));
  };
const ie = class se {
  constructor(t, n) {
    ((this.isSplit = !1),
      re(),
      (this.elements = V(t)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this.masks = []),
      (this.vars = n),
      (this._split = () => this.isSplit && this.split(this.vars)));
    let i = [],
      o,
      f = () => {
        let s = i.length,
          a;
        for (; s--; ) {
          a = i[s];
          let d = a.element.offsetWidth;
          if (d !== a.width) {
            ((a.width = d), this._split());
            return;
          }
        }
      };
    ((this._data = {
      orig: i,
      obs:
        typeof ResizeObserver < "u" &&
        new ResizeObserver(() => {
          (clearTimeout(o), (o = setTimeout(f, 200)));
        }),
    }),
      $(this),
      this.split(n));
  }
  split(t) {
    (this.isSplit && this.revert(), (this.vars = t = t || this.vars || {}));
    let {
        type: n = "chars,words,lines",
        aria: i = "auto",
        deepSlice: o = !0,
        smartWrap: f,
        onSplit: s,
        autoSplit: a = !1,
        specialChars: d,
        mask: b,
      } = this.vars,
      S = n.indexOf("lines") > -1,
      g = n.indexOf("chars") > -1,
      y = n.indexOf("words") > -1,
      N = g && !y && !S,
      R = d && ("push" in d ? new RegExp("(?:" + d.join("|") + ")", "gu") : d),
      H = R ? new RegExp(R.source + "|" + X.source, "gu") : X,
      P = !!t.ignore && V(t.ignore),
      { orig: k, animTime: D, obs: C } = this._data,
      x;
    return (
      (g || y || S) &&
        (this.elements.forEach((l, c) => {
          ((k[c] = {
            element: l,
            html: l.innerHTML,
            ariaL: l.getAttribute("aria-label"),
            ariaH: l.getAttribute("aria-hidden"),
          }),
            i === "auto"
              ? l.setAttribute("aria-label", (l.textContent || "").trim())
              : i === "hidden" && l.setAttribute("aria-hidden", "true"));
          let j = [],
            r = [],
            m = [],
            v = g ? K("char", t, j) : null,
            O = K("word", t, r),
            h,
            u,
            A,
            _;
          if ((te(l, t, O, v, N, o && (S || N), P, H, R, !1), S)) {
            let W = q(l.childNodes),
              E = le(l, W, t, m),
              L,
              w = [],
              p = 0,
              B = W.map((I) =>
                I.nodeType === 1 ? I.getBoundingClientRect() : Y,
              ),
              T = Y;
            for (h = 0; h < W.length; h++)
              ((L = W[h]),
                L.nodeType === 1 &&
                  (L.nodeName === "BR"
                    ? (w.push(L), E(p, h + 1), (p = h + 1), (T = B[p]))
                    : (h &&
                        B[h].top > T.top &&
                        B[h].left <= T.left &&
                        (E(p, h), (p = h)),
                      (T = B[h]))));
            (p < h && E(p, h),
              w.forEach((I) => {
                var Q;
                return (Q = I.parentNode) == null ? void 0 : Q.removeChild(I);
              }));
          }
          if (!y) {
            for (h = 0; h < r.length; h++)
              if (
                ((u = r[h]),
                g || !u.nextSibling || u.nextSibling.nodeType !== 3)
              )
                if (f && !S) {
                  for (
                    A = document.createElement("span"),
                      A.style.whiteSpace = "nowrap";
                    u.firstChild;
                  )
                    A.appendChild(u.firstChild);
                  u.replaceWith(A);
                } else u.replaceWith(...u.childNodes);
              else
                ((_ = u.nextSibling),
                  _ &&
                    _.nodeType === 3 &&
                    ((_.textContent =
                      (u.textContent || "") + (_.textContent || "")),
                    u.remove()));
            ((r.length = 0), l.normalize());
          }
          (this.lines.push(...m), this.words.push(...r), this.chars.push(...j));
        }),
        b &&
          this[b] &&
          this.masks.push(
            ...this[b].map((l) => {
              let c = l.cloneNode();
              return (
                l.replaceWith(c),
                c.appendChild(l),
                l.className &&
                  (c.className = l.className.replace(/(\b\w+\b)/g, "$1-mask")),
                (c.style.overflow = "clip"),
                c
              );
            }),
          )),
      (this.isSplit = !0),
      F &&
        (a
          ? F.addEventListener("loadingdone", this._split)
          : F.status === "loading" &&
            console.warn("SplitText called before fonts loaded")),
      (x = s && s(this)) &&
        x.totalTime &&
        (this._data.anim = D ? x.totalTime(D) : x),
      S &&
        a &&
        this.elements.forEach((l, c) => {
          ((k[c].width = l.offsetWidth), C && C.observe(l));
        }),
      this
    );
  }
  revert() {
    var t, n;
    let { orig: i, anim: o, obs: f } = this._data;
    return (
      f && f.disconnect(),
      i.forEach(({ element: s, html: a, ariaL: d, ariaH: b }) => {
        ((s.innerHTML = a),
          d ? s.setAttribute("aria-label", d) : s.removeAttribute("aria-label"),
          b
            ? s.setAttribute("aria-hidden", b)
            : s.removeAttribute("aria-hidden"));
      }),
      (this.chars.length =
        this.words.length =
        this.lines.length =
        i.length =
        this.masks.length =
          0),
      (this.isSplit = !1),
      F?.removeEventListener("loadingdone", this._split),
      o && ((this._data.animTime = o.totalTime()), o.revert()),
      (n = (t = this.vars).onRevert) == null || n.call(t, this),
      this
    );
  }
  static create(t, n) {
    return new se(t, n);
  }
  static register(t) {
    ((M = M || t || window.gsap),
      M && ((q = M.utils.toArray), ($ = M.core.context || $)),
      !G && window.innerWidth > 0 && ((F = document.fonts), (G = !0)));
  }
};
ie.version = "3.13.0";
let oe = ie;
export { oe as S };
