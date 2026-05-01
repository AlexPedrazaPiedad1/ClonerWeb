import { _ as pe } from "./Bj0JfLHo.js";
import { g as H } from "./DKtf60Sy.js";
import { S as E } from "./BWsqEc1I.js";
import {
  _ as G,
  G as U,
  F as fe,
  D as ge,
  H as Ce,
  I as me,
  d as he,
  l as _e,
  f as ke,
} from "./w36zW0QG.js";
import {
  l as D,
  A as c,
  O as l,
  _ as t,
  Z as b,
  X as x,
  d as S,
  y as A,
  m as s,
  Q as C,
  W as k,
  P as be,
  V as ve,
  aa as ye,
  v as X,
  u as r,
  N as v,
  $ as V,
  a1 as R,
  U as $,
  Y as B,
} from "./CG2MQ2lF.js";
import { _ as xe } from "./fwO26FrS.js";
import { _ as we } from "./D7a1xk7w.js";
import { _ as $e } from "./n9BDgNm5.js";
import { _ as Te } from "./BGfOVFyB.js";
import { _ as He } from "./3AjKDk5D.js";
import { _ as ze } from "./CLk6oGrE.js";
import { _ as Me } from "./CR2X5H6X.js";
import { u as Le } from "./D8jQnJCR.js";
import { u as Ve } from "./DMEQSfw8.js";
const y = {
    default: { size: "l", bgColor: "transparent" },
    size: {
      s: "24",
      m: "32",
      l: "40",
      xl: "48",
      "2xl": "56",
      "3xl": "64",
      "4xl": "72",
    },
    bgColor: {
      transparent: "",
      white: "white",
      green: "var(--green-700)",
      red: "var(--red-500)",
    },
  },
  Be = D({
    name: "LogoToken",
    inheritAttrs: !1,
    props: {
      bgColor: {
        type: String,
        default: () => y.default.bgColor,
        validator(e) {
          return Object.keys(y.bgColor).includes(e);
        },
      },
      trademark: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: () => y.default.size,
        validator(e) {
          return Object.keys(y.size).includes(e);
        },
      },
      animated: { type: Boolean, default: !1 },
    },
    setup(e) {
      const o = S(0),
        u = S(
          `clip0_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`,
        );
      A(() => {
        o.value = Date.now();
      });
      const p = s(() => y.bgColor[e.bgColor] || y.default.bgColor),
        f = s(() => y.size[e.size]),
        g = s(() => (e.animated ? `animated-${o.value}` : "static"));
      return { colorClass: p, logoClass: f, animationClass: g, uniqueId: u };
    },
  }),
  Se = ["width", "height"],
  De = ["clip-path"],
  Ae = ["fill"],
  Ze = ["id"];
