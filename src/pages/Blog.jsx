import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Blog = () => {
    const [showBackBtn, setShowBackBtn] = useState(false);
    const [isDarkBg, setIsDarkBg] = useState(true);

    /* AOS Animation */
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    /* Scroll Detection */
    useEffect(() => {
        const handleScroll = () => {
            setShowBackBtn(window.scrollY > 10);

            if (window.scrollY > 300) {
                setIsDarkBg(false);
            } else {
                setIsDarkBg(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const blogs = [
        {
            title: "Technical SEO Fundamentals",
            desc: "Learn how site structure, crawlability, indexing, and Core Web Vitals impact your search rankings.",
            img: "./assets/Blogs/Technical SEO Fundamentals.webp",
            link: "https://en.wikipedia.org/wiki/Search_engine_optimization"
        },
        {
            title: "On-Page SEO Optimization",
            desc: "Master title tags, meta descriptions, heading structure, and keyword placement for better visibility.",
            img: "./assets/Blogs/On-Page SEO Optimization.webp",
            link: "https://en.wikipedia.org/wiki/Search_engine_optimization"
        },
        {
            title: "Advanced Link Building Strategies",
            desc: "Discover ethical backlink techniques that improve authority and long-term domain strength.",
            img: "./assets/Blogs/Advanced Link Building Strategies.webp",
            link: "https://en.wikipedia.org/wiki/Link_building"
        },
        {
            title: "Keyword Research & Search Intent",
            desc: "Understand how to find high-impact keywords aligned with user search behavior.",
            img: "./assets/Blogs/Keyword Research & Search Intent.webp",
            link: "https://en.wikipedia.org/wiki/Keyword_research"
        },
        {
            title: "Local SEO & Google Business Profile",
            desc: "Optimize your local presence and dominate Google Maps with structured GBP strategies.",
            img: "./assets/Blogs/Local SEO & Google Business Profile.webp",
            link: "https://en.wikipedia.org/wiki/Local_search_engine_optimisation"
        },
        {
            title: "Content Marketing for SEO",
            desc: "Create authority-driven blog content that ranks and converts organically.",
            img: "./assets/Blogs/Content Marketing for SEO.webp",
            link: "https://en.wikipedia.org/wiki/Content_marketing"
        },
        {
            title: "Core Web Vitals Optimization",
            desc: "Improve page speed, responsiveness, and visual stability for better rankings.",
            img: "./assets/Blogs/Core Web Vitals Optimization.webp",
            link: "https://en.wikipedia.org/wiki/Google_PageSpeed_Tools"
        },
        {
            title: "SEO Auditing Process",
            desc: "Conduct full technical and content audits to uncover ranking opportunities.",
            img: "./assets/Blogs/SEO Auditing Process.webp",
            link: "https://en.wikipedia.org/wiki/Website_audit"
        },
        {
            title: "E-Commerce SEO Strategies",
            desc: "Optimize product pages, categories, and structured data for higher conversions.",
            img: "./assets/Blogs/E-Commerce SEO Strategies.webp",
            link: "https://en.wikipedia.org/wiki/E-commerce"
        },
        {
            title: "Schema Markup & Structured Data",
            desc: "Enhance search visibility using rich snippets and structured data implementation.",
            img: "./assets/Blogs/Schema Markup & Structured-Data.webp",
            link: "https://en.wikipedia.org/wiki/Schema.org"
        },
        {
            title: "Mobile-First SEO",
            desc: "Ensure your website performs flawlessly across all devices for ranking success.",
            img: "./assets/Blogs/Mobile First SEO.webp",
            link: "https://en.wikipedia.org/wiki/Responsive_web_design"
        },
        {
            title: "Analytics & Performance Tracking",
            desc: "Measure traffic, conversions, and ranking improvements with SEO analytics tools.",
            img: "./assets/Blogs/Analytics & Performance Tracking.webp",
            link: "https://en.wikipedia.org/wiki/Analytics"
        },
    ];

    return (
        <div className="relative overflow-hidden min-h-screen text-gray-900 dark:text-gray-100">

            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black"></div>

            {/* Soft Glow Effects */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>

            {/* ============ Meta Datas ============ */}
            <Helmet>

                {/* Title & Description */}
                <title>SEO Blog | SEO Tips & Strategies by Aswanth P</title>
                <meta
                    name="description"
                    content="Explore SEO tips, strategies, and digital marketing insights by Aswanth P, SEO Expert in Calicut. Learn how to rank higher and grow your business online."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aswanth-portfolio-eta.vercel.app/blog" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="SEO Blog | SEO Tips & Strategies by Aswanth P"
                />
                <meta
                    property="og:description"
                    content="Explore SEO tips, strategies, and digital marketing insights by Aswanth P, SEO Expert in Calicut. Learn how to rank higher and grow your business online."
                />
                <meta property="og:url" content="https://aswanth-portfolio-eta.vercel.app/blog" />
                <meta
                    property="og:image"
                    content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png"
                />
                <meta property="og:image:alt" content="SEO Specialist in Calicut Portfolio Blog" />
                <meta property="og:site_name" content="Aswanth Portfolio" />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="SEO Blog | SEO Tips & Strategies by Aswanth P"
                />
                <meta
                    name="twitter:description"
                    content="Explore SEO tips, strategies, and digital marketing insights by Aswanth P, SEO Expert in Calicut. Learn how to rank higher and grow your business online."
                />
                <meta
                    name="twitter:image"
                    content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png"
                />
            </Helmet>


            {/* HERO */}
            <div className="h-[55vh] flex items-center justify-center text-center px-6 pt-24">

                <div data-aos="fade-up" className="max-w-3xl">

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                        SEO Insights & Digital Marketing Strategies
                    </h1>

                    <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg">
                        Explore practical SEO tips, keyword research strategies, and digital
                        marketing insights to improve search rankings and grow your online
                        presence.
                    </p>

                </div>

            </div>

            {/* BLOG SECTION */}
            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {blogs.map((blog, index) => (

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md     hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        >

                            {/* IMAGE */}
                            <div className="h-60 overflow-hidden">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">

                                <h3 className="text-xl font-semibold mb-3 transition">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {blog.desc}
                                </p>

                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-block text-blue-600 text-sm font-medium hover:text-blue-500 transition"
                                >
                                    Read Article →
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>



            {/* ============ SEO CTA / INTERNAL LINK SECTION ============ */}
            <div className="bg-gray-900 text-white pt-12 pb-8">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h3 className="text-xl font-semibold mb-3">
                        Let’s Improve Your Search Rankings
                    </h3>

                    <p className="text-sm text-gray-400 mb-5 max-w-xl mx-auto">
                        Get expert SEO solutions focused on traffic growth, keyword rankings, and performance optimization.
                    </p>

                    <Link
                        to="/services"
                        className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/20 transition"
                    >
                        Explore Services
                    </Link>

                    <p className="text-xs text-gray-500 mt-6">
                        © 2026 Your Name. All rights reserved.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Blog;