import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyChooseMe() {
    const points = [
        "Strong understanding of SEO fundamentals",
        "Hands-on experience with Semrush, Google Analytics & Search Console",
        "Focused on improving rankings, visibility, and organic traffic",
        "Basic knowledge in technical SEO and website performance optimization",
        "Continuously learning and adapting to Google algorithm updates",
    ];

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section className="py-20 px-5">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <div data-aos="fade-right" data-aos-delay="200">
                    <h2 className="text-4xl font-Ovo font-bold mb-5 leading-snug">
                        Why Choose Me ?
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                        As an{" "}
                        <span className="font-semibold dark:text-white">
                            SEO expert in Calicut
                        </span>
                        , I focus on delivering measurable improvements through practical
                        strategies.<br /> Explore my{" "}
                        <Link
                            to="/seo-services"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            SEO services
                        </Link>{" "}
                        or check out my{" "}
                        <Link
                            to="/all-work"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            recent work
                        </Link>{" "}
                        to see how I approach real-world projects.
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                        As someone working in SEO, I understand how important it is to build
                        visibility, attract the right audience, and improve website performance.
                        My approach is simple — analyze, optimize, and grow.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-block mt-2 px-4 py-2 text-sm bg-black text-white rounded-full 
                        hover:bg-gray-800 transition duration-200"
                    >
                        Let’s Work Together
                    </Link>
                </div>

                {/* Right Side */}
                <div className="space-y-5">
                    {points.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150} // Staggered animation
                            className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <FaCheckCircle className="text-green-500 mt-1 text-lg" />
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhyChooseMe;