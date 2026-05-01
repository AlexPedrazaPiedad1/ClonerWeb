import { _ as f } from "./3AjKDk5D.js";
import { _ as C, a1 as x, a2 as D } from "./w36zW0QG.js";
import {
  l as M,
  A as u,
  O as p,
  _ as v,
  U as P,
  Y as E,
  Q as F,
  X as L,
  m as B,
} from "./CG2MQ2lF.js";
const q = M({
    name: "Breadcrumb",
    components: { MCDBaseLink: f },
    props: { mode: { type: String, default: "full" } },
    emits: ["breadcrumb-click"],
    setup(s, { emit: m }) {
      const d = x(),
        h = D();
      return {
        breadcrumbs: B(() => {
          const a = d.path;
          let e = "es";
          a.startsWith("/ca") ? (e = "ca") : a.startsWith("/eu") && (e = "eu");
          const t = a
              .replace(/^\/(es|ca|eu)\//, "/")
              .split("/")
              .filter(Boolean),
            n = {
              es: {
                home: "Inicio",
                mymcdonalds: "MyMcDonald's",
                "sandwiches-principales": "Hamburguesas",
                "postres-y-helados": "Postres",
                compromisos: "Compromisos",
                familias: "Familias",
                cumpleanos: "Cumpleaños",
                productos: "Productos",
                mccafe: "McCafé",
                empresa: "Empresa",
                "sala-de-prensa": "Sala de prensa",
                franquiciate: "Franquíciate",
                contacto: "Contacto",
                restaurantes: "Restaurantes",
                documentos: "Documentos",
                mcdelivery: "McDelivery",
                landings: "Landings",
                preguntas: "Preguntas frecuentes",
                "preguntas-frecuentes-app": "Preguntas frecuentes app",
              },
              ca: {
                home: "Inici",
                mymcdonalds: "MyMcDonald's",
                "sandwiches-principales": "Hamburgueses",
                "postres-y-helados": "Postres",
                compromisos: "Compromisos",
                familias: "Famílies",
                cumpleanos: "Aniversari",
                productos: "Productes",
                mccafe: "McCafé",
                empresa: "Empresa",
                "sala-de-prensa": "Sala de premsa",
                franquiciate: "Franquícia't",
                contacto: "Contacte",
                restaurantes: "Restaurants",
                documentos: "Documents",
                mcdelivery: "McDelivery",
                landings: "Landings",
                preguntas: "Preguntes freqüents",
                "preguntas-frecuentes-app": "Preguntes freqüents app",
              },
              eu: {
                home: "Hasiera",
                mymcdonalds: "MyMcDonald's",
                "sandwiches-principales": "Hanburgesak",
                "postres-y-helados": "Postreak",
                compromisos: "Konpromisoak",
                familias: "Familia",
                cumpleanos: "Urtebetetzeak",
                productos: "Produktuak",
                mccafe: "McCafé",
                empresa: "Enpresa",
                "sala-de-prensa": "Prentsa aretoa",
                franquiciate: "Frankiziatu",
                contacto: "Kontaktua",
                restaurantes: "Jatetxeak",
                documentos: "Dokumentuak",
                mcdelivery: "McDelivery",
                landings: "Landings",
                preguntas: "Ohiko galderak",
                "preguntas-frecuentes-app": "Ohiko galderak app",
              },
            },
            r = e === "ca" ? "/ca" : e === "eu" ? "/eu" : "",
            c = [
              { name: n[e].home, path: r || "/" },
              ...t.map((l, b) => {
                let i;
                n[e][l]
                  ? (i = n[e][l])
                  : (i = l
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (y) => y.toUpperCase()));
                const _ = r + "/" + t.slice(0, b + 1).join("/");
                return { name: i, path: _ };
              }),
            ];
          return s.mode === "full"
            ? c
            : t.length === 0
              ? [{ name: n[e].home, path: r || "/" }]
              : t.length === 1
                ? [{ name: n[e].home, path: r || "/" }]
                : [c[c.length - 2]];
        }),
        handleClick: (a) => {
          (h.push(a.path),
            m("breadcrumb-click", { title: a.name, url: a.path }));
        },
      };
    },
  }),
  $ = ["aria-label"],
  w = { class: "flex items-center gap-1 list-none" };
function z(s, m, d, h, g, k) {
  const a = f;
  return (
    p(),
    u(
      "nav",
      {
        role: "navigation",
        "aria-label": `Links de navegación con ${s.breadcrumbs.length} elementos`,
      },
      [
        v("ol", w, [
          (p(!0),
          u(
            P,
            null,
            E(
              s.breadcrumbs,
              (e, o) => (
                p(),
                u("li", { key: o, class: "flex items-center" }, [
                  F(
                    a,
                    {
                      label: e.name,
                      size: "xs",
                      color: "gray",
                      to: e.path,
                      "show-icon-left": !0,
                      animate: !1,
                      role: "link",
                      "aria-label": `Enlace de navegación a ${e.name}`,
                      class: L(
                        o === s.breadcrumbs.length - 1
                          ? "text-text-link-secondary-active"
                          : "",
                      ),
                      onClick: (t) => s.handleClick(e),
                    },
                    null,
                    8,
                    ["label", "to", "aria-label", "class", "onClick"],
                  ),
                ])
              ),
            ),
            128,
          )),
        ]),
      ],
      8,
      $,
    )
  );
}
const A = C(q, [["render", z]]);
export { A as _ };
