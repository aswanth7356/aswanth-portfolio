import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const AllServices = () => {
    return (
        <>

            {/* ========== Meta data ========== */}

            <Helmet>
                {/* ===== Title & Description ===== */}
                <title>SEO Services in Calicut | Freelance SEO Specialist – Aswanth P</title>
                <meta
                    name="description"
                    content="Hire a freelance SEO specialist in Calicut. Aswanth P provides professional SEO services including on-page SEO, technical SEO, local SEO, and link building to boost rankings and grow your business."
                />
                <link
                    rel="canonical"
                    href="https://aswanth-portfolio-eta.vercel.app/services"
                />
                <meta name="robots" content="index, follow" />

                {/* ===== Open Graph ===== */}
                <meta property="og:title" content="SEO Services in Calicut | Freelance SEO Specialist – Aswanth P" />
                <meta property="og:description" content="Hire a freelance SEO specialist in Calicut. Aswanth P offers expert SEO services including on-page SEO, technical SEO, local SEO, and link building to improve rankings." />
                <meta property="og:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />
                <meta property="og:image:alt" content="Aswanth P SEO Services Preview" />
                <meta property="og:url" content="https://aswanth-portfolio-eta.vercel.app/services" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Aswanth Portfolio" />
                <meta property="og:locale" content="en_IN" />

                {/* ===== Twitter Card ===== */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO Services in Calicut | Freelance SEO Specialist – Aswanth P" />
                <meta name="twitter:description" content="Hire a freelance SEO specialist in Calicut. Aswanth P provides expert SEO services including on-page SEO, technical SEO, local SEO, and link building to boost rankings." />
                <meta name="twitter:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />

                {/* ===== WebPage Schema ===== */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SEO Services in Calicut | Freelance SEO Specialist – Aswanth P",
      "url": "https://aswanth-portfolio-eta.vercel.app/services",
      "description": "Hire a freelance SEO specialist in Calicut. Aswanth P provides professional SEO services including on-page SEO, technical SEO, local SEO, and link building to boost rankings and grow your business."
    }
    `}
                </script>

                {/* ===== Person Schema ===== */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aswanth P",
      "url": "https://aswanth-portfolio-eta.vercel.app/",
      "jobTitle": "Freelance SEO Specialist",
      "description": "Freelance SEO specialist & expert in Calicut providing on-page SEO, technical SEO, local SEO, and link building services to grow businesses.",
      "image": "https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calicut",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.linkedin.com/in/aswanth-clt",
        "https://github.com/aswanth7356"
      ]
    }
    `}
                </script>
            </Helmet>

            {/* ========== Meta data ========== */}



            <div className="relative overflow-hidden px-6 md:px-16 lg:px-24">

                {/* Background Gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black"></div>

                {/* Soft Blur Glow */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>

                {/* 🔥 Premium Home Button */}
                <div className="pt-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 text-gray-800 dark:text-white rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        ← Back to Home
                    </Link>
                </div>

                {/* HERO SECTION */}
                <section className="text-center py-24">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        SEO Services in Calicut
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Looking for the best SEO specialist in Calicut? I provide result-driven
                        SEO strategies that improve rankings, increase organic traffic, and help
                        businesses in Kozhikode grow consistently.
                    </p>
                </section>

                {/* SERVICES GRID */}
                <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-24">

                    {[
                        {
                            title: "Local SEO in Calicut",
                            desc: "Rank higher in local searches and attract nearby customers with optimized Google Business strategies.",
                        },
                        {
                            title: "On-Page SEO Optimization",
                            desc: "Enhance your website structure and content to improve search visibility.",
                        },
                        {
                            title: "Technical SEO",
                            desc: "Fix crawl issues, boost site speed, and ensure proper indexing.",
                        },
                        {
                            title: "Keyword Research & Strategy",
                            desc: "Target high-converting keywords that bring real business results.",
                        },
                        {
                            title: "Content Optimization",
                            desc: "SEO-focused content tailored for Calicut and Kozhikode markets.",
                        },
                        {
                            title: "SEO Consultation",
                            desc: "Strategic SEO guidance to build long-term growth and authority.",
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <h2 className="text-xl font-semibold mb-4 dark:text-white">
                                {service.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                {service.desc}
                            </p>
                        </div>
                    ))}

                </section>

                {/* CTA SECTION */}
                <section className="text-center pb-24">
                    <h2 className="text-3xl font-semibold mb-6 dark:text-white">
                        Ready to Dominate Google Rankings?
                    </h2>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                    >
                        Get Free SEO Consultation →
                    </Link>
                </section>

            </div>
        </>
    );
};

export default AllServices;