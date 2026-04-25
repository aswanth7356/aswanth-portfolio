import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    const tools = [
        { name: 'Google Analytics', icon: './assets/google analytics.webp', size: 'large' },
        { name: 'Google Search Console', icon: './assets/google search console.webp', size: 'large' },
        { name: 'Google Tag Manager', icon: './assets/google tag manager.webp', size: 'large' },
        { name: 'Semrush', icon: './assets/semrush.png', size: 'large' },
        { name: 'Uber Suggest', icon: './assets/uber suggest.png', size: 'large' },
        { name: 'Moz', icon: './assets/moz.png', size: 'large' },
        { name: 'Page Speed Insight', icon: './assets/page-speed-insight.webp' },
        { name: 'Seo Optimer', icon: './assets/seo optimer.png', size: 'large' },
        { name: 'Screaming Frog', icon: './assets/screaming-frog.webp' },
        { name: 'Google Ads', icon: './assets/google ads.webp' },
        { name: 'Meta Ads', icon: './assets/meta ads.webp', size: 'large' },
        { name: 'Wordpress', icon: './assets/wordpress.webp' },
        { name: 'React', icon: './assets/react.png' },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-16 scroll-mt-20">

            {/* HEADING */}
            <p className="text-center mb-2 text-lg font-Ovo" data-aos="fade-down">
                Introduction
            </p>
            <h2 className="text-center text-5xl font-Ovo" data-aos="fade-down" data-aos-delay="100">
                About me
            </h2>

            {/* TOP SECTION */}
            <div className="flex flex-col lg:flex-row items-stretch gap-16 my-10">

                {/* IMAGE */}
                <div
                    className="w-64 sm:w-80 mx-auto rounded-3xl overflow-hidden"
                    data-aos="fade-right"
                    data-aos-duration="900"
                >
                    <img
                        src="./assets/cv-profile-img2.webp"
                        alt="Aswanth SEO Executive"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* CONTENT */}
                <div
                    className="flex-1 flex flex-col justify-between h-full"
                    data-aos="fade-left"
                    data-aos-duration="900"
                >

                    <div>
                        <p
                            className="mb-8 text-gray-700 dark:text-gray-400 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <span className="font-semibold text-gray-800 dark:text-white">
                                SEO Expert in Calicut, Kerala
                            </span><br /><br />

                            I’m a BCA graduate with a strong foundation in web technologies and currently working as an{" "}
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">SEO Executive</span>.
                            I specialize in improving
                            <span className="text-blue-600 dark:text-blue-400 font-semibold"> website visibility</span>,
                            increasing
                            <span className="text-blue-600 dark:text-blue-400 font-semibold"> organic traffic</span>,
                            and boosting
                            <span className="text-blue-600 dark:text-blue-400 font-semibold"> keyword rankings</span>.
                        </p>

                        <p
                            className="mb-8 text-gray-700 dark:text-gray-400 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            I have hands-on experience working on live client projects where I handle
                            <span className="text-blue-600 dark:text-blue-400 font-semibold"> keyword research</span>,
                            <span className="text-blue-600 dark:text-blue-400 font-semibold"> on-page SEO</span>,
                            <span className="text-blue-600 dark:text-blue-400 font-semibold"> technical SEO audits</span>, and
                            <span className="text-blue-600 dark:text-blue-400 font-semibold"> link building strategies</span>.
                        </p>

                        <p
                            className="mb-8 text-gray-700 dark:text-gray-400 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            I use tools like Google Analytics, Search Console, and Semrush to analyze
                            performance and implement data-driven strategies that improve rankings,
                            traffic, and conversions.
                        </p>

                        <p
                            className="text-gray-700 dark:text-gray-400 font-medium"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            SEO is not just about tools — it’s about delivering the
                            <span className="text-gray-800 dark:text-blue-400 font-semibold"> right content</span> to the
                            <span className="text-gray-800 dark:text-blue-400 font-semibold"> right audience at the right time</span>.
                        </p>
                    </div>

                    <p
                        className="mt-8 text-sm text-green-600 font-semibold"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        ✔ Focused on real growth, not just rankings 🚀
                    </p>

                </div>
            </div>

            {/* CARDS */}
            <div className="grid sm:grid-cols-3 gap-6 my-10">

                <div className="p-6 border border-gray-400  rounded-xl hover:shadow-lg transition">
                    <h3 className="font-semibold text-lg mb-4">Specialization</h3>
                    <ul className="text-sm text-gray-600 leading-5 dark:text-white/80 space-y-2">
                        <li>✔ SEO Strategy</li>
                        <li>✔ Keyword Research</li>
                        <li>✔ Technical SEO</li>
                        <li>✔ Link Building</li>
                        <li>✔ Conversion Tracking</li>
                    </ul>
                </div>

                <div className="p-6 border border-gray-400 rounded-xl hover:shadow-lg transition">
                    <h3 className="font-semibold text-lg mb-4">Experience</h3>

                    <div className="text-sm text-gray-600 leading-5 dark:text-white/80 space-y-3">
                        <div>

                            <p className="font-medium">SEO Executive</p>
                            <p className="text-xs">
                                Viral Mafia Agency • Jan 2026 -
                                <span className="text-green-500 font-semibold"> Present</span>
                            </p>
                        </div>

                        <div>
                            <p className="font-medium">Digital Marketing Course</p>
                            <p className="text-xs">Sep 2025 - Dec 2025</p>
                        </div>
                        <div>
                            <p className="font-medium">Office Assistant</p>
                            <p className="text-xs">2023 - 2025</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border border-gray-400  rounded-xl hover:shadow-lg transition">
                    <h3 className="font-semibold text-lg mb-4">Education</h3>
                    <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                        Bachelor of Computer Application (BCA) <br />
                        2020 – 2023
                    </p>
                </div>

            </div>

            {/* OLD TOOLS SECTION (UNCHANGED) */}
            <h3 className="my-6 text-2xl sm:text-2xl text-gray-900 font-Ovo dark:text-white/80" data-aos="fade-up">
                Tools I Used
            </h3>

            <ul className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-5">
                {tools.map((tool, index) => (
                    <li
                        key={tool.name}
                        data-aos="zoom-in"
                        data-aos-delay={index * 80}
                        className="relative group flex items-center justify-center
                            aspect-square border border-gray-300 dark:border-white/30
                            rounded-lg transition-all duration-300 ease-in-out
                            hover:scale-110 hover:bg-gray-100 dark:hover:bg-white/10
                            hover:border-black dark:hover:border-white hover:shadow-xl"
                    >
                        <span
                            className="absolute -top-8 opacity-0 group-hover:opacity-100
                                scale-90 group-hover:scale-100 transition-all duration-300
                                bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap
                                pointer-events-none dark:bg-white dark:text-black"
                        >
                            {tool.name}
                        </span>

                        <img
                            src={tool.icon}
                            alt=""
                            aria-hidden="true"
                            className={`object-contain transition-all duration-300 
                                ${tool.size === "large"
                                    ? "w-14 sm:w-16"
                                    : "w-10 sm:w-12"}`}
                        />
                    </li>
                ))}
            </ul>

        </div>
    );
}