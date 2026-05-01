import { q as p, r as S } from "./w36zW0QG.js";
import { m as u } from "./CG2MQ2lF.js";
function v(a) {
  return new URL(window.location.href);
}
const d = (a, s = {}) => {
    const i = a?.meta_description,
      o = a?.meta_title,
      c = a?.meta_image?.url,
      r = v(),
      l = u(() => [{ rel: "canonical", href: r.href }]),
      f = u(() => {
        if (s?.skipDefaultHreflangs) return [];
        const t = r.origin,
          e = r.pathname,
          g = ["es-ES", "ca-ES", "eu-ES"],
          m = (n) =>
            n === "es-ES"
              ? e === "/ca" || e.startsWith("/ca/")
                ? `${t}${e.replace(/^\/ca(\/|$)/, "$1")}`
                : e === "/eu" || e.startsWith("/eu/")
                  ? `${t}${e.replace(/^\/eu(\/|$)/, "$1")}`
                  : r.href
              : n === "ca-ES"
                ? e === "/ca" || e.startsWith("/ca/")
                  ? r.href
                  : e === "/eu" || e.startsWith("/eu/")
                    ? `${t}/ca${e.replace(/^\/eu(\/|$)/, "$1")}`
                    : `${t}/ca${e}`
                : n === "eu-ES"
                  ? e === "/eu" || e.startsWith("/eu/")
                    ? r.href
                    : e === "/ca" || e.startsWith("/ca/")
                      ? `${t}/eu${e.replace(/^\/ca(\/|$)/, "$1")}`
                      : `${t}/eu${e}`
                  : r.href;
        return g.map((n) => ({ rel: "alternate", hreflang: n, href: m(n) }));
      }),
      h = u(
        () =>
          s?.hreflangs?.map((t) => ({
            rel: "alternate",
            hreflang: t.locale,
            href: t.url,
          })) ?? [],
      ),
      $ = u(() => [...l.value, ...f.value, ...h.value]);
    (p({
      title: o,
      description: i,
      ogTitle: o,
      ogDescription: i,
      ogImage: c,
      ogUrl: r.href,
      ...(s.noIndex === !0
        ? { robots: "noindex, nofollow, noarchive, nosnippet" }
        : {}),
    }),
      S({ link: $.value }));
  },
  H = (a, s = {}) => {
    const i = u(() => a.value?.data);
    d(i.value, s);
  };
export { H as u };
