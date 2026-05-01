import {
  f as u,
  Y as m,
  Z as h,
  $ as v,
  a0 as w,
  d as T,
  e as E,
} from "./w36zW0QG.js";
import { y as i, q as S } from "./CG2MQ2lF.js";
const k = () => {
    const t = u(),
      { isApp: o } = m(t);
    i(async () => {
      const e = window.setInterval(() => {
        (t[h](), t[v](), t[w](), o.value && window.clearInterval(e));
      }, 500);
      setTimeout(() => {
        window.clearInterval(e);
      }, 5e3);
    });
  },
  C = () => {
    const { $gtmPageview: t, $isDevEnv: o } = T(),
      e = E(),
      a = [
        "/contacto/sugerencia",
        "/contacto/reclamacion",
        "/contacto/consulta",
        "/franquiciate/formulario",
      ];
    (S(
      () => e.fullPath,
      (n, s) => {
        a.includes(n) ||
          setTimeout(() => {
            t(s);
          }, 2500);
      },
    ),
      i(() => {
        if (!a.includes(e.fullPath)) {
          let n = !1,
            s = null,
            c = 0;
          const r = 120,
            f = o();
          setTimeout(() => {
            s = window.setInterval(() => {
              c++;
              const d = c > r;
              if (s && (n || d)) window.clearInterval(s);
              else {
                const p = !!l("OptanonAlertBoxClosed");
                (f || p) && (t(), (n = !0));
              }
            }, 500);
          }, 3500);
        }
      }));
    function l(n) {
      const c = `; ${document.cookie}`.split(`; ${n}=`);
      if (c.length === 2) {
        const r = c.pop();
        return r && r.split(";").shift();
      }
    }
  };
function A() {
  const t = u();
  i(() => {
    setTimeout(() => {
      if (t.isApp) {
        let o = function (e, a) {
          e.href = a;
        };
        (document.querySelectorAll('a[href*="/pide-y-paga"]').forEach((e) => {
          /pedir|demana|quiero|vull/i.test(e.textContent || "") &&
            o(e, t.linkToMyorder);
        }),
          document
            .querySelectorAll('a[href*="/download-app"]')
            .forEach((e) => o(e, t.linkToDeals)),
          document.querySelectorAll('a[href*="/oferta/"]').forEach((e) => {
            const a = e.href.match(/\/oferta\/(\d+)/);
            if (a && a[1]) {
              const l = a[1],
                n = t.linkToDealDetails(l);
              o(e, n);
            }
          }));
      } else
        document.querySelectorAll('a[href*="/oferta/"]').forEach((o) => {
          o.href = `${t.siteUrl}/?popup=download-app`;
        });
    }, 3e3);
  });
}
export { C as a, A as b, k as u };
