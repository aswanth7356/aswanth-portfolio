import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Allwok() {

    const [currentSlide, setCurrentSlide] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

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
                './assets/All-works/home.webp',
                './assets/All-works/code.webp',
            ],
        },
        {
            title: "On-Page SEO Optimization & Content Structure Improvement",
            description:
                "Conducted a complete on-page SEO optimization to improve search engine visibility. Implemented optimized title tags, meta descriptions, header hierarchy (H1–H3), image alt attributes, and internal linking strategies. Improved page structure, keyword placement, and content readability for better ranking potential. Also performed technical checks such as sitemap optimization, robots.txt validation, canonical tag implementation, and page speed improvements using Google PageSpeed Insights.",
            images: [
                './assets/All-works/on page.webp',
                './assets/All-works/meta title.webp',
            ],
        },
        {
            title: "Off-Page SEO Strategy & High-Quality Backlink Building",
            description:
                "Executed off-page SEO strategies to increase domain authority and search engine rankings. Built high-quality backlinks through guest blogging, social bookmarking, and directory submissions on relevant platforms. Focused on acquiring do-follow links from authoritative websites to strengthen website credibility. Monitored backlink performance using SEO tools and ensured link quality, anchor text optimization, and proper indexing to improve overall organic visibility.",
            images: [
                './assets/All-works/off page.webp',
                './assets/All-works/backlink.webp',
            ],
        },
        {
            title: "Technical SEO Audit & Website Performance Optimization",
            description:
                "Conducted a detailed technical SEO audit to identify issues affecting website crawlability, indexing, and performance. Fixed technical problems such as broken links, duplicate pages, improper redirects, and missing canonical tags. Optimized Core Web Vitals and improved page loading speed using Google PageSpeed Insights and performance optimization techniques. Implemented structured data markup, XML sitemap optimization, and robots.txt configuration to enhance search engine crawling and indexing efficiency.",
            images: [
                './assets/All-works/technical seo.webp',
                './assets/All-works/page speed insight2.webp',
                './assets/All-works/page speed insight.webp',
                './assets/All-works/screamingfrog.webp',
                './assets/All-works/gsc2.webp',
            ],
        },

        {
            title: "Google AI Search Visibility – Personal Brand Result",
            description:
                "Achieved visibility in Google AI-powered search results for the query 'Aswanth SEO'. This demonstrates strong personal branding, effective SEO optimization, and authority building. The result highlights how search engines recognize structured content, relevance, and credibility. This milestone reflects successful implementation of SEO strategies including on-page optimization, content structuring, and search engine indexing.",
            images: [
                './assets/All-works/google-ai-result.webp'
            ],
        },

        {
            title: "Local SEO Optimization & Google Business Profile Management",
            description:
                "Implemented Local SEO strategies to improve business visibility in location-based searches. Optimized Google Business Profile with accurate business information, service details, images, and category targeting. Focused on local keyword optimization, citation building, and consistent NAP (Name, Address, Phone) details across directories. Analyzed local search performance and competitor listings to improve presence in Google Map results and increase local search visibility.",
            images: [
                '/assets/All-works/gmb.webp'
            ],
        },

        {
            title: "Keyword Research & Search Intent Analysis",
            description:
                "Performed in-depth keyword research to identify high search volume and low competition keywords relevant to the target audience. Analyzed competitor websites to understand their keyword strategy, backlink profile, and content structure. Used professional SEO tools to identify ranking opportunities and develop a content strategy to improve organic visibility and search rankings.",
            images: [
                './assets/All-works/keyword.webp',
            ],
        },
        {
            title: "SEO Performance Monitoring with Google Search Console",
            description:
                "Monitored website search performance using Google Search Console for Viral Mafia Agency to analyze impressions, clicks, and keyword rankings. Reviewed performance reports to understand which pages and search queries were generating organic traffic. Identified indexing issues and ensured proper sitemap submission to improve search engine visibility. Analyzed page-level performance and search query data to identify opportunities for improving click-through rates (CTR) and overall organic reach. These insights helped in understanding user search behavior and supporting ongoing SEO optimization efforts.",
            images: [
                './assets/All-works/gsc.webp',
            ],
        },
        {
            title: "User Behavior Analysis & Traffic Insights using GA4",
            description:
                "Analyzed website traffic data using Google Analytics for Viral Mafia Agency to understand user behavior, traffic sources, and engagement metrics. Reviewed reports such as user acquisition, traffic channels, and page performance to identify how visitors were reaching the website. Interpreted important metrics including sessions, users, bounce rate, and average engagement time to evaluate website performance. These insights helped in understanding audience behavior and supporting data-driven SEO and digital marketing strategies.",
            images: [
                './assets/All-works/ga.webp',
            ],
        },
        {
            title: "SEO Competitor Analysis using Semrush",
            description:
                "Conducted detailed SEO competitor analysis using Semrush to understand the competitive landscape and identify ranking opportunities. Analyzed competitor websites to evaluate their top-performing keywords, backlink profiles, and organic search traffic. Used keyword gap and domain comparison tools to discover valuable keyword opportunities and understand competitor ranking strategies. These insights helped in identifying areas for SEO improvement and developing more effective search engine optimization strategies.",
            images: [
                './assets/All-works/comb1.webp',
                './assets/All-works/comp2.webp',
            ],
        },
        {
            title: "Google Tag Manager Implementation & Event Tracking",
            description:
                "Implemented Google Tag Manager (GTM) on a portfolio website to manage and deploy tracking codes efficiently without modifying source code. Integrated GTM with Google Analytics (GA4) and Google Search Console to enable accurate tracking and data analysis. Configured custom event tracking such as button clicks, page views, and user interactions to understand visitor behavior. Verified tag firing using GTM Preview Mode and ensured proper data flow into GA4 reports. This implementation improved tracking accuracy and provided deeper insights into user engagement and website performance.",
            images: [
                './assets/All-works/gtm1.webp',
                './assets/All-works/gtm2.webp'
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
                <h1 className="text-5xl font-bold mb-4">SEO Projects & Practical Case Studies</h1>
                <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Discover hands-on SEO work including audits, on-page and off-page optimization, keyword research, and performance tracking—focused on improving rankings, traffic, and search visibility.
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
                                    onClick={() => {
                                        console.log("Image clicked:", work.images[currentSlide[index] || 0]);
                                        setSelectedImage(work.images[currentSlide[index] || 0]);
                                    }}
                                    className="
                                    w-full h-full
                                    object-cover
                                    scale-110
                                    cursor-pointer
                                    group-hover:scale-100
                                    group-hover:brightness-105
                                    transition-all duration-700 ease-out"
                                />


                                {/* Hover Overlay */}
                                {/* <div className="
                                    absolute inset-0
                                    opacity-0
                                    group-hover:opacity-100
                                    transition duration-500">
                                </div> */}

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


            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* ✅ THIS is where stopPropagation should go */}
                    <div
                        className="relative max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white text-3xl cursor-pointer"
                        >
                            ✕
                        </button>

                        {/* Full Image */}
                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}

        </div>
    );
}

export default Allwok;