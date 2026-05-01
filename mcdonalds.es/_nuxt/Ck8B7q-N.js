import { _ as m } from "./Cexk3NTh.js";
import {
  k as n,
  l as i,
  m as p,
  n as l,
  o as f,
  p as _,
  q as u,
} from "./BSFMrA7C.js";
import { f as g } from "./D8jQnJCR.js";
import { u as $, a as d } from "./w36zW0QG.js";
import { u as C } from "./CrhiQlU-.js";
import { l as S, ab as h, N as y, u as M, O as b } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const H = S({
  __name: "mccafe",
  async setup(k) {
    let e, a;
    const c = `{
mccafe_page {
  ...mccafe_pageFields
  slices {
    ${n}
    ${i}
    ${p}
    ${l}
    ${f}
    ${_}
    ${u}
  }
}
}`,
      { locale: o } = $(),
      t = g(o.value),
      { data: s } =
        (([e, a] = h(() =>
          d("mccafe_page", () =>
            $fetch("/api/cms/single/mccafe_page", {
              params: { graphQuery: c, lang: t },
            }),
          ),
        )),
        (e = await e),
        a(),
        e);
    return (
      C(s),
      (x, B) => {
        const r = m;
        return (b(), y(r, { page: M(s) }, null, 8, ["page"]));
      }
    );
  },
});
export { H as default };
