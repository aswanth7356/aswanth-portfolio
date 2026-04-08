import { useEffect, useState } from "react";
import { FaLink, FaSearch, FaChartLine, FaCogs } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ExperienceTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    // Backlink Counter
    useEffect(() => {
        let start = 0;
        const end = 300;
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
            title: "Keyword Research & On-Page SEO",
            icon: <FaSearch />,
            color: "from-blue-500 to-cyan-500",
            points: [
                "Conducted keyword research using Semrush to identify relevant keywords, search intent, and ranking opportunities.",
                "Optimized on-page elements including meta titles, meta descriptions, headings (H1–H3), and URL structure.",
                "Worked on internal linking to improve site structure and enhance user navigation.",
                "Assisted in optimizing content for better keyword placement, readability, and SEO best practices.",
            ],
        },
        {
            title: "Competitor Analysis & Content Strategy",
            icon: <FaChartLine />,
            color: "from-pink-500 to-rose-500",
            points: [
                "Assisted in analyzing competitors’ SEO strategies to identify keyword gaps and content opportunities.",
                "Supported competitor research using SEO tools to understand ranking patterns and trends.",
                "Helped in planning and optimizing content based on targeted keywords and search intent.",
                "Applied basic SEO best practices such as keyword placement, readability, and internal linking in content.",
            ],
        },
        {
            title: "Technical SEO & Event Tracking",
            icon: <FaCogs />,
            color: "from-orange-500 to-red-500",
            points: [
                "Implemented Google Tag Manager (GTM) for event tracking and conversion monitoring.",
                "Conducted technical SEO audits to identify crawl errors, indexing issues, and on-page improvements.",
                "Analyzed website performance using Google PageSpeed Insights and optimized Core Web Vitals to improve loading speed and performance.",
            ],
        },
        {
            title: "Off-Page SEO & Link Building",
            icon: <FaLink />,
            color: "from-purple-500 to-indigo-500",
            points: [
                `Built and managed ${count}+ high-quality backlinks through guest posting, social bookmarking, and directory submissions.`,
                "Secured backlinks from high Domain Authority (DA) websites with low Spam Score (SS) to maintain strong link profile health.",
                "Conducted comprehensive backlink audits and link gap analysis using SEO tools.",
            ],
        },
        {
            title: "Analytics & Performance Tracking",
            icon: <FaChartLine />,
            color: "from-emerald-500 to-green-500",
            points: [
                "Monitored performance using Google Analytics & Search Console.",
                "Analyzed traffic behavior and keyword ranking trends.",
                "Identified organic growth opportunities using performance data.",
            ],
        },
    ];

    return (
        <section id="skills" className="w-full px-[12%] py-24 scroll-mt-20">

            {/* Heading */}
            <h4 className="text-center text-lg font-Ovo mb-2" data-aos="fade-up">
                SEO Executive – Viral Mafia Agency
            </h4>

            <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-16" data-aos="fade-up">
                Professional Experience & Responsibilities
            </h2>

            {/* Main Layout */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                {/* LEFT SIDE (Tabs) */}
                <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">

                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 min-w-[220px] md:min-w-0

                                ${activeTab === index
                                    ? "bg-transparent text-gray-900 dark:text-white border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-[1.02]"
                                }`}
                        >
                            <div className={`p-2 rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                                {exp.icon}
                            </div>

                            <span className="text-sm font-medium">
                                {exp.title}
                            </span>
                        </button>
                    ))}

                </div>

                {/* RIGHT SIDE (Content) */}
                <div
                    key={activeTab}
                    className={`md:col-span-2 rounded-2xl p-8 shadow-md border
                    ${activeTab !== null
                            ? "border-2 border-green-600 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                            : "border border-gray-200 dark:border-white/20 bg-white dark:bg-darkHover/50"
                        }`}
                    data-aos="fade-up"
                >

                    {/* Title */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${experiences[activeTab].color} text-white text-xl`}>
                            {experiences[activeTab].icon}
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            {experiences[activeTab].title}
                        </h3>
                    </div>

                    {/* Points */}
                    <ul className="space-y-4 text-gray-700 dark:text-white/80">
                        {experiences[activeTab].points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-green-500 mt-[2px]">✔</span>
                                {point}
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </section>
    );
}