import { _ as C } from "./n9BDgNm5.js";
import { g as a } from "./DKtf60Sy.js";
import { S as I } from "./BWsqEc1I.js";
import { _ as D } from "./w36zW0QG.js";
import {
  l as T,
  A,
  O as P,
  _ as k,
  U as W,
  Y as j,
  $ as B,
  Q as L,
  d as R,
  y as b,
  v as $,
  D as E,
} from "./CG2MQ2lF.js";
function F(s, o) {
  ((s = a.utils.toArray(s)), (o = o || {}));
  let e = a.timeline({
      repeat: o.repeat,
      paused: o.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => e.totalTime(e.rawTime() + e.duration() * 100),
    }),
    r = s.length,
    f = s[0].offsetLeft,
    m = [],
    l = [],
    d = [],
    p = 0,
    x = (o.speed || 1) * 100,
    w = o.snap === !1 ? (t) => t : a.utils.snap(o.snap || 1),
    S,
    u,
    g,
    c,
    _,
    n;
  for (
    a.set(s, {
      xPercent: (t, i) => {
        let h = (l[t] = parseFloat(a.getProperty(i, "width", "px")));
        return (
          (d[t] = w(
            (parseFloat(a.getProperty(i, "x", "px")) / h) * 100 +
              a.getProperty(i, "xPercent"),
          )),
          d[t]
        );
      },
    }),
      a.set(s, { x: 0 }),
      S =
        s[r - 1].offsetLeft +
        (d[r - 1] / 100) * l[r - 1] -
        f +
        s[r - 1].offsetWidth * a.getProperty(s[r - 1], "scaleX") +
        (parseFloat(o.paddingRight) || 0),
      n = 0;
    n < r;
    n++
  )
    ((_ = s[n]),
      (u = (d[n] / 100) * l[n]),
      (g = _.offsetLeft + u - f),
      (c = g + l[n] * a.getProperty(_, "scaleX")),
      e
        .to(_, { xPercent: w(((u - c) / l[n]) * 100), duration: c / x }, 0)
        .fromTo(
          _,
          { xPercent: w(((u - c + S) / l[n]) * 100) },
          {
            xPercent: d[n],
            duration: (u - c + S - u) / x,
            immediateRender: !1,
          },
          c / x,
        )
        .add("label" + n, g / x),
      (m[n] = g / x));
  function v(t, i) {
    ((i = i || {}), Math.abs(t - p) > r / 2 && (t += t > p ? -r : r));
    let h = a.utils.wrap(0, r, t),
      y = m[h];
    return (
      y > e.time() != t > p &&
        ((i.modifiers = { time: a.utils.wrap(0, e.duration()) }),
        (y += e.duration() * (t > p ? 1 : -1))),
      (p = h),
      (i.overwrite = !0),
      e.tweenTo(y, i)
    );
  }
  return (
    (e.next = (t) => v(p + 1, t)),
    (e.previous = (t) => v(p - 1, t)),
    (e.current = () => p),
    (e.toIndex = (t, i) => v(t, i)),
    (e.times = m),
    e.progress(1, !0).progress(0, !0),
    o.reversed && (e.vars.onReverseComplete(), e.reverse()),
    e
  );
}
const J = {
    cards: [
      {
        image: {
          url: "https://images.prismic.io/mcdonalds/aDSBASdWJ-7kSjIE_bigmac.png?auto=format,compress",
          alt: "",
        },
        text: "i’m lovin’ it",
      },
      {
        image: {
          url: "https://images.prismic.io/mcdonalds/aDSBACdWJ-7kSjID_happymeal.png?auto=format,compress",
          alt: "",
        },
        text: "i’m lovin’ it",
      },
      {
        image: {
          url: "https://images.prismic.io/mcdonalds/aDSA_ydWJ-7kSjIC_mcensalada.png?auto=format,compress",
          alt: "",
        },
        text: "i’m lovin’ it",
      },
      {
        image: {
          url: "https://images.prismic.io/mcdonalds/aDSA_idWJ-7kSjIB_mcfries.png?auto=format,compress",
          alt: "",
        },
        text: "i’m lovin’ it",
      },
      {
        image: {
          url: "https://images.prismic.io/mcdonalds/aDSA_SdWJ-7kSjIA_mccafe.png?auto=format,compress",
          alt: "",
        },
        text: "i’m lovin’ it",
      },
    ],
  },
  N = T({
    inheritAttrs: !1,
    props: {
      speed: { type: Number, required: !1, default: 1 },
      cards: { type: Array, required: !1, default: J.cards },
    },
    setup(s) {
      const o = R(null),
        e = R(null);
      let r;
      const f = () => {
        if (!e.value || !a || !I) return;
        a.registerPlugin(I);
        const m = a.utils.toArray(".item");
        r = F(m, {
          paused: !1,
          repeat: -1,
          speed: s.speed,
          invalidateOnRefresh: !0,
        });
      };
      return (
        b(() => {
          $(() => {
            f();
          });
        }),
        E(() => {
          r && r.kill();
        }),
        { mainContainerRef: o, containerRef: e }
      );
    },
  }),
  O = {
    ref: "mainContainerRef",
    "aria-hidden": "true",
    class: "overflow-hidden",
  },
  X = {
    ref: "containerRef",
    class:
      "flex flex-row items-center justify-center gap-4 w-full overflow-hidden",
  },
  M = {
    class:
      "font-bold text-center text-nowrap text-[96px] md:text-[120px] pt-[32px] tablet:pt-[56px] desktop:pt-[64px]",
  },
  q = {
    class:
      "w-[175px] h-[175px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px]",
  };
function U(s, o, e, r, f, m) {
  const l = C;
  return (
    P(),
    A(
      "div",
      O,
      [
        k(
          "div",
          X,
          [
            (P(!0),
            A(
              W,
              null,
              j(
                s.cards,
                (d, p) => (
                  P(),
                  A(
                    "div",
                    {
                      key: p,
                      class:
                        "flex flex-row items-center justify-center gap-4 item",
                    },
                    [
                      k("p", M, B(d.text), 1),
                      k("div", q, [
                        L(
                          l,
                          { image: d.image, "wrapper-class": "w-full h-full" },
                          null,
                          8,
                          ["image"],
                        ),
                      ]),
                    ],
                  )
                ),
              ),
              128,
            )),
          ],
          512,
        ),
      ],
      512,
    )
  );
}
const H = D(N, [["render", U]]);
export { H as _ };
