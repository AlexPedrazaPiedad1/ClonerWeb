import { _ as $ } from "./Cexk3NTh.js";
import { _ as w } from "./DzkVDH5z.js";
import { _ as x } from "./D5_evtMe.js";
import { _ as B } from "./B-_Bh8rr.js";
import { t as k } from "./BSFMrA7C.js";
import { f as L } from "./D8jQnJCR.js";
import { u as R, d as b, b as A, e as D, a as M } from "./w36zW0QG.js";
import { u as F } from "./DJr8JROT.js";
import { u as P } from "./CrhiQlU-.js";
import {
  l as T,
  ab as d,
  m as N,
  A as Q,
  Q as i,
  u as e,
  W,
  O as E,
} from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./9C9qpSPh.js";
import "./9UZMSW1R.js";
import "./BKZMI52-.js";
import "./3AjKDk5D.js";
import "./D7a1xk7w.js";
import "./BPeIbztx.js";
import "./Dn2iLLNP.js";
import "./C6fOeNu_.js";
import "./BvM2kV3M.js";
import "./s-lK3EGl.js";
import "./Dc0OakB1.js";
import "./D87woA3U.js";
import "./CiCdwUBr.js";
import "./DYaz6hGO.js";
import "./6ea1p-kM.js";
import "./DmvwyDla.js";
import "./tJXeJJ_G.js";
import "./n9BDgNm5.js";
import "./BGfOVFyB.js";
import "./DNNWU6PG.js";
import "./DhdId782.js";
import "./CLk6oGrE.js";
import "./CiZxUmDW.js";
import "./Ca9Ptn7z.js";
import "./DyeUX7V5.js";
import "./BFqjHXpf.js";
import "./AvGzUA97.js";
import "./CoWls7Gm.js";
import "./DKtf60Sy.js";
import "./BWsqEc1I.js";
const bt = T({
  __name: "restaurantes",
  async setup(I) {
    let a, s;
    const m = A(),
      _ = `{
restaurantes_page {
  ...restaurantes_pageFields
  slices {
    ${k}
  }
}
}`,
      { t: r, locale: g } = R(),
      f = L(g.value),
      { data: p } =
        (([a, s] = d(() =>
          M("restaurantes_page", () =>
            $fetch("/api/cms/single/restaurantes_page", {
              params: { graphQuery: _, lang: f },
            }),
          ),
        )),
        (a = await a),
        s(),
        a),
      { data: u } =
        (([a, s] = d(() =>
          F("/api/press/search?cat_uid=aperturas", "$dsmSiWkXMg"),
        )),
        (a = await a),
        s(),
        a),
      { $gtmClickBoton: h } = b(),
      y = N(() =>
        u.value?.results
          ? u.value.results
              .filter((t) =>
                m.isFilled.contentRelationship(t.data.press_category)
                  ? t.data.press_category.slug === "aperturas"
                  : !1,
              )
              .sort((t, n) => {
                const c = t.data.date ? new Date(t.data.date).getTime() : 0;
                return (n.data.date ? new Date(n.data.date).getTime() : 0) - c;
              })
              .slice(0, 3)
              .map((t) => ({
                title: t.data.title,
                description: t.data.description,
                image: t.data.image,
                date: t.data.date,
                categorie: m.isFilled.contentRelationship(t.data.press_category)
                  ? t.data.press_category?.slug
                  : "",
                duration: t.data.time_reading,
                ctaLabel: "Leer más",
                ctaLink: `/empresa/sala-de-prensa/${t.uid}`,
                cta: {
                  onClick: () => {
                    h(
                      "leerarticulo_apertura",
                      `/empresa/sala-de-prensa/${t.uid}`,
                    );
                  },
                },
              }))
          : [],
      );
    P(p);
    const o = D(),
      C = o.query.q ? String(o.query.q) : "",
      q = o.query.services ? String(o.query.services) : "";
    return (t, n) => {
      const c = $,
        l = w,
        v = x,
        S = B;
      return (
        E(),
        Q("div", null, [
          i(c, { page: e(p) }, null, 8, ["page"]),
          i(
            l,
            {
              title: e(r)("restaurants.title"),
              description: e(r)("restaurants.description"),
              subtitle: e(r)("restaurants.subtitle"),
              "search-placeholder": e(r)("restaurants.search-placeholder"),
              q: e(C),
              services: e(q),
            },
            null,
            8,
            [
              "title",
              "description",
              "subtitle",
              "search-placeholder",
              "q",
              "services",
            ],
          ),
          i(
            S,
            { title: e(r)("restaurants.more-news-carrousel") },
            {
              carrousel: W(() => [i(v, { cards: e(y) }, null, 8, ["cards"])]),
              _: 1,
            },
            8,
            ["title"],
          ),
        ])
      );
    };
  },
});
export { bt as default };
