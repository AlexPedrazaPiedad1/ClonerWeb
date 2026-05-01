import { _ as A } from "./tJXeJJ_G.js";
import {
  _ as U,
  F as V,
  G as k,
  D as W,
  H as j,
  E as O,
  I as q,
  u as R,
  c as G,
  d as J,
} from "./w36zW0QG.js";
import { g as y } from "./DKtf60Sy.js";
import {
  l as B,
  N as Q,
  O as M,
  W as C,
  _ as X,
  X as w,
  P as L,
  Q as x,
  V as Y,
  d as m,
  aa as K,
  m as d,
  y as Z,
  o as tt,
  A as et,
  u as ot,
  v as nt,
} from "./CG2MQ2lF.js";
const v = {
    base: "flex flex-col justify-center items-center shrink-0 cursor-pointer z-50 w-14 h-14 desktop:w-20 desktop:h-20 focus-visible:outline-none",
    logoSize: "w-[35.575px] h-[16.8px] desktop:w-[50.821px] desktop:h-6",
  },
  it = B({
    name: "FlyingButton",
    components: { MCDLink: k },
    props: {
      ...V,
      class: { type: [String, Object, Array], default: () => "" },
      disabled: { type: Boolean, default: !1 },
      initialTop: { type: [Number, String], default: null },
      initialBottom: { type: Number, default: null, required: !1 },
      fixedPosition: { type: Boolean, default: !1, required: !1 },
      ariaLabel: { type: String, default: "Ir a My McDonald's" },
      role: { type: String, default: "button" },
    },
    emits: ["flyingbutton-click"],
    setup(t, { emit: o, slots: c }) {
      const l = m(!1),
        f = m(!1),
        r = m(!1),
        s = K(),
        p = d(() => W(s, ["class"])),
        i = d(() => j(t)),
        a = m({ top: "0", right: "0", opacity: 0, bottom: "0" }),
        S = d(() => {
          const e = v.base;
          return O(q(e, t.class));
        }),
        $ = d(() => v.logoSize),
        T = d(() =>
          l.value && !t.disabled
            ? "mymcdonalds-inverse"
            : "mymcdonalds-default",
        ),
        b = () => {
          if (t.fixedPosition) return;
          const u = window.innerHeight - 82 - 20,
            n = window.innerWidth,
            g = window.innerHeight,
            h = Math.min(
              g * 0.6,
              n >= 1440 ? 464 : n >= 1024 ? 512 : n >= 768 ? 412 : 380,
            ),
            N = t.initialTop !== null ? t.initialTop : h,
            _ = Math.min(n * 0.05, n >= 1024 ? 40 : n >= 768 ? 16 : 8),
            I = window.scrollY > 100 ? u : N;
          y.to(a.value, {
            top: `${I}px`,
            bottom: "auto",
            right: `${_}px`,
            duration: 0.5,
            ease: "power1.inOut",
          });
        },
        F = (e) => {
          if (t.disabled) return;
          o("flyingbutton-click", e);
          const u = e.currentTarget;
          if (u) {
            const n = u.closest(
              "[tabindex], a, button, input, select, textarea",
            );
            n && n.blur();
          }
        },
        P = () => {
          t.disabled || (r.value = !0);
        },
        H = () => {
          r.value = !1;
        },
        D = () => {
          t.disabled || (l.value = !0);
        },
        z = () => {
          l.value = !1;
        };
      (Z(() => {
        const e = window.innerWidth,
          u = window.innerHeight,
          n = Math.min(e * 0.05, e >= 1024 ? 40 : e >= 768 ? 16 : 8),
          g = Math.min(
            u * 0.6,
            e >= 1440 ? 464 : e >= 1024 ? 512 : e >= 768 ? 412 : 380,
          ),
          h = t.initialTop !== null ? t.initialTop : g;
        (t.initialBottom
          ? ((a.value.bottom = `${t.initialBottom}px`), (a.value.top = "auto"))
          : ((a.value.top = `${h}px`), (a.value.bottom = "auto")),
          (a.value.right = `${n}px`),
          y.to(a.value, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.in",
            delay: 2,
          }),
          window.addEventListener("scroll", b),
          b());
      }),
        tt(() => {
          window.removeEventListener("scroll", b);
        }));
      const E = d(() => !!c.default);
      return {
        buttonClass: S,
        logoSize: $,
        typeLogo: T,
        flyingButtonPosition: a,
        isHovered: l,
        isFocused: r,
        isClicked: f,
        attrs: p,
        linkProps: i,
        handleClick: F,
        handleBlur: H,
        handleFocus: P,
        handleMouseEnter: D,
        handleMouseLeave: z,
        hasSlotContent: E,
      };
    },
  });
