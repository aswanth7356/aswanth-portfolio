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
            {/* ========== Meta data ========== */}

            <Helmet>
                {/* ===== Title & Description ===== */}
                <title>SEO Services in Calicut | On-Page, Technical & Local SEO</title>
                <meta
                    name="description"
                    content="Get expert SEO services in Calicut including on-page, technical, and local SEO. Improve rankings, drive more traffic, and grow your business."
                />
                <link
                    rel="canonical"
                    href="https://aswanth-portfolio-eta.vercel.app/seo-services"
                />
                <meta name="robots" content="index, follow" />

                {/* ===== Open Graph ===== */}
                <meta property="og:title" content="SEO Services in Calicut | Freelance SEO Specialist – Aswanth P" />
                <meta property="og:description" content="Hire a freelance SEO specialist in Calicut. Aswanth P offers expert SEO services including on-page SEO, technical SEO, local SEO, and link building to improve rankings." />
                <meta property="og:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />
                <meta property="og:image:alt" content="Aswanth P SEO Services Preview" />
                <meta property="og:url" content="https://aswanth-portfolio-eta.vercel.app/seo-services" />
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
      "url": "https://aswanth-portfolio-eta.vercel.app/seo-services",
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

                {/* ===== Service Schema ===== */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SEO Services",
  "provider": {
    "@type": "Person",
    "name": "Aswanth P"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Calicut, Kerala, India"
  },
  "description": "Professional SEO services including on-page SEO, technical SEO, keyword research, and link building to improve search rankings and grow business.",
  "url": "https://aswanth-portfolio-eta.vercel.app/seo-services"
}
`}
                </script>
            </Helmet>

            {/* ========== Meta data ========== */}

            <div className="relative overflow-hidden px-6 md:px-16 lg:px-24 pt-14">

                {/* Background Gradient (UNCHANGED) */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>

                {/* HERO */}
                <section className="text-center py-24">
                    <div className="text-center mb-12" data-aos="fade-up">

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 max-w-3xl mx-auto leading-tight">
                            SEO Services in Calicut That Drive Real Business Growth                        </h1>

                        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                            I help businesses improve search engine rankings, increase organic traffic,
                            and generate quality leads through data-driven SEO strategies.
                        </p>

                    </div>
                </section>



                <section className="max-w-6xl mx-auto pb-20 px-6 grid md:grid-cols-2 gap-16 items-center">

                    {/* IMAGE FIRST (better visual flow on desktop) */}
                    <div
                        className="flex justify-center order-1 md:order-2"
                        data-aos="fade-left"
                    >
                        <img
                            src="./assets/seo-growth.webp"
                            alt="SEO growth illustration showing website ranking improvement"
                            className="w-80 md:w-[420px] rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 
                        hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* CONTENT */}
                    <div
                        className="text-gray-700 dark:text-gray-300 order-2 md:order-1"
                        data-aos="fade-right"
                    >
                        {/* SECTION LABEL */}
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                            SEO Services
                        </span>

                        {/* HEADING */}
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 leading-snug dark:text-white">
                            SEO Services That Drive Real Business Growth
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mb-4 text-lg leading-relaxed">
                            SEO is more than just ranking keywords — it’s about building a strong online presence
                            that attracts the right audience and converts them into customers. I provide freelance
                            SEO services focused on long-term success and sustainable growth.
                        </p>

                        <p className="mb-6 text-lg leading-relaxed">
                            My strategy combines technical SEO, content optimization, and high-quality link building
                            to help your website rank higher and generate measurable business results.
                        </p>

                        {/* BENEFITS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-start gap-3">
                                <span className="text-green-500 text-xl">✔</span>
                                <p>Improve visibility on Google</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-green-500 text-xl">✔</span>
                                <p>Drive targeted organic traffic</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-green-500 text-xl">✔</span>
                                <p>Increase leads and conversions</p>
                            </div>
                        </div>
                    </div>

                </section>



                {/* SERVICES GRID */}
                <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-24">

                    {[
                        {
                            title: "Technical SEO Optimization",
                            icon: <FaTools />,
                            desc: "Fix indexing issues, improve site speed, and optimize website structure for better crawling and performance.",
                        },
                        {
                            title: "On-Page SEO Optimization",
                            icon: <FaSearch />,
                            desc: "Optimize meta tags, headings, and content structure to match search intent and improve rankings.",
                        },
                        {
                            title: "Keyword Research & Strategy",
                            icon: <FaKey />,
                            desc: "Identify high-intent keywords that attract targeted traffic and improve conversions.",
                        },
                        {
                            title: "Content Optimization",
                            icon: <FaFileAlt />,
                            desc: "Enhance content quality with SEO best practices to improve visibility and engagement.",
                        },
                        {
                            title: "Link Building",
                            icon: <FaLink />,
                            desc: "Build high-quality backlinks to increase domain authority and boost search rankings.",
                        },
                        {
                            title: "SEO Strategy & Consultation",
                            icon: <FaChartLine />,
                            desc: "Get a customized SEO roadmap tailored to your business goals and growth strategy.",
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in-up"
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
                            <p className="text-gray-600 dark:text-gray-300">
                                {service.desc}
                            </p>
                        </div>
                    ))}

                </section>



                {/* PROCESS - TIMELINE STYLE */}
                <section className="max-w-5xl mx-auto py-24 px-6">

                    {/* HEADER */}
                    <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                            My Process
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">
                            Step-by-Step SEO Growth Strategy
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400">
                            A clear and structured approach to improve rankings, drive traffic,
                            and grow your business consistently.
                        </p>
                    </div>

                    {/* TIMELINE */}
                    <div className="relative border-l-2 border-blue-200 dark:border-gray-700">

                        {/* STEP 1 */}
                        <div className="mb-12 ml-6 relative" data-aos="fade-up">
                            <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-md">
                                1
                            </span>

                            <div className="bg-white dark:bg-white/5 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-white/10">
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                                    SEO Audit & Analysis
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I analyze your website to uncover technical issues, keyword gaps,
                                    and opportunities for growth.
                                </p>
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div className="mb-12 ml-6 relative" data-aos="fade-up" data-aos-delay="150">
                            <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-md">
                                2
                            </span>

                            <div className="bg-white dark:bg-white/5 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-white/10">
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                                    Optimization & Implementation
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I optimize your website structure, content, and technical performance
                                    to improve search engine rankings.
                                </p>
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div className="ml-6 relative" data-aos="fade-up" data-aos-delay="300">
                            <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-md">
                                3
                            </span>

                            <div className="bg-white dark:bg-white/5 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-white/10">
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                                    Growth & Scaling
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I build authority through content and backlinks to increase traffic,
                                    leads, and conversions.
                                </p>
                            </div>
                        </div>

                    </div>

                </section>

                {/* WHY CHOOSE */}
                <section className="max-w-6xl mx-auto py-24 px-6">

                    {/* HEADER */}
                    <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                            Why Choose Me
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">
                            Why My SEO Services Deliver Better Results
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400">
                            I focus on strategies that not only improve rankings but also drive real business growth,
                            ensuring every effort contributes to measurable success.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* CARD 1 */}
                        <div
                            className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                        >
                            <div className="text-3xl mb-4">🎯</div>
                            <h3 className="font-semibold text-lg mb-2 dark:text-white">
                                Customized Strategies
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Every business is unique, so I create tailored SEO strategies aligned with your goals.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div
                            className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="text-3xl mb-4">🔍</div>
                            <h3 className="font-semibold text-lg mb-2 dark:text-white">
                                High-Intent Keywords
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                I target keywords that bring real customers, not just traffic.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div
                            className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="text-3xl mb-4">⚙️</div>
                            <h3 className="font-semibold text-lg mb-2 dark:text-white">
                                Technical Expertise
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                From site speed to indexing, I ensure your website is fully optimized.
                            </p>
                        </div>

                        {/* CARD 4 */}
                        <div
                            className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="text-3xl mb-4">📊</div>
                            <h3 className="font-semibold text-lg mb-2 dark:text-white">
                                Measurable Results
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Transparent reporting so you can track growth, rankings, and ROI clearly.
                            </p>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="text-center mt-14" data-aos="fade-up">
                        <Link
                            to="/contact"
                            className="
            inline-block
            px-5 py-2
            text-sm font-medium
            rounded-full

            border border-blue-600
            text-blue-600 dark:text-white
            bg-transparent

            transition-all duration-300

            hover:bg-blue-600 dark:hover:bg-white
            hover:text-white dark:hover:text-black
            hover:shadow-md
            hover:-translate-y-0.5
        "
                        >
                            Start Growing Your Website
                        </Link>
                    </div>

                </section>

            </div>
        </>
    );
};

export default AllServices;