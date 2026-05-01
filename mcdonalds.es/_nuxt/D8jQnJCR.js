import { u as L, f as $, b as v, d as P } from "./w36zW0QG.js";
import { i as c, a as x, t as h } from "./Ca9Ptn7z.js";
function j() {
  const { locale: t } = L(),
    a = v(),
    i = $();
  function n(e) {
    if (!e || typeof e != "object") return "#";
    if (typeof e.url == "string" && (c(e.url) || x(e.url))) return e.url;
    const u = a.asLink(e, { linkResolver: R });
    if (!u) return "#";
    const l = p(t.value);
    return t.value === "es" || u.startsWith(`/${l}`) ? u : `/${l}${u}`;
  }
  function r(e) {
    if (!e) return "";
    if (c(e)) return e;
    const u = p(t.value);
    return t.value === "es" ? e : `/${u}${e}`;
  }
  function o(e) {
    return n({ type: "product_category_page", uid: e });
  }
  function _() {
    return o("alergenos");
  }
  function d() {
    return o("sin-gluten");
  }
  function g(e, u) {
    return n({
      type: "product_page",
      uid: e,
      data: { main_product_category: { uid: u } },
    });
  }
  function f() {
    return n({ type: "products_page" });
  }
  function k() {
    return n({ type: "restaurantes_page" });
  }
  function b() {
    return n({ type: "mymcdonalds_subpage", uid: "pide-y-paga" });
  }
  function y() {
    return n({ type: "products_page" });
  }
  function C() {
    return i.linkToMyorder;
  }
  return {
    asLinkCustom: n,
    asLinkCustomByUrlPath: r,
    asLinkCustomCarta: y,
    asLinkCustomPideYPaga: b,
    asDeeplinkPidePaga: C,
    asLinkCustomProduct: g,
    asLinkCustomProductCat: o,
    asLinkCustomProductCatAlergenos: _,
    asLinkCustomProductCatSinGluten: d,
    asLinkCustomProducts: f,
    asLinkCustomRestaurants: k,
  };
}
var m = ((t) => (
  (t.CardInfoData = "card_info_data"),
  (t.CardInfoImage = "card_info_image"),
  (t.CardSingle = "card_single"),
  (t.CardFeature = "card_feature"),
  (t.CardFeatureCallout = "card_feature_callout"),
  (t.CardQuote = "card_quote"),
  t
))(m || {});
function B(t) {
  return Object.values(m).includes(t);
}
function F(t) {
  return (t || [])
    .filter((i) => typeof i.card == "object")
    .map((i) => i.card)
    .map(D);
}
function D(t) {
  const { $gtmClickBoton: a } = P(),
    i =
      t.data?.cta_label || t.data?.cta_link
        ? s({
            label: t.data?.cta_label || "",
            link: t.data?.cta_link,
            cta_gtm: t.data?.cta_gtm,
            color: t.data?.cta_color,
          })
        : void 0;
  if (i) {
    const o = t.data?.cta_gtm || `${t.data?.title || ""}_${i.label}`;
    i.onClick = () => {
      a(o, i.url);
    };
  }
  const n = t.data?.to_link ? s({ label: "", link: t.data?.to_link }) : void 0;
  if (n) {
    const o = `${t.data?.title || ""}${n.label}`;
    ((n.onClick = () => a(o, n.url)), (n.to = n.url));
  }
  const r =
    t.data?.cta_label_2 || t.data?.cta_link_2
      ? s({
          label: t.data?.cta_label_2 || "",
          link: t.data?.cta_link_2,
          cta_gtm: t.data?.cta_gtm_2,
          color: t.data?.cta_color_2,
        })
      : void 0;
  if (r) {
    const o = t.data?.cta_gtm_2 || `${t.data?.title || ""}_${r.label}`;
    r.onClick = () => a(o, r.url);
  }
  return {
    id: t.id,
    uid: t.uid,
    type: t.type,
    title: t.data?.title,
    headline: t.data?.headline,
    image: t.data?.image,
    descriptionRichtext: t.data?.description,
    descriptionFooterRichtext: t.data?.description_footer,
    logo: t.data?.logo,
    cta: i,
    variant: t.data?.variant,
    theme: t.data?.theme,
    video: t.data?.video?.url,
    autor: t.data?.autor,
    autor_position: t.data?.autor_position,
    testimonial: t.data?.testimonial,
    link_label: t.data?.link_secondary_label,
    link_link: t.data?.link_secondary,
    link: n,
    secondaryCta: r,
    hideComma: t.data?.hide_comma,
    prismicDocLink: t.prismicDocLink,
    gtm_text: t.data?.gtm_text,
    points: t.data?.points,
    url_query: t.data?.url_query,
  };
}
function s(t) {
  const a = j();
  return {
    id: t.label ? h(t.label) : "",
    label: t.label || "",
    linkPrismic: t.link,
    url: a.asLinkCustom(t.link) || "",
    to: a.asLinkCustom(t.link) || "",
    target: t.link?.target || "",
    cta_gtm: t.cta_gtm,
    color: t.color,
  };
}
const p = (t) => {
    const a = "es-es";
    return (t && { ca: "ca", eu: "eu" }[t]) || a;
  },
  R = (t) => {
    const a = q(t.type);
    if (!a) return null;
    if (t.type === "product_page") {
      const i =
        (typeof t.data == "object" &&
          typeof t.data.main_product_category == "object" &&
          t.data.main_product_category.uid) ||
        "productos";
      return `${a}/${i}/${t.uid}`;
    }
    return t.uid ? `${a}/${t.uid}` : a;
  };
function q(t) {
  return ["commitments_page", "commitments_subpage"].includes(t)
    ? "/compromisos"
    : ["family_page", "family_subpage"].includes(t)
      ? "/familias"
      : ["faq_page"].includes(t)
        ? "/preguntas-frecuentes-app"
        : ["mccafe_page"].includes(t)
          ? "/mccafe"
          : ["products_page", "product_category_page", "product_page"].includes(
                t,
              )
            ? "/productos"
            : ["mcdonalds_page", "mcdonalds_subpage"].includes(t)
              ? "/empresa"
              : ["press_page", "press_subpage"].includes(t)
                ? "/empresa/sala-de-prensa"
                : ["contact_page", "contact_subpage"].includes(t)
                  ? "/contacto"
                  : ["restaurantes_page"].includes(t)
                    ? "/restaurantes"
                    : ["mymcdonalds_page", "mymcdonalds_subpage"].includes(t)
                      ? "/mymcdonalds"
                      : ["document_page", "document_subpage"].includes(t)
                        ? "/documentos"
                        : ["modal_popup"].includes(t)
                          ? "/popups"
                          : ["home_page"].includes(t)
                            ? "/"
                            : null;
}
export { D as a, F as c, p as f, B as i, s as l, j as u };
