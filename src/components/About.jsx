import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

            {/* TOP SECTION (UPDATED) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 my-14 items-start lg:-ml-10">

                {/* LEFT - PROFILE CARD */}
                <div
                    className="relative flex flex-col items-center lg:items-start lg:ml-40"
                    data-aos="fade-right"
                    data-aos-duration="900"
                >

                    {/* Glow */}
                    {/* <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl rounded-3xl"></div> */}

                    <div className="relative w-72 sm:w-80 mx-auto mt-10">

                        {/* BACKGROUND SHAPE (collage layer) */}
                        <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rotate-[-3deg] blur-sm"></div>

                        {/* SECOND PAPER LAYER */}
                        <div className="absolute top-2 left-2 w-full h-full rounded-3xl bg-white/30 dark:bg-white/5 rotate-[2deg]"></div>

                        {/* MAIN CUT-OUT CARD */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl">

                            {/* IMAGE (cut-out feel) */}
                            <div className="relative">
                                <img
                                    src="./assets/cv-profile-img2.webp"
                                    alt="Aswanth SEO Executive"
                                    className="w-full h-[380px] object-cover scale-110 hover:scale-115 transition duration-700"
                                />

                                {/* CUT EDGE EFFECT (top fade) */}
                                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/60 dark:from-black/40 to-transparent"></div>

                                {/* CUT EDGE EFFECT (bottom fade) */}
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>

                            {/* BADGES */}
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                <span className="text-white text-sm font-semibold drop-shadow-md">
                                    SEO & Growth 🚀
                                </span>
                                <span className="px-3 py-1 text-[11px] rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                                    Calicut
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Info Card */}
                    {/* <div className="mt-6 w-full sm:w-80 p-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-lg">

                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Focused on improving search visibility, increasing organic traffic, and turning visitors into real business leads through strategic SEO.
                        </p>

                    </div> */}

                </div>

                {/* RIGHT - CONTENT */}
                <div
                    className="flex flex-col justify-between"
                    data-aos="fade-left"
                    data-aos-duration="900"
                >

                    <div className="space-y-6">

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
                            <span className="font-semibold text-gray-900 dark:text-white">
                                Freelance SEO Expert in Calicut, Kerala
                            </span>

                            <br /><br />

                            I’m Aswanth, working as an{" "}
                            <span className="font-medium text-gray-900 dark:text-white">
                                SEO Executive at Viral Mafia Agency
                            </span>{" "}
                            in Calicut. As a{" "}
                            <a
                                href="https://www.linkedin.com/in/aswanth-clt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 dark:text-blue-400 font-semibold hover:underline"
                            >
                                freelance SEO Expert in Calicut
                            </a>,
                            I help businesses improve visibility and achieve sustainable growth.
                        </p>

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
                            I specialize in improving{" "}
                            <span className="font-semibold">search visibility</span>,
                            increasing{" "}
                            <span className="font-semibold">organic traffic</span>,
                            and improving{" "}
                            <span className="font-semibold">keyword rankings</span>.

                            Experience includes{" "}
                            <span className="font-medium">keyword research</span>,{" "}
                            <span className="font-medium">on-page SEO</span>,{" "}
                            <span className="font-medium">technical audits</span>, and{" "}
                            <span className="font-medium">link building</span>.
                        </p>

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-justify">
                            My approach focuses on real business growth — not just rankings.
                            I use tools like Google Analytics, Search Console, and Semrush.
                        </p>

                        <p className="text-gray-700 dark:text-gray-400 font-medium text-justify">
                            SEO is about delivering the <span className="text-indigo-600 dark:text-indigo-400 font-semibold">right content</span> to the <span className="text-indigo-600 dark:text-indigo-400 font-semibold">right audience</span> at the <span>right time</span>, by understanding user intent, optimizing websites, and improving search visibility for real business growth.
                        </p>

                    </div>

                    <div className="mt-6">
                        {/* <a
                            href="https://wa.me/+917356644734"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-1 rounded-lg border border-indigo-500 text-indigo-600 font-medium hover:bg-indigo-500 hover:text-white transition"
                        >
                            Let’s connect →
                        </a> */}
                    </div>

                </div>
            </div>

            {/* CARDS */}
            <div className="grid sm:grid-cols-3 gap-6 my-16">

                <div className="p-6 border border-gray-300 dark:border-white/20 rounded-xl 
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400
                hover:bg-white/70 dark:hover:bg-white/5 backdrop-blur-sm">

                    <h3 className="font-semibold text-lg mb-4">Specialization</h3>
                    <ul className="text-sm text-gray-600 leading-5 dark:text-white/80 space-y-2">
                        <li>✔ SEO Strategy</li>
                        <li>✔ Keyword Research</li>
                        <li>✔ Technical SEO</li>
                        <li>✔ Link Building</li>
                        <li>✔ Conversion Tracking</li>
                    </ul>
                </div>

                <div className="p-6 border border-gray-300 dark:border-white/20 rounded-xl 
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl hover:border-purple-400
                hover:bg-white/70 dark:hover:bg-white/5 backdrop-blur-sm">

                    <h3 className="font-semibold text-lg mb-4">Experience</h3>
                    <div className="text-sm text-gray-600 leading-5 dark:text-white/80 space-y-3">
                        <div>
                            <p className="font-medium">SEO Executive</p>
                            <p className="text-xs">Viral Mafia Agency • Jan 2026 - <span className="text-green-600 font-semibold">Present</span></p>
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

                <div className="p-6 border border-gray-300 dark:border-white/20 rounded-xl 
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl hover:border-pink-400
                hover:bg-white/70 dark:hover:bg-white/5 backdrop-blur-sm">

                    <h3 className="font-semibold text-lg mb-4">Education</h3>
                    <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                        Bachelor of Computer Application (BCA) <br />
                        2020 – 2023
                    </p>
                </div>

            </div>

            {/* TOOLS */}
            <h3 className="my-6 text-2xl text-gray-900 font-Ovo dark:text-white/80" data-aos="fade-up">
                Tools I Used
            </h3>

            <ul className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8">
                {tools.map((tool, index) => (
                    <li
                        key={tool.name}
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                        className="group relative flex flex-col items-center justify-center text-center"
                    >
                        {/* Floating Circle */}
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full 
                bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-sm sm:shadow-md
                flex items-center justify-center 
                border border-indigo-200/70 dark:border-indigo-500/30
                transition-all duration-300 
                group-hover:scale-110 group-hover:shadow-lg group-hover:border-indigo-500">

                            <img
                                src={tool.icon}
                                alt={tool.name}
                                className={`object-contain transition-all duration-300 ${tool.size === "large"
                                    ? "w-6 sm:w-7 md:w-8"
                                    : "w-5 sm:w-6 md:w-7"
                                    }`}
                            />
                        </div>

                        {/* Label */}
                        <p className="mt-2 text-[9px] sm:text-[10px] md:text-xs text-gray-600 dark:text-white/70 group-hover:text-indigo-500 transition font-medium leading-tight">
                            {tool.name}
                        </p>
                    </li>
                ))}
            </ul>

        </div>
    );
}