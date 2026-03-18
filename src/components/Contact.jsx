import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";


export default function GamifiedSEO() {
    const [selected, setSelected] = useState(null);
    const [tip, setTip] = useState("");

    const challenges = [
        { id: 1, text: "Low website traffic", tip: "Focus on keyword research and content optimization to attract more visitors." },
        { id: 2, text: "Poor Google rankings", tip: "Optimize on-page SEO and build quality backlinks to improve rankings." },
        { id: 3, text: "Slow website", tip: "Improve site speed by compressing images, reducing scripts, and using caching." },
        { id: 4, text: "Low engagement", tip: "Create interactive content, clear CTAs, and engaging visuals for better user experience." },
    ];

    const handleSelect = (challenge) => {
        setSelected(challenge.id);
        setTip(challenge.tip);
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div
            className="w-full px-[12%] py-16 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none rounded-2xl"
            data-aos="fade-up"
        >
            <h2
                className="text-center text-5xl font-Ovo mb-6"
                data-aos="fade-down"
                data-aos-delay="100"
            >
                Pick Your Biggest SEO Challenge
            </h2>
            <p
                className="text-center max-w-2xl mx-auto mb-12 font-Ovo text-gray-700 dark:text-gray-300"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Select the challenge you face the most and get a quick tip on how to solve it!
            </p>

            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                {challenges.map((challenge) => (
                    <button
                        key={challenge.id}
                        onClick={() => handleSelect(challenge)}
                        className={`
                            px-6 py-4 rounded-xl font-medium shadow-md transition-all duration-300
                            transform
                            ${selected === challenge.id
                                ? "bg-blue-600 text-white scale-105 shadow-2xl"
                                : "bg-white dark:bg-darkHover/30 text-black dark:text-white hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-white"
                            }
                        `}
                        data-aos="zoom-in"
                        data-aos-delay={400 + challenge.id * 100}
                    >
                        {challenge.text}
                    </button>
                ))}
            </div>

            {tip && (
                <div
                    className="mt-10 text-center"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <p className="text-xl font-semibold text-gray-800 dark:text-white mb-6">{tip}</p>
                    <a
    href="/contact"
    className="
    group relative inline-flex items-center gap-2 justify-center
    px-6 py-3
    text-sm md:text-base
    rounded-full
    border border-blue-400/40
    text-blue-600
    backdrop-blur-md
    bg-white/10

    transition-all duration-300 ease-in-out
    w-full sm:w-auto

    hover:text-white
    hover:bg-orange-500
    hover:border-orange-500
    hover:shadow-[0_8px_25px_rgba(255,115,0,0.4)]
    hover:-translate-y-1
    "
    data-aos="fade-up"
    data-aos-delay="700"
>
    Want personalized help? Contact me

    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
</a>
                </div>
            )}
        </div>
    );
}