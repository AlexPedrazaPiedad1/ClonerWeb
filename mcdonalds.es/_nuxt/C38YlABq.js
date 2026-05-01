import { _ as n } from "./Cexk3NTh.js";
import { k as p, C as m, y as i, l } from "./BSFMrA7C.js";
import { f as _ } from "./D8jQnJCR.js";
import { u as f, a as u } from "./w36zW0QG.js";
import { u as g } from "./CrhiQlU-.js";
import { l as d, ab as y, N as $, u as q, O as C } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const v = d({
  __name: "preguntas-frecuentes-app",
  async setup(h) {
    let a, e;
    const o = `{
faq_page {
  ...faq_pageFields
  slices {
    ${p}
    ${m}
    ${i}
    ${l}
  }
}
}`,
      { locale: t } = f(),
      r = _(t.value),
      { data: s } =
        (([a, e] = y(() =>
          u("faq_page", () =>
            $fetch("/api/cms/single/faq_page", {
              params: { graphQuery: o, lang: r },
            }),
          ),
        )),
        (a = await a),
        e(),
        a);
    return (
      g(s),
      (S, k) => {
        const c = n;
        return (C(), $(c, { page: q(s) }, null, 8, ["page"]));
      }
    );
  },
});
export { v as default };
