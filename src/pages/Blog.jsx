import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Blog.css";

const Blog = () => {
    const navigate = useNavigate();
    const [showBackBtn, setShowBackBtn] = useState(false);
    const [isDarkBg, setIsDarkBg] = useState(true);

    /* Fade-in Animation */
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("show");
            }, index * 200);
        });
    }, []);

    /* Scroll Detection for Back Button */
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShowBackBtn(true);
            } else {
                setShowBackBtn(false);
            }

            // Change icon color after scrolling past hero section
            if (window.scrollY > 300) {
                setIsDarkBg(false); // light section
            } else {
                setIsDarkBg(true); // hero (dark background)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="blog-wrapper">

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

            {/* ==================================================== */}


            {/* HERO SECTION */}
            <div className="blog-hero">
                <img
                    src="./assets/blog-banner.webp"
                    alt="SEO Specialist in Kerala Portfolio Blog"
                    className="blog-hero-img"
                />

                <div className="blog-hero-overlay fade-in">
                    <div className="hero-badge">
                        SEO • Strategy • Growth
                    </div>

                    <h1 className="hero-title text-2xl sm:text-2xl md:text-5xl lg:text-6xl leading-tight">
                        Helping Businesses Grow with
                        <span className="gradient-text"> Strategic SEO</span> in Kerala
                    </h1>

                    <p className="hero-subtitle text-base sm:text-lg md:text-xl mt-4">
                        Portfolio, Case Studies & Proven SEO Expertise
                    </p>

                    <div className="hero-underline"></div>
                </div>
            </div>

            {/* BLOG CONTENT */}
            <div className="blog-container px-[8%] py-16">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 leading-snug sm:leading-tight">
                    Latest SEO Insights & Strategies
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[
                        {
                            title: "Technical SEO Fundamentals",
                            desc: "Learn how site structure, crawlability, indexing, and Core Web Vitals impact your search rankings.",
                            img: "./assets/Blogs/Technical SEO Fundamentals.jpg"
                        },
                        {
                            title: "On-Page SEO Optimization",
                            desc: "Master title tags, meta descriptions, heading structure, and keyword placement for better visibility.",
                            img: "./assets/Blogs/On-Page SEO Optimization.jpg"
                        },
                        {
                            title: "Advanced Link Building Strategies",
                            desc: "Discover ethical backlink techniques that improve authority and long-term domain strength.",
                            img: "./assets/Blogs/Advanced Link Building Strategies.jpg"
                        },
                        {
                            title: "Keyword Research & Search Intent",
                            desc: "Understand how to find high-impact keywords aligned with user search behavior.",
                            img: "./assets/Blogs/Keyword Research & Search Intent.jpg"
                        },
                        {
                            title: "Local SEO & Google Business Profile",
                            desc: "Optimize your local presence and dominate Google Maps with structured GBP strategies.",
                            img: "./assets/Blogs/Local SEO & Google Business Profile.jpg"
                        },
                        {
                            title: "Content Marketing for SEO",
                            desc: "Create authority-driven blog content that ranks and converts organically.",
                            img: "./assets/Blogs/Content Marketing for SEO.jpg"
                        },
                        {
                            title: "Core Web Vitals Optimization",
                            desc: "Improve page speed, responsiveness, and visual stability for better rankings.",
                            img: "./assets/Blogs/Core Web Vitals Optimization.jpg"
                        },
                        {
                            title: "SEO Auditing Process",
                            desc: "Conduct full technical and content audits to uncover ranking opportunities.",
                            img: "./assets/Blogs/SEO Auditing Process.jpg"
                        },
                        {
                            title: "E-Commerce SEO Strategies",
                            desc: "Optimize product pages, categories, and structured data for higher conversions.",
                            img: "./assets/Blogs/E-Commerce SEO Strategies.avif"
                        },
                        {
                            title: "Schema Markup & Structured Data",
                            desc: "Enhance search visibility using rich snippets and structured data implementation.",
                            img: "./assets/Blogs/Schema Markup & Structured-Data.jpg"
                        },
                        {
                            title: "Mobile-First SEO",
                            desc: "Ensure your website performs flawlessly across all devices for ranking success.",
                            img: "./assets/Blogs/Mobile First SEO.webp"
                        },
                        {
                            title: "Analytics & Performance Tracking",
                            desc: "Measure traffic, conversions, and ranking improvements with SEO analytics tools.",
                            img: "./assets/Blogs/Analytics & Performance Tracking.jpg"
                        }
                    ].map((blog, index) => (

                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-3"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition duration-200 group-hover:blur-md group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 p-6 text-white transition-all duration-500">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition">
                                    {blog.title}
                                </h3>

                                <p className="text-sm text-white-100 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    {blog.desc}
                                </p>

                                <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-blue-700">
                                    Read Article →
                                </button>
                            </div>
                        </div>

                    ))}

                </div>

            </div>



            {/* FIXED SCROLL BACK BUTTON */}
            {showBackBtn && (
                <Link
                    to="/"
                    className={`hidden sm:flex fixed top-6 left-6 z-50
                                    group
                                     items-center justify-center
                                    w-12 h-12
                                    rounded-full
                                    bg-white/20
                                    backdrop-blur-2xl
                                    border border-black/30
                                    ${isDarkBg ? "text-white" : "text-black"}
                                    shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                                    hover:shadow-[0_8px_40px_rgba(59,130,246,0.35)]
                                    hover:scale-110
                                    active:scale-95
                                    transition-all duration-300`}
                >
                    <FaArrowLeft
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                </Link>
            )}

        </div>
    );
};

export default Blog;