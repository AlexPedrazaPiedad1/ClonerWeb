import { _ as r } from "./Cexk3NTh.js";
import { u as m } from "./BSFMrA7C.js";
import { f as p } from "./D8jQnJCR.js";
import { u as i, a as l } from "./w36zW0QG.js";
import { u } from "./CrhiQlU-.js";
import { l as _, ab as d, N as f, u as g, O as b } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const L = _({
  __name: "index",
  async setup(y) {
    let a, e;
    const s = `{
  mcdonalds_subpage {
    ...mcdonalds_subpageFields
    slices {
      ${m("franquiciate")}
    }
  }
}`,
      { locale: t } = i(),
      n = p(t.value),
      { data: o } =
        (([a, e] = d(() =>
          l("mcdonalds_subpage", () =>
            $fetch("/api/cms/collection/mcdonalds_subpage/franquiciate", {
              params: { lang: n, graphQuery: s },
            }),
          ),
        )),
        (a = await a),
        e(),
        a);
    return (
      u(o, {}),
      (h, x) => {
        const c = r;
        return (b(), f(c, { page: g(o) }, null, 8, ["page"]));
      }
    );
  },
});
export { L as default };
