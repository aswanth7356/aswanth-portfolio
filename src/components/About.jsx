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

    const data = [
        {
            name: 'Specialization',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: [
                { title: 'SEO Strategy' },
                { title: 'Keyword Research' },
                { title: 'Technical SEO Audits' },
                { title: 'Conversion Tracking' },
            ],
        },
        {
            name: 'Experience',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: [
                {
                    title: 'SEO Trainee – Viral Mafia Agency',
                    duration: 'Jan 2026 – Present',
                },
                {
                    title: 'Digital Marketing Course',
                    duration: 'Sep 2025 – Dec 2025',
                },
            ],
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: `Bachelor of Computer Application (BCA)
    2020 – 2023`,
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <p className="text-center mb-2 text-lg font-Ovo" data-aos="fade-up">Introduction</p>
            <h2 className="text-center text-5xl font-Ovo" data-aos="fade-up">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-8">



                {/* Profile Image */}
                <div className="relative w-64 sm:w-80 rounded-3xl overflow-hidden group">
                    <img
                        src="./assets/cv-profile-img2.webp"
                        alt="Aswanth SEO Executive profile photo"
                        className="w-full transition duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="
                        absolute inset-0
                        bg-black/40
                        opacity-0 group-hover:opacity-100
                        transition duration-500
                        flex items-center justify-center
                        text-white text-sm font-medium
                    ">
                        SEO & Growth Specialist 🚀
                    </div>
                </div>


                {/* Right Content */}
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo" data-aos="fade-up">
                        As an SEO Executive, I specialize in boosting website performance
                        through on-page and off-page SEO, content optimization, and backlink
                        strategies. I focus on driving organic traffic, improving rankings,
                        and maximizing online growth for businesses.
                    </p>

                    {/* Info Cards */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl" data-aos="fade-up">
                        {data.map((item) => (
                            <li
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                key={item.name}
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
                            >
                                <img
                                    src={item.icon1}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-7 mt-3 dark:hidden"
                                />
                                <img
                                    src={item.icon2}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-7 mt-3 hidden dark:block"
                                />

                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {item.name}
                                </h3>

                                {Array.isArray(item.description) ? (
                                    <ul className="text-gray-600 text-sm dark:text-white/80 space-y-2">
                                        {item.description.map((entry, index) => (
                                            <li key={index} className="flex gap-2" >
                                                <span className="w-2 h-2 mt-2 bg-black dark:bg-white rounded-full"></span>
                                                <div>
                                                    <p className="font-medium">
                                                        {entry.title}
                                                    </p>
                                                    {entry.duration && (
                                                        <p className="text-xs flex items-center gap-2 mt-1">
                                                            {entry.duration.includes("Present") ? (
                                                                <>
                                                                    <span>{entry.duration.replace("Present", "")}</span>

                                                                    <span className="
                                                                            bg-green-100 text-green-700
                                                                            px-2 py-0.5 rounded-full
                                                                            text-[10px] font-semibold
                                                                        ">
                                                                        Present
                                                                    </span>
                                                                </>
                                                            ) : (
                                                                <span className="opacity-80">{entry.duration}</span>
                                                            )}
                                                        </p>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-600 text-sm dark:text-white/80 whitespace-pre-line">
                                        {item.description}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Tools Section */}
                    <h3 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
                        Tools I Used
                    </h3>

                    <ul className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-5" data-aos="fade-up">
                        {tools.map((tool) => (
                            <li
                                key={tool.name}
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
                                    alt={tool.name}
                                    className={`object-contain transition-all duration-300 
                                        ${tool.size === "large"
                                            ? "w-14 sm:w-16"
                                            : "w-10 sm:w-12"}`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}