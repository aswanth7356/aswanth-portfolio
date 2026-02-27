import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-75 pointer-events-none"
      }`}
    >
      <div className="relative w-14 h-14 rounded-full backdrop-blur-xl bg-gradient-to-br from-purple-500/40 to-blue-500/40 border border-purple-300/30 shadow-[0_0_35px_rgba(139,92,246,0.6)] flex items-center justify-center hover:scale-110 hover:shadow-[0_0_45px_rgba(59,130,246,0.8)] transition-all duration-300">

        {/* Progress Ring */}
        <svg
          className="absolute top-0 left-0 w-full h-full -rotate-90"
          width="56"
          height="56"
        >
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="rgba(168,85,247,0.25)"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="url(#gradientStroke)"
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow */}
        <span className="text-black-500 text-xl relative z-10 font-bold">
          ↑
        </span>
      </div>
    </button>
  );
}