import { _ as p } from "./Cexk3NTh.js";
import { H as n } from "./BSFMrA7C.js";
import { f as m } from "./D8jQnJCR.js";
import { u as i, a as _ } from "./w36zW0QG.js";
import { u } from "./CrhiQlU-.js";
import { l, ab as f, N as g, u as d, O as y } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const b = l({
  __name: "index",
  async setup(h) {
    let e, a;
    const s = `{
  products_page {
    ...products_pageFields
    slices {
      ${n}
    }
  }
}`,
      { locale: t } = i(),
      r = m(t.value),
      { data: o } =
        (([e, a] = f(() =>
          _("products_page", () =>
            $fetch("/api/cms/single/products_page", {
              params: { graphQuery: s, lang: r },
            }),
          ),
        )),
        (e = await e),
        a(),
        e);
    return (
      u(o),
      (x, C) => {
        const c = p;
        return (y(), g(c, { page: d(o) }, null, 8, ["page"]));
      }
    );
  },
});
export { b as default };
