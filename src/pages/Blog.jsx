import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Blog.css";

const Blog = () => {
    const navigate = useNavigate();
    const [showBackBtn, setShowBackBtn] = useState(false);

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
            if (window.scrollY > 200) {
                setShowBackBtn(true);
            } else {
                setShowBackBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="blog-wrapper">

            {/* ============ Meta Datas ============ */}
            <Helmet>
                {/* Basic Meta */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Title & Description */}
                <title>Freelance SEO Specialist in Calicut | Case Studies – Aswanth P</title>
                <meta
                    name="description"
                    content="Freelance SEO specialist in Calicut sharing case studies and proven strategies to boost rankings, traffic, and online growth – Aswanth P."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aswanth-portfolio-eta.vercel.app/blog" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Freelance SEO Specialist in Calicut | Case Studies – Aswanth P"
                />
                <meta
                    property="og:description"
                    content="Freelance SEO specialist in Calicut sharing case studies and proven strategies to boost rankings, traffic, and online growth – Aswanth P."
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
                    content="Freelance SEO Specialist in Calicut | Case Studies – Aswanth P"
                />
                <meta
                    name="twitter:description"
                    content="Freelance SEO specialist in Calicut sharing case studies and proven strategies to boost rankings, traffic, and online growth – Aswanth P."
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

                    <h1 className="hero-title">
                        Helping Businesses Grow with
                        <span className="gradient-text"> Strategic SEO</span> in Kerala
                    </h1>

                    <p className="hero-subtitle">
                        Portfolio, Case Studies & Proven SEO Expertise
                    </p>

                    <div className="hero-underline"></div>
                </div>
            </div>

            {/* BLOG CONTENT */}
            <div className="blog-container">
                <article className="blog-article">

                    <p className="intro fade-in">
                        As an{" "}
                        <span className="highlight">
                            SEO specialist in Kerala
                        </span>
                        , my portfolio website reflects strategic execution, measurable
                        improvements, and consistent organic growth. In today’s competitive
                        digital environment, businesses require more than surface-level
                        optimization — they need technical precision, structured keyword
                        research, and authority-driven content strategies.
                    </p>

                    <h2 className="fade-in">
                        Showcasing My SEO Expertise and Real Results
                    </h2>
                    <p className="fade-in">
                        Through my portfolio website, I present detailed case studies
                        highlighting keyword ranking improvements, traffic growth, and
                        on-page SEO enhancements. As a{" "}
                        <span className="highlight">link building specialist</span>, I focus
                        on ethical backlink acquisition strategies that improve domain
                        authority and search visibility. Every project reflects structured
                        planning and long-term growth rather than short-term tactics.
                    </p>

                    <h2 className="fade-in">
                        Building Authority as an SEO Expert in Kerala
                    </h2>
                    <p className="fade-in">
                        Businesses searching for the best SEO expert evaluate
                        experience, transparency, and results. My approach combines
                        technical SEO, content optimization, analytics tracking, and
                        performance monitoring to create sustainable ranking improvements.
                        My portfolio demonstrates not just what I do, but how I achieve
                        measurable business impact.
                    </p>

                    <h2 className="fade-in">Conclusion</h2>
                    <p className="fade-in">
                        My portfolio represents my journey as an{" "}
                        <span className="highlight">SEO specialist</span> committed to
                        delivering long-term digital growth. By continuously refining
                        strategies and focusing on data-driven decisions, I aim to help
                        businesses in Kerala and beyond achieve consistent organic success.
                    </p>

                </article>
            </div>

            {/* CENTERED BUTTON */}
            {/* <div className="top-nav fade-in">
                <Link to="/" className="back-btn">
                    ← Back to Home
                </Link>
            </div> */}


            {/* FIXED SCROLL BACK BUTTON */}
            {showBackBtn && (
                <button
                    onClick={() => navigate(-1)}
                    className="fixed top-6 left-6 z-50
                        w-12 h-12 rounded-full
                        bg-gray-200/80 dark:bg-white/10
                        backdrop-blur-md
                        border-2 border-gray-500 dark:border-blue-400
                        shadow-lg dark:shadow-none
                        flex items-center justify-center
                        hover:scale-110
                        hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]
                        transition-all duration-300"
                >
                    <FaArrowLeft size={18} className="text-blue-600 dark:text-blue-400" />
                </button>
            )}

        </div>
    );
};

export default Blog;