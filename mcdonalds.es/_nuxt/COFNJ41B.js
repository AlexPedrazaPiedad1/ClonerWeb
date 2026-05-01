import { _ as l } from "./Cexk3NTh.js";
import { u as i } from "./BSFMrA7C.js";
import { f as _ } from "./D8jQnJCR.js";
import { e as d, u as f, a as g } from "./w36zW0QG.js";
import { u as h } from "./CiwS9yAb.js";
import { u as b } from "./CrhiQlU-.js";
import { l as v, d as y, ab as S, N as w, u as x, O as C } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const O = v({
  __name: "[uid]",
  async setup(M) {
    let a, o;
    const r = d(),
      e = y(r.params.uid),
      { handleError: t } = h(),
      n = `{
  mcdonalds_subpage {
    ...mcdonalds_subpageFields
    slices {
      ${i(e.value)}
    }
  }
}`,
      { locale: c } = f(),
      m = _(c.value),
      { data: s, error: u } =
        (([a, o] = S(() =>
          g(
            e.value,
            () =>
              $fetch("/api/cms/collection/mcdonalds_subpage/" + e.value, {
                params: { lang: m, graphQuery: n },
              }),
            { watch: [e] },
          ),
        )),
        (a = await a),
        o(),
        a);
    return (
      t(u.value),
      b(s),
      ($, k) => {
        const p = l;
        return (C(), w(p, { page: x(s) }, null, 8, ["page"]));
      }
    );
  },
});
export { O as default };
