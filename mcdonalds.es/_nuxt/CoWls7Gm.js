import { _ as g } from "./n9BDgNm5.js";
import { u as p } from "./CiCdwUBr.js";
import { _ as d } from "./w36zW0QG.js";
import { l as k, A as f, O as v, Q as x, X as h, m as t } from "./CG2MQ2lF.js";
const s = {
    default: { type: "cheese" },
    type: {
      cheese: {
        mobile: "/images/backgrounds/cheese-mobile.svg",
        tablet: "/images/backgrounds/cheese-tablet.svg",
        desktop: "/images/backgrounds/cheese-desktop.svg",
      },
      cheeseSmall: {
        mobile: "/images/backgrounds/cheese-mobile-small.svg",
        tablet: "/images/backgrounds/cheese-tablet-small.svg",
        desktop: "/images/backgrounds/cheese-desktop-small.svg",
      },
      coffee: {
        mobile: "/images/backgrounds/coffee-mobile.svg",
        tablet: "/images/backgrounds/coffee-tablet.svg",
        desktop: "/images/backgrounds/coffee-desktop.svg",
      },
      blue: {
        mobile: "/images/backgrounds/blue-mobile.svg",
        tablet: "/images/backgrounds/blue-tablet.svg",
        desktop: "/images/backgrounds/blue-desktop.svg",
      },
      mcd: {
        mobile: "/images/backgrounds/mymcd-mobile.svg",
        tablet: "/images/backgrounds/mymcd-tablet.svg",
        desktop: "/images/backgrounds/mymcd-desktop.svg",
      },
      confetti: {
        mobile: "/images/backgrounds/confetti-mobile.svg",
        tablet: "/images/backgrounds/confetti-tablet.svg",
        desktop: "/images/backgrounds/confetti-desktop.svg",
      },
      regalo: {
        mobile: "/images/backgrounds/regalo-mobile.svg",
        tablet: "/images/backgrounds/regalo-tablet.svg",
        desktop: "/images/backgrounds/regalo-desktop.svg",
      },
      circulo: {
        mobile: "/images/backgrounds/circulo-mobile.svg",
        tablet: "/images/backgrounds/circulo-tablet.svg",
        desktop: "/images/backgrounds/circulo-desktop.svg",
      },
    },
  },
  n = {
    blue: {
      mobile: "max-h-[372px]",
      tablet: "max-h-[344px]",
      desktop: "max-h-[472px]",
    },
    mcd: {
      mobile: "max-h-[622px]",
      tablet: "max-h-[596px]",
      desktop: "max-h-[1076px]",
    },
    coffee: {
      mobile: "max-h-[360px]",
      tablet: "max-h-[360px]",
      desktop: "max-h-[360px]",
    },
    default: {
      mobile: "max-h-[1800px]",
      tablet: "max-h-[1300px]",
      desktop: "max-h-[1131px]",
    },
    confetti: {
      mobile: "max-h-[1800px]",
      tablet: "max-h-[1300px]",
      desktop: "max-h-[1131px]",
    },
  },
  y = k({
    name: "Background",
    props: {
      type: {
        type: String,
        default: () => s.default.type,
        validator(e) {
          return Object.keys(s.type).includes(e);
        },
      },
      maxHeight: { type: String, default: null },
    },
    setup(e) {
      const o = p(),
        a = t(() => n[e.type] || n.default),
        b = t(() => s.type[e.type].mobile),
        i = t(() => s.type[e.type].tablet),
        c = t(() => s.type[e.type].desktop),
        m = t(() =>
          o.isMobile.value ? b.value : o.isTablet.value ? i.value : c.value,
        ),
        r = t(() =>
          e.maxHeight
            ? e.maxHeight
            : o.isMobile.value
              ? a.value.mobile
              : o.isTablet.value
                ? a.value.tablet
                : a.value.desktop,
        ),
        u = t(() => {
          const l = {
            blue: {
              mobile: "bottom-[-20px]",
              tablet: "bottom-0",
              desktop: "bottom-0",
            },
            coffee: {
              mobile: "bottom-40",
              tablet: "bottom-60",
              desktop: "bottom-[400px]",
            },
            mcd: {
              mobile: "bottom-0 ",
              tablet: "bottom-0 ",
              desktop: "bottom-0",
            },
            circulo: {
              mobile: "bottom-0",
              tablet: "bottom-[15%]",
              desktop: "bottom-[5%]",
            },
            regalo: {
              mobile: "-bottom-[40%]",
              tablet: "-bottom-[30%]",
              desktop: "-bottom-[30%]",
            },
            confetti: {
              mobile: "top-0 mt-4",
              tablet: "top-0 mt-4",
              desktop: "top-0 mt-4",
            },
          };
          return l[e.type]
            ? o.isMobile.value
              ? l[e.type].mobile
              : o.isTablet.value
                ? l[e.type].tablet
                : l[e.type].desktop
            : "";
        });
      return {
        classes: t(() => [
          "w-full absolute left-0 object-contain",
          r.value,
          u.value,
          e.type === "confetti" ? "z-0" : "",
        ]),
        currentSource: m,
      };
    },
  });
function _(e, o, a, b, i, c) {
  const m = g;
  return (
    v(),
    f(
      "div",
      { class: h(["pointer-events-none", e.classes]) },
      [
        x(
          m,
          {
            image: { url: e.currentSource, alt: "" },
            "wrapper-class": "w-full h-full object-contain",
          },
          null,
          8,
          ["image"],
        ),
      ],
      2,
    )
  );
}
const T = d(y, [["render", _]]);
export { T as _ };
