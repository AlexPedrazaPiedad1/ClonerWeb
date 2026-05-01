import { _ as d } from "./Cexk3NTh.js";
import { N as f } from "./BSFMrA7C.js";
import { u as g, f as y } from "./D8jQnJCR.js";
import { e as h, c as v, u as C, a as k } from "./w36zW0QG.js";
import { u as x } from "./CiwS9yAb.js";
import { u as A } from "./CrhiQlU-.js";
import { l as L, m as P, ab as w, N as $, u as B, O as E } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const Z = L({
  __name: "index",
  async setup(M) {
    let o, t;
    const s = h(),
      c = v(),
      a = P(() => {
        const e = s.params.uid;
        return Array.isArray(e) ? e[0] : e;
      }),
      { asLinkCustomCarta: u } = g();
    a.value === "productos" && c.push(u());
    const { handleError: n } = x(),
      m = `{
  product_category_page {
    ...product_category_pageFields
    slices {
      ${f}
    }
  }
}`,
      { locale: p } = C(),
      i = y(p.value),
      { data: r, error: l } =
        (([o, t] = w(() =>
          k(
            a.value,
            () =>
              $fetch("/api/cms/collection/product_category_page/" + a.value, {
                params: { lang: i, graphQuery: m },
              }),
            { watch: [a] },
          ),
        )),
        (o = await o),
        t(),
        o);
    return (
      n(l.value),
      r.value?.data && (a.value, A(r, {})),
      (e, N) => {
        const _ = d;
        return (E(), $(_, { page: B(r) }, null, 8, ["page"]));
      }
    );
  },
});
export { Z as default };
