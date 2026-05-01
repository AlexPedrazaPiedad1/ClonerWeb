import { _ as m } from "./Cexk3NTh.js";
import { x as i, d as r, l as p, k as l, B as _ } from "./BSFMrA7C.js";
import { f as u } from "./D8jQnJCR.js";
import { u as f, a as g } from "./w36zW0QG.js";
import { u as d } from "./CrhiQlU-.js";
import { l as S, ab as $, N as x, u as y, O as C } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const F = S({
  __name: "index",
  async setup(h) {
    let e, a;
    const o = `{
      commitments_page {
        ...commitments_pageFields
        slices {
          ${i}
          ${r}
          ${p}
          ${l}
          ${_}
        }
      }
    }`,
      { locale: t } = f(),
      n = u(t.value),
      { data: s } =
        (([e, a] = $(() =>
          g("commitments_page", () =>
            $fetch("/api/cms/single/commitments_page", {
              params: { graphQuery: o, lang: n },
            }),
          ),
        )),
        (e = await e),
        a(),
        e);
    return (
      d(s),
      (B, k) => {
        const c = m;
        return (C(), x(c, { page: y(s) }, null, 8, ["page"]));
      }
    );
  },
});
export { F as default };
