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

            {/* TOP SECTION */}
            <div className="flex flex-col lg:flex-row items-stretch gap-16 my-10">

                <div
                    className="w-64 sm:w-80 mx-auto relative group"
                    data-aos="fade-right"
                    data-aos-duration="900"
                >

                    {/* Gradient Border Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

                    {/* Image Container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-white/10">
                        <img
                            src="./assets/cv-profile-img2.webp"
                            alt="Aswanth SEO Executive"
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:rotate-1"
                        />

                        {/* Overlay Text */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-sm font-medium">
                            SEO & Growth 🚀
                        </div>
                    </div>

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

                            I’m Aswanth, working as an <span className="">SEO Executive at Viral Mafia Agency</span> in Calicut.
                            As an <a
                                href="https://www.linkedin.com/in/aswanth-clt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                            >
                                SEO Expert in Calicut
                            </a>,<br></br> I focus on helping businesses improve their online presence and achieve sustainable growth through effective SEO strategies.
                        </p>

                        <p
                            className="mb-8 text-gray-700 dark:text-gray-400 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            I specialize in improving
                            <span className="text-gray-800 dark:text-blue-400 font-semibold"> search visibility</span>,
                            increasing
                            <span className="text-gray-800 dark:text-blue-400 font-semibold"> organic traffic</span>,
                            and achieving better
                            <span className="text-gray-800 dark:text-blue-400 font-semibold"> keyword rankings</span>.
                            <br></br>I have hands-on experience in
                            <span className="text-gray-800 dark:text-blue-400 font-semibold"> keyword research</span>,
                            <span className="text-gray-800 dark:text-blue-400 font-semibold"> on-page SEO</span>,
                            <span className="text-gray-800 dark:text-blue-400 font-semibold"> technical SEO audits</span>, and
                            <span className="text-gray-800 dark:text-blue-400 font-semibold"> link building</span>.
                        </p>

                        <p
                            className="mb-8 text-gray-700 dark:text-gray-400 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            What sets me apart is my approach to SEO — I don’t just focus on rankings, but on real business growth.
                            By using tools like Google Analytics, Search Console, and Semrush, I create data-driven strategies that improve traffic, engagement, and conversions.
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
                        className="mt-2 text-sm text-green-600 font-semibold"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <a
                            href="https://wa.me/+917356644734"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 group hover:underline"
                        >
                            Let’s transform your vision into a reality that inspires!

                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 dark:text-white text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/40">
                                →
                            </span>
                        </a>
                    </p>

                </div>
            </div>

            {/* CARDS */}
            <div className="grid sm:grid-cols-3 gap-6 my-16">

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