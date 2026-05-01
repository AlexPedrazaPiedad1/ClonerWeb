import { _ as r } from "./Cexk3NTh.js";
import {
  s as n,
  a as l,
  b as m,
  c as p,
  d as _,
  e as f,
  f as u,
  g,
  h as $,
  i as S,
  j as d,
} from "./BSFMrA7C.js";
import { f as h } from "./D8jQnJCR.js";
import { u as w, a as C } from "./w36zW0QG.js";
import { u as y } from "./CrhiQlU-.js";
import { l as N, ab as x, N as M, O as P, u as D } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const Q = N({
  __name: "index",
  async setup(b) {
    let e, s;
    const o = `{
home_page {
  ...home_pageFields
  slices {
  ${n}
  ${l}
  ${m}
    ${p}
    ${_}
    ${f}
    ${u}
    ${g}
    ${$}
    ${S}
    ${d}
  }
}
}`,
      { locale: t } = w(),
      c = h(t.value),
      { data: a } =
        (([e, s] = x(() =>
          C("home_page", () =>
            $fetch("/api/cms/single/home_page", {
              params: { graphQuery: o, lang: c },
            }),
          ),
        )),
        (e = await e),
        s(),
        e);
    return (
      y(a),
      (k, A) => {
        const i = r;
        return (P(), M(i, { page: D(a) }, null, 8, ["page"]));
      }
    );
  },
});
export { Q as default };