function je(e, o, u, p, f, g) {
  return (
    l(),
    c(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: e.logoClass,
        height: e.logoClass,
        viewBox: "0 0 96 96",
        fill: "none",
        class: "logo-token",
      },
      [
        t(
          "g",
          { "clip-path": `url(#${e.uniqueId})` },
          [
            t(
              "path",
              {
                d: "M8.3155 96C8.3155 96 0 96 0 87.6845V8.3155C0 8.3155 0 0 8.3155 0H87.6845C87.6845 0 96 0 96 8.3155V87.6845C96 87.6845 96 96 87.6845 96H8.3155Z",
                fill: e.colorClass,
              },
              null,
              8,
              Ae,
            ),
            t(
              "path",
              {
                class: x(e.animationClass),
                d: "M61.9464 19.7287C56.3156 19.7287 51.2905 27.2319 48.007 38.9686C44.7234 27.2388 39.6983 19.7287 34.0675 19.7287C24.1687 19.7287 16.1423 44.6958 16.1423 75.4935H24.1137C24.1137 46.8986 28.5743 23.7143 34.0744 23.7143C39.5744 23.7143 44.0351 45.1157 44.0351 71.5147H51.9995C51.9995 45.1157 56.4601 23.7143 61.9602 23.7143C67.4603 23.7143 71.9209 46.8986 71.9209 75.4935H79.8853C79.8853 44.6958 71.859 19.7287 61.9602 19.7287H61.9464Z",
                fill: "#FFBC0D",
              },
              null,
              2,
            ),
            e.trademark
              ? (l(),
                c(
                  "path",
                  {
                    key: 0,
                    class: x(e.animationClass),
                    d: "M83.8571 71.5078C82.7695 71.5078 81.8608 72.3614 81.8608 73.4903C81.8608 74.6192 82.7764 75.4935 83.8571 75.4935C84.9379 75.4935 85.8396 74.633 85.8396 73.4903C85.8396 72.3476 84.9379 71.5078 83.8571 71.5078ZM83.8571 75.1975C82.9278 75.1975 82.2188 74.4609 82.2188 73.4903C82.2188 72.5197 82.9278 71.8038 83.8571 71.8038C84.7864 71.8038 85.4817 72.5404 85.4817 73.4903C85.4817 74.4403 84.7726 75.1975 83.8571 75.1975Z",
                    fill: "#FFBC0D",
                  },
                  null,
                  2,
                ))
              : b("", !0),
            e.trademark
              ? (l(),
                c(
                  "path",
                  {
                    key: 1,
                    class: x(e.animationClass),
                    d: "M84.7933 73.0016C84.7933 72.5541 84.5317 72.3407 83.9879 72.3407H83.093V74.6674H83.451V73.6693H83.8296L84.456 74.6674H84.8415L84.1806 73.6418C84.5248 73.6073 84.7864 73.4284 84.7864 73.0084L84.7933 73.0016ZM83.8227 73.3733H83.4441V72.6298H83.9191C84.1669 72.6298 84.4285 72.678 84.4285 72.9878C84.4285 73.3595 84.1393 73.3733 83.8227 73.3733Z",
                    fill: "#FFBC0D",
                  },
                  null,
                  2,
                ))
              : b("", !0),
          ],
          8,
          De,
        ),
        t("defs", null, [
          t(
            "clipPath",
            { id: e.uniqueId },
            [
              ...(o[0] ||
                (o[0] = [
                  t(
                    "rect",
                    { width: "96", height: "96", fill: "white" },
                    null,
                    -1,
                  ),
                ])),
            ],
            8,
            Ze,
          ),
        ]),
      ],
      8,
      Se,
    )
  );
}
const Ne = G(Be, [
    ["render", je],
    ["__scopeId", "data-v-2800bbac"],
  ]),
  q = {
    default: { color: "black" },
    color: {
      black: "black",
      gray: "#EAEAEA",
      white: "white",
      gold: "var(--gold-500)",
    },
  },
  Oe = D({
    name: "Tagline",
    components: {},
    inheritAttrs: !1,
    props: {
      color: {
        type: String,
        default: () => q.default.color,
        validator(e) {
          return Object.keys(q.color).includes(e);
        },
      },
      animated: { type: Boolean, default: () => !1 },
      class: { type: [String, Object, Array], default: () => "" },
      width: { type: String, default: () => "1371" },
      height: { type: String, default: () => "216" },
    },
    setup(e) {
      const o = S(null),
        u = s(() => e.width),
        p = s(() => e.height),
        f = s(() => q.color[e.color]);
      return (
        A(() => {
          if (e.animated && o.value) {
            const g = o.value.querySelectorAll("path");
            (H.registerPlugin(E),
              H.from(g, {
                opacity: 0,
                y: -100,
                stagger: { each: 0.1 },
                ease: "elastic.out(2, 0.5)",
                duration: 1.4,
                scrollTrigger: { start: "top 65%", trigger: o.value },
              }));
          }
        }),
        { widthTagline: u, heightTagline: p, colorTagline: f, svgRef: o }
      );
    },
  }),
  Pe = ["width", "height"],
  Fe = { "clip-path": "url(#clip0_1878_120112)" },
  Ie = ["fill"],
  Re = ["fill"],
  qe = ["fill"],
  Ee = ["fill"],
  Ge = ["fill"],
  We = ["fill"],
  Je = ["fill"],
  Ke = ["fill"],
  Qe = ["fill"],
  Ue = ["fill"],
  Xe = ["fill"];
