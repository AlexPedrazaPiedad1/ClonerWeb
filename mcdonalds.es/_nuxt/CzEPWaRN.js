import { _ as i } from "./Cexk3NTh.js";
import { E as p } from "./BSFMrA7C.js";
import { f as l } from "./D8jQnJCR.js";
import { u } from "./CiwS9yAb.js";
import { u as f, a as _ } from "./w36zW0QG.js";
import { u as g } from "./CrhiQlU-.js";
import { l as d, ab as y, N as h, u as b, O as x } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const e = "cumpleanos",
  H = d({
    __name: "index",
    async setup(w) {
      let a, o;
      const { handleError: r } = u(),
        t = `{
    family_subpage {
        ...family_subpageFields
        slices {
            ${p(e)}
        }
    }
}`,
        { locale: m } = f(),
        n = l(m.value),
        { data: s, error: c } =
          (([a, o] = y(() =>
            _(
              e,
              () =>
                $fetch("/api/cms/collection/family_subpage/" + e, {
                  params: { lang: n, graphQuery: t },
                }),
              { watch: [() => e] },
            ),
          )),
          (a = await a),
          o(),
          a);
      return (
        r(c.value),
        g(s),
        (C, E) => (x(), h(i, { page: b(s) }, null, 8, ["page"]))
      );
    },
  });
export { H as default };
