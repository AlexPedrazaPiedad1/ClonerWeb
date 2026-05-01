import { _ as f } from "./Cexk3NTh.js";
import { L as _ } from "./BSFMrA7C.js";
import { f as y } from "./D8jQnJCR.js";
import { u as g } from "./BRt-WM6-.js";
import { e as h, u as v, a as L } from "./w36zW0QG.js";
import { u as P } from "./CiwS9yAb.js";
import { u as S } from "./DJr8JROT.js";
import { u as b } from "./CrhiQlU-.js";
import { l as z, d as w, ab as c, N as C, u as M, O as $ } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const T = z({
  __name: "[uid]",
  async setup(x) {
    let a, e;
    const m = h(),
      o = w(m.params.uid),
      { handleError: n } = P(),
      i = `{
  mymcdonalds_subpage {
    ...mymcdonalds_subpageFields
    slices {
      ${_(o.value)}
      }
    }
}`,
      { locale: u } = v(),
      l = y(u.value),
      { data: t, error: p } =
        (([a, e] = c(() =>
          L(
            o.value,
            () =>
              $fetch("/api/cms/collection/mymcdonalds_subpage/" + o.value, {
                params: { lang: l, graphQuery: i },
              }),
            { watch: [o] },
          ),
        )),
        (a = await a),
        e(),
        a);
    n(p.value);
    const r = g();
    if (!r.hasLoadedPrizes) {
      const { data: s } =
        (([a, e] = c(() => S("/api/loyalty-prizes", "$X_Cr7GUGfR"))),
        (a = await a),
        e(),
        a);
      s.value && r.setLoyaltyPrizes(s.value);
    }
    return (
      b(t),
      (s, k) => {
        const d = f;
        return ($(), C(d, { page: M(t) }, null, 8, ["page"]));
      }
    );
  },
});
export { T as default };
