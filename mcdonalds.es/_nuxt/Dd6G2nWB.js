import { u as f } from "./DMEQSfw8.js";
import { u as m } from "./D8jQnJCR.js";
import { u as l } from "./w36zW0QG.js";
import { y as p, q as y, m as n } from "./CG2MQ2lF.js";
const L = () => {
  const t = f(),
    { locale: o } = l(),
    { asLinkCustom: r } = m();
  (p(async () => {
    (!t.fetchStatus || t.currentLang !== o.value) && (await i());
  }),
    y(
      () => o.value,
      async (e, c) => {
        if (e !== c) {
          if (typeof window > "u") return;
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      },
    ));
  const s = n(() => r(t.flyingButton)),
    a = n(() => t.prefooter),
    u = n(() => t.newprefooter);
  return { flyingButtonLinkUrl: s, prefooter: a, newprefooter: u };
  async function i() {
    try {
      await t.fetchDocument(o.value);
    } catch (e) {
      console.error("Error fetching layout data:", e);
    }
  }
};
export { L as u };
