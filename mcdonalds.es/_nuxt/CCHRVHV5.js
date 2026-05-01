import { f as y, e as C, u as v, g as B, a as w, S as x } from "./w36zW0QG.js";
import { c as $ } from "./DLDJGiia.js";
import { u as k } from "./DMdudLk-.js";
import { l as A, k as F, B as M, C as D, D as b } from "./BSFMrA7C.js";
import { f as P } from "./D8jQnJCR.js";
import { u as Q } from "./CrhiQlU-.js";
import {
  l as L,
  C as O,
  m as o,
  ab as R,
  D as V,
  A as Z,
  Q as i,
  W as j,
  O as q,
  u as l,
} from "./CG2MQ2lF.js";
import "./Ca9Ptn7z.js";
const K = L({
  __name: "index",
  async setup(E) {
    let e, a;
    const c = y(),
      n = k(),
      u = C();
    O(() => {
      c.checkMcdBridge();
    });
    const r = o(() => c.isApp),
      { locale: m } = v(),
      p = P(m.value),
      _ = `{
  contact_page {
    ...contact_pageFields
    slices {
      ${A}
      ${F}
      ${M}
      ${D}
      ${b}
    }
  }
}`,
      { data: s } =
        (([e, a] = R(() =>
          w("contact_page", () =>
            $fetch("/api/cms/single/contact_page", {
              params: { graphQuery: _, lang: p },
            }),
          ),
        )),
        (e = await e),
        a(),
        e),
      d = o(() => r.value && n.showContactoDefault),
      f = o(() => Object.keys(u.query).length > 0),
      g = o(() =>
        s.value?.data.slices
          ? s.value.data.slices.filter((t) =>
              r.value && !d.value
                ? ["hero", "section_form", "media_section"].includes(
                    t.slice_type,
                  )
                : f.value
                  ? ["hero", "media_section", "section_form"].includes(
                      t.slice_type,
                    )
                  : t.slice_type !== "section_form",
            )
          : [],
      );
    return (
      Q(s),
      V(() => {
        n.resetState();
      }),
      (t, H) => {
        const h = x,
          S = B;
        return (
          q(),
          Z("div", null, [
            i(S, null, {
              default: j(() => [
                i(h, { slices: l(g), components: l($) }, null, 8, [
                  "slices",
                  "components",
                ]),
              ]),
              _: 1,
            }),
          ])
        );
      }
    );
  },
});
export { K as default };
