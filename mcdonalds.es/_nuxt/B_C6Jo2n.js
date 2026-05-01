import { ap as e, d as a } from "./CG2MQ2lF.js";
const s = a(!1),
  n = a(""),
  l = a("info");
let o = null;
function i() {
  const r = (t) => {
      (o && clearTimeout(o),
        (n.value = t.message),
        (l.value = t.type || "info"),
        (s.value = !0));
      const c = t.duration || 3e3;
      o = setTimeout(() => {
        u();
      }, c);
    },
    u = () => {
      s.value = !1;
    };
  return {
    showToast: e(s),
    toastMessage: e(n),
    toastType: e(l),
    show: r,
    close: u,
  };
}
export { i as u };
