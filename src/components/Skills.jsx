import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const timelineRef = useRef([]);
  const lineRef = useRef(null);
  const [count, setCount] = useState(0);

  /* ---------------- Scroll Reveal Animation ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ---------------- Animated Vertical Line ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const section = lineRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );

      section.style.height = `${progress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Backlink Counter Animation ---------------- */
  useEffect(() => {
    let start = 0;
    const end = 200;
    const duration = 1500;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, []);

  /* ---------------- Experience Data ---------------- */
  const experiences = [
    {
      title: "Off-Page SEO & Link Building",
      points: [
        `Built and managed ${count}+ high-quality backlinks through guest posting, social bookmarking, and directory submissions.`,
        "Secured backlinks from high Domain Authority (DA) websites with low Spam Score (SS) to maintain strong link profile health.",
        "Conducted comprehensive backlink audits and link gap analysis using SEO tools.",
      ],
    },
    {
      title: "Keyword Research & On-Page SEO",
      points: [
        "Conducted keyword research using Semrush to identify ranking opportunities.",
        "Optimized meta tags, headings, and internal linking structure.",
        "Improved content targeting based on search intent analysis.",
      ],
    },
    {
      title: "Analytics & Performance Tracking",
      points: [
        "Monitored performance using Google Analytics & Search Console.",
        "Analyzed traffic behavior and keyword ranking trends.",
        "Identified organic growth opportunities using performance data.",
      ],
    },
    {
      title: "Technical SEO & Event Tracking",
      points: [
        "Implemented Google Tag Manager (GTM) for event tracking and conversion monitoring.",
        "Conducted technical SEO audits to identify crawl errors, indexing issues, and on-page improvements.",
        "Analyzed website performance using Google PageSpeed Insights and optimized Core Web Vitals to improve loading speed and overall performance.",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full px-[12%] py-24 scroll-mt-20">
      {/* Section Heading */}
      <h4 className="text-center text-lg font-Ovo mb-2">
        SEO Trainee – Viral Mafia Agency
      </h4>

      <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-20">
        Professional Experience & Responsibilities
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* Static Line Background */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-white/10"></div>

        {/* Animated Line */}
        <div
          ref={lineRef}
          className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-1 bg-black dark:bg-white transition-all duration-300"
          style={{ height: "0%" }}
        ></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => (timelineRef.current[index] = el)}
              className={`relative mb-20 opacity-0 translate-y-10 transition-all duration-700 ease-out
              sm:w-1/2 ${isLeft ? "sm:pr-16" : "sm:pl-16 sm:ml-auto"}`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-6 w-5 h-5 rounded-full bg-black dark:bg-white
                shadow-[0_0_15px_rgba(0,0,0,0.6)]
                dark:shadow-[0_0_15px_rgba(255,255,255,0.8)]
                animate-pulse
                ${isLeft ? "sm:right-[-10px] left-4" : "sm:left-[-10px] left-4"}`}
              ></div>

              {/* Card */}
              <div
                className="ml-12 sm:ml-0 border border-gray-300 dark:border-white/30
                rounded-2xl p-8
                bg-white/50 dark:bg-darkHover/40
                backdrop-blur-lg
                shadow-lg hover:shadow-2xl
                transition duration-500"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {exp.title}
                </h3>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm sm:text-base text-gray-700 dark:text-white/80"
                    >
                      {/* ✅ Checkmark */}
                      <span className="flex-shrink-0 text-green-500 text-lg">✔</span>

                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}