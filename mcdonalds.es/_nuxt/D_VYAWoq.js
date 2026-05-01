import { _ as l } from "./n9BDgNm5.js";
import { _ as u, I as d } from "./w36zW0QG.js";
import { l as p, m as s, A as m, O as f, Q as x } from "./CG2MQ2lF.js";
const e = {
    default: { size: "xl", direction: "front" },
    size: {
      xs: "30px",
      s: "50px",
      sm: "64px",
      l: "80px",
      lg: "96px",
      xl: "120px",
      xxl: "140px",
      "2xl": "168px",
      "3xl": "192px",
      "5xl": "288px",
    },
    direction: {
      front: "/images/coin-front.svg",
      left: "/images/coin-left.svg",
      right: "/images/coin-right.svg",
    },
  },
  y = p({
    name: "Coin",
    props: {
      direction: {
        type: String,
        default: () => e.default.direction,
        validator(t) {
          return Object.keys(e.direction).includes(t);
        },
      },
      size: {
        type: String,
        default: () => e.default.size,
        validator(t) {
          return Object.keys(e.size).includes(t);
        },
      },
      rotate: { type: Number, default: 0 },
      blur: { type: Boolean, default: !1 },
      blurAmount: {
        type: Number,
        default: 1,
        validator(t) {
          return t >= 0;
        },
      },
      opacity: {
        type: Number,
        default: 1,
        validator(t) {
          return t >= 0 && t <= 1;
        },
      },
    },
    setup(t) {
      const o = s(() => e.direction[t.direction]),
        r = s(() => {
          const i = `width: ${e.size[t.size]}; height: ${e.size[t.size]};`,
            a = `transform: rotate(${t.rotate}deg);`,
            c = t.blur ? `filter: blur(${t.blurAmount}px);` : "",
            n = t.opacity !== 1 ? `opacity: ${t.opacity};` : "";
          return d(i, a, c, n);
        });
      return { coinSrc: o, coinStyle: r };
    },
  }),
  _ = { "aria-hidden": "true" };
function g(t, o, r, i, a, c) {
  const n = l;
  return (
    f(),
    m("div", _, [
      x(
        n,
        {
          image: { url: t.coinSrc, alt: "Coin" },
          "wrapper-style": t.coinStyle,
        },
        null,
        8,
        ["image", "wrapper-style"],
      ),
    ])
  );
}
const $ = u(y, [["render", g]]);
export { $ as _ };
