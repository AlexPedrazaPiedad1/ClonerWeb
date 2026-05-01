import { _ as m } from "./n9BDgNm5.js";
import { u as y } from "./CiCdwUBr.js";
import { _ as w } from "./w36zW0QG.js";
import { l as f, A as k, O as z, Q as G, X as _, m as r } from "./CG2MQ2lF.js";
const a = {
    default: { type: "zigzag", color: "white" },
    type: {
      circles: {
        mobile: "/images/separators/circles-mobile.svg",
        mobileGold: "/images/separators/circles-mobile-gold.svg",
        tablet: "/images/separators/circles-tablet.svg",
        tabletGold: "/images/separators/circles-tablet-gold.svg",
        desktop: "/images/separators/circles-desktop.svg",
        desktopGold: "/images/separators/circles-desktop-gold.svg",
      },
      zigzag: {
        mobile: "/images/separators/zigzag-mobile.svg",
        mobileGold: "/images/separators/zigzag-mobile-gold.svg",
        tablet: "/images/separators/zigzag-tablet.svg",
        tabletGold: "/images/separators/zigzag-tablet-gold.svg",
        desktop: "/images/separators/zigzag-desktop.svg",
        desktopGold: "/images/separators/zigzag-desktop-gold.svg",
      },
      wave: {
        mobile: "/images/separators/wave-mobile.svg",
        tablet: "/images/separators/wave-tablet.svg",
        desktop: "/images/separators/wave-desktop.svg",
        mobileGold: "/images/separators/wave-mobile-gold.svg",
        tabletGold: "/images/separators/wave-tablet-gold.svg",
        desktopGold: "/images/separators/wave-desktop-gold.svg",
        mobileWhite: "/images/separators/wave-mobile-white.svg",
        tabletWhite: "/images/separators/wave-tablet-white.svg",
        desktopWhite: "/images/separators/wave-desktop-white.svg",
        mobileGray: "/images/separators/wave-mobile-gray.svg",
        tabletGray: "/images/separators/wave-tablet-gray.svg",
        desktopGray: "/images/separators/wave-desktop-gray.svg",
        mobileGreen: "/images/separators/wave-mobile-green.svg",
        tabletGreen: "/images/separators/wave-tablet-green.svg",
        desktopGreen: "/images/separators/wave-desktop-green.svg",
      },
      biggood: {
        mobile: "/images/separators/biggood-mobile.svg",
        tablet: "/images/separators/biggood-tablet.svg",
        desktop: "/images/separators/biggood-desktop.svg",
      },
    },
    color: { white: "", gold: "", gray: "", green: "" },
  },
  h = f({
    name: "Separator",
    components: { MCDImage: m },
    props: {
      class: { type: [String, Object, Array], default: "" },
      type: {
        type: String,
        default: () => a.default.type,
        validator(e) {
          return Object.keys(a.type).includes(e);
        },
      },
      color: {
        type: String,
        default: () => a.default.color,
        validator(e) {
          return Object.keys(a.color).includes(e);
        },
      },
      flip: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = y(),
        g = r(() => (e.flip ? "transform rotate-180" : "")),
        l = r(() =>
          Object.keys(a.type).includes(e.type) ? e.type : a.default.type,
        ),
        p = r(() => {
          const s = l.value,
            n = a.type[s],
            d = ["circles", "zigzag", "wave"].includes(s) && e.color === "gold",
            v = s === "wave" && e.color === "white",
            b = s === "wave" && e.color === "gray",
            u = s === "wave" && e.color === "green",
            o = t.isMobile.value
              ? "mobile"
              : t.isTablet.value
                ? "tablet"
                : "desktop";
          return v
            ? a.type.wave[`${o}White`]
            : d
              ? n[`${o}Gold`]
              : b
                ? a.type.wave[`${o}Gray`]
                : u
                  ? a.type.wave[`${o}Green`]
                  : n[o];
        }),
        c = r(() => [
          "w-full object-cover transform overflow-x-clip",
          g.value,
          t.isDesktop.value ? "h-auto" : "h-full",
        ]),
        i = r(
          () =>
            ({
              circles: "translate-y-[-2px] scale-[1.05]",
              zigzag: "translate-y-[-2px] scale-[1.05]",
              wave: "translate-y-[-2px] scale-[1.05]",
              biggood: "translate-y-[0px] scale-[1.05]",
            })[l.value],
        );
      return { bp: t, classes: c, currentSrc: p, separatorTranslateClass: i };
    },
  });
function T(e, t, g, l, p, c) {
  const i = m;
  return (
    z(),
    k(
      "div",
      { class: _(e.classes) },
      [
        G(
          i,
          {
            image: e.currentSrc,
            "wrapper-class": [
              "w-full transform separator",
              e.bp.isDesktop ? "h-auto" : "h-full",
              e.separatorTranslateClass,
            ],
            loading: "eager",
          },
          null,
          8,
          ["image", "wrapper-class"],
        ),
      ],
      2,
    )
  );
}
const j = w(h, [
  ["render", T],
  ["__scopeId", "data-v-b6adacea"],
]);
export { j as _ };
