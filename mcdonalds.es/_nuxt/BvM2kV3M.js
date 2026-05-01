import { _ as p, k as f, E as m } from "./w36zW0QG.js";
import {
  l as h,
  A as x,
  O as y,
  _ as d,
  X as r,
  Q as z,
  m as a,
} from "./CG2MQ2lF.js";
const s = {
    base: "inline-flex justify-center items-center rounded-full",
    default: { size: "48" },
    size: {
      16: "w-[16px] h-[16px]",
      24: "w-[24px] h-[24px]",
      32: "w-[32px] h-[32px]",
      40: "w-[40px] h-[40px]",
      48: "w-[48px] h-[48px]",
      56: "w-[56px] h-[56px]",
      64: "w-[64px] h-[64px]",
    },
    type: {
      todos: "allergensTodos",
      cereales: "allergensCereales",
      crustaceos: "allergensCrustaceos",
      huevos: "allergensHuevos",
      pescado: "allergensPescado",
      cacahuetes: "allergensCacahuetes",
      soja: "allergensSoja",
      lacteos: "allergensLacteos",
      frutosCascara: "allergensCascara",
      apio: "allergensApio",
      mostaza: "allergensMostaza",
      sésamo: "allergensSesamo",
      sulfitos: "allergensSulfitos",
      moluscos: "allergensMoluscos",
      altramuces: "allergensAltramuces",
      mccafe: "servicesMccafe",
      desayuno: "servicesDesayuno",
      familia: "servicesFamilia",
      cumpleaños: "servicesCumpleanos",
      servicioMesa: "servicesMesa",
      mcauto: "servicesMcauto",
      llevar: "servicesLlevar",
      mcexpress: "servicesMcexpress",
      tickets: "servicesTickets",
      "24h": "services24h",
      cumpleCasa: "servicesCumpleCasa",
      entregaParking: "servicesEntregaParking",
      pidePaga: "servicesPidePaga",
      playPlace: "servicesPlayPlace",
      parking: "servicesParking",
      terrace: "servicesTerrace",
      accesibilidad: "servicesAccesibilidad",
      chargeCar: "servicesChargeCar",
      mcdelivery: "servicesMcdelivery",
    },
  },
  b = h({
    name: "AllergenMaster",
    props: {
      class: { type: [String, Object, Array], default: "" },
      size: {
        type: String,
        default: () => s.default.size,
        validator(e) {
          return Object.keys(s.size).includes(e);
        },
      },
      illustration: {
        type: String,
        default: "",
        validator(e) {
          return e === "" || Object.keys(s.type).includes(e);
        },
      },
      state: {
        type: String,
        default: "default",
        validator(e) {
          return ["default", "hover", "active", "disabled"].includes(e);
        },
      },
      active: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
    },
    setup(e) {
      const i = a(() => s.size[e.size]),
        c = a(() => s.size[e.size]),
        l = a(() => e.active && !e.disabled),
        n = a(
          () =>
            ({
              16: "s",
              24: "m",
              32: "l",
              40: "xl",
              48: "2xl",
              56: "3xl",
              64: "3xl",
            })[e.size],
        ),
        o = a(() => {
          const u = s.base,
            g = l.value ? "bg-[#FFEBB6]" : "bg-[#F9F9F9]";
          return m(u, e.class, g);
        }),
        t = a(() =>
          e.illustration ? s.type[e.illustration] || e.illustration : "",
        ),
        v = a(() => s.colorIllustration[e.state]);
      return {
        className: o,
        width: i,
        height: c,
        illustrationSrc: t,
        illustrationColor: v,
        isActive: l,
        iconSize: n,
      };
    },
  });
function C(e, i, c, l, n, o) {
  const t = f;
  return (
    y(),
    x(
      "div",
      { class: r(e.className) },
      [
        d(
          "div",
          {
            class: r([
              "w-full h-full rounded-full p-1",
              e.isActive ? "bg-[#FFEBB6]" : "bg-[#F9F9F9]",
            ]),
          },
          [
            d(
              "div",
              {
                class: r([
                  "w-full h-full rounded-full p-1",
                  e.isActive ? "bg-[#FFCD4B]" : "bg-[#EAEAEA]",
                ]),
              },
              [
                z(t, { name: e.illustrationSrc, size: e.iconSize }, null, 8, [
                  "name",
                  "size",
                ]),
              ],
              2,
            ),
          ],
          2,
        ),
      ],
      2,
    )
  );
}
const M = p(b, [
  ["render", C],
  ["__scopeId", "data-v-a625e3ba"],
]);
export { M as _ };
