import { _ as f } from "./Cexk3NTh.js";
import { I as g } from "./BSFMrA7C.js";
import { f as h } from "./D8jQnJCR.js";
import { e as y, u as v, s as b, a as w } from "./w36zW0QG.js";
import { u as A } from "./CiwS9yAb.js";
import { u as S } from "./CrhiQlU-.js";
import { l as x, m as t, ab as C, N as D, u as I, O as L } from "./CG2MQ2lF.js";
import "./DLDJGiia.js";
import "./L4p7BVRY.js";
import "./Ca9Ptn7z.js";
const R = x({
  __name: "[uid]",
  async setup(P) {
    let a, s;
    const n = y(),
      e = t(() => {
        const o = n.params.uid;
        return Array.isArray(o) ? o[0] : o;
      }),
      { handleError: c } = A(),
      { locale: u } = v(),
      m = h(u.value),
      i = `{
  document_subpage {
    ...document_subpageFields
    slices {
      ${g}
    }
}
  }
}`,
      { data: r, error: p } =
        (([a, s] = C(() =>
          w(
            e.value,
            () =>
              $fetch("/api/cms/collection/document_subpage/" + e.value, {
                params: { lang: m, graphQuery: i },
              }),
            { watch: [e] },
          ),
        )),
        (a = await a),
        s(),
        a);
    (c(p.value), S(r));
    const d = [
        "terminos_de_uso_herramientas_recursos_humanos",
        "privacidad_personas_trabajadoras",
        "privacidad_terminos_de_uso_mcd_connect",
        "politica-de-privacidad-para-personas-candidatas",
      ],
      _ = t(() =>
        d.includes(e.value) ? "document-with-no-header-footer" : "document",
      );
    return (
      b(_),
      (o, $) => {
        const l = f;
        return (L(), D(l, { page: I(r) }, null, 8, ["page"]));
      }
    );
  },
});
export { R as default };
