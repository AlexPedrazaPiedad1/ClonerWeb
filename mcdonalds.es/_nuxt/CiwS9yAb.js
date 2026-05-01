import { p as n } from "./w36zW0QG.js";
function u() {
  function t(r) {
    if (!r) return;
    const s = e(r);
    (console.error(s), n(s));
  }
  function e(r) {
    if (typeof r == "string") return { status: 500, message: r };
    if (typeof r == "object" && r !== null) {
      const s = r;
      return {
        status: Number(s.statusCode || s.status || 500),
        message: String(s.statusMessage || s.message) || "An error occurred",
      };
    }
    return { status: 500, message: "Unknown error" };
  }
  return { handleError: t };
}
export { u };
