import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaSearch, FaTools, FaKey, FaFileAlt, FaChartLine, FaLink } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const AllServices = () => {
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>


            <noscript>
                <h1>SEO Services in Calicut</h1>
                <h2>Freelance SEO Specialist</h2>
                <p>
                    I provide professional SEO services including technical SEO, on-page SEO,
                    keyword research, and link building to improve search rankings and increase
                    organic traffic.
                </p>
            </noscript>

            {/* ========== Meta data ========== */}

            <Helmet>
                {/* ===== Title & Description ===== */}
                <title>SEO Services in Calicut | Freelance SEO Specialist – Aswanth P</title>
                <meta
                    name="description"
                    content="Professional SEO services to boost search rankings, increase organic traffic, and grow your business with on-page SEO, technical SEO, and link building."
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



            <div className="relative overflow-hidden px-6 md:px-16 lg:px-24 pt-14">

                {/* Background Gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black"></div>

                {/* Soft Blur Glow */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>



                {/* HERO SECTION */}
                <section className="text-center py-24">
                    <h1 data-aos="fade-up" className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6" >
                        SEO Services for Business Growth
                    </h1>
                    <p data-aos="fade-up"
                        data-aos-delay="100" className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Helping businesses grow online by improving rankings, increasing organic traffic, and implementing effective SEO strategies.
                    </p>
                </section>

                {/* SERVICES GRID */}
                <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-24">

                    {[
                        {
                            title: "Technical SEO Optimization",
                            icon: <FaTools />,
                            desc: "Ensure your website is search-engine friendly with proper indexing, faster loading speeds, and optimized site architecture. I analyze technical issues that affect rankings and implement solutions that improve performance and crawlability.",
                        },
                        {
                            title: "On-Page SEO Optimization",
                            icon: <FaSearch />,
                            desc: "Improve your website’s relevance and search visibility by optimizing meta tags, headings, internal linking, and content structure. Every page is optimized based on search intent to help it rank for the right keywords.",
                        },
                        {
                            title: "Keyword Research & Strategy",
                            icon: <FaKey />,
                            desc: "Identify high-value keywords that align with your audience's search behavior. I conduct in-depth keyword analysis to uncover ranking opportunities and create a strategic plan to target keywords that bring meaningful traffic.",
                        },
                        {
                            title: "Content Optimization",
                            icon: <FaFileAlt />,
                            desc: "Enhance existing content with SEO best practices to improve search visibility and user engagement. Content is optimized to match search intent while maintaining readability and value for visitors.",
                        },
                        {
                            title: "Link Building & Off-Page SEO",
                            icon: <FaLink />,
                            desc: "Build a strong backlink profile through high-quality, relevant links that increase website authority. Strategic link building helps improve domain credibility and boosts search engine rankings over time.",
                        },
                        {
                            title: "SEO Strategy & Consultation",
                            icon: <FaChartLine />,
                            desc: "Get expert guidance on improving your website’s organic growth. I provide detailed SEO insights, performance analysis, and actionable recommendations to help businesses scale their online presence effectively.",
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-white p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                                    {service.icon}
                                </div>

                                <h2 className="text-xl font-semibold dark:text-white">
                                    {service.title}
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-7">
                                {service.desc}
                            </p>
                        </div>
                    ))}

                </section>

                {/* CTA SECTION */}
                <section className="text-center pb-24" data-aos="fade-up">
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