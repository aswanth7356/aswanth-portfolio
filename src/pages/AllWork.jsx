import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Allwok() {

    const works = [
        {
            title: "Portfolio Website SEO Optimization & Performance Analysis",
            description:
                "Performed a complete SEO setup for my portfolio website including crawling, indexing verification using Google Search Console, and performance testing using PageSpeed Insights. The website was successfully indexed and optimized for better technical performance and search visibility. This case study highlights technical SEO implementation, indexing verification, and performance analysis.",
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
                "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
            ],
            tools: ["Google Search Console", "PageSpeed Insights", "Technical SEO"]
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

                            {work.images.map((img, i) => (
                                <div key={i} className="relative group">

                                    {/* Small Image */}
                                    <img
                                        src={img}
                                        alt={work.title}
                                        className="w-full h-28 object-cover rounded-lg cursor-pointer"
                                    />

                                    {/* Hover Zoom Preview */}
                                    <img
                                        src={img}
                                        alt={work.title}
                                        className="
                                        absolute z-50 w-80 rounded-xl shadow-2xl
                                        top-[-30px] left-1/2 -translate-x-1/2
                                        opacity-0 scale-90
                                        transition-all duration-500 ease-out
                                        group-hover:opacity-100 group-hover:scale-110
                                        "
                                    />

                                </div>
                            ))}

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