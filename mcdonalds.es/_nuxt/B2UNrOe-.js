import { _ as p } from "./Cexk3NTh.js";
import { k as n, l as i, P as m, Q as l } from "./BSFMrA7C.js";
import { f as _ } from "./D8jQnJCR.js";
import { u, a as f } from "./w36zW0QG.js";
import { u as g } from "./CrhiQlU-.js";
import { l as d, ab as $, N as h, u as x, O as y } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const v = d({
  __name: "index",
  async setup(B) {
    let e, s;
    const o = `{
press_page {
  ...press_pageFields
  slices {
    ${n}
    ${i}
    ${m}
    ${l}
  }
}
}`,
      { locale: r } = u(),
      t = _(r.value),
      { data: a } =
        (([e, s] = $(() =>
          f("press_page", () =>
            $fetch("/api/cms/single/press_page", {
              params: { graphQuery: o, lang: t },
            }),
          ),
        )),
        (e = await e),
        s(),
        e);
    return (
      g(a),
      (S, k) => {
        const c = p;
        return (y(), h(c, { page: x(a) }, null, 8, ["page"]));
      }
    );
  },
});
export { v as default };
