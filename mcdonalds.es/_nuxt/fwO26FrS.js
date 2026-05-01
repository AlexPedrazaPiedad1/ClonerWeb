import { _ as g, k as f, G as w } from "./w36zW0QG.js";
import { g as i } from "./DKtf60Sy.js";
import { S as _ } from "./BWsqEc1I.js";
import {
  l as y,
  A as m,
  O as l,
  U as S,
  Y as b,
  N as C,
  W as B,
  Q as L,
  X as p,
  d as D,
  y as v,
} from "./CG2MQ2lF.js";
const F = y({
    components: { MCDIcon: f, MCDLink: w },
    inheritAttrs: !1,
    props: {
      target: { type: String, default: void 0, required: !1 },
      animated: { type: Boolean, default: () => !1 },
      showFacebook: { type: Boolean, default: !0 },
      showInstagram: { type: Boolean, default: !0 },
      showYoutube: { type: Boolean, default: !0 },
      showTiktok: { type: Boolean, default: !0 },
      showX: { type: Boolean, default: !1 },
      showWhatsapp: { type: Boolean, default: !1 },
      showLinkedin: { type: Boolean, default: !1 },
      showShare: { type: Boolean, default: !1 },
      showCopy: { type: Boolean, default: !1 },
      animationVariant: {
        type: String,
        default: "anime",
        validator: (o) => ["anime", "gsap"].includes(o),
        required: !1,
      },
    },
    emits: ["link-clicked"],
    setup(o, { emit: r }) {
      i.registerPlugin(_);
      const c = () =>
          typeof window < "u"
            ? "https://api.whatsapp.com/send?text=" +
              encodeURIComponent(window.location.href)
            : "#",
        d = [
          {
            title: "X",
            url: "https://twitter.com/McDonalds",
            icon: "socialXSolid",
            show: o.showX,
          },
          {
            title: "Facebook",
            url: "https://es-es.facebook.com/McDonaldsSpain",
            icon: "socialFacebookSolid",
            show: o.showFacebook,
          },
          {
            title: "Instagram",
            url: "https://www.instagram.com/mcdonalds_es",
            icon: "socialInstagramSolid",
            show: o.showInstagram,
          },
          {
            title: "Youtube",
            url: "https://www.youtube.com/channel/UCnD6pQmtDCx-vhe0q0B5zkA",
            icon: "socialYoutubeSolid",
            show: o.showYoutube,
          },
          {
            title: "TikTok",
            url: "https://www.tiktok.com/@mcdonalds_es",
            icon: "socialTiktokSolid",
            show: o.showTiktok,
          },
          {
            title: "Whatsapp",
            url: c(),
            icon: "socialWhatsappSolid",
            show: o.showWhatsapp,
          },
          {
            title: "Linkedin",
            url: "https://www.linkedin.com/company/mcdonald%27s-corporation/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BNEhhuNBGSiKDNVo33D743A%3D%3D",
            icon: "socialLinkedinSolid",
            show: o.showLinkedin,
          },
          { title: "share", url: "#", icon: "contentShare", show: o.showShare },
          { title: "link", url: "#", icon: "contentLink", show: o.showCopy },
        ],
        u = D(d.filter((t) => t.show)),
        h =
          "w-8 h-8 flex justify-center items-center cursor-pointer border border-[#6F6F6F] rounded-full",
        n = "#6F6F6F",
        s = "black",
        e = (t, a) => {
          r("link-clicked", { title: t, url: a });
        };
      return (
        v(() => {
          if (o.animated) {
            const t = document.querySelectorAll(".transition-icon");
            o.animationVariant === "gsap"
              ? i.from(t, {
                  opacity: 0,
                  duration: 0.4,
                  y: 50,
                  stagger: 0.4,
                  scrollTrigger: {
                    trigger: ".socialtoolbar-main",
                    start: "top 75%",
                  },
                })
              : t.forEach((a, k) => {
                  i.timeline({ delay: k * 0.4 })
                    .fromTo(
                      a,
                      { opacity: 0, rotation: 0, scale: 0 },
                      {
                        opacity: 1,
                        rotation: 40,
                        scale: 1.1,
                        duration: 0.4,
                        ease: "back.out(1.7)",
                      },
                    )
                    .to(a, {
                      rotation: 0,
                      scale: 1,
                      duration: 0.4,
                      ease: "back.out(1.7)",
                    });
                });
          }
        }),
        {
          socialLinks: u,
          className: h,
          color: n,
          colorHover: s,
          handleLinkClick: e,
        }
      );
    },
  }),
  A = { class: "flex gap-4 socialtoolbar-main" };
function I(o, r, c, d, u, h) {
  const n = f,
    s = w;
  return (
    l(),
    m("div", A, [
      (l(!0),
      m(
        S,
        null,
        b(
          o.socialLinks.filter((e) => e.show),
          (e) => (
            l(),
            C(
              s,
              {
                key: e.title,
                target: o.target,
                to: e.url,
                title: e.title,
                class: p([
                  { "transition-icon": o.animated },
                  "outline-none icon-container",
                ]),
                onClick: (t) => o.handleLinkClick(e.title, e.url),
              },
              {
                default: B(() => [
                  L(
                    n,
                    {
                      size: "s",
                      class: p(["hover:border-black", o.className]),
                      name: e.icon,
                      color: o.color,
                      "color-hover": o.colorHover,
                    },
                    null,
                    8,
                    ["class", "name", "color", "color-hover"],
                  ),
                ]),
                _: 2,
              },
              1032,
              ["target", "to", "title", "class", "onClick"],
            )
          ),
        ),
        128,
      )),
    ])
  );
}
const $ = g(F, [
  ["render", I],
  ["__scopeId", "data-v-708fd527"],
]);
export { $ as _ };
