import { _ as u } from "./n9BDgNm5.js";
import { _ as d } from "./9UZMSW1R.js";
import { _ as v } from "./w36zW0QG.js";
import {
  l as y,
  A as p,
  O as t,
  N as r,
  W as f,
  a1 as _,
  m as a,
} from "./CG2MQ2lF.js";
const m = {
    type: {
      delivery: {
        full: "/images/logos/delivery-full.svg",
        lite: "/images/logos/delivery-lite.svg",
      },
      mymcdonalds: {
        default: "/images/logos/mymcdonalds-default.svg",
        inverse: "/images/logos/mymcdonalds-inverse.svg",
        pideypaga: "/images/logos/mymcdonalds-pideypaga.svg",
      },
      world: "/images/logos/world.svg",
      myrewards: "/images/logos/myrewards.svg",
      pideypaga: "/images/logos/pideypaga.svg",
      myorder: {
        vertical: "/images/logos/myorder-vertical.svg",
        horizontal: "/images/logos/myorder-horizontal.svg",
      },
      mccafe: "/images/logos/mc_cafe.svg",
      miercoles: "/images/logos/miercoles.svg",
      cumpleanos: "/images/logos/cumpleanos.svg",
      family: "/images/logos/family.svg",
      familyMode: {
        "01": "/images/logos/familyMode-01.svg",
        "02": "/images/logos/familyMode-02.svg",
        "03": "/images/logos/familyMode-03.svg",
      },
      myfamily: {
        gradient: "/images/logos/myfamily-gradient.svg",
        multicolor: "/images/logos/myfamily-multicolor.svg",
      },
      menu4you: "images/logos/menu4you.svg",
      ourValues: {
        lite: "/images/logos/ourValues-lite.svg",
        full: "/images/logos/ourValues-full.svg",
      },
      mcauto: {
        mcauto: "/images/logos/mcauto-mcauto.svg",
        reto: "/images/logos/mcauto-reto.svg",
      },
      bigGood: {
        vertical: "/images/logos/bigGood-vertical.svg",
        horizontal: "/images/logos/bigGood-horizontal.svg",
        proyect: "/images/logos/bigGood-proyect.svg",
      },
      safety: {
        vertical: "/images/logos/safety-vertical.svg",
        horizontal: "/images/logos/safety-horizontal.svg",
      },
      badges: {
        token: "/images/logos/badges-token.svg",
        gluten: "/images/logos/badges-gluten.svg",
        sabrosas: "/images/logos/badges-sabrosas.svg",
      },
    },
  },
  h = y({
    name: "LogoSecondary",
    inheritAttrs: !1,
    props: {
      typeVariant: {
        type: String,
        required: !0,
        validator(s) {
          return typeof s == "string" && s.length > 0;
        },
      },
      class: { type: [String, Object, Array], default: "" },
    },
    setup(s) {
      const o = a(() => s.typeVariant.split("-")[0]),
        g = a(() => {
          const e = s.typeVariant.split("-");
          return e.length > 1 ? e[1] : null;
        }),
        l = a(() =>
          g.value === null ? m.type[o.value] : m.type[o.value][g.value],
        ),
        i = a(() => s.class);
      return { svgPath: l, classes: i };
    },
  });
function b(s, o, g, l, i, e) {
  const n = u,
    c = d;
  return (
    t(),
    p("div", null, [
      s.svgPath
        ? (t(),
          r(
            n,
            {
              key: 0,
              image: { url: s.svgPath, alt: "" },
              "wrapper-class": s.classes,
              "aria-hidden": "true",
            },
            null,
            8,
            ["image", "wrapper-class"],
          ))
        : (t(),
          r(
            c,
            { key: 1 },
            {
              default: f(() => [
                ...(o[0] ||
                  (o[0] = [
                    _("No se encontró SVG para este tipo y variante.", -1),
                  ])),
              ]),
              _: 1,
            },
          )),
    ])
  );
}
const z = v(h, [["render", b]]);
export { z as _ };
