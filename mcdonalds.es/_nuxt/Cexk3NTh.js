import { S as c } from "./w36zW0QG.js";
import { c as t } from "./DLDJGiia.js";
import { S as a } from "./L4p7BVRY.js";
import { l as r, A as l, N as n, u as m, O as e } from "./CG2MQ2lF.js";
const i = { class: "relative" },
  d = r({
    __name: "MySliceZone",
    props: { page: {} },
    setup(o) {
      return (p, _) => {
        const s = c;
        return (
          e(),
          l("div", i, [
            o.page
              ? (e(),
                n(
                  s,
                  {
                    key: 0,
                    slices: o.page?.data.slices ?? [],
                    components: m(t),
                  },
                  null,
                  8,
                  ["slices", "components"],
                ))
              : (e(), n(a, { key: 1 })),
          ])
        );
      };
    },
  });
export { d as _ };
