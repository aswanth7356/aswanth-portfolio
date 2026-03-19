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
            name: 'Off-Page SEO',
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
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo" data-aos="fade-down">My Latest Works</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo" data-aos="fade-up">
                Explore my work showcasing on-page SEO, keyword research, backlink strategies, and organic growth improvements.
            </p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black" >
                {work.map((item) => (
                    <div
                        className="aspect-square bg-no-repeat bg-cover bg-center 
               rounded-lg relative group overflow-hidden"  data-aos="fade-up"
                        style={{ backgroundImage: `url(${item.icon})` }}
                    >

                        {/* Blur Overlay */}
                        <div className="absolute inset-0 backdrop-blur-md 
                            group-hover:backdrop-blur-0 
                            transition-all duration-500">
                        </div>

                        {/* Content Box */}
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                    py-3 px-5 flex items-center justify-between 
                    duration-500 group-hover:bottom-7 z-10">
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                {/* <p className="text-sm text-gray-700">{item.description}</p> */}
                            </div>

                            <div className="border rounded-full border-black w-9 aspect-square 
                        flex items-center justify-center 
                        shadow-[2px_2px_0_#000] 
                        group-hover:bg-lime-300 transition">
                                <img src="./assets/send-icon.png" alt="arrow icon" className="w-5" />
                            </div>
                        </div>
                    </div>

                ))}
            </div>

            <Link
                to="/all-work"
                className="group relative w-max mx-auto my-20
                            px-10 py-3
                            rounded-full
                            flex items-center gap-3
                            font-semibold tracking-wide
                            border border-gray-400
                            text-gray-800 dark:text-white
                            overflow-hidden">

                <span className="absolute inset-0 border-2 border-transparent
                    group-hover:border-blue-500
                    transition-all duration-300 rounded-full"></span>

                <span className="relative z-10 flex items-center gap-1 text-sm">
                    Show More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </span>

            </Link>
        </div>
    );
}