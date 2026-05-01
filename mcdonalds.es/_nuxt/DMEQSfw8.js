import { a9 as h, i as Tr, y as kr } from "./w36zW0QG.js";
import { f as wr } from "./D8jQnJCR.js";
var g, ye;
function de() {
  if (ye) return g;
  ye = 1;
  var e = Array.isArray;
  return ((g = e), g);
}
var b, qe;
function Or() {
  if (qe) return b;
  qe = 1;
  var e = typeof h == "object" && h && h.Object === Object && h;
  return ((b = e), b);
}
var m, Ce;
function ve() {
  if (Ce) return m;
  Ce = 1;
  var e = Or(),
    r = typeof self == "object" && self && self.Object === Object && self,
    t = e || r || Function("return this")();
  return ((m = t), m);
}
var y, Se;
function ge() {
  if (Se) return y;
  Se = 1;
  var e = ve(),
    r = e.Symbol;
  return ((y = r), y);
}
var q, Re;
function jr() {
  if (Re) return q;
  Re = 1;
  var e = ge(),
    r = Object.prototype,
    t = r.hasOwnProperty,
    n = r.toString,
    i = e ? e.toStringTag : void 0;
  function a(o) {
    var s = t.call(o, i),
      c = o[i];
    try {
      o[i] = void 0;
      var _ = !0;
    } catch {}
    var v = n.call(o);
    return (_ && (s ? (o[i] = c) : delete o[i]), v);
  }
  return ((q = a), q);
}
var C, Te;
function Dr() {
  if (Te) return C;
  Te = 1;
  var e = Object.prototype,
    r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return ((C = t), C);
}
var S, ke;
function mr() {
  if (ke) return S;
  ke = 1;
  var e = ge(),
    r = jr(),
    t = Dr(),
    n = "[object Null]",
    i = "[object Undefined]",
    a = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null
      ? s === void 0
        ? i
        : n
      : a && a in Object(s)
        ? r(s)
        : t(s);
  }
  return ((S = o), S);
}
var R, we;
function Pr() {
  if (we) return R;
  we = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return ((R = e), R);
}
var T, Oe;
function be() {
  if (Oe) return T;
  Oe = 1;
  var e = mr(),
    r = Pr(),
    t = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || (r(i) && e(i) == t);
  }
  return ((T = n), T);
}
var k, je;
function Gr() {
  if (je) return k;
  je = 1;
  var e = de(),
    r = be(),
    t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n = /^\w*$/;
  function i(a, o) {
    if (e(a)) return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || r(a)
      ? !0
      : n.test(a) || !t.test(a) || (o != null && a in Object(o));
  }
  return ((k = i), k);
}
var w, De;
function yr() {
  if (De) return w;
  De = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return ((w = e), w);
}
var O, Pe;
function Ir() {
  if (Pe) return O;
  Pe = 1;
  var e = mr(),
    r = yr(),
    t = "[object AsyncFunction]",
    n = "[object Function]",
    i = "[object GeneratorFunction]",
    a = "[object Proxy]";
  function o(s) {
    if (!r(s)) return !1;
    var c = e(s);
    return c == n || c == i || c == t || c == a;
  }
  return ((O = o), O);
}
var j, Ge;
function Mr() {
  if (Ge) return j;
  Ge = 1;
  var e = ve(),
    r = e["__core-js_shared__"];
  return ((j = r), j);
}
var D, Ie;
function xr() {
  if (Ie) return D;
  Ie = 1;
  var e = Mr(),
    r = (function () {
      var n = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || "");
      return n ? "Symbol(src)_1." + n : "";
    })();
  function t(n) {
    return !!r && r in n;
  }
  return ((D = t), D);
}
var P, Me;
function Nr() {
  if (Me) return P;
  Me = 1;
  var e = Function.prototype,
    r = e.toString;
  function t(n) {
    if (n != null) {
      try {
        return r.call(n);
      } catch {}
      try {
        return n + "";
      } catch {}
    }
    return "";
  }
  return ((P = t), P);
}
var G, xe;
function Hr() {
  if (xe) return G;
  xe = 1;
  var e = Ir(),
    r = xr(),
    t = yr(),
    n = Nr(),
    i = /[\\^$.*+?()[\]{}|]/g,
    a = /^\[object .+?Constructor\]$/,
    o = Function.prototype,
    s = Object.prototype,
    c = o.toString,
    _ = s.hasOwnProperty,
    v = RegExp(
      "^" +
        c
          .call(_)
          .replace(i, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    );
  function me(f) {
    if (!t(f) || r(f)) return !1;
    var Rr = e(f) ? v : a;
    return Rr.test(n(f));
  }
  return ((G = me), G);
}
var I, Ne;
function Fr() {
  if (Ne) return I;
  Ne = 1;
  function e(r, t) {
    return r?.[t];
  }
  return ((I = e), I);
}
var M, He;
function qr() {
  if (He) return M;
  He = 1;
  var e = Hr(),
    r = Fr();
  function t(n, i) {
    var a = r(n, i);
    return e(a) ? a : void 0;
  }
  return ((M = t), M);
}
var x, Fe;
function l() {
  if (Fe) return x;
  Fe = 1;
  var e = qr(),
    r = e(Object, "create");
  return ((x = r), x);
}
var N, Le;
function Lr() {
  if (Le) return N;
  Le = 1;
  var e = l();
  function r() {
    ((this.__data__ = e ? e(null) : {}), (this.size = 0));
  }
  return ((N = r), N);
}
var H, ze;
function zr() {
  if (ze) return H;
  ze = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return ((this.size -= t ? 1 : 0), t);
  }
  return ((H = e), H);
}
var F, Ee;
function Er() {
  if (Ee) return F;
  Ee = 1;
  var e = l(),
    r = "__lodash_hash_undefined__",
    t = Object.prototype,
    n = t.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var s = o[a];
      return s === r ? void 0 : s;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return ((F = i), F);
}
var L, Ae;
function Ar() {
  if (Ae) return L;
  Ae = 1;
  var e = l(),
    r = Object.prototype,
    t = r.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : t.call(a, i);
  }
  return ((L = n), L);
}
var z, Ke;
function Kr() {
  if (Ke) return z;
  Ke = 1;
  var e = l(),
    r = "__lodash_hash_undefined__";
  function t(n, i) {
    var a = this.__data__;
    return (
      (this.size += this.has(n) ? 0 : 1),
      (a[n] = e && i === void 0 ? r : i),
      this
    );
  }
  return ((z = t), z);
}
var E, $e;
function $r() {
  if ($e) return E;
  $e = 1;
  var e = Lr(),
    r = zr(),
    t = Er(),
    n = Ar(),
    i = Kr();
  function a(o) {
    var s = -1,
      c = o == null ? 0 : o.length;
    for (this.clear(); ++s < c; ) {
      var _ = o[s];
      this.set(_[0], _[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = r),
    (a.prototype.get = t),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (E = a),
    E
  );
}
var A, Je;
function Jr() {
  if (Je) return A;
  Je = 1;
  function e() {
    ((this.__data__ = []), (this.size = 0));
  }
  return ((A = e), A);
}
var K, Ve;
function Vr() {
  if (Ve) return K;
  Ve = 1;
  function e(r, t) {
    return r === t || (r !== r && t !== t);
  }
  return ((K = e), K);
}
var $, Ue;
function p() {
  if (Ue) return $;
  Ue = 1;
  var e = Vr();
  function r(t, n) {
    for (var i = t.length; i--; ) if (e(t[i][0], n)) return i;
    return -1;
  }
  return (($ = r), $);
}
var J, Be;
function Ur() {
  if (Be) return J;
  Be = 1;
  var e = p(),
    r = Array.prototype,
    t = r.splice;
  function n(i) {
    var a = this.__data__,
      o = e(a, i);
    if (o < 0) return !1;
    var s = a.length - 1;
    return (o == s ? a.pop() : t.call(a, o, 1), --this.size, !0);
  }
  return ((J = n), J);
}
var V, Xe;
function Br() {
  if (Xe) return V;
  Xe = 1;
  var e = p();
  function r(t) {
    var n = this.__data__,
      i = e(n, t);
    return i < 0 ? void 0 : n[i][1];
  }
  return ((V = r), V);
}
var U, Ze;
function Xr() {
  if (Ze) return U;
  Ze = 1;
  var e = p();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return ((U = r), U);
}
var B, Qe;
function Zr() {
  if (Qe) return B;
  Qe = 1;
  var e = p();
  function r(t, n) {
    var i = this.__data__,
      a = e(i, t);
    return (a < 0 ? (++this.size, i.push([t, n])) : (i[a][1] = n), this);
  }
  return ((B = r), B);
}
var X, We;
function Qr() {
  if (We) return X;
  We = 1;
  var e = Jr(),
    r = Ur(),
    t = Br(),
    n = Xr(),
    i = Zr();
  function a(o) {
    var s = -1,
      c = o == null ? 0 : o.length;
    for (this.clear(); ++s < c; ) {
      var _ = o[s];
      this.set(_[0], _[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = r),
    (a.prototype.get = t),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (X = a),
    X
  );
}
var Z, Ye;
function Wr() {
  if (Ye) return Z;
  Ye = 1;
  var e = qr(),
    r = ve(),
    t = e(r, "Map");
  return ((Z = t), Z);
}
var Q, er;
function Yr() {
  if (er) return Q;
  er = 1;
  var e = $r(),
    r = Qr(),
    t = Wr();
  function n() {
    ((this.size = 0),
      (this.__data__ = {
        hash: new e(),
        map: new (t || r)(),
        string: new e(),
      }));
  }
  return ((Q = n), Q);
}
var W, rr;
function et() {
  if (rr) return W;
  rr = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? r !== "__proto__"
      : r === null;
  }
  return ((W = e), W);
}
var Y, tr;
function d() {
  if (tr) return Y;
  tr = 1;
  var e = et();
  function r(t, n) {
    var i = t.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return ((Y = r), Y);
}
var ee, ar;
function rt() {
  if (ar) return ee;
  ar = 1;
  var e = d();
  function r(t) {
    var n = e(this, t).delete(t);
    return ((this.size -= n ? 1 : 0), n);
  }
  return ((ee = r), ee);
}
var re, nr;
function tt() {
  if (nr) return re;
  nr = 1;
  var e = d();
  function r(t) {
    return e(this, t).get(t);
  }
  return ((re = r), re);
}
var te, ir;
function at() {
  if (ir) return te;
  ir = 1;
  var e = d();
  function r(t) {
    return e(this, t).has(t);
  }
  return ((te = r), te);
}
var ae, or;
function nt() {
  if (or) return ae;
  or = 1;
  var e = d();
  function r(t, n) {
    var i = e(this, t),
      a = i.size;
    return (i.set(t, n), (this.size += i.size == a ? 0 : 1), this);
  }
  return ((ae = r), ae);
}
var ne, sr;
function it() {
  if (sr) return ne;
  sr = 1;
  var e = Yr(),
    r = rt(),
    t = tt(),
    n = at(),
    i = nt();
  function a(o) {
    var s = -1,
      c = o == null ? 0 : o.length;
    for (this.clear(); ++s < c; ) {
      var _ = o[s];
      this.set(_[0], _[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = r),
    (a.prototype.get = t),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (ne = a),
    ne
  );
}
var ie, ur;
function ot() {
  if (ur) return ie;
  ur = 1;
  var e = it(),
    r = "Expected a function";
  function t(n, i) {
    if (typeof n != "function" || (i != null && typeof i != "function"))
      throw new TypeError(r);
    var a = function () {
      var o = arguments,
        s = i ? i.apply(this, o) : o[0],
        c = a.cache;
      if (c.has(s)) return c.get(s);
      var _ = n.apply(this, o);
      return ((a.cache = c.set(s, _) || c), _);
    };
    return ((a.cache = new (t.Cache || e)()), a);
  }
  return ((t.Cache = e), (ie = t), ie);
}
var oe, cr;
function st() {
  if (cr) return oe;
  cr = 1;
  var e = ot(),
    r = 500;
  function t(n) {
    var i = e(n, function (o) {
        return (a.size === r && a.clear(), o);
      }),
      a = i.cache;
    return i;
  }
  return ((oe = t), oe);
}
var se, _r;
function ut() {
  if (_r) return se;
  _r = 1;
  var e = st(),
    r =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    t = /\\(\\)?/g,
    n = e(function (i) {
      var a = [];
      return (
        i.charCodeAt(0) === 46 && a.push(""),
        i.replace(r, function (o, s, c, _) {
          a.push(c ? _.replace(t, "$1") : s || o);
        }),
        a
      );
    });
  return ((se = n), se);
}
var ue, fr;
function ct() {
  if (fr) return ue;
  fr = 1;
  function e(r, t) {
    for (var n = -1, i = r == null ? 0 : r.length, a = Array(i); ++n < i; )
      a[n] = t(r[n], n, r);
    return a;
  }
  return ((ue = e), ue);
}
var ce, hr;
function _t() {
  if (hr) return ce;
  hr = 1;
  var e = ge(),
    r = ct(),
    t = de(),
    n = be(),
    i = e ? e.prototype : void 0,
    a = i ? i.toString : void 0;
  function o(s) {
    if (typeof s == "string") return s;
    if (t(s)) return r(s, o) + "";
    if (n(s)) return a ? a.call(s) : "";
    var c = s + "";
    return c == "0" && 1 / s == -1 / 0 ? "-0" : c;
  }
  return ((ce = o), ce);
}
var _e, lr;
function ft() {
  if (lr) return _e;
  lr = 1;
  var e = _t();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return ((_e = r), _e);
}
var fe, pr;
function ht() {
  if (pr) return fe;
  pr = 1;
  var e = de(),
    r = Gr(),
    t = ut(),
    n = ft();
  function i(a, o) {
    return e(a) ? a : r(a, o) ? [a] : t(n(a));
  }
  return ((fe = i), fe);
}
var he, dr;
function lt() {
  if (dr) return he;
  dr = 1;
  var e = be();
  function r(t) {
    if (typeof t == "string" || e(t)) return t;
    var n = t + "";
    return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
  }
  return ((he = r), he);
}
var le, vr;
function pt() {
  if (vr) return le;
  vr = 1;
  var e = ht(),
    r = lt();
  function t(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; ) n = n[r(i[a++])];
    return a && a == o ? n : void 0;
  }
  return ((le = t), le);
}
var pe, gr;
function dt() {
  if (gr) return pe;
  gr = 1;
  var e = pt();
  function r(t, n, i) {
    var a = t == null ? void 0 : e(t, n);
    return a === void 0 ? i : a;
  }
  return ((pe = r), pe);
}
var vt = dt();
const u = Tr(vt),
  jt = kr("cmsSettings", {
    state: () => ({
      footer: gt(),
      header: bt(),
      subscription: mt(),
      prefooter: yt(),
      newprefooter: qt(),
      fetchStatus: !1,
      flyingButton: { link_type: "", text: "", url: "" },
      currentLang: "",
    }),
    getters: {
      getFooter: (e) => e.footer,
      getHeader: (e) => e.header,
      getSubscription: (e) => e.subscription,
      getPrefooter: (e) => e.prefooter,
      getNewPrefooter: (e) => e.newprefooter,
    },
    actions: {
      async fetchDocument(e) {
        if (this.fetchStatus && this.currentLang === e) return;
        const r = `{
        settings {
          ...settingsFields
          header_navigation_groups {
            navigation_group {
              ...on navigation_group {
                ...navigation_groupFields
              }
            }
          }
          footer_navigation_groups {
            navigation_group {
              ...on navigation_group {
                ...navigation_groupFields
              }
            }
          }
          subscription {
            ...on subscription {
              ...subscriptionFields
            }
          }
          prefooter {
            ...on prefooter_app {
              ...prefooter_appFields
            }
            ...on prefooter_newsletter {
              ...prefooter_newsletterFields
            }
          }
          new_prefooter {
            ...on new_prefooter_app {
              ...new_prefooter_appFields
            }
          }
        }
      }`,
          t = wr(e);
        try {
          const n = await $fetch("/api/cms/single/settings", {
            params: { graphQuery: r, lang: t },
          });
          if (!n) return;
          const i = u(n, "data", null);
          ((this.footer = Ct(i)),
            (this.header = St(i)),
            (this.subscription = Rt(i)),
            (this.prefooter = Tt(i)),
            (this.newprefooter = kt(i)),
            (this.flyingButton = u(i, "flying_button", {
              link_type: "",
              text: "",
              url: "",
            })),
            (this.fetchStatus = !0),
            (this.currentLang = e));
        } catch (n) {
          console.error("Error fetching settings document:", n);
        }
      },
    },
  });
function gt() {
  return {
    navigationGroups: [],
    secondaryNavLinks: [],
    bannerRestaurants: {
      title: "",
      image: { url: "", alt: "", dimensions: {} },
      link: "",
      title2: "",
      image2: { url: "", alt: "", dimensions: {} },
      link2: "",
    },
    social: {
      slogan: "",
      title: "",
      links: {
        youtube: void 0,
        facebook: void 0,
        instagram: void 0,
        tiktok: void 0,
      },
    },
    showSubscriptionFooter: !1,
  };
}
function bt() {
  return {
    headerNavigationGroups: [],
    headerSecondaryNavLinks: [],
    headerDeals: [],
    headerLinkRestaurants: void 0,
    headerLinkMcdelivery: void 0,
    headerLinkMymcd: void 0,
    showSubscriptionHeader: !1,
  };
}
function mt() {
  return {
    title: "",
    description: void 0,
    legalText: "",
    successTitle: "",
    successDescription: "",
    offerImage: { url: "", alt: "" },
    logo: void 0,
  };
}
function yt() {
  return { newsletter: {}, app: {} };
}
function qt() {
  return {
    title: "",
    price: 1.5,
    offer_description: void 0,
    button_label: "",
    button_link: void 0,
    product_image: void 0,
    disable_animations: !1,
    social_card_copy: "",
    social_card_background_image: void 0,
    socials: void 0,
    search_card_copy: "",
    search_card_button_label: "",
    search_card_button_link: void 0,
    search_card_button_color: void 0,
  };
}
function Ct(e) {
  return {
    navigationGroups: Cr(u(e, "footer_navigation_groups", [])),
    secondaryNavLinks: Sr(u(e, "footer_secondary_nav_links", [])),
    bannerRestaurants: {
      title: u(e, "footer_banner_restaurants_title", ""),
      image: {
        url: u(e, "footer_banner_restaurants_image.url", ""),
        alt: u(e, "footer_banner_restaurants_image.alt", ""),
        dimensions: u(e, "footer_banner_restaurants_image.dimensions", {}),
      },
      link: u(e, "footer_banner_restaurants_link", ""),
      title2: u(e, "footer_banner_restaurants_title_2", ""),
      image2: {
        url: u(e, "footer_banner_restaurants_image_2.url", ""),
        alt: u(e, "footer_banner_restaurants_image_2.alt", ""),
        dimensions: u(e, "footer_banner_restaurants_image_2.dimensions", {}),
      },
      link2: u(e, "footer_banner_restaurants_link_2", ""),
    },
    social: {
      slogan: u(e, "social_slogan", ""),
      title: u(e, "social_title", ""),
      links: {
        youtube: u(e, "youtube_link"),
        facebook: u(e, "facebook_link"),
        instagram: u(e, "instagram_link"),
        tiktok: u(e, "tiktok_link"),
      },
    },
    showSubscriptionFooter: u(e, "show_subscription_footer", !1),
  };
}
function St(e) {
  return {
    headerNavigationGroups: Cr(u(e, "header_navigation_groups", [])),
    headerSecondaryNavLinks: Sr(u(e, "header_secondary_nav_links", [])),
    headerDeals: u(e, "header_deals", []),
    showSubscriptionHeader: u(e, "show_subscription_header", !1),
    headerLinkRestaurants: u(e, "header_link_restaurants"),
    headerLinkMymcd: u(e, "header_link_mymcd"),
    headerLinkMcdelivery: u(e, "header_link_mcdelivery"),
  };
}
function Rt(e) {
  const r = u(e, "subscription.data", {});
  return {
    title: r?.title || "",
    description: r?.description,
    legalText: r?.legal_text || "",
    successTitle: r?.success_title || "",
    successDescription: r?.success_description || "",
    offerImage: {
      url: u(r, "offer_image.url", ""),
      alt: u(r, "offer_image.alt", ""),
    },
    logo: r?.logo || "",
  };
}
function Tt(e) {
  const r = u(e, "prefooter", {}),
    t = u(r, "type", "");
  return {
    newsletter: t === "prefooter_newsletter" ? u(r, "data", {}) : {},
    app: t === "prefooter_app" ? u(r, "data", {}) : {},
  };
}
function kt(e) {
  const r = u(e, "new_prefooter.data", {});
  return {
    title: r?.title,
    price: r?.price,
    offer_description: r?.offer_description,
    button_label: r?.button_label,
    button_link: r?.button_link,
    button_gtm: r?.button_gtm || "",
    product_image: r?.product_image,
    disable_animations: r?.disable_animations,
    social_card_copy: r?.social_card_copy,
    social_card_background_image: r?.social_card_background_image,
    socials: r?.socials,
    search_card_copy: r?.search_card_copy,
    search_card_button_label: r?.search_card_button_label,
    search_card_button_link: r?.search_card_button_link,
    search_card_button_color: r?.search_card_button_color,
    search_card_button_gtm: r?.search_card_button_gtm || "",
  };
}
function Cr(e) {
  return e.map((r) => ({
    id: u(r, "navigation_group.id", ""),
    gtmText: u(r, "navigation_group.data.gtm_text", ""),
    title: u(r, "navigation_group.data.title", ""),
    titleLink: u(r, "navigation_group.data.title_link", ""),
    items: br(u(r, "navigation_group.data.navigation_items", [])),
    secondaryItems: br(u(r, "navigation_group.data.secondary_nav_links", [])),
  }));
}
function br(e) {
  return e.map((r) => ({
    gtmText: u(r, "gtm_text", ""),
    label: u(r, "label", ""),
    link: u(r, "link", {}),
  }));
}
function Sr(e) {
  return e.map((r) => ({
    gtmText: r.gtm_text || "",
    label: r.label || "",
    link: r.link || {},
  }));
}
export { jt as u };
