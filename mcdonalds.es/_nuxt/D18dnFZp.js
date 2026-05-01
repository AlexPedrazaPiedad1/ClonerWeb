import { a as Ke, b as Qe } from "./mLrOcWp5.js";
import {
  _ as O,
  k as ve,
  F as he,
  G as N,
  D as ge,
  H as be,
  I as le,
  a6 as et,
  X as ce,
  E as Ue,
  a2 as Le,
  l as Te,
  u as De,
  d as Re,
  a7 as tt,
  f as ot,
  a8 as lt,
  x as st,
  o as Pe,
} from "./w36zW0QG.js";
import {
  l as j,
  N as w,
  O as n,
  W as x,
  Z as C,
  V as ue,
  aa as ye,
  m as o,
  _ as d,
  X as S,
  A as g,
  ac as Fe,
  U,
  Q as h,
  a1 as R,
  $ as E,
  d as _,
  P as _e,
  a0 as Be,
  a3 as nt,
  Y as re,
  T as He,
  q as me,
  w as at,
  u as p,
  c as Ie,
  a7 as it,
  ar as rt,
  F as ct,
  R as ut,
  S as dt,
  y as we,
  a5 as Ae,
  al as Ne,
  as as pt,
  a2 as Se,
  D as ft,
  am as mt,
} from "./CG2MQ2lF.js";
import { _ as vt } from "./tJXeJJ_G.js";
import { a as ht, _ as gt } from "./BMQmZPly.js";
import { _ as We } from "./D7a1xk7w.js";
import { _ as bt } from "./9C9qpSPh.js";
import { _ as yt } from "./Dn2iLLNP.js";
import { _ as Ge } from "./9UZMSW1R.js";
import { c as Ve } from "./Ca9Ptn7z.js";
import { u as Oe } from "./DMEQSfw8.js";
import { _ as _t } from "./CR2X5H6X.js";
import { _ as xt } from "./fwO26FrS.js";
import { _ as Ct } from "./3AjKDk5D.js";
import { u as kt } from "./D8jQnJCR.js";
import { g as fe } from "./DKtf60Sy.js";
const I = {
    base: "menu-button flex justify-center items-center cursor-pointer focus-visible:outline focus-visible:!outline-[#959595] focus-visible:outline-offset-2",
    default: { type: "hamburger", color: "default", size: "l" },
    type: { hamburger: "", close: "", location: "" },
    color: {
      contrast: {
        close: "menuClose",
        hamburger: "menuBurger",
        colorIcon: "white",
      },
      default: {
        close: "menuCloseColor",
        hamburger: "menuBurgerColor",
        colorIcon: "black",
      },
    },
    size: { s: "s", m: "m", l: "l", xl: "xl", "2xl": "2xl", "3xl": "3xl" },
  },
  wt = j({
    name: "MenuButton",
    components: { MCDLink: N, MCDIcon: ve },
    inheritAttrs: !1,
    props: {
      ...he,
      type: {
        type: String,
        default: () => I.default.type,
        validator(e) {
          return Object.keys(I.type).includes(e);
        },
      },
      size: {
        type: String,
        default: () => I.default.size,
        validator(e) {
          return Object.keys(I.size).includes(e);
        },
      },
      color: {
        type: String,
        default: () => I.default.color,
        validator(e) {
          return Object.keys(I.color).includes(e);
        },
      },
      loading: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      isOpen: { type: Boolean, default: !1 },
      ariaLabel: { type: String, default: "" },
    },
    setup(e) {
      const t = ye(),
        l = o(() => ge(t, ["class"])),
        c = o(() => I.base),
        s = o(() => be(e)),
        r = o(() => e.type),
        a = o(() => {
          const k = I.base,
            $ = (() => {
              switch (e.type) {
                case "location":
                  return "p-2";
              }
            })();
          return le(k, $);
        }),
        u = o(() => I.size[e.size]),
        f = o(() => I.color[e.color].close),
        m = o(() => I.color[e.color].hamburger),
        v = o(() => I.color[e.color].colorIcon);
      return {
        attrs: l,
        buttonClass: c,
        linkProps: s,
        iconToShow: r,
        menuButtonClass: a,
        sizeIcon: u,
        iconClose: f,
        iconBurger: m,
        iconColor: v,
      };
    },
  });
function $t(e, t, l, c, s, r) {
  const a = ve,
    u = N;
  return (
    n(),
    w(
      u,
      ue(
        {
          class: e.menuButtonClass,
          type: e.type,
          disabled: e.disabled || e.loading,
          role: "button",
          "aria-label": e.ariaLabel,
        },
        { ...e.linkProps, ...e.attrs },
      ),
      {
        default: x(() => [
          e.iconToShow === "close"
            ? (n(),
              w(
                a,
                {
                  key: 0,
                  name: e.iconClose,
                  class: "icon close-button",
                  color: e.iconColor,
                  size: e.sizeIcon,
                },
                null,
                8,
                ["name", "color", "size"],
              ))
            : C("", !0),
          e.iconToShow === "location"
            ? (n(),
              w(
                a,
                {
                  key: 1,
                  name: "locationOutline",
                  class: "icon location-icon",
                  color: e.iconColor,
                  size: e.sizeIcon,
                  "has-icon-padding": "",
                },
                null,
                8,
                ["color", "size"],
              ))
            : C("", !0),
          e.iconToShow === "location"
            ? (n(),
              w(
                a,
                {
                  key: 2,
                  name: "locationSolid",
                  color: "#FFBC0D",
                  class: "icon location-icon-hover",
                  size: e.sizeIcon,
                  "has-icon-padding": "",
                },
                null,
                8,
                ["size"],
              ))
            : C("", !0),
          e.iconToShow === "hamburger"
            ? (n(),
              w(
                a,
                {
                  key: 3,
                  name: e.iconBurger,
                  class: "icon burger-icon",
                  size: e.sizeIcon,
                  color: e.iconColor,
                },
                null,
                8,
                ["name", "size", "color"],
              ))
            : C("", !0),
        ]),
        _: 1,
      },
      16,
      ["class", "type", "disabled", "aria-label"],
    )
  );
}
const zt = O(wt, [
    ["render", $t],
    ["__scopeId", "data-v-b1f44d79"],
  ]),
  ke = {
    default: { size: "m" },
    size: {
      s: {
        base: "w-[74.821px] h-[36px] px-3",
        svg: "w-[50.821px] h-6 shrink-0",
      },
      m: {
        base: "w-[89.785px] py-[7.6px] px-[14.4px] h-[44px]",
        svg: "w-[60.985px] h-[28.8px] shrink-0",
      },
    },
  },
  St = j({
    name: "ButtonMymcd",
    components: { MCDLink: N },
    inheritAttrs: !1,
    props: {
      ...he,
      type: { type: String, default: "button" },
      loading: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: () => ke.default.size,
        validator(e) {
          return Object.keys(ke.size).includes(e);
        },
      },
      ariaLabel: { type: String, default: "" },
    },
    setup(e) {
      const t = ye(),
        l = o(() => ge(t, ["class"])),
        c = o(() => be(e)),
        s = o(() => ke.size[e.size].base),
        r = o(() => ke.size[e.size].svg);
      return { attrs: l, linkProps: c, buttonClass: s, buttonContentClass: r };
    },
  });
