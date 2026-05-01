import { _ as l } from "./Cexk3NTh.js";
import { E as p } from "./BSFMrA7C.js";
import { f as _ } from "./D8jQnJCR.js";
import { e as f, u as g, a as d } from "./w36zW0QG.js";
import { u as y } from "./CiwS9yAb.js";
import { u as h } from "./CrhiQlU-.js";
import { l as b, d as v, ab as S, N as w, u as x, O as C } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const O = b({
  __name: "[uid]",
  async setup(E) {
    let a, o;
    const r = f(),
      e = v(r.params.uid),
      { handleError: t } = y(),
      n = `{
  family_subpage {
    ...family_subpageFields
    slices {
      ${p(e.value)}
    }
  }
}`,
      { locale: c } = g(),
      m = _(c.value),
      { data: s, error: i } =
        (([a, o] = S(() =>
          d(
            e.value,
            () =>
              $fetch("/api/cms/collection/family_subpage/" + e.value, {
                params: { lang: m, graphQuery: n },
              }),
            { watch: [e] },
          ),
        )),
        (a = await a),
        o(),
        a);
    return (
      t(i.value),
      h(s),
      (P, $) => {
        const u = l;
        return (C(), w(u, { page: x(s) }, null, 8, ["page"]));
      }
    );
  },
});
export { O as default };