function Ye(e, o, u, p, f, g) {
  return (
    l(),
    c(
      "svg",
      {
        ref: "svgRef",
        width: e.widthTagline,
        height: e.heightTagline,
        viewBox: "0 0 1371 216",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        t("g", Fe, [
          t(
            "path",
            {
              d: "M26.738 51.0923C19.2414 51.0923 12.9109 48.6 7.74653 43.6569C2.58218 38.7138 0 32.6492 0 25.5462C0 18.4431 2.58218 12.42 7.74653 7.43538C12.9109 2.49231 19.2414 0 26.738 0C34.2347 0 40.5652 2.49231 45.7295 7.43538C50.8939 12.3785 53.4761 18.4431 53.4761 25.5462C53.4761 32.6492 50.8939 38.7138 45.7295 43.6569C40.5652 48.6 34.2347 51.0923 26.738 51.0923ZM2.83207 208.565V67.0846H50.6857V208.565H2.83207Z",
              fill: e.colorTagline,
            },
            null,
            8,
            Ie,
          ),
          t(
            "path",
            {
              d: "M77.6319 89.2648V70.1571C87.7524 68.1217 94.4161 63.1371 97.623 55.2863C91.6256 54.9125 86.7112 52.7109 82.8379 48.6817C79.0063 44.6525 77.0488 39.4602 77.0488 33.1048C77.0488 25.6279 79.2978 19.7709 83.7958 15.5756C88.2938 11.3802 94.1245 9.26172 101.246 9.26172C108.743 9.26172 114.782 11.8786 119.405 17.1125C123.986 22.3463 126.318 30.114 126.318 40.4156C126.318 52.9602 122.029 63.8433 113.491 73.1063C104.953 82.3694 93 87.7279 77.5902 89.2648H77.6319Z",
              fill: e.colorTagline,
            },
            null,
            8,
            Re,
          ),
          t(
            "path",
            {
              d: "M140.854 67.0842H183.626L185.042 88.6842C188.416 80.9996 193.705 74.8934 200.952 70.2826C208.199 65.7134 216.945 63.3872 227.273 63.3872C237.602 63.3872 245.807 65.6303 253.012 70.1165C260.217 74.6026 265.715 80.7919 269.463 88.6426C272.836 80.958 278.251 74.8519 285.664 70.2411C293.077 65.6719 302.24 63.3457 313.11 63.3457C327.729 63.3457 339.265 67.998 347.72 77.2611C356.174 86.5242 360.381 99.0272 360.381 114.729V208.481H312.527V122.04C312.527 114.563 311.069 108.623 308.154 104.22C305.239 99.8165 300.866 97.6149 295.076 97.6149C289.621 97.6149 284.831 100.107 280.708 105.05C276.585 109.993 274.502 117.844 274.502 128.478V208.481H226.649V122.04C226.649 114.563 225.191 108.623 222.276 104.22C219.36 99.8165 214.987 97.6149 209.198 97.6149C203.742 97.6149 198.953 100.107 194.83 105.05C190.706 109.993 188.624 117.844 188.624 128.478V208.481H140.771V67.0842H140.854Z",
              fill: e.colorTagline,
            },
            null,
            8,
            qe,
          ),
          t(
            "path",
            {
              d: "M448.757 208.565V12.0879H496.61V208.565H448.757Z",
              fill: e.colorTagline,
            },
            null,
            8,
            Ee,
          ),
          t(
            "path",
            {
              d: "M593.942 212.22C578.74 212.22 565.663 208.938 554.668 202.375C543.714 195.812 535.26 186.964 529.346 175.832C523.432 164.7 520.475 152.03 520.475 137.783C520.475 123.535 523.432 110.866 529.346 99.7334C535.26 88.6011 543.714 79.7534 554.668 73.1903C565.663 66.6272 578.74 63.3457 593.942 63.3457C609.143 63.3457 622.221 66.6272 633.216 73.1903C644.211 79.7534 652.624 88.6011 658.538 99.7334C664.452 110.866 667.409 123.535 667.409 137.783C667.409 152.03 664.452 164.7 658.538 175.832C652.624 186.964 644.169 195.812 633.216 202.375C622.262 208.938 609.143 212.22 593.942 212.22ZM593.942 181.356C601.438 181.356 607.311 177.452 611.517 169.684C615.724 161.916 617.848 151.283 617.848 137.824C617.848 124.366 615.724 113.732 611.517 105.964C607.311 98.1965 601.438 94.3334 593.942 94.3334C586.445 94.3334 580.573 98.238 576.366 105.964C572.16 113.732 570.036 124.366 570.036 137.824C570.036 151.283 572.16 161.916 576.366 169.684C580.573 177.452 586.445 181.356 593.942 181.356Z",
              fill: e.colorTagline,
            },
            null,
            8,
            Ge,
          ),
          t(
            "path",
            {
              d: "M721.094 208.564L670.991 67.084H720.511L747.79 163.661L774.528 67.084H820.966L770.863 208.564H721.052H721.094Z",
              fill: e.colorTagline,
            },
            null,
            8,
            We,
          ),
          t(
            "path",
            {
              d: "M863.572 51.0923C856.075 51.0923 849.745 48.6 844.581 43.6569C839.416 38.7138 836.834 32.6492 836.834 25.5462C836.834 18.4431 839.416 12.42 844.581 7.43538C849.745 2.49231 856.075 0 863.572 0C871.069 0 877.399 2.49231 882.564 7.43538C887.728 12.3785 890.31 18.4431 890.31 25.5462C890.31 32.6492 887.728 38.7138 882.564 43.6569C877.399 48.6 871.069 51.0923 863.572 51.0923ZM839.666 208.565V67.0846H887.52V208.565H839.666Z",
              fill: e.colorTagline,
            },
            null,
            8,
            Je,
          ),
          t(
            "path",
            {
              d: "M920.339 208.566V67.0856H963.111L964.527 88.6856C968.109 81.001 973.69 74.8948 981.27 70.2841C988.85 65.7148 997.929 63.3887 1008.42 63.3887C1023.63 63.3887 1035.58 68.041 1044.32 77.3041C1053.03 86.5671 1057.4 99.0702 1057.4 114.772V208.524H1009.55V122.083C1009.55 114.606 1007.97 108.666 1004.76 104.263C1001.55 99.8594 996.763 97.6579 990.391 97.6579C984.56 97.6579 979.395 100.15 974.897 105.093C970.399 110.036 968.151 117.887 968.151 128.521V208.524H920.297L920.339 208.566Z",
              fill: e.colorTagline,
            },
            null,
            8,
            Ke,
          ),
          t(
            "path",
            {
              d: "M1068.56 89.2648V70.1571C1078.68 68.1217 1085.35 63.1371 1088.55 55.2863C1082.56 54.9125 1077.64 52.7109 1073.77 48.6817C1069.94 44.6525 1067.98 39.4602 1067.98 33.1048C1067.98 25.6279 1070.23 19.7709 1074.73 15.5756C1079.23 11.3802 1085.06 9.26172 1092.18 9.26172C1099.67 9.26172 1105.71 11.8786 1110.34 17.1125C1114.92 22.3463 1117.25 30.114 1117.25 40.4156C1117.25 52.9602 1112.96 63.8433 1104.42 73.1063C1095.88 82.3694 1083.93 87.7279 1068.52 89.2648H1068.56Z",
              fill: e.colorTagline,
            },
            null,
            8,
            Qe,
          ),
          t(
            "path",
            {
              d: "M1218 51.0923C1210.5 51.0923 1204.17 48.6 1199 43.6569C1193.84 38.7138 1191.26 32.6492 1191.26 25.5462C1191.26 18.4431 1193.84 12.42 1199 7.43538C1204.17 2.49231 1210.5 0 1218 0C1225.49 0 1231.82 2.49231 1236.99 7.43538C1242.15 12.3785 1244.73 18.4431 1244.73 25.5462C1244.73 32.6492 1242.15 38.7138 1236.99 43.6569C1231.82 48.6 1225.49 51.0923 1218 51.0923ZM1194.09 208.565V67.0846H1241.94V208.565H1194.09Z",
              fill: e.colorTagline,
            },
            null,
            8,
            Ue,
          ),
          t(
            "path",
            {
              d: "M1331.99 212.219C1314.7 212.219 1301.92 207.4 1293.59 197.763C1285.26 188.127 1281.05 175.914 1281.05 161.127V97.9465H1262.77V67.0834H1281.05V27.248H1328.91V67.125H1362.39V97.9881H1328.91V160.587C1328.91 166.776 1330.32 171.345 1333.11 174.336C1335.94 177.327 1339.69 178.822 1344.36 178.822C1346.98 178.822 1349.69 178.531 1352.52 177.991C1355.35 177.41 1358.06 176.579 1360.68 175.457L1368.01 204.659C1363.68 207.11 1358.23 208.979 1351.56 210.267C1344.9 211.554 1338.36 212.219 1331.99 212.219Z",
              fill: e.colorTagline,
            },
            null,
            8,
            Xe,
          ),
        ]),
        o[0] ||
          (o[0] = t(
            "defs",
            null,
            [
              t("clipPath", { id: "clip0_1878_120112" }, [
                t("rect", { width: "1370.22", height: "216", fill: "white" }),
              ]),
            ],
            -1,
          )),
      ],
      8,
      Pe,
    )
  );
}
const et = G(Oe, [["render", Ye]]),
  T = {
    base: "flex items-center shrink-0 relative overflow-hidden",
    default: { size: "sm" },
    size: {
      sm: {
        base: "w-full h-[98px] rounded-8 py-6",
        content: "w-[211px] max-h-[84px]",
      },
      md: {
        base: "w-full h-[174px] rounded-16",
        content: "w-[364px] max-h-[138px]",
      },
    },
    image:
      "absolute inset-0 w-full h-full object-cover bg-no-repeat rounded-16  ease-in-out z-10",
  },
  tt = D({
    components: { MCDLink: U },
    inheritAttrs: !1,
    props: {
      ...fe,
      type: { type: String, default: "button" },
      size: {
        type: String,
        default: () => T.default.size,
        validator(e) {
          return Object.keys(T.size).includes(e);
        },
      },
      image: { type: Object, default: null },
      animated: { type: Boolean, default: !1, required: !1 },
    },
    emits: ["click"],
    setup(e, { emit: o }) {
      const u = ye(),
        p = s(() => ge(u, ["class"])),
        f = s(() => Ce(e)),
        g = () => {
          o("click");
        },
        m = s(() => {
          const M = T.base,
            w = T.size[e.size].base;
          return me(M, w);
        }),
        z = s(() => T.image),
        Z = s(() => T.size[e.size].content);
      return (
        A(() => {
          (H.registerPlugin(E),
            e.animated &&
              X(() => {
                H.from(".footer-banner", {
                  y: 200,
                  duration: 1.2,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: ".footer-banner",
                    start: "top 75%",
                    end: "top center",
                    toggleActions: "play none none reverse",
                  },
                });
              }));
        }),
        {
          attrs: p,
          bannerClass: m,
          imageClass: z,
          contentClass: Z,
          linkProps: f,
          handleClick: g,
        }
      );
    },
  }),
  nt = { class: "w-full h-full image-container" };