function Mt(e, t, l, c, s, r) {
  const a = N;
  return (
    n(),
    w(
      a,
      ue(
        { ...e.linkProps, ...e.attrs },
        {
          id: "mymcd-button",
          type: e.type,
          disabled: e.disabled || e.loading,
          class: [
            e.buttonClass,
            "flex flex-col justify-center items-center rounded-full gradient bg-surface-white focus-visible:!outline-none",
          ],
          "aria-label": e.ariaLabel,
        },
      ),
      {
        default: x(() => [
          d(
            "div",
            { class: S(e.buttonContentClass) },
            [
              ...(t[0] ||
                (t[0] = [
                  d(
                    "svg",
                    {
                      id: "mymcd-svg",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 51 25",
                      fill: "none",
                    },
                    [
                      d("path", {
                        d: "M43.1038 0.5C40.6802 0.5 38.5184 3.72992 37.1044 8.78046C35.6905 3.72992 33.5286 0.5 31.105 0.5C26.8444 0.5 23.3901 11.2461 23.3901 24.5H26.8187C26.8187 12.1927 28.7375 2.21312 31.105 2.21312C33.4725 2.21312 35.3913 11.4238 35.3913 22.7845H38.8199C38.8199 11.4238 40.7387 2.21312 43.1062 2.21312C45.4737 2.21312 47.3925 12.1903 47.3925 24.5H50.821C50.8164 11.2461 47.3644 0.5 43.1038 0.5Z",
                        fill: "#FFBC0D",
                      }),
                      d("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M1.28075 6.59521L0 18.0425H2.95647L3.63891 10.9867L5.68858 17.2058H7.58399L9.6173 11.0545L10.2834 18.0425H13.3403L12.0596 6.59521H9.07041L6.66316 13.7866L4.26994 6.59521H1.28075ZM14.607 19.6481L14.0087 21.4243C14.2587 21.5622 14.5485 21.6674 14.8828 21.7398C15.2123 21.8146 15.5769 21.852 15.9765 21.852C16.7501 21.852 17.4115 21.5996 17.9584 21.0995C18.5053 20.5993 18.9844 19.8234 19.3934 18.7764L23.0487 9.43016H20.2301L18.6409 14.864L17.0002 9.43016H13.9923L17.3227 17.9046L16.9979 18.6572C16.7805 19.148 16.5678 19.4728 16.3575 19.6317C16.1471 19.7907 15.9111 19.8701 15.6493 19.8701C15.3081 19.8701 14.9599 19.7953 14.607 19.6481Z",
                        fill: "url(#paint0_linear_11037_6213)",
                      }),
                      d("defs", null, [
                        d(
                          "linearGradient",
                          {
                            id: "paint0_linear_11037_6213",
                            x1: "-8.08833e-09",
                            y1: "19.2278",
                            x2: "23.0445",
                            y2: "19.6456",
                            gradientUnits: "userSpaceOnUse",
                          },
                          [
                            d("stop", { "stop-color": "#910063" }),
                            d("stop", {
                              offset: "0.496",
                              "stop-color": "#DB0007",
                            }),
                            d("stop", { offset: "1", "stop-color": "#E8720A" }),
                          ],
                        ),
                      ]),
                    ],
                    -1,
                  ),
                  d(
                    "svg",
                    {
                      id: "mymcd-svg-hover",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 52 25",
                      fill: "none",
                    },
                    [
                      d("path", {
                        d: "M43.9246 0.5C41.501 0.5 39.3392 3.72992 37.9252 8.78046C36.5113 3.72992 34.3494 0.5 31.9258 0.5C27.6652 0.5 24.2109 11.2461 24.2109 24.5H27.6395C27.6395 12.1927 29.5583 2.21312 31.9258 2.21312C34.2933 2.21312 36.2121 11.4238 36.2121 22.7845H39.6407C39.6407 11.4238 41.5595 2.21312 43.927 2.21312C46.2945 2.21312 48.2133 12.1903 48.2133 24.5H51.6418C51.6372 11.2461 48.1852 0.5 43.9246 0.5Z",
                        fill: "#FFBC0D",
                      }),
                      d("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M2.10155 6.59521L0.820801 18.0425H3.77727L4.45971 10.9867L6.50938 17.2058H8.40479L10.4381 11.0545L11.1042 18.0425H14.1611L12.8804 6.59521H9.89121L7.48396 13.7866L5.09074 6.59521H2.10155ZM15.4278 19.6481L14.8295 21.4243C15.0795 21.5622 15.3693 21.6674 15.7036 21.7398C16.0331 21.8146 16.3977 21.852 16.7973 21.852C17.5709 21.852 18.2323 21.5996 18.7792 21.0995C19.3261 20.5993 19.8052 19.8234 20.2142 18.7764L23.8695 9.43016H21.0509L19.4617 14.864L17.821 9.43016H14.8131L18.1435 17.9046L17.8187 18.6572C17.6013 19.148 17.3886 19.4728 17.1783 19.6317C16.9679 19.7907 16.7319 19.8701 16.4701 19.8701C16.1289 19.8701 15.7807 19.7953 15.4278 19.6481Z",
                        fill: "white",
                      }),
                    ],
                    -1,
                  ),
                ])),
            ],
            2,
          ),
        ]),
        _: 1,
      },
      16,
      ["type", "disabled", "class", "aria-label"],
    )
  );
}
const Dt = O(St, [
    ["render", Mt],
    ["__scopeId", "data-v-7ed95e79"],
  ]),
  Me = {
    default: { bgColor: "red" },
    bgColor: {
      gold: "var(--gold-600)",
      green: "var(--green-800)",
      white: "var(--bg-white)",
      ghost: "var(--neutral-50)",
      "ghost-inverted": "var(--neutral-50)",
      red: "var(--red-700)",
      "gold-active": "var(--gold-400)",
      "green-active": "var(--green-500)",
      "red-active": "var(--red-400)",
    },
  },
  Lt = j({
    name: "DropUnderline",
    props: {
      type: { type: String, default: "4" },
      bgColor: {
        type: String,
        default: () => Me.default.bgColor,
        validator(e) {
          return Object.keys(Me.bgColor).includes(e);
        },
      },
    },
    setup(e) {
      return { bgColorClass: o(() => Me.bgColor[e.bgColor]) };
    },
  }),
  Tt = {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    width: "120",
    height: "15",
    viewBox: "0 0 120 15",
    fill: "none",
  },
  Bt = ["fill"],
  Ht = {
    key: 1,
    width: "117",
    height: "15",
    viewBox: "0 0 117 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ot = { id: "Type=Type 2, State=Default" },
  jt = ["fill"],
  Pt = {
    key: 2,
    xmlns: "http://www.w3.org/2000/svg",
    width: "106",
    height: "15",
    viewBox: "0 0 106 15",
    fill: "none",
  },
  Ft = {
    key: 3,
    xmlns: "http://www.w3.org/2000/svg",
    width: "96",
    height: "14",
    viewBox: "0 0 96 14",
    fill: "none",
  },
  It = {
    key: 4,
    width: "78",
    height: "11",
    viewBox: "0 0 78 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  At = { id: "Drop-underline" },
  Nt = ["fill"],
  Vt = {
    key: 5,
    width: "87",
    height: "13",
    viewBox: "0 0 87 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Et = { id: "Drop-underline" },
  Zt = ["fill"];
function Ut(e, t, l, c, s, r) {
  return (
    n(),
    g(
      U,
      null,
      [
        e.type === "1"
          ? (n(),
            g("svg", Tt, [
              d(
                "path",
                {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M74.2943 9.206C68.1487 12.5137 62.7273 15.6172 54.5 15.6172C44.9461 15.6172 38.0148 11.0095 34.5 8.67514C29.5 5.35437 15.6843 0.5 8 0.5H106.201C90.4699 0.5 81.9222 5.10054 74.2943 9.206ZM65.3799 8.67514C67.4856 7.82874 68.8708 6.34198 68.4739 5.35437C68.0769 4.36676 66.0481 4.25228 63.9423 5.09868C61.8366 5.94508 60.4513 7.43184 60.8483 8.41945C61.2452 9.40706 63.2741 9.52154 65.3799 8.67514Z",
                  fill: e.bgColorClass,
                },
                null,
                8,
                Bt,
              ),
            ]))
          : C("", !0),
        e.type === "2"
          ? (n(),
            g("svg", Ht, [
              d("g", Ot, [
                d(
                  "path",
                  {
                    id: "Vector 4",
                    d: "M119.299 0.5H0.798828C16.7988 0.5 21.7988 8 29.7988 8C37.7988 8 41.2988 3 52.7988 3C66.2988 3 72.6988 15 86.2988 15C99.8988 15 105.799 0.5 119.299 0.5Z",
                    fill: e.bgColorClass,
                  },
                  null,
                  8,
                  jt,
                ),
              ]),
            ]))
          : C("", !0),
        e.type === "ghost"
          ? (n(),
            g("svg", Pt, [
              ...(t[0] ||
                (t[0] = [
                  Fe(
                    '<g clip-path="url(#clip0_13629_1164)"><path d="M85.5207 6.51501C90.633 6.51501 93.6152 0.515011 101.284 0.515011H68.1C67.4127 0.495383 66.6882 0.494613 65.9234 0.515011H5.00156C18.6344 0.515011 25.4509 13.515 38.2317 13.515C51.0125 13.515 56.5508 0.765011 65.9234 0.515011H68.1C79.6653 0.845289 80.6951 6.51501 85.5207 6.51501Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M91.5605 3.96806C89.5043 5.30277 87.6367 6.51501 85.3388 6.51501C83.4203 6.51501 82.1017 5.61882 80.4826 4.51829C78.0465 2.86253 74.9299 0.744233 68.0656 0.519531H65.6054C61.3843 0.687156 57.9361 3.38521 54.2368 6.27967C49.7943 9.75571 44.9898 13.515 38.0498 13.515C31.7625 13.515 26.9185 10.369 21.9965 7.1723C17.0211 3.94093 11.9658 0.657712 5.2592 0.519531H4.81836V1.51953H5.2592C11.9658 1.65771 17.0211 4.94093 21.9965 8.1723C26.9185 11.369 31.7625 14.515 38.0498 14.515C44.9898 14.515 49.7943 10.7557 54.2368 7.27967C57.9361 4.38521 61.3843 1.68716 65.6054 1.51953H68.0656C74.9299 1.74423 78.0465 3.86253 80.4826 5.51829C82.1017 6.61882 83.4203 7.51501 85.3388 7.51501C87.6367 7.51501 89.5043 6.30277 91.5605 4.96806C94.006 3.38069 96.7183 1.6201 100.739 1.51953H101.098V1.51501V0.519531H100.739C96.7183 0.620102 94.006 2.38069 91.5605 3.96806Z" fill="black"></path></g><defs><clipPath id="clip0_13629_1164"><rect width="106" height="14" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>',
                    2,
                  ),
                ])),
            ]))
          : C("", !0),
        e.type === "ghost-inverted"
          ? (n(),
            g("svg", Ft, [
              ...(t[1] ||
                (t[1] = [
                  Fe(
                    '<g clip-path="url(#clip0_13629_1107)"><path d="M77.4526 6.01501C82.0826 6.01501 84.7835 0.0150112 91.7285 0.0150112H61.6754C61.0529 -0.00461677 60.3967 -0.00538701 59.7041 0.0150112H4.52961C16.8764 0.0150112 23.0497 13.015 34.6248 13.015C46.1999 13.015 51.2157 0.265011 59.7041 0.0150112H61.6754C72.1496 0.345289 73.0823 6.01501 77.4526 6.01501Z" fill="#ADADAD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M82.9227 3.46806C81.0605 4.80277 79.3691 6.01501 77.2879 6.01501C75.5504 6.01501 74.3563 5.11882 72.8898 4.01829C70.6836 2.36253 67.861 0.244233 61.6443 0.0195312H59.4162C55.5933 0.187156 52.4704 2.88521 49.1201 5.77967C45.0967 9.25571 40.7454 13.015 34.4602 13.015C28.766 13.015 24.379 9.86903 19.9213 6.6723C15.4153 3.44093 10.8369 0.157712 4.76302 0.0195312H4.36377V1.01953H4.76302C10.8369 1.15771 15.4153 4.44093 19.9213 7.67229C24.379 10.869 28.766 14.015 34.4602 14.015C40.7454 14.015 45.0967 10.2557 49.1201 6.77967C52.4704 3.88521 55.5933 1.18716 59.4161 1.01953H61.6443C67.861 1.24423 70.6835 3.36253 72.8898 5.01829C74.3563 6.11882 75.5504 7.01501 77.2879 7.01501C79.3691 7.01501 81.0605 5.80276 82.9227 4.46806C85.1375 2.88069 87.5939 1.1201 91.2351 1.01953H91.5607V1.01501V0.0195312H91.2351C87.5939 0.120102 85.1375 1.88069 82.9227 3.46806Z" fill="#D6D6D6"></path></g><defs><clipPath id="clip0_13629_1107"><rect width="96" height="14" fill="white"></rect></clipPath></defs>',
                    2,
                  ),
                ])),
            ]))
          : C("", !0),
        e.type === "mcdelivery-3"
          ? (n(),
            g("svg", It, [
              d("g", At, [
                d(
                  "path",
                  {
                    id: "Vector 8",
                    d: "M66.2751 5.13087C70.4288 5.13087 72.8519 0.0598063 79.0825 0.0598063H52.1208C51.5623 0.0432171 50.9737 0.0425662 50.3523 0.0598063H0.853279C11.93 0.0598063 17.4683 11.0471 27.8528 11.0471C38.2372 11.0471 42.7371 0.271101 50.3523 0.0598063H52.1208C61.5176 0.33895 62.3543 5.13087 66.2751 5.13087Z",
                    fill: e.bgColorClass,
                  },
                  null,
                  8,
                  Nt,
                ),
              ]),
            ]))
          : C("", !0),
        e.type === "mcdelivery-4"
          ? (n(),
            g("svg", Vt, [
              d("g", Et, [
                d(
                  "path",
                  {
                    id: "Vector 5",
                    d: "M75.7561 9.54712C79.0391 9.54712 76.9872 0.547119 84.374 0.547119H3.1193C16.2514 0.547119 25.6901 13.5471 37.591 13.5471C49.4919 13.5471 57.2891 1.54712 66.7278 1.54712C74.525 1.54712 72.4731 9.54712 75.7561 9.54712Z",
                    fill: e.bgColorClass,
                  },
                  null,
                  8,
                  Zt,
                ),
              ]),
            ]))
          : C("", !0),
      ],
      64,
    )
  );
}
const Rt = O(Lt, [["render", Ut]]),
  K = {
    base: "bg-surface-gold text-text-gold-hover hover:bg-surface-gold-hover focus-visible:border-2 focus-visible:border-border-gold-focus active:bg-surface-gold-active active:border-transparent hover:border-transparent disabled:bg-surface-gold-disabled disabled:text-text-gold-disabled disabled:cursor-not-allowed inline-flex flex-row justify-center items-center shrink-0 rounded-full border-2 border-transparent",
    default: { size: "m" },
    size: {
      s: {
        container: "h-10",
        content: "h-10 pl-2 pr-4",
        text: "xs",
        drop: { type: "mcdelivery-3", width: 78, height: 11 },
      },
      m: {
        container: "h-12",
        content: "h-12 pl-2 pr-4",
        text: "s",
        drop: { type: "mcdelivery-4", width: 87, height: 13 },
      },
      l: {
        container: "h-12",
        content: "h-12 pl-8 pr-10",
        text: "m",
        drop: { type: "1", width: 120, height: 15 },
      },
    },
  },
  Wt = j({
    name: "ButtonMcdelivery",
    components: { MCDLink: N },
    inheritAttrs: !1,
    props: {
      ...he,
      type: { type: String, default: "button" },
      loading: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: () => K.default.size,
        validator(e) {
          return Object.keys(K.size).includes(e);
        },
      },
      class: { type: [String, Object, Array], default: () => "" },
      buttonText: { type: String, default: "PIDE YA" },
    },
    setup(e) {
      const t = ye(),
        l = o(() => ge(t, ["class"])),
        c = o(() => be(e)),
        s = _(!1),
        r = o(() => K.size[e.size].text),
        a = o(() => {
          const f = K.base,
            m = K.size[e.size].container,
            v = K.size[e.size].content;
          return le(f, m, v, e.class);
        }),
        u = o(() => K.size[e.size].drop.type);
      return {
        attrs: l,
        linkProps: c,
        typeDrop: u,
        buttonMcdeliveryClass: a,
        textSize: r,
        isActive: s,
      };
    },
  }),
  Gt = {
    class: "flex flex-col justify-center items-center button_wrapper mt-2",
  },
  Yt = { class: "drop_underline flex justify-center items-center" };
function Xt(e, t, l, c, s, r) {
  const a = ve,
    u = et,
    f = N,
    m = Rt;
  return (
    n(),
    g("div", Gt, [
      h(
        f,
        ue(
          {
            class: [
              "mcdlink transition-transform duration-200 hover:scale-x-105 disabled:cursor-not-allowed disabled:hover:scale-x-100 w-full",
              e.buttonMcdeliveryClass,
            ],
            type: e.type,
            disabled: e.disabled || e.loading,
          },
          { ...e.linkProps, ...e.attrs },
          {
            onMousedown: t[0] || (t[0] = (v) => (e.isActive = !0)),
            onMouseup: t[1] || (t[1] = (v) => (e.isActive = !1)),
            onMouseleave: t[2] || (t[2] = (v) => (e.isActive = !1)),
          },
        ),
        {
          default: x(() => [
            h(a, { name: "FullfillmentDelivery", color: "black", size: "l" }),
            h(
              u,
              {
                size: e.textSize,
                class:
                  "ml-2 text-text-mcd-gold-default text-center uppercase font-bold active:text-text-mcd-gold-active",
              },
              { default: x(() => [R(E(e.buttonText), 1)]), _: 1 },
              8,
              ["size"],
            ),
          ]),
          _: 1,
        },
        16,
        ["type", "disabled", "class"],
      ),
      d("div", Yt, [
        h(
          m,
          { type: e.typeDrop, "bg-color": e.isActive ? "gold-active" : "gold" },
          null,
          8,
          ["type", "bg-color"],
        ),
      ]),
    ])
  );
}
const qt = O(Wt, [
    ["render", Xt],
    ["__scopeId", "data-v-84300e93"],
  ]),
  Q = {
    base: "",
    default: { as: "span", size: "m", weight: "regular" },
    as: { span: "", p: "" },
    size: {
      l: "text-[16px] leading-[18px] tracking-[1px] uppercase ",
      m: "text-[14px] leading-[16px] tracking-[1px] uppercase",
      s: "text-[12px] leading-[14px] tracking-[1px] uppercase",
    },
  },
  Jt = j({
    inheritAttrs: !1,
    props: {
      class: { type: [String, Object, Array], default: () => "" },
      as: {
        type: String,
        default: () => Q.default.as,
        validator(e) {
          return Object.keys(Q.as).includes(e);
        },
      },
      italic: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: () => Q.default.size,
        validator(e) {
          return Object.keys(Q.size).includes(e);
        },
      },
      weight: {
        type: String,
        default: () => Q.default.weight,
        validator(e) {
          return Object.keys(ce.weight).includes(e);
        },
      },
    },
    setup(e) {
      return {
        textClass: o(() => {
          const l = Q.base,
            c = Q.size[e.size],
            s = ce.weight[e.weight],
            r = e.italic ? ce.italic : "";
          return Ue(le(l, c, s, r), e.class);
        }),
      };
    },
  });
function Kt(e, t, l, c, s, r) {
  return (
    n(),
    w(
      Be(e.as),
      { class: S(e.textClass) },
      { default: x(() => [_e(e.$slots, "default")]), _: 3 },
      8,
      ["class"],
    )
  );
}
const Qt = O(Jt, [["render", Kt]]),
  L = {
    base: "relative flex flex-col items-start justify-end",
    default: { direction: "down", color: "default", size: "m" },
    direction: { up: "bottom-full mb-2 ", down: "top-full mt-2 " },
    color: {
      default: {
        pill: "flex items-center border bg-white border-border-ghost-active rounded-full hover:border-border-ghost-hover focus-visible:outline-2 focus-visible:outline-border-ghost-focus hover:text-text-link-secondary-hover focus-visible:text-text-link-secondary-hover text-text-link-secondary cursor-pointer ",
        pillDisabled:
          "flex items-center border bg-white rounded-full border-text-link-secondary-disabled text-text-link-secondary-disabled cursor-not-allowed",
        modal:
          "absolute flex  bg-surface-primary flex-col items-start rounded-4 shadow-secondary",
        icon: {
          color: "#6F6F6F",
          colorHover: "black",
          colorDisabled: "#ADADAD",
        },
      },
      inverted: {
        pill: "flex items-center border bg-transparent border-border-ghost-inverted rounded-full hover:border-border-ghost-inverted-hover focus-visible:border-2 focus-visible:border-border-ghost-inverted-focus   cursor-pointer text-white",
        pillDisabled:
          "flex items-center border bg-white rounded-full border-border-ghost-inverted-disabled text-text-ghost-inverted-disabled cursor-not-allowed",
        modal:
          "absolute flex  bg-surface-primary flex-col items-start rounded-4 shadow-secondary",
        icon: { color: "white", colorHover: "white" },
      },
    },
    size: {
      s: {
        icon: "s",
        pill: "px-3 py-2 gap-[2px] h-10",
        text: "m",
        modal: "w-[60px] px-3 py-2",
        modalLinkSize: "xs",
      },
      m: {
        icon: "s",
        pill: "py-2 px-4 gap-1 h-10",
        text: "l",
        modal: "w-[72px] py-3 px-4",
        modalLinkSize: "xs",
      },
    },
  },
  eo = j({
    inheritAttrs: !1,
    props: {
      direction: {
        type: String,
        default: () => L.default.direction,
        validator: (e) => Object.keys(L.direction).includes(e),
      },
      color: {
        type: String,
        default: () => L.default.color,
        validator: (e) => Object.keys(L.color).includes(e),
      },
      size: {
        type: String,
        default: () => L.default.size,
        validator: (e) => Object.keys(L.size).includes(e),
      },
      disabled: { type: Boolean, default: !1 },
      languages: { type: Array, default: () => [] },
      currentLocale: { type: String, default: "" },
    },
    emits: ["change-locale", "click-selector"],
    setup(e, { emit: t }) {
      const l = _(!1),
        c = e.languages,
        s = _(e.currentLocale),
        r = _(!1),
        a = Le();
      (me(
        () => e.currentLocale,
        (T) => {
          s.value = T;
        },
      ),
        me(
          () => a.currentRoute.value.fullPath,
          (T) => {
            const M = T.split("/")[1];
            c.some((P) => P.code === M)
              ? s.value !== M && (t("change-locale", M), (s.value = M))
              : M === "" &&
                c.some((P) => P.code === "es") &&
                s.value !== "es" &&
                (t("change-locale", "es"), (s.value = "es"));
          },
          { immediate: !0 },
        ));
      const u = () => {
          e.disabled || (t("click-selector"), (r.value = !r.value));
        },
        f = o(() => c.filter((T) => T.code !== s.value)),
        m = o(() => L.direction[e.direction]),
        v = (T) => {
          e.disabled || (t("change-locale", T), (s.value = T), (r.value = !1));
        },
        k = o(() =>
          le(
            e.disabled ? L.color[e.color].pillDisabled : L.color[e.color].pill,
            L.size[e.size].pill,
          ),
        ),
        $ = o(() => le(L.color[e.color].modal, L.size[e.size].modal)),
        A = o(() =>
          e.disabled
            ? L.color[e.color].icon.colorDisabled
            : l.value
              ? L.color[e.color].icon.colorHover
              : L.color[e.color].icon.color,
        );
      return {
        pillClass: k,
        modalClass: $,
        toggleModal: u,
        switchLocale: v,
        modalDirectionClass: m,
        isModalVisible: r,
        availableLocales: f,
        currentLocaleRef: s,
        iconSize: L.size[e.size].icon,
        iconColorFinal: A,
        textSize: L.size[e.size].text,
        hoverIcon: l,
        baseClass: L.base,
      };
    },
  });
function to(e, t, l, c, s, r) {
  const a = Qt,
    u = ve,
    f = N;
  return (
    n(),
    g(
      "div",
      { class: S(e.baseClass) },
      [
        d(
          "button",
          {
            class: S(e.pillClass),
            onClick:
              t[0] ||
              (t[0] = nt(
                (...m) => e.toggleModal && e.toggleModal(...m),
                ["stop"],
              )),
            onMouseover:
              t[1] || (t[1] = (m) => !e.disabled && (e.hoverIcon = !0)),
            onMouseleave:
              t[2] || (t[2] = (m) => !e.disabled && (e.hoverIcon = !1)),
          },
          [
            h(
              a,
              { size: e.textSize },
              { default: x(() => [R(E(e.currentLocale), 1)]), _: 1 },
              8,
              ["size"],
            ),
            h(
              u,
              {
                name: "arrowsChevronDown",
                size: e.iconSize,
                class: S({
                  "transition-transform duration-300 ease-in-out p-0": !0,
                  "-rotate-180": e.isModalVisible,
                }),
                color: e.iconColorFinal,
              },
              null,
              8,
              ["size", "class", "color"],
            ),
          ],
          34,
        ),
        h(
          He,
          { name: "modal" },
          {
            default: x(() => [
              e.isModalVisible && !e.disabled
                ? (n(),
                  g(
                    "div",
                    { key: 0, class: S([e.modalClass, e.modalDirectionClass]) },
                    [
                      (n(!0),
                      g(
                        U,
                        null,
                        re(
                          e.availableLocales,
                          (m) => (
                            n(),
                            w(
                              f,
                              {
                                key: m.code,
                                size: e.textSize,
                                color: e.iconColorFinal,
                                class: "w-full",
                                onClick: (v) => e.switchLocale(m.code),
                              },
                              {
                                default: x(() => [
                                  h(
                                    a,
                                    { size: "m" },
                                    {
                                      default: x(() => [R(E(m.label), 1)]),
                                      _: 2,
                                    },
                                    1024,
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["size", "color", "onClick"],
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    2,
                  ))
                : C("", !0),
            ]),
            _: 1,
          },
        ),
      ],
      2,
    )
  );
}
const oo = O(eo, [
    ["render", to],
    ["__scopeId", "data-v-09469eeb"],
  ]),
  ee = {
    base: "menu-button flex justify-center items-center cursor-pointer",
    default: { color: "default", size: "l" },
    color: { contrast: "", default: "" },
    size: {
      s: "16px",
      m: "24px",
      l: "32px",
      xl: "40px",
      "2xl": "48px",
      "3xl": "56px",
    },
  },
  lo = j({
    name: "MenuButtonToggle",
    components: { MCDLink: N },
    inheritAttrs: !1,
    props: {
      ...he,
      size: {
        type: String,
        default: () => ee.default.size,
        validator(e) {
          return Object.keys(ee.size).includes(e);
        },
      },
      color: {
        type: String,
        default: () => ee.default.color,
        validator(e) {
          return Object.keys(ee.color).includes(e);
        },
      },
      loading: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      isOpen: { type: Boolean, default: !1 },
    },
    emits: ["toggle-menu"],
    setup(e, { emit: t }) {
      const l = ye(),
        c = o(() => ge(l, ["class"])),
        s = o(() => ee.base),
        r = o(() => be(e)),
        a = o(() => ee.base),
        u = o(() => ee.size[e.size]),
        f = () => {
          t("toggle-menu");
        },
        m = o(() => (e.color === "contrast" ? "#FFFFFF" : "#FFBC0D")),
        v = o(() => (e.color === "contrast" ? "#FFFFFF" : "#73371F"));
      return {
        attrs: c,
        buttonClass: s,
        linkProps: r,
        menuButtonClass: a,
        sizeIcon: u,
        handleToggle: f,
        iconFillColorBrown: m,
        iconFillColorGold: v,
      };
    },
  }),
  so = ["width", "height"],
  no = ["fill"],
  ao = ["fill"],
  io = ["fill"];
function ro(e, t, l, c, s, r) {
  const a = N;
  return (
    n(),
    w(
      a,
      ue(
        { class: e.menuButtonClass, disabled: e.disabled || e.loading },
        { ...e.linkProps, ...e.attrs },
        {
          role: "button",
          "aria-label": e.isOpen ? "Cerrar menu" : "Abrir menu",
          "aria-expanded": e.isOpen,
          onClick: e.handleToggle,
        },
      ),
      {
        default: x(() => [
          (n(),
          g(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: e.sizeIcon,
              height: e.sizeIcon,
              class: S(["burger-icon", { "burger-icon-x": e.isOpen }]),
              viewBox: "0 0 32 22",
              fill: "none",
              "aria-hidden": "true",
            },
            [
              d(
                "path",
                {
                  class: S([
                    "burger-line line1",
                    { "rotate-1": e.isOpen, "no-hover": e.isOpen },
                  ]),
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M32 3.5H0C0 1.84315 1.34315 0.5 3 0.5H29C30.6569 0.5 32 1.84315 32 3.5Z",
                  fill: e.iconFillColorBrown,
                },
                null,
                10,
                no,
              ),
              d(
                "path",
                {
                  class: S([
                    "burger-line line2",
                    { "rotate-2": e.isOpen, "no-hover": e.isOpen },
                  ]),
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M32 11C32 11.8284 31.3284 12.5 30.5 12.5H1.5C0.671573 12.5 0 11.8284 0 11C0 10.1716 0.671573 9.5 1.5 9.5H30.5C31.3284 9.5 32 10.1716 32 11Z",
                  fill: e.iconFillColorGold,
                },
                null,
                10,
                ao,
              ),
              d(
                "path",
                {
                  class: S(["burger-line line3", { "line-hidden": e.isOpen }]),
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M32 18.5C32 20.1569 30.6569 21.5 29 21.5H3C1.34315 21.5 0 20.1569 0 18.5H32Z",
                  fill: e.iconFillColorBrown,
                },
                null,
                10,
                io,
              ),
            ],
            10,
            so,
          )),
        ]),
        _: 1,
      },
      16,
      ["class", "disabled", "aria-label", "aria-expanded", "onClick"],
    )
  );
}
const co = O(lo, [
    ["render", ro],
    ["__scopeId", "data-v-c4d8ae96"],
  ]),
  uo = {
    class:
      "flex flex-col items-center self-stretch gap-6 flex-1 w-full py-20 relative",
  },
  po = { class: "flex flex-col items-center gap-6 w-full" },
  fo = {
    class:
      "bg-white rounded-full shadow-long-blur flex flex-col items-start py-[10.667px] px-4",
  },
  mo = { class: "w-[112.891px] h-[26.667px]" },
  vo = {
    class:
      "flex flex-col items-center gap-8 justify-center self-stretch w-[580px] mx-auto text-center",
  },
  ho = { class: "flex flex-col items-start gap-4 desktop:w-[478px] w-full" },
  go = { class: "text-body-s tablet:text-body-m" },
  bo = { class: "flex items-center justify-center gap-6 self-stretch" },
  yo = j({
    __name: "Subscription",
    setup(e) {
      const t = Te(),
        l = Oe(),
        { t: c } = De(),
        s = o(() => l.getSubscription),
        r = _(!1),
        a = _(""),
        u = _(!1),
        f = _(!1),
        m = _(!1),
        v = _(!1),
        k = _(!1),
        $ = o(() => c("subscription.email.error")),
        A = o(() => c("subscription.email.placeholder")),
        T = o(() => c("subscription.checkbox.error")),
        M = o(() => s.value.legalText[0].text),
        P = o(() => (t.isDesktop.value ? "xs" : "s")),
        V = o(() =>
          r.value
            ? {
                text: s.value.successTitle,
                body: s.value.successDescription[0].text,
              }
            : { text: s.value.title, body: s.value.description[0].text },
        ),
        b = () => {
          ((k.value = !0),
            (u.value = !Ve(a.value)),
            (v.value = !f.value),
            !u.value &&
              !v.value &&
              ((m.value = !0),
              setTimeout(() => {
                ((r.value = !0),
                  (m.value = !1),
                  (a.value = ""),
                  (f.value = !1));
              }, 2e3)));
        };
      return (
        at(() => {
          k.value &&
            ((u.value = !!(a.value && !Ve(a.value))), (v.value = !f.value));
        }),
        (F, H) => {
          const X = vt,
            Z = ht,
            se = We,
            W = bt,
            ne = yt,
            q = Ge,
            ae = gt;
          return (
            n(),
            g("div", uo, [
              d("div", po, [
                d("div", fo, [
                  d("div", mo, [
                    h(X, { "type-variant": p(s).logo }, null, 8, [
                      "type-variant",
                    ]),
                  ]),
                ]),
                h(
                  Z,
                  {
                    image: {
                      url: p(s).offerImage?.url,
                      alt: p(s).offerImage?.alt || p(V).text,
                    },
                    variant: "rectangle",
                    size: "m",
                    static: !0,
                  },
                  null,
                  8,
                  ["image"],
                ),
              ]),
              d("div", vo, [
                h(
                  se,
                  { size: "xl", weight: "bold" },
                  { default: x(() => [R(E(p(V).text), 1)]), _: 1 },
                ),
                d("div", ho, [
                  p(r)
                    ? C("", !0)
                    : (n(),
                      w(
                        W,
                        {
                          key: 0,
                          modelValue: p(a),
                          "onUpdate:modelValue":
                            H[0] ||
                            (H[0] = (J) => (Ie(a) ? (a.value = J) : null)),
                          placeholder: p(A),
                          icon: "arrowsChevronRight",
                          type: "email",
                          error: p(u),
                          "show-feedback": p(u),
                          "feedback-message": p($),
                          loading: p(m),
                          onSubmit: b,
                        },
                        null,
                        8,
                        [
                          "modelValue",
                          "placeholder",
                          "error",
                          "show-feedback",
                          "feedback-message",
                          "loading",
                        ],
                      )),
                  h(
                    He,
                    { name: "fade" },
                    {
                      default: x(() => [
                        p(a) && p(a).length > 0 && !p(r)
                          ? (n(),
                            w(
                              ne,
                              {
                                key: 0,
                                id: "newsletter",
                                modelValue: p(f),
                                "onUpdate:modelValue":
                                  H[1] ||
                                  (H[1] = (J) =>
                                    Ie(f) ? (f.value = J) : null),
                                error: p(v),
                                "show-feedback": p(v),
                                "feedback-message": p(T),
                              },
                              {
                                default: x(() => [d("p", go, E(p(M)), 1)]),
                                _: 1,
                              },
                              8,
                              [
                                "modelValue",
                                "error",
                                "show-feedback",
                                "feedback-message",
                              ],
                            ))
                          : C("", !0),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                h(
                  q,
                  { size: p(P) },
                  { default: x(() => [R(E(p(V).body), 1)]), _: 1 },
                  8,
                  ["size"],
                ),
                d("div", bo, [
                  h(ae, { size: "m", ios: "" }),
                  h(ae, { size: "m", android: "" }),
                ]),
              ]),
            ])
          );
        }
      );
    },
  }),
  _o = O(yo, [["__scopeId", "data-v-03b72028"]]),
  te = {
    base: "",
    default: { as: "h1", size: "m", weight: "regular" },
    as: { h1: "", h2: "", h3: "", h4: "", h5: "", h6: "" },
    size: {
      xxl: "text-[96px] leading-[94px] tracking-[-2.5px]",
      xl: "text-[80px] leading-[78px] tracking-[-1.75px]",
      l: "text-[72px] leading-[72px] tracking-[-1.75px]",
      m: "text-[64px] leading-[64px] tracking-[-1.5px]",
      s: "text-[56px] leading-[58px] tracking-[-1.5px]",
      xs: "text-[48px] leading-[50px] tracking-[-1px]",
    },
  },
  xo = j({
    inheritAttrs: !1,
    props: {
      class: { type: [String, Object, Array], default: () => "" },
      as: {
        type: String,
        default: () => te.default.as,
        validator(e) {
          return Object.keys(te.as).includes(e);
        },
      },
      italic: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: () => te.default.size,
        validator(e) {
          return Object.keys(te.size).includes(e);
        },
      },
      weight: {
        type: String,
        default: () => te.default.weight,
        validator(e) {
          return Object.keys(ce.weight).includes(e);
        },
      },
    },
    setup(e) {
      return {
        textClass: o(() => {
          const l = te.base,
            c = te.size[e.size],
            s = ce.weight[e.weight],
            r = e.italic ? ce.italic : "";
          return Ue(le(l, c, s, r), e.class);
        }),
      };
    },
  });
function Co(e, t, l, c, s, r) {
  return (
    n(),
    w(
      Be(e.as),
      { class: S(e.textClass) },
      { default: x(() => [_e(e.$slots, "default")]), _: 3 },
      8,
      ["class"],
    )
  );
}
const ko = O(xo, [["render", Co]]),
  oe = {
    default: { size: "m", icon: "", level: "1" },
    textSize: {
      1: { xs: "s", s: "s", m: "xl", l: "s" },
      2: { xs: "l", s: "s", m: "m", l: "l" },
    },
    iconSize: { xs: "m", s: "l", m: "2xl", l: "3xl" },
    size: { xs: "", s: "", m: "", l: "" },
    level: { 1: "", 2: "" },
  },
  wo = j({
    name: "ItemMenu",
    components: { MCDLink: N },
    inheritAttrs: !1,
    props: {
      ...he,
      type: { type: String, default: "button" },
      label: { type: String, default: null },
      iconName: { type: String, default: oe.default.icon },
      iconColor: { type: String, default: () => "black" },
      loading: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      size: {
        type: String,
        default: () => oe.default.size,
        validator(e) {
          return Object.keys(oe.size).includes(e);
        },
      },
      level: {
        type: String,
        default: () => oe.default.level,
        validator(e) {
          return Object.keys(oe.level).includes(e);
        },
      },
      class: { type: [String, Object, Array], default: () => "" },
      darkMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = ye(),
        l = o(() => ge(t, ["class"])),
        c = o(() => be(e)),
        s = o(() => oe.textSize[e.level][e.size]),
        r = o(() => oe.iconSize[e.size]),
        a = o(() => {
          switch (e.size) {
            case "s":
              return "4px";
            case "m":
              return "6px";
            default:
              return "10px";
          }
        }),
        u = o(() => e.class);
      return {
        attrs: l,
        linkProps: c,
        labelSize: s,
        markerHeight: a,
        iconSize: r,
        baseClass: u,
      };
    },
  }),
  $o = { class: "flex flex-col items-center justify-center pt-[2px]" };
function zo(e, t, l, c, s, r) {
  const a = We,
    u = _t,
    f = ko,
    m = Ge,
    v = ve,
    k = N;
  return (
    n(),
    g(
      "div",
      {
        class: S([
          "flex flex-col items-center justify-center item_wrapper w-full",
          e.baseClass,
        ]),
      },
      [
        h(
          k,
          ue(
            {
              class:
                "inline-flex items-center justify-between gap-2 w-full whitespace-nowrap focus-visible:outline",
              type: e.type,
              disabled: e.disabled || e.loading,
            },
            { ...e.linkProps, ...e.attrs },
          ),
          {
            default: x(() => [
              d("div", $o, [
                e.level === "1" && (e.size === "s" || e.size === "m")
                  ? (n(),
                    w(
                      u,
                      { key: 0, disabled: e.disabled },
                      {
                        default: x(() => [
                          h(
                            a,
                            { as: "h4", weight: "bold", size: e.labelSize },
                            { default: x(() => [R(E(e.label), 1)]), _: 1 },
                            8,
                            ["size"],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["disabled"],
                    ))
                  : e.level === "1"
                    ? (n(),
                      w(
                        u,
                        { key: 1, size: "l", disabled: e.disabled },
                        {
                          default: x(() => [
                            h(
                              f,
                              { as: "h3", weight: "bold", size: e.labelSize },
                              { default: x(() => [R(E(e.label), 1)]), _: 1 },
                              8,
                              ["size"],
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled"],
                      ))
                    : e.level === "2" && e.size === "xs"
                      ? (n(),
                        w(
                          m,
                          {
                            key: 2,
                            class: S([
                              [
                                { "hoverable-item": e.level === "2" },
                                e.darkMode
                                  ? "text-text-primary hover:text-text-gold"
                                  : "text-text-link-secondary hover:text-text-gold",
                              ],
                              "disabled:text-text-link-secondary-disabled",
                            ]),
                            size: e.labelSize,
                            weight: "bold",
                          },
                          { default: x(() => [R(E(e.label), 1)]), _: 1 },
                          8,
                          ["class", "size"],
                        ))
                      : e.level === "2"
                        ? (n(),
                          w(
                            a,
                            {
                              key: 3,
                              class: S([
                                [
                                  { "hoverable-item": e.level === "2" },
                                  e.darkMode
                                    ? "text-text-primary hover:text-text-gold"
                                    : "text-text-link-secondary hover:text-text-gold",
                                ],
                                "disabled:text-text-link-secondary-disabled",
                              ]),
                              as: "h4",
                              size: e.labelSize,
                              weight: "bold",
                            },
                            { default: x(() => [R(E(e.label), 1)]), _: 1 },
                            8,
                            ["class", "size"],
                          ))
                        : C("", !0),
              ]),
              e.level === "1"
                ? (n(),
                  w(
                    v,
                    {
                      key: 0,
                      name: e.iconName,
                      color: e.iconColor,
                      size: e.iconSize,
                    },
                    null,
                    8,
                    ["name", "color", "size"],
                  ))
                : C("", !0),
            ]),
            _: 1,
          },
          16,
          ["type", "disabled"],
        ),
      ],
      2,
    )
  );
}
const So = O(wo, [["render", zo]]);
var Mo = (e) => Object.prototype.toString.call(e).includes("Object"),
  Ee = (e) => typeof e == "number" && !isNaN(e),
  Do = (e) => Array.isArray(e),
  Ye = (e) => Object.prototype.toString.call(e) === "[object String]",
  je = (e) => Number.isInteger(e);
const $e = (e, t) =>
    t(e)
      ? !0
      : !Mo(e) || Object.keys(e).length !== 2
        ? !1
        : !Object.entries(e).some(([l, c]) => {
            const s = !["enter", "leave"].includes(l),
              r = !t(c);
            return s || r;
          }),
  Lo = (e) => $e(e, (t) => je(t) && t >= 0),
  To = (e) => $e(e, (t) => Ye(t) && t.trim() !== ""),
  Bo = (e) => $e(e, (t) => je(t) && t >= 0),
  Xe = 300,
  Ho = "cubic-bezier(.25, .8, .5, 1)",
  Oo = 0,
  jo = [0, -16],
  Po = Xe,
  Fo = {
    inheritAttrs: !1,
    props: {
      duration: { validator: Lo, default: Xe },
      easing: { validator: To, default: () => Ho },
      delay: { validator: Bo, default: Oo },
      noOpacity: { type: Boolean, default: !1 },
      appear: { type: Boolean, default: !1 },
      mode: { type: String, default: void 0 },
      group: { type: Boolean, default: !1 },
      tag: { type: String, default: "span" },
      noMove: { type: Boolean, default: !1 },
      moveDuration: { type: Number, default: Po },
    },
    computed: {
      cComponent() {
        return this.group ? rt : He;
      },
      cAttrs() {
        const { appear: e, mode: t, tag: l, duration: c } = this;
        return this.group
          ? { appear: e, tag: l, duration: c, ...this.$attrs }
          : { appear: e, mode: t, duration: c };
      },
      cHooks() {
        return {
          beforeEnter: (...e) => {
            (this.reduceTransition(...e), this.$emit("before-enter", ...e));
          },
          beforeLeave: (...e) => {
            var t;
            (this.reduceTransition(...e),
              (t = this.initLeaving) == null || t.call(this, ...e),
              this.$emit("before-leave", ...e));
          },
          enter: (...e) => {
            var t;
            ((t = this.onEnter) == null || t.call(this, ...e),
              this.$emit("enter", ...e));
          },
          leave: (...e) => {
            var t;
            ((t = this.onLeave) == null || t.call(this, ...e),
              this.$emit("leave", ...e));
          },
          afterEnter: (...e) => {
            var t;
            (this.resetTransition(...e),
              (t = this.resetElement) == null || t.call(this, ...e),
              this.$emit("after-enter", ...e));
          },
          afterLeave: (...e) => {
            var t;
            (this.resetTransition(...e),
              (t = this.resetElement) == null || t.call(this, ...e),
              this.$emit("after-leave", ...e));
          },
        };
      },
    },
    methods: {
      setupTransition(e, t = "enter") {
        var l, c, s;
        const r =
            ((l = this.duration) == null ? void 0 : l[t]) ?? this.duration,
          a = ((c = this.easing) == null ? void 0 : c[t]) ?? this.easing,
          u = ((s = this.delay) == null ? void 0 : s[t]) ?? this.delay;
        (e.style.setProperty("transition-duration", `${r}ms`, "important"),
          e.style.setProperty(
            "transition-timing-function",
            `${a}`,
            "important",
          ),
          e.style.setProperty("transition-delay", `${u}ms`, "important"));
      },
      reduceTransition(e) {
        (e.style.setProperty("transition-duration", "0ms", "important"),
          e.style.setProperty("transition-delay", "0ms", "important"));
      },
      resetTransition(e) {
        (e.style.removeProperty("transition-duration"),
          e.style.removeProperty("transition-timing-function"),
          e.style.removeProperty("transition-delay"));
      },
      initLeaving(e) {
        if (!this.group || this.noMove) return e;
        const t = getComputedStyle(e),
          { width: l, height: c } = t,
          { marginLeft: s, marginTop: r } = t;
        return (
          e.style.setProperty(
            "left",
            `${e.offsetLeft - parseFloat(s)}px`,
            "important",
          ),
          e.style.setProperty(
            "top",
            `${e.offsetTop - parseFloat(r)}px`,
            "important",
          ),
          e.style.setProperty("width", `${parseFloat(l)}px`, "important"),
          e.style.setProperty("height", `${parseFloat(c)}px`, "important"),
          e.style.setProperty("position", "absolute", "important"),
          e
        );
      },
      setMoveDuration() {
        var e;
        this.group &&
          this.$el &&
          ((e = this.$el.style) == null ||
            e.setProperty("--move-duration", `${this.moveDuration}ms`));
      },
    },
    watch: {
      moveDuration() {
        this.setMoveDuration();
      },
      group() {
        this.setMoveDuration();
      },
    },
    mounted() {
      this.setMoveDuration();
    },
  },
  Io = (e, t) => {
    const l = e.__vccOpts || e;
    for (const [c, s] of t) l[c] = s;
    return l;
  },
  Ao = (e) => {
    const t = e.startsWith("matrix3d") ? "matrix3d" : "matrix",
      l =
        t === "matrix3d"
          ? e.slice(9, -1).split(",").map(Number)
          : e.startsWith("matrix")
            ? e.slice(7, -1).split(",").map(Number)
            : [1, 0, 0, 1, 0, 0];
    return [t, l];
  },
  No = (e) =>
    $e(e, (t) =>
      !Do(t) || t.length !== 2
        ? !1
        : !t.some((l) =>
            je(l)
              ? !1
              : Ye(l)
                ? isNaN(Number(l.endsWith("%") ? l.slice(0, -1) : l))
                : !0,
          ),
    ),
  Vo = {
    name: "transition-slide",
    mixins: [Fo],
    props: { offset: { validator: No, default: () => jo } },
    data: () => ({}),
    computed: {},
    methods: {
      onEnter(e) {
        (this.slideElement(e, "enter"),
          e.offsetTop,
          this.setupTransition(e, "enter"),
          e.style.removeProperty("opacity"),
          e.style.removeProperty("transform"));
      },
      onLeave(e) {
        (this.setupTransition(e, "leave"), this.slideElement(e, "leave"));
      },
      slideElement(e, t = "enter") {
        var l;
        const { width: c, height: s, transform: r } = getComputedStyle(e),
          a = ((l = this.offset) == null ? void 0 : l[t]) ?? this.offset;
        let [u, f] = a;
        (Ee(u) ||
          (u = u.endsWith("%")
            ? (parseFloat(c) * (parseFloat(u.slice(0, -1)) || 0)) / 100
            : parseFloat(u)),
          Ee(f) ||
            (f = f.endsWith("%")
              ? (parseFloat(s) * (parseFloat(f.slice(0, -1)) || 0)) / 100
              : parseFloat(f)));
        const [m, v] = Ao(r);
        (r.startsWith("matrix3d")
          ? ((v[12] += u), (v[13] += f))
          : r.startsWith("matrix")
            ? ((v[4] += u), (v[5] += f))
            : ((v[4] = u), (v[5] = f)),
          this.noOpacity || e.style.setProperty("opacity", 0),
          e.style.setProperty("transform", `${m}(${v})`));
      },
      resetElement(e) {
        (e.style.removeProperty("opacity"),
          e.style.removeProperty("transform"));
      },
    },
  };
function Eo(e, t, l, c, s, r) {
  return (
    n(),
    w(
      Be(e.cComponent),
      ue({ name: "slide" }, e.cAttrs, it(e.cHooks)),
      { default: x(() => [_e(e.$slots, "default")]), _: 3 },
      16,
    )
  );
}
const Zo = Io(Vo, [["render", Eo]]),
  Uo = {
    name: "TransitionSlide",
    inheritAttrs: !1,
    components: { TheTransition: Zo },
  };
function Ro(e, t, l, c, s, r) {
  const a = ct("the-transition");
  return (
    n(),
    w(
      a,
      ut(dt(e.$attrs)),
      { default: x(() => [_e(e.$slots, "default")]), _: 3 },
      16,
    )
  );
}
const Wo = O(Uo, [["render", Ro]]),
  Ze = window.setInterval,
  Go = {
    key: "main-menu",
    class:
      "flex flex-col items-start self-stretch w-full h-full gap-4 overflow-y-auto tablet:gap-6 desktop:gap-0 desktop:justify-between scrollbar-hide",
  },
  Yo = {
    class:
      "flex flex-col items-start w-full flyout-list tablet:gap-6 desktop:gap-10",
  },
  Xo = {
    class:
      "flex flex-col gap-6 desktop:mt-10 mb-2 desktop:min-h-[130px] desktop:pb-[88px]",
  },
  qo = { class: "flex flex-col items-start" },
  Jo = {
    class: "flex flex-col items-start justify-center gap-2 desktop:gap-6",
  },
  Ko = { key: 0, class: "hidden desktop:flex social-animation" },
  Qo = {
    key: "submenu",
    class:
      "flex flex-col items-start justify-start w-full h-full desktop:items-center",
  },
  el = {
    key: 0,
    class: "flex flex-col justify-start h-full tablet:gap-4 desktop:gap-6",
  },
  tl = {
    class:
      "flex flex-col justify-start h-full tablet:gap-4 desktop:gap-6 overflow-y-auto scrollbar-hide pb-10 px-4",
  },
  ol = { class: "flex flex-col tablet:gap-2" },
  ll = { key: 0, class: "flex flex-col mb-4 tablet:gap-2" },
  sl = j({
    __name: "index",
    emits: ["close-menu"],
    setup(e, { emit: t }) {
      const l = t,
        c = Le(),
        {
          $gtmClickBotonMenu: s,
          $gtmClickBotonMenuNivel1: r,
          $gtmClickBotonMenuNivel2: a,
          $gtmSocialNetworksMenu: u,
        } = Re(),
        f = Oe(),
        { asLinkCustom: m } = kt(),
        v = o(() => f.getHeader.headerNavigationGroups),
        k = o(() => f.getHeader.headerSecondaryNavLinks);
      o(() => f.getHeader.headerDeals);
      const $ = Te(),
        A = _(null),
        T = _(null),
        M = _(!1),
        P = _(0),
        V = _(0),
        b = _(!1),
        F = _(!1);
      o(
        () =>
          "flex flex-col items-center tablet:justify-start gap-6 tablet:gap-10 desktop:items-end desktop:gap-8 desktop:self-stretch desktop:hidden  desktop:mb-0 flyout-banners w-full pb-6",
      );
      const H = o(() =>
          $.isMobile.value ? "s" : $.isTablet.value ? "m" : "l",
        ),
        X = o(() => ($.isMobile.value ? "s" : $.isTablet.value ? "m" : "l")),
        Z = o(() => ($.isMobile.value ? "xs" : "m"));
      o(() => ($.isMobile.value ? "s" : $.isTablet.value ? "l" : "m"));
      const se = (i) => {
          if (
            (r(i.gtmText || i.title, i.titleLink?.url),
            i.titleLink?.url && q(i.titleLink.url))
          ) {
            l("close-menu");
            return;
          }
          i.items?.length !== 0 &&
            (A.value === i.id
              ? (M.value = !M.value)
              : ((A.value = i.id),
                (T.value = i.gtmText || i.title),
                (M.value = !0)));
        },
        W = (i) => {
          const y = T.value || "",
            B = i.gtmText || i.label;
          (a(y, B, i.link?.url),
            i.link?.url && q(i.link.url) && l("close-menu"));
        },
        ne = (i) => {
          (s(i.gtmText || i.label, i.link?.url),
            i.link?.url && q(i.link.url) && l("close-menu"));
        },
        q = (i) => {
          const y = i.split("?")[0].split("#")[0],
            B = c.currentRoute.value.path;
          return y.startsWith("http") ? new URL(y).pathname === B : y === B;
        },
        ae = (i) => {
          fe.fromTo(
            `.item-${i}`,
            { y: -4, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: $.isMobile.value ? 0.28 : 0.5,
              ease: "power2.out",
            },
          );
        },
        J = (i) => {
          fe.fromTo(
            `.secondary-item-${i}`,
            { y: -4, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: $.isMobile.value ? 0.28 : 0.5,
              ease: "power2.out",
            },
          );
        },
        xe = () => {
          fe.timeline()
            .fromTo(
              ".social-animation",
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "expo.out" },
            )
            .to(".social-animation", {
              width: "100%",
              duration: 0.5,
              ease: "power2.inOut",
            });
        },
        Ce = () => {
          fe.fromTo(
            ".flyout-banners",
            { y: 15, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
              keyframes: [{ y: 15 }, { y: -2 }, { y: 0 }],
            },
          );
        };
      we(() => {
        let i = 0;
        const y = $.isMobile.value ? 140 : 300,
          B = $.isMobile.value ? 200 : 0;
        setTimeout(() => {
          const G = Ze(() => {
            if (i < v.value.length) ((P.value = i + 1), ae(i), i++);
            else {
              clearInterval(G);
              let Y = 0;
              const de = Ze(() => {
                Y < k.value.length
                  ? ((V.value = Y + 1), J(Y), Y++)
                  : (clearInterval(de),
                    xe(),
                    setTimeout(
                      () => {
                        ((F.value = !0), Ce());
                      },
                      $.isMobile.value ? 200 : 400,
                    ),
                    (b.value = !0));
              }, y);
            }
          }, y);
        }, B);
      });
      const ze = (i) => {
        if (i && i.title) {
          const y = i.title === "share" ? "header" : i.title;
          i.url && u(y, i.url);
        }
      };
      return (i, y) => {
        const B = So,
          G = xt,
          Y = Ct,
          de = Wo;
        return (
          n(),
          w(
            de,
            {
              group: "",
              offset: {
                enter: M.value ? ["100%", 0] : ["-100%", 0],
                leave: M.value ? ["-100%", 0] : ["100%", 0],
              },
              mode: "out-in",
              class: "flex flex-col items-start w-full h-full",
            },
            {
              default: x(() => [
                M.value
                  ? (n(),
                    g("div", Qo, [
                      v.value.length > 0
                        ? (n(!0),
                          g(
                            U,
                            { key: 0 },
                            re(
                              v.value,
                              (z) => (
                                n(),
                                g(
                                  U,
                                  { key: z.id },
                                  [
                                    A.value === z.id
                                      ? (n(),
                                        g("div", el, [
                                          h(
                                            Y,
                                            {
                                              label: z.title,
                                              "show-icon-left": "",
                                              size: "md",
                                              color: "gray",
                                              onClick:
                                                y[1] ||
                                                (y[1] = (D) => (M.value = !1)),
                                            },
                                            null,
                                            8,
                                            ["label"],
                                          ),
                                          d("div", tl, [
                                            d("div", ol, [
                                              (n(!0),
                                              g(
                                                U,
                                                null,
                                                re(
                                                  z.items,
                                                  (D) => (
                                                    n(),
                                                    w(
                                                      B,
                                                      {
                                                        key: D.label,
                                                        label: D.label,
                                                        size: X.value,
                                                        to: p(m)(D.link),
                                                        level: "2",
                                                        "dark-mode": !0,
                                                        class:
                                                          "h-10 tablet:h-12",
                                                        onClick: (ie) => W(D),
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "label",
                                                        "size",
                                                        "to",
                                                        "onClick",
                                                      ],
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ]),
                                            z.secondaryItems?.length
                                              ? (n(),
                                                g("div", ll, [
                                                  (n(!0),
                                                  g(
                                                    U,
                                                    null,
                                                    re(
                                                      z.secondaryItems,
                                                      (D) => (
                                                        n(),
                                                        w(
                                                          B,
                                                          {
                                                            key: D.label,
                                                            label: D.label,
                                                            size: Z.value,
                                                            to: p(m)(D.link),
                                                            level: "2",
                                                            class:
                                                              "h-10 tablet:h-12",
                                                            onClick: (ie) =>
                                                              W(D),
                                                          },
                                                          null,
                                                          8,
                                                          [
                                                            "label",
                                                            "size",
                                                            "to",
                                                            "onClick",
                                                          ],
                                                        )
                                                      ),
                                                    ),
                                                    128,
                                                  )),
                                                ]))
                                              : C("", !0),
                                          ]),
                                        ]))
                                      : C("", !0),
                                  ],
                                  64,
                                )
                              ),
                            ),
                            128,
                          ))
                        : C("", !0),
                    ]))
                  : (n(),
                    g("div", Go, [
                      d("div", Yo, [
                        (n(!0),
                        g(
                          U,
                          null,
                          re(v.value, (z, D) =>
                            Ae(
                              (n(),
                              g(
                                "div",
                                {
                                  key: z.id,
                                  class: S(
                                    `flex w-full flex-col justify-center items-start self-stretch h-12 item item-${D}`,
                                  ),
                                },
                                [
                                  h(
                                    B,
                                    {
                                      label: z.title,
                                      size: H.value,
                                      "icon-name": z.items?.length
                                        ? "customArrow"
                                        : "",
                                      to: z.titleLink
                                        ? p(m)(z.titleLink ?? {})
                                        : void 0,
                                      onClick: (ie) => se(z),
                                    },
                                    null,
                                    8,
                                    [
                                      "label",
                                      "size",
                                      "icon-name",
                                      "to",
                                      "onClick",
                                    ],
                                  ),
                                ],
                                2,
                              )),
                              [[Ne, P.value > D]],
                            ),
                          ),
                          128,
                        )),
                      ]),
                      d("div", Xo, [
                        d("div", qo, [
                          d("div", Jo, [
                            (n(!0),
                            g(
                              U,
                              null,
                              re(k.value, (z, D) =>
                                Ae(
                                  (n(),
                                  w(
                                    B,
                                    {
                                      key: z.label,
                                      class: S(`secondary-item-${D}`),
                                      label: z.label,
                                      to: p(m)(z.link),
                                      level: "2",
                                      size: Z.value,
                                      onClick: (ie) => ne(z),
                                    },
                                    null,
                                    8,
                                    ["class", "label", "to", "size", "onClick"],
                                  )),
                                  [[Ne, V.value > D]],
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ]),
                        b.value
                          ? (n(),
                            g("div", Ko, [
                              h(G, {
                                animated: "",
                                onLinkClicked: y[0] || (y[0] = (z) => ze(z)),
                              }),
                            ]))
                          : C("", !0),
                      ]),
                    ])),
              ]),
              _: 1,
            },
            8,
            ["offset"],
          )
        );
      };
    },
  }),
  nl = O(sl, [["__scopeId", "data-v-80a533b4"]]),
  al = {
    key: 0,
    class: "bg-surface-gold hidden desktop:flex w-full h-screen -mt-20",
  },
  il = { key: 0, class: "w-full" },
  rl = j({
    __name: "index",
    props: { isOpen: { type: Boolean } },
    emits: ["update:isOpen"],
    setup(e, { emit: t }) {
      const l = e,
        c = t,
        s = pt(),
        r = _(!1),
        a = _(!1),
        u = _(!1),
        f = _(!1),
        m = _(!0),
        v = _(!1),
        k = {
          other: "fixed top-0 flex flex-col z-40 w-full h-full",
          base: "pt-[70px] tablet:pt-[103px] desktop:pt-[160px] flex flex-col items-start w-full h-full pt-6 px-4 tablet:px-6 tablet:pt-10 desktop:px-[327px] shrink-0 bg-surface-gold z-40 overflow-y-auto desktop:overflow-visible desktop:items-center transition-bg-color duration-500 ease-in-out",
          content:
            "flex flex-col items-start w-full h-full gap-8 desktop:flex-row desktop:justify-center desktop:w-[580px] desktop:w-min-[580px] z-40 transition-opacity duration-500 ease-in-out",
          contentPromo:
            "flex flex-col items-start w-full h-full gap-8 desktop:flex-row z-40 transition-opacity duration-500 ease-in-out",
          promoBase:
            "pt-[70px] tablet:pt-[103px] desktop:pt-[160px] flex flex-col items-start w-full h-full pt-6 pb-8 px-4 tablet:px-6 tablet:py-10 desktop:pl-[120px] desktop:pr-0 desktop:py-[80px] shrink-0 bg-surface-gold overflow-y-auto desktop:items-center desktop:items-center transition-bg-color duration-500 ease-in-out desktop:overflow-y-hidden",
        },
        $ = o(() => {
          const b = s.promo ? k.promoBase : k.base;
          return u.value
            ? b.replace("bg-surface-gold", "bg-surface-primary")
            : b;
        }),
        A = o(() => (u.value ? "white" : "gold")),
        T = o(() => (s.promo ? k.contentPromo : k.content)),
        M = o(() => k.other),
        P = o(() =>
          s.promo
            ? "w-full desktop:w-[475px] desktop:min-w-[475px] h-full"
            : "w-full h-full flex flex-col items-center justify-start",
        ),
        V = () => {
          c("update:isOpen", !1);
        };
      return (
        we(() => {
          l.isOpen &&
            ((a.value = !0),
            setTimeout(() => {
              r.value = !0;
            }, 500));
        }),
        me(
          () => l.isOpen,
          (b) => {
            b
              ? ((document.body.style.overflow = "hidden"),
                (a.value = !0),
                (r.value = !1),
                (m.value = !1),
                setTimeout(() => {
                  ((r.value = !0), (u.value = !0));
                }, 500),
                setTimeout(() => {
                  f.value = !0;
                }, 1e3))
              : ((document.body.style.overflow = ""),
                (v.value = !0),
                (r.value = !1),
                (u.value = !1),
                (f.value = !1),
                setTimeout(() => {
                  ((f.value = !1),
                    (a.value = !1),
                    setTimeout(() => {
                      ((m.value = !0), (v.value = !1));
                    }, 0));
                }, 500));
          },
        ),
        (b, F) => {
          const H = nl,
            X = Ke,
            Z = tt;
          return a.value
            ? (n(),
              g(
                "div",
                {
                  key: 0,
                  class: S({
                    "drop-animation": a.value && l.isOpen,
                    "drop-up-animation": a.value && !l.isOpen,
                    [M.value]: !0,
                    hidden: m.value,
                  }),
                  style: Se({
                    transform:
                      a.value && l.isOpen
                        ? "translateY(0)"
                        : "translateY(-100%)",
                    transition: "transform 0.5s ease-in-out",
                  }),
                },
                [
                  d(
                    "div",
                    { class: S($.value) },
                    [
                      d(
                        "div",
                        {
                          class: S(T.value),
                          style: Se({
                            opacity: r.value ? 1 : 0,
                            transition: "opacity 0s ease-in-out",
                          }),
                        },
                        [
                          d(
                            "div",
                            { class: S(P.value) },
                            [h(H, { onCloseMenu: V })],
                            2,
                          ),
                          b.$slots.promo
                            ? (n(),
                              g("div", al, [
                                _e(b.$slots, "promo", {}, void 0, !0),
                              ]))
                            : C("", !0),
                        ],
                        6,
                      ),
                      b.$slots.promo
                        ? C("", !0)
                        : (n(),
                          g(
                            "div",
                            {
                              key: 0,
                              class:
                                "absolute -bottom-2 hidden desktop:block w-full",
                              style: Se({
                                opacity: r.value ? 1 : 0,
                                transition: "opacity 0.5s ease-in-out",
                              }),
                            },
                            [
                              f.value
                                ? (n(),
                                  g("div", il, [
                                    h(X, {
                                      color: "gray",
                                      animated: "",
                                      width: "100%",
                                      height: "100%",
                                    }),
                                  ]))
                                : C("", !0),
                            ],
                            4,
                          )),
                    ],
                    2,
                  ),
                  d("div", null, [
                    h(Z, { color: A.value, type: "menu" }, null, 8, ["color"]),
                  ]),
                ],
                6,
              ))
            : C("", !0);
        }
      );
    },
  }),
  cl = O(rl, [["__scopeId", "data-v-6f45e9cc"]]),
  ul = { class: "flex tablet:hidden" },
  dl = { class: "hidden tablet:flex" },
  pl = {
    class:
      "flex justify-end items-center shrink-0 self-stretch gap-2 tablet:gap-4",
  },
  fl = {
    key: 0,
    class:
      "lower-menu-container hidden tablet:flex tablet:flex-row tablet:items-center tablet:justify-center gap-4",
  },
  ml = { class: "flex justify-center items-center gap-4" },
  vl = { class: "flex tablet:hidden" },
  hl = { class: "hidden tablet:flex tablet:p-2" },
  Hl = j({
    __name: "index",
    props: { noScroll: { type: Boolean, default: !1 } },
    setup(e) {
      const {
          $gtmClickBotonHeader: t,
          $gtmClickBotonHeaderSeleccionidioma: l,
          $gtmClickBotonHeaderBuscarrestaurante: c,
          $gtmClickBotonHeaderMcdelivery: s,
          $gtmClickBotonHeaderMymcdonalds: r,
        } = Re(),
        a = Te(),
        u = Oe(),
        { locales: f, locale: m, setLocale: v } = De(),
        { t: k } = De(),
        $ = Le(),
        A = ot(),
        T = lt(),
        M = _(!1),
        P = _(!1),
        V = _(!1),
        b = _(!1),
        F = _(!1),
        H = e,
        X = o(() => {
          const i =
            H.noScroll || b.value || F.value
              ? "bg-white shadow-navbar py-0 pr-4 pl-2 h-12 tablet:h-16 desktop:h-20 transition-all duration-300"
              : "bg-gradient-to-b from-black/50 to-transparent py-4 pr-4 pl-2 transition-all duration-200";
          return le(
            "z-50 flex w-full justify-between items-center fixed transition-all duration-200",
            i,
          );
        }),
        Z = o(() =>
          a.isDesktop.value
            ? H.noScroll || F.value || b.value
              ? "3xl"
              : "4xl"
            : a.isTablet.value
              ? H.noScroll || F.value || b.value
                ? "xl"
                : "2xl"
              : H.noScroll || F.value || b.value
                ? "l"
                : "xl",
        ),
        se = o(() => (H.noScroll || F.value || b.value ? "l" : "xl")),
        W = o(() =>
          H.noScroll || F.value || b.value ? "default" : "contrast",
        ),
        ne = o(() => (H.noScroll || F.value || b.value ? "s" : "m")),
        q = o(() => (a.isMobile.value ? "s" : "m")),
        ae = o(() => u.getHeader.showSubscriptionHeader),
        J = o(() =>
          f.value.map((i) => ({ code: i.code, label: i.code.toUpperCase() })),
        ),
        xe = () => {
          ((b.value = !b.value), b.value && t("menu"));
        },
        Ce = () => {
          F.value = window.scrollY > 120;
        },
        ze = (i) => {
          if ((l(i), m.value !== i))
            try {
              const y = T(i);
              if (
                (typeof window < "u" &&
                  (localStorage.removeItem("locale"),
                  localStorage.removeItem("nuxt-i18n-locale"),
                  localStorage.removeItem("i18n_redirected")),
                y)
              )
                Pe(y, { replace: !0 });
              else {
                const B = $.currentRoute.value.path,
                  G = i === "es" ? B : `/${i}${B}`;
                Pe(G, { replace: !0 });
              }
            } catch (y) {
              (console.error("Error changing language:", y), v(i));
            }
        };
      return (
        me(
          () => m.value,
          (i) => {
            typeof window < "u" &&
              (localStorage.removeItem("locale"),
              localStorage.removeItem("nuxt-i18n-locale"),
              localStorage.removeItem("i18n_redirected"));
          },
        ),
        me(
          () => $.currentRoute.value,
          () => {
            b.value && (b.value = !1);
          },
        ),
        we(() => {
          (window.addEventListener("scroll", Ce),
            fe.fromTo(
              ".header",
              { y: -100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.3,
                ease: "power4.out",
              },
            ));
        }),
        we(() => {
          setTimeout(() => {
            ((P.value = !0),
              setTimeout(() => {
                ((M.value = !0),
                  setTimeout(() => {
                    V.value = !0;
                  }, 5e3));
              }, 5e3));
          }, 5e3);
        }),
        ft(() => {
          window.removeEventListener("scroll", Ce);
        }),
        (i, y) => {
          const B = Qe,
            G = st,
            Y = zt,
            de = Dt,
            z = qt,
            D = oo,
            ie = co,
            qe = _o,
            Je = cl;
          return (
            n(),
            g(
              U,
              null,
              [
                p(A).isApp
                  ? C("", !0)
                  : (n(),
                    g(
                      "header",
                      {
                        key: 0,
                        class: S([
                          X.value,
                          "header z-50 tablet:pl-6 tablet:pr-4 smaller-tablet:px-6 desktop:px-10 1440:px-[120px] opacity-0",
                        ]),
                      },
                      [
                        h(
                          G,
                          {
                            to: `/${p(m) === "es" ? "" : p(m)}`,
                            class:
                              "flex justify-center tablet:justify-end items-center shrink-0 tablet:w-[72px] h-full pl-2 tablet:pl-0",
                            "aria-label": p(k)("navigation.home"),
                          },
                          {
                            default: x(() => [
                              d("div", ul, [
                                h(
                                  B,
                                  { "bg-color": "white", size: Z.value },
                                  null,
                                  8,
                                  ["size"],
                                ),
                              ]),
                              d("div", dl, [
                                h(
                                  B,
                                  {
                                    trademark: "",
                                    size: Z.value,
                                    "bg-color": "white",
                                    animated: !0,
                                  },
                                  null,
                                  8,
                                  ["size"],
                                ),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["to", "aria-label"],
                        ),
                        d("div", pl, [
                          b.value
                            ? C("", !0)
                            : (n(),
                              g("div", fl, [
                                h(
                                  Y,
                                  {
                                    type: "location",
                                    size: se.value,
                                    color: W.value,
                                    to: p(u).header.headerLinkRestaurants?.url,
                                    "aria-label": p(k)(
                                      "location.find-restaurants",
                                    ),
                                    onClick:
                                      y[0] ||
                                      (y[0] = (pe) =>
                                        p(c)(
                                          p(u).header.headerLinkRestaurants
                                            ?.url,
                                        )),
                                  },
                                  null,
                                  8,
                                  ["size", "color", "to", "aria-label"],
                                ),
                                d("div", ml, [
                                  h(
                                    de,
                                    {
                                      size: ne.value,
                                      to: p(u).header.headerLinkMymcd?.url,
                                      "aria-label": p(k)("navigation.mymcd"),
                                      onClick:
                                        y[1] ||
                                        (y[1] = (pe) =>
                                          p(r)(
                                            p(u).header.headerLinkMymcd?.url,
                                          )),
                                    },
                                    null,
                                    8,
                                    ["size", "to", "aria-label"],
                                  ),
                                  h(
                                    z,
                                    {
                                      "button-text": p(k)("a-domicilio.title"),
                                      size: ne.value,
                                      to: p(u).header.headerLinkMcdelivery?.url,
                                      onClick:
                                        y[2] ||
                                        (y[2] = (pe) =>
                                          p(s)(
                                            p(u).header.headerLinkMcdelivery
                                              ?.url,
                                          )),
                                    },
                                    null,
                                    8,
                                    ["button-text", "size", "to"],
                                  ),
                                ]),
                              ])),
                          b.value
                            ? (n(),
                              w(
                                D,
                                {
                                  key: 1,
                                  languages: J.value,
                                  size: q.value,
                                  "current-locale": p(m),
                                  onClickSelector:
                                    y[3] ||
                                    (y[3] = (pe) => p(t)("seleccionidioma")),
                                  onChangeLocale: ze,
                                },
                                null,
                                8,
                                ["languages", "size", "current-locale"],
                              ))
                            : C("", !0),
                          d("div", vl, [
                            h(
                              ie,
                              {
                                "is-open": b.value,
                                size: "l",
                                color: W.value,
                                onToggleMenu: xe,
                              },
                              null,
                              8,
                              ["is-open", "color"],
                            ),
                          ]),
                          d("div", hl, [
                            h(
                              ie,
                              {
                                "is-open": b.value,
                                size: se.value,
                                color: W.value,
                                onToggleMenu: xe,
                              },
                              null,
                              8,
                              ["is-open", "size", "color"],
                            ),
                          ]),
                        ]),
                      ],
                      2,
                    )),
                h(
                  Je,
                  {
                    "is-open": b.value,
                    class: "w-full h-full",
                    "onUpdate:isOpen": y[4] || (y[4] = (pe) => (b.value = pe)),
                  },
                  mt({ _: 2 }, [
                    ae.value
                      ? { name: "promo", fn: x(() => [h(qe)]), key: "0" }
                      : void 0,
                  ]),
                  1032,
                  ["is-open"],
                ),
              ],
              64,
            )
          );
        }
      );
    },
  });
export { Hl as _, Dt as a };
