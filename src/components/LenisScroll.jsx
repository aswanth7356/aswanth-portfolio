// LenisScroll.jsx
import { useEffect } from "react";
import Lenis from "lenis";

// We'll store the instance here
let lenisInstance = null;

// Export a getter to use in ScrollToTop
export const getLenisInstance = () => lenisInstance;

export default function LenisScroll() {
  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      anchors: { offset: -100 },
    });

    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenisInstance.destroy();
  }, []);

  return null;
}