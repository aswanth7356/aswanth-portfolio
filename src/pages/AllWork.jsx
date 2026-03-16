import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Allwok() {

    const [currentSlide, setCurrentSlide] = useState({});

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out-cubic",
        });;
    }, []);

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
        },

    ];

    const [expanded, setExpanded] = useState(null);

    return (
        <div className="relative overflow-hidden w-full min-h-screen px-[10%] pt-32 pb-16 text-gray-900 dark:text-gray-100">

            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black"></div>

            {/* Soft Glow Effects */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>

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
            <div className="text-center mb-12" data-aos="fade-up">
                <h1 className="text-5xl font-bold mb-4">All My Works</h1>
                <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Explore detailed SEO case studies, technical audits, and website
                    optimization projects demonstrating practical SEO experience.
                </p>
            </div>


            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-12">

                {works.map((work, index) => {

                    return (

                        // Card 

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="
                            group
                            rounded-2xl
                            overflow-hidden
                            border border-gray-200 dark:border-gray-700
                            bg-white dark:bg-gray-800
                            shadow-md
                            transition-transform duration-300 ease-out
                            hover:scale-110
                            hover:-translate-y-2
                            hover:shadow-2xl
                            "
                        >

                            {/* ===== Cover Image ===== */}

                            <div className="relative w-full h-64 overflow-hidden">

                                {/* Carousel Image */}
                                <img
                                    src={work.images[currentSlide[index] || 0]}
                                    alt={work.title}
                                    loading="lazy"
                                    className="
                                    w-full h-full
                                    object-cover
                                    transition-all duration-500"
                                />

                                {/* Hover Overlay */}
                                <div className="
                                    absolute inset-0
                                    opacity-0
                                    group-hover:opacity-100
                                    transition duration-500">
                                </div>

                                {/* Carousel Dots */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">

                                    {work.images.map((_, i) => {

                                        const active = (currentSlide[index] || 0) === i;

                                        return (
                                            <button
                                                key={i}
                                                onClick={() =>
                                                    setCurrentSlide(prev => ({ ...prev, [index]: i }))
                                                }
                                                className={`
                                                        h-2.5 rounded-full transition-all duration-300
                                                        ${active
                                                        ? "w-6 bg-orange-500 shadow-lg shadow-orange-500/40 animate-pulse"
                                                        : "w-2.5 bg-gray-300 hover:bg-orange-400"}
                                                `}
                                            />
                                        );

                                    })}

                                </div>

                            </div>



                            {/* ===== Card Content ===== */}

                            <div className="p-6 pt-6">

                                {/* Title */}

                                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">
                                    {work.title}
                                </h3>


                                {/* Description */}

                                <p
                                    className={`
                                        text-gray-600 dark:text-gray-300
                                        text-sm leading-7
                                        transition-colors duration-300
                                        ${expanded === index ? "" : "line-clamp-3"}
                                    `}
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


                            </div>

                        </div>

                    );

                })}

            </div>

        </div>
    );
}

export default Allwok;