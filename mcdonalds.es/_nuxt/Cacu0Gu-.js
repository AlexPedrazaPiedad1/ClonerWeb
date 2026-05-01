import { _ as p } from "./Cexk3NTh.js";
import { M as l } from "./BSFMrA7C.js";
import { f as _ } from "./D8jQnJCR.js";
import { u } from "./BRt-WM6-.js";
import { u as f, a as y } from "./w36zW0QG.js";
import { u as d } from "./DJr8JROT.js";
import { u as g } from "./CrhiQlU-.js";
import { l as h, ab as r, N as L, u as M, O as z } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const Q = h({
  __name: "index",
  async setup(P) {
    let a, e;
    const m = `{
  mymcdonalds_page {
    ...mymcdonalds_pageFields
    slices {
      ${l}
    }
  }
}`,
      { locale: n } = f(),
      c = _(n.value),
      { data: s } =
        (([a, e] = r(() =>
          y("mymcdonalds_page", () =>
            $fetch("/api/cms/single/mymcdonalds_page", {
              params: { graphQuery: m, lang: c },
            }),
          ),
        )),
        (a = await a),
        e(),
        a),
      t = u();
    if (!t.hasLoadedPrizes) {
      const { data: o } =
        (([a, e] = r(() => d("/api/loyalty-prizes", "$fMLQTBNhgR"))),
        (a = await a),
        e(),
        a);
      o.value && t.setLoyaltyPrizes(o.value);
    }
    return (
      g(s),
      (o, S) => {
        const i = p;
        return (z(), L(i, { page: M(s) }, null, 8, ["page"]));
      }
    );
  },
});
export { Q as default };
