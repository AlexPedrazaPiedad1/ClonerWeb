import { _ as p } from "./CkoE9dcZ.js";
import { l, d, _ as m } from "./w36zW0QG.js";
import {
  l as _,
  m as u,
  A as b,
  Z as k,
  u as h,
  O as v,
  Q as B,
} from "./CG2MQ2lF.js";
const f = { key: 0, class: "breadcrumb-container" },
  x = _({
    __name: "index",
    props: {
      hideMobile: { type: Boolean },
      hideTablet: { type: Boolean },
      hideDesktop: { type: Boolean },
    },
    setup(a) {
      const t = a,
        s = l(),
        { $gtmClickBoton: c } = d(),
        i = u(() => {
          const e = {
            mobile: s.isMobile.value && t.hideMobile,
            tablet: s.isTablet.value && t.hideTablet,
            desktop: s.isDesktop.value && t.hideDesktop,
          };
          return !Object.values(e).some((o) => o);
        }),
        r = ({ title: e, url: o }) => {
          const n = `volver_${e}`;
          c(n, o);
        };
      return (e, o) => {
        const n = p;
        return h(i)
          ? (v(), b("div", f, [B(n, { mode: "simple", onBreadcrumbClick: r })]))
          : k("", !0);
      };
    },
  }),
  M = m(x, [["__scopeId", "data-v-d62a0dd5"]]);
export { M as _ };
