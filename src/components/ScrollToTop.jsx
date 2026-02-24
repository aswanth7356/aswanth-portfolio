import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenisInstance } from "./LenisScroll"; // import from LenisScroll.jsx

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}