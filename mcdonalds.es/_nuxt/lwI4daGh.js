import { _ as h } from "./D18dnFZp.js";
import { _ as y } from "./0ezNE6nl.js";
import { _ as B } from "./BJqPt_HL.js";
import { _ as b } from "./C-otgeyt.js";
import { _ as g } from "./mLrOcWp5.js";
import { f as w, a5 as x } from "./w36zW0QG.js";
import { u as S } from "./Dd6G2nWB.js";
import { u as C } from "./D87woA3U.js";
import {
  l as N,
  N as r,
  W as $,
  O as o,
  _ as s,
  Q as n,
  Z as p,
  u as t,
  X as z,
  A,
  P as T,
} from "./CG2MQ2lF.js";
import "./tJXeJJ_G.js";
import "./n9BDgNm5.js";
import "./9UZMSW1R.js";
import "./BMQmZPly.js";
import "./D7a1xk7w.js";
import "./9C9qpSPh.js";
import "./Dn2iLLNP.js";
import "./Ca9Ptn7z.js";
import "./DMEQSfw8.js";
import "./D8jQnJCR.js";
import "./CR2X5H6X.js";
import "./fwO26FrS.js";
import "./DKtf60Sy.js";
import "./BWsqEc1I.js";
import "./3AjKDk5D.js";
import "./BcttA3Rz.js";
import "./D_VYAWoq.js";
import "./CkoE9dcZ.js";
import "./Bj0JfLHo.js";
import "./X_wUNWL3.js";
import "./BGfOVFyB.js";
import "./DNNWU6PG.js";
import "./DhdId782.js";
import "./CLk6oGrE.js";
const v = { class: "app-wrapper" },
  F = { class: "w-full mx-auto my-0" },
  L = { key: 1, class: "block tablet:hidden" },
  ft = N({
    __name: "products",
    setup(O) {
      const a = C(),
        e = w(),
        { flyingButtonLinkUrl: i, prefooter: m } = S();
      return (_, V) => {
        const l = h,
          c = y,
          u = B,
          d = b,
          f = g,
          k = x;
        return (
          o(),
          r(
            k,
            { name: "base" },
            {
              default: $(() => [
                s("div", v, [
                  n(l, { "no-scroll": !0 }),
                  t(i) && !t(e).isApp
                    ? (o(),
                      r(
                        c,
                        { key: 0, "flying-button-link-url": t(i) },
                        null,
                        8,
                        ["flying-button-link-url"],
                      ))
                    : p("", !0),
                  s(
                    "main",
                    {
                      class: z([
                        "flex-1 absolute top-0 z-10 w-full",
                        { "z-10": !t(a).isOpen, "z-50": t(a).isOpen },
                      ]),
                    },
                    [
                      s("div", F, [T(_.$slots, "default")]),
                      t(e).isApp
                        ? p("", !0)
                        : (o(),
                          r(
                            u,
                            {
                              key: 0,
                              "newsletter-data": t(m).newsletter,
                              "app-data": t(m).app,
                            },
                            null,
                            8,
                            ["newsletter-data", "app-data"],
                          )),
                      t(e).isApp
                        ? p("", !0)
                        : (o(),
                          A("div", L, [
                            n(d, { "hide-tablet": !0, "hide-desktop": !0 }),
                          ])),
                      n(f),
                    ],
                    2,
                  ),
                ]),
              ]),
              _: 3,
            },
          )
        );
      };
    },
  });
export { ft as default };
