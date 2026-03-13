import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

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
            img: "./assets/Blogs/Technical SEO Fundamentals.jpg",
        },
        {
            title: "On-Page SEO Optimization",
            desc: "Master title tags, meta descriptions, heading structure, and keyword placement for better visibility.",
            img: "./assets/Blogs/On-Page SEO Optimization.jpg",
        },
        {
            title: "Advanced Link Building Strategies",
            desc: "Discover ethical backlink techniques that improve authority and long-term domain strength.",
            img: "./assets/Blogs/Advanced Link Building Strategies.jpg",
        },
        {
            title: "Keyword Research & Search Intent",
            desc: "Understand how to find high-impact keywords aligned with user search behavior.",
            img: "./assets/Blogs/Keyword Research & Search Intent.jpg",
        },
        {
            title: "Local SEO & Google Business Profile",
            desc: "Optimize your local presence and dominate Google Maps with structured GBP strategies.",
            img: "./assets/Blogs/Local SEO & Google Business Profile.jpg",
        },
        {
            title: "Content Marketing for SEO",
            desc: "Create authority-driven blog content that ranks and converts organically.",
            img: "./assets/Blogs/Content Marketing for SEO.jpg",
        },
        {
            title: "Core Web Vitals Optimization",
            desc: "Improve page speed, responsiveness, and visual stability for better rankings.",
            img: "./assets/Blogs/Core Web Vitals Optimization.jpg",
        },
        {
            title: "SEO Auditing Process",
            desc: "Conduct full technical and content audits to uncover ranking opportunities.",
            img: "./assets/Blogs/SEO Auditing Process.jpg",
        },
        {
            title: "E-Commerce SEO Strategies",
            desc: "Optimize product pages, categories, and structured data for higher conversions.",
            img: "./assets/Blogs/E-Commerce SEO Strategies.avif",
        },
        {
            title: "Schema Markup & Structured Data",
            desc: "Enhance search visibility using rich snippets and structured data implementation.",
            img: "./assets/Blogs/Schema Markup & Structured-Data.jpg",
        },
        {
            title: "Mobile-First SEO",
            desc: "Ensure your website performs flawlessly across all devices for ranking success.",
            img: "./assets/Blogs/Mobile First SEO.webp",
        },
        {
            title: "Analytics & Performance Tracking",
            desc: "Measure traffic, conversions, and ranking improvements with SEO analytics tools.",
            img: "./assets/Blogs/Analytics & Performance Tracking.jpg",
        },
    ];

    return (
        <div className="bg-white text-gray-900 min-h-screen">

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
            <div className="blog-hero relative h-[70vh] flex items-center justify-center text-center overflow-hidden">

                {/* Image */}
                <img
                    src="./assets/blog-banner.webp"
                    alt="SEO Specialist in Kerala Portfolio Blog"
                    className="absolute w-full h-full object-cover"
                />

                {/* Black Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>

                {/* Content */}
                <div className="relative z-10 text-white px-6">


                    <h1 className="text-3xl md:text-6xl font-bold leading-tight">
                        Helping Businesses Grow with
                        <span className="text-blue-400"> Strategic SEO</span> in Kerala
                    </h1>

                    <p className="mt-4 text-lg text-gray-200">
                        Portfolio, Case Studies & Proven SEO Expertise
                    </p>

                </div>

            </div>

            {/* BLOG SECTION */}
            <div className="max-w-7xl mx-auto px-6 py-20">

                <h2
                    data-aos="fade-up"
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Latest SEO Insights & Strategies
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {blogs.map((blog, index) => (

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
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

                                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {blog.desc}
                                </p>

                                <button className="mt-5 text-blue-600 text-sm font-medium hover:text-blue-500 transition">
                                    Read Article →
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* BACK BUTTON */}
            {showBackBtn && (
                <Link
                    to="/"
                    className={`hidden sm:flex fixed top-6 left-6 z-50
          items-center justify-center
          w-12 h-12
          rounded-full
          bg-white
          border border-gray-300
          shadow-md
          ${isDarkBg ? "text-black" : "text-black"}
          hover:scale-110
          transition-all duration-300`}
                >
                    <FaArrowLeft size={16} />
                </Link>
            )}

        </div>
    );
};

export default Blog;