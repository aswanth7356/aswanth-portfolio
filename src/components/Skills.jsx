import { useEffect, useRef, useState } from "react";
import { FaLink, FaSearch, FaChartLine, FaCogs } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  const cardsRef = useRef([]);
  const [count, setCount] = useState(0);

  /* Initialize AOS */
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  /* Backlink Counter */
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

  const experiences = [
    {
      title: "Off-Page SEO & Link Building",
      icon: <FaLink />,
      color: "from-purple-500 to-indigo-500",
      aos: "fade-up",
      points: [
        `Built and managed ${count}+ high-quality backlinks through guest posting, social bookmarking, and directory submissions.`,
        "Secured backlinks from high Domain Authority (DA) websites with low Spam Score (SS) to maintain strong link profile health.",
        "Conducted comprehensive backlink audits and link gap analysis using SEO tools.",
      ],
    },
    {
      title: "Keyword Research & On-Page SEO",
      icon: <FaSearch />,
      color: "from-blue-500 to-cyan-500",
      aos: "fade-up",
      points: [
        "Conducted keyword research using Semrush to identify ranking opportunities.",
        "Optimized meta tags, headings, and internal linking structure.",
        "Improved content targeting based on search intent analysis.",
      ],
    },
    {
      title: "Analytics & Performance Tracking",
      icon: <FaChartLine />,
      color: "from-emerald-500 to-green-500",
      aos: "fade-up",
      points: [
        "Monitored performance using Google Analytics & Search Console.",
        "Analyzed traffic behavior and keyword ranking trends.",
        "Identified organic growth opportunities using performance data.",
      ],
    },
    {
      title: "Technical SEO & Event Tracking",
      icon: <FaCogs />,
      color: "from-orange-500 to-red-500",
      aos: "fade-up",
      points: [
        "Implemented Google Tag Manager (GTM) for event tracking and conversion monitoring.",
        "Conducted technical SEO audits to identify crawl errors, indexing issues, and on-page improvements.",
        "Analyzed website performance using Google PageSpeed Insights and optimized Core Web Vitals to improve loading speed and overall performance.",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full px-[12%] py-24 scroll-mt-20">

      {/* Heading */}
      <h4
        className="text-center text-lg font-Ovo mb-2"
        data-aos="fade-up"
      >
        SEO Trainee – Viral Mafia Agency
      </h4>

      <h2
        className="text-center text-4xl sm:text-5xl font-Ovo mb-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Professional Experience & Responsibilities
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">

        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos={exp.aos}
            data-aos-delay={index * 150}
            className="group relative h-full"
          >

            {/* Gradient Border */}
            <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 blur-sm transition duration-500`}></div>

            {/* Card */}
            <div className="relative h-full flex flex-col rounded-2xl p-8 bg-white dark:bg-darkHover/50 border border-gray-200 dark:border-white/20 backdrop-blur-lg shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 transition duration-500">

              {/* Title + Icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`text-white p-2 rounded-lg bg-gradient-to-r ${exp.color}`}>
                  {exp.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
              </div>

              <ul className="space-y-3 flex-grow">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-gray-700 dark:text-white/80"
                  >
                    <span className="text-green-500 text-lg mt-[2px]">✔</span>
                    {point}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}