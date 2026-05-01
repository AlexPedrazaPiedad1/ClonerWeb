const l = {
    listItem: "list-item",
    oListItem: "o-list-item",
    list: "group-list-item",
    oList: "group-o-list-item",
    span: "span",
  },
  u = () => (++u.i).toString();
u.i = 0;
const S = (e) => {
    const t = L(e),
      i = [];
    for (let s = 0; s < t.length; s++) i.push(y(t[s]));
    return { key: u(), children: i };
  },
  a = (e, t = []) => ({
    key: u(),
    type: e.type,
    text: "text" in e ? e.text : void 0,
    node: e,
    children: t,
  }),
  x = (e) => a({ type: l.span, text: e, spans: [] }),
  L = (e) => {
    const t = e.slice(0);
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      if (s.type === l.listItem || s.type === l.oListItem) {
        const n = [s];
        for (; t[i + 1] && t[i + 1].type === s.type; )
          (n.push(t[i + 1]), t.splice(i, 1));
        s.type === l.listItem
          ? (t[i] = { type: l.list, items: n })
          : (t[i] = { type: l.oList, items: n });
      }
    }
    return t;
  },
  y = (e) => {
    if ("text" in e) return a(e, N(e.spans, e));
    if ("items" in e) {
      const t = [];
      for (let i = 0; i < e.items.length; i++) t.push(y(e.items[i]));
      return a(e, t);
    }
    return a(e);
  },
  N = (e, t, i) => {
    if (!e.length) return [x(t.text)];
    const s = e.slice(0);
    s.sort((o, r) => o.start - r.start || r.end - o.end);
    const n = [];
    for (let o = 0; o < s.length; o++) {
      const r = s[o],
        h = (i && i.start) || 0,
        d = r.start - h,
        m = r.end - h,
        T = t.text.slice(d, m),
        f = [];
      for (let p = o; p < s.length; p++) {
        const c = s[p];
        c !== r &&
          (c.start >= r.start && c.end <= r.end
            ? (f.push(c), s.splice(p, 1), p--)
            : c.start < r.end &&
              c.end > r.start &&
              (f.push({ ...c, end: r.end }), (s[p] = { ...c, start: r.end })));
      }
      o === 0 && d > 0 && n.push(x(t.text.slice(0, d)));
      const I = { ...r, text: T };
      (n.push(a(I, N(f, { ...t, text: T }, r))),
        m < t.text.length &&
          n.push(x(t.text.slice(m, s[o + 1] ? s[o + 1].start - h : void 0))));
    }
    return n;
  },
  k = (e, t) => g(S(e).children, t),
  g = (e, t) => {
    const i = [];
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        o = t(n.type, n.node, n.text, g(n.children, t), n.key);
      o != null && i.push(o);
    }
    return i;
  },
  z = {
    [l.listItem]: "listItem",
    [l.oListItem]: "oListItem",
    [l.list]: "list",
    [l.oList]: "oList",
  },
  v = (e) => (t, i, s, n, o) => {
    const r = e[z[t] || t];
    if (r) return r({ type: t, node: i, text: s, children: n, key: o });
  };
export { k as s, v as w };
