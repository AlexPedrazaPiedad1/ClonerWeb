import { _ as m } from "./Cexk3NTh.js";
import { r as i } from "./BSFMrA7C.js";
import { f as n } from "./D8jQnJCR.js";
import { u as p, a as l } from "./w36zW0QG.js";
import { u as _ } from "./CrhiQlU-.js";
import { l as f, ab as g, N as u, u as d, O as y } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const L = f({
  __name: "mcdelivery",
  async setup(v) {
    let e, a;
    const r = `{
mcdelivery_page {
  ...mcdelivery_pageFields
  slices {
    ${i}
  }
}
}`,
      { locale: s } = p(),
      t = n(s.value),
      { data: o } =
        (([e, a] = g(() =>
          l("mcdelivery_page", () =>
            $fetch("/api/cms/single/mcdelivery_page", {
              params: { lang: t, graphQuery: r },
            }),
          ),
        )),
        (e = await e),
        a(),
        e);
    return (
      _(o),
      (h, x) => {
        const c = m;
        return (y(), u(c, { page: d(o) }, null, 8, ["page"]));
      }
    );
  },
});
export { L as default };
