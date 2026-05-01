import { aa as s } from "./w36zW0QG.js";
import { _ as c } from "./BcttA3Rz.js";
import { l as r, A as i, O as l, Q as t, W as o } from "./CG2MQ2lF.js";
const f = { key: 0, "aria-label": "Oferta bienvenida", class: "" },
  m = { key: 1, "aria-label": "Oferta app" },
  p = r({
    __name: "index",
    props: {
      newsletterData: { type: Object, default: () => ({}) },
      appData: { type: Object, default: () => ({}) },
      animated: { type: Boolean, required: !1, default: () => !1 },
    },
    setup(e) {
      return (d, u) => {
        const n = s,
          a = c;
        return Object.keys(e.newsletterData).length > 0
          ? (l(),
            i("section", f, [
              t(
                a,
                {
                  title: e.newsletterData?.title,
                  description: e.newsletterData?.description[0]?.text,
                  "success-title": e.newsletterData?.success_title,
                  "success-description":
                    e.newsletterData?.success_description[0]?.text,
                  "offer-image": {
                    src: e.newsletterData?.offer_image?.url,
                    alt: e.newsletterData?.offer_image?.alt,
                  },
                  "is-newsletter": !0,
                  theme: "gray",
                  "is-pre-footer": !0,
                  animated: e.animated,
                },
                {
                  legalText: o(() => [
                    t(n, { field: e.newsletterData?.legal_text }, null, 8, [
                      "field",
                    ]),
                  ]),
                  _: 1,
                },
                8,
                [
                  "title",
                  "description",
                  "success-title",
                  "success-description",
                  "offer-image",
                  "animated",
                ],
              ),
            ]))
          : (l(),
            i("section", m, [
              t(
                a,
                {
                  title: e.appData?.title,
                  description: e.appData?.description?.[0]?.text || "",
                  "cta-label": e.appData?.cta_label,
                  "cta-link": e.appData?.cta_link?.url || "",
                  "offer-image": {
                    src: e.appData?.offer_image?.url,
                    alt: e.appData?.offer_image?.alt,
                  },
                  "is-newsletter": !1,
                  theme: "gray",
                  "is-pre-footer": !0,
                  animated: e.animated,
                },
                null,
                8,
                [
                  "title",
                  "description",
                  "cta-label",
                  "cta-link",
                  "offer-image",
                  "animated",
                ],
              ),
            ]));
      };
    },
  });
export { p as _ };