function lt(e, o, u, p, f, g) {
  const m = $e,
    z = U;
  return (
    l(),
    c(
      "div",
      {
        class: x([
          "overflow-hidden focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2",
          e.size === "sm" ? "rounded-8" : "rounded-16",
        ]),
      },
      [
        C(
          z,
          ve(
            {
              class: [
                "footer-banner focus-visible:outline-none",
                e.bannerClass,
              ],
              type: e.type,
            },
            { ...e.linkProps, ...e.attrs },
            { onClick: e.handleClick },
          ),
          {
            default: k(() => [
              t("div", nt, [
                C(
                  m,
                  {
                    image: { url: e.image.url, alt: e.image.alt },
                    "wrapper-class": e.imageClass,
                  },
                  null,
                  8,
                  ["image", "wrapper-class"],
                ),
                o[0] ||
                  (o[0] = t(
                    "div",
                    { class: "absolute inset-0 z-10 overlay" },
                    null,
                    -1,
                  )),
              ]),
              t(
                "div",
                { class: x(["absolute z-20 ml-6", e.contentClass]) },
                [be(e.$slots, "default", {}, void 0, !0)],
                2,
              ),
            ]),
            _: 3,
          },
          16,
          ["type", "class", "onClick"],
        ),
      ],
      2,
    )
  );
}
const ot = G(tt, [
    ["render", lt],
    ["__scopeId", "data-v-7ed3923f"],
  ]),
  st = {
    key: 0,
    class:
      "flex text-start tablet:text-center max-w-screen-md mx-auto justify-center items-center pt-8 px-4 tablet:px-0",
  },
  at = {
    key: 1,
    class:
      "w-full px-4 py-6 flex-col items-center bg-surface-mcd-primary justify-center tablet:p-6 desktop:px-[120px] desktop:pb-6 desktop:pt-10 footer-container",
  },
  it = {
    class:
      "flex flex-col items-center gap-8 self-stretch desktop:gap-10 mx-auto",
  },
  rt = {
    key: 0,
    class:
      "flex flex-col items-center gap-4 justify-center w-full tablet:items-start tablet:gap-2 tablet:self-stretch tablet:max-w-[300px] desktop:max-w-[500px]",
  },
  ct = { class: "hidden tablet:block w-full" },
  dt = { class: "flex flex-col gap-4 items-center tablet:items-start" },
  ut = {
    key: 0,
    class:
      "social-title text-text-mcd-primary font-bold leading-[26px] text-[18px] desktop:text-[20px] desktop:leading-7 desktop:tracking-[-0.5px]",
  },
  pt = { class: "w-full" },
  ft = { key: 0 },
  gt = { class: "flex flex-col gap-4" },
  Ct = { class: "hidden desktop:flex justify-center w-full" },
  mt = { class: "flex flex-col gap-3 justify-center items-start self-stretch" },
  ht = {
    class:
      "bottom-links flex flex-col items-center gap-4 self-stretch desktop:gap-3 overflow-hidden",
  },
  _t = {
    class:
      "flex p-3 justify-center items-center content-center gap-y-1 tablet:gap-y-2 tablet:gap-x-8 flex-wrap self-stretch gap-x-3 text-center desktop:gap-4 links-container",
  },
  kt = {
    class:
      "copyright flex justify-center items-center gap-2 desktop:gap-3 self-stretch",
  },
  bt = {
    class:
      "text-[14px] leading-5 text-center text-text-mcd-primary desktop:text-[16px] desktop:leading-6",
  },
  Zt = D({
    __name: "index",
    props: {
      isRestaurant: { type: Boolean, default: !1 },
      hideTaglineAndBanner: { type: Boolean, default: !1 },
      hideNavigation: { type: Boolean, default: !1 },
      bannerOverride: { type: Object, default: () => ({}) },
      footerSecondaryNavLinksOverride: { type: Array, default: () => [] },
      legalText: { type: Object, default: () => ({}) },
    },
    setup(e) {
      const {
          $gtmClickDesplegableFooter: o,
          $gtmClickHipervinculoFooter: u,
          $gtmSocialNetworks: p,
          $gtmClickBoton: f,
          $gtmDownloadApplication: g,
        } = he(),
        m = _e(),
        z = Ve(),
        Z = ke(),
        { asLinkCustom: M } = Le(),
        w = s(() => z.getFooter),
        W = s(() => w.value?.social.title),
        L = s(() => {
          const n = w.value?.bannerRestaurants || {};
          return {
            title: d.bannerOverride.title || n.title,
            image: d.bannerOverride.image || n.image,
            gtm: d.bannerOverride.gtm || "encuentrarestaurante",
            link:
              d.bannerOverride.link ||
              (n.link && typeof n.link == "object" && "url" in n.link
                ? n.link
                : void 0),
          };
        }),
        J = s(() => w.value?.navigationGroups),
        Y = s(() =>
          d.footerSecondaryNavLinksOverride.length > 0
            ? d.footerSecondaryNavLinksOverride
            : w.value?.secondaryNavLinks.map((n) => ({
                ...n,
                target: "_self",
              })),
        ),
        d = e,
        ee = s(() => (m.isDesktop.value ? "m" : "s")),
        te = s(() => (m.isDesktop.value ? "sm" : "xs")),
        ne = s(() => (m.isDesktop.value ? "md" : "sm")),
        le = s(() => (m.isDesktop.value ? "xl" : "s")),
        j = S(-1),
        oe = (n, a) => {
          (o(a), (j.value = j.value === n ? -1 : n));
        },
        K = (n, a) => {
          const N = a.trim().toLowerCase().replace(/\s/g, ""),
            O = n.label,
            P = `${N}_${O}`;
          u(P, n.link?.url || "#");
        },
        Q = (n) => {
          const a = n.toLowerCase();
          return (
            (a.includes("configuración") && a.includes("cookie")) ||
            (a.includes("cookie-en") && a.includes("konfigurazioa")) ||
            (a.includes("configuració") && a.includes("cookie"))
          );
        };
      function se(n) {
        if (n && n.title) {
          const a = n.title === "share" ? "header" : n.title;
          p(a, n.url || "");
        }
      }
      function ae() {
        const n = L.value.link,
          a = L.value.gtm.toLowerCase().replace(/[\s/]+/g, "");
        n &&
          typeof n == "object" &&
          "url" in n &&
          typeof n.url == "string" &&
          (a.includes("descargarapp") ? g("boton", a, n.url) : f(a, n.url));
      }
      return (
        A(() => {
          (H.registerPlugin(E),
            X(() => {
              const n = H.timeline({
                scrollTrigger: {
                  trigger: ".footer-container",
                  start: "top 60%",
                  end: "top center",
                  toggleActions: "play none none reverse",
                },
              });
              d.hideTaglineAndBanner ||
                (n.from(".social-title", {
                  y: 50,
                  opacity: 0,
                  ease: "power1.in",
                  duration: 0.6,
                }),
                n.from(".navigation-group", {
                  y: 100,
                  opacity: 0,
                  ease: "power1.in",
                  stagger: { each: 0.3 },
                  duration: 0.8,
                }),
                n.from(
                  ".links-container",
                  { y: 150, opacity: 0, ease: "power1.in", duration: 0.8 },
                  "<0.2",
                ));
            }));
        }),
        (n, a) => {
          const N = pe,
            O = et,
            P = xe,
            F = we,
            ie = ot,
            re = Te,
            I = He,
            ce = ze,
            de = Me,
            ue = Ne;
          return (
            l(),
            c(
              $,
              null,
              [
                e.legalText
                  ? (l(),
                    c("div", st, [
                      C(
                        N,
                        { "rich-text": e.legalText, "small-text": "" },
                        null,
                        8,
                        ["rich-text"],
                      ),
                    ]))
                  : b("", !0),
                r(Z).isApp
                  ? b("", !0)
                  : (l(),
                    c("footer", at, [
                      t("div", it, [
                        t(
                          "div",
                          {
                            class: x([
                              "heading gap-8 w-full desktop:py-6 grid grid-cols-1 tablet:grid-cols-2 max-w-[360px] tablet:max-w-[1440px]",
                              { "tablet:grid-cols-1": d.hideTaglineAndBanner },
                            ]),
                          },
                          [
                            d.hideTaglineAndBanner
                              ? b("", !0)
                              : (l(),
                                c("div", rt, [
                                  t("div", ct, [
                                    C(O, {
                                      width: "100%",
                                      height: "100%",
                                      animated: !0,
                                      "animation-variation": "gsap",
                                    }),
                                  ]),
                                  t("div", dt, [
                                    r(W)
                                      ? (l(), c("p", ut, V(r(W)), 1))
                                      : b("", !0),
                                    C(P, {
                                      animated: !0,
                                      "animation-variant": "gsap",
                                      target: "_blank",
                                      onLinkClicked: se,
                                    }),
                                  ]),
                                ])),
                            !d.isRestaurant && !d.hideTaglineAndBanner
                              ? (l(),
                                v(
                                  ie,
                                  {
                                    key: 1,
                                    size: r(ne),
                                    image: r(L).image,
                                    to: r(L).link?.url,
                                    animated: !0,
                                    onClick: ae,
                                  },
                                  {
                                    default: k(() => [
                                      C(
                                        F,
                                        {
                                          size: r(le),
                                          weight: "bold",
                                          class:
                                            "text-white w-[211px] xl:w-auto",
                                        },
                                        {
                                          default: k(() => [
                                            R(V(r(L).title), 1),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["size"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["size", "image", "to"],
                                ))
                              : b("", !0),
                          ],
                          2,
                        ),
                        t("div", pt, [
                          d.hideNavigation
                            ? b("", !0)
                            : (l(),
                              c("div", ft, [
                                (l(!0),
                                c(
                                  $,
                                  null,
                                  B(
                                    r(J),
                                    (i, h) => (
                                      l(),
                                      v(
                                        ce,
                                        {
                                          key: i.id,
                                          class: "desktop:hidden",
                                          "is-panel-open": r(j) === h,
                                          onToggle: (_) => oe(h, i.title),
                                        },
                                        {
                                          default: k(({ isPanelOpen: _ }) => [
                                            C(
                                              re,
                                              {
                                                title: i.title,
                                                "is-panel-open": _,
                                              },
                                              null,
                                              8,
                                              ["title", "is-panel-open"],
                                            ),
                                          ]),
                                          content: k(() => [
                                            t("div", gt, [
                                              (l(!0),
                                              c(
                                                $,
                                                null,
                                                B(
                                                  i.items,
                                                  (_) => (
                                                    l(),
                                                    v(
                                                      I,
                                                      {
                                                        key: _.label,
                                                        to: r(M)(_.link),
                                                        label: _.label,
                                                        size: "xs",
                                                        color: "gray",
                                                        onClick: (vt) =>
                                                          K(_, i.title),
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "to",
                                                        "label",
                                                        "onClick",
                                                      ],
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ]),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["is-panel-open", "onToggle"],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                                t("div", Ct, [
                                  (l(!0),
                                  c(
                                    $,
                                    null,
                                    B(
                                      r(J),
                                      (i) => (
                                        l(),
                                        c(
                                          "div",
                                          {
                                            key: i.id,
                                            class:
                                              "flex flex-col gap-6 flex-1 px-4 py-3 items-start navigation-group",
                                          },
                                          [
                                            d.hideTaglineAndBanner
                                              ? (l(),
                                                v(
                                                  F,
                                                  {
                                                    key: 1,
                                                    size: "xs",
                                                    weight: "bold",
                                                  },
                                                  {
                                                    default: k(() => [
                                                      R(V(i.title), 1),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024,
                                                ))
                                              : (l(),
                                                v(
                                                  de,
                                                  {
                                                    key: 0,
                                                    static: "",
                                                    size: "s",
                                                  },
                                                  {
                                                    default: k(() => [
                                                      C(
                                                        F,
                                                        {
                                                          size: "xs",
                                                          weight: "bold",
                                                        },
                                                        {
                                                          default: k(() => [
                                                            R(V(i.title), 1),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1024,
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024,
                                                )),
                                            t("div", mt, [
                                              (l(!0),
                                              c(
                                                $,
                                                null,
                                                B(
                                                  i.items,
                                                  (h) => (
                                                    l(),
                                                    v(
                                                      I,
                                                      {
                                                        key: h.label,
                                                        to: r(M)(h.link),
                                                        label: h.label,
                                                        size: "xs",
                                                        color: "gray",
                                                        onClick: (_) =>
                                                          K(h, i.title),
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "to",
                                                        "label",
                                                        "onClick",
                                                      ],
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ]),
                                          ],
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ])),
                        ]),
                      ]),
                      a[0] ||
                        (a[0] = t(
                          "div",
                          {
                            class:
                              "separator w-full px-4 py-6 flex-col items-center",
                          },
                          [
                            t("div", {
                              class: "w-full h-[1px] bg-border-subtle",
                            }),
                          ],
                          -1,
                        )),
                      t("div", ht, [
                        t("div", _t, [
                          (l(!0),
                          c(
                            $,
                            null,
                            B(
                              r(Y),
                              (i) => (
                                l(),
                                v(
                                  I,
                                  {
                                    key: i.label,
                                    size: r(te),
                                    to: Q(i.label) ? void 0 : r(M)(i.link),
                                    label: i.label,
                                    class: x({
                                      "optanon-toggle-display": Q(i.label),
                                    }),
                                    onClick: (h) =>
                                      r(u)(i.label, i.link?.url || "#"),
                                  },
                                  null,
                                  8,
                                  ["size", "to", "label", "class", "onClick"],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        t("div", kt, [
                          C(ue, { size: r(ee), "bg-color": "white" }, null, 8, [
                            "size",
                          ]),
                          t("p", bt, V(n.$t("copyright")), 1),
                        ]),
                      ]),
                    ])),
              ],
              64,
            )
          );
        }
      );
    },
  });
export { Zt as _, et as a, Ne as b };
