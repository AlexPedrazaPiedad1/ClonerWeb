import { _ as p } from "./Cexk3NTh.js";
import { K as l } from "./BSFMrA7C.js";
import { f as _ } from "./D8jQnJCR.js";
import { e as f, u as g, a as d } from "./w36zW0QG.js";
import { u as h } from "./CiwS9yAb.js";
import { u as b } from "./CrhiQlU-.js";
import { l as v, d as y, ab as C, N as S, u as w, O as x } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const N = v({
  __name: "[uid]",
  async setup(P) {
    let e, o;
    const t = f(),
      a = y(t.params.uid),
      { handleError: r } = h(),
      m = `{
  commitments_subpage {
    ...commitments_subpageFields
    slices {
      ${l(a.value)}
    }
  }
}`,
      { locale: n } = g(),
      c = _(n.value),
      { data: s, error: i } =
        (([e, o] = C(() =>
          d(
            a.value,
            () =>
              $fetch("/api/cms/collection/commitments_subpage/" + a.value, {
                params: { lang: c, graphQuery: m },
              }),
            { watch: [a] },
          ),
        )),
        (e = await e),
        o(),
        e);
    return (
      r(i.value),
      b(s),
      ($, k) => {
        const u = p;
        return (x(), S(u, { page: w(s) }, null, 8, ["page"]));
      }
    );
  },
});
export { N as default };
