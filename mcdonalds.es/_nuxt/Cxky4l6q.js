import { _ as r } from "./Cexk3NTh.js";
import {
  v as i,
  k as l,
  l as m,
  w as p,
  m as _,
  x as u,
  y as d,
  z as f,
} from "./BSFMrA7C.js";
import { f as g } from "./D8jQnJCR.js";
import { u as $, a as S } from "./w36zW0QG.js";
import { u as C } from "./CrhiQlU-.js";
import { l as y, ab as x, N as h, u as b, O as k } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const q = y({
  __name: "index",
  async setup(w) {
    let e, a;
    const o = `{
  mcdonalds_page {
    ...mcdonalds_pageFields
    slices {
      ${i}
      ${l}
      ${m}
      ${p}
      ${_}
      ${u}
      ${d}
      ${f}
    }
  }
}`,
      { locale: c } = $(),
      t = g(c.value),
      { data: s } =
        (([e, a] = x(() =>
          S("mcdonalds_page", () =>
            $fetch("/api/cms/single/mcdonalds_page", {
              params: { graphQuery: o, lang: t },
            }),
          ),
        )),
        (e = await e),
        a(),
        e);
    return (
      C(s),
      (B, F) => {
        const n = r;
        return (k(), h(n, { page: b(s) }, null, 8, ["page"]));
      }
    );
  },
});
export { q as default };
