import { _ as w } from "./CkoE9dcZ.js";
import { _, j as x, A as c } from "./w36zW0QG.js";
import { _ as k } from "./n9BDgNm5.js";
import { g as u } from "./DKtf60Sy.js";
import {
  l as v,
  A as f,
  O as b,
  _ as t,
  Q as i,
  X as h,
  d as r,
  y,
} from "./CG2MQ2lF.js";
const C = v({
    name: "ProductHeader",
    components: { MCDTitle: x },
    props: {
      title: { type: String, required: !0 },
      titleAs: {
        type: String,
        default: () => c.default.as,
        validator(e) {
          return Object.keys(c.as).includes(e);
        },
      },
      fast: { type: Boolean, default: !1 },
      imageDesktop: { type: Object, default: null },
      imageMobile: { type: Object, default: null },
      paddingMore: { type: Boolean, default: !1 },
      breadcrumbClick: { type: Function, default: () => {} },
    },
    setup(e) {
      const l = "bg-gradient-neutral-100",
        m =
          "text-black min-h-[264px] tablet:min-h-[284px] desktop:min-h-[358px]",
        d = r(null),
        o = r(null),
        n = r(null),
        a = r(null),
        p = () => {
          n.value &&
            u.to(n.value, {
              height: "0%",
              duration: e.fast ? 0.3 : 0.6,
              ease: "power2.inOut",
              onComplete: () => g(),
            });
        },
        s = () => {
          a.value &&
            u.fromTo(
              a.value,
              { y: -50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: e.fast ? 0.4 : 0.8,
                ease: "power2.inOut",
                delay: e.fast ? 0.03 : 0.1,
              },
            );
        },
        g = () => {
          o.value &&
            u.fromTo(
              o.value,
              { scaleY: 0 },
              {
                scaleY: 1,
                duration: e.fast ? 0.35 : 0.7,
                delay: e.fast ? 0.05 : 0.2,
                ease: "power4.out",
                transformOrigin: "center bottom",
                onComplete: () => s(),
              },
            );
        };
      return (
        y(() => {
          p();
        }),
        {
          titleProp: e.title,
          headerRef: d,
          svgRef: o,
          whiteBackgroundRef: n,
          gradientColorTheme: l,
          textColorClass: m,
          contentRef: a,
        }
      );
    },
  }),
  B = {
    ref: "whiteBackgroundRef",
    class: "bg-white w-full absolute bottom-0 left-0 z-50",
    style: { height: "100%", transition: "height 0.7s ease" },
  },
  M = {
    class:
      "w-full items-start justify-center tablet:px-6 hidden tablet:block px-4 desktop:px-[120px] relative z-[60]",
  },
  j = {
    class:
      "w-full min-h-[280px] max-h-[360px] tablet:min-h-[280px] tablet:max-h-[360px] desktop:max-h-[424px] z-20 h-full overflow-hidden block tablet:hidden",
  },
  z = {
    class:
      "w-full min-h-[280px] tablet:min-h-[280px] tablet:max-h-[360px] desktop:max-h-[424px] z-20 h-full overflow-hidden hidden tablet:block",
  },
  R = {
    ref: "svgRef",
    class: "w-full absolute bottom-[35%] tablet:bottom-[30%] z-30",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 171",
    fill: "none",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: { "transform-origin": "center bottom", scaley: "0" },
  };
function D(e, l, m, d, o, n) {
  const a = w,
    p = x,
    s = k;
  return (
    b(),
    f(
      "section",
      {
        ref: "headerRef",
        class: h([
          "relative flex w-full flex-col items-start bg-gradient-neutral-100 pb-4",
          [
            e.paddingMore
              ? "pt-[80px] tablet:pt-[100px] desktop:pt-[100px]"
              : "pt-[49px] tablet:pt-[65px] desktop:pt-[81px]",
          ],
        ]),
      },
      [
        t("div", B, null, 512),
        t(
          "div",
          {
            ref: "contentRef",
            class: h([
              "relative z-40 w-full flex flex-col justify-start items-center h-full py-4 gap-4",
              e.textColorClass,
            ]),
            style: { opacity: "0", transform: "translateY(-50px)" },
          },
          [
            t("div", M, [
              i(
                a,
                { mode: "simple", onBreadcrumbClick: e.breadcrumbClick },
                null,
                8,
                ["onBreadcrumbClick"],
              ),
            ]),
            i(
              p,
              {
                "title-as": e.titleAs,
                title: e.titleProp,
                size: "xl",
                class: "z-30",
              },
              null,
              8,
              ["title-as", "title"],
            ),
            t("div", j, [
              i(
                s,
                {
                  image: {
                    url: e.imageMobile?.url || e.imageDesktop?.mobile?.url,
                    alt: e.imageMobile?.alt || e.titleProp,
                  },
                  "wrapper-class":
                    "w-full mx-auto h-full min-h-[280px] max-h-[360px] object-contain tablet:w-full tablet:object-contain tablet:max-h-[360px] desktop:max-h-[424px]",
                },
                null,
                8,
                ["image"],
              ),
            ]),
            t("div", z, [
              i(
                s,
                {
                  image: {
                    url: e.imageDesktop?.url,
                    alt: e.imageDesktop?.alt || e.titleProp,
                  },
                  "wrapper-class":
                    "w-full mx-auto h-full min-h-[280px] object-contain tablet:w-full tablet:object-contain tablet:max-h-[360px] desktop:max-h-[424px]",
                },
                null,
                8,
                ["image"],
              ),
            ]),
          ],
          2,
        ),
        (b(),
        f(
          "svg",
          R,
          [
            ...(l[0] ||
              (l[0] = [
                t(
                  "path",
                  {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M0 0.363295L0 170.363H719.684C460.823 170.313 216.328 109.066 0 0.363295ZM720.316 170.363H1440V0.363281C1223.67 109.066 979.177 170.313 720.316 170.363Z",
                    fill: "white",
                  },
                  null,
                  -1,
                ),
              ])),
          ],
          512,
        )),
        l[1] ||
          (l[1] = t(
            "div",
            {
              class:
                "absolute bottom-0 w-full h-[36%] tablet:h-[31%] bg-white z-20",
            },
            null,
            -1,
          )),
      ],
      2,
    )
  );
}
const S = _(C, [["render", D]]);
export { S as _ };
