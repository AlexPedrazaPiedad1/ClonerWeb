import { y as l } from "./w36zW0QG.js";
const i = {
    loyaltyPrizes: { food: [], merch: [], sorteo: [] },
    activeTopPrizesTab: "todos",
    activeFoodPointsTab: 50,
  },
  y = l({
    id: "myLoyaltyPrizesStore",
    state: () => i,
    actions: {
      setLoyaltyPrizes(t) {
        this.loyaltyPrizes = t;
        const e = this.getAvailableFoodPoints;
        this.activeFoodPointsTab = e.length > 0 ? e[0] : 50;
      },
      resetLoyaltyPrizes() {
        this.loyaltyPrizes = i.loyaltyPrizes;
      },
      setActiveTopPrizesTab(t) {
        this.activeTopPrizesTab = t;
      },
      setActiveFoodPointsTab(t) {
        this.activeFoodPointsTab = t;
      },
    },
    getters: {
      getAvailableFoodPoints: (t) => {
        const e = Object.values(t.loyaltyPrizes)
          .flat()
          .filter((o) => o.loyaltyType === "food");
        return [...new Set(e.map((o) => o.points))].sort((o, r) => o - r);
      },
      hasLoadedPrizes: (t) =>
        Object.values(t.loyaltyPrizes).every((e) => e.length > 0),
      getPrizesByCategory: (t) => (e) =>
        e.length === 1
          ? t.loyaltyPrizes[e[0]]
          : e.reduce((s, o) => [...s, ...t.loyaltyPrizes[o]], []),
      getAllPrizes: (t) => Object.values(t.loyaltyPrizes).flat(),
      getLatestPrizes: (t) =>
        Object.values(t.loyaltyPrizes)
          .flat()
          .filter((e) => e.featuredNew === !0),
      getEndSoonPrizes: (t) =>
        Object.values(t.loyaltyPrizes)
          .flat()
          .filter((e) => e.endSoon === !0),
      getFoodPrizesByPoints: (t) => (e) =>
        Object.values(t.loyaltyPrizes)
          .flat()
          .filter((s) => s.loyaltyType === "food" && s.points === e),
    },
  });
export { y as u };
