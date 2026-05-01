import { _ as $ } from "./AvGzUA97.js";
import { _ as j } from "./n9BDgNm5.js";
import { _ as z } from "./DNNWU6PG.js";
import { _ as F } from "./DhdId782.js";
import { _ as H, j as D, A as I } from "./w36zW0QG.js";
import { _ as O } from "./CoWls7Gm.js";
import { g as l } from "./DKtf60Sy.js";
import { S as N } from "./BWsqEc1I.js";
import { u as V } from "./CiCdwUBr.js";
import {
  l as E,
  A as s,
  O as o,
  _ as d,
  Z as n,
  N as c,
  X as p,
  P as f,
  Q as y,
  W as M,
  am as G,
  a2 as R,
  ac as U,
  m as t,
  y as W,
} from "./CG2MQ2lF.js";
const Y = E({
    components: { MCDTitle: D },
    inheritAttrs: !1,
    props: {
      animated: { type: Boolean, default: !1, required: !1 },
      title: { type: String, default: null, required: !0 },
      titleAs: {
        type: String,
        default: () => I.default.as,
        validator(e) {
          return Object.keys(I.as).includes(e);
        },
      },
      description: { type: String, default: null, required: !0 },
      theme: { type: String, default: null, required: !1 },
      separatorTop: { type: Object, default: () => null, required: !1 },
      separatorBottom: { type: Object, default: () => null, required: !1 },
      backgroundImage: { type: Object, default: null, required: !1 },
      backgroundShadow: { type: Boolean, default: !1, required: !1 },
      colorText: { type: String, default: null, required: !1 },
      contentAlign: { type: String, default: "center", required: !1 },
      backgroundGradient: { type: Boolean, default: !1, required: !1 },
      themeBackground: { type: String, default: null, required: !1 },
      topImage: { type: Object, default: null },
      titlePaint: { type: Array, default: () => [], required: !1 },
      titleUnderline: { type: Boolean, default: !1, required: !1 },
      titleUnderlineColor: { type: String, default: "gold", required: !1 },
      containerCardsDirection: {
        type: String,
        default: "default",
        required: !1,
        validator: (e) => ["default", "horizontal", "vertical"].includes(e),
      },
      topIllustration: { type: String, default: null, required: !1 },
      showPadding: { type: Boolean, default: !0, required: !1 },
      desktopBig: { type: Boolean, default: !1, required: !1 },
      isBackgroundHalf: { type: Boolean, default: !1, required: !1 },
    },
    setup(e, { slots: r }) {
      const a = V(),
        v = t(() => !!r.bottomContent);
      W(() => {
        e.animated &&
          (l.registerPlugin(N),
          l.set(".animate-carrousel-top-image", { opacity: 0 }),
          l.set(".animate-carrousel-top-image", { x: 200 }),
          l.set(
            ".title-animate",
            a.isDesktop.value ? { opacity: 0, x: -100 } : { opacity: 0, y: 50 },
          ),
          l.set(".containerCards", { opacity: 0, scale: 0.6, y: 20 }),
          l.to(".animate-carrousel-top-image", {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: ".animate-carrousel-top-image",
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }),
          l.to(".title-animate", {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".title-animate",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }),
          l.to(".containerCards", {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
            scrollTrigger: {
              trigger: ".containerCards",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }),
          l.to(".balloon-svg", {
            y: -25,
            duration: 2,
            ease: "sine.inOut",
            stagger: 0.2,
            yoyo: !0,
            repeat: -1,
          }));
      });
      const w = t(() => {
          switch (e.theme) {
            case "gold":
              return "text-black bg-surface-gold";
            case "green":
              return "text-white bg-bigGood-main-green";
            case "blue":
              return "text-white bg-secondary-crew-blue";
            case "white":
              return "text-white";
            case "gray":
              return "text-black bg-[#F9F9F9]";
            case "fundacion":
              return "text-black bg-surface-gold";
            case "light":
              return "text-black bg-gray-50";
            default:
              return "text-black bg-surface-white";
          }
        }),
        x = t(() => {
          if (!e.colorText) return "";
          switch (e.colorText) {
            case "white":
              return "!text-white";
            case "black":
              return "!text-black";
            default:
              return "";
          }
        }),
        u = t(() => e.backgroundImage?.mobile?.url || e.backgroundImage?.url),
        m = t(() => e.backgroundImage?.tablet?.url || e.backgroundImage?.url),
        b = t(() => e.backgroundImage?.desktop?.url || e.backgroundImage?.url),
        i = (h) => {
          if (!e.backgroundImage) return {};
          const k = { backgroundSize: "cover", backgroundRepeat: "no-repeat" };
          return e.backgroundShadow
            ? {
                ...k,
                backgroundImage: `
            radial-gradient(64.85% 47.41% at 50% 50%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%),
            url(${h})`,
              }
            : e.backgroundGradient
              ? {
                  ...k,
                  backgroundImage: `
            linear-gradient(90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.5) 25%,
              rgba(255, 255, 255, 0.8) 50%,
              rgba(255, 255, 255, 1) 75%
            ),
            url(${h})`,
                }
              : { ...k, backgroundImage: `url(${h})` };
        },
        C = t(() => i(u.value)),
        g = t(() => i(m.value)),
        B = t(() => i(b.value)),
        S = t(() => !!e.backgroundImage),
        T = t(() =>
          (a.isDesktop.value && e.desktopBig) || e.contentAlign === "left"
            ? "justify-start desktop:pl-[120px] tablet:pl-[24px] pl-[16px] items-start"
            : e.contentAlign === "right"
              ? "justify-end desktop:pr-[120px] tablet:pr-[24px] pr-[16px] items-end"
              : "justify-center items-center",
        ),
        A = t(() => !!r.description),
        q = t(() => !!r.topImageSlot),
        _ = t(() =>
          !S.value || e.isBackgroundHalf
            ? ""
            : a.isDesktop.value
              ? B.value
              : a.isTablet.value
                ? g.value
                : C.value,
        ),
        L = t(() =>
          a.isDesktop.value ? "gap-8" : a.isTablet.value ? "gap-4" : "gap-2",
        ),
        P = t(() =>
          e.containerCardsDirection === "vertical"
            ? "flex-col gap-6 tablet:gap-10"
            : e.containerCardsDirection === "horizontal"
              ? "flex-row"
              : "",
        ),
        Z = t(() =>
          a.isMobile.value ? "80" : a.isTablet.value ? "120" : "160",
        );
      return {
        titleProp: e.title,
        descriptionProp: e.description,
        colorTheme: w,
        textColor: x,
        backgroundStyleMobile: C,
        backgroundStyleTablet: g,
        backgroundStyleDesktop: B,
        hasDescriptionSlot: A,
        contentAlignProp: e.contentAlign,
        alignClass: T,
        hasBackgroundImage: S,
        hasBottomContentSlot: v,
        currentBackgroundStyle: _,
        gapClass: L,
        hasTopImageSlot: q,
        containerCardsClass: P,
        illustrationSize: Z,
        bp: a,
        isBgHalf: e.isBackgroundHalf,
        bgImg: e.backgroundImage,
      };
    },
  }),
  Q = { class: "relative" },
  X = { key: 0, class: "absolute top-0 left-0 w-full h-full md:max-w-[50%]" },
  J = ["src"],
  K = {
    key: 0,
    class:
      "absolute inset-0 z-0 flex items-center justify-center object-cover mt-4",
  },
  e2 = { key: 1, "aria-hidden": "true" };
function t2(e, r, a, v, w, x) {
  const u = $,
    m = j,
    b = z,
    i = F,
    C = D,
    g = O;
  return (
    o(),
    s("div", Q, [
      d(
        "div",
        {
          class: p([[e.textColor, e.colorTheme], "relative overflow-hidden"]),
          style: R(e.currentBackgroundStyle),
        },
        [
          e.separatorTop
            ? (o(),
              c(
                u,
                {
                  key: 0,
                  type: e.separatorTop.type,
                  color: e.separatorTop.color,
                  flip: e.separatorTop.flip,
                  class: "w-full",
                },
                null,
                8,
                ["type", "color", "flip"],
              ))
            : n("", !0),
          d(
            "div",
            {
              class: p([
                "relative flex flex-col items-center w-full gap-6 overflow-visible tablet:gap-10 desktop:gap-16 max-w-[1440px] place-self-center",
                e.showPadding &&
                  "py-10 tablet:py-10 desktop:pt-20 desktop:pb-10",
              ]),
            },
            [
              e.isBgHalf
                ? (o(),
                  s("div", X, [
                    d(
                      "img",
                      {
                        src: e.bgImg.url,
                        alt: "",
                        class: "absolute w-auto h-auto -left-1/3 md:left-0",
                      },
                      null,
                      8,
                      J,
                    ),
                    r[0] ||
                      (r[0] = d(
                        "div",
                        {
                          class:
                            "absolute top-0 w-full h-full xl:hidden white-background-panel",
                        },
                        null,
                        -1,
                      )),
                  ]))
                : n("", !0),
              e.topImage ||
              e.topIllustration ||
              e.hasTopImageSlot ||
              e.titleProp
                ? (o(),
                  s(
                    "div",
                    {
                      key: 1,
                      class: p([
                        "flex flex-col w-full",
                        [e.alignClass, e.gapClass],
                      ]),
                    },
                    [
                      e.topImage && !e.hasTopImageSlot
                        ? (o(),
                          c(
                            m,
                            {
                              key: 0,
                              image: {
                                url: e.topImage?.url,
                                alt: e.topImage?.alt,
                              },
                              "wrapper-class": [
                                "shrink-0 animate-carrousel-top-image",
                                e.desktopBig
                                  ? "hidden desktop:block max-w-[142.222px] max-h-[80px] tablet:max-w-[213px] tablet:max-h-[120px] desktop:absolute xl:top-[-20px] lg:top-0 lg:right-0 xl:right-[80px] desktop:w-[624px] desktop:h-[580px] desktop:max-w-[624px] desktop:max-h-[624px]"
                                  : "max-w-[142.222px] max-h-[80px] tablet:max-w-[213px] tablet:max-h-[120px] desktop:max-w-[284.444px] desktop:max-h-[160px]",
                              ],
                            },
                            null,
                            8,
                            ["image", "wrapper-class"],
                          ))
                        : n("", !0),
                      e.topIllustration
                        ? (o(),
                          c(
                            i,
                            { key: 1, size: e.illustrationSize },
                            {
                              default: M(() => [
                                y(
                                  b,
                                  { "type-variant": e.topIllustration },
                                  null,
                                  8,
                                  ["type-variant"],
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["size"],
                          ))
                        : n("", !0),
                      f(e.$slots, "topImageSlot", {}, void 0, !0),
                      y(
                        C,
                        {
                          class: p([
                            [
                              e.desktopBig
                                ? "w-full tablet:w-[416px] desktop:w-[580px] "
                                : e.contentAlignProp === "right"
                                  ? "w-full tablet:w-[416px] desktop:w-[787px]"
                                  : "",
                            ],
                            "z-10 title-animate",
                          ]),
                          "title-as": e.titleAs,
                          title: e.titleProp,
                          paint: e.titlePaint,
                          animated: e.titleUnderline,
                          "drop-color": e.titleUnderlineColor,
                          size: "md",
                          description: e.hasDescriptionSlot
                            ? void 0
                            : e.descriptionProp,
                          "content-align":
                            e.bp.isDesktop.value && e.desktopBig
                              ? "left"
                              : e.contentAlignProp,
                        },
                        G({ _: 2 }, [
                          e.hasDescriptionSlot
                            ? {
                                name: "description",
                                fn: M(() => [
                                  f(e.$slots, "description", {}, void 0, !0),
                                ]),
                                key: "0",
                              }
                            : void 0,
                        ]),
                        1032,
                        [
                          "class",
                          "title-as",
                          "title",
                          "paint",
                          "animated",
                          "drop-color",
                          "description",
                          "content-align",
                        ],
                      ),
                    ],
                    2,
                  ))
                : n("", !0),
              d(
                "div",
                {
                  class: p([
                    "z-10 flex flex-wrap items-center justify-center w-full containerCards",
                    e.containerCardsClass,
                  ]),
                },
                [
                  f(e.$slots, "carrousel", {}, void 0, !0),
                  f(e.$slots, "bottomContent", {}, void 0, !0),
                ],
                2,
              ),
            ],
            2,
          ),
          e.separatorBottom
            ? (o(),
              c(
                u,
                {
                  key: 1,
                  type: e.separatorBottom.type,
                  color: e.separatorBottom.color,
                  class: "w-full",
                  flip: e.separatorBottom.flip,
                },
                null,
                8,
                ["type", "color", "flip"],
              ))
            : n("", !0),
        ],
        6,
      ),
      e.themeBackground && e.themeBackground !== "globos"
        ? (o(),
          s("div", K, [y(g, { type: e.themeBackground }, null, 8, ["type"])]))
        : n("", !0),
      e.themeBackground === "globos"
        ? (o(),
          s("div", e2, [
            ...(r[1] ||
              (r[1] = [
                U(
                  '<svg class="balloon-svg absolute bottom-[99px] left-4 tablet:w-[82px] tablet:h-[124px] tablet:bottom-[67px] tablet:left-16 desktop:w-[142px] desktop:h-[216px] desktop:bottom-[88px] desktop:left-[189px] desktop:left-[169px]" width="57" height="84" viewBox="0 0 57 84" preserveAspectRatio="xMidYMid" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed72ad><path d="M56.5103 16.2794C56.5103 25.2703 47.7974 33.7053 43.8995 33.7053C40.0016 33.7053 30.8301 25.2703 30.8301 16.2794C30.8301 7.28855 36.5788 0 43.6702 0C50.7616 0 56.5103 7.28855 56.5103 16.2794Z" fill="#8FD14D" data-v-4eed72ad></path><path fill-rule="evenodd" clip-rule="evenodd" d="M42.7529 33.4112C46.844 30.5375 50.5561 25.9368 50.9418 19.0789C51.4396 10.2284 49.3942 4.0916 46.4215 0.367188C50.9343 1.39394 56.5102 7.20134 56.5102 16.0505C56.5102 25.4514 47.7973 33.935 43.6701 33.7056C43.3683 33.7056 43.1113 33.5087 42.7529 33.4112Z" fill="#648D23" data-v-4eed72ad></path><path d="M39.4679 8.26663C37.9677 9.98275 35.566 10.5853 34.9083 10.0104C33.6689 8.92693 33.8802 6.65742 35.3804 4.9413C36.8806 3.22518 39.1014 2.7123 40.3409 3.79575C41.0475 4.41347 40.9681 6.5505 39.4679 8.26663Z" fill="#C7FB92" data-v-4eed72ad></path><path d="M43.2731 33.2465C43.4496 32.9407 43.8909 32.9407 44.0674 33.2465L44.8617 34.6222C45.0382 34.9279 44.8175 35.31 44.4645 35.31H42.876C42.523 35.31 42.3023 34.9279 42.4788 34.6222L43.2731 33.2465Z" fill="#648D23" data-v-4eed72ad></path><path d="M43.0059 33.4968C43.5262 33.4135 44.0236 33.2981 44.4676 33.6435C44.8202 33.9177 45.1212 34.4674 45.3634 34.838C45.9619 35.7532 45.942 37.1159 45.6935 38.1596C45.5313 38.8407 45.4709 39.5764 45.2691 40.2447C45.0571 40.9473 45.2507 41.7417 45.0596 42.4347C44.6062 44.0781 44.5693 46.3338 45.1696 47.9095C45.4751 48.7113 45.8045 49.4688 46.1703 50.2409C46.4011 50.7282 46.6837 51.2948 46.6837 51.8441C46.6837 52.5738 46.7675 53.3541 46.6627 54.0759C46.5068 55.15 46.3065 56.2197 46.3065 57.3137C46.3065 58.131 46.2122 58.9518 46.2122 59.7603C46.2122 60.1816 46.2125 60.8443 45.9764 61.222C45.3653 62.1999 44.5654 62.3537 43.4774 62.3537" stroke="#FF9D00" stroke-width="0.398104" stroke-linecap="round" data-v-4eed72ad></path><path d="M39.6695 30.6095C39.6695 44.4366 26.2699 57.4088 20.2753 57.4088C14.2807 57.4088 0.175781 44.4366 0.175781 30.6095C0.175781 16.7823 9.01676 5.57324 19.9227 5.57324C30.8286 5.57324 39.6695 16.7823 39.6695 30.6095Z" fill="#6A66DA" data-v-4eed72ad></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5127 56.9562C24.8044 52.5368 30.5133 45.4613 31.1064 34.9145C31.8719 21.3033 28.7264 11.8655 24.1547 6.1377C30.8545 7.68937 39.6701 16.648 39.6701 30.2571C39.6701 44.7148 26.2704 57.7618 19.9232 57.409C19.459 57.409 19.0638 57.1062 18.5127 56.9562Z" fill="#4641A5" data-v-4eed72ad></path><path d="M13.4604 18.2873C11.1532 20.9266 7.4596 21.8532 6.44811 20.969C4.54199 19.3028 4.86706 15.8125 7.17417 13.1733C9.48128 10.5341 12.8968 9.74529 14.8029 11.4115C15.8896 12.3615 15.7675 15.6481 13.4604 18.2873Z" fill="#C1C0FA" data-v-4eed72ad></path><path d="M19.3118 56.7034C19.5832 56.2332 20.2619 56.2332 20.5333 56.7034L21.7548 58.8191C22.0263 59.2893 21.687 59.877 21.1441 59.877H18.701C18.1581 59.877 17.8188 59.2893 18.0903 58.8191L19.3118 56.7034Z" fill="#4641A5" data-v-4eed72ad></path><path d="M21.5044 57.2614C20.7476 57.2614 19.7561 57.2021 19.1153 57.6491C18.0538 58.3897 17.0161 59.7112 17.9313 61.0231C18.423 61.7279 19.1265 62.4281 19.8593 62.8777C20.5426 63.297 21.2841 63.5651 21.9549 64.0093C22.5605 64.4105 23.1777 64.8059 23.6524 65.3715C24.1225 65.9316 24.0835 66.7753 24.0453 67.4619C23.9546 69.0951 22.7981 70.35 21.6772 71.4174C20.8944 72.163 20.2467 72.6923 19.7021 73.6388C19.2419 74.4386 18.6882 75.1865 18.298 76.0226C17.8648 76.9509 17.9749 78.1932 18.1147 79.1713C18.2183 79.8965 18.4637 80.5655 18.9582 81.115C19.523 81.7426 20.03 82.4238 20.6032 83.043C20.8555 83.3155 21.035 83.667 21.4101 83.7607" stroke="#FF9D00" stroke-width="0.398104" stroke-linecap="round" data-v-4eed72ad></path></svg><svg class="balloon-svg absolute top-[25px] right-4 tablet:w-[86px] tablet:h-[172px] tablet:top-[17px] tablet:right-[3rem] desktop:w-[130px] desktop:h-[258px] desktop:top-[40px] desktop:right-[6rem]" width="49" height="96" viewBox="0 0 49 96" preserveAspectRatio="xMidYMid" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4eed72ad><path d="M48.219 30.456C48.219 47.2763 31.9186 63.0567 24.6263 63.0567C17.3341 63.0567 0.175781 47.2763 0.175781 30.456C0.175781 13.6356 10.9306 0 24.1974 0C37.4642 0 48.219 13.6356 48.219 30.456Z" fill="#DB0007" data-v-4eed72ad></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3496 62.6597C30.0033 57.2835 37.0801 48.5227 37.8017 35.6929C38.7328 19.1351 34.9064 7.65424 29.345 0.686523C37.4952 2.5741 48.2191 13.472 48.2191 30.0272C48.2191 47.6146 31.9188 63.486 24.1975 63.0569C23.6329 63.0569 22.904 62.8444 22.3496 62.6597Z" fill="#890005" data-v-4eed72ad></path><path d="M16.3358 15.466C13.5293 18.6765 9.03602 19.8038 7.80557 18.7282C5.48683 16.7013 5.88227 12.4554 8.68881 9.24488C11.4954 6.03432 15.6502 5.07481 17.969 7.10175C19.291 8.2574 19.1423 12.2554 16.3358 15.466Z" fill="#FBE6E6" data-v-4eed72ad></path><path d="M23.4543 62.199C23.7845 61.627 24.61 61.627 24.9403 62.199L26.4262 64.7727C26.7564 65.3447 26.3437 66.0596 25.6832 66.0596H22.7113C22.0509 66.0596 21.6381 65.3447 21.9684 64.7727L23.4543 62.199Z" fill="#890005" data-v-4eed72ad></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.7933 63.01C22.7933 62.9079 22.876 62.8252 22.9781 62.8252H25.4326C25.4473 62.8252 25.4707 62.8264 25.4971 62.8345C25.524 62.8427 25.5653 62.8616 25.5973 62.9046C25.6669 62.9984 25.6212 63.0946 25.6139 63.1095C25.6005 63.1369 25.5829 63.158 25.5737 63.1687C25.5627 63.1815 25.5508 63.1937 25.5408 63.2037C25.5314 63.213 25.5214 63.2226 25.5126 63.2311L25.5102 63.2334C25.5003 63.2429 25.4917 63.2512 25.4839 63.2591C25.4712 63.2719 25.4659 63.2782 25.4659 63.2782C25.427 63.3448 25.3906 63.4138 25.3523 63.4867L25.3465 63.4977C25.3098 63.5675 25.2713 63.6409 25.2297 63.7131C24.7465 64.5524 24.5371 65.2295 24.5371 66.1709C24.5371 66.4914 24.5888 66.8014 24.6493 67.124C24.6564 67.162 24.6636 67.2003 24.6709 67.2388C24.7247 67.5224 24.7809 67.8184 24.8023 68.1236C24.8251 68.4481 24.9087 68.7618 25.0109 69.0857C25.0384 69.1729 25.0675 69.2616 25.0971 69.3515C25.1752 69.5895 25.2562 69.8361 25.317 70.085C25.3274 70.1277 25.3378 70.1703 25.3481 70.2128C25.552 71.0501 25.7438 71.8379 26.064 72.6206C26.1436 72.8152 26.2429 73.0215 26.349 73.242C26.3783 73.3028 26.4081 73.3646 26.4381 73.4276C26.5752 73.7153 26.7152 74.0221 26.82 74.3341C27.029 74.9563 27.1098 75.6357 26.7159 76.2547C26.6826 76.3071 26.6593 76.3724 26.6312 76.4618C26.6287 76.4698 26.6262 76.4781 26.6235 76.4865C26.5993 76.5645 26.5692 76.6612 26.5228 76.7492C26.4771 76.836 26.4158 76.9122 26.3668 76.9731L26.3623 76.9787C26.3083 77.0458 26.2678 77.0971 26.2393 77.151C26.1331 77.3515 26.0134 77.5537 25.8407 77.7264C25.6347 77.9324 25.427 78.1386 25.2189 78.3453L25.2167 78.3474C25.0078 78.5549 24.7984 78.7628 24.5893 78.9719C24.4105 79.1507 24.2329 79.3627 24.115 79.5723C24.0648 79.6614 23.9808 79.7639 23.9074 79.8533C23.8849 79.8807 23.8634 79.9069 23.8442 79.9311C23.7986 79.9885 23.7599 80.0412 23.731 80.0898C23.7015 80.1395 23.6886 80.1749 23.6849 80.1982C23.6686 80.3013 23.6056 80.4011 23.5622 80.4657C23.5423 80.4954 23.5212 80.525 23.5028 80.5509C23.4989 80.5563 23.4951 80.5616 23.4915 80.5667C23.4693 80.598 23.4532 80.6212 23.4424 80.6393C23.3369 80.8151 23.2187 80.9937 23.1037 81.1674C23.0375 81.2675 22.9723 81.366 22.9113 81.4613C22.8061 81.6258 22.6958 81.7869 22.5874 81.9452C22.5622 81.982 22.5371 82.0187 22.5122 82.0552C22.3792 82.2502 22.2505 82.4428 22.1326 82.6422C22.0588 82.7671 21.9978 82.9337 21.9447 83.1176C21.903 83.2623 21.8686 83.4087 21.8363 83.546C21.8277 83.5826 21.8193 83.6186 21.8109 83.6537C21.7654 83.844 21.7156 84.0244 21.6667 84.2012C21.5844 84.4995 21.5048 84.7876 21.4534 85.0961C21.2889 86.0827 21.2434 87.0537 21.2434 88.0673C21.2434 88.1468 21.2428 88.2251 21.2422 88.3023C21.2386 88.7736 21.2353 89.2039 21.3705 89.6286C21.5051 90.0519 21.5879 90.5324 21.6616 90.96C21.6669 90.991 21.6722 91.0217 21.6775 91.0521C21.6905 91.1272 21.7031 91.2017 21.7155 91.2757C21.8088 91.8289 21.897 92.3514 22.1184 92.8436C22.2031 93.0318 22.3013 93.2095 22.4053 93.3906C22.4297 93.4331 22.4546 93.476 22.4797 93.5193C22.5603 93.6582 22.6432 93.8012 22.7212 93.9486C22.7994 94.0962 22.8903 94.344 22.8903 94.5397C22.8903 94.587 22.904 94.6279 22.9315 94.7009L22.9343 94.7083C22.9597 94.7755 22.9965 94.8728 22.9965 94.9913C22.9965 95.0933 22.9138 95.1761 22.8117 95.1761C22.7097 95.1761 22.627 95.0933 22.627 94.9913C22.627 94.945 22.6134 94.9048 22.5857 94.8313L22.5833 94.8248C22.5577 94.7571 22.5207 94.6593 22.5207 94.5397C22.5207 94.4299 22.4597 94.2444 22.3946 94.1215C22.3203 93.981 22.2423 93.8466 22.1626 93.7091C22.1368 93.6647 22.1109 93.62 22.0849 93.5747C21.9794 93.3911 21.8738 93.2006 21.7814 92.9952C21.539 92.4566 21.4429 91.8841 21.3508 91.3356C21.3383 91.2617 21.326 91.1881 21.3133 91.1151C21.3084 91.0865 21.3034 91.0577 21.2984 91.0288C21.2236 90.5951 21.1449 90.1386 21.0183 89.7407C20.8638 89.2552 20.8683 88.7595 20.8725 88.2912C20.8732 88.2158 20.8738 88.1411 20.8738 88.0673C20.8738 87.0431 20.9198 86.0498 21.0888 85.0354C21.1428 84.7115 21.2322 84.3865 21.3184 84.073C21.3659 83.9004 21.4124 83.7312 21.4515 83.5677C21.4592 83.5354 21.4672 83.5014 21.4755 83.466C21.5079 83.328 21.5451 83.1697 21.5896 83.0152C21.6455 82.8217 21.7167 82.6196 21.8145 82.4542C21.9388 82.2439 22.0732 82.043 22.2069 81.847C22.2326 81.8093 22.2583 81.7718 22.2838 81.7345C22.3919 81.5765 22.4982 81.4213 22.6 81.2621C22.6679 81.1561 22.736 81.0533 22.8033 80.9517C22.9143 80.784 23.0233 80.6195 23.1255 80.4491C23.1447 80.4172 23.1687 80.383 23.1902 80.3527C23.1944 80.3468 23.1986 80.3408 23.2028 80.335C23.2211 80.3093 23.2386 80.2847 23.2554 80.2597C23.276 80.2291 23.2924 80.2022 23.3042 80.179C23.31 80.1676 23.314 80.1584 23.3166 80.1513C23.3172 80.1496 23.3177 80.1481 23.3181 80.1468C23.3186 80.1454 23.3189 80.1442 23.3192 80.1432C23.3197 80.1413 23.3198 80.1406 23.3198 80.1406C23.3338 80.052 23.3722 79.9704 23.4132 79.9012C23.4548 79.831 23.5058 79.763 23.5547 79.7014C23.5857 79.6623 23.6148 79.6267 23.6417 79.5939C23.7076 79.5135 23.7599 79.4496 23.7929 79.3911C23.9333 79.1415 24.1359 78.9026 24.328 78.7106C24.5376 78.5009 24.7475 78.2925 24.9563 78.0852L24.9582 78.0833C25.1665 77.8765 25.3738 77.6707 25.5793 77.4651C25.7118 77.3327 25.8107 77.1707 25.9127 76.9781C25.9592 76.8901 26.021 76.8134 26.0703 76.7521L26.0743 76.7471C26.1285 76.6798 26.1683 76.6294 26.1958 76.5771C26.2255 76.5206 26.2456 76.4564 26.2721 76.3721C26.2742 76.3652 26.2764 76.3581 26.2787 76.351C26.306 76.2639 26.3414 76.1548 26.4041 76.0563C26.7092 75.5768 26.6648 75.0329 26.4697 74.4518C26.3724 74.1622 26.2407 73.8724 26.1045 73.5866C26.0761 73.5271 26.0475 73.4676 26.0189 73.4083C25.912 73.1862 25.8062 72.9665 25.722 72.7605C25.391 71.9514 25.1932 71.1388 24.9909 70.3078C24.9799 70.2628 24.9689 70.2177 24.9579 70.1725C24.9009 69.9387 24.8268 69.7132 24.7503 69.4804C24.7198 69.3874 24.6888 69.2932 24.6584 69.1969C24.5539 68.8657 24.4596 68.5184 24.4337 68.1495C24.4139 67.8675 24.3621 67.5941 24.308 67.3084C24.3007 67.2698 24.2933 67.2311 24.286 67.192C24.2253 66.8681 24.1676 66.5286 24.1676 66.1709C24.1676 65.1554 24.3989 64.4154 24.9094 63.5287C24.9473 63.4629 24.9829 63.3952 25.0204 63.3238L25.0251 63.3148C25.0457 63.2756 25.0669 63.2353 25.089 63.1948H22.9781C22.876 63.1948 22.7933 63.112 22.7933 63.01Z" fill="#FF9D00" data-v-4eed72ad></path></svg>',
                  2,
                ),
              ])),
          ]))
        : n("", !0),
    ])
  );
}
const C2 = H(Y, [
  ["render", t2],
  ["__scopeId", "data-v-4eed72ad"],
]);
export { C2 as _ };
