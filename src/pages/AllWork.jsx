import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Allwok() {

    const works = [
        {
            title: "Portfolio Website Development & SEO Optimization",
            description:
                "Designed and developed a personal portfolio website using React and optimized it for search engine visibility. Implemented technical SEO elements such as optimized meta tags, canonical URLs, structured data, and proper indexing setup. Verified crawling and indexing through Google Search Console and analyzed performance using PageSpeed Insights. This project demonstrates the integration of modern frontend development with practical SEO strategies.",
            images: [
                './assets/All-works/portfolio3.webp',
                './assets/All-works/portfolio2.webp',
                './assets/All-works/portfolio1.webp',
                './assets/All-works/portfolio4.webp',
            ],
            tools: ["React", "Google Search Console", "PageSpeed Insights", "Technical SEO"]
        },


    ];

    const [expanded, setExpanded] = useState(null);

    return (
        <div className="w-full min-h-screen px-[10%] py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">



            {/* ============== SEO Metadata ================ */}

            <Helmet>
                <title>SEO Portfolio & Case Studies | Calicut SEO Expert – Aswanth P</title>

                <meta
                    name="description"
                    content="Explore real SEO case studies by Aswanth P, Calicut SEO Expert. See ranking improvements, traffic growth, and proven strategies that deliver results."
                />

                <meta name="robots" content="index, follow" />

                <link
                    rel="canonical"
                    href="https://aswanth-portfolio-eta.vercel.app/all-work"
                />

                {/* Open Graph */}
                <meta property="og:title" content="SEO Portfolio & Case Studies | Calicut SEO Expert – Aswanth P" />
                <meta property="og:site_name" content="Aswanth Portfolio Website" />
                <meta
                    property="og:description"
                    content="Explore real SEO case studies by Aswanth P, Calicut SEO Expert. See ranking improvements, traffic growth, and proven strategies that deliver results."
                />
                <meta
                    property="og:image"
                    content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png"
                />
                <meta
                    property="og:image:alt"
                    content="Aswanth SEO Portfolio All Work Preview"
                />
                <meta
                    property="og:url"
                    content="https://aswanth-portfolio-eta.vercel.app/all-work"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO Portfolio & Case Studies | Calicut SEO Expert – Aswanth P" />
                <meta
                    name="twitter:description"
                    content="Explore real SEO case studies by Aswanth P, Calicut SEO Expert. See ranking improvements, traffic growth, and proven strategies that deliver results."
                />
                <meta
                    name="twitter:image"
                    content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png"
                />
                <meta name="twitter:image:alt" content="Aswanth SEO Portfolio All Work Preview" />


                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "SEO Portfolio & Case Studies | Calicut SEO Expert – Aswanth P",
        "url": "https://aswanth-portfolio-eta.vercel.app/all-work",
        "description": "Explore real SEO case studies by Aswanth P, Calicut SEO Expert. See ranking improvements, traffic growth, and proven strategies that deliver results."
      }
    `}
                </script>
            </Helmet>



            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">All My Works</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Explore detailed SEO case studies, technical audits, and website
                    optimization projects demonstrating practical SEO experience.
                </p>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {works.map((work, index) => (
                    <div
                        key={index}
                        className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
                    >

                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4">

                            {work.images.map((img, i) => {
                                const previewPosition = index % 3 === 2 ? "right-full mr-4" : "left-full ml-4";

                                return (
                                    <div key={i} className="relative group">

                                        {/* Small Image */}
                                        <img
                                            src={img}
                                            alt={work.title}
                                            className="
                                                w-full h-28 object-cover rounded-lg cursor-pointer
                                                border border-gray-900 dark:border-gray-700
                                                shadow-sm
                                                group-hover:scale-105
                                                group-hover:border-black dark:group-hover:border-white
                                                group-hover:shadow-lg
                                                transition-all duration-300
                                            "
                                        />

                                        {/* Glass Overlay */}
                                        <div
                                            className="
                                                absolute inset-0
                                                bg-gradient-to-br
                                                from-white/40 via-white/10 to-transparent
                                                backdrop-blur-sm
                                                rounded-lg
                                                transition duration-300
                                                group-hover:opacity-0

                                                flex items-center justify-center
                                            "
                                        >

                                            {/* Eye Icon */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black opacity-80"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5
                                                    c4.477 0 8.268 2.943 9.542 7
                                                    -1.274 4.057-5.065 7-9.542 7
                                                    -4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>

                                        </div>



                                        {/* Preview */}
                                        <div
                                            className={`
                                                    absolute ${previewPosition}
                                                    top-1/2 -translate-y-1/2
                                                    w-[400px] h-[320px]

                                                    opacity-0 translate-x-6
                                                    group-hover:opacity-100 group-hover:translate-x-0

                                                    transition-all duration-300 ease-out
                                                    pointer-events-none
                                                    z-50
                                                    hidden md:block
                                                    `}
                                        >

                                            <div className="
                                                    w-full h-full
                                                    flex items-center justify-center
                                                    bg-white dark:bg-gray-900
                                                    rounded-xl
                                                    border-4 border-black dark:border-white
                                                    shadow-2xl
                                                    p-2
                                                    ">

                                                <img
                                                    src={img}
                                                    alt={work.title}
                                                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300"
                                                />

                                            </div>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-2">
                            {work.title}
                        </h3>

                        {/* Description */}
                        <p
                            className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed ${expanded === index ? "" : "line-clamp-2"
                                }`}
                        >
                            {work.description}
                        </p>

                        {/* Show More / Less */}
                        {expanded === index ? (
                            <button
                                onClick={() => setExpanded(null)}
                                className="text-blue-600 text-sm mt-1 hover:underline"
                            >
                                Show less
                            </button>
                        ) : (
                            <button
                                onClick={() => setExpanded(index)}
                                className="text-blue-600 text-sm mt-1 hover:underline"
                            >
                                Show more
                            </button>
                        )}

                        {/* Tools */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {work.tools.map((tool, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}

            </div>

            {/* Back Button */}
            <div className="text-center mt-12">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
                >
                    ← Back to Home
                </Link>
            </div>

        </div>
    );
}

export default Allwok;