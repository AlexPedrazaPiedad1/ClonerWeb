/**
 * @vue/shared v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ii(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ne = {},
  Dt = [],
  Fe = () => {},
  Sr = () => !1,
  pn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ri = (e) => e.startsWith("onUpdate:"),
  ce = Object.assign,
  li = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  fa = Object.prototype.hasOwnProperty,
  ee = (e, t) => fa.call(e, t),
  K = Array.isArray,
  Rt = (e) => hn(e) === "[object Map]",
  xr = (e) => hn(e) === "[object Set]",
  ua = (e) => hn(e) === "[object RegExp]",
  X = (e) => typeof e == "function",
  le = (e) => typeof e == "string",
  st = (e) => typeof e == "symbol",
  se = (e) => e !== null && typeof e == "object",
  ai = (e) => (se(e) || X(e)) && X(e.then) && X(e.catch),
  Tr = Object.prototype.toString,
  hn = (e) => Tr.call(e),
  da = (e) => hn(e).slice(8, -1),
  Er = (e) => hn(e) === "[object Object]",
  oi = (e) =>
    le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Ft = ii(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  ts = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  pa = /-\w/g,
  $e = ts((e) => e.replace(pa, (t) => t.slice(1).toUpperCase())),
  ha = /\B([A-Z])/g,
  gt = ts((e) => e.replace(ha, "-$1").toLowerCase()),
  ns = ts((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  An = ts((e) => (e ? `on${ns(e)}` : "")),
  ut = (e, t) => !Object.is(e, t),
  Nt = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Cr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  Ns = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  _r = (e) => {
    const t = le(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Ri;
const ss = () =>
  Ri ||
  (Ri =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function is(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = le(s) ? ya(s) : is(s);
      if (i) for (const r in i) t[r] = i[r];
    }
    return t;
  } else if (le(e) || se(e)) return e;
}
const ga = /;(?![^(]*\))/g,
  ma = /:([^]+)/,
  va = /\/\*[^]*?\*\//g;
function ya(e) {
  const t = {};
  return (
    e
      .replace(va, "")
      .split(ga)
      .forEach((n) => {
        if (n) {
          const s = n.split(ma);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function rs(e) {
  let t = "";
  if (le(e)) t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const s = rs(e[n]);
      s && (t += s + " ");
    }
  else if (se(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function bu(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return (t && !le(t) && (e.class = rs(t)), n && (e.style = is(n)), e);
}
const ba =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  wa = ii(ba);
function Pr(e) {
  return !!e || e === "";
}
const Mr = (e) => !!(e && e.__v_isRef === !0),
  Sa = (e) =>
    le(e)
      ? e
      : e == null
        ? ""
        : K(e) || (se(e) && (e.toString === Tr || !X(e.toString)))
          ? Mr(e)
            ? Sa(e.value)
            : JSON.stringify(e, Lr, 2)
          : String(e),
  Lr = (e, t) =>
    Mr(t)
      ? Lr(e, t.value)
      : Rt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, i], r) => ((n[ms(s, r) + " =>"] = i), n),
              {},
            ),
          }
        : xr(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ms(n)) }
          : st(t)
            ? ms(t)
            : se(t) && !K(t) && !Er(t)
              ? String(t)
              : t,
  ms = (e, t = "") => {
    var n;
    return st(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
function xa(e) {
  return e == null
    ? "initial"
    : typeof e == "string"
      ? e === ""
        ? " "
        : e
      : String(e);
}
/**
 * @vue/reactivity v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let we;
class Ar {
  constructor(t = !1) {
    ((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = we),
      !t &&
        we &&
        (this.index = (we.scopes || (we.scopes = [])).push(this) - 1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = we;
      try {
        return ((we = this), t());
      } finally {
        we = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = we), (we = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((we = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function wu(e) {
  return new Ar(e);
}
function Ta() {
  return we;
}
function Su(e, t = !1) {
  we && we.cleanups.push(e);
}
let re;
const vs = new WeakSet();
class Or {
  constructor(t) {
    ((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      we && we.active && we.effects.push(this));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), vs.has(this) && (vs.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Br(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), Fi(this), Dr(this));
    const t = re,
      n = He;
    ((re = this), (He = !0));
    try {
      return this.fn();
    } finally {
      (Rr(this), (re = t), (He = n), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ui(t);
      ((this.deps = this.depsTail = void 0),
        Fi(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? vs.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    $s(this) && this.run();
  }
  get dirty() {
    return $s(this);
  }
}
let Ir = 0,
  tn,
  nn;
function Br(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = nn), (nn = e));
    return;
  }
  ((e.next = tn), (tn = e));
}
function ci() {
  Ir++;
}
function fi() {
  if (--Ir > 0) return;
  if (nn) {
    let t = nn;
    for (nn = void 0; t; ) {
      const n = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = n));
    }
  }
  let e;
  for (; tn; ) {
    let t = tn;
    for (tn = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Dr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function Rr(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const i = s.prevDep;
    (s.version === -1 ? (s === n && (n = i), ui(s), Ea(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i));
  }
  ((e.deps = t), (e.depsTail = n));
}
function $s(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Fr(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Fr(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === an) ||
    ((e.globalVersion = an),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !$s(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = re,
    s = He;
  ((re = e), (He = !0));
  try {
    Dr(e);
    const i = e.fn(e._value);
    (t.version === 0 || ut(i, e._value)) &&
      ((e.flags |= 128), (e._value = i), t.version++);
  } catch (i) {
    throw (t.version++, i);
  } finally {
    ((re = n), (He = s), Rr(e), (e.flags &= -3));
  }
}
function ui(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (
    (s && ((s.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) ui(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ea(e) {
  const { prevDep: t, nextDep: n } = e;
  (t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let He = !0;
const Nr = [];
function et() {
  (Nr.push(He), (He = !1));
}
function tt() {
  const e = Nr.pop();
  He = e === void 0 ? !0 : e;
}
function Fi(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = re;
    re = void 0;
    try {
      t();
    } finally {
      re = n;
    }
  }
}
let an = 0;
class Ca {
  constructor(t, n) {
    ((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class ls {
  constructor(t) {
    ((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0));
  }
  track(t) {
    if (!re || !He || re === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      ((n = this.activeLink = new Ca(re, this)),
        re.deps
          ? ((n.prevDep = re.depsTail),
            (re.depsTail.nextDep = n),
            (re.depsTail = n))
          : (re.deps = re.depsTail = n),
        $r(n));
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      ((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = re.depsTail),
        (n.nextDep = void 0),
        (re.depsTail.nextDep = n),
        (re.depsTail = n),
        re.deps === n && (re.deps = s));
    }
    return n;
  }
  trigger(t) {
    (this.version++, an++, this.notify(t));
  }
  notify(t) {
    ci();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      fi();
    }
  }
}
function $r(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) $r(s);
    }
    const n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
const Rn = new WeakMap(),
  wt = Symbol(""),
  zs = Symbol(""),
  on = Symbol("");
function Se(e, t, n) {
  if (He && re) {
    let s = Rn.get(e);
    s || Rn.set(e, (s = new Map()));
    let i = s.get(n);
    (i || (s.set(n, (i = new ls())), (i.map = s), (i.key = n)), i.track());
  }
}
function Ze(e, t, n, s, i, r) {
  const l = Rn.get(e);
  if (!l) {
    an++;
    return;
  }
  const o = (a) => {
    a && a.trigger();
  };
  if ((ci(), t === "clear")) l.forEach(o);
  else {
    const a = K(e),
      u = a && oi(n);
    if (a && n === "length") {
      const c = Number(s);
      l.forEach((f, m) => {
        (m === "length" || m === on || (!st(m) && m >= c)) && o(f);
      });
    } else
      switch (
        ((n !== void 0 || l.has(void 0)) && o(l.get(n)), u && o(l.get(on)), t)
      ) {
        case "add":
          a ? u && o(l.get("length")) : (o(l.get(wt)), Rt(e) && o(l.get(zs)));
          break;
        case "delete":
          a || (o(l.get(wt)), Rt(e) && o(l.get(zs)));
          break;
        case "set":
          Rt(e) && o(l.get(wt));
          break;
      }
  }
  fi();
}
function _a(e, t) {
  const n = Rn.get(e);
  return n && n.get(t);
}
function Lt(e) {
  const t = Q(e);
  return t === e ? t : (Se(t, "iterate", on), Ne(e) ? t : t.map(ge));
}
function as(e) {
  return (Se((e = Q(e)), "iterate", on), e);
}
const Pa = {
  __proto__: null,
  [Symbol.iterator]() {
    return ys(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return Lt(this).concat(...e.map((t) => (K(t) ? Lt(t) : t)));
  },
  entries() {
    return ys(this, "entries", (e) => ((e[1] = ge(e[1])), e));
  },
  every(e, t) {
    return Ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ke(this, "filter", e, t, (n) => n.map(ge), arguments);
  },
  find(e, t) {
    return Ke(this, "find", e, t, ge, arguments);
  },
  findIndex(e, t) {
    return Ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ke(this, "findLast", e, t, ge, arguments);
  },
  findLastIndex(e, t) {
    return Ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bs(this, "includes", e);
  },
  indexOf(...e) {
    return bs(this, "indexOf", e);
  },
  join(e) {
    return Lt(this).join(e);
  },
  lastIndexOf(...e) {
    return bs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xt(this, "pop");
  },
  push(...e) {
    return Xt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ni(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ni(this, "reduceRight", e, t);
  },
  shift() {
    return Xt(this, "shift");
  },
  some(e, t) {
    return Ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xt(this, "splice", e);
  },
  toReversed() {
    return Lt(this).toReversed();
  },
  toSorted(e) {
    return Lt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Lt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xt(this, "unshift", e);
  },
  values() {
    return ys(this, "values", ge);
  },
};
function ys(e, t, n) {
  const s = as(e),
    i = s[t]();
  return (
    s !== e &&
      !Ne(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const r = i._next();
        return (r.done || (r.value = n(r.value)), r);
      })),
    i
  );
}
const Ma = Array.prototype;
function Ke(e, t, n, s, i, r) {
  const l = as(e),
    o = l !== e && !Ne(e),
    a = l[t];
  if (a !== Ma[t]) {
    const f = a.apply(e, r);
    return o ? ge(f) : f;
  }
  let u = n;
  l !== e &&
    (o
      ? (u = function (f, m) {
          return n.call(this, ge(f), m, e);
        })
      : n.length > 2 &&
        (u = function (f, m) {
          return n.call(this, f, m, e);
        }));
  const c = a.call(l, u, s);
  return o && i ? i(c) : c;
}
function Ni(e, t, n, s) {
  const i = as(e);
  let r = n;
  return (
    i !== e &&
      (Ne(e)
        ? n.length > 3 &&
          (r = function (l, o, a) {
            return n.call(this, l, o, a, e);
          })
        : (r = function (l, o, a) {
            return n.call(this, l, ge(o), a, e);
          })),
    i[t](r, ...s)
  );
}
function bs(e, t, n) {
  const s = Q(e);
  Se(s, "iterate", on);
  const i = s[t](...n);
  return (i === -1 || i === !1) && gi(n[0])
    ? ((n[0] = Q(n[0])), s[t](...n))
    : i;
}
function Xt(e, t, n = []) {
  (et(), ci());
  const s = Q(e)[t].apply(e, n);
  return (fi(), tt(), s);
}
const La = ii("__proto__,__v_isRef,__isVue"),
  zr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(st),
  );
function Aa(e) {
  st(e) || (e = String(e));
  const t = Q(this);
  return (Se(t, "has", e), t.hasOwnProperty(e));
}
class kr {
  constructor(t = !1, n = !1) {
    ((this._isReadonly = t), (this._isShallow = n));
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return s === (i ? (r ? ka : Gr) : r ? jr : Vr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const l = K(t);
    if (!i) {
      let a;
      if (l && (a = Pa[n])) return a;
      if (n === "hasOwnProperty") return Aa;
    }
    const o = Reflect.get(t, n, pe(t) ? t : s);
    if ((st(n) ? zr.has(n) : La(n)) || (i || Se(t, "get", n), r)) return o;
    if (pe(o)) {
      const a = l && oi(n) ? o : o.value;
      return i && se(a) ? Hs(a) : a;
    }
    return se(o) ? (i ? Hs(o) : pi(o)) : o;
  }
}
class Hr extends kr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    if (!this._isShallow) {
      const a = pt(r);
      if (
        (!Ne(s) && !pt(s) && ((r = Q(r)), (s = Q(s))), !K(t) && pe(r) && !pe(s))
      )
        return (a || (r.value = s), !0);
    }
    const l = K(t) && oi(n) ? Number(n) < t.length : ee(t, n),
      o = Reflect.set(t, n, s, pe(t) ? t : i);
    return (
      t === Q(i) && (l ? ut(s, r) && Ze(t, "set", n, s) : Ze(t, "add", n, s)),
      o
    );
  }
  deleteProperty(t, n) {
    const s = ee(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return (i && s && Ze(t, "delete", n, void 0), i);
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return ((!st(n) || !zr.has(n)) && Se(t, "has", n), s);
  }
  ownKeys(t) {
    return (Se(t, "iterate", K(t) ? "length" : wt), Reflect.ownKeys(t));
  }
}
class Oa extends kr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ia = new Hr(),
  Ba = new Oa(),
  Da = new Hr(!0);
const ks = (e) => e,
  Sn = (e) => Reflect.getPrototypeOf(e);
function Ra(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = Q(i),
      l = Rt(r),
      o = e === "entries" || (e === Symbol.iterator && l),
      a = e === "keys" && l,
      u = i[e](...s),
      c = n ? ks : t ? Fn : ge;
    return (
      !t && Se(r, "iterate", a ? zs : wt),
      {
        next() {
          const { value: f, done: m } = u.next();
          return m
            ? { value: f, done: m }
            : { value: o ? [c(f[0]), c(f[1])] : c(f), done: m };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function xn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Fa(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw,
        l = Q(r),
        o = Q(i);
      e || (ut(i, o) && Se(l, "get", i), Se(l, "get", o));
      const { has: a } = Sn(l),
        u = t ? ks : e ? Fn : ge;
      if (a.call(l, i)) return u(r.get(i));
      if (a.call(l, o)) return u(r.get(o));
      r !== l && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return (!e && Se(Q(i), "iterate", wt), i.size);
    },
    has(i) {
      const r = this.__v_raw,
        l = Q(r),
        o = Q(i);
      return (
        e || (ut(i, o) && Se(l, "has", i), Se(l, "has", o)),
        i === o ? r.has(i) : r.has(i) || r.has(o)
      );
    },
    forEach(i, r) {
      const l = this,
        o = l.__v_raw,
        a = Q(o),
        u = t ? ks : e ? Fn : ge;
      return (
        !e && Se(a, "iterate", wt),
        o.forEach((c, f) => i.call(r, u(c), u(f), l))
      );
    },
  };
  return (
    ce(
      n,
      e
        ? {
            add: xn("add"),
            set: xn("set"),
            delete: xn("delete"),
            clear: xn("clear"),
          }
        : {
            add(i) {
              !t && !Ne(i) && !pt(i) && (i = Q(i));
              const r = Q(this);
              return (
                Sn(r).has.call(r, i) || (r.add(i), Ze(r, "add", i, i)),
                this
              );
            },
            set(i, r) {
              !t && !Ne(r) && !pt(r) && (r = Q(r));
              const l = Q(this),
                { has: o, get: a } = Sn(l);
              let u = o.call(l, i);
              u || ((i = Q(i)), (u = o.call(l, i)));
              const c = a.call(l, i);
              return (
                l.set(i, r),
                u ? ut(r, c) && Ze(l, "set", i, r) : Ze(l, "add", i, r),
                this
              );
            },
            delete(i) {
              const r = Q(this),
                { has: l, get: o } = Sn(r);
              let a = l.call(r, i);
              (a || ((i = Q(i)), (a = l.call(r, i))), o && o.call(r, i));
              const u = r.delete(i);
              return (a && Ze(r, "delete", i, void 0), u);
            },
            clear() {
              const i = Q(this),
                r = i.size !== 0,
                l = i.clear();
              return (r && Ze(i, "clear", void 0, void 0), l);
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = Ra(i, e, t);
    }),
    n
  );
}
function di(e, t) {
  const n = Fa(e, t);
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
        ? e
        : i === "__v_raw"
          ? s
          : Reflect.get(ee(n, i) && i in s ? n : s, i, r);
}
const Na = { get: di(!1, !1) },
  $a = { get: di(!1, !0) },
  za = { get: di(!0, !1) };
const Vr = new WeakMap(),
  jr = new WeakMap(),
  Gr = new WeakMap(),
  ka = new WeakMap();
function Ha(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Va(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ha(da(e));
}
function pi(e) {
  return pt(e) ? e : hi(e, !1, Ia, Na, Vr);
}
function ja(e) {
  return hi(e, !1, Da, $a, jr);
}
function Hs(e) {
  return hi(e, !0, Ba, za, Gr);
}
function hi(e, t, n, s, i) {
  if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = Va(e);
  if (r === 0) return e;
  const l = i.get(e);
  if (l) return l;
  const o = new Proxy(e, r === 2 ? s : n);
  return (i.set(e, o), o);
}
function St(e) {
  return pt(e) ? St(e.__v_raw) : !!(e && e.__v_isReactive);
}
function pt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ne(e) {
  return !!(e && e.__v_isShallow);
}
function gi(e) {
  return e ? !!e.__v_raw : !1;
}
function Q(e) {
  const t = e && e.__v_raw;
  return t ? Q(t) : e;
}
function Ga(e) {
  return (
    !ee(e, "__v_skip") && Object.isExtensible(e) && Cr(e, "__v_skip", !0),
    e
  );
}
const ge = (e) => (se(e) ? pi(e) : e),
  Fn = (e) => (se(e) ? Hs(e) : e);
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function de(e) {
  return Wr(e, !1);
}
function xu(e) {
  return Wr(e, !0);
}
function Wr(e, t) {
  return pe(e) ? e : new Wa(e, t);
}
class Wa {
  constructor(t, n) {
    ((this.dep = new ls()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : Q(t)),
      (this._value = n ? t : ge(t)),
      (this.__v_isShallow = n));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ne(t) || pt(t);
    ((t = s ? t : Q(t)),
      ut(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : ge(t)),
        this.dep.trigger()));
  }
}
function qr(e) {
  return pe(e) ? e.value : e;
}
function Tu(e) {
  return X(e) ? e() : qr(e);
}
const qa = {
  get: (e, t, n) => (t === "__v_raw" ? e : qr(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const i = e[t];
    return pe(i) && !pe(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Ur(e) {
  return St(e) ? e : new Proxy(e, qa);
}
class Ua {
  constructor(t) {
    ((this.__v_isRef = !0), (this._value = void 0));
    const n = (this.dep = new ls()),
      { get: s, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    ((this._get = s), (this._set = i));
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function Eu(e) {
  return new Ua(e);
}
function Cu(e) {
  const t = K(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Kr(e, n);
  return t;
}
class Ka {
  constructor(t, n, s) {
    ((this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0));
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return _a(Q(this._object), this._key);
  }
}
class Ya {
  constructor(t) {
    ((this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0));
  }
  get value() {
    return (this._value = this._getter());
  }
}
function _u(e, t, n) {
  return pe(e)
    ? e
    : X(e)
      ? new Ya(e)
      : se(e) && arguments.length > 1
        ? Kr(e, t, n)
        : de(e);
}
function Kr(e, t, n) {
  const s = e[t];
  return pe(s) ? s : new Ka(e, t, n);
}
class Xa {
  constructor(t, n, s) {
    ((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new ls(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = an - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && re !== this))
      return (Br(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (Fr(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ja(e, t, n = !1) {
  let s, i;
  return (X(e) ? (s = e) : ((s = e.get), (i = e.set)), new Xa(s, i, n));
}
const Tn = {},
  Nn = new WeakMap();
let bt;
function Za(e, t = !1, n = bt) {
  if (n) {
    let s = Nn.get(n);
    (s || Nn.set(n, (s = [])), s.push(e));
  }
}
function Qa(e, t, n = ne) {
  const {
      immediate: s,
      deep: i,
      once: r,
      scheduler: l,
      augmentJob: o,
      call: a,
    } = n,
    u = (h) => (i ? h : Ne(h) || i === !1 || i === 0 ? Qe(h, 1) : Qe(h));
  let c,
    f,
    m,
    g,
    C = !1,
    y = !1;
  if (
    (pe(e)
      ? ((f = () => e.value), (C = Ne(e)))
      : St(e)
        ? ((f = () => u(e)), (C = !0))
        : K(e)
          ? ((y = !0),
            (C = e.some((h) => St(h) || Ne(h))),
            (f = () =>
              e.map((h) => {
                if (pe(h)) return h.value;
                if (St(h)) return u(h);
                if (X(h)) return a ? a(h, 2) : h();
              })))
          : X(e)
            ? t
              ? (f = a ? () => a(e, 2) : e)
              : (f = () => {
                  if (m) {
                    et();
                    try {
                      m();
                    } finally {
                      tt();
                    }
                  }
                  const h = bt;
                  bt = c;
                  try {
                    return a ? a(e, 3, [g]) : e(g);
                  } finally {
                    bt = h;
                  }
                })
            : (f = Fe),
    t && i)
  ) {
    const h = f,
      w = i === !0 ? 1 / 0 : i;
    f = () => Qe(h(), w);
  }
  const P = Ta(),
    E = () => {
      (c.stop(), P && P.active && li(P.effects, c));
    };
  if (r && t) {
    const h = t;
    t = (...w) => {
      (h(...w), E());
    };
  }
  let p = y ? new Array(e.length).fill(Tn) : Tn;
  const d = (h) => {
    if (!(!(c.flags & 1) || (!c.dirty && !h)))
      if (t) {
        const w = c.run();
        if (i || C || (y ? w.some((L, A) => ut(L, p[A])) : ut(w, p))) {
          m && m();
          const L = bt;
          bt = c;
          try {
            const A = [w, p === Tn ? void 0 : y && p[0] === Tn ? [] : p, g];
            ((p = w), a ? a(t, 3, A) : t(...A));
          } finally {
            bt = L;
          }
        }
      } else c.run();
  };
  return (
    o && o(d),
    (c = new Or(f)),
    (c.scheduler = l ? () => l(d, !1) : d),
    (g = (h) => Za(h, !1, c)),
    (m = c.onStop =
      () => {
        const h = Nn.get(c);
        if (h) {
          if (a) a(h, 4);
          else for (const w of h) w();
          Nn.delete(c);
        }
      }),
    t ? (s ? d(!0) : (p = c.run())) : l ? l(d.bind(null, !0), !0) : c.run(),
    (E.pause = c.pause.bind(c)),
    (E.resume = c.resume.bind(c)),
    (E.stop = E),
    E
  );
}
function Qe(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !se(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, pe(e))) Qe(e.value, t, n);
  else if (K(e)) for (let s = 0; s < e.length; s++) Qe(e[s], t, n);
  else if (xr(e) || Rt(e))
    e.forEach((s) => {
      Qe(s, t, n);
    });
  else if (Er(e)) {
    for (const s in e) Qe(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Qe(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function gn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    qt(i, t, n);
  }
}
function Ve(e, t, n, s) {
  if (X(e)) {
    const i = gn(e, t, n, s);
    return (
      i &&
        ai(i) &&
        i.catch((r) => {
          qt(r, t, n);
        }),
      i
    );
  }
  if (K(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++) i.push(Ve(e[r], t, n, s));
    return i;
  }
}
function qt(e, t, n, s = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: l } =
      (t && t.appContext.config) || ne;
  if (t) {
    let o = t.parent;
    const a = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, a, u) === !1) return;
      }
      o = o.parent;
    }
    if (r) {
      (et(), gn(r, null, 10, [e, a, u]), tt());
      return;
    }
  }
  eo(e, n, i, s, l);
}
function eo(e, t, n, s = !0, i = !1) {
  if (i) throw e;
  console.error(e);
}
const Te = [];
let We = -1;
const $t = [];
let at = null,
  Ot = 0;
const Yr = Promise.resolve();
let $n = null;
function Xr(e) {
  const t = $n || Yr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function to(e) {
  let t = We + 1,
    n = Te.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = Te[s],
      r = cn(i);
    r < e || (r === e && i.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function mi(e) {
  if (!(e.flags & 1)) {
    const t = cn(e),
      n = Te[Te.length - 1];
    (!n || (!(e.flags & 2) && t >= cn(n)) ? Te.push(e) : Te.splice(to(t), 0, e),
      (e.flags |= 1),
      Jr());
  }
}
function Jr() {
  $n || ($n = Yr.then(Zr));
}
function zn(e) {
  (K(e)
    ? $t.push(...e)
    : at && e.id === -1
      ? at.splice(Ot + 1, 0, e)
      : e.flags & 1 || ($t.push(e), (e.flags |= 1)),
    Jr());
}
function $i(e, t, n = We + 1) {
  for (; n < Te.length; n++) {
    const s = Te[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      (Te.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2));
    }
  }
}
function kn(e) {
  if ($t.length) {
    const t = [...new Set($t)].sort((n, s) => cn(n) - cn(s));
    if ((($t.length = 0), at)) {
      at.push(...t);
      return;
    }
    for (at = t, Ot = 0; Ot < at.length; Ot++) {
      const n = at[Ot];
      (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2));
    }
    ((at = null), (Ot = 0));
  }
}
const cn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Zr(e) {
  try {
    for (We = 0; We < Te.length; We++) {
      const t = Te[We];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        gn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; We < Te.length; We++) {
      const t = Te[We];
      t && (t.flags &= -2);
    }
    ((We = -1),
      (Te.length = 0),
      kn(),
      ($n = null),
      (Te.length || $t.length) && Zr());
  }
}
let ye = null,
  Qr = null;
function Hn(e) {
  const t = ye;
  return ((ye = e), (Qr = (e && e.type.__scopeId) || null), t);
}
function no(e, t = ye, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && Un(-1);
    const r = Hn(t);
    let l;
    try {
      l = e(...i);
    } finally {
      (Hn(r), s._d && Un(1));
    }
    return l;
  };
  return ((s._n = !0), (s._c = !0), (s._d = !0), s);
}
function Pu(e, t) {
  if (ye === null) return e;
  const n = us(ye),
    s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, l, o, a = ne] = t[i];
    r &&
      (X(r) && (r = { mounted: r, updated: r }),
      r.deep && Qe(l),
      s.push({
        dir: r,
        instance: n,
        value: l,
        oldValue: void 0,
        arg: o,
        modifiers: a,
      }));
  }
  return e;
}
function qe(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const o = i[l];
    r && (o.oldValue = r[l].value);
    let a = o.dir[s];
    a && (et(), Ve(a, n, 8, [e.el, o, e, t]), tt());
  }
}
const so = Symbol("_vte"),
  el = (e) => e.__isTeleport,
  Je = Symbol("_leaveCb"),
  En = Symbol("_enterCb");
function tl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Ut(() => {
      e.isMounted = !0;
    }),
    yn(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const De = [Function, Array],
  nl = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: De,
    onEnter: De,
    onAfterEnter: De,
    onEnterCancelled: De,
    onBeforeLeave: De,
    onLeave: De,
    onAfterLeave: De,
    onLeaveCancelled: De,
    onBeforeAppear: De,
    onAppear: De,
    onAfterAppear: De,
    onAppearCancelled: De,
  },
  sl = (e) => {
    const t = e.subTree;
    return t.component ? sl(t.component) : t;
  },
  io = {
    name: "BaseTransition",
    props: nl,
    setup(e, { slots: t }) {
      const n = mt(),
        s = tl();
      return () => {
        const i = t.default && vi(t.default(), !0);
        if (!i || !i.length) return;
        const r = il(i),
          l = Q(e),
          { mode: o } = l;
        if (s.isLeaving) return ws(r);
        const a = zi(r);
        if (!a) return ws(r);
        let u = fn(a, l, s, n, (f) => (u = f));
        a.type !== oe && ht(a, u);
        let c = n.subTree && zi(n.subTree);
        if (c && c.type !== oe && !ke(c, a) && sl(n).type !== oe) {
          let f = fn(c, l, s, n);
          if ((ht(c, f), o === "out-in" && a.type !== oe))
            return (
              (s.isLeaving = !0),
              (f.afterLeave = () => {
                ((s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete f.afterLeave,
                  (c = void 0));
              }),
              ws(r)
            );
          o === "in-out" && a.type !== oe
            ? (f.delayLeave = (m, g, C) => {
                const y = rl(s, c);
                ((y[String(c.key)] = c),
                  (m[Je] = () => {
                    (g(),
                      (m[Je] = void 0),
                      delete u.delayedLeave,
                      (c = void 0));
                  }),
                  (u.delayedLeave = () => {
                    (C(), delete u.delayedLeave, (c = void 0));
                  }));
              })
            : (c = void 0);
        } else c && (c = void 0);
        return r;
      };
    },
  };
function il(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== oe) {
        t = n;
        break;
      }
  }
  return t;
}
const ro = io;
function rl(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return (s || ((s = Object.create(null)), n.set(t.type, s)), s);
}
function fn(e, t, n, s, i) {
  const {
      appear: r,
      mode: l,
      persisted: o = !1,
      onBeforeEnter: a,
      onEnter: u,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: m,
      onLeave: g,
      onAfterLeave: C,
      onLeaveCancelled: y,
      onBeforeAppear: P,
      onAppear: E,
      onAfterAppear: p,
      onAppearCancelled: d,
    } = t,
    h = String(e.key),
    w = rl(n, e),
    L = (b, D) => {
      b && Ve(b, s, 9, D);
    },
    A = (b, D) => {
      const M = D[1];
      (L(b, D),
        K(b) ? b.every((x) => x.length <= 1) && M() : b.length <= 1 && M());
    },
    R = {
      mode: l,
      persisted: o,
      beforeEnter(b) {
        let D = a;
        if (!n.isMounted)
          if (r) D = P || a;
          else return;
        b[Je] && b[Je](!0);
        const M = w[h];
        (M && ke(e, M) && M.el[Je] && M.el[Je](), L(D, [b]));
      },
      enter(b) {
        let D = u,
          M = c,
          x = f;
        if (!n.isMounted)
          if (r) ((D = E || u), (M = p || c), (x = d || f));
          else return;
        let O = !1;
        const S = (b[En] = (_) => {
          O ||
            ((O = !0),
            _ ? L(x, [b]) : L(M, [b]),
            R.delayedLeave && R.delayedLeave(),
            (b[En] = void 0));
        });
        D ? A(D, [b, S]) : S();
      },
      leave(b, D) {
        const M = String(e.key);
        if ((b[En] && b[En](!0), n.isUnmounting)) return D();
        L(m, [b]);
        let x = !1;
        const O = (b[Je] = (S) => {
          x ||
            ((x = !0),
            D(),
            S ? L(y, [b]) : L(C, [b]),
            (b[Je] = void 0),
            w[M] === e && delete w[M]);
        });
        ((w[M] = e), g ? A(g, [b, O]) : O());
      },
      clone(b) {
        const D = fn(b, t, n, s, i);
        return (i && i(D), D);
      },
    };
  return R;
}
function ws(e) {
  if (mn(e)) return ((e = nt(e)), (e.children = null), e);
}
function zi(e) {
  if (!mn(e)) return el(e.type) && e.children ? il(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && X(n.default)) return n.default();
  }
}
function ht(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), ht(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function vi(e, t = !1, n) {
  let s = [],
    i = 0;
  for (let r = 0; r < e.length; r++) {
    let l = e[r];
    const o = n == null ? l.key : String(n) + String(l.key != null ? l.key : r);
    l.type === me
      ? (l.patchFlag & 128 && i++, (s = s.concat(vi(l.children, t, o))))
      : (t || l.type !== oe) && s.push(o != null ? nt(l, { key: o }) : l);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function lo(e, t) {
  return X(e) ? ce({ name: e.name }, t, { setup: e }) : e;
}
function yi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vn = new WeakMap();
function zt(e, t, n, s, i = !1) {
  if (K(e)) {
    e.forEach((C, y) => zt(C, t && (K(t) ? t[y] : t), n, s, i));
    return;
  }
  if (dt(s) && !i) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      zt(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? us(s.component) : s.el,
    l = i ? null : r,
    { i: o, r: a } = e,
    u = t && t.r,
    c = o.refs === ne ? (o.refs = {}) : o.refs,
    f = o.setupState,
    m = Q(f),
    g = f === ne ? Sr : (C) => ee(m, C);
  if (u != null && u !== a) {
    if ((ki(t), le(u))) ((c[u] = null), g(u) && (f[u] = null));
    else if (pe(u)) {
      u.value = null;
      const C = t;
      C.k && (c[C.k] = null);
    }
  }
  if (X(a)) gn(a, o, 12, [l, c]);
  else {
    const C = le(a),
      y = pe(a);
    if (C || y) {
      const P = () => {
        if (e.f) {
          const E = C ? (g(a) ? f[a] : c[a]) : a.value;
          if (i) K(E) && li(E, r);
          else if (K(E)) E.includes(r) || E.push(r);
          else if (C) ((c[a] = [r]), g(a) && (f[a] = c[a]));
          else {
            const p = [r];
            ((a.value = p), e.k && (c[e.k] = p));
          }
        } else
          C
            ? ((c[a] = l), g(a) && (f[a] = l))
            : y && ((a.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const E = () => {
          (P(), Vn.delete(e));
        };
        ((E.id = -1), Vn.set(e, E), he(E, n));
      } else (ki(e), P());
    }
  }
}
function ki(e) {
  const t = Vn.get(e);
  t && ((t.flags |= 8), Vn.delete(e));
}
let Hi = !1;
const At = () => {
    Hi ||
      (console.error("Hydration completed but contains mismatches."),
      (Hi = !0));
  },
  ao = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
  oo = (e) => e.namespaceURI.includes("MathML"),
  Cn = (e) => {
    if (e.nodeType === 1) {
      if (ao(e)) return "svg";
      if (oo(e)) return "mathml";
    }
  },
  Bt = (e) => e.nodeType === 8;
function co(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: i,
        nextSibling: r,
        parentNode: l,
        remove: o,
        insert: a,
        createComment: u,
      },
    } = e,
    c = (d, h) => {
      if (!h.hasChildNodes()) {
        (n(null, d, h), kn(), (h._vnode = d));
        return;
      }
      (f(h.firstChild, d, null, null, null), kn(), (h._vnode = d));
    },
    f = (d, h, w, L, A, R = !1) => {
      R = R || !!h.dynamicChildren;
      const b = Bt(d) && d.data === "[",
        D = () => y(d, h, w, L, A, b),
        { type: M, ref: x, shapeFlag: O, patchFlag: S } = h;
      let _ = d.nodeType;
      ((h.el = d), S === -2 && ((R = !1), (h.dynamicChildren = null)));
      let I = null;
      switch (M) {
        case Tt:
          _ !== 3
            ? h.children === ""
              ? (a((h.el = i("")), l(d), d), (I = d))
              : (I = D())
            : (d.data !== h.children && (At(), (d.data = h.children)),
              (I = r(d)));
          break;
        case oe:
          p(d)
            ? ((I = r(d)), E((h.el = d.content.firstChild), d, w))
            : _ !== 8 || b
              ? (I = D())
              : (I = r(d));
          break;
        case Vt:
          if ((b && ((d = r(d)), (_ = d.nodeType)), _ === 1 || _ === 3)) {
            I = d;
            const k = !h.children.length;
            for (let H = 0; H < h.staticCount; H++)
              (k && (h.children += I.nodeType === 1 ? I.outerHTML : I.data),
                H === h.staticCount - 1 && (h.anchor = I),
                (I = r(I)));
            return b ? r(I) : I;
          } else D();
          break;
        case me:
          b ? (I = C(d, h, w, L, A, R)) : (I = D());
          break;
        default:
          if (O & 1)
            (_ !== 1 || h.type.toLowerCase() !== d.tagName.toLowerCase()) &&
            !p(d)
              ? (I = D())
              : (I = m(d, h, w, L, A, R));
          else if (O & 6) {
            h.slotScopeIds = A;
            const k = l(d);
            if (
              (b
                ? (I = P(d))
                : Bt(d) && d.data === "teleport start"
                  ? (I = P(d, d.data, "teleport end"))
                  : (I = r(d)),
              t(h, k, null, w, L, Cn(k), R),
              dt(h) && !h.type.__asyncResolved)
            ) {
              let H;
              (b
                ? ((H = ae(me)),
                  (H.anchor = I ? I.previousSibling : k.lastChild))
                : (H = d.nodeType === 3 ? Bl("") : ae("div")),
                (H.el = d),
                (h.component.subTree = H));
            }
          } else
            O & 64
              ? _ !== 8
                ? (I = D())
                : (I = h.type.hydrate(d, h, w, L, A, R, e, g))
              : O & 128 &&
                (I = h.type.hydrate(d, h, w, L, Cn(l(d)), A, R, e, f));
      }
      return (x != null && zt(x, null, L, h), I);
    },
    m = (d, h, w, L, A, R) => {
      R = R || !!h.dynamicChildren;
      const {
          type: b,
          props: D,
          patchFlag: M,
          shapeFlag: x,
          dirs: O,
          transition: S,
        } = h,
        _ = b === "input" || b === "option";
      if (_ || M !== -1) {
        O && qe(h, null, w, "created");
        let I = !1;
        if (p(d)) {
          I = xl(null, S) && w && w.vnode.props && w.vnode.props.appear;
          const H = d.content.firstChild;
          if (I) {
            const q = H.getAttribute("class");
            (q && (H.$cls = q), S.beforeEnter(H));
          }
          (E(H, d, w), (h.el = d = H));
        }
        if (x & 16 && !(D && (D.innerHTML || D.textContent))) {
          let H = g(d.firstChild, h, d, w, L, A, R);
          for (; H; ) {
            _n(d, 1) || At();
            const q = H;
            ((H = H.nextSibling), o(q));
          }
        } else if (x & 8) {
          let H = h.children;
          (H[0] ===
            `
` &&
            (d.tagName === "PRE" || d.tagName === "TEXTAREA") &&
            (H = H.slice(1)),
            d.textContent !== H &&
              (_n(d, 0) || At(), (d.textContent = h.children)));
        }
        if (D) {
          if (_ || !R || M & 48) {
            const H = d.tagName.includes("-");
            for (const q in D)
              ((_ && (q.endsWith("value") || q === "indeterminate")) ||
                (pn(q) && !Ft(q)) ||
                q[0] === "." ||
                H) &&
                s(d, q, null, D[q], void 0, w);
          } else if (D.onClick) s(d, "onClick", null, D.onClick, void 0, w);
          else if (M & 4 && St(D.style)) for (const H in D.style) D.style[H];
        }
        let k;
        ((k = D && D.onVnodeBeforeMount) && Pe(k, w, h),
          O && qe(h, null, w, "beforeMount"),
          ((k = D && D.onVnodeMounted) || O || I) &&
            Ml(() => {
              (k && Pe(k, w, h),
                I && S.enter(d),
                O && qe(h, null, w, "mounted"));
            }, L));
      }
      return d.nextSibling;
    },
    g = (d, h, w, L, A, R, b) => {
      b = b || !!h.dynamicChildren;
      const D = h.children,
        M = D.length;
      for (let x = 0; x < M; x++) {
        const O = b ? D[x] : (D[x] = Ie(D[x])),
          S = O.type === Tt;
        d
          ? (S &&
              !b &&
              x + 1 < M &&
              Ie(D[x + 1]).type === Tt &&
              (a(i(d.data.slice(O.children.length)), w, r(d)),
              (d.data = O.children)),
            (d = f(d, O, L, A, R, b)))
          : S && !O.children
            ? a((O.el = i("")), w)
            : (_n(w, 1) || At(), n(null, O, w, null, L, A, Cn(w), R));
      }
      return d;
    },
    C = (d, h, w, L, A, R) => {
      const { slotScopeIds: b } = h;
      b && (A = A ? A.concat(b) : b);
      const D = l(d),
        M = g(r(d), h, D, w, L, A, R);
      return M && Bt(M) && M.data === "]"
        ? r((h.anchor = M))
        : (At(), a((h.anchor = u("]")), D, M), M);
    },
    y = (d, h, w, L, A, R) => {
      if ((_n(d.parentElement, 1) || At(), (h.el = null), R)) {
        const M = P(d);
        for (;;) {
          const x = r(d);
          if (x && x !== M) o(x);
          else break;
        }
      }
      const b = r(d),
        D = l(d);
      return (
        o(d),
        n(null, h, D, b, w, L, Cn(D), A),
        w && ((w.vnode.el = h.el), fs(w, h.el)),
        b
      );
    },
    P = (d, h = "[", w = "]") => {
      let L = 0;
      for (; d; )
        if (((d = r(d)), d && Bt(d) && (d.data === h && L++, d.data === w))) {
          if (L === 0) return r(d);
          L--;
        }
      return d;
    },
    E = (d, h, w) => {
      const L = h.parentNode;
      L && L.replaceChild(d, h);
      let A = w;
      for (; A; )
        (A.vnode.el === h && (A.vnode.el = A.subTree.el = d), (A = A.parent));
    },
    p = (d) => d.nodeType === 1 && d.tagName === "TEMPLATE";
  return [c, f];
}
const Vi = "data-allow-mismatch",
  fo = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
function _n(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Vi); ) e = e.parentElement;
  const n = e && e.getAttribute(Vi);
  if (n == null) return !1;
  if (n === "") return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(fo[t]);
  }
}
ss().requestIdleCallback;
ss().cancelIdleCallback;
function uo(e, t) {
  if (Bt(e) && e.data === "[") {
    let n = 1,
      s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1) break;
      } else if (Bt(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else t(e);
}
const dt = (e) => !!e.type.__asyncLoader;
function Mu(e) {
  X(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: i = 200,
    hydrate: r,
    timeout: l,
    suspensible: o = !0,
    onError: a,
  } = e;
  let u = null,
    c,
    f = 0;
  const m = () => (f++, (u = null), g()),
    g = () => {
      let C;
      return (
        u ||
        (C = u =
          t()
            .catch((y) => {
              if (((y = y instanceof Error ? y : new Error(String(y))), a))
                return new Promise((P, E) => {
                  a(
                    y,
                    () => P(m()),
                    () => E(y),
                    f + 1,
                  );
                });
              throw y;
            })
            .then((y) =>
              C !== u && u
                ? u
                : (y &&
                    (y.__esModule || y[Symbol.toStringTag] === "Module") &&
                    (y = y.default),
                  (c = y),
                  y),
            ))
      );
    };
  return lo({
    name: "AsyncComponentWrapper",
    __asyncLoader: g,
    __asyncHydrate(C, y, P) {
      let E = !1;
      (y.bu || (y.bu = [])).push(() => (E = !0));
      const p = () => {
          E || P();
        },
        d = r
          ? () => {
              const h = r(p, (w) => uo(C, w));
              h && (y.bum || (y.bum = [])).push(h);
            }
          : p;
      c ? d() : g().then(() => !y.isUnmounted && d());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const C = ve;
      if ((yi(C), c)) return () => Ss(c, C);
      const y = (d) => {
        ((u = null), qt(d, C, 13, !s));
      };
      if ((o && C.suspense) || Gt)
        return g()
          .then((d) => () => Ss(d, C))
          .catch((d) => (y(d), () => (s ? ae(s, { error: d }) : null)));
      const P = de(!1),
        E = de(),
        p = de(!!i);
      return (
        i &&
          setTimeout(() => {
            p.value = !1;
          }, i),
        l != null &&
          setTimeout(() => {
            if (!P.value && !E.value) {
              const d = new Error(`Async component timed out after ${l}ms.`);
              (y(d), (E.value = d));
            }
          }, l),
        g()
          .then(() => {
            ((P.value = !0),
              C.parent && mn(C.parent.vnode) && C.parent.update());
          })
          .catch((d) => {
            (y(d), (E.value = d));
          }),
        () => {
          if (P.value && c) return Ss(c, C);
          if (E.value && s) return ae(s, { error: E.value });
          if (n && !p.value) return ae(n);
        }
      );
    },
  });
}
function Ss(e, t) {
  const { ref: n, props: s, children: i, ce: r } = t.vnode,
    l = ae(e, s, i);
  return ((l.ref = n), (l.ce = r), delete t.vnode.ce, l);
}
const mn = (e) => e.type.__isKeepAlive,
  po = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = mt(),
        s = n.ctx;
      if (!s.renderer)
        return () => {
          const p = t.default && t.default();
          return p && p.length === 1 ? p[0] : p;
        };
      const i = new Map(),
        r = new Set();
      let l = null;
      const o = n.suspense,
        {
          renderer: {
            p: a,
            m: u,
            um: c,
            o: { createElement: f },
          },
        } = s,
        m = f("div");
      ((s.activate = (p, d, h, w, L) => {
        const A = p.component;
        (u(p, d, h, 0, o),
          a(A.vnode, p, d, h, A, o, w, p.slotScopeIds, L),
          he(() => {
            ((A.isDeactivated = !1), A.a && Nt(A.a));
            const R = p.props && p.props.onVnodeMounted;
            R && Pe(R, A.parent, p);
          }, o));
      }),
        (s.deactivate = (p) => {
          const d = p.component;
          (Gn(d.m),
            Gn(d.a),
            u(p, m, null, 1, o),
            he(() => {
              d.da && Nt(d.da);
              const h = p.props && p.props.onVnodeUnmounted;
              (h && Pe(h, d.parent, p), (d.isDeactivated = !0));
            }, o));
        }));
      function g(p) {
        (xs(p), c(p, n, o, !0));
      }
      function C(p) {
        i.forEach((d, h) => {
          const w = Js(d.type);
          w && !p(w) && y(h);
        });
      }
      function y(p) {
        const d = i.get(p);
        (d && (!l || !ke(d, l)) ? g(d) : l && xs(l), i.delete(p), r.delete(p));
      }
      kt(
        () => [e.include, e.exclude],
        ([p, d]) => {
          (p && C((h) => Qt(p, h)), d && C((h) => !Qt(d, h)));
        },
        { flush: "post", deep: !0 },
      );
      let P = null;
      const E = () => {
        P != null &&
          (Wn(n.subTree.type)
            ? he(() => {
                i.set(P, Pn(n.subTree));
              }, n.subTree.suspense)
            : i.set(P, Pn(n.subTree)));
      };
      return (
        Ut(E),
        vn(E),
        yn(() => {
          i.forEach((p) => {
            const { subTree: d, suspense: h } = n,
              w = Pn(d);
            if (p.type === w.type && p.key === w.key) {
              xs(w);
              const L = w.component.da;
              L && he(L, h);
              return;
            }
            g(p);
          });
        }),
        () => {
          if (((P = null), !t.default)) return (l = null);
          const p = t.default(),
            d = p[0];
          if (p.length > 1) return ((l = null), p);
          if (!Ct(d) || (!(d.shapeFlag & 4) && !(d.shapeFlag & 128)))
            return ((l = null), d);
          let h = Pn(d);
          if (h.type === oe) return ((l = null), h);
          const w = h.type,
            L = Js(dt(h) ? h.type.__asyncResolved || {} : w),
            { include: A, exclude: R, max: b } = e;
          if ((A && (!L || !Qt(A, L))) || (R && L && Qt(R, L)))
            return ((h.shapeFlag &= -257), (l = h), d);
          const D = h.key == null ? w : h.key,
            M = i.get(D);
          return (
            h.el && ((h = nt(h)), d.shapeFlag & 128 && (d.ssContent = h)),
            (P = D),
            M
              ? ((h.el = M.el),
                (h.component = M.component),
                h.transition && ht(h, h.transition),
                (h.shapeFlag |= 512),
                r.delete(D),
                r.add(D))
              : (r.add(D),
                b && r.size > parseInt(b, 10) && y(r.values().next().value)),
            (h.shapeFlag |= 256),
            (l = h),
            Wn(d.type) ? d : h
          );
        }
      );
    },
  },
  Lu = po;
function Qt(e, t) {
  return K(e)
    ? e.some((n) => Qt(n, t))
    : le(e)
      ? e.split(",").includes(t)
      : ua(e)
        ? ((e.lastIndex = 0), e.test(t))
        : !1;
}
function ho(e, t) {
  ll(e, "a", t);
}
function go(e, t) {
  ll(e, "da", t);
}
function ll(e, t, n = ve) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((os(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      (mn(i.parent.vnode) && mo(s, t, n, i), (i = i.parent));
  }
}
function mo(e, t, n, s) {
  const i = os(t, e, s, !0);
  wi(() => {
    li(s[t], i);
  }, n);
}
function xs(e) {
  ((e.shapeFlag &= -257), (e.shapeFlag &= -513));
}
function Pn(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function os(e, t, n = ve, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...l) => {
          et();
          const o = _t(n),
            a = Ve(t, n, e, l);
          return (o(), tt(), a);
        });
    return (s ? i.unshift(r) : i.push(r), r);
  }
}
const it =
    (e) =>
    (t, n = ve) => {
      (!Gt || e === "sp") && os(e, (...s) => t(...s), n);
    },
  vo = it("bm"),
  Ut = it("m"),
  bi = it("bu"),
  vn = it("u"),
  yn = it("bum"),
  wi = it("um"),
  yo = it("sp"),
  bo = it("rtg"),
  wo = it("rtc");
function So(e, t = ve) {
  os("ec", e, t);
}
const Si = "components",
  xo = "directives";
function Au(e, t) {
  return xi(Si, e, !0, t) || e;
}
const al = Symbol.for("v-ndc");
function Ou(e) {
  return le(e) ? xi(Si, e, !1) || e : e || al;
}
function Iu(e) {
  return xi(xo, e);
}
function xi(e, t, n = !0, s = !1) {
  const i = ye || ve;
  if (i) {
    const r = i.type;
    if (e === Si) {
      const o = Js(r, !1);
      if (o && (o === t || o === $e(t) || o === ns($e(t)))) return r;
    }
    const l = ji(i[e] || r[e], t) || ji(i.appContext[e], t);
    return !l && s ? r : l;
  }
}
function ji(e, t) {
  return e && (e[t] || e[$e(t)] || e[ns($e(t))]);
}
function Bu(e, t, n, s) {
  let i;
  const r = n,
    l = K(e);
  if (l || le(e)) {
    const o = l && St(e);
    let a = !1,
      u = !1;
    (o && ((a = !Ne(e)), (u = pt(e)), (e = as(e))), (i = new Array(e.length)));
    for (let c = 0, f = e.length; c < f; c++)
      i[c] = t(a ? (u ? Fn(ge(e[c])) : ge(e[c])) : e[c], c, void 0, r);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, r);
  } else if (se(e))
    if (e[Symbol.iterator]) i = Array.from(e, (o, a) => t(o, a, void 0, r));
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let a = 0, u = o.length; a < u; a++) {
        const c = o[a];
        i[a] = t(e[c], c, a, r);
      }
    }
  else i = [];
  return i;
}
function Du(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (K(s)) for (let i = 0; i < s.length; i++) e[s[i].name] = s[i].fn;
    else
      s &&
        (e[s.name] = s.key
          ? (...i) => {
              const r = s.fn(...i);
              return (r && (r.key = s.key), r);
            }
          : s.fn);
  }
  return e;
}
function Ru(e, t, n = {}, s, i) {
  if (ye.ce || (ye.parent && dt(ye.parent) && ye.parent.ce)) {
    const u = Object.keys(n).length > 0;
    return (
      t !== "default" && (n.name = t),
      qn(),
      Us(me, null, [ae("slot", n, s && s())], u ? -2 : 64)
    );
  }
  let r = e[t];
  (r && r._c && (r._d = !1), qn());
  const l = r && ol(r(n)),
    o = n.key || (l && l.key),
    a = Us(
      me,
      { key: (o && !st(o) ? o : `_${t}`) + (!l && s ? "_fb" : "") },
      l || (s ? s() : []),
      l && e._ === 1 ? 64 : -2,
    );
  return (
    !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    a
  );
}
function ol(e) {
  return e.some((t) =>
    Ct(t) ? !(t.type === oe || (t.type === me && !ol(t.children))) : !0,
  )
    ? e
    : null;
}
function Fu(e, t) {
  const n = {};
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : An(s)] = e[s];
  return n;
}
const Vs = (e) => (e ? (Dl(e) ? us(e) : Vs(e.parent)) : null),
  sn = ce(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Vs(e.parent),
    $root: (e) => Vs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ul(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        mi(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Xr.bind(e.proxy)),
    $watch: (e) => Vo.bind(e),
  }),
  Ts = (e, t) => e !== ne && !e.__isScriptSetup && ee(e, t),
  To = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: l,
        type: o,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const g = l[t];
        if (g !== void 0)
          switch (g) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (Ts(s, t)) return ((l[t] = 1), s[t]);
          if (i !== ne && ee(i, t)) return ((l[t] = 2), i[t]);
          if ((u = e.propsOptions[0]) && ee(u, t)) return ((l[t] = 3), r[t]);
          if (n !== ne && ee(n, t)) return ((l[t] = 4), n[t]);
          js && (l[t] = 0);
        }
      }
      const c = sn[t];
      let f, m;
      if (c) return (t === "$attrs" && Se(e.attrs, "get", ""), c(e));
      if ((f = o.__cssModules) && (f = f[t])) return f;
      if (n !== ne && ee(n, t)) return ((l[t] = 4), n[t]);
      if (((m = a.config.globalProperties), ee(m, t))) return m[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e;
      return Ts(i, t)
        ? ((i[t] = n), !0)
        : s !== ne && ee(s, t)
          ? ((s[t] = n), !0)
          : ee(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: r,
          type: l,
        },
      },
      o,
    ) {
      let a, u;
      return !!(
        n[o] ||
        (e !== ne && o[0] !== "$" && ee(e, o)) ||
        Ts(t, o) ||
        ((a = r[0]) && ee(a, o)) ||
        ee(s, o) ||
        ee(sn, o) ||
        ee(i.config.globalProperties, o) ||
        ((u = l.__cssModules) && u[o])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ee(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Nu() {
  return cl().slots;
}
function $u() {
  return cl().attrs;
}
function cl(e) {
  const t = mt();
  return t.setupContext || (t.setupContext = Fl(t));
}
function Gi(e) {
  return K(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function zu(e) {
  const t = mt();
  let n = e();
  return (
    Ys(),
    ai(n) &&
      (n = n.catch((s) => {
        throw (_t(t), s);
      })),
    [n, () => _t(t)]
  );
}
let js = !0;
function Eo(e) {
  const t = ul(e),
    n = e.proxy,
    s = e.ctx;
  ((js = !1), t.beforeCreate && Wi(t.beforeCreate, e, "bc"));
  const {
    data: i,
    computed: r,
    methods: l,
    watch: o,
    provide: a,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: m,
    beforeUpdate: g,
    updated: C,
    activated: y,
    deactivated: P,
    beforeDestroy: E,
    beforeUnmount: p,
    destroyed: d,
    unmounted: h,
    render: w,
    renderTracked: L,
    renderTriggered: A,
    errorCaptured: R,
    serverPrefetch: b,
    expose: D,
    inheritAttrs: M,
    components: x,
    directives: O,
    filters: S,
  } = t;
  if ((u && Co(u, s, null), l))
    for (const k in l) {
      const H = l[k];
      X(H) && (s[k] = H.bind(n));
    }
  if (i) {
    const k = i.call(n, n);
    se(k) && (e.data = pi(k));
  }
  if (((js = !0), r))
    for (const k in r) {
      const H = r[k],
        q = X(H) ? H.bind(n, n) : X(H.get) ? H.get.bind(n, n) : Fe,
        fe = !X(H) && X(H.set) ? H.set.bind(n) : Fe,
        ue = Nl({ get: q, set: fe });
      Object.defineProperty(s, k, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: (Ce) => (ue.value = Ce),
      });
    }
  if (o) for (const k in o) fl(o[k], s, n, k);
  if (a) {
    const k = X(a) ? a.call(n) : a;
    Reflect.ownKeys(k).forEach((H) => {
      Ti(H, k[H]);
    });
  }
  c && Wi(c, e, "c");
  function I(k, H) {
    K(H) ? H.forEach((q) => k(q.bind(n))) : H && k(H.bind(n));
  }
  if (
    (I(vo, f),
    I(Ut, m),
    I(bi, g),
    I(vn, C),
    I(ho, y),
    I(go, P),
    I(So, R),
    I(wo, L),
    I(bo, A),
    I(yn, p),
    I(wi, h),
    I(yo, b),
    K(D))
  )
    if (D.length) {
      const k = e.exposed || (e.exposed = {});
      D.forEach((H) => {
        Object.defineProperty(k, H, {
          get: () => n[H],
          set: (q) => (n[H] = q),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  (w && e.render === Fe && (e.render = w),
    M != null && (e.inheritAttrs = M),
    x && (e.components = x),
    O && (e.directives = O),
    b && yi(e));
}
function Co(e, t, n = Fe) {
  K(e) && (e = Gs(e));
  for (const s in e) {
    const i = e[s];
    let r;
    (se(i)
      ? "default" in i
        ? (r = On(i.from || s, i.default, !0))
        : (r = On(i.from || s))
      : (r = On(i)),
      pe(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (l) => (r.value = l),
          })
        : (t[s] = r));
  }
}
function Wi(e, t, n) {
  Ve(K(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function fl(e, t, n, s) {
  let i = s.includes(".") ? Cl(n, s) : () => n[s];
  if (le(e)) {
    const r = t[e];
    X(r) && kt(i, r);
  } else if (X(e)) kt(i, e.bind(n));
  else if (se(e))
    if (K(e)) e.forEach((r) => fl(r, t, n, s));
    else {
      const r = X(e.handler) ? e.handler.bind(n) : t[e.handler];
      X(r) && kt(i, r, e);
    }
}
function ul(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    o = r.get(t);
  let a;
  return (
    o
      ? (a = o)
      : !i.length && !n && !s
        ? (a = t)
        : ((a = {}),
          i.length && i.forEach((u) => jn(a, u, l, !0)),
          jn(a, t, l)),
    se(t) && r.set(t, a),
    a
  );
}
function jn(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  (r && jn(e, r, n, !0), i && i.forEach((l) => jn(e, l, n, !0)));
  for (const l in t)
    if (!(s && l === "expose")) {
      const o = _o[l] || (n && n[l]);
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const _o = {
  data: qi,
  props: Ui,
  emits: Ui,
  methods: en,
  computed: en,
  beforeCreate: xe,
  created: xe,
  beforeMount: xe,
  mounted: xe,
  beforeUpdate: xe,
  updated: xe,
  beforeDestroy: xe,
  beforeUnmount: xe,
  destroyed: xe,
  unmounted: xe,
  activated: xe,
  deactivated: xe,
  errorCaptured: xe,
  serverPrefetch: xe,
  components: en,
  directives: en,
  watch: Mo,
  provide: qi,
  inject: Po,
};
function qi(e, t) {
  return t
    ? e
      ? function () {
          return ce(
            X(e) ? e.call(this, this) : e,
            X(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Po(e, t) {
  return en(Gs(e), Gs(t));
}
function Gs(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function en(e, t) {
  return e ? ce(Object.create(null), e, t) : t;
}
function Ui(e, t) {
  return e
    ? K(e) && K(t)
      ? [...new Set([...e, ...t])]
      : ce(Object.create(null), Gi(e), Gi(t ?? {}))
    : t;
}
function Mo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(Object.create(null), e);
  for (const s in t) n[s] = xe(e[s], t[s]);
  return n;
}
function dl() {
  return {
    app: null,
    config: {
      isNativeTag: Sr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Lo = 0;
function Ao(e, t) {
  return function (s, i = null) {
    (X(s) || (s = ce({}, s)), i != null && !se(i) && (i = null));
    const r = dl(),
      l = new WeakSet(),
      o = [];
    let a = !1;
    const u = (r.app = {
      _uid: Lo++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: dc,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          l.has(c) ||
            (c && X(c.install)
              ? (l.add(c), c.install(u, ...f))
              : X(c) && (l.add(c), c(u, ...f))),
          u
        );
      },
      mixin(c) {
        return (r.mixins.includes(c) || r.mixins.push(c), u);
      },
      component(c, f) {
        return f ? ((r.components[c] = f), u) : r.components[c];
      },
      directive(c, f) {
        return f ? ((r.directives[c] = f), u) : r.directives[c];
      },
      mount(c, f, m) {
        if (!a) {
          const g = u._ceVNode || ae(s, i);
          return (
            (g.appContext = r),
            m === !0 ? (m = "svg") : m === !1 && (m = void 0),
            f && t ? t(g, c) : e(g, c, m),
            (a = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            us(g.component)
          );
        }
      },
      onUnmount(c) {
        o.push(c);
      },
      unmount() {
        a &&
          (Ve(o, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, f) {
        return ((r.provides[c] = f), u);
      },
      runWithContext(c) {
        const f = xt;
        xt = u;
        try {
          return c();
        } finally {
          xt = f;
        }
      },
    });
    return u;
  };
}
let xt = null;
function Ti(e, t) {
  if (ve) {
    let n = ve.provides;
    const s = ve.parent && ve.parent.provides;
    (s === n && (n = ve.provides = Object.create(s)), (n[e] = t));
  }
}
function On(e, t, n = !1) {
  const s = mt();
  if (s || xt) {
    let i = xt
      ? xt._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && X(t) ? t.call(s && s.proxy) : t;
  }
}
function ku() {
  return !!(mt() || xt);
}
const pl = {},
  hl = () => Object.create(pl),
  gl = (e) => Object.getPrototypeOf(e) === pl;
function Oo(e, t, n, s = !1) {
  const i = {},
    r = hl();
  ((e.propsDefaults = Object.create(null)), ml(e, t, i, r));
  for (const l in e.propsOptions[0]) l in i || (i[l] = void 0);
  (n ? (e.props = s ? i : ja(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r));
}
function Io(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: l },
    } = e,
    o = Q(i),
    [a] = e.propsOptions;
  let u = !1;
  if ((s || l > 0) && !(l & 16)) {
    if (l & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let m = c[f];
        if (cs(e.emitsOptions, m)) continue;
        const g = t[m];
        if (a)
          if (ee(r, m)) g !== r[m] && ((r[m] = g), (u = !0));
          else {
            const C = $e(m);
            i[C] = Ws(a, o, C, g, e, !1);
          }
        else g !== r[m] && ((r[m] = g), (u = !0));
      }
    }
  } else {
    ml(e, t, i, r) && (u = !0);
    let c;
    for (const f in o)
      (!t || (!ee(t, f) && ((c = gt(f)) === f || !ee(t, c)))) &&
        (a
          ? n &&
            (n[f] !== void 0 || n[c] !== void 0) &&
            (i[f] = Ws(a, o, f, void 0, e, !0))
          : delete i[f]);
    if (r !== o)
      for (const f in r) (!t || !ee(t, f)) && (delete r[f], (u = !0));
  }
  u && Ze(e.attrs, "set", "");
}
function ml(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let l = !1,
    o;
  if (t)
    for (let a in t) {
      if (Ft(a)) continue;
      const u = t[a];
      let c;
      i && ee(i, (c = $e(a)))
        ? !r || !r.includes(c)
          ? (n[c] = u)
          : ((o || (o = {}))[c] = u)
        : cs(e.emitsOptions, a) ||
          ((!(a in s) || u !== s[a]) && ((s[a] = u), (l = !0)));
    }
  if (r) {
    const a = Q(n),
      u = o || ne;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = Ws(i, a, f, u[f], e, !ee(u, f));
    }
  }
  return l;
}
function Ws(e, t, n, s, i, r) {
  const l = e[n];
  if (l != null) {
    const o = ee(l, "default");
    if (o && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && X(a)) {
        const { propsDefaults: u } = i;
        if (n in u) s = u[n];
        else {
          const c = _t(i);
          ((s = u[n] = a.call(null, t)), c());
        }
      } else s = a;
      i.ce && i.ce._setProp(n, s);
    }
    l[0] &&
      (r && !o ? (s = !1) : l[1] && (s === "" || s === gt(n)) && (s = !0));
  }
  return s;
}
const Bo = new WeakMap();
function vl(e, t, n = !1) {
  const s = n ? Bo : t.propsCache,
    i = s.get(e);
  if (i) return i;
  const r = e.props,
    l = {},
    o = [];
  let a = !1;
  if (!X(e)) {
    const c = (f) => {
      a = !0;
      const [m, g] = vl(f, t, !0);
      (ce(l, m), g && o.push(...g));
    };
    (!n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c));
  }
  if (!r && !a) return (se(e) && s.set(e, Dt), Dt);
  if (K(r))
    for (let c = 0; c < r.length; c++) {
      const f = $e(r[c]);
      Ki(f) && (l[f] = ne);
    }
  else if (r)
    for (const c in r) {
      const f = $e(c);
      if (Ki(f)) {
        const m = r[c],
          g = (l[f] = K(m) || X(m) ? { type: m } : ce({}, m)),
          C = g.type;
        let y = !1,
          P = !0;
        if (K(C))
          for (let E = 0; E < C.length; ++E) {
            const p = C[E],
              d = X(p) && p.name;
            if (d === "Boolean") {
              y = !0;
              break;
            } else d === "String" && (P = !1);
          }
        else y = X(C) && C.name === "Boolean";
        ((g[0] = y), (g[1] = P), (y || ee(g, "default")) && o.push(f));
      }
    }
  const u = [l, o];
  return (se(e) && s.set(e, u), u);
}
function Ki(e) {
  return e[0] !== "$" && !Ft(e);
}
const Ei = (e) => e === "_" || e === "_ctx" || e === "$stable",
  Ci = (e) => (K(e) ? e.map(Ie) : [Ie(e)]),
  Do = (e, t, n) => {
    if (t._n) return t;
    const s = no((...i) => Ci(t(...i)), n);
    return ((s._c = !1), s);
  },
  yl = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (Ei(i)) continue;
      const r = e[i];
      if (X(r)) t[i] = Do(i, r, s);
      else if (r != null) {
        const l = Ci(r);
        t[i] = () => l;
      }
    }
  },
  bl = (e, t) => {
    const n = Ci(t);
    e.slots.default = () => n;
  },
  wl = (e, t, n) => {
    for (const s in t) (n || !Ei(s)) && (e[s] = t[s]);
  },
  Ro = (e, t, n) => {
    const s = (e.slots = hl());
    if (e.vnode.shapeFlag & 32) {
      const i = t._;
      i ? (wl(s, t, n), n && Cr(s, "_", i, !0)) : yl(t, s);
    } else t && bl(e, t);
  },
  Fo = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let r = !0,
      l = ne;
    if (s.shapeFlag & 32) {
      const o = t._;
      (o
        ? n && o === 1
          ? (r = !1)
          : wl(i, t, n)
        : ((r = !t.$stable), yl(t, i)),
        (l = t));
    } else t && (bl(e, t), (l = { default: 1 }));
    if (r) for (const o in i) !Ei(o) && l[o] == null && delete i[o];
  },
  he = Ml;
function No(e) {
  return Sl(e);
}
function $o(e) {
  return Sl(e, co);
}
function Sl(e, t) {
  const n = ss();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: l,
      createText: o,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: m,
      setScopeId: g = Fe,
      insertStaticContent: C,
    } = e,
    y = (
      v,
      T,
      B,
      $ = null,
      F = null,
      N = null,
      G = void 0,
      j = null,
      V = !!T.dynamicChildren,
    ) => {
      if (v === T) return;
      (v && !ke(v, T) && (($ = wn(v)), Ce(v, F, N, !0), (v = null)),
        T.patchFlag === -2 && ((V = !1), (T.dynamicChildren = null)));
      const { type: z, ref: Y, shapeFlag: W } = T;
      switch (z) {
        case Tt:
          P(v, T, B, $);
          break;
        case oe:
          E(v, T, B, $);
          break;
        case Vt:
          v == null && p(T, B, $, G);
          break;
        case me:
          x(v, T, B, $, F, N, G, j, V);
          break;
        default:
          W & 1
            ? w(v, T, B, $, F, N, G, j, V)
            : W & 6
              ? O(v, T, B, $, F, N, G, j, V)
              : (W & 64 || W & 128) && z.process(v, T, B, $, F, N, G, j, V, Mt);
      }
      Y != null && F
        ? zt(Y, v && v.ref, N, T || v, !T)
        : Y == null && v && v.ref != null && zt(v.ref, null, N, v, !0);
    },
    P = (v, T, B, $) => {
      if (v == null) s((T.el = o(T.children)), B, $);
      else {
        const F = (T.el = v.el);
        T.children !== v.children && u(F, T.children);
      }
    },
    E = (v, T, B, $) => {
      v == null ? s((T.el = a(T.children || "")), B, $) : (T.el = v.el);
    },
    p = (v, T, B, $) => {
      [v.el, v.anchor] = C(v.children, T, B, $, v.el, v.anchor);
    },
    d = ({ el: v, anchor: T }, B, $) => {
      let F;
      for (; v && v !== T; ) ((F = m(v)), s(v, B, $), (v = F));
      s(T, B, $);
    },
    h = ({ el: v, anchor: T }) => {
      let B;
      for (; v && v !== T; ) ((B = m(v)), i(v), (v = B));
      i(T);
    },
    w = (v, T, B, $, F, N, G, j, V) => {
      (T.type === "svg" ? (G = "svg") : T.type === "math" && (G = "mathml"),
        v == null ? L(T, B, $, F, N, G, j, V) : b(v, T, F, N, G, j, V));
    },
    L = (v, T, B, $, F, N, G, j) => {
      let V, z;
      const { props: Y, shapeFlag: W, transition: U, dirs: J } = v;
      if (
        ((V = v.el = l(v.type, N, Y && Y.is, Y)),
        W & 8
          ? c(V, v.children)
          : W & 16 && R(v.children, V, null, $, F, Es(v, N), G, j),
        J && qe(v, null, $, "created"),
        A(V, v, v.scopeId, G, $),
        Y)
      ) {
        for (const ie in Y)
          ie !== "value" && !Ft(ie) && r(V, ie, null, Y[ie], N, $);
        ("value" in Y && r(V, "value", null, Y.value, N),
          (z = Y.onVnodeBeforeMount) && Pe(z, $, v));
      }
      J && qe(v, null, $, "beforeMount");
      const Z = xl(F, U);
      (Z && U.beforeEnter(V),
        s(V, T, B),
        ((z = Y && Y.onVnodeMounted) || Z || J) &&
          he(() => {
            (z && Pe(z, $, v), Z && U.enter(V), J && qe(v, null, $, "mounted"));
          }, F));
    },
    A = (v, T, B, $, F) => {
      if ((B && g(v, B), $)) for (let N = 0; N < $.length; N++) g(v, $[N]);
      if (F) {
        let N = F.subTree;
        if (
          T === N ||
          (Wn(N.type) && (N.ssContent === T || N.ssFallback === T))
        ) {
          const G = F.vnode;
          A(v, G, G.scopeId, G.slotScopeIds, F.parent);
        }
      }
    },
    R = (v, T, B, $, F, N, G, j, V = 0) => {
      for (let z = V; z < v.length; z++) {
        const Y = (v[z] = j ? ot(v[z]) : Ie(v[z]));
        y(null, Y, T, B, $, F, N, G, j);
      }
    },
    b = (v, T, B, $, F, N, G) => {
      const j = (T.el = v.el);
      let { patchFlag: V, dynamicChildren: z, dirs: Y } = T;
      V |= v.patchFlag & 16;
      const W = v.props || ne,
        U = T.props || ne;
      let J;
      if (
        (B && vt(B, !1),
        (J = U.onVnodeBeforeUpdate) && Pe(J, B, T, v),
        Y && qe(T, v, B, "beforeUpdate"),
        B && vt(B, !0),
        ((W.innerHTML && U.innerHTML == null) ||
          (W.textContent && U.textContent == null)) &&
          c(j, ""),
        z
          ? D(v.dynamicChildren, z, j, B, $, Es(T, F), N)
          : G || H(v, T, j, null, B, $, Es(T, F), N, !1),
        V > 0)
      ) {
        if (V & 16) M(j, W, U, B, F);
        else if (
          (V & 2 && W.class !== U.class && r(j, "class", null, U.class, F),
          V & 4 && r(j, "style", W.style, U.style, F),
          V & 8)
        ) {
          const Z = T.dynamicProps;
          for (let ie = 0; ie < Z.length; ie++) {
            const te = Z[ie],
              _e = W[te],
              be = U[te];
            (be !== _e || te === "value") && r(j, te, _e, be, F, B);
          }
        }
        V & 1 && v.children !== T.children && c(j, T.children);
      } else !G && z == null && M(j, W, U, B, F);
      ((J = U.onVnodeUpdated) || Y) &&
        he(() => {
          (J && Pe(J, B, T, v), Y && qe(T, v, B, "updated"));
        }, $);
    },
    D = (v, T, B, $, F, N, G) => {
      for (let j = 0; j < T.length; j++) {
        const V = v[j],
          z = T[j],
          Y =
            V.el && (V.type === me || !ke(V, z) || V.shapeFlag & 198)
              ? f(V.el)
              : B;
        y(V, z, Y, null, $, F, N, G, !0);
      }
    },
    M = (v, T, B, $, F) => {
      if (T !== B) {
        if (T !== ne)
          for (const N in T) !Ft(N) && !(N in B) && r(v, N, T[N], null, F, $);
        for (const N in B) {
          if (Ft(N)) continue;
          const G = B[N],
            j = T[N];
          G !== j && N !== "value" && r(v, N, j, G, F, $);
        }
        "value" in B && r(v, "value", T.value, B.value, F);
      }
    },
    x = (v, T, B, $, F, N, G, j, V) => {
      const z = (T.el = v ? v.el : o("")),
        Y = (T.anchor = v ? v.anchor : o(""));
      let { patchFlag: W, dynamicChildren: U, slotScopeIds: J } = T;
      (J && (j = j ? j.concat(J) : J),
        v == null
          ? (s(z, B, $), s(Y, B, $), R(T.children || [], B, Y, F, N, G, j, V))
          : W > 0 && W & 64 && U && v.dynamicChildren
            ? (D(v.dynamicChildren, U, B, F, N, G, j),
              (T.key != null || (F && T === F.subTree)) && Tl(v, T, !0))
            : H(v, T, B, Y, F, N, G, j, V));
    },
    O = (v, T, B, $, F, N, G, j, V) => {
      ((T.slotScopeIds = j),
        v == null
          ? T.shapeFlag & 512
            ? F.ctx.activate(T, B, $, G, V)
            : S(T, B, $, F, N, G, V)
          : _(v, T, V));
    },
    S = (v, T, B, $, F, N, G) => {
      const j = (v.component = ac(v, $, F));
      if ((mn(v) && (j.ctx.renderer = Mt), oc(j, !1, G), j.asyncDep)) {
        if ((F && F.registerDep(j, I, G), !v.el)) {
          const V = (j.subTree = ae(oe));
          (E(null, V, T, B), (v.placeholder = V.el));
        }
      } else I(j, v, T, B, F, N, G);
    },
    _ = (v, T, B) => {
      const $ = (T.component = v.component);
      if (Yo(v, T, B))
        if ($.asyncDep && !$.asyncResolved) {
          k($, T, B);
          return;
        } else (($.next = T), $.update());
      else ((T.el = v.el), ($.vnode = T));
    },
    I = (v, T, B, $, F, N, G) => {
      const j = () => {
        if (v.isMounted) {
          let { next: W, bu: U, u: J, parent: Z, vnode: ie } = v;
          {
            const Le = El(v);
            if (Le) {
              (W && ((W.el = ie.el), k(v, W, G)),
                Le.asyncDep.then(() => {
                  v.isUnmounted || j();
                }));
              return;
            }
          }
          let te = W,
            _e;
          (vt(v, !1),
            W ? ((W.el = ie.el), k(v, W, G)) : (W = ie),
            U && Nt(U),
            (_e = W.props && W.props.onVnodeBeforeUpdate) && Pe(_e, Z, W, ie),
            vt(v, !0));
          const be = Cs(v),
            ze = v.subTree;
          ((v.subTree = be),
            y(ze, be, f(ze.el), wn(ze), v, F, N),
            (W.el = be.el),
            te === null && fs(v, be.el),
            J && he(J, F),
            (_e = W.props && W.props.onVnodeUpdated) &&
              he(() => Pe(_e, Z, W, ie), F));
        } else {
          let W;
          const { el: U, props: J } = T,
            { bm: Z, m: ie, parent: te, root: _e, type: be } = v,
            ze = dt(T);
          if (
            (vt(v, !1),
            Z && Nt(Z),
            !ze && (W = J && J.onVnodeBeforeMount) && Pe(W, te, T),
            vt(v, !0),
            U && gs)
          ) {
            const Le = () => {
              ((v.subTree = Cs(v)), gs(U, v.subTree, v, F, null));
            };
            ze && be.__asyncHydrate ? be.__asyncHydrate(U, v, Le) : Le();
          } else {
            _e.ce &&
              _e.ce._def.shadowRoot !== !1 &&
              _e.ce._injectChildStyle(be);
            const Le = (v.subTree = Cs(v));
            (y(null, Le, B, $, v, F, N), (T.el = Le.el));
          }
          if ((ie && he(ie, F), !ze && (W = J && J.onVnodeMounted))) {
            const Le = T;
            he(() => Pe(W, te, Le), F);
          }
          ((T.shapeFlag & 256 ||
            (te && dt(te.vnode) && te.vnode.shapeFlag & 256)) &&
            v.a &&
            he(v.a, F),
            (v.isMounted = !0),
            (T = B = $ = null));
        }
      };
      v.scope.on();
      const V = (v.effect = new Or(j));
      v.scope.off();
      const z = (v.update = V.run.bind(V)),
        Y = (v.job = V.runIfDirty.bind(V));
      ((Y.i = v), (Y.id = v.uid), (V.scheduler = () => mi(Y)), vt(v, !0), z());
    },
    k = (v, T, B) => {
      T.component = v;
      const $ = v.vnode.props;
      ((v.vnode = T),
        (v.next = null),
        Io(v, T.props, $, B),
        Fo(v, T.children, B),
        et(),
        $i(v),
        tt());
    },
    H = (v, T, B, $, F, N, G, j, V = !1) => {
      const z = v && v.children,
        Y = v ? v.shapeFlag : 0,
        W = T.children,
        { patchFlag: U, shapeFlag: J } = T;
      if (U > 0) {
        if (U & 128) {
          fe(z, W, B, $, F, N, G, j, V);
          return;
        } else if (U & 256) {
          q(z, W, B, $, F, N, G, j, V);
          return;
        }
      }
      J & 8
        ? (Y & 16 && Kt(z, F, N), W !== z && c(B, W))
        : Y & 16
          ? J & 16
            ? fe(z, W, B, $, F, N, G, j, V)
            : Kt(z, F, N, !0)
          : (Y & 8 && c(B, ""), J & 16 && R(W, B, $, F, N, G, j, V));
    },
    q = (v, T, B, $, F, N, G, j, V) => {
      ((v = v || Dt), (T = T || Dt));
      const z = v.length,
        Y = T.length,
        W = Math.min(z, Y);
      let U;
      for (U = 0; U < W; U++) {
        const J = (T[U] = V ? ot(T[U]) : Ie(T[U]));
        y(v[U], J, B, null, F, N, G, j, V);
      }
      z > Y ? Kt(v, F, N, !0, !1, W) : R(T, B, $, F, N, G, j, V, W);
    },
    fe = (v, T, B, $, F, N, G, j, V) => {
      let z = 0;
      const Y = T.length;
      let W = v.length - 1,
        U = Y - 1;
      for (; z <= W && z <= U; ) {
        const J = v[z],
          Z = (T[z] = V ? ot(T[z]) : Ie(T[z]));
        if (ke(J, Z)) y(J, Z, B, null, F, N, G, j, V);
        else break;
        z++;
      }
      for (; z <= W && z <= U; ) {
        const J = v[W],
          Z = (T[U] = V ? ot(T[U]) : Ie(T[U]));
        if (ke(J, Z)) y(J, Z, B, null, F, N, G, j, V);
        else break;
        (W--, U--);
      }
      if (z > W) {
        if (z <= U) {
          const J = U + 1,
            Z = J < Y ? T[J].el : $;
          for (; z <= U; )
            (y(null, (T[z] = V ? ot(T[z]) : Ie(T[z])), B, Z, F, N, G, j, V),
              z++);
        }
      } else if (z > U) for (; z <= W; ) (Ce(v[z], F, N, !0), z++);
      else {
        const J = z,
          Z = z,
          ie = new Map();
        for (z = Z; z <= U; z++) {
          const Ae = (T[z] = V ? ot(T[z]) : Ie(T[z]));
          Ae.key != null && ie.set(Ae.key, z);
        }
        let te,
          _e = 0;
        const be = U - Z + 1;
        let ze = !1,
          Le = 0;
        const Yt = new Array(be);
        for (z = 0; z < be; z++) Yt[z] = 0;
        for (z = J; z <= W; z++) {
          const Ae = v[z];
          if (_e >= be) {
            Ce(Ae, F, N, !0);
            continue;
          }
          let je;
          if (Ae.key != null) je = ie.get(Ae.key);
          else
            for (te = Z; te <= U; te++)
              if (Yt[te - Z] === 0 && ke(Ae, T[te])) {
                je = te;
                break;
              }
          je === void 0
            ? Ce(Ae, F, N, !0)
            : ((Yt[je - Z] = z + 1),
              je >= Le ? (Le = je) : (ze = !0),
              y(Ae, T[je], B, null, F, N, G, j, V),
              _e++);
        }
        const Ii = ze ? zo(Yt) : Dt;
        for (te = Ii.length - 1, z = be - 1; z >= 0; z--) {
          const Ae = Z + z,
            je = T[Ae],
            Bi = T[Ae + 1],
            Di = Ae + 1 < Y ? Bi.el || Bi.placeholder : $;
          Yt[z] === 0
            ? y(null, je, B, Di, F, N, G, j, V)
            : ze && (te < 0 || z !== Ii[te] ? ue(je, B, Di, 2) : te--);
        }
      }
    },
    ue = (v, T, B, $, F = null) => {
      const { el: N, type: G, transition: j, children: V, shapeFlag: z } = v;
      if (z & 6) {
        ue(v.component.subTree, T, B, $);
        return;
      }
      if (z & 128) {
        v.suspense.move(T, B, $);
        return;
      }
      if (z & 64) {
        G.move(v, T, B, Mt);
        return;
      }
      if (G === me) {
        s(N, T, B);
        for (let W = 0; W < V.length; W++) ue(V[W], T, B, $);
        s(v.anchor, T, B);
        return;
      }
      if (G === Vt) {
        d(v, T, B);
        return;
      }
      if ($ !== 2 && z & 1 && j)
        if ($ === 0) (j.beforeEnter(N), s(N, T, B), he(() => j.enter(N), F));
        else {
          const { leave: W, delayLeave: U, afterLeave: J } = j,
            Z = () => {
              v.ctx.isUnmounted ? i(N) : s(N, T, B);
            },
            ie = () => {
              (N._isLeaving && N[Je](!0),
                W(N, () => {
                  (Z(), J && J());
                }));
            };
          U ? U(N, Z, ie) : ie();
        }
      else s(N, T, B);
    },
    Ce = (v, T, B, $ = !1, F = !1) => {
      const {
        type: N,
        props: G,
        ref: j,
        children: V,
        dynamicChildren: z,
        shapeFlag: Y,
        patchFlag: W,
        dirs: U,
        cacheIndex: J,
      } = v;
      if (
        (W === -2 && (F = !1),
        j != null && (et(), zt(j, null, B, v, !0), tt()),
        J != null && (T.renderCache[J] = void 0),
        Y & 256)
      ) {
        T.ctx.deactivate(v);
        return;
      }
      const Z = Y & 1 && U,
        ie = !dt(v);
      let te;
      if ((ie && (te = G && G.onVnodeBeforeUnmount) && Pe(te, T, v), Y & 6))
        ca(v.component, B, $);
      else {
        if (Y & 128) {
          v.suspense.unmount(B, $);
          return;
        }
        (Z && qe(v, null, T, "beforeUnmount"),
          Y & 64
            ? v.type.remove(v, T, B, Mt, $)
            : z && !z.hasOnce && (N !== me || (W > 0 && W & 64))
              ? Kt(z, T, B, !1, !0)
              : ((N === me && W & 384) || (!F && Y & 16)) && Kt(V, T, B),
          $ && bn(v));
      }
      ((ie && (te = G && G.onVnodeUnmounted)) || Z) &&
        he(() => {
          (te && Pe(te, T, v), Z && qe(v, null, T, "unmounted"));
        }, B);
    },
    bn = (v) => {
      const { type: T, el: B, anchor: $, transition: F } = v;
      if (T === me) {
        oa(B, $);
        return;
      }
      if (T === Vt) {
        h(v);
        return;
      }
      const N = () => {
        (i(B), F && !F.persisted && F.afterLeave && F.afterLeave());
      };
      if (v.shapeFlag & 1 && F && !F.persisted) {
        const { leave: G, delayLeave: j } = F,
          V = () => G(B, N);
        j ? j(v.el, N, V) : V();
      } else N();
    },
    oa = (v, T) => {
      let B;
      for (; v !== T; ) ((B = m(v)), i(v), (v = B));
      i(T);
    },
    ca = (v, T, B) => {
      const { bum: $, scope: F, job: N, subTree: G, um: j, m: V, a: z } = v;
      (Gn(V),
        Gn(z),
        $ && Nt($),
        F.stop(),
        N && ((N.flags |= 8), Ce(G, v, T, B)),
        j && he(j, T),
        he(() => {
          v.isUnmounted = !0;
        }, T));
    },
    Kt = (v, T, B, $ = !1, F = !1, N = 0) => {
      for (let G = N; G < v.length; G++) Ce(v[G], T, B, $, F);
    },
    wn = (v) => {
      if (v.shapeFlag & 6) return wn(v.component.subTree);
      if (v.shapeFlag & 128) return v.suspense.next();
      const T = m(v.anchor || v.el),
        B = T && T[so];
      return B ? m(B) : T;
    };
  let ps = !1;
  const Oi = (v, T, B) => {
      (v == null
        ? T._vnode && Ce(T._vnode, null, null, !0)
        : y(T._vnode || null, v, T, null, null, null, B),
        (T._vnode = v),
        ps || ((ps = !0), $i(), kn(), (ps = !1)));
    },
    Mt = {
      p: y,
      um: Ce,
      m: ue,
      r: bn,
      mt: S,
      mc: R,
      pc: H,
      pbc: D,
      n: wn,
      o: e,
    };
  let hs, gs;
  return (
    t && ([hs, gs] = t(Mt)),
    { render: Oi, hydrate: hs, createApp: Ao(Oi, hs) }
  );
}
function Es({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function vt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function xl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Tl(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (K(s) && K(i))
    for (let r = 0; r < s.length; r++) {
      const l = s[r];
      let o = i[r];
      (o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) &&
          ((o = i[r] = ot(i[r])), (o.el = l.el)),
        !n && o.patchFlag !== -2 && Tl(l, o)),
        o.type === Tt && o.patchFlag !== -1 && (o.el = l.el),
        o.type === oe && !o.el && (o.el = l.el));
    }
}
function zo(e) {
  const t = e.slice(),
    n = [0];
  let s, i, r, l, o;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((i = n[n.length - 1]), e[i] < u)) {
        ((t[s] = i), n.push(s));
        continue;
      }
      for (r = 0, l = n.length - 1; r < l; )
        ((o = (r + l) >> 1), e[n[o]] < u ? (r = o + 1) : (l = o));
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; ) ((n[r] = l), (l = t[l]));
  return n;
}
function El(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : El(t);
}
function Gn(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const ko = Symbol.for("v-scx"),
  Ho = () => On(ko);
function Hu(e, t) {
  return _i(e, null, t);
}
function kt(e, t, n) {
  return _i(e, t, n);
}
function _i(e, t, n = ne) {
  const { immediate: s, deep: i, flush: r, once: l } = n,
    o = ce({}, n),
    a = (t && s) || (!t && r !== "post");
  let u;
  if (Gt) {
    if (r === "sync") {
      const g = Ho();
      u = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {};
      return ((g.stop = Fe), (g.resume = Fe), (g.pause = Fe), g);
    }
  }
  const c = ve;
  o.call = (g, C, y) => Ve(g, c, C, y);
  let f = !1;
  (r === "post"
    ? (o.scheduler = (g) => {
        he(g, c && c.suspense);
      })
    : r !== "sync" &&
      ((f = !0),
      (o.scheduler = (g, C) => {
        C ? g() : mi(g);
      })),
    (o.augmentJob = (g) => {
      (t && (g.flags |= 4),
        f && ((g.flags |= 2), c && ((g.id = c.uid), (g.i = c))));
    }));
  const m = Qa(e, t, o);
  return (Gt && (u ? u.push(m) : a && m()), m);
}
function Vo(e, t, n) {
  const s = this.proxy,
    i = le(e) ? (e.includes(".") ? Cl(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  X(t) ? (r = t) : ((r = t.handler), (n = t));
  const l = _t(this),
    o = _i(i, r.bind(s), n);
  return (l(), o);
}
function Cl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
const jo = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${gt(t)}Modifiers`];
function Go(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ne;
  let i = n;
  const r = t.startsWith("update:"),
    l = r && jo(s, t.slice(7));
  l &&
    (l.trim && (i = n.map((c) => (le(c) ? c.trim() : c))),
    l.number && (i = n.map(Ns)));
  let o,
    a = s[(o = An(t))] || s[(o = An($e(t)))];
  (!a && r && (a = s[(o = An(gt(t)))]), a && Ve(a, e, 6, i));
  const u = s[o + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[o]) return;
    ((e.emitted[o] = !0), Ve(u, e, 6, i));
  }
}
const Wo = new WeakMap();
function _l(e, t, n = !1) {
  const s = n ? Wo : t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const r = e.emits;
  let l = {},
    o = !1;
  if (!X(e)) {
    const a = (u) => {
      const c = _l(u, t, !0);
      c && ((o = !0), ce(l, c));
    };
    (!n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a));
  }
  return !r && !o
    ? (se(e) && s.set(e, null), null)
    : (K(r) ? r.forEach((a) => (l[a] = null)) : ce(l, r),
      se(e) && s.set(e, l),
      l);
}
function cs(e, t) {
  return !e || !pn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, gt(t)) || ee(e, t));
}
function Cs(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [r],
      slots: l,
      attrs: o,
      emit: a,
      render: u,
      renderCache: c,
      props: f,
      data: m,
      setupState: g,
      ctx: C,
      inheritAttrs: y,
    } = e,
    P = Hn(e);
  let E, p;
  try {
    if (n.shapeFlag & 4) {
      const h = i || s,
        w = h;
      ((E = Ie(u.call(w, h, c, f, g, m, C))), (p = o));
    } else {
      const h = t;
      ((E = Ie(
        h.length > 1 ? h(f, { attrs: o, slots: l, emit: a }) : h(f, null),
      )),
        (p = t.props ? o : Uo(o)));
    }
  } catch (h) {
    ((rn.length = 0), qt(h, e, 1), (E = ae(oe)));
  }
  let d = E;
  if (p && y !== !1) {
    const h = Object.keys(p),
      { shapeFlag: w } = d;
    h.length &&
      w & 7 &&
      (r && h.some(ri) && (p = Ko(p, r)), (d = nt(d, p, !1, !0)));
  }
  return (
    n.dirs &&
      ((d = nt(d, null, !1, !0)),
      (d.dirs = d.dirs ? d.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ht(d, n.transition),
    (E = d),
    Hn(P),
    E
  );
}
function qo(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (Ct(i)) {
      if (i.type !== oe || i.children === "v-if") {
        if (n) return;
        n = i;
      }
    } else return;
  }
  return n;
}
const Uo = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || pn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ko = (e, t) => {
    const n = {};
    for (const s in e) (!ri(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Yo(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: l, children: o, patchFlag: a } = t,
    u = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? Yi(s, l, u) : !!l;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const m = c[f];
        if (l[m] !== s[m] && !cs(u, m)) return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable)
      ? !0
      : s === l
        ? !1
        : s
          ? l
            ? Yi(s, l, u)
            : !0
          : !!l;
  return !1;
}
function Yi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !cs(n, r)) return !0;
  }
  return !1;
}
function fs({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      (((e = t.vnode).el = n), (t = t.parent));
    else break;
  }
}
const Wn = (e) => e.__isSuspense;
let qs = 0;
const Xo = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, s, i, r, l, o, a, u) {
      if (e == null) Jo(t, n, s, i, r, l, o, a, u);
      else {
        if (r && r.deps > 0 && !e.suspense.isInFallback) {
          ((t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el));
          return;
        }
        Zo(e, t, n, s, i, l, o, a, u);
      }
    },
    hydrate: Qo,
    normalize: ec,
  },
  Vu = Xo;
function un(e, t) {
  const n = e.props && e.props[t];
  X(n) && n();
}
function Jo(e, t, n, s, i, r, l, o, a) {
  const {
      p: u,
      o: { createElement: c },
    } = a,
    f = c("div"),
    m = (e.suspense = Pl(e, i, s, t, f, n, r, l, o, a));
  (u(null, (m.pendingBranch = e.ssContent), f, null, s, m, r, l),
    m.deps > 0
      ? (un(e, "onPending"),
        un(e, "onFallback"),
        u(null, e.ssFallback, t, n, s, null, r, l),
        Ht(m, e.ssFallback))
      : m.resolve(!1, !0));
}
function Zo(e, t, n, s, i, r, l, o, { p: a, um: u, o: { createElement: c } }) {
  const f = (t.suspense = e.suspense);
  ((f.vnode = t), (t.el = e.el));
  const m = t.ssContent,
    g = t.ssFallback,
    { activeBranch: C, pendingBranch: y, isInFallback: P, isHydrating: E } = f;
  if (y)
    ((f.pendingBranch = m),
      ke(y, m)
        ? (a(y, m, f.hiddenContainer, null, i, f, r, l, o),
          f.deps <= 0
            ? f.resolve()
            : P && (E || (a(C, g, n, s, i, null, r, l, o), Ht(f, g))))
        : ((f.pendingId = qs++),
          E ? ((f.isHydrating = !1), (f.activeBranch = y)) : u(y, i, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = c("div")),
          P
            ? (a(null, m, f.hiddenContainer, null, i, f, r, l, o),
              f.deps <= 0
                ? f.resolve()
                : (a(C, g, n, s, i, null, r, l, o), Ht(f, g)))
            : C && ke(C, m)
              ? (a(C, m, n, s, i, f, r, l, o), f.resolve(!0))
              : (a(null, m, f.hiddenContainer, null, i, f, r, l, o),
                f.deps <= 0 && f.resolve())));
  else if (C && ke(C, m)) (a(C, m, n, s, i, f, r, l, o), Ht(f, m));
  else if (
    (un(t, "onPending"),
    (f.pendingBranch = m),
    m.shapeFlag & 512
      ? (f.pendingId = m.component.suspenseId)
      : (f.pendingId = qs++),
    a(null, m, f.hiddenContainer, null, i, f, r, l, o),
    f.deps <= 0)
  )
    f.resolve();
  else {
    const { timeout: p, pendingId: d } = f;
    p > 0
      ? setTimeout(() => {
          f.pendingId === d && f.fallback(g);
        }, p)
      : p === 0 && f.fallback(g);
  }
}
function Pl(e, t, n, s, i, r, l, o, a, u, c = !1) {
  const {
    p: f,
    m,
    um: g,
    n: C,
    o: { parentNode: y, remove: P },
  } = u;
  let E;
  const p = tc(e);
  p && t && t.pendingBranch && ((E = t.pendingId), t.deps++);
  const d = e.props ? _r(e.props.timeout) : void 0,
    h = r,
    w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: l,
      container: s,
      hiddenContainer: i,
      deps: 0,
      pendingId: qs++,
      timeout: typeof d == "number" ? d : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: !1,
      effects: [],
      resolve(L = !1, A = !1) {
        const {
          vnode: R,
          activeBranch: b,
          pendingBranch: D,
          pendingId: M,
          effects: x,
          parentComponent: O,
          container: S,
        } = w;
        let _ = !1;
        (w.isHydrating
          ? (w.isHydrating = !1)
          : L ||
            ((_ = b && D.transition && D.transition.mode === "out-in"),
            _ &&
              (b.transition.afterLeave = () => {
                M === w.pendingId && (m(D, S, r === h ? C(b) : r, 0), zn(x));
              }),
            b && (y(b.el) === S && (r = C(b)), g(b, O, w, !0)),
            _ || m(D, S, r, 0)),
          Ht(w, D),
          (w.pendingBranch = null),
          (w.isInFallback = !1));
        let I = w.parent,
          k = !1;
        for (; I; ) {
          if (I.pendingBranch) {
            (I.effects.push(...x), (k = !0));
            break;
          }
          I = I.parent;
        }
        (!k && !_ && zn(x),
          (w.effects = []),
          p &&
            t &&
            t.pendingBranch &&
            E === t.pendingId &&
            (t.deps--, t.deps === 0 && !A && t.resolve()),
          un(R, "onResolve"));
      },
      fallback(L) {
        if (!w.pendingBranch) return;
        const {
          vnode: A,
          activeBranch: R,
          parentComponent: b,
          container: D,
          namespace: M,
        } = w;
        un(A, "onFallback");
        const x = C(R),
          O = () => {
            w.isInFallback && (f(null, L, D, x, b, null, M, o, a), Ht(w, L));
          },
          S = L.transition && L.transition.mode === "out-in";
        (S && (R.transition.afterLeave = O),
          (w.isInFallback = !0),
          g(R, b, null, !0),
          S || O());
      },
      move(L, A, R) {
        (w.activeBranch && m(w.activeBranch, L, A, R), (w.container = L));
      },
      next() {
        return w.activeBranch && C(w.activeBranch);
      },
      registerDep(L, A, R) {
        const b = !!w.pendingBranch;
        b && w.deps++;
        const D = L.vnode.el;
        L.asyncDep
          .catch((M) => {
            qt(M, L, 0);
          })
          .then((M) => {
            if (L.isUnmounted || w.isUnmounted || w.pendingId !== L.suspenseId)
              return;
            L.asyncResolved = !0;
            const { vnode: x } = L;
            (Xs(L, M), D && (x.el = D));
            const O = !D && L.subTree.el;
            (A(L, x, y(D || L.subTree.el), D ? null : C(L.subTree), w, l, R),
              O && P(O),
              fs(L, x.el),
              b && --w.deps === 0 && w.resolve());
          });
      },
      unmount(L, A) {
        ((w.isUnmounted = !0),
          w.activeBranch && g(w.activeBranch, n, L, A),
          w.pendingBranch && g(w.pendingBranch, n, L, A));
      },
    };
  return w;
}
function Qo(e, t, n, s, i, r, l, o, a) {
  const u = (t.suspense = Pl(
      t,
      s,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      i,
      r,
      l,
      o,
      !0,
    )),
    c = a(e, (u.pendingBranch = t.ssContent), n, u, r, l);
  return (u.deps === 0 && u.resolve(!1, !0), c);
}
function ec(e) {
  const { shapeFlag: t, children: n } = e,
    s = t & 32;
  ((e.ssContent = Xi(s ? n.default : n)),
    (e.ssFallback = s ? Xi(n.fallback) : ae(oe)));
}
function Xi(e) {
  let t;
  if (X(e)) {
    const n = jt && e._c;
    (n && ((e._d = !1), qn()), (e = e()), n && ((e._d = !0), (t = Me), Ll()));
  }
  return (
    K(e) && (e = qo(e)),
    (e = Ie(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Ml(e, t) {
  t && t.pendingBranch
    ? K(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : zn(e);
}
function Ht(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let i = t.el;
  for (; !i && t.component; ) ((t = t.component.subTree), (i = t.el));
  ((n.el = i), s && s.subTree === n && ((s.vnode.el = i), fs(s, i)));
}
function tc(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const me = Symbol.for("v-fgt"),
  Tt = Symbol.for("v-txt"),
  oe = Symbol.for("v-cmt"),
  Vt = Symbol.for("v-stc"),
  rn = [];
let Me = null;
function qn(e = !1) {
  rn.push((Me = e ? null : []));
}
function Ll() {
  (rn.pop(), (Me = rn[rn.length - 1] || null));
}
let jt = 1;
function Un(e, t = !1) {
  ((jt += e), e < 0 && Me && t && (Me.hasOnce = !0));
}
function Al(e) {
  return (
    (e.dynamicChildren = jt > 0 ? Me || Dt : null),
    Ll(),
    jt > 0 && Me && Me.push(e),
    e
  );
}
function ju(e, t, n, s, i, r) {
  return Al(Il(e, t, n, s, i, r, !0));
}
function Us(e, t, n, s, i) {
  return Al(ae(e, t, n, s, i, !0));
}
function Ct(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ke(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ol = ({ key: e }) => e ?? null,
  In = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? le(e) || pe(e) || X(e)
        ? { i: ye, r: e, k: t, f: !!n }
        : e
      : null
  );
function Il(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === me ? 0 : 1,
  l = !1,
  o = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ol(t),
    ref: t && In(t),
    scopeId: Qr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ye,
  };
  return (
    o
      ? (Pi(a, n), r & 128 && e.normalize(a))
      : n && (a.shapeFlag |= le(n) ? 8 : 16),
    jt > 0 &&
      !l &&
      Me &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      Me.push(a),
    a
  );
}
const ae = nc;
function nc(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === al) && (e = oe), Ct(e))) {
    const o = nt(e, t, !0);
    return (
      n && Pi(o, n),
      jt > 0 &&
        !r &&
        Me &&
        (o.shapeFlag & 6 ? (Me[Me.indexOf(e)] = o) : Me.push(o)),
      (o.patchFlag = -2),
      o
    );
  }
  if ((uc(e) && (e = e.__vccOpts), t)) {
    t = sc(t);
    let { class: o, style: a } = t;
    (o && !le(o) && (t.class = rs(o)),
      se(a) && (gi(a) && !K(a) && (a = ce({}, a)), (t.style = is(a))));
  }
  const l = le(e) ? 1 : Wn(e) ? 128 : el(e) ? 64 : se(e) ? 4 : X(e) ? 2 : 0;
  return Il(e, t, n, s, i, l, r, !0);
}
function sc(e) {
  return e ? (gi(e) || gl(e) ? ce({}, e) : e) : null;
}
function nt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: l, children: o, transition: a } = e,
    u = t ? ic(i || {}, t) : i,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Ol(u),
      ref:
        t && t.ref
          ? n && r
            ? K(r)
              ? r.concat(In(t))
              : [r, In(t)]
            : In(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: o,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== me ? (l === -1 ? 16 : l | 16) : l,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && nt(e.ssContent),
      ssFallback: e.ssFallback && nt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (a && s && ht(c, a.clone(c)), c);
}
function Bl(e = " ", t = 0) {
  return ae(Tt, null, e, t);
}
function Gu(e, t) {
  const n = ae(Vt, null, e);
  return ((n.staticCount = t), n);
}
function Wu(e = "", t = !1) {
  return t ? (qn(), Us(oe, null, e)) : ae(oe, null, e);
}
function Ie(e) {
  return e == null || typeof e == "boolean"
    ? ae(oe)
    : K(e)
      ? ae(me, null, e.slice())
      : Ct(e)
        ? ot(e)
        : ae(Tt, null, String(e));
}
function ot(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : nt(e);
}
function Pi(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (K(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Pi(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !gl(t)
        ? (t._ctx = ye)
        : i === 3 &&
          ye &&
          (ye.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    X(t)
      ? ((t = { default: t, _ctx: ye }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Bl(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function ic(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = rs([t.class, s.class]));
      else if (i === "style") t.style = is([t.style, s.style]);
      else if (pn(i)) {
        const r = t[i],
          l = s[i];
        l &&
          r !== l &&
          !(K(r) && r.includes(l)) &&
          (t[i] = r ? [].concat(r, l) : l);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Pe(e, t, n, s = null) {
  Ve(e, t, 7, [n, s]);
}
const rc = dl();
let lc = 0;
function ac(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || rc,
    r = {
      uid: lc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ar(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: vl(s, i),
      emitsOptions: _l(s, i),
      emit: null,
      emitted: null,
      propsDefaults: ne,
      inheritAttrs: s.inheritAttrs,
      ctx: ne,
      data: ne,
      props: ne,
      attrs: ne,
      slots: ne,
      refs: ne,
      setupState: ne,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = Go.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let ve = null;
const mt = () => ve || ye;
let Kn, Ks;
{
  const e = ss(),
    t = (n, s) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (r) => {
          i.length > 1 ? i.forEach((l) => l(r)) : i[0](r);
        }
      );
    };
  ((Kn = t("__VUE_INSTANCE_SETTERS__", (n) => (ve = n))),
    (Ks = t("__VUE_SSR_SETTERS__", (n) => (Gt = n))));
}
const _t = (e) => {
    const t = ve;
    return (
      Kn(e),
      e.scope.on(),
      () => {
        (e.scope.off(), Kn(t));
      }
    );
  },
  Ys = () => {
    (ve && ve.scope.off(), Kn(null));
  };
function Dl(e) {
  return e.vnode.shapeFlag & 4;
}
let Gt = !1;
function oc(e, t = !1, n = !1) {
  t && Ks(t);
  const { props: s, children: i } = e.vnode,
    r = Dl(e);
  (Oo(e, s, r, t), Ro(e, i, n || t));
  const l = r ? cc(e, t) : void 0;
  return (t && Ks(!1), l);
}
function cc(e, t) {
  const n = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, To)));
  const { setup: s } = n;
  if (s) {
    et();
    const i = (e.setupContext = s.length > 1 ? Fl(e) : null),
      r = _t(e),
      l = gn(s, e, 0, [e.props, i]),
      o = ai(l);
    if ((tt(), r(), (o || e.sp) && !dt(e) && yi(e), o)) {
      if ((l.then(Ys, Ys), t))
        return l
          .then((a) => {
            Xs(e, a);
          })
          .catch((a) => {
            qt(a, e, 0);
          });
      e.asyncDep = l;
    } else Xs(e, l);
  } else Rl(e);
}
function Xs(e, t, n) {
  (X(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : se(t) && (e.setupState = Ur(t)),
    Rl(e));
}
function Rl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Fe);
  {
    const i = _t(e);
    et();
    try {
      Eo(e);
    } finally {
      (tt(), i());
    }
  }
}
const fc = {
  get(e, t) {
    return (Se(e, "get", ""), e[t]);
  },
};
function Fl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, fc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function us(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ur(Ga(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in sn) return sn[n](e);
          },
          has(t, n) {
            return n in t || n in sn;
          },
        }))
    : e.proxy;
}
function Js(e, t = !0) {
  return X(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function uc(e) {
  return X(e) && "__vccOpts" in e;
}
const Nl = (e, t) => Ja(e, t, Gt);
function Re(e, t, n) {
  try {
    Un(-1);
    const s = arguments.length;
    return s === 2
      ? se(t) && !K(t)
        ? Ct(t)
          ? ae(e, null, [t])
          : ae(e, t)
        : ae(e, null, t)
      : (s > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : s === 3 && Ct(n) && (n = [n]),
        ae(e, t, n));
  } finally {
    Un(1);
  }
}
const dc = "3.5.22",
  qu = Fe;
/**
 * @vue/runtime-dom v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Zs;
const Ji = typeof window < "u" && window.trustedTypes;
if (Ji)
  try {
    Zs = Ji.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const $l = Zs ? (e) => Zs.createHTML(e) : (e) => e,
  pc = "http://www.w3.org/2000/svg",
  hc = "http://www.w3.org/1998/Math/MathML",
  Xe = typeof document < "u" ? document : null,
  Zi = Xe && Xe.createElement("template"),
  gc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i =
        t === "svg"
          ? Xe.createElementNS(pc, e)
          : t === "mathml"
            ? Xe.createElementNS(hc, e)
            : n
              ? Xe.createElement(e, { is: n })
              : Xe.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (e) => Xe.createTextNode(e),
    createComment: (e) => Xe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Xe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, i, r) {
      const l = n ? n.previousSibling : t.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));
        );
      else {
        Zi.innerHTML = $l(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const o = Zi.content;
        if (s === "svg" || s === "mathml") {
          const a = o.firstChild;
          for (; a.firstChild; ) o.appendChild(a.firstChild);
          o.removeChild(a);
        }
        t.insertBefore(o, n);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  rt = "transition",
  Jt = "animation",
  Wt = Symbol("_vtc"),
  zl = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  kl = ce({}, nl, zl),
  mc = (e) => ((e.displayName = "Transition"), (e.props = kl), e),
  Uu = mc((e, { slots: t }) => Re(ro, Hl(e), t)),
  yt = (e, t = []) => {
    K(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Qi = (e) => (e ? (K(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Hl(e) {
  const t = {};
  for (const x in e) x in zl || (t[x] = e[x]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: i,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: l = `${n}-enter-active`,
      enterToClass: o = `${n}-enter-to`,
      appearFromClass: a = r,
      appearActiveClass: u = l,
      appearToClass: c = o,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: m = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = e,
    C = vc(i),
    y = C && C[0],
    P = C && C[1],
    {
      onBeforeEnter: E,
      onEnter: p,
      onEnterCancelled: d,
      onLeave: h,
      onLeaveCancelled: w,
      onBeforeAppear: L = E,
      onAppear: A = p,
      onAppearCancelled: R = d,
    } = t,
    b = (x, O, S, _) => {
      ((x._enterCancelled = _), lt(x, O ? c : o), lt(x, O ? u : l), S && S());
    },
    D = (x, O) => {
      ((x._isLeaving = !1), lt(x, f), lt(x, g), lt(x, m), O && O());
    },
    M = (x) => (O, S) => {
      const _ = x ? A : p,
        I = () => b(O, x, S);
      (yt(_, [O, I]),
        er(() => {
          (lt(O, x ? a : r), Ge(O, x ? c : o), Qi(_) || tr(O, s, y, I));
        }));
    };
  return ce(t, {
    onBeforeEnter(x) {
      (yt(E, [x]), Ge(x, r), Ge(x, l));
    },
    onBeforeAppear(x) {
      (yt(L, [x]), Ge(x, a), Ge(x, u));
    },
    onEnter: M(!1),
    onAppear: M(!0),
    onLeave(x, O) {
      x._isLeaving = !0;
      const S = () => D(x, O);
      (Ge(x, f),
        x._enterCancelled ? (Ge(x, m), Qs(x)) : (Qs(x), Ge(x, m)),
        er(() => {
          x._isLeaving && (lt(x, f), Ge(x, g), Qi(h) || tr(x, s, P, S));
        }),
        yt(h, [x, S]));
    },
    onEnterCancelled(x) {
      (b(x, !1, void 0, !0), yt(d, [x]));
    },
    onAppearCancelled(x) {
      (b(x, !0, void 0, !0), yt(R, [x]));
    },
    onLeaveCancelled(x) {
      (D(x), yt(w, [x]));
    },
  });
}
function vc(e) {
  if (e == null) return null;
  if (se(e)) return [_s(e.enter), _s(e.leave)];
  {
    const t = _s(e);
    return [t, t];
  }
}
function _s(e) {
  return _r(e);
}
function Ge(e, t) {
  (t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Wt] || (e[Wt] = new Set())).add(t));
}
function lt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Wt];
  n && (n.delete(t), n.size || (e[Wt] = void 0));
}
function er(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let yc = 0;
function tr(e, t, n, s) {
  const i = (e._endId = ++yc),
    r = () => {
      i === e._endId && s();
    };
  if (n != null) return setTimeout(r, n);
  const { type: l, timeout: o, propCount: a } = Vl(e, t);
  if (!l) return s();
  const u = l + "end";
  let c = 0;
  const f = () => {
      (e.removeEventListener(u, m), r());
    },
    m = (g) => {
      g.target === e && ++c >= a && f();
    };
  (setTimeout(() => {
    c < a && f();
  }, o + 1),
    e.addEventListener(u, m));
}
function Vl(e, t) {
  const n = window.getComputedStyle(e),
    s = (C) => (n[C] || "").split(", "),
    i = s(`${rt}Delay`),
    r = s(`${rt}Duration`),
    l = nr(i, r),
    o = s(`${Jt}Delay`),
    a = s(`${Jt}Duration`),
    u = nr(o, a);
  let c = null,
    f = 0,
    m = 0;
  t === rt
    ? l > 0 && ((c = rt), (f = l), (m = r.length))
    : t === Jt
      ? u > 0 && ((c = Jt), (f = u), (m = a.length))
      : ((f = Math.max(l, u)),
        (c = f > 0 ? (l > u ? rt : Jt) : null),
        (m = c ? (c === rt ? r.length : a.length) : 0));
  const g =
    c === rt &&
    /\b(?:transform|all)(?:,|$)/.test(s(`${rt}Property`).toString());
  return { type: c, timeout: f, propCount: m, hasTransform: g };
}
function nr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => sr(n) + sr(e[s])));
}
function sr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Qs(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function bc(e, t, n) {
  const s = e[Wt];
  (s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t));
}
const Yn = Symbol("_vod"),
  jl = Symbol("_vsh"),
  Ku = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      ((e[Yn] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Zt(e, t));
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Zt(e, !0), s.enter(e))
            : s.leave(e, () => {
                Zt(e, !1);
              })
          : Zt(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Zt(e, t);
    },
  };
function Zt(e, t) {
  ((e.style.display = t ? e[Yn] : "none"), (e[jl] = !t));
}
const Gl = Symbol("");
function Yu(e) {
  const t = mt();
  if (!t) return;
  const n = (t.ut = (i = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`),
      ).forEach((r) => Xn(r, i));
    }),
    s = () => {
      const i = e(t.proxy);
      (t.ce ? Xn(t.ce, i) : ei(t.subTree, i), n(i));
    };
  (bi(() => {
    zn(s);
  }),
    Ut(() => {
      kt(s, Fe, { flush: "post" });
      const i = new MutationObserver(s);
      (i.observe(t.subTree.el.parentNode, { childList: !0 }),
        wi(() => i.disconnect()));
    }));
}
function ei(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    ((e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          ei(n.activeBranch, t);
        }));
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Xn(e.el, t);
  else if (e.type === me) e.children.forEach((n) => ei(n, t));
  else if (e.type === Vt) {
    let { el: n, anchor: s } = e;
    for (; n && (Xn(n, t), n !== s); ) n = n.nextSibling;
  }
}
function Xn(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const i in t) {
      const r = xa(t[i]);
      (n.setProperty(`--${i}`, r), (s += `--${i}: ${r};`));
    }
    n[Gl] = s;
  }
}
const wc = /(?:^|;)\s*display\s*:/;
function Sc(e, t, n) {
  const s = e.style,
    i = le(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (le(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && Bn(s, o, "");
        }
      else for (const l in t) n[l] == null && Bn(s, l, "");
    for (const l in n) (l === "display" && (r = !0), Bn(s, l, n[l]));
  } else if (i) {
    if (t !== n) {
      const l = s[Gl];
      (l && (n += ";" + l), (s.cssText = n), (r = wc.test(n)));
    }
  } else t && e.removeAttribute("style");
  Yn in e && ((e[Yn] = r ? s.display : ""), e[jl] && (s.display = "none"));
}
const ir = /\s*!important$/;
function Bn(e, t, n) {
  if (K(n)) n.forEach((s) => Bn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = xc(e, t);
    ir.test(n)
      ? e.setProperty(gt(s), n.replace(ir, ""), "important")
      : (e[s] = n);
  }
}
const rr = ["Webkit", "Moz", "ms"],
  Ps = {};
function xc(e, t) {
  const n = Ps[t];
  if (n) return n;
  let s = $e(t);
  if (s !== "filter" && s in e) return (Ps[t] = s);
  s = ns(s);
  for (let i = 0; i < rr.length; i++) {
    const r = rr[i] + s;
    if (r in e) return (Ps[t] = r);
  }
  return t;
}
const lr = "http://www.w3.org/1999/xlink";
function ar(e, t, n, s, i, r = wa(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(lr, t.slice(6, t.length))
      : e.setAttributeNS(lr, t, n)
    : n == null || (r && !Pr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : st(n) ? String(n) : n);
}
function or(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $l(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    ((o !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n));
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean"
      ? (n = Pr(n))
      : n == null && o === "string"
        ? ((n = ""), (l = !0))
        : o === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(i || t);
}
function It(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Tc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const cr = Symbol("_vei");
function Ec(e, t, n, s, i = null) {
  const r = e[cr] || (e[cr] = {}),
    l = r[t];
  if (s && l) l.value = s;
  else {
    const [o, a] = Cc(t);
    if (s) {
      const u = (r[t] = Mc(s, i));
      It(e, o, u, a);
    } else l && (Tc(e, o, l, a), (r[t] = void 0));
  }
}
const fr = /(?:Once|Passive|Capture)$/;
function Cc(e) {
  let t;
  if (fr.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(fr)); )
      ((e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0));
  }
  return [e[2] === ":" ? e.slice(3) : gt(e.slice(2)), t];
}
let Ms = 0;
const _c = Promise.resolve(),
  Pc = () => Ms || (_c.then(() => (Ms = 0)), (Ms = Date.now()));
function Mc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Ve(Lc(s, n.value), t, 5, [s]);
  };
  return ((n.value = e), (n.attached = Pc()), n);
}
function Lc(e, t) {
  if (K(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        (n.call(e), (e._stopped = !0));
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const ur = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ac = (e, t, n, s, i, r) => {
    const l = i === "svg";
    t === "class"
      ? bc(e, s, l)
      : t === "style"
        ? Sc(e, n, s)
        : pn(t)
          ? ri(t) || Ec(e, t, n, s, r)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Oc(e, t, s, l)
              )
            ? (or(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                ar(e, t, s, l, r, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !le(s))
              ? or(e, $e(t), s, r, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                ar(e, t, s, l));
  };
function Oc(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && ur(t) && X(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ur(t) && le(n) ? !1 : t in e;
}
const Wl = new WeakMap(),
  ql = new WeakMap(),
  Jn = Symbol("_moveCb"),
  dr = Symbol("_enterCb"),
  Ic = (e) => (delete e.props.mode, e),
  Bc = Ic({
    name: "TransitionGroup",
    props: ce({}, kl, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = mt(),
        s = tl();
      let i, r;
      return (
        vn(() => {
          if (!i.length) return;
          const l = e.moveClass || `${e.name || "v"}-move`;
          if (!Nc(i[0].el, n.vnode.el, l)) {
            i = [];
            return;
          }
          (i.forEach(Dc), i.forEach(Rc));
          const o = i.filter(Fc);
          (Qs(n.vnode.el),
            o.forEach((a) => {
              const u = a.el,
                c = u.style;
              (Ge(u, l),
                (c.transform = c.webkitTransform = c.transitionDuration = ""));
              const f = (u[Jn] = (m) => {
                (m && m.target !== u) ||
                  ((!m || m.propertyName.endsWith("transform")) &&
                    (u.removeEventListener("transitionend", f),
                    (u[Jn] = null),
                    lt(u, l)));
              });
              u.addEventListener("transitionend", f);
            }),
            (i = []));
        }),
        () => {
          const l = Q(e),
            o = Hl(l);
          let a = l.tag || me;
          if (((i = []), r))
            for (let u = 0; u < r.length; u++) {
              const c = r[u];
              c.el &&
                c.el instanceof Element &&
                (i.push(c),
                ht(c, fn(c, o, s, n)),
                Wl.set(c, c.el.getBoundingClientRect()));
            }
          r = t.default ? vi(t.default()) : [];
          for (let u = 0; u < r.length; u++) {
            const c = r[u];
            c.key != null && ht(c, fn(c, o, s, n));
          }
          return ae(a, null, r);
        }
      );
    },
  }),
  Xu = Bc;
function Dc(e) {
  const t = e.el;
  (t[Jn] && t[Jn](), t[dr] && t[dr]());
}
function Rc(e) {
  ql.set(e, e.el.getBoundingClientRect());
}
function Fc(e) {
  const t = Wl.get(e),
    n = ql.get(e),
    s = t.left - n.left,
    i = t.top - n.top;
  if (s || i) {
    const r = e.el.style;
    return (
      (r.transform = r.webkitTransform = `translate(${s}px,${i}px)`),
      (r.transitionDuration = "0s"),
      e
    );
  }
}
function Nc(e, t, n) {
  const s = e.cloneNode(),
    i = e[Wt];
  (i &&
    i.forEach((o) => {
      o.split(/\s+/).forEach((a) => a && s.classList.remove(a));
    }),
    n.split(/\s+/).forEach((o) => o && s.classList.add(o)),
    (s.style.display = "none"));
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(s);
  const { hasTransform: l } = Vl(s);
  return (r.removeChild(s), l);
}
const pr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => Nt(t, n) : t;
};
function $c(e) {
  e.target.composing = !0;
}
function hr(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Ls = Symbol("_assign"),
  Ju = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
      e[Ls] = pr(i);
      const r = s || (i.props && i.props.type === "number");
      (It(e, t ? "change" : "input", (l) => {
        if (l.target.composing) return;
        let o = e.value;
        (n && (o = o.trim()), r && (o = Ns(o)), e[Ls](o));
      }),
        n &&
          It(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (It(e, "compositionstart", $c),
          It(e, "compositionend", hr),
          It(e, "change", hr)));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } },
      l,
    ) {
      if (((e[Ls] = pr(l)), e.composing)) return;
      const o =
          (r || e.type === "number") && !/^0\d/.test(e.value)
            ? Ns(e.value)
            : e.value,
        a = t ?? "";
      o !== a &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (i && e.value.trim() === a))) ||
          (e.value = a));
    },
  },
  zc = ["ctrl", "shift", "alt", "meta"],
  kc = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => zc.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Zu = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (i, ...r) => {
        for (let l = 0; l < t.length; l++) {
          const o = kc[t[l]];
          if (o && o(i, t)) return;
        }
        return e(i, ...r);
      })
    );
  },
  Hc = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Qu = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (i) => {
        if (!("key" in i)) return;
        const r = gt(i.key);
        if (t.some((l) => l === r || Hc[l] === r)) return e(i);
      })
    );
  },
  Ul = ce({ patchProp: Ac }, gc);
let ln,
  gr = !1;
function Vc() {
  return ln || (ln = No(Ul));
}
function jc() {
  return ((ln = gr ? ln : $o(Ul)), (gr = !0), ln);
}
const ed = (...e) => {
    const t = Vc().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const i = Yl(s);
        if (!i) return;
        const r = t._component;
        (!X(r) && !r.render && !r.template && (r.template = i.innerHTML),
          i.nodeType === 1 && (i.textContent = ""));
        const l = n(i, !1, Kl(i));
        return (
          i instanceof Element &&
            (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
          l
        );
      }),
      t
    );
  },
  td = (...e) => {
    const t = jc().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const i = Yl(s);
        if (i) return n(i, !0, Kl(i));
      }),
      t
    );
  };
function Kl(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Yl(e) {
  return le(e) ? document.querySelector(e) : e;
}
function mr(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Mi(e, t) {
  (e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : mr(t[n]) &&
          mr(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          Mi(e[n], t[n]);
    }));
}
const Xl = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Be() {
  const e = typeof document < "u" ? document : {};
  return (Mi(e, Xl), e);
}
const Gc = {
  document: Xl,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Ee() {
  const e = typeof window < "u" ? window : {};
  return (Mi(e, Gc), e);
}
function Wc(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Zn(e, t) {
  return (t === void 0 && (t = 0), setTimeout(e, t));
}
function Qn() {
  return Date.now();
}
function qc(e) {
  const t = Ee();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function Uc(e, t) {
  t === void 0 && (t = "x");
  const n = Ee();
  let s, i, r;
  const l = qc(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = l.transform || l.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (r = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((r =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = r.m41)
        : s.length === 16
          ? (i = parseFloat(s[12]))
          : (i = parseFloat(s[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = r.m42)
        : s.length === 16
          ? (i = parseFloat(s[13]))
          : (i = parseFloat(s[5]))),
    i || 0
  );
}
function Mn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Kc(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Oe() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (s != null && !Kc(s)) {
      const i = Object.keys(Object(s)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, l = i.length; r < l; r += 1) {
        const o = i[r],
          a = Object.getOwnPropertyDescriptor(s, o);
        a !== void 0 &&
          a.enumerable &&
          (Mn(e[o]) && Mn(s[o])
            ? s[o].__swiper__
              ? (e[o] = s[o])
              : Oe(e[o], s[o])
            : !Mn(e[o]) && Mn(s[o])
              ? ((e[o] = {}), s[o].__swiper__ ? (e[o] = s[o]) : Oe(e[o], s[o]))
              : (e[o] = s[o]));
      }
    }
  }
  return e;
}
function Ln(e, t, n) {
  e.style.setProperty(t, n);
}
function Jl(e) {
  let { swiper: t, targetPosition: n, side: s } = e;
  const i = Ee(),
    r = -t.translate;
  let l = null,
    o;
  const a = t.params.speed;
  ((t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID));
  const u = n > r ? "next" : "prev",
    c = (m, g) => (u === "next" && m >= g) || (u === "prev" && m <= g),
    f = () => {
      ((o = new Date().getTime()), l === null && (l = o));
      const m = Math.max(Math.min((o - l) / a, 1), 0),
        g = 0.5 - Math.cos(m * Math.PI) / 2;
      let C = r + g * (n - r);
      if ((c(C, n) && (C = n), t.wrapperEl.scrollTo({ [s]: C }), c(C, n))) {
        ((t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ((t.wrapperEl.style.overflow = ""),
              t.wrapperEl.scrollTo({ [s]: C }));
          }),
          i.cancelAnimationFrame(t.cssModeFrameID));
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(f);
    };
  f();
}
function Zl(e) {
  return (
    e.querySelector(".swiper-slide-transform") ||
    (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
    e
  );
}
function Ue(e, t) {
  return (
    t === void 0 && (t = ""),
    [...e.children].filter((n) => n.matches(t))
  );
}
function ds(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return (n.classList.add(...(Array.isArray(t) ? t : [t])), n);
}
function Ql(e) {
  const t = Ee(),
    n = Be(),
    s = e.getBoundingClientRect(),
    i = n.body,
    r = e.clientTop || i.clientTop || 0,
    l = e.clientLeft || i.clientLeft || 0,
    o = e === t ? t.scrollY : e.scrollTop,
    a = e === t ? t.scrollX : e.scrollLeft;
  return { top: s.top + o - r, left: s.left + a - l };
}
function Yc(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling;
    (t ? s.matches(t) && n.push(s) : n.push(s), (e = s));
  }
  return n;
}
function Xc(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling;
    (t ? s.matches(t) && n.push(s) : n.push(s), (e = s));
  }
  return n;
}
function ft(e, t) {
  return Ee().getComputedStyle(e, null).getPropertyValue(t);
}
function dn(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function es(e, t) {
  const n = [];
  let s = e.parentElement;
  for (; s; )
    (t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement));
  return n;
}
function Jc(e, t) {
  function n(s) {
    s.target === e && (t.call(e, s), e.removeEventListener("transitionend", n));
  }
  t && e.addEventListener("transitionend", n);
}
function ti(e, t, n) {
  const s = Ee();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      s
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top"),
    ) +
    parseFloat(
      s
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"),
    )
  );
}
let As;
function Zc() {
  const e = Ee(),
    t = Be();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function ea() {
  return (As || (As = Zc()), As);
}
let Os;
function Qc(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = ea(),
    s = Ee(),
    i = s.navigator.platform,
    r = t || s.navigator.userAgent,
    l = { ios: !1, android: !1 },
    o = s.screen.width,
    a = s.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    m = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = i === "Win32";
  let C = i === "MacIntel";
  const y = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      C &&
      n.touch &&
      y.indexOf(`${o}x${a}`) >= 0 &&
      ((c = r.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (C = !1)),
    u && !g && ((l.os = "android"), (l.android = !0)),
    (c || m || f) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function ef(e) {
  return (e === void 0 && (e = {}), Os || (Os = Qc(e)), Os);
}
let Is;
function tf() {
  const e = Ee();
  let t = !1;
  function n() {
    const s = e.navigator.userAgent.toLowerCase();
    return (
      s.indexOf("safari") >= 0 &&
      s.indexOf("chrome") < 0 &&
      s.indexOf("android") < 0
    );
  }
  if (n()) {
    const s = String(e.navigator.userAgent);
    if (s.includes("Version/")) {
      const [i, r] = s
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((l) => Number(l));
      t = i < 16 || (i === 16 && r < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
  };
}
function nf() {
  return (Is || (Is = tf()), Is);
}
function sf(e) {
  let { swiper: t, on: n, emit: s } = e;
  const i = Ee();
  let r = null,
    l = null;
  const o = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((r = new ResizeObserver((f) => {
          l = i.requestAnimationFrame(() => {
            const { width: m, height: g } = t;
            let C = m,
              y = g;
            (f.forEach((P) => {
              let { contentBoxSize: E, contentRect: p, target: d } = P;
              (d && d !== t.el) ||
                ((C = p ? p.width : (E[0] || E).inlineSize),
                (y = p ? p.height : (E[0] || E).blockSize));
            }),
              (C !== m || y !== g) && o());
          });
        })),
        r.observe(t.el));
    },
    u = () => {
      (l && i.cancelAnimationFrame(l),
        r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange");
    };
  (n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    (i.addEventListener("resize", o),
      i.addEventListener("orientationchange", c));
  }),
    n("destroy", () => {
      (u(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", c));
    }));
}
function rf(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  const r = [],
    l = Ee(),
    o = function (c, f) {
      f === void 0 && (f = {});
      const m = l.MutationObserver || l.WebkitMutationObserver,
        g = new m((C) => {
          if (t.__preventObserver__) return;
          if (C.length === 1) {
            i("observerUpdate", C[0]);
            return;
          }
          const y = function () {
            i("observerUpdate", C[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(y)
            : l.setTimeout(y, 0);
        });
      (g.observe(c, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        r.push(g));
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = es(t.hostEl);
          for (let f = 0; f < c.length; f += 1) o(c[f]);
        }
        (o(t.hostEl, { childList: t.params.observeSlideChildren }),
          o(t.wrapperEl, { attributes: !1 }));
      }
    },
    u = () => {
      (r.forEach((c) => {
        c.disconnect();
      }),
        r.splice(0, r.length));
    };
  (n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", a),
    s("destroy", u));
}
var lf = {
  on(e, t, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((r) => {
        (s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][i](t));
      }),
      s
    );
  },
  once(e, t, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    function i() {
      (s.off(e, i), i.__emitterProxy && delete i.__emitterProxy);
      for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
        l[o] = arguments[o];
      t.apply(s, l);
    }
    return ((i.__emitterProxy = t), s.on(e, i, n));
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const s = t ? "unshift" : "push";
    return (
      n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e),
      n
    );
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return (n >= 0 && t.eventsAnyListeners.splice(n, 1), t);
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((s) => {
          typeof t > "u"
            ? (n.eventsListeners[s] = [])
            : n.eventsListeners[s] &&
              n.eventsListeners[s].forEach((i, r) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[s].splice(r, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, s;
    for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
      r[l] = arguments[l];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((t = r[0]), (n = r.slice(1, r.length)), (s = e))
        : ((t = r[0].events), (n = r[0].data), (s = r[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        (e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(s, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(s, n);
            }));
      }),
      e
    );
  },
};
function af() {
  const e = this;
  let t, n;
  const s = e.el;
  (typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = s.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = s.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(ft(s, "padding-left") || 0, 10) -
        parseInt(ft(s, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(ft(s, "padding-top") || 0, 10) -
        parseInt(ft(s, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      })));
}
function of() {
  const e = this;
  function t(M) {
    return e.isHorizontal()
      ? M
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[M];
  }
  function n(M, x) {
    return parseFloat(M.getPropertyValue(t(x)) || 0);
  }
  const s = e.params,
    { wrapperEl: i, slidesEl: r, size: l, rtlTranslate: o, wrongRTL: a } = e,
    u = e.virtual && s.virtual.enabled,
    c = u ? e.virtual.slides.length : e.slides.length,
    f = Ue(r, `.${e.params.slideClass}, swiper-slide`),
    m = u ? e.virtual.slides.length : f.length;
  let g = [];
  const C = [],
    y = [];
  let P = s.slidesOffsetBefore;
  typeof P == "function" && (P = s.slidesOffsetBefore.call(e));
  let E = s.slidesOffsetAfter;
  typeof E == "function" && (E = s.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    d = e.slidesGrid.length;
  let h = s.spaceBetween,
    w = -P,
    L = 0,
    A = 0;
  if (typeof l > "u") return;
  (typeof h == "string" && h.indexOf("%") >= 0
    ? (h = (parseFloat(h.replace("%", "")) / 100) * l)
    : typeof h == "string" && (h = parseFloat(h)),
    (e.virtualSize = -h),
    f.forEach((M) => {
      (o ? (M.style.marginLeft = "") : (M.style.marginRight = ""),
        (M.style.marginBottom = ""),
        (M.style.marginTop = ""));
    }),
    s.centeredSlides &&
      s.cssMode &&
      (Ln(i, "--swiper-centered-offset-before", ""),
      Ln(i, "--swiper-centered-offset-after", "")));
  const R = s.grid && s.grid.rows > 1 && e.grid;
  R && e.grid.initSlides(m);
  let b;
  const D =
    s.slidesPerView === "auto" &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      (M) => typeof s.breakpoints[M].slidesPerView < "u",
    ).length > 0;
  for (let M = 0; M < m; M += 1) {
    b = 0;
    let x;
    if (
      (f[M] && (x = f[M]),
      R && e.grid.updateSlide(M, x, m, t),
      !(f[M] && ft(x, "display") === "none"))
    ) {
      if (s.slidesPerView === "auto") {
        D && (f[M].style[t("width")] = "");
        const O = getComputedStyle(x),
          S = x.style.transform,
          _ = x.style.webkitTransform;
        if (
          (S && (x.style.transform = "none"),
          _ && (x.style.webkitTransform = "none"),
          s.roundLengths)
        )
          b = e.isHorizontal() ? ti(x, "width") : ti(x, "height");
        else {
          const I = n(O, "width"),
            k = n(O, "padding-left"),
            H = n(O, "padding-right"),
            q = n(O, "margin-left"),
            fe = n(O, "margin-right"),
            ue = O.getPropertyValue("box-sizing");
          if (ue && ue === "border-box") b = I + q + fe;
          else {
            const { clientWidth: Ce, offsetWidth: bn } = x;
            b = I + k + H + q + fe + (bn - Ce);
          }
        }
        (S && (x.style.transform = S),
          _ && (x.style.webkitTransform = _),
          s.roundLengths && (b = Math.floor(b)));
      } else
        ((b = (l - (s.slidesPerView - 1) * h) / s.slidesPerView),
          s.roundLengths && (b = Math.floor(b)),
          f[M] && (f[M].style[t("width")] = `${b}px`));
      (f[M] && (f[M].swiperSlideSize = b),
        y.push(b),
        s.centeredSlides
          ? ((w = w + b / 2 + L / 2 + h),
            L === 0 && M !== 0 && (w = w - l / 2 - h),
            M === 0 && (w = w - l / 2 - h),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            s.roundLengths && (w = Math.floor(w)),
            A % s.slidesPerGroup === 0 && g.push(w),
            C.push(w))
          : (s.roundLengths && (w = Math.floor(w)),
            (A - Math.min(e.params.slidesPerGroupSkip, A)) %
              e.params.slidesPerGroup ===
              0 && g.push(w),
            C.push(w),
            (w = w + b + h)),
        (e.virtualSize += b + h),
        (L = b),
        (A += 1));
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + E),
    o &&
      a &&
      (s.effect === "slide" || s.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + h}px`),
    s.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + h}px`),
    R && e.grid.updateWrapperSize(b, g, t),
    !s.centeredSlides)
  ) {
    const M = [];
    for (let x = 0; x < g.length; x += 1) {
      let O = g[x];
      (s.roundLengths && (O = Math.floor(O)),
        g[x] <= e.virtualSize - l && M.push(O));
    }
    ((g = M),
      Math.floor(e.virtualSize - l) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - l));
  }
  if (u && s.loop) {
    const M = y[0] + h;
    if (s.slidesPerGroup > 1) {
      const x = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup,
        ),
        O = M * s.slidesPerGroup;
      for (let S = 0; S < x; S += 1) g.push(g[g.length - 1] + O);
    }
    for (let x = 0; x < e.virtual.slidesBefore + e.virtual.slidesAfter; x += 1)
      (s.slidesPerGroup === 1 && g.push(g[g.length - 1] + M),
        C.push(C[C.length - 1] + M),
        (e.virtualSize += M));
  }
  if ((g.length === 0 && (g = [0]), h !== 0)) {
    const M = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
    f.filter((x, O) =>
      !s.cssMode || s.loop ? !0 : O !== f.length - 1,
    ).forEach((x) => {
      x.style[M] = `${h}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let M = 0;
    (y.forEach((O) => {
      M += O + (h || 0);
    }),
      (M -= h));
    const x = M - l;
    g = g.map((O) => (O <= 0 ? -P : O > x ? x + E : O));
  }
  if (s.centerInsufficientSlides) {
    let M = 0;
    if (
      (y.forEach((x) => {
        M += x + (h || 0);
      }),
      (M -= h),
      M < l)
    ) {
      const x = (l - M) / 2;
      (g.forEach((O, S) => {
        g[S] = O - x;
      }),
        C.forEach((O, S) => {
          C[S] = O + x;
        }));
    }
  }
  if (
    (Object.assign(e, {
      slides: f,
      snapGrid: g,
      slidesGrid: C,
      slidesSizesGrid: y,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    (Ln(i, "--swiper-centered-offset-before", `${-g[0]}px`),
      Ln(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`,
      ));
    const M = -e.snapGrid[0],
      x = -e.slidesGrid[0];
    ((e.snapGrid = e.snapGrid.map((O) => O + M)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + x)));
  }
  if (
    (m !== c && e.emit("slidesLengthChange"),
    g.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    C.length !== d && e.emit("slidesGridLengthChange"),
    s.watchSlidesProgress && e.updateSlidesOffset(),
    !u && !s.cssMode && (s.effect === "slide" || s.effect === "fade"))
  ) {
    const M = `${s.containerModifierClass}backface-hidden`,
      x = e.el.classList.contains(M);
    m <= s.maxBackfaceHiddenSlides
      ? x || e.el.classList.add(M)
      : x && e.el.classList.remove(M);
  }
}
function cf(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled;
  let i = 0,
    r;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const l = (o) => (s ? t.slides[t.getSlideIndexByData(o)] : t.slides[o]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((o) => {
        n.push(o);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const o = t.activeIndex + r;
        if (o > t.slides.length && !s) break;
        n.push(l(o));
      }
  else n.push(l(t.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const o = n[r].offsetHeight;
      i = o > i ? o : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function ff() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset =
      (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function uf(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: i, snapGrid: r } = t;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  (i && (l = e),
    s.forEach((a) => {
      a.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []));
  let o = n.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let a = 0; a < s.length; a += 1) {
    const u = s[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= s[0].swiperSlideOffset);
    const f =
        (l + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + o),
      m =
        (l - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + o),
      g = -(l - c),
      C = g + t.slidesSizesGrid[a];
    (((g >= 0 && g < t.size - 1) ||
      (C > 1 && C <= t.size) ||
      (g <= 0 && C >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(a),
      s[a].classList.add(n.slideVisibleClass)),
      (u.progress = i ? -f : f),
      (u.originalProgress = i ? -m : m));
  }
}
function df(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: r, isEnd: l, progressLoop: o } = t;
  const a = r,
    u = l;
  if (s === 0) ((i = 0), (r = !0), (l = !0));
  else {
    i = (e - t.minTranslate()) / s;
    const c = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    ((r = c || i <= 0), (l = f || i >= 1), c && (i = 0), f && (i = 1));
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      m = t.slidesGrid[c],
      g = t.slidesGrid[f],
      C = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    (y >= m ? (o = (y - m) / C) : (o = (y + C - g) / C), o > 1 && (o -= 1));
  }
  (Object.assign(t, { progress: i, progressLoop: o, isBeginning: r, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !a && t.emit("reachBeginning toEdge"),
    l && !u && t.emit("reachEnd toEdge"),
    ((a && !r) || (u && !l)) && t.emit("fromEdge"),
    t.emit("progress", i));
}
function pf() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: i } = e,
    r = e.virtual && n.virtual.enabled,
    l = (a) => Ue(s, `.${n.slideClass}${a}, swiper-slide${a}`)[0];
  t.forEach((a) => {
    a.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let o;
  if (r)
    if (n.loop) {
      let a = i - e.virtual.slidesBefore;
      (a < 0 && (a = e.virtual.slides.length + a),
        a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
        (o = l(`[data-swiper-slide-index="${a}"]`)));
    } else o = l(`[data-swiper-slide-index="${i}"]`);
  else o = t[i];
  if (o) {
    o.classList.add(n.slideActiveClass);
    let a = Xc(o, `.${n.slideClass}, swiper-slide`)[0];
    (n.loop && !a && (a = t[0]), a && a.classList.add(n.slideNextClass));
    let u = Yc(o, `.${n.slideClass}, swiper-slide`)[0];
    (n.loop && !u === 0 && (u = t[t.length - 1]),
      u && u.classList.add(n.slidePrevClass));
  }
  e.emitSlidesClasses();
}
const Dn = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      s = t.closest(n());
    if (s) {
      let i = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      (!i &&
        e.isElement &&
        (s.shadowRoot
          ? (i = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((i = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                i && i.remove());
            })),
        i && i.remove());
    }
  },
  Bs = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  ni = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const s =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = i,
        o = [l - t];
      (o.push(...Array.from({ length: t }).map((a, u) => l + s + u)),
        e.slides.forEach((a, u) => {
          o.includes(a.column) && Bs(e, u);
        }));
      return;
    }
    const r = i + s - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = i - t; l <= r + t; l += 1) {
        const o = ((l % n) + n) % n;
        (o < i || o > r) && Bs(e, o);
      }
    else
      for (let l = Math.max(i - t, 0); l <= Math.min(r + t, n - 1); l += 1)
        l !== i && (l > r || l < i) && Bs(e, l);
  };
function hf(e) {
  const { slidesGrid: t, params: n } = e,
    s = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < "u"
      ? s >= t[r] && s < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (i = r)
        : s >= t[r] && s < t[r + 1] && (i = r + 1)
      : s >= t[r] && (i = r);
  return (n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i);
}
function gf(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: i, activeIndex: r, realIndex: l, snapIndex: o } = t;
  let a = e,
    u;
  const c = (m) => {
    let g = m - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof a > "u" && (a = hf(t)), s.indexOf(n) >= 0)) u = s.indexOf(n);
  else {
    const m = Math.min(i.slidesPerGroupSkip, a);
    u = m + Math.floor((a - m) / i.slidesPerGroup);
  }
  if ((u >= s.length && (u = s.length - 1), a === r)) {
    (u !== o && ((t.snapIndex = u), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = c(a)));
    return;
  }
  let f;
  (t.virtual && i.virtual.enabled && i.loop
    ? (f = c(a))
    : t.slides[a]
      ? (f = parseInt(
          t.slides[a].getAttribute("data-swiper-slide-index") || a,
          10,
        ))
      : (f = a),
    Object.assign(t, {
      previousSnapIndex: o,
      snapIndex: u,
      previousRealIndex: l,
      realIndex: f,
      previousIndex: r,
      activeIndex: a,
    }),
    t.initialized && ni(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (l !== f && t.emit("realIndexChange"), t.emit("slideChange")));
}
function mf(e, t) {
  const n = this,
    s = n.params;
  let i = e.closest(`.${s.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((o) => {
      !i && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (i = o);
    });
  let r = !1,
    l;
  if (i) {
    for (let o = 0; o < n.slides.length; o += 1)
      if (n.slides[o] === i) {
        ((r = !0), (l = o));
        break;
      }
  }
  if (i && r)
    ((n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = l));
  else {
    ((n.clickedSlide = void 0), (n.clickedIndex = void 0));
    return;
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var vf = {
  updateSize: af,
  updateSlides: of,
  updateAutoHeight: cf,
  updateSlidesOffset: ff,
  updateSlidesProgress: uf,
  updateProgress: df,
  updateSlidesClasses: pf,
  updateActiveIndex: gf,
  updateClickedSlide: mf,
};
function yf(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: s, translate: i, wrapperEl: r } = t;
  if (n.virtualTranslate) return s ? -i : i;
  if (n.cssMode) return i;
  let l = Uc(r, e);
  return ((l += t.cssOverflowAdjustment()), s && (l = -l), l || 0);
}
function bf(e, t) {
  const n = this,
    { rtlTranslate: s, params: i, wrapperEl: r, progress: l } = n;
  let o = 0,
    a = 0;
  const u = 0;
  (n.isHorizontal() ? (o = s ? -e : e) : (a = e),
    i.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : a),
    i.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -o
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (o -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${o}px, ${a}px, ${u}px)`)));
  let c;
  const f = n.maxTranslate() - n.minTranslate();
  (f === 0 ? (c = 0) : (c = (e - n.minTranslate()) / f),
    c !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t));
}
function wf() {
  return -this.snapGrid[0];
}
function Sf() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function xf(e, t, n, s, i) {
  (e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0));
  const r = this,
    { params: l, wrapperEl: o } = r;
  if (r.animating && l.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    u = r.maxTranslate();
  let c;
  if (
    (s && e > a ? (c = a) : s && e < u ? (c = u) : (c = e),
    r.updateProgress(c),
    l.cssMode)
  ) {
    const f = r.isHorizontal();
    if (t === 0) o[f ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!r.support.smoothScroll)
        return (
          Jl({ swiper: r, targetPosition: -c, side: f ? "left" : "top" }),
          !0
        );
      o.scrollTo({ [f ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (m) {
              !r ||
                r.destroyed ||
                (m.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  n && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var Tf = {
  getTranslate: yf,
  setTranslate: bf,
  minTranslate: wf,
  maxTranslate: Sf,
  translateTo: xf,
};
function Ef(e, t) {
  const n = this;
  (n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t));
}
function ta(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: i } = e;
  const { activeIndex: r, previousIndex: l } = t;
  let o = s;
  if (
    (o || (r > l ? (o = "next") : r < l ? (o = "prev") : (o = "reset")),
    t.emit(`transition${i}`),
    n && r !== l)
  ) {
    if (o === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    (t.emit(`slideChangeTransition${i}`),
      o === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`));
  }
}
function Cf(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: s } = n;
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    ta({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function _f(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: s } = n;
  ((n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      ta({ swiper: n, runCallbacks: e, direction: t, step: "End" })));
}
var Pf = { setTransition: Ef, transitionStart: Cf, transitionEnd: _f };
function Mf(e, t, n, s, i) {
  (e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10)));
  const r = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: o,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: f,
    rtlTranslate: m,
    wrapperEl: g,
    enabled: C,
  } = r;
  if ((r.animating && o.preventInteractionOnTransition) || (!C && !s && !i))
    return !1;
  const y = Math.min(r.params.slidesPerGroupSkip, l);
  let P = y + Math.floor((l - y) / r.params.slidesPerGroup);
  P >= a.length && (P = a.length - 1);
  const E = -a[P];
  if (o.normalizeSlideIndex)
    for (let d = 0; d < u.length; d += 1) {
      const h = -Math.floor(E * 100),
        w = Math.floor(u[d] * 100),
        L = Math.floor(u[d + 1] * 100);
      typeof u[d + 1] < "u"
        ? h >= w && h < L - (L - w) / 2
          ? (l = d)
          : h >= w && h < L && (l = d + 1)
        : h >= w && (l = d);
    }
  if (
    r.initialized &&
    l !== f &&
    ((!r.allowSlideNext &&
      (m
        ? E > r.translate && E > r.minTranslate()
        : E < r.translate && E < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        E > r.translate &&
        E > r.maxTranslate() &&
        (f || 0) !== l))
  )
    return !1;
  (l !== (c || 0) && n && r.emit("beforeSlideChangeStart"),
    r.updateProgress(E));
  let p;
  if (
    (l > f ? (p = "next") : l < f ? (p = "prev") : (p = "reset"),
    (m && -E === r.translate) || (!m && E === r.translate))
  )
    return (
      r.updateActiveIndex(l),
      o.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      o.effect !== "slide" && r.setTranslate(E),
      p !== "reset" && (r.transitionStart(n, p), r.transitionEnd(n, p)),
      !1
    );
  if (o.cssMode) {
    const d = r.isHorizontal(),
      h = m ? E : -E;
    if (t === 0) {
      const w = r.virtual && r.params.virtual.enabled;
      (w &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        w && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[d ? "scrollLeft" : "scrollTop"] = h;
            }))
          : (g[d ? "scrollLeft" : "scrollTop"] = h),
        w &&
          requestAnimationFrame(() => {
            ((r.wrapperEl.style.scrollSnapType = ""),
              (r._immediateVirtual = !1));
          }));
    } else {
      if (!r.support.smoothScroll)
        return (
          Jl({ swiper: r, targetPosition: h, side: d ? "left" : "top" }),
          !0
        );
      g.scrollTo({ [d ? "left" : "top"]: h, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(t),
    r.setTranslate(E),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, s),
    r.transitionStart(n, p),
    t === 0
      ? r.transitionEnd(n, p)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (h) {
            !r ||
              r.destroyed ||
              (h.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd,
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, p)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function Lf(e, t, n, s) {
  (e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10)));
  const i = this;
  let r = e;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (r = r + i.virtual.slidesBefore)
        : (r = i.getSlideIndexByData(r))),
    i.slideTo(r, t, n, s)
  );
}
function Af(e, t, n) {
  (e === void 0 && (e = this.params.speed), t === void 0 && (t = !0));
  const s = this,
    { enabled: i, params: r, animating: l } = s;
  if (!i) return s;
  let o = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : o,
    u = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !u && r.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, e, t, n)
    : s.slideTo(s.activeIndex + a, e, t, n);
}
function Of(e, t, n) {
  (e === void 0 && (e = this.params.speed), t === void 0 && (t = !0));
  const s = this,
    {
      params: i,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: o,
      enabled: a,
      animating: u,
    } = s;
  if (!a) return s;
  const c = s.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    (s.loopFix({ direction: "prev" }),
      (s._clientLeft = s.wrapperEl.clientLeft));
  }
  const f = o ? s.translate : -s.translate;
  function m(E) {
    return E < 0 ? -Math.floor(Math.abs(E)) : Math.floor(E);
  }
  const g = m(f),
    C = r.map((E) => m(E));
  let y = r[C.indexOf(g) - 1];
  if (typeof y > "u" && i.cssMode) {
    let E;
    (r.forEach((p, d) => {
      g >= p && (E = d);
    }),
      typeof E < "u" && (y = r[E > 0 ? E - 1 : E]));
  }
  let P = 0;
  if (
    (typeof y < "u" &&
      ((P = l.indexOf(y)),
      P < 0 && (P = s.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((P = P - s.slidesPerViewDynamic("previous", !0) + 1),
        (P = Math.max(P, 0)))),
    i.rewind && s.isBeginning)
  ) {
    const E =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(E, e, t, n);
  } else if (i.loop && s.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(P, e, t, n);
      }),
      !0
    );
  return s.slideTo(P, e, t, n);
}
function If(e, t, n) {
  (e === void 0 && (e = this.params.speed), t === void 0 && (t = !0));
  const s = this;
  return s.slideTo(s.activeIndex, e, t, n);
}
function Bf(e, t, n, s) {
  (e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = 0.5));
  const i = this;
  let r = i.activeIndex;
  const l = Math.min(i.params.slidesPerGroupSkip, r),
    o = l + Math.floor((r - l) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[o]) {
    const u = i.snapGrid[o],
      c = i.snapGrid[o + 1];
    a - u > (c - u) * s && (r += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[o - 1],
      c = i.snapGrid[o];
    a - u <= (c - u) * s && (r -= i.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, i.slidesGrid.length - 1)),
    i.slideTo(r, e, t, n)
  );
}
function Df() {
  const e = this,
    { params: t, slidesEl: n } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    r;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    ((r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - s / 2 ||
          i > e.slides.length - e.loopedSlides + s / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Ue(n, `${l}[data-swiper-slide-index="${r}"]`)[0],
            )),
            Zn(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - s
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Ue(n, `${l}[data-swiper-slide-index="${r}"]`)[0],
            )),
            Zn(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i));
  } else e.slideTo(i);
}
var Rf = {
  slideTo: Mf,
  slideToLoop: Lf,
  slideNext: Af,
  slidePrev: Of,
  slideReset: If,
  slideToClosest: Bf,
  slideToClickedSlide: Df,
};
function Ff(e) {
  const t = this,
    { params: n, slidesEl: s } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  (Ue(s, `.${n.slideClass}, swiper-slide`).forEach((r, l) => {
    r.setAttribute("data-swiper-slide-index", l);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    }));
}
function Nf(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: r,
    byController: l,
    byMousewheel: o,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: u,
    allowSlidePrev: c,
    allowSlideNext: f,
    slidesEl: m,
    params: g,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && g.virtual.enabled)
  ) {
    (n &&
      (!g.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && a.snapIndex < g.slidesPerView
          ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
          : a.snapIndex === a.snapGrid.length - 1 &&
            a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = f),
      a.emit("loopFix"));
    return;
  }
  const C =
    g.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(g.slidesPerView, 10));
  let y = g.loopedSlides || C;
  (y % g.slidesPerGroup !== 0 &&
    (y += g.slidesPerGroup - (y % g.slidesPerGroup)),
    (a.loopedSlides = y));
  const P = [],
    E = [];
  let p = a.activeIndex;
  typeof r > "u"
    ? (r = a.getSlideIndex(
        a.slides.filter((A) => A.classList.contains(g.slideActiveClass))[0],
      ))
    : (p = r);
  const d = s === "next" || !s,
    h = s === "prev" || !s;
  let w = 0,
    L = 0;
  if (r < y) {
    w = Math.max(y - r, g.slidesPerGroup);
    for (let A = 0; A < y - r; A += 1) {
      const R = A - Math.floor(A / u.length) * u.length;
      P.push(u.length - R - 1);
    }
  } else if (r > a.slides.length - y * 2) {
    L = Math.max(r - (a.slides.length - y * 2), g.slidesPerGroup);
    for (let A = 0; A < L; A += 1) {
      const R = A - Math.floor(A / u.length) * u.length;
      E.push(R);
    }
  }
  if (
    (h &&
      P.forEach((A) => {
        ((a.slides[A].swiperLoopMoveDOM = !0),
          m.prepend(a.slides[A]),
          (a.slides[A].swiperLoopMoveDOM = !1));
      }),
    d &&
      E.forEach((A) => {
        ((a.slides[A].swiperLoopMoveDOM = !0),
          m.append(a.slides[A]),
          (a.slides[A].swiperLoopMoveDOM = !1));
      }),
    a.recalcSlides(),
    g.slidesPerView === "auto" && a.updateSlides(),
    g.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (P.length > 0 && h)
      if (typeof t > "u") {
        const A = a.slidesGrid[p],
          b = a.slidesGrid[p + w] - A;
        o
          ? a.setTranslate(a.translate - b)
          : (a.slideTo(p + w, 0, !1, !0),
            i &&
              ((a.touches[a.isHorizontal() ? "startX" : "startY"] += b),
              (a.touchEventsData.currentTranslate = a.translate)));
      } else
        i &&
          (a.slideToLoop(t, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate));
    else if (E.length > 0 && d)
      if (typeof t > "u") {
        const A = a.slidesGrid[p],
          b = a.slidesGrid[p - L] - A;
        o
          ? a.setTranslate(a.translate - b)
          : (a.slideTo(p - L, 0, !1, !0),
            i &&
              ((a.touches[a.isHorizontal() ? "startX" : "startY"] += b),
              (a.touchEventsData.currentTranslate = a.translate)));
      } else a.slideToLoop(t, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = f),
    a.controller && a.controller.control && !l)
  ) {
    const A = {
      slideRealIndex: t,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((R) => {
          !R.destroyed &&
            R.params.loop &&
            R.loopFix({
              ...A,
              slideTo: R.params.slidesPerView === g.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...A,
          slideTo:
            a.controller.control.params.slidesPerView === g.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function $f() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const s = [];
  (e.slides.forEach((i) => {
    const r =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    s[r] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0));
}
var zf = { loopCreate: Ff, loopFix: Nf, loopDestroy: $f };
function kf(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
function Hf() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Vf = { setGrabCursor: kf, unsetGrabCursor: Hf };
function jf(e, t) {
  t === void 0 && (t = this);
  function n(s) {
    if (!s || s === Be() || s === Ee()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const i = s.closest(e);
    return !i && !s.getRootNode ? null : i || n(s.getRootNode().host);
  }
  return n(t);
}
function Gf(e) {
  const t = this,
    n = Be(),
    s = Ee(),
    i = t.touchEventsData;
  i.evCache.push(e);
  const { params: r, touches: l, enabled: o } = t;
  if (
    !o ||
    (!r.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let a = e;
  a.originalEvent && (a = a.originalEvent);
  let u = a.target;
  if (
    (r.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(u)) ||
    ("which" in a && a.which === 3) ||
    ("button" in a && a.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!r.noSwipingClass && r.noSwipingClass !== "",
    f = e.composedPath ? e.composedPath() : e.path;
  c && a.target && a.target.shadowRoot && f && (u = f[0]);
  const m = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    g = !!(a.target && a.target.shadowRoot);
  if (r.noSwiping && (g ? jf(m, u) : u.closest(m))) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !u.closest(r.swipeHandler)) return;
  ((l.currentX = a.pageX), (l.currentY = a.pageY));
  const C = l.currentX,
    y = l.currentY,
    P = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    E = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (P && (C <= E || C >= s.innerWidth - E))
    if (P === "prevent") e.preventDefault();
    else return;
  (Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = C),
    (l.startY = y),
    (i.touchStartTime = Qn()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (i.allowThresholdMove = !1));
  let p = !0;
  (u.matches(i.focusableElements) &&
    ((p = !1), u.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== u &&
      n.activeElement.blur());
  const d = p && t.allowTouchMove && r.touchStartPreventDefault;
  ((r.touchStartForcePreventDefault || d) &&
    !u.isContentEditable &&
    a.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", a));
}
function Wf(e) {
  const t = Be(),
    n = this,
    s = n.touchEventsData,
    { params: i, touches: r, rtlTranslate: l, enabled: o } = n;
  if (!o || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if ((a.originalEvent && (a = a.originalEvent), !s.isTouched)) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const u = s.evCache.findIndex((A) => A.pointerId === a.pointerId);
  u >= 0 && (s.evCache[u] = a);
  const c = s.evCache.length > 1 ? s.evCache[0] : a,
    f = c.pageX,
    m = c.pageY;
  if (a.preventedByNestedSwiper) {
    ((r.startX = f), (r.startY = m));
    return;
  }
  if (!n.allowTouchMove) {
    (a.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, {
          startX: f,
          startY: m,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: f,
          currentY: m,
        }),
        (s.touchStartTime = Qn())));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (m < r.startY && n.translate <= n.maxTranslate()) ||
        (m > r.startY && n.translate >= n.minTranslate())
      ) {
        ((s.isTouched = !1), (s.isMoved = !1));
        return;
      }
    } else if (
      (f < r.startX && n.translate <= n.maxTranslate()) ||
      (f > r.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(s.focusableElements)
  ) {
    ((s.isMoved = !0), (n.allowClick = !1));
    return;
  }
  if (
    (s.allowTouchCallbacks && n.emit("touchMove", a),
    a.targetTouches && a.targetTouches.length > 1)
  )
    return;
  ((r.currentX = f), (r.currentY = m));
  const g = r.currentX - r.startX,
    C = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(g ** 2 + C ** 2) < n.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let A;
    (n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : g * g + C * C >= 25 &&
        ((A = (Math.atan2(Math.abs(C), Math.abs(g)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? A > i.touchAngle
          : 90 - A > i.touchAngle));
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        s.evCache.length > 1))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  ((n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation());
  let y = n.isHorizontal() ? g : C,
    P = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  (i.oneWayMovement &&
    ((y = Math.abs(y) * (l ? 1 : -1)), (P = Math.abs(P) * (l ? 1 : -1))),
    (r.diff = y),
    (y *= i.touchRatio),
    l && ((y = -y), (P = -P)));
  const E = n.touchesDirection;
  ((n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = P > 0 ? "prev" : "next"));
  const p = n.params.loop && !i.cssMode,
    d =
      (n.swipeDirection === "next" && n.allowSlideNext) ||
      (n.swipeDirection === "prev" && n.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (p && d && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const A = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(A);
    }
    ((s.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a));
  }
  let h;
  (s.isMoved &&
    E !== n.touchesDirection &&
    p &&
    d &&
    Math.abs(y) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (h = !0)),
    n.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = y + s.startTranslate));
  let w = !0,
    L = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (L = 0),
    y > 0
      ? (p &&
          d &&
          !h &&
          s.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + y) ** L)))
      : y < 0 &&
        (p &&
          d &&
          !h &&
          s.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - y) ** L))),
    w && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ((s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = n.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY));
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate));
}
function qf(e) {
  const t = this,
    n = t.touchEventsData,
    s = n.evCache.findIndex((d) => d.pointerId === e.pointerId);
  if (
    (s >= 0 && n.evCache.splice(s, 1),
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      e.type,
    ) &&
      !(
        ["pointercancel", "contextmenu"].includes(e.type) &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: r,
    rtlTranslate: l,
    slidesGrid: o,
    enabled: a,
  } = t;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let u = e;
  if (
    (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", u),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    (n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1));
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = Qn(),
    f = c - n.touchStartTime;
  if (t.allowClick) {
    const d = u.path || (u.composedPath && u.composedPath());
    (t.updateClickedSlide((d && d[0]) || u.target, d),
      t.emit("tap click", u),
      f < 300 &&
        c - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", u));
  }
  if (
    ((n.lastClickTime = Qn()),
    Zn(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      r.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    ((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1));
    return;
  }
  ((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1));
  let m;
  if (
    (i.followFinger
      ? (m = l ? t.translate : -t.translate)
      : (m = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: m });
    return;
  }
  let g = 0,
    C = t.slidesSizesGrid[0];
  for (
    let d = 0;
    d < o.length;
    d += d < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const h = d < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[d + h] < "u"
      ? m >= o[d] && m < o[d + h] && ((g = d), (C = o[d + h] - o[d]))
      : m >= o[d] && ((g = d), (C = o[o.length - 1] - o[o.length - 2]));
  }
  let y = null,
    P = null;
  i.rewind &&
    (t.isBeginning
      ? (P =
          i.virtual && i.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (y = 0));
  const E = (m - o[g]) / C,
    p = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (f > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    (t.swipeDirection === "next" &&
      (E >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? y : g + p)
        : t.slideTo(g)),
      t.swipeDirection === "prev" &&
        (E > 1 - i.longSwipesRatio
          ? t.slideTo(g + p)
          : P !== null && E < 0 && Math.abs(E) > i.longSwipesRatio
            ? t.slideTo(P)
            : t.slideTo(g)));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
      ? u.target === t.navigation.nextEl
        ? t.slideTo(g + p)
        : t.slideTo(g)
      : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : g + p),
        t.swipeDirection === "prev" && t.slideTo(P !== null ? P : g));
  }
}
function vr() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e,
    l = e.virtual && e.params.virtual.enabled;
  ((e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses());
  const o = l && t.loop;
  ((t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !o
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = s),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow());
}
function Uf(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Kf() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
  if (!s) return;
  ((e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses());
  let i;
  const r = e.maxTranslate() - e.minTranslate();
  (r === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / r),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1));
}
function Yf(e) {
  const t = this;
  (Dn(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update());
}
let yr = !1;
function Xf() {}
const na = (e, t) => {
  const n = Be(),
    { params: s, el: i, wrapperEl: r, device: l } = e,
    o = !!s.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  (i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    s.cssMode && r[a]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[u](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          vr,
          !0,
        )
      : e[u]("observerUpdate", vr, !0),
    i[a]("load", e.onLoad, { capture: !0 }));
};
function Jf() {
  const e = this,
    t = Be(),
    { params: n } = e;
  ((e.onTouchStart = Gf.bind(e)),
    (e.onTouchMove = Wf.bind(e)),
    (e.onTouchEnd = qf.bind(e)),
    n.cssMode && (e.onScroll = Kf.bind(e)),
    (e.onClick = Uf.bind(e)),
    (e.onLoad = Yf.bind(e)),
    yr || (t.addEventListener("touchstart", Xf), (yr = !0)),
    na(e, "on"));
}
function Zf() {
  na(this, "off");
}
var Qf = { attachEvents: Jf, detachEvents: Zf };
const br = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function eu() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: i } = e,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const a = (l in r ? r[l] : void 0) || e.originalParams,
    u = br(e, s),
    c = br(e, a),
    f = s.enabled;
  (u && !c
    ? (i.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${s.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && s.grid.fill === "column")) &&
        i.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((E) => {
      if (typeof a[E] > "u") return;
      const p = s[E] && s[E].enabled,
        d = a[E] && a[E].enabled;
      (p && !d && e[E].disable(), !p && d && e[E].enable());
    }));
  const m = a.direction && a.direction !== s.direction,
    g = s.loop && (a.slidesPerView !== s.slidesPerView || m),
    C = s.loop;
  (m && n && e.changeDirection(), Oe(e.params, a));
  const y = e.params.enabled,
    P = e.params.loop;
  (Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !y ? e.disable() : !f && y && e.enable(),
    (e.currentBreakpoint = l),
    e.emit("_beforeBreakpoint", a),
    n &&
      (g
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !C && P
          ? (e.loopCreate(t), e.updateSlides())
          : C && !P && e.loopDestroy()),
    e.emit("breakpoint", a));
}
function tu(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let s = !1;
  const i = Ee(),
    r = t === "window" ? i.innerHeight : n.clientHeight,
    l = Object.keys(e).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const a = parseFloat(o.substr(1));
        return { value: r * a, point: o };
      }
      return { value: o, point: o };
    });
  l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
  for (let o = 0; o < l.length; o += 1) {
    const { point: a, value: u } = l[o];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (s = a)
      : u <= n.clientWidth && (s = a);
  }
  return s || "max";
}
var nu = { setBreakpoint: eu, getBreakpoint: tu };
function su(e, t) {
  const n = [];
  return (
    e.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((i) => {
            s[i] && n.push(t + i);
          })
        : typeof s == "string" && n.push(t + s);
    }),
    n
  );
}
function iu() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: i, device: r } = e,
    l = su(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: s },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  (t.push(...l), i.classList.add(...t), e.emitContainerClasses());
}
function ru() {
  const e = this,
    { el: t, classNames: n } = e;
  (t.classList.remove(...n), e.emitContainerClasses());
}
var lu = { addClasses: iu, removeClasses: ru };
function au() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: s } = n;
  if (s) {
    const i = e.slides.length - 1,
      r = e.slidesGrid[i] + e.slidesSizesGrid[i] + s * 2;
    e.isLocked = e.size > r;
  } else e.isLocked = e.snapGrid.length === 1;
  (n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"));
}
var ou = { checkOverflow: au },
  si = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function cu(e, t) {
  return function (s) {
    s === void 0 && (s = {});
    const i = Object.keys(s)[0],
      r = s[i];
    if (typeof r != "object" || r === null) {
      Oe(t, s);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in r))
    ) {
      Oe(t, s);
      return;
    }
    (typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Oe(t, s));
  };
}
const Ds = {
    eventsEmitter: lf,
    update: vf,
    translate: Tf,
    transition: Pf,
    slide: Rf,
    loop: zf,
    grabCursor: Vf,
    events: Qf,
    breakpoints: nu,
    checkOverflow: ou,
    classes: lu,
  },
  Rs = {};
let Li = class Ye {
  constructor() {
    let t, n;
    for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
      i[r] = arguments[r];
    (i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Oe({}, n)),
      t && !n.el && (n.el = t));
    const l = Be();
    if (
      n.el &&
      typeof n.el == "string" &&
      l.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        l.querySelectorAll(n.el).forEach((f) => {
          const m = Oe({}, n, { el: f });
          c.push(new Ye(m));
        }),
        c
      );
    }
    const o = this;
    ((o.__swiper__ = !0),
      (o.support = ea()),
      (o.device = ef({ userAgent: n.userAgent })),
      (o.browser = nf()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules));
    const a = {};
    o.modules.forEach((c) => {
      c({
        params: n,
        swiper: o,
        extendParams: cu(n, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      });
    });
    const u = Oe({}, si, a);
    return (
      (o.params = Oe({}, u, Rs, n)),
      (o.originalParams = Oe({}, o.params)),
      (o.passedParams = Oe({}, n)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach((c) => {
          o.on(c, o.params.on[c]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: s } = this,
      i = Ue(n, `.${s.slideClass}, swiper-slide`),
      r = dn(i[0]);
    return dn(t) - r;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t,
      )[0],
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: s } = t;
    t.slides = Ue(n, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const s = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = s.minTranslate(),
      l = (s.maxTranslate() - i) * t + i;
    (s.translateTo(l, typeof n > "u" ? 0 : n),
      s.updateActiveIndex(),
      s.updateSlidesClasses());
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0,
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(n.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    (t.slides.forEach((s) => {
      const i = t.getSlideClasses(s);
      (n.push({ slideEl: s, classNames: i }), t.emit("_slideClass", s, i));
    }),
      t.emit("_slideClasses", n));
  }
  slidesPerViewDynamic(t, n) {
    (t === void 0 && (t = "current"), n === void 0 && (n = !1));
    const s = this,
      {
        params: i,
        slides: r,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: a,
        activeIndex: u,
      } = s;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let f = r[u] ? r[u].swiperSlideSize : 0,
        m;
      for (let g = u + 1; g < r.length; g += 1)
        r[g] &&
          !m &&
          ((f += r[g].swiperSlideSize), (c += 1), f > a && (m = !0));
      for (let g = u - 1; g >= 0; g -= 1)
        r[g] &&
          !m &&
          ((f += r[g].swiperSlideSize), (c += 1), f > a && (m = !0));
    } else if (t === "current")
      for (let f = u + 1; f < r.length; f += 1)
        (n ? l[f] + o[f] - l[u] < a : l[f] - l[u] < a) && (c += 1);
    else for (let f = u - 1; f >= 0; f -= 1) l[u] - l[f] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: s } = t;
    (s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && Dn(t, l);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses());
    function i() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        o = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      (t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses());
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      (i(), s.autoHeight && t.updateAutoHeight());
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const l = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
        r = t.slideTo(l.length - 1, 0, !1, !0);
      } else r = t.slideTo(t.activeIndex, 0, !1, !0);
      r || i();
    }
    (s.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
      t.emit("update"));
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const s = this,
      i = s.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((r) => {
          t === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        n && s.update()),
      s
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let s = t || n.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    ((s.swiper = n),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0));
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(i())
        : Ue(s, i())[0];
    return (
      !l &&
        n.params.createElements &&
        ((l = ds("div", n.params.wrapperClass)),
        s.append(l),
        Ue(s, `.${n.params.slideClass}`).forEach((o) => {
          l.append(o);
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: l,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || ft(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || ft(s, "direction") === "rtl"),
        wrongRTL: ft(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    (n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents());
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((r) => {
        r.complete
          ? Dn(n, r)
          : r.addEventListener("load", (l) => {
              Dn(n, l.target);
            });
      }),
      ni(n),
      (n.initialized = !0),
      ni(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    (t === void 0 && (t = !0), n === void 0 && (n = !0));
    const s = this,
      { params: i, el: r, wrapperEl: l, slides: o } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        i.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          r.removeAttribute("style"),
          l.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((a) => {
              (a.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index"));
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a);
        }),
        t !== !1 && ((s.el.swiper = null), Wc(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Oe(Rs, t);
  }
  static get extendedDefaults() {
    return Rs;
  }
  static get defaults() {
    return si;
  }
  static installModule(t) {
    Ye.prototype.__modules__ || (Ye.prototype.__modules__ = []);
    const n = Ye.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Ye.installModule(n)), Ye)
      : (Ye.installModule(t), Ye);
  }
};
Object.keys(Ds).forEach((e) => {
  Object.keys(Ds[e]).forEach((t) => {
    Li.prototype[t] = Ds[e][t];
  });
});
Li.use([sf, rf]);
const sa = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Pt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function Et(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : Pt(t[s]) && Pt(e[s]) && Object.keys(t[s]).length > 0
          ? t[s].__swiper__
            ? (e[s] = t[s])
            : Et(e[s], t[s])
          : (e[s] = t[s]);
    });
}
function ia(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function ra(e) {
  return (
    e === void 0 && (e = {}),
    e.pagination && typeof e.pagination.el > "u"
  );
}
function la(e) {
  return (e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u");
}
function aa(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    n = [];
  return (
    t.forEach((s) => {
      n.indexOf(s) < 0 && n.push(s);
    }),
    n.join(" ")
  );
}
function fu(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function uu(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: s,
    changedParams: i,
    nextEl: r,
    prevEl: l,
    scrollbarEl: o,
    paginationEl: a,
  } = e;
  const u = i.filter(
      (b) => b !== "children" && b !== "direction" && b !== "wrapperClass",
    ),
    {
      params: c,
      pagination: f,
      navigation: m,
      scrollbar: g,
      virtual: C,
      thumbs: y,
    } = t;
  let P, E, p, d, h, w, L, A;
  (i.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (P = !0),
    i.includes("controller") &&
      s.controller &&
      s.controller.control &&
      c.controller &&
      !c.controller.control &&
      (E = !0),
    i.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      f &&
      !f.el &&
      (p = !0),
    i.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || o) &&
      (c.scrollbar || c.scrollbar === !1) &&
      g &&
      !g.el &&
      (d = !0),
    i.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || l) &&
      (s.navigation.nextEl || r) &&
      (c.navigation || c.navigation === !1) &&
      m &&
      !m.prevEl &&
      !m.nextEl &&
      (h = !0));
  const R = (b) => {
    t[b] &&
      (t[b].destroy(),
      b === "navigation"
        ? (t.isElement && (t[b].prevEl.remove(), t[b].nextEl.remove()),
          (c[b].prevEl = void 0),
          (c[b].nextEl = void 0),
          (t[b].prevEl = void 0),
          (t[b].nextEl = void 0))
        : (t.isElement && t[b].el.remove(),
          (c[b].el = void 0),
          (t[b].el = void 0)));
  };
  (i.includes("loop") &&
    t.isElement &&
    (c.loop && !s.loop ? (w = !0) : !c.loop && s.loop ? (L = !0) : (A = !0)),
    u.forEach((b) => {
      if (Pt(c[b]) && Pt(s[b]))
        (Et(c[b], s[b]),
          (b === "navigation" || b === "pagination" || b === "scrollbar") &&
            "enabled" in s[b] &&
            !s[b].enabled &&
            R(b));
      else {
        const D = s[b];
        (D === !0 || D === !1) &&
        (b === "navigation" || b === "pagination" || b === "scrollbar")
          ? D === !1 && R(b)
          : (c[b] = s[b]);
      }
    }),
    u.includes("controller") &&
      !E &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") &&
      n &&
      C &&
      c.virtual.enabled &&
      ((C.slides = n), C.update(!0)),
    i.includes("children") && n && c.loop && (A = !0),
    P && y.init() && y.update(!0),
    E && (t.controller.control = c.controller.control),
    p &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      f.init(),
      f.render(),
      f.update()),
    d &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-scrollbar"),
        o.part.add("scrollbar"),
        t.el.appendChild(o)),
      o && (c.scrollbar.el = o),
      g.init(),
      g.updateSize(),
      g.setTranslate()),
    h &&
      (t.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          (r.innerHTML = t.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          t.el.appendChild(r)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          (l.innerHTML = t.hostEl.constructor.prevButtonSvg),
          l.part.add("button-prev"),
          t.el.appendChild(l))),
      r && (c.navigation.nextEl = r),
      l && (c.navigation.prevEl = l),
      m.init(),
      m.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev),
    i.includes("direction") && t.changeDirection(s.direction, !1),
    (w || A) && t.loopDestroy(),
    (L || A) && t.loopCreate(),
    t.update());
}
function wr(e, t) {
  e === void 0 && (e = {});
  const n = { on: {} },
    s = {},
    i = {};
  (Et(n, si), (n._emitClasses = !0), (n.init = !1));
  const r = {},
    l = sa.map((a) => a.replace(/_/, "")),
    o = Object.assign({}, e);
  return (
    Object.keys(o).forEach((a) => {
      typeof e[a] > "u" ||
        (l.indexOf(a) >= 0
          ? Pt(e[a])
            ? ((n[a] = {}), (i[a] = {}), Et(n[a], e[a]), Et(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
            ? (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (r[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      (n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a]);
    }),
    { params: n, passedParams: i, rest: r, events: s }
  );
}
function du(e, t) {
  let {
    el: n,
    nextEl: s,
    prevEl: i,
    paginationEl: r,
    scrollbarEl: l,
    swiper: o,
  } = e;
  (ia(t) &&
    s &&
    i &&
    ((o.params.navigation.nextEl = s),
    (o.originalParams.navigation.nextEl = s),
    (o.params.navigation.prevEl = i),
    (o.originalParams.navigation.prevEl = i)),
    ra(t) &&
      r &&
      ((o.params.pagination.el = r), (o.originalParams.pagination.el = r)),
    la(t) &&
      l &&
      ((o.params.scrollbar.el = l), (o.originalParams.scrollbar.el = l)),
    o.init(n));
}
function pu(e, t, n, s, i) {
  const r = [];
  if (!t) return r;
  const l = (a) => {
    r.indexOf(a) < 0 && r.push(a);
  };
  if (n && s) {
    const a = s.map(i),
      u = n.map(i);
    (a.join("") !== u.join("") && l("children"),
      s.length !== n.length && l("children"));
  }
  return (
    sa
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (Pt(e[a]) && Pt(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a]);
            u.length !== c.length
              ? l(a)
              : (u.forEach((f) => {
                  e[a][f] !== t[a][f] && l(a);
                }),
                c.forEach((f) => {
                  e[a][f] !== t[a][f] && l(a);
                }));
          } else e[a] !== t[a] && l(a);
      }),
    r
  );
}
const hu = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Fs(e, t, n) {
  e === void 0 && (e = {});
  const s = [],
    i = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (l, o) => {
      Array.isArray(l) &&
        l.forEach((a) => {
          const u = typeof a.type == "symbol";
          (o === "default" && (o = "container-end"),
            u && a.children
              ? r(a.children, o)
              : a.type &&
                  (a.type.name === "SwiperSlide" ||
                    a.type.name === "AsyncComponentWrapper")
                ? s.push(a)
                : i[o] && i[o].push(a));
        });
    };
  return (
    Object.keys(e).forEach((l) => {
      if (typeof e[l] != "function") return;
      const o = e[l]();
      r(o, l);
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: i }
  );
}
function gu(e, t, n) {
  if (!n) return null;
  const s = (c) => {
      let f = c;
      return (
        c < 0 ? (f = t.length + c) : f >= t.length && (f = f - t.length),
        f
      );
    },
    i = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: l } = n,
    o = e.value.params.loop ? -t.length : 0,
    a = e.value.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = o; c < a; c += 1) c >= r && c <= l && u.push(t[s(c)]);
  return u.map(
    (c) => (
      c.props || (c.props = {}),
      c.props.style || (c.props.style = {}),
      (c.props.swiperRef = e),
      (c.props.style = i),
      Re(c.type, { ...c.props }, c.children)
    ),
  );
}
const nd = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "breakpointsBase",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(e, t) {
      let { slots: n, emit: s } = t;
      const { tag: i, wrapperTag: r } = e,
        l = de("swiper"),
        o = de(null),
        a = de(!1),
        u = de(!1),
        c = de(null),
        f = de(null),
        m = de(null),
        g = { value: [] },
        C = { value: [] },
        y = de(null),
        P = de(null),
        E = de(null),
        p = de(null),
        { params: d, passedParams: h } = wr(e);
      (Fs(n, g, C), (m.value = h), (C.value = g.value));
      const w = () => {
        (Fs(n, g, C), (a.value = !0));
      };
      ((d.onAny = function (R) {
        for (
          var b = arguments.length, D = new Array(b > 1 ? b - 1 : 0), M = 1;
          M < b;
          M++
        )
          D[M - 1] = arguments[M];
        s(R, ...D);
      }),
        Object.assign(d.on, {
          _beforeBreakpoint: w,
          _containerClasses(R, b) {
            l.value = b;
          },
        }));
      const L = { ...d };
      if (
        (delete L.wrapperClass,
        (f.value = new Li(L)),
        f.value.virtual && f.value.params.virtual.enabled)
      ) {
        f.value.virtual.slides = g.value;
        const R = {
          cache: !1,
          slides: g.value,
          renderExternal: (b) => {
            o.value = b;
          },
          renderExternalUpdate: !1,
        };
        (Et(f.value.params.virtual, R), Et(f.value.originalParams.virtual, R));
      }
      (vn(() => {
        !u.value && f.value && (f.value.emitSlidesClasses(), (u.value = !0));
        const { passedParams: R } = wr(e),
          b = pu(R, m.value, g.value, C.value, (D) => D.props && D.props.key);
        ((m.value = R),
          (b.length || a.value) &&
            f.value &&
            !f.value.destroyed &&
            uu({
              swiper: f.value,
              slides: g.value,
              passedParams: R,
              changedParams: b,
              nextEl: y.value,
              prevEl: P.value,
              scrollbarEl: p.value,
              paginationEl: E.value,
            }),
          (a.value = !1));
      }),
        Ti("swiper", f),
        kt(o, () => {
          Xr(() => {
            hu(f.value);
          });
        }),
        Ut(() => {
          c.value &&
            (du(
              {
                el: c.value,
                nextEl: y.value,
                prevEl: P.value,
                paginationEl: E.value,
                scrollbarEl: p.value,
                swiper: f.value,
              },
              d,
            ),
            s("swiper", f.value));
        }),
        yn(() => {
          f.value && !f.value.destroyed && f.value.destroy(!0, !1);
        }));
      function A(R) {
        return d.virtual
          ? gu(f, R, o.value)
          : (R.forEach((b, D) => {
              (b.props || (b.props = {}),
                (b.props.swiperRef = f),
                (b.props.swiperSlideIndex = D));
            }),
            R);
      }
      return () => {
        const { slides: R, slots: b } = Fs(n, g, C);
        return Re(i, { ref: c, class: aa(l.value) }, [
          b["container-start"],
          Re(r, { class: fu(d.wrapperClass) }, [
            b["wrapper-start"],
            A(R),
            b["wrapper-end"],
          ]),
          ia(e) && [
            Re("div", { ref: P, class: "swiper-button-prev" }),
            Re("div", { ref: y, class: "swiper-button-next" }),
          ],
          la(e) && Re("div", { ref: p, class: "swiper-scrollbar" }),
          ra(e) && Re("div", { ref: E, class: "swiper-pagination" }),
          b["container-end"],
        ]);
      };
    },
  },
  sd = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        s = !1;
      const { swiperRef: i } = e,
        r = de(null),
        l = de("swiper-slide"),
        o = de(!1);
      function a(f, m, g) {
        m === r.value && (l.value = g);
      }
      (Ut(() => {
        !i || !i.value || (i.value.on("_slideClass", a), (s = !0));
      }),
        bi(() => {
          s || !i || !i.value || (i.value.on("_slideClass", a), (s = !0));
        }),
        vn(() => {
          !r.value ||
            !i ||
            !i.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (r.value.swiperSlideIndex = e.swiperSlideIndex),
            i.value.destroyed &&
              l.value !== "swiper-slide" &&
              (l.value = "swiper-slide"));
        }),
        yn(() => {
          !i || !i.value || i.value.off("_slideClass", a);
        }));
      const u = Nl(() => ({
        isActive: l.value.indexOf("swiper-slide-active") >= 0,
        isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: l.value.indexOf("swiper-slide-prev") >= 0,
        isNext: l.value.indexOf("swiper-slide-next") >= 0,
      }));
      Ti("swiperSlide", u);
      const c = () => {
        o.value = !0;
      };
      return () =>
        Re(
          e.tag,
          {
            class: aa(`${l.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && i && i.value && i.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: c,
          },
          e.zoom
            ? Re(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof e.zoom == "number" ? e.zoom : void 0,
                },
                [
                  n.default && n.default(u.value),
                  e.lazy &&
                    !o.value &&
                    Re("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(u.value),
                e.lazy &&
                  !o.value &&
                  Re("div", { class: "swiper-lazy-preloader" }),
              ],
        );
    },
  };
function id(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  const r = Be(),
    l = Ee();
  ((t.keyboard = { enabled: !1 }),
    n({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }));
  function o(c) {
    if (!t.enabled) return;
    const { rtlTranslate: f } = t;
    let m = c;
    m.originalEvent && (m = m.originalEvent);
    const g = m.keyCode || m.charCode,
      C = t.params.keyboard.pageUpDown,
      y = C && g === 33,
      P = C && g === 34,
      E = g === 37,
      p = g === 39,
      d = g === 38,
      h = g === 40;
    if (
      (!t.allowSlideNext &&
        ((t.isHorizontal() && p) || (t.isVertical() && h) || P)) ||
      (!t.allowSlidePrev &&
        ((t.isHorizontal() && E) || (t.isVertical() && d) || y))
    )
      return !1;
    if (
      !(m.shiftKey || m.altKey || m.ctrlKey || m.metaKey) &&
      !(
        r.activeElement &&
        r.activeElement.nodeName &&
        (r.activeElement.nodeName.toLowerCase() === "input" ||
          r.activeElement.nodeName.toLowerCase() === "textarea")
      )
    ) {
      if (t.params.keyboard.onlyInViewport && (y || P || E || p || d || h)) {
        let w = !1;
        if (
          es(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
          es(t.el, `.${t.params.slideActiveClass}`).length === 0
        )
          return;
        const L = t.el,
          A = L.clientWidth,
          R = L.clientHeight,
          b = l.innerWidth,
          D = l.innerHeight,
          M = Ql(L);
        f && (M.left -= L.scrollLeft);
        const x = [
          [M.left, M.top],
          [M.left + A, M.top],
          [M.left, M.top + R],
          [M.left + A, M.top + R],
        ];
        for (let O = 0; O < x.length; O += 1) {
          const S = x[O];
          if (S[0] >= 0 && S[0] <= b && S[1] >= 0 && S[1] <= D) {
            if (S[0] === 0 && S[1] === 0) continue;
            w = !0;
          }
        }
        if (!w) return;
      }
      (t.isHorizontal()
        ? ((y || P || E || p) &&
            (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
          (((P || p) && !f) || ((y || E) && f)) && t.slideNext(),
          (((y || E) && !f) || ((P || p) && f)) && t.slidePrev())
        : ((y || P || d || h) &&
            (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
          (P || h) && t.slideNext(),
          (y || d) && t.slidePrev()),
        i("keyPress", g));
    }
  }
  function a() {
    t.keyboard.enabled ||
      (r.addEventListener("keydown", o), (t.keyboard.enabled = !0));
  }
  function u() {
    t.keyboard.enabled &&
      (r.removeEventListener("keydown", o), (t.keyboard.enabled = !1));
  }
  (s("init", () => {
    t.params.keyboard.enabled && a();
  }),
    s("destroy", () => {
      t.keyboard.enabled && u();
    }),
    Object.assign(t.keyboard, { enable: a, disable: u }));
}
function Ai(e, t, n, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let r = Ue(e.el, `.${s[i]}`)[0];
          (r || ((r = ds("div", s[i])), (r.className = s[i]), e.el.append(r)),
            (n[i] = r),
            (t[i] = r));
        }
      }),
    n
  );
}
function rd(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  (n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null }));
  const r = (y) => (Array.isArray(y) ? y : [y]).filter((P) => !!P);
  function l(y) {
    let P;
    return y &&
      typeof y == "string" &&
      t.isElement &&
      ((P = t.el.querySelector(y)), P)
      ? P
      : (y &&
          (typeof y == "string" && (P = [...document.querySelectorAll(y)]),
          t.params.uniqueNavElements &&
            typeof y == "string" &&
            P.length > 1 &&
            t.el.querySelectorAll(y).length === 1 &&
            (P = t.el.querySelector(y))),
        y && !P ? y : P);
  }
  function o(y, P) {
    const E = t.params.navigation;
    ((y = r(y)),
      y.forEach((p) => {
        p &&
          (p.classList[P ? "add" : "remove"](...E.disabledClass.split(" ")),
          p.tagName === "BUTTON" && (p.disabled = P),
          t.params.watchOverflow &&
            t.enabled &&
            p.classList[t.isLocked ? "add" : "remove"](E.lockClass));
      }));
  }
  function a() {
    const { nextEl: y, prevEl: P } = t.navigation;
    if (t.params.loop) {
      (o(P, !1), o(y, !1));
      return;
    }
    (o(P, t.isBeginning && !t.params.rewind),
      o(y, t.isEnd && !t.params.rewind));
  }
  function u(y) {
    (y.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev")));
  }
  function c(y) {
    (y.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext")));
  }
  function f() {
    const y = t.params.navigation;
    if (
      ((t.params.navigation = Ai(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(y.nextEl || y.prevEl))
    )
      return;
    let P = l(y.nextEl),
      E = l(y.prevEl);
    (Object.assign(t.navigation, { nextEl: P, prevEl: E }),
      (P = r(P)),
      (E = r(E)));
    const p = (d, h) => {
      (d && d.addEventListener("click", h === "next" ? c : u),
        !t.enabled && d && d.classList.add(...y.lockClass.split(" ")));
    };
    (P.forEach((d) => p(d, "next")), E.forEach((d) => p(d, "prev")));
  }
  function m() {
    let { nextEl: y, prevEl: P } = t.navigation;
    ((y = r(y)), (P = r(P)));
    const E = (p, d) => {
      (p.removeEventListener("click", d === "next" ? c : u),
        p.classList.remove(...t.params.navigation.disabledClass.split(" ")));
    };
    (y.forEach((p) => E(p, "next")), P.forEach((p) => E(p, "prev")));
  }
  (s("init", () => {
    t.params.navigation.enabled === !1 ? C() : (f(), a());
  }),
    s("toEdge fromEdge lock unlock", () => {
      a();
    }),
    s("destroy", () => {
      m();
    }),
    s("enable disable", () => {
      let { nextEl: y, prevEl: P } = t.navigation;
      if (((y = r(y)), (P = r(P)), t.enabled)) {
        a();
        return;
      }
      [...y, ...P]
        .filter((E) => !!E)
        .forEach((E) => E.classList.add(t.params.navigation.lockClass));
    }),
    s("click", (y, P) => {
      let { nextEl: E, prevEl: p } = t.navigation;
      ((E = r(E)), (p = r(p)));
      const d = P.target;
      if (t.params.navigation.hideOnClick && !p.includes(d) && !E.includes(d)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === d || t.pagination.el.contains(d))
        )
          return;
        let h;
        (E.length
          ? (h = E[0].classList.contains(t.params.navigation.hiddenClass))
          : p.length &&
            (h = p[0].classList.contains(t.params.navigation.hiddenClass)),
          i(h === !0 ? "navigationShow" : "navigationHide"),
          [...E, ...p]
            .filter((w) => !!w)
            .forEach((w) =>
              w.classList.toggle(t.params.navigation.hiddenClass),
            ));
      }
    }));
  const g = () => {
      (t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        f(),
        a());
    },
    C = () => {
      (t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        m());
    };
  Object.assign(t.navigation, {
    enable: g,
    disable: C,
    update: a,
    init: f,
    destroy: m,
  });
}
function ct(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function ld(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  const r = "swiper-pagination";
  (n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (p) => p,
      formatFractionTotal: (p) => p,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] }));
  let l,
    o = 0;
  const a = (p) => (Array.isArray(p) ? p : [p]).filter((d) => !!d);
  function u() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function c(p, d) {
    const { bulletActiveClass: h } = t.params.pagination;
    p &&
      ((p = p[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
      p &&
        (p.classList.add(`${h}-${d}`),
        (p = p[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
        p && p.classList.add(`${h}-${d}-${d}`)));
  }
  function f(p) {
    const d = p.target.closest(ct(t.params.pagination.bulletClass));
    if (!d) return;
    p.preventDefault();
    const h = dn(d) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === h) return;
      const w = t.realIndex,
        L = t.getSlideIndexByData(h),
        A = t.getSlideIndexByData(t.realIndex),
        R = (b) => {
          const D = t.activeIndex;
          t.loopFix({ direction: b, activeSlideIndex: L, slideTo: !1 });
          const M = t.activeIndex;
          D === M && t.slideToLoop(w, 0, !1, !0);
        };
      if (L > t.slides.length - t.loopedSlides) R(L > A ? "next" : "prev");
      else if (t.params.centeredSlides) {
        const b =
          t.params.slidesPerView === "auto"
            ? t.slidesPerViewDynamic()
            : Math.ceil(parseFloat(t.params.slidesPerView, 10));
        L < Math.floor(b / 2) && R("prev");
      }
      t.slideToLoop(h);
    } else t.slideTo(h);
  }
  function m() {
    const p = t.rtl,
      d = t.params.pagination;
    if (u()) return;
    let h = t.pagination.el;
    h = a(h);
    let w, L;
    const A =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      R = t.params.loop
        ? Math.ceil(A / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((L = t.previousRealIndex || 0),
          (w =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
          ? ((w = t.snapIndex), (L = t.previousSnapIndex))
          : ((L = t.previousIndex || 0), (w = t.activeIndex || 0)),
      d.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const b = t.pagination.bullets;
      let D, M, x;
      if (
        (d.dynamicBullets &&
          ((l = ti(b[0], t.isHorizontal() ? "width" : "height")),
          h.forEach((O) => {
            O.style[t.isHorizontal() ? "width" : "height"] =
              `${l * (d.dynamicMainBullets + 4)}px`;
          }),
          d.dynamicMainBullets > 1 &&
            L !== void 0 &&
            ((o += w - (L || 0)),
            o > d.dynamicMainBullets - 1
              ? (o = d.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (D = Math.max(w - o, 0)),
          (M = D + (Math.min(b.length, d.dynamicMainBullets) - 1)),
          (x = (M + D) / 2)),
        b.forEach((O) => {
          const S = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (_) => `${d.bulletActiveClass}${_}`,
            ),
          ]
            .map((_) =>
              typeof _ == "string" && _.includes(" ") ? _.split(" ") : _,
            )
            .flat();
          O.classList.remove(...S);
        }),
        h.length > 1)
      )
        b.forEach((O) => {
          const S = dn(O);
          (S === w
            ? O.classList.add(...d.bulletActiveClass.split(" "))
            : t.isElement && O.setAttribute("part", "bullet"),
            d.dynamicBullets &&
              (S >= D &&
                S <= M &&
                O.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),
              S === D && c(O, "prev"),
              S === M && c(O, "next")));
        });
      else {
        const O = b[w];
        if (
          (O && O.classList.add(...d.bulletActiveClass.split(" ")),
          t.isElement &&
            b.forEach((S, _) => {
              S.setAttribute("part", _ === w ? "bullet-active" : "bullet");
            }),
          d.dynamicBullets)
        ) {
          const S = b[D],
            _ = b[M];
          for (let I = D; I <= M; I += 1)
            b[I] &&
              b[I].classList.add(...`${d.bulletActiveClass}-main`.split(" "));
          (c(S, "prev"), c(_, "next"));
        }
      }
      if (d.dynamicBullets) {
        const O = Math.min(b.length, d.dynamicMainBullets + 4),
          S = (l * O - l) / 2 - x * l,
          _ = p ? "right" : "left";
        b.forEach((I) => {
          I.style[t.isHorizontal() ? _ : "top"] = `${S}px`;
        });
      }
    }
    h.forEach((b, D) => {
      if (
        (d.type === "fraction" &&
          (b.querySelectorAll(ct(d.currentClass)).forEach((M) => {
            M.textContent = d.formatFractionCurrent(w + 1);
          }),
          b.querySelectorAll(ct(d.totalClass)).forEach((M) => {
            M.textContent = d.formatFractionTotal(R);
          })),
        d.type === "progressbar")
      ) {
        let M;
        d.progressbarOpposite
          ? (M = t.isHorizontal() ? "vertical" : "horizontal")
          : (M = t.isHorizontal() ? "horizontal" : "vertical");
        const x = (w + 1) / R;
        let O = 1,
          S = 1;
        (M === "horizontal" ? (O = x) : (S = x),
          b.querySelectorAll(ct(d.progressbarFillClass)).forEach((_) => {
            ((_.style.transform = `translate3d(0,0,0) scaleX(${O}) scaleY(${S})`),
              (_.style.transitionDuration = `${t.params.speed}ms`));
          }));
      }
      (d.type === "custom" && d.renderCustom
        ? ((b.innerHTML = d.renderCustom(t, w + 1, R)),
          D === 0 && i("paginationRender", b))
        : (D === 0 && i("paginationRender", b), i("paginationUpdate", b)),
        t.params.watchOverflow &&
          t.enabled &&
          b.classList[t.isLocked ? "add" : "remove"](d.lockClass));
    });
  }
  function g() {
    const p = t.params.pagination;
    if (u()) return;
    const d =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.slides.length;
    let h = t.pagination.el;
    h = a(h);
    let w = "";
    if (p.type === "bullets") {
      let L = t.params.loop
        ? Math.ceil(d / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && L > d && (L = d);
      for (let A = 0; A < L; A += 1)
        p.renderBullet
          ? (w += p.renderBullet.call(t, A, p.bulletClass))
          : (w += `<${p.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${p.bulletClass}"></${p.bulletElement}>`);
    }
    (p.type === "fraction" &&
      (p.renderFraction
        ? (w = p.renderFraction.call(t, p.currentClass, p.totalClass))
        : (w = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`)),
      p.type === "progressbar" &&
        (p.renderProgressbar
          ? (w = p.renderProgressbar.call(t, p.progressbarFillClass))
          : (w = `<span class="${p.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      h.forEach((L) => {
        (p.type !== "custom" && (L.innerHTML = w || ""),
          p.type === "bullets" &&
            t.pagination.bullets.push(
              ...L.querySelectorAll(ct(p.bulletClass)),
            ));
      }),
      p.type !== "custom" && i("paginationRender", h[0]));
  }
  function C() {
    t.params.pagination = Ai(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" },
    );
    const p = t.params.pagination;
    if (!p.el) return;
    let d;
    (typeof p.el == "string" && t.isElement && (d = t.el.querySelector(p.el)),
      !d &&
        typeof p.el == "string" &&
        (d = [...document.querySelectorAll(p.el)]),
      d || (d = p.el),
      !(!d || d.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof p.el == "string" &&
          Array.isArray(d) &&
          d.length > 1 &&
          ((d = [...t.el.querySelectorAll(p.el)]),
          d.length > 1 &&
            (d = d.filter((h) => es(h, ".swiper")[0] === t.el)[0])),
        Array.isArray(d) && d.length === 1 && (d = d[0]),
        Object.assign(t.pagination, { el: d }),
        (d = a(d)),
        d.forEach((h) => {
          (p.type === "bullets" &&
            p.clickable &&
            h.classList.add(...(p.clickableClass || "").split(" ")),
            h.classList.add(p.modifierClass + p.type),
            h.classList.add(
              t.isHorizontal() ? p.horizontalClass : p.verticalClass,
            ),
            p.type === "bullets" &&
              p.dynamicBullets &&
              (h.classList.add(`${p.modifierClass}${p.type}-dynamic`),
              (o = 0),
              p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)),
            p.type === "progressbar" &&
              p.progressbarOpposite &&
              h.classList.add(p.progressbarOppositeClass),
            p.clickable && h.addEventListener("click", f),
            t.enabled || h.classList.add(p.lockClass));
        })));
  }
  function y() {
    const p = t.params.pagination;
    if (u()) return;
    let d = t.pagination.el;
    (d &&
      ((d = a(d)),
      d.forEach((h) => {
        (h.classList.remove(p.hiddenClass),
          h.classList.remove(p.modifierClass + p.type),
          h.classList.remove(
            t.isHorizontal() ? p.horizontalClass : p.verticalClass,
          ),
          p.clickable &&
            (h.classList.remove(...(p.clickableClass || "").split(" ")),
            h.removeEventListener("click", f)));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((h) =>
          h.classList.remove(...p.bulletActiveClass.split(" ")),
        ));
  }
  (s("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const p = t.params.pagination;
    let { el: d } = t.pagination;
    ((d = a(d)),
      d.forEach((h) => {
        (h.classList.remove(p.horizontalClass, p.verticalClass),
          h.classList.add(
            t.isHorizontal() ? p.horizontalClass : p.verticalClass,
          ));
      }));
  }),
    s("init", () => {
      t.params.pagination.enabled === !1 ? E() : (C(), g(), m());
    }),
    s("activeIndexChange", () => {
      typeof t.snapIndex > "u" && m();
    }),
    s("snapIndexChange", () => {
      m();
    }),
    s("snapGridLengthChange", () => {
      (g(), m());
    }),
    s("destroy", () => {
      y();
    }),
    s("enable disable", () => {
      let { el: p } = t.pagination;
      p &&
        ((p = a(p)),
        p.forEach((d) =>
          d.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ));
    }),
    s("lock unlock", () => {
      m();
    }),
    s("click", (p, d) => {
      const h = d.target,
        w = a(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        w &&
        w.length > 0 &&
        !h.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && h === t.navigation.nextEl) ||
            (t.navigation.prevEl && h === t.navigation.prevEl))
        )
          return;
        const L = w[0].classList.contains(t.params.pagination.hiddenClass);
        (i(L === !0 ? "paginationShow" : "paginationHide"),
          w.forEach((A) =>
            A.classList.toggle(t.params.pagination.hiddenClass),
          ));
      }
    }));
  const P = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: p } = t.pagination;
      (p &&
        ((p = a(p)),
        p.forEach((d) =>
          d.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        C(),
        g(),
        m());
    },
    E = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: p } = t.pagination;
      (p &&
        ((p = a(p)),
        p.forEach((d) =>
          d.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        y());
    };
  Object.assign(t.pagination, {
    enable: P,
    disable: E,
    render: g,
    update: m,
    init: C,
    destroy: y,
  });
}
function ad(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e;
  const r = Be();
  let l = !1,
    o = null,
    a = null,
    u,
    c,
    f,
    m;
  (n({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (t.scrollbar = { el: null, dragEl: null }));
  function g() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const { scrollbar: x, rtlTranslate: O } = t,
      { dragEl: S, el: _ } = x,
      I = t.params.scrollbar,
      k = t.params.loop ? t.progressLoop : t.progress;
    let H = c,
      q = (f - c) * k;
    (O
      ? ((q = -q), q > 0 ? ((H = c - q), (q = 0)) : -q + c > f && (H = f + q))
      : q < 0
        ? ((H = c + q), (q = 0))
        : q + c > f && (H = f - q),
      t.isHorizontal()
        ? ((S.style.transform = `translate3d(${q}px, 0, 0)`),
          (S.style.width = `${H}px`))
        : ((S.style.transform = `translate3d(0px, ${q}px, 0)`),
          (S.style.height = `${H}px`)),
      I.hide &&
        (clearTimeout(o),
        (_.style.opacity = 1),
        (o = setTimeout(() => {
          ((_.style.opacity = 0), (_.style.transitionDuration = "400ms"));
        }, 1e3))));
  }
  function C(x) {
    !t.params.scrollbar.el ||
      !t.scrollbar.el ||
      (t.scrollbar.dragEl.style.transitionDuration = `${x}ms`);
  }
  function y() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const { scrollbar: x } = t,
      { dragEl: O, el: S } = x;
    ((O.style.width = ""),
      (O.style.height = ""),
      (f = t.isHorizontal() ? S.offsetWidth : S.offsetHeight),
      (m =
        t.size /
        (t.virtualSize +
          t.params.slidesOffsetBefore -
          (t.params.centeredSlides ? t.snapGrid[0] : 0))),
      t.params.scrollbar.dragSize === "auto"
        ? (c = f * m)
        : (c = parseInt(t.params.scrollbar.dragSize, 10)),
      t.isHorizontal()
        ? (O.style.width = `${c}px`)
        : (O.style.height = `${c}px`),
      m >= 1 ? (S.style.display = "none") : (S.style.display = ""),
      t.params.scrollbar.hide && (S.style.opacity = 0),
      t.params.watchOverflow &&
        t.enabled &&
        x.el.classList[t.isLocked ? "add" : "remove"](
          t.params.scrollbar.lockClass,
        ));
  }
  function P(x) {
    return t.isHorizontal() ? x.clientX : x.clientY;
  }
  function E(x) {
    const { scrollbar: O, rtlTranslate: S } = t,
      { el: _ } = O;
    let I;
    ((I =
      (P(x) -
        Ql(_)[t.isHorizontal() ? "left" : "top"] -
        (u !== null ? u : c / 2)) /
      (f - c)),
      (I = Math.max(Math.min(I, 1), 0)),
      S && (I = 1 - I));
    const k = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * I;
    (t.updateProgress(k),
      t.setTranslate(k),
      t.updateActiveIndex(),
      t.updateSlidesClasses());
  }
  function p(x) {
    const O = t.params.scrollbar,
      { scrollbar: S, wrapperEl: _ } = t,
      { el: I, dragEl: k } = S;
    ((l = !0),
      (u =
        x.target === k
          ? P(x) -
            x.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"]
          : null),
      x.preventDefault(),
      x.stopPropagation(),
      (_.style.transitionDuration = "100ms"),
      (k.style.transitionDuration = "100ms"),
      E(x),
      clearTimeout(a),
      (I.style.transitionDuration = "0ms"),
      O.hide && (I.style.opacity = 1),
      t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
      i("scrollbarDragStart", x));
  }
  function d(x) {
    const { scrollbar: O, wrapperEl: S } = t,
      { el: _, dragEl: I } = O;
    l &&
      (x.preventDefault ? x.preventDefault() : (x.returnValue = !1),
      E(x),
      (S.style.transitionDuration = "0ms"),
      (_.style.transitionDuration = "0ms"),
      (I.style.transitionDuration = "0ms"),
      i("scrollbarDragMove", x));
  }
  function h(x) {
    const O = t.params.scrollbar,
      { scrollbar: S, wrapperEl: _ } = t,
      { el: I } = S;
    l &&
      ((l = !1),
      t.params.cssMode &&
        ((t.wrapperEl.style["scroll-snap-type"] = ""),
        (_.style.transitionDuration = "")),
      O.hide &&
        (clearTimeout(a),
        (a = Zn(() => {
          ((I.style.opacity = 0), (I.style.transitionDuration = "400ms"));
        }, 1e3))),
      i("scrollbarDragEnd", x),
      O.snapOnRelease && t.slideToClosest());
  }
  function w(x) {
    const { scrollbar: O, params: S } = t,
      _ = O.el;
    if (!_) return;
    const I = _,
      k = S.passiveListeners ? { passive: !1, capture: !1 } : !1,
      H = S.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!I) return;
    const q = x === "on" ? "addEventListener" : "removeEventListener";
    (I[q]("pointerdown", p, k),
      r[q]("pointermove", d, k),
      r[q]("pointerup", h, H));
  }
  function L() {
    !t.params.scrollbar.el || !t.scrollbar.el || w("on");
  }
  function A() {
    !t.params.scrollbar.el || !t.scrollbar.el || w("off");
  }
  function R() {
    const { scrollbar: x, el: O } = t;
    t.params.scrollbar = Ai(t, t.originalParams.scrollbar, t.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const S = t.params.scrollbar;
    if (!S.el) return;
    let _;
    (typeof S.el == "string" && t.isElement && (_ = t.el.querySelector(S.el)),
      !_ && typeof S.el == "string"
        ? (_ = r.querySelectorAll(S.el))
        : _ || (_ = S.el),
      t.params.uniqueNavElements &&
        typeof S.el == "string" &&
        _.length > 1 &&
        O.querySelectorAll(S.el).length === 1 &&
        (_ = O.querySelector(S.el)),
      _.length > 0 && (_ = _[0]),
      _.classList.add(t.isHorizontal() ? S.horizontalClass : S.verticalClass));
    let I;
    (_ &&
      ((I = _.querySelector(`.${t.params.scrollbar.dragClass}`)),
      I || ((I = ds("div", t.params.scrollbar.dragClass)), _.append(I))),
      Object.assign(x, { el: _, dragEl: I }),
      S.draggable && L(),
      _ &&
        _.classList[t.enabled ? "remove" : "add"](
          t.params.scrollbar.lockClass,
        ));
  }
  function b() {
    const x = t.params.scrollbar,
      O = t.scrollbar.el;
    (O &&
      O.classList.remove(
        t.isHorizontal() ? x.horizontalClass : x.verticalClass,
      ),
      A());
  }
  (s("init", () => {
    t.params.scrollbar.enabled === !1 ? M() : (R(), y(), g());
  }),
    s("update resize observerUpdate lock unlock", () => {
      y();
    }),
    s("setTranslate", () => {
      g();
    }),
    s("setTransition", (x, O) => {
      C(O);
    }),
    s("enable disable", () => {
      const { el: x } = t.scrollbar;
      x &&
        x.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass);
    }),
    s("destroy", () => {
      b();
    }));
  const D = () => {
      (t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
        t.scrollbar.el &&
          t.scrollbar.el.classList.remove(
            t.params.scrollbar.scrollbarDisabledClass,
          ),
        R(),
        y(),
        g());
    },
    M = () => {
      (t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
        t.scrollbar.el &&
          t.scrollbar.el.classList.add(
            t.params.scrollbar.scrollbarDisabledClass,
          ),
        b());
    };
  Object.assign(t.scrollbar, {
    enable: D,
    disable: M,
    updateSize: y,
    setTranslate: g,
    init: R,
    destroy: b,
  });
}
function od(e) {
  let { swiper: t, extendParams: n, on: s } = e;
  (n({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
    },
  }),
    (t.a11y = { clicked: !1 }));
  let i = null;
  function r(S) {
    const _ = i;
    _.length !== 0 && ((_.innerHTML = ""), (_.innerHTML = S));
  }
  const l = (S) => (Array.isArray(S) ? S : [S]).filter((_) => !!_);
  function o(S) {
    const _ = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(S).replace(/x/g, _);
  }
  function a(S) {
    ((S = l(S)),
      S.forEach((_) => {
        _.setAttribute("tabIndex", "0");
      }));
  }
  function u(S) {
    ((S = l(S)),
      S.forEach((_) => {
        _.setAttribute("tabIndex", "-1");
      }));
  }
  function c(S, _) {
    ((S = l(S)),
      S.forEach((I) => {
        I.setAttribute("role", _);
      }));
  }
  function f(S, _) {
    ((S = l(S)),
      S.forEach((I) => {
        I.setAttribute("aria-roledescription", _);
      }));
  }
  function m(S, _) {
    ((S = l(S)),
      S.forEach((I) => {
        I.setAttribute("aria-controls", _);
      }));
  }
  function g(S, _) {
    ((S = l(S)),
      S.forEach((I) => {
        I.setAttribute("aria-label", _);
      }));
  }
  function C(S, _) {
    ((S = l(S)),
      S.forEach((I) => {
        I.setAttribute("id", _);
      }));
  }
  function y(S, _) {
    ((S = l(S)),
      S.forEach((I) => {
        I.setAttribute("aria-live", _);
      }));
  }
  function P(S) {
    ((S = l(S)),
      S.forEach((_) => {
        _.setAttribute("aria-disabled", !0);
      }));
  }
  function E(S) {
    ((S = l(S)),
      S.forEach((_) => {
        _.setAttribute("aria-disabled", !1);
      }));
  }
  function p(S) {
    if (S.keyCode !== 13 && S.keyCode !== 32) return;
    const _ = t.params.a11y,
      I = S.target;
    (t.pagination &&
      t.pagination.el &&
      (I === t.pagination.el || t.pagination.el.contains(S.target)) &&
      !S.target.matches(ct(t.params.pagination.bulletClass))) ||
      (t.navigation &&
        t.navigation.nextEl &&
        I === t.navigation.nextEl &&
        ((t.isEnd && !t.params.loop) || t.slideNext(),
        t.isEnd ? r(_.lastSlideMessage) : r(_.nextSlideMessage)),
      t.navigation &&
        t.navigation.prevEl &&
        I === t.navigation.prevEl &&
        ((t.isBeginning && !t.params.loop) || t.slidePrev(),
        t.isBeginning ? r(_.firstSlideMessage) : r(_.prevSlideMessage)),
      t.pagination &&
        I.matches(ct(t.params.pagination.bulletClass)) &&
        I.click());
  }
  function d() {
    if (t.params.loop || t.params.rewind || !t.navigation) return;
    const { nextEl: S, prevEl: _ } = t.navigation;
    (_ && (t.isBeginning ? (P(_), u(_)) : (E(_), a(_))),
      S && (t.isEnd ? (P(S), u(S)) : (E(S), a(S))));
  }
  function h() {
    return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
  }
  function w() {
    return h() && t.params.pagination.clickable;
  }
  function L() {
    const S = t.params.a11y;
    h() &&
      t.pagination.bullets.forEach((_) => {
        (t.params.pagination.clickable &&
          (a(_),
          t.params.pagination.renderBullet ||
            (c(_, "button"),
            g(
              _,
              S.paginationBulletMessage.replace(/\{\{index\}\}/, dn(_) + 1),
            ))),
          _.matches(ct(t.params.pagination.bulletActiveClass))
            ? _.setAttribute("aria-current", "true")
            : _.removeAttribute("aria-current"));
      });
  }
  const A = (S, _, I) => {
      (a(S),
        S.tagName !== "BUTTON" &&
          (c(S, "button"), S.addEventListener("keydown", p)),
        g(S, I),
        m(S, _));
    },
    R = () => {
      t.a11y.clicked = !0;
    },
    b = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t.destroyed || (t.a11y.clicked = !1);
        });
      });
    },
    D = (S) => {
      if (t.a11y.clicked) return;
      const _ = S.target.closest(`.${t.params.slideClass}, swiper-slide`);
      if (!_ || !t.slides.includes(_)) return;
      const I = t.slides.indexOf(_) === t.activeIndex,
        k =
          t.params.watchSlidesProgress &&
          t.visibleSlides &&
          t.visibleSlides.includes(_);
      I ||
        k ||
        (S.sourceCapabilities && S.sourceCapabilities.firesTouchEvents) ||
        (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
        t.slideTo(t.slides.indexOf(_), 0));
    },
    M = () => {
      const S = t.params.a11y;
      (S.itemRoleDescriptionMessage &&
        f(t.slides, S.itemRoleDescriptionMessage),
        S.slideRole && c(t.slides, S.slideRole));
      const _ = t.slides.length;
      S.slideLabelMessage &&
        t.slides.forEach((I, k) => {
          const H = t.params.loop
              ? parseInt(I.getAttribute("data-swiper-slide-index"), 10)
              : k,
            q = S.slideLabelMessage
              .replace(/\{\{index\}\}/, H + 1)
              .replace(/\{\{slidesLength\}\}/, _);
          g(I, q);
        });
    },
    x = () => {
      const S = t.params.a11y;
      t.el.append(i);
      const _ = t.el;
      (S.containerRoleDescriptionMessage &&
        f(_, S.containerRoleDescriptionMessage),
        S.containerMessage && g(_, S.containerMessage));
      const I = t.wrapperEl,
        k = S.id || I.getAttribute("id") || `swiper-wrapper-${o(16)}`,
        H = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
      (C(I, k), y(I, H), M());
      let { nextEl: q, prevEl: fe } = t.navigation ? t.navigation : {};
      ((q = l(q)),
        (fe = l(fe)),
        q && q.forEach((ue) => A(ue, k, S.nextSlideMessage)),
        fe && fe.forEach((ue) => A(ue, k, S.prevSlideMessage)),
        w() &&
          (Array.isArray(t.pagination.el)
            ? t.pagination.el
            : [t.pagination.el]
          ).forEach((Ce) => {
            Ce.addEventListener("keydown", p);
          }),
        t.el.addEventListener("focus", D, !0),
        t.el.addEventListener("pointerdown", R, !0),
        t.el.addEventListener("pointerup", b, !0));
    };
  function O() {
    i && i.remove();
    let { nextEl: S, prevEl: _ } = t.navigation ? t.navigation : {};
    ((S = l(S)),
      (_ = l(_)),
      S && S.forEach((I) => I.removeEventListener("keydown", p)),
      _ && _.forEach((I) => I.removeEventListener("keydown", p)),
      w() &&
        (Array.isArray(t.pagination.el)
          ? t.pagination.el
          : [t.pagination.el]
        ).forEach((k) => {
          k.removeEventListener("keydown", p);
        }),
      t.el.removeEventListener("focus", D, !0),
      t.el.removeEventListener("pointerdown", R, !0),
      t.el.removeEventListener("pointerup", b, !0));
  }
  (s("beforeInit", () => {
    ((i = ds("span", t.params.a11y.notificationClass)),
      i.setAttribute("aria-live", "assertive"),
      i.setAttribute("aria-atomic", "true"));
  }),
    s("afterInit", () => {
      t.params.a11y.enabled && x();
    }),
    s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      t.params.a11y.enabled && M();
    }),
    s("fromEdge toEdge afterInit lock unlock", () => {
      t.params.a11y.enabled && d();
    }),
    s("paginationUpdate", () => {
      t.params.a11y.enabled && L();
    }),
    s("destroy", () => {
      t.params.a11y.enabled && O();
    }));
}
function cd(e) {
  let { swiper: t, extendParams: n, on: s, emit: i, params: r } = e;
  ((t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    }));
  let l,
    o,
    a = r && r.autoplay ? r.autoplay.delay : 3e3,
    u = r && r.autoplay ? r.autoplay.delay : 3e3,
    c,
    f = new Date().getTime,
    m,
    g,
    C,
    y,
    P,
    E;
  function p(k) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (k.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", p), b()));
  }
  const d = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (m = !0) : m && ((u = c), (m = !1));
      const k = t.autoplay.paused ? c : f + u - new Date().getTime();
      ((t.autoplay.timeLeft = k),
        i("autoplayTimeLeft", k, k / a),
        (o = requestAnimationFrame(() => {
          d();
        })));
    },
    h = () => {
      let k;
      return (
        t.virtual && t.params.virtual.enabled
          ? (k = t.slides.filter((q) =>
              q.classList.contains("swiper-slide-active"),
            )[0])
          : (k = t.slides[t.activeIndex]),
        k ? parseInt(k.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    w = (k) => {
      if (t.destroyed || !t.autoplay.running) return;
      (cancelAnimationFrame(o), d());
      let H = typeof k > "u" ? t.params.autoplay.delay : k;
      ((a = t.params.autoplay.delay), (u = t.params.autoplay.delay));
      const q = h();
      (!Number.isNaN(q) &&
        q > 0 &&
        typeof k > "u" &&
        ((H = q), (a = q), (u = q)),
        (c = H));
      const fe = t.params.speed,
        ue = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(fe, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, fe, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
                ? (t.slideNext(fe, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(0, fe, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((f = new Date().getTime()),
              requestAnimationFrame(() => {
                w();
              })));
        };
      return (
        H > 0
          ? (clearTimeout(l),
            (l = setTimeout(() => {
              ue();
            }, H)))
          : requestAnimationFrame(() => {
              ue();
            }),
        H
      );
    },
    L = () => {
      ((t.autoplay.running = !0), w(), i("autoplayStart"));
    },
    A = () => {
      ((t.autoplay.running = !1),
        clearTimeout(l),
        cancelAnimationFrame(o),
        i("autoplayStop"));
    },
    R = (k, H) => {
      if (t.destroyed || !t.autoplay.running) return;
      (clearTimeout(l), k || (E = !0));
      const q = () => {
        (i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", p)
            : b());
      };
      if (((t.autoplay.paused = !0), H)) {
        (P && (c = t.params.autoplay.delay), (P = !1), q());
        return;
      }
      ((c = (c || t.params.autoplay.delay) - (new Date().getTime() - f)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), q()));
    },
    b = () => {
      (t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((f = new Date().getTime()),
        E ? ((E = !1), w(c)) : w(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    D = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const k = Be();
      (k.visibilityState === "hidden" && ((E = !0), R(!0)),
        k.visibilityState === "visible" && b());
    },
    M = (k) => {
      k.pointerType === "mouse" &&
        ((E = !0), !(t.animating || t.autoplay.paused) && R(!0));
    },
    x = (k) => {
      k.pointerType === "mouse" && t.autoplay.paused && b();
    },
    O = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", M),
        t.el.addEventListener("pointerleave", x));
    },
    S = () => {
      (t.el.removeEventListener("pointerenter", M),
        t.el.removeEventListener("pointerleave", x));
    },
    _ = () => {
      Be().addEventListener("visibilitychange", D);
    },
    I = () => {
      Be().removeEventListener("visibilitychange", D);
    };
  (s("init", () => {
    t.params.autoplay.enabled && (O(), _(), (f = new Date().getTime()), L());
  }),
    s("destroy", () => {
      (S(), I(), t.autoplay.running && A());
    }),
    s("beforeTransitionStart", (k, H, q) => {
      t.destroyed ||
        !t.autoplay.running ||
        (q || !t.params.autoplay.disableOnInteraction ? R(!0, !0) : A());
    }),
    s("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          A();
          return;
        }
        ((g = !0),
          (C = !1),
          (E = !1),
          (y = setTimeout(() => {
            ((E = !0), (C = !0), R(!0));
          }, 200)));
      }
    }),
    s("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !g)) {
        if (
          (clearTimeout(y),
          clearTimeout(l),
          t.params.autoplay.disableOnInteraction)
        ) {
          ((C = !1), (g = !1));
          return;
        }
        (C && t.params.cssMode && b(), (C = !1), (g = !1));
      }
    }),
    s("slideChange", () => {
      t.destroyed || !t.autoplay.running || (P = !0);
    }),
    Object.assign(t.autoplay, { start: L, stop: A, pause: R, resume: b }));
}
function mu(e) {
  const {
    effect: t,
    swiper: n,
    on: s,
    setTranslate: i,
    setTransition: r,
    overwriteParams: l,
    perspective: o,
    recreateShadows: a,
    getEffectParams: u,
  } = e;
  (s("beforeInit", () => {
    if (n.params.effect !== t) return;
    (n.classNames.push(`${n.params.containerModifierClass}${t}`),
      o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`));
    const f = l ? l() : {};
    (Object.assign(n.params, f), Object.assign(n.originalParams, f));
  }),
    s("setTranslate", () => {
      n.params.effect === t && i();
    }),
    s("setTransition", (f, m) => {
      n.params.effect === t && r(m);
    }),
    s("transitionEnd", () => {
      if (n.params.effect === t && a) {
        if (!u || !u().slideShadows) return;
        (n.slides.forEach((f) => {
          f.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
          ).forEach((m) => m.remove());
        }),
          a());
      }
    }));
  let c;
  s("virtualUpdate", () => {
    n.params.effect === t &&
      (n.slides.length || (c = !0),
      requestAnimationFrame(() => {
        c && n.slides && n.slides.length && (i(), (c = !1));
      }));
  });
}
function vu(e, t) {
  const n = Zl(t);
  return (
    n !== t &&
      ((n.style.backfaceVisibility = "hidden"),
      (n.style["-webkit-backface-visibility"] = "hidden")),
    n
  );
}
function yu(e) {
  let { swiper: t, duration: n, transformElements: s } = e;
  const { activeIndex: i } = t;
  if (t.params.virtualTranslate && n !== 0) {
    let r = !1,
      l;
    ((l = s),
      l.forEach((o) => {
        Jc(o, () => {
          if (r || !t || t.destroyed) return;
          ((r = !0), (t.animating = !1));
          const a = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          t.wrapperEl.dispatchEvent(a);
        });
      }));
  }
}
function fd(e) {
  let { swiper: t, extendParams: n, on: s } = e;
  (n({ fadeEffect: { crossFade: !1 } }),
    mu({
      effect: "fade",
      swiper: t,
      on: s,
      setTranslate: () => {
        const { slides: l } = t,
          o = t.params.fadeEffect;
        for (let a = 0; a < l.length; a += 1) {
          const u = t.slides[a];
          let f = -u.swiperSlideOffset;
          t.params.virtualTranslate || (f -= t.translate);
          let m = 0;
          t.isHorizontal() || ((m = f), (f = 0));
          const g = t.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(u.progress), 0)
              : 1 + Math.min(Math.max(u.progress, -1), 0),
            C = vu(o, u);
          ((C.style.opacity = g),
            (C.style.transform = `translate3d(${f}px, ${m}px, 0px)`));
        }
      },
      setTransition: (l) => {
        const o = t.slides.map((a) => Zl(a));
        (o.forEach((a) => {
          a.style.transitionDuration = `${l}ms`;
        }),
          yu({ swiper: t, duration: l, transformElements: o }));
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode,
      }),
    }));
}
export {
  Sa as $,
  ju as A,
  Su as B,
  vo as C,
  wi as D,
  Eu as E,
  Au as F,
  Ga as G,
  Q as H,
  St as I,
  Cu as J,
  Lu as K,
  Mu as L,
  qu as M,
  Us as N,
  qn as O,
  Ru as P,
  ae as Q,
  bu as R,
  sc as S,
  Uu as T,
  me as U,
  ic as V,
  no as W,
  rs as X,
  Bu as Y,
  Wu as Z,
  Il as _,
  mt as a,
  Ou as a0,
  Bl as a1,
  is as a2,
  Zu as a3,
  Qu as a4,
  Pu as a5,
  Iu as a6,
  Fu as a7,
  Tt as a8,
  Vu as a9,
  $u as aa,
  zu as ab,
  Gu as ac,
  So as ad,
  td as ae,
  ed as af,
  sd as ag,
  nd as ah,
  rd as ai,
  ld as aj,
  od as ak,
  Ku as al,
  Du as am,
  Er as an,
  oe as ao,
  Hs as ap,
  Yu as aq,
  Xu as ar,
  Nu as as,
  cd as at,
  id as au,
  fd as av,
  Ju as aw,
  ad as ax,
  Tu as b,
  pe as c,
  de as d,
  wu as e,
  go as f,
  Ta as g,
  ku as h,
  On as i,
  ho as j,
  xu as k,
  lo as l,
  Nl as m,
  Re as n,
  yn as o,
  Ti as p,
  kt as q,
  pi as r,
  ja as s,
  _u as t,
  qr as u,
  Xr as v,
  Hu as w,
  pt as x,
  Ut as y,
  nt as z,
};
