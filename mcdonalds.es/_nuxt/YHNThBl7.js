function e(t) {
  return t instanceof HTMLElement ? t.closest("a[data-gtm]") : null;
}
export { e as g };
