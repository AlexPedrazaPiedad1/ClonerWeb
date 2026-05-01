import { _ as c } from "./Cexk3NTh.js";
import { k as n, l as m, d as p, F as l } from "./BSFMrA7C.js";
import { f as _ } from "./D8jQnJCR.js";
import { u as f, a as u } from "./w36zW0QG.js";
import { u as g } from "./CrhiQlU-.js";
import { l as d, ab as y, N as $, u as S, O as h } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const D = d({
  __name: "index",
  async setup(x) {
    let a, e;
    const o = `{
family_page {
  ...family_pageFields
  slices {
    ${n}
    ${m}
    ${p}
    ${l}
  }
}
}`,
      { locale: t } = f(),
      i = _(t.value),
      { data: s } =
        (([a, e] = y(() =>
          u("family_page", () =>
            $fetch("/api/cms/single/family_page", {
              params: { graphQuery: o, lang: i },
            }),
          ),
        )),
        (a = await a),
        e(),
        a);
    return (
      g(s),
      (C, k) => {
        const r = c;
        return (h(), $(r, { page: S(s) }, null, 8, ["page"]));
      }
    );
  },
});
export { D as default };