function at(t, o, c, l, f, r) {
  const s = A,
    p = k;
  return (
    M(),
    Q(
      p,
      Y(
        { disabled: t.disabled },
        { ...t.linkProps, ...t.attrs },
        {
          class: t.buttonClass,
          "aria-label": t.ariaLabel,
          role: t.role,
          style: { ...t.flyingButtonPosition },
          onFocus: t.handleFocus,
          onBlur: t.handleBlur,
        },
      ),
      {
        default: C(() => [
          X(
            "div",
            {
              class: w([
                "flex w-full h-full py-[5.6px] px-[9.4px] flex-col justify-center items-center rounded-full shadow-long-blur bg-white overflow-hidden",
                [
                  t.disabled
                    ? "cursor-not-allowed disabled-button"
                    : "flying-button",
                  t.hasSlotContent ? "no-hover" : "",
                ],
              ]),
              onClick:
                o[0] || (o[0] = (...i) => t.handleClick && t.handleClick(...i)),
              onMouseenter:
                o[1] ||
                (o[1] = (...i) =>
                  t.handleMouseEnter && t.handleMouseEnter(...i)),
              onMouseleave:
                o[2] ||
                (o[2] = (...i) =>
                  t.handleMouseLeave && t.handleMouseLeave(...i)),
            },
            [
              L(
                t.$slots,
                "default",
                {},
                () => [
                  x(
                    s,
                    { "type-variant": t.typeLogo, class: w(t.logoSize) },
                    null,
                    8,
                    ["type-variant", "class"],
                  ),
                ],
                !0,
              ),
            ],
            34,
          ),
        ]),
        _: 3,
      },
      16,
      ["disabled", "class", "aria-label", "role", "style", "onFocus", "onBlur"],
    )
  );
}
const lt = U(it, [
    ["render", at],
    ["__scopeId", "data-v-ad4ed092"],
  ]),
  st = { role: "complementary", "aria-label": "Acceso rápido de MyMcD" },
  ft = B({
    __name: "index",
    props: {
      flyingButtonLinkUrl: {},
      top: {},
      bottom: {},
      isFixed: { type: Boolean },
    },
    setup(t) {
      const o = t,
        { t: c } = R(),
        l = G(),
        { $gtmClickSticky: f } = J(),
        r = async (s) => {
          (s.preventDefault(),
            f("mymcdonalds", o.flyingButtonLinkUrl),
            await nt(),
            l.push(o.flyingButtonLinkUrl));
        };
      return (s, p) => {
        const i = lt;
        return (
          M(),
          et("aside", st, [
            x(
              i,
              {
                class: "fixed z-[39]",
                to: t.flyingButtonLinkUrl,
                "initial-top": t.top,
                "initial-bottom": t.bottom,
                role: "button",
                "fixed-position": t.isFixed,
                "aria-label": ot(c)("navigation.mymcd"),
                onFlyingbuttonClick: r,
              },
              { default: C(() => [L(s.$slots, "default")]), _: 3 },
              8,
              [
                "to",
                "initial-top",
                "initial-bottom",
                "fixed-position",
                "aria-label",
              ],
            ),
          ])
        );
      };
    },
  });
export { ft as _ };
