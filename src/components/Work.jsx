import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Work() {

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    const work = [
        {
            name: 'On-Page SEO',
            icon: './assets/on-page.jpg',
            description: 'Technical Fixes, Meta Tags & Content Structuring',
        },
        {
            name: '',
            icon: './assets/backlink-img.webp',
            description: 'Authority Building & High-Quality Backlinks',
        },
        {
            name: 'Local SEO & GBP',
            icon: './assets/work-2.webp',
            description: 'Profile Setup, Optimization & Ranking',
        },
        {
            name: 'Web Development',
            icon: './assets/work-3.webp',
            description: 'Responsive & SEO-Friendly Websites',
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-16 scroll-mt-20">

            {/* Heading */}
            <h2
                className="text-center text-4xl sm:text-5xl font-Ovo"
                data-aos="fade-down"
            >
                SEO Work That Drives Results 🚀
            </h2>

            <p
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300"
                data-aos="fade-up"
            >
                Explore my work including SEO strategies, keyword research, backlink building,
                and high-performance website development.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {work.map((item, index) => (
                    <Link
                        key={index}
                        to="/all-work" // ✅ same link for all cards
                        data-aos="fade-up"
                        className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg block"
                    >

                        {/* Image */}
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="w-full h-[280px] object-cover 
                group-hover:scale-110 transition duration-500"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t 
            from-black/80 via-black/30 to-transparent"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 p-5 text-white w-full">

                            <h2 className="text-lg font-semibold opacity-0 
                group-hover:opacity-100 transition duration-500">
                                {item.name}
                            </h2>

                            <p className="text-sm mt-2 opacity-0 
                group-hover:opacity-100 transition duration-500">
                                {item.description}
                            </p>

                            {/* Arrow */}
                            <div className="mt-4 w-9 h-9 flex items-center 
                justify-center rounded-full bg-white text-black 
                group-hover:bg-lime-400 transition duration-300">
                                →
                            </div>

                        </div>

                    </Link>
                ))}

            </div>
            {/* Show More Button */}
            <div className="flex justify-center mt-24">

                <Link
                    to="/all-work"
                    className="relative group px-3 py-2 rounded-full 
                    text-sm font-semibold tracking-wide overflow-hidden"
                >

                    {/* Glow Background */}
                    <span className="absolute inset-0 bg-gradient-to-r 
                    from-lime-400 via-green-400 to-lime-400 
                    opacity-70 blur-lg group-hover:opacity-100 
                    transition duration-500"></span>

                    {/* Button Body */}
                    <span className="relative z-10 px-6 py-2 rounded-full 
                    bg-black text-white flex items-center gap-2 
                    group-hover:bg-white group-hover:text-black 
                    transition duration-300">

                        Explore More
                        <span className="group-hover:translate-x-1 transition">
                            →
                        </span>

                    </span>

                </Link>

            </div>

        </div>
    );
}