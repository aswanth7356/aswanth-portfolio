import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("show");
            }, index * 200);
        });
    }, []);

    return (
        <div className="blog-wrapper">

            {/* ============ Meta Datas ============ */}
            <Helmet>

                {/* Basic Meta */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>
                    Freelance SEO Specialist in Kerala | Aswanth’s Portfolio & Case Studies
                </title>

                <meta
                    name="description"
                    content="Discover how I work as a freelance SEO specialist in Kerala. Explore real SEO case studies, technical strategies, link building methods, and proven organic growth techniques."
                />

                <meta name="robots" content="index, follow" />

                <link
                    rel="canonical"
                    href="https://aswanth-portfolio-eta.vercel.app/blog/seo-specialist-kerala-portfolio-website"
                />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="Freelance SEO Specialist in Kerala | Aswanth’s Portfolio & Case Studies"
                />
                <meta
                    property="og:description"
                    content="Explore real SEO case studies, technical optimization strategies, and proven organic growth methods."
                />
                <meta
                    property="og:url"
                    content="https://aswanth-portfolio-eta.vercel.app/blog/seo-specialist-kerala-portfolio-website"
                />
                <meta
                    property="og:image"
                    content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png"
                />
                <meta
                    property="og:image:alt"
                    content="SEO Specialist in Kerala Portfolio Blog"
                />
                <meta property="og:site_name" content="Aswanth Portfolio" />
                <meta property="og:locale" content="en_IN" />

                {/* Article OG Extra */}
                <meta property="article:author" content="Aswanth P" />
                <meta property="article:published_time" content="2026-02-21" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Freelance SEO Specialist in Kerala | Portfolio & Case Studies"
                />
                <meta
                    name="twitter:description"
                    content="SEO portfolio showcasing technical expertise, case studies and organic growth strategies."
                />
                <meta
                    name="twitter:image"
                    content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png"
                />

                {/* Article Schema */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Freelance SEO Specialist in Kerala | Aswanth’s Portfolio & Case Studies",
      "description": "Discover how I work as a freelance SEO specialist in Kerala with proven strategies and measurable results.",
      "author": {
        "@type": "Person",
        "name": "Aswanth P"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Aswanth Portfolio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png"
        }
      },
      "datePublished": "2026-02-21",
      "dateModified": "2026-02-21",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://aswanth-portfolio-eta.vercel.app/blog/seo-specialist-kerala-portfolio-website"
      },
      "image": "https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png",
      "inLanguage": "en-IN"
    }
    `}
                </script>

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aswanth-portfolio-eta.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://aswanth-portfolio-eta.vercel.app/blog/seo-specialist-kerala-portfolio-website"
        }
      ]
    }
    `}
                </script>

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


            {/* CENTERED BUTTON */}
            <div className="top-nav fade-in">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ← Back to Previous Page
                </button>
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
                        Through my{" "}
                        portfolio website, I present
                        detailed case studies highlighting keyword ranking improvements,
                        traffic growth, and on-page SEO enhancements. As a{" "}
                        <span className="highlight">link building specialist</span>, I focus
                        on ethical backlink acquisition strategies that improve domain
                        authority and search visibility. Every project reflects structured
                        planning and long-term growth rather than short-term tactics.
                    </p>

                    <h2 className="fade-in">
                        Building Authority as an SEO Expert in Kerala
                    </h2>
                    <p className="fade-in">
                        Businesses searching for the{" "}
                        best SEO expert evaluate
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

        </div>
    );
};

export default Blog;