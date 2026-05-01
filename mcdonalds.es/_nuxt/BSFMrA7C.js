const e = `...on breadcrumb {
variation {
  ...on default {
    primary {
      ...primaryFields
    }
  }
}
}`,
  z = `...on master_card {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  S = `...on call_to_action {
variation {
  ...on default {
    primary {
      ...primaryFields
    }
  }
  ...on sinGluten {
    primary {
      ...primaryFields
    }
  }
    ...on world {
    primary {
      ...primaryFields
    }
  }
}
}
`,
  w = `...on call_to_action_with_image {
variation {
  ...on default {
    primary {
      ...primaryFields
    }
  }
}
}
`,
  t = `...on carousel {
variation {
  ...on default {
      primary {
        ...primaryFields
        cards {
        ${r(s)}
      }
      ${a()}
      }
    }
  ...on carouselFeatureCallout {
    primary {
      ...primaryFields
      cards {
        ${r(_)}
      }
      ${a()}
    }
  }
  ...on carouselInfoData {
    primary {
      ...primaryFields
      cards {
        ${r(F)}
      }
      ${a()}
    }
  }
  ...on carouselQuote {
    primary {
      ...primaryFields
      cards {
        ${r(b)}
      }
      ${a()}
    }
  }
  ...on carrouselOverlay {
    primary {
      ...primaryFields
      cards {
        ${r(s)}
      }
    }
  }
    ...on carrouselPrize {
    primary {
      ...primaryFields
    }
  }
}
}
`,
  N = `...on carousel {
  variation {
    ...on default {
        primary {
          ...primaryFields
          cards {
          ${r(s)}
        }
        ${a()}
        }
      }
    ...on carouselQuote {
      primary {
        ...primaryFields
        cards {
          ${r(b)}
        }
        ${a()}
      }
    }
      ...on carrouselPrize {
      primary {
        ...primaryFields
      }
    }
  }
  }
  `,
  Mr = `...on carousel {
  variation {
    ...on default {
        primary {
          ...primaryFields
          cards {
          ${r(s)}
        }
        ${a()}
        }
      }
    ...on carouselInfoData {
      primary {
        ...primaryFields
        cards {
          ${r(F)}
        }
        ${a()}
      }
    }
  }
  }
  `,
  j = `...on carousel {
  variation {
    ...on default {
        primary {
          ...primaryFields
          cards {
          ${r(s)}
        }
        ${a()}
        }
      }
    ...on carrouselOverlay {
      primary {
        ...primaryFields
        cards {
          ${r(s)}
        }
      }
    }
  }
  }
  `,
  g = `...on section_info_image {
variation {
  ...on default {
    primary {
      ...primaryFields
      cards {
        card {
          ${lr()}
        }
      }
    }
  }
}
}
`,
  y = `...on section_cards_single_one {
variation {
  ...on default {
    primary {
      ...primaryFields
      ${r(l)}
      ${a()}
    }
  }
  ...on blue {
    primary {
      ...primaryFields
      ${r(l)}
      ${a()}
    }
  }
    ...on gray {
    primary {
      ...primaryFields
      ${r(l)}
      ${a()}
    }
  }
}
}
`,
  C = `...on section_cards_single {
variation {
  ...on default {
    primary {
      ...primaryFields
      cards {
        ${r(l)}
      }
      ${a()}
    }
  }
  ...on yellow {
    primary {
      ...primaryFields
      cards {
        ${r(l)}
      }
      ${a()}
    }
  }
  ...on green {
    primary {
      ...primaryFields
      cards {
        ${r(l)}
      }
      ${a()}
    }
  }
    ...on 23 {
    primary {
      ...primaryFields
      cards {
        ${r(l)}
      }
      ${a()}
    }
  }
}
}
`,
  u = `...on section_cards_feature {
variation {
  ...on default {
    primary {
      ...primaryFields
      cards {
        ${r(s)}
      }
      ${a()}
    }
  }
  ...on cheese {
    primary {
      ...primaryFields
      cards {
        ${r(s)}
      }
    }
  }
  ...on gold14 {
    primary {
      ...primaryFields
      cards {
        ${r(s)}
      }
    }
  }
  ...on cheese12 {
    primary {
      ...primaryFields
      cards {
        ${r(s)}
      }
    }
  }
}
}
`,
  P = `...on section_cards_calidad {
variation {
  ...on default {
    primary {
      ...primaryFields
    }
  }
}
}`,
  n = `...on section_cross_feature_callout {
  variation {
    ...on default {
      primary {
        ...primaryFields
        card_1 {
          ${_()}
        }
        card_2 {
          ${_()}
        }
      }
    }
  }
}
`,
  $ = `...on media_section {
  variation {
    ...on default {
      primary {
        ...primaryFields
        ${a()}
      }
    }
    ...on vertical {
      primary {
        ...primaryFields
        ${a()}
      }
    }
    ...on fundacionQueEs {
      primary {
        ...primaryFields
        ${a()}
      }
    }
    ...on break {
      primary {
        ...primaryFields
      }
    }
    ...on right {
      primary {
        ...primaryFields
      }
    }
    ...on crew {
      primary {
        ...primaryFields
      }
    }
    ...on left {
      primary {
      ...primaryFields
      }
    }
  }
}`,
  B = `...on media_section {
  variation {

    ...on crew {
      primary {
        ...primaryFields
      }
    }

  }
}`,
  h = `...on section_medias {
  variation {
    ...on default {
      primary {
        ...primaryFields
        cards {
          card {
            ${gr()}
          }
        }
        ${a()}
      }
    }
  }
}`,
  H = `...on section_media_pins {
  variation {
    ...on default {
      primary {
        ...primaryFields
        pins {
            ...pinsFields
          }
        }
    }
    ...on world {
      primary {
        ...primaryFields
        pins {
            ...pinsFields
          }
        }
    }
  }
}`,
  Dr = `...on section_combo {
  variation {
    ...on default {
      primary {
        ...primaryFields
        carousel {
            ${r(s)}
        }
        products {
            ${r(s)}
        }
      }
    }
  }
}`,
  q = `...on faqs_summary {
variation {
  ...on default {
    primary {
      ...primaryFields
      faqs {
        faq {
          ...on faq {
            ...faqFields
          }
        }
      }
    }
  }
}
}`,
  M = `...on carousel_timeline {
variation {
  ...on default {
    primary {
      ...primaryFields
    }
  }
  ...on carouselTimelineInfoData {
    primary {
      ...primaryFields
      cards {
        timeline_label
        ${r(F)}
      }
      ${a()}
    }
  }
}
}`,
  Ir = `...on collapsable_panel {
  variation {
    ...on default {
      primary {
        ...primaryFields
        items {
          item {
            ${yr()}
          }
        }
      }
    }
  }
}
`,
  o = `...on hero {
  variation {
    ...on default {
      primary {
        ...primaryFields
        hero {
          ${_r()}
        }
      }
    }
    ... on heroVideo {
      primary {
        ...primaryFields
        hero {
          ${fr()}
        }
      }
    }
  }
}`,
  L = `...on section_grid {
  variation {
    ...on default {
      primary {
        ...primaryFields
        cards {
          ${r(s)}
        }
      }
    }
    ...on apiCards {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  v = `...on section_tabs {
  variation {
    ...on default {
      primary {
        ...primaryFields
        tabs {
          tab {
            ...tabFields
            slices {
              ${L}
              ${z}
              ${t}
            }
          }
        }
      }
    }
  }
}`,
  R = `...on section_tabs {
 variation {
    ...on default {
      primary {
        ...primaryFields
        tabs {
          tab {
            ...tabFields
            slices {
              ${t}
            }
          }
        }
      }
    }
  }
}`,
  p = `...on section_rich_text {
  variation {
    ... on default {
      primary {
        ...primaryFields
        cards {
          card {
            ${Fr()}
          }
        }
        ${a()}
      }
    }
  }
}`,
  xr = `...on search_mccafe {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  D = `...on search_carta {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  Tr = `...on section_text {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  Gr = `...on search_blog {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  I = `...on product_header {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  d = `...on section_title {
  variation {
    ...on default {
      primary {
        ...primaryFields
        ${a()}
      }
    }
  }
}`,
  k = `...on section_product_groups {
  variation {
    ...on default {
      primary {
        ...primaryFields
        groups {
          group {
            ${O()}
          }
        }
      }
    }
  }
}`,
  A = `...on section_products_group_grouped {
  variation {
    ...on default {
      primary {
        ...primaryFields
        group {
          group {
            ${O()}
          }
        }
      }
    }
  }
}`,
  E = `...on section_product_groups_sin_gluten {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  f = `...on carrousel_products {
  variation {
    ...on default {
      primary {
        ...primaryFields
        products {
          product {
            ...on product_page {
              ...product_pageFields
            }
          }
        }
      }
    }
    ...on pcp {
      primary {
        ...primaryFields
        separator_bottom {
      ...on separator {
        ...separatorFields
      }
    }
      }
    }
    ...on novedades {
      primary {
        ...primaryFields
      }
    }
    ...on newPcP {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  Or = `...on section_form {
  variation {
    ...on default {
      primary {
        ...primaryFields
        forms {
          form {
            ${Sr()}
            ${hr()}
            ${br()}
          }
        }
      }
    }
  }
}`,
  J = `...on instagram_posts {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
      ...on grid {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  K = `...on section_new_offers_combo {
  variation {
    ...on default {
      primary {
        ...primaryFields
        main_offer {
          ...main_offerFields
        }
        stories {
          story {
            ...storyFields
          }
        }
      }
    }
  }
}`,
  x = `...on new_hero {
  variation {
    ...on default {
      primary {
        ...primaryFields
        content {
          ...on newheroslide {
            ...newheroslideFields
            slices {
              ${K}
            }
          }
        }
      }
    }
  }
}`,
  V = `...on new_section_single_card {
  variation {
    ...on default {
      primary {
        ...primaryFields
        cards {
          newsinglecard {
            ...newsinglecardFields
            variant
            sec_variant
          }
        }
      }
    }
  }
}`,
  W = `...on section_cards_dropdown {
  variation {
    ...on default {
      primary {
        ...primaryFields
        cards {
          card {
            ${ur()}
          }
        }
      }
    }
  }
}
`,
  U = `...on section_form_birthday_invitation {
  variation {
    ...on default {
      primary {
        ...primaryFields
        card {
          ${l()}
        }
        form {
          ${pr()}
        }
      }
    }
  }
}`,
  X = `...on section_form_birthday_restaurant {
  variation {
    ...on default {
      primary {
        ...primaryFields
        form {
          ${$r()}
        }
      }
    }
  }
}`,
  Qr = `...on section_combo_quote_single {
  variation {
    ...on default {
      primary {
        ...primaryFields
        cards {
            ${r(b)}
        }
          ${r(l)}
      }
    }
  }
}`,
  Y = `...on section_cross_products {
  variation {
    ...on default {
      primary {
        ...primaryFields
        cross {
          ${Cr()}
        }
      }
    }
  }
}`,
  zr = `...on hero_carrousel {
  variation {
    ...on default {
      primary {
        ...primaryFields
        cards {
            ${r(mr)}
        }
      }
    }
  }
}`,
  Z = `...on section_coin {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  T = `...on section_newsletter {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  Nr = `...on section_my_mc_d {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  G = `...on media_section_background {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  rr = `...on legal_summary {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
  }`,
  ir = `...on rich_text {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
  }
}`,
  ar = `...on base_table {
  variation {
    ...on default {
      primary {
        ...primaryFields
        table {
          ${Pr()}
        }
      }
    }
  }
}`,
  jr = `...on section_scroll_down {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  er = `...on mc_delivery {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  or = `...on card_quote {
  variation {
    ...on default {
      primary {
        ...primaryFields
        accordions {
          accordion_game {
            ...accordion_gameFields
          }
        }
      }
    }
  }
}`,
  nr = `...on section_game {
  variation {
    ...on default {
      primary {
        ...primaryFields
        cards {
         ${r(s)}
        }
        levels {
          level_cards {
            ...level_cardsFields
            slices {
              ${or}
            }
          }
        }
      }
    }
  }
}`,
  sr = `...on carousel {
  variation {
    ...on default {
        primary {
          ...primaryFields
          cards {
          ${r(s)}
        }
        ${a()}
        }
      }
        ...on carouselInfoData {
    primary {
      ...primaryFields
      cards {
        ${r(F)}
      }
      ${a()}
    }
  }
    ...on carouselFeatureCallout {
      primary {
        ...primaryFields
        cards {
          ${r(_)}
        }
        ${a()}
      }
    }
      ...on carrouselPrizeCard {
      primary {
        ...primaryFields
        cards {
          ${r(qr)}
        }
        ${a()}
      }
    }
  }
  }
  `,
  tr = `...on landing_footer {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  cr = `...on section_new_offer {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`,
  dr = `...on anchor_navigation {
  variation {
    ...on default {
      primary {
        ...primaryFields
      }
    }
  }
}`;
function r(c) {
  return `
    card {${c()}}
  `;
}
function l() {
  return `
    ...on card_single {
      ...card_singleFields
    }
  `;
}
function s() {
  return `
    ...on card_feature {
      ...card_featureFields
    }
  `;
}
function _() {
  return `
    ...on card_feature_callout {
      ...card_feature_calloutFields
    }
  `;
}
function F() {
  return `
    ...on card_info_data {
      ...card_info_dataFields
    }
  `;
}
function b() {
  return `
    ...on card_quote {
      ...card_quoteFields
    }
  `;
}
function lr() {
  return `
    ...on card_info_image {
      ...card_info_imageFields
    }
  `;
}
function ur() {
  return `
    ...on card_dropdown {
      ...card_dropdownFields
    }
  `;
}
function mr() {
  return `
    ...on hero_card {
      ...hero_cardFields
    }
    ...on hero_card_video {
      ...hero_card_videoFields
    }
  `;
}
function pr() {
  return `
    ...on form_birthday_invitation {
      ...form_birthday_invitationFields
      fields {
        field {
          ${m()}
        }
        required
        uid
      }
    }
  `;
}
function $r() {
  return `
    ...on form_birthday_restaurant {
      ...form_birthday_restaurantFields
      cards {
        card {
          ${s()}
        }
      }
      fields {
        field {
          ${m()}
        }
        required
        uid
      }
      fields_2 {
        field {
          ${m()}
        }
        required
        uid
      }
    }
  `;
}
function a() {
  return `
    separator_top {
      ...on separator {
        ...separatorFields
      }
    }
    separator_bottom {
      ...on separator {
        ...separatorFields
      }
    }
  `;
}
function yr() {
  return `
    ...on dropdown {
      ...dropdownFields
    }
  `;
}
function _r() {
  return `
    ...on hero_header {
      ...hero_headerFields
    }
  `;
}
function fr() {
  return `
    ...on hero_header_video {
      ...hero_header_videoFields
    }
  `;
}
function Fr() {
  return `
    ...on richtext {
      ...richtextFields
    }
  `;
}
function gr() {
  return `
    ...on media {
      ...mediaFields
    }
  `;
}
function O() {
  return `
    ...on product_category_group {
      ...product_category_groupFields
      products {
        product {
          ...on product_page {
            listing_title
            listing_image
            new
            new_allergens
          }
        }
        group {
        ${vr()}
        }
      }
    }
  `;
}
function vr() {
  return `
    ...on product_category_groups {
      ...product_category_groupsFields
      groups {
        group_menu_4you_uid
      }
    }
  `;
}
function Sr() {
  return `
    ...on form_contact_sugerencia {
      ...form_contact_sugerenciaFields
      fields_1 {
        field {
          ${m()}
        }
          required
          uid
      }
      fields_2 {
        field {
          ${m()}
        }
        required
        uid
      }
    }
  `;
}
function hr() {
  return `
    ...on form_contact_consulta {
      ...form_contact_consultaFields
      subjects {
        subject {
          ${wr()}
        }
      }
      fields {
        field {
          ${m()}
        }
          required
          uid
      }
      fields_2 {
        field {
          ${m()}
        }
          required
          uid
      }
    }
  `;
}
function br() {
  return `
    ...on form_franquiciate {
      ...form_franquiciateFields
      fields {
        field {
          ${m()}
        }
        required
        uid
      }
    }
  `;
}
function m() {
  return `
    ...on form_field {
      ...form_fieldFields
    }
  `;
}
function wr() {
  return `
    ...on form_contact_subject {
      ...form_contact_subjectFields
    }
  `;
}
function Cr() {
  return `
    ...on product_cross_pair {
      ...product_cross_pairFields
      cards {
        ${r(_)}
      }
    }
  `;
}
function Pr() {
  return `
    ...on table {
      ...tableFields
    }
  `;
}
function qr() {
  return `
    ...on card_prize {
      ...card_prizeFields
    }
  `;
}
function i(c) {
  return c.replace(/ {2,}/g, " ").trim();
}
const Q = i(`
${S}
${t}
${M}
${w}
${$}
${P}
${u}
${C}
${y}
${n}
${g}
${e}
${o}
${p}
${h}
`);
function Br(c) {
  switch (c) {
    case "compromiso-empleo":
      return i(`
        ${e}
        ${o}
        ${t}
        ${y}
        ${u}
        ${n}
        ${h}
        ${B}
      `);
    case "compromiso-sin-gluten":
      return i(`
        ${e}
        ${o}
        ${S}
        ${u}
        ${y}
        ${n}
      `);
    case "compromiso-sostenibilidad":
      return i(`
        ${e}
        ${o}
        ${g}
        ${t}
        ${M}
        ${n}
        `);
    case "compromiso-calidad":
      return i(`
        ${e}
        ${o}
        ${w}
        ${t}
        ${P}
        ${n}
    `);
    case "compromiso-familias":
      return i(`
        ${e}
        ${o}
        ${t}
        ${C}
        ${n}
    `);
    case "compliance-integridad":
      return i(`
        ${e}
        ${o}
        ${t}
        ${p}
        ${n}
        ${$}
    `);
    case "plan-de-igualdad":
      return i(`
        ${o}
        ${g}
        ${n}
        ${u}
        ${e}
      `);
    default:
      return Q;
  }
}
function Hr(c) {
  switch (c) {
    case "compliance-integridad":
      return i(`
        ${e}
        ${o}
        ${t}
        ${p}
        ${n}
        ${$}
    `);
    case "franquiciate":
      return i(`
        ${n}
        ${q}
        ${d}
        ${u}
        ${t}
        ${e}
        ${o}
      `);
    default:
      return Q;
  }
}
function Lr(c) {
  switch (c) {
    case "cumpleanos":
      return i(`
        ${U}
        ${W}
        ${X}
        ${t}
        ${$}
        ${n}
        ${e}
        ${o}
      `);
    case "happy-meal":
      return i(`
        ${t}
        ${n}
        ${e}
        ${o}
        ${v}
      `);
    default:
      return i(`
        ${$}
        ${t}
        ${n}
        ${e}
        ${o}
      `);
  }
}
const Rr = i(`
  ${D}
  ${I}
  ${e}
  ${d}
`),
  kr = i(`
  ${I}
  ${e}
  ${k}
  ${A}
  ${d}
  ${u}
  ${E}
  ${f}
  ${n}
  ${D}
  ${o}
`),
  Ar = i(`
  ${f}
  ${Y}
`),
  Er = i(`
  ${j}
  ${d}
  ${T}
  ${Z}
  ${o}
  ${n}
  ${e}
  ${y}
  ${p}
  ${R}
`),
  Jr = (c) => {
    switch (c) {
      case "merchandising":
        return i(`
        ${v}
        ${d}
        ${y}
        ${N}
        ${e}
        ${o}
        `);
      case "pide-y-paga":
        return i(`
        ${v}
        ${G}
        ${T}
        ${n}
        ${p}
        ${$}
        ${e}
        ${o}
        `);
      case "world":
        return i(`
        ${H}
        ${t}
        ${S}
        ${e}
        ${o}
        `);
      default:
        return i(`
        ${o}
        ${e}
      `);
    }
  },
  Kr = i(`
  ${o}
  ${e}
`),
  Vr = i(`
  ${rr}
  ${e}
  ${o}
  ${ar}
  ${ir}
`),
  Wr = i(`
  ${e}
  ${o}
`),
  Ur = i(`
  ${f}
  ${e}
  ${o}
  ${er}
`),
  Xr = i(`
  ${e}
  ${d}
  ${nr}
  ${p}
  ${o}
  ${n}
`);
i(`
   ${d}
        ${u}
       ${n}
        ${q}
        ${d}
        ${u}
        ${t}
        ${e}
        ${o}

`);
const Yr = i(`
        ${sr}
        ${d}
        ${tr}
        ${x}
        ${d}
        ${h}
        ${p}
        ${G}
        ${dr}
`),
  Zr = i(`
  ${f}
  ${x}
  ${cr}
  ${J}
  ${V}
  `);
export {
  Zr as A,
  $ as B,
  u as C,
  Or as D,
  Lr as E,
  h as F,
  Yr as G,
  Rr as H,
  Vr as I,
  Wr as J,
  Br as K,
  Jr as L,
  Er as M,
  kr as N,
  Xr as O,
  Tr as P,
  Gr as Q,
  Ar as R,
  Ir as S,
  d as a,
  f as b,
  zr as c,
  C as d,
  T as e,
  Nr as f,
  J as g,
  x as h,
  cr as i,
  V as j,
  o as k,
  e as l,
  n as m,
  xr as n,
  g as o,
  H as p,
  Dr as q,
  Ur as r,
  jr as s,
  Kr as t,
  Hr as u,
  Mr as v,
  p as w,
  y as x,
  q as y,
  Qr as z,
};
