export const scrollToTop = () => {
  try {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  } catch (e) {
    if (typeof document !== "undefined") {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
};
