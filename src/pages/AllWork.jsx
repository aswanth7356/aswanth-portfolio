import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Allwok() {
    const [hoveredImage, setHoveredImage] = useState({});
    const [selectedImage, setSelectedImage] = useState({});

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out-cubic",
        });
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
            <div className="text-center mb-12" data-aos="fade-up">
                <h1 className="text-5xl font-bold mb-4">All My Works</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Explore detailed SEO case studies, technical audits, and website
                    optimization projects demonstrating practical SEO experience.
                </p>
            </div>

            {/* Back Button */}
            <div className="text-center mt-12 mb-12" data-aos="fade-up" data-aos-delay="100">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
                >
                    ← Back to Home
                </Link>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

                {works.map((work, index) => {

                    const coverImage =
                        hoveredImage[index] ||
                        selectedImage[index] ||
                        work.images[0];


                    return (

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="
                                group
                                rounded-2xl
                                shadow-lg
                                transition-all duration-300
                                overflow-hidden
                                border border-gray-300
                                hover:shadow-2xl
                                hover:scale-[1.02]
                                hover:bg-gradient-to-r
                                hover:from-orange-200
                                hover:to-pink-200
                                p-[1px]
                            "
                        >

                            {/* ===== Cover Image ===== */}

                            <div className="relative w-full h-64">

                                <img
                                    src={coverImage}
                                    alt={work.title}
                                    className="
                                    w-full h-full
                                    object-cover
                                    transition-transform duration-500
                                    hover:scale-105
                                    "
                                />

                            </div>



                            {/* ===== Small Images (Under Cover) ===== */}

                            <div className="flex justify-center gap-4 px-6 mt-4">

                                {work.images.slice(0, 4).map((img, i) => {

                                    const isSelected = (selectedImage[index] || work.images[0]) === img;

                                    return (

                                        <div
                                            key={i}
                                            className="relative group/thumb cursor-pointer"
                                            onMouseEnter={() =>
                                                setHoveredImage(prev => ({ ...prev, [index]: img }))
                                            }
                                            onMouseLeave={() =>
                                                setHoveredImage(prev => ({ ...prev, [index]: null }))
                                            }
                                            onClick={() =>
                                                setSelectedImage(prev => ({ ...prev, [index]: img }))
                                            }
                                        >

                                            <img
                                                src={img}
                                                alt={work.title}
                                                className={`
                                                    w-20 h-20
                                                    object-cover
                                                    p-1
                                                    bg-white
                                                    rounded-lg
                                                    shadow-md
                                                    transition-all duration-300
                                                    group-hover:scale-110
                                                    group-hover:rotate-0
                                                    ${isSelected ? "ring-2 ring-sky-500 scale-105" : "rotate-3"}
                                                `}
                                            />

                                            {/* Color Gradient + Blur Overlay */}
                                            {!isSelected && (
                                                <div
                                                    className="
                                                    absolute inset-0
                                                    rounded-xl
                                                    bg-gradient-to-tr
                                                    from-black/30
                                                    via-white/10
                                                    to-orange-400/30
                                                    backdrop-blur-[2px]
                                                    brightness-90
                                                    opacity-80
                                                    group-hover/thumb:opacity-0 
                                                    transition-all duration-300
                                                    "
                                                />
                                            )}

                                            {/* Selected Green Dot */}
                                            {isSelected && (
                                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-sky-500 rounded-full animate-pulse border-2 border-white shadow-md"></div>
                                            )}

                                        </div>

                                    );

                                })}

                            </div>


                            {/* ===== Card Content ===== */}

                            <div className="p-6 pt-6">

                                {/* Title */}

                                <h3 className="text-xl font-semibold mb-2">
                                    {work.title}
                                </h3>


                                {/* Description */}

                                <p
                                    className={`
                                        text-gray-600 dark:text-gray-300
                                        text-sm leading-relaxed
                                        transition-colors duration-300
                                        group-hover:text-black
                                        ${expanded === index ? "" : "line-clamp-2"}
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