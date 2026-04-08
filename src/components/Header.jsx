import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Header() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center">

            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black"></div>

            {/* Glow Effects */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>

            {/* Main Content */}
            <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4">

                <img
                    src="./assets/cv-profile-img.webp"
                    alt="Aswanth Profile"
                    className="rounded-full w-32"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                />

                <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo" data-aos="fade-up"
                    data-aos-delay="200">
                    Hi! I&apos;m Aswanth
                    <img src="./assets/hand-icon.png" alt="Waving hand icon" className="w-6 mb-1" />
                </h3>

                <h1
                    className="text-2xl sm:text-4xl lg:text-5xl font-Ovo"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="900"
                >
                    Organic growth with smart strategies – SEO expert in Calicut
                </h1>

                {/* Premium Social Icons */}
                <ul className="flex items-center justify-center gap-6 mt-8">

                    {/* LinkedIn */}
                    <li className="relative group" data-aos="zoom-in" data-aos-delay="600">
                        <a
                            href="https://www.linkedin.com/in/aswanth-clt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my LinkedIn profile"
                            className="w-12 h-12 flex items-center justify-center rounded-full 
                            backdrop-blur-md bg-gray-200/60 dark:bg-white/10
                            border border-gray-300 dark:border-white/30
                            shadow-md dark:shadow-none
                            text-[#0A66C2]
                            hover:scale-110
                            hover:drop-shadow-[0_0_12px_rgba(10,102,194,0.8)]
                            transition-all duration-300"
                        >
                            <FaLinkedin size={22} />
                        </a>
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                        opacity-0 group-hover:opacity-100 
                        text-xs bg-black text-white px-2 py-1 rounded 
                        transition duration-300">
                            LinkedIn
                        </span>
                    </li>

                    {/* WhatsApp */}
                    <li className="relative group" data-aos="zoom-in" data-aos-delay="700">
                        <a
                            href="https://wa.me/+917356644734"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with me on WhatsApp"
                            className="w-12 h-12 flex items-center justify-center rounded-full 
                            backdrop-blur-md bg-gray-200/60 dark:bg-white/10
                            border border-gray-300 dark:border-white/30
                            shadow-md dark:shadow-none
                            text-[#25D366]
                            hover:scale-110
                            hover:drop-shadow-[0_0_12px_rgba(37,211,102,0.8)]
                            transition-all duration-300"
                        >
                            <FaWhatsapp size={22} />
                        </a>
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                        opacity-0 group-hover:opacity-100 
                        text-xs bg-black text-white px-2 py-1 rounded 
                        transition duration-300">
                            WhatsApp
                        </span>
                    </li>

                    {/* Instagram */}
                    <li className="relative group" data-aos="zoom-in" data-aos-delay="800">
                        <a
                            href="https://instagram.com/azw4nth"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my Instagram profile"
                            className="w-12 h-12 flex items-center justify-center rounded-full 
                            backdrop-blur-md bg-gray-200/60 dark:bg-white/10
                            border border-gray-300 dark:border-white/30
                            shadow-md dark:shadow-none
                            text-pink-500
                            hover:scale-110
                            hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]
                            transition-all duration-300"
                        >
                            <FaInstagram size={22} />
                        </a>
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                        opacity-0 group-hover:opacity-100 
                        text-xs bg-black text-white px-2 py-1 rounded 
                        transition duration-300">
                            Instagram
                        </span>
                    </li>

                    {/* Email */}
                    <li className="relative group" data-aos="zoom-in" data-aos-delay="900">
                        <a
                            href="mailto:aswanth1392@gmail.com"
                            aria-label="Send me an email"
                            className="w-12 h-12 flex items-center justify-center rounded-full 
                            backdrop-blur-md bg-gray-200/60 dark:bg-white/10
                            border border-gray-300 dark:border-white/30
                            shadow-md dark:shadow-none
                            text-red-500
                            hover:scale-110
                            hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]
                            transition-all duration-300"
                        >
                            <MdEmail size={22} />
                        </a>
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                        opacity-0 group-hover:opacity-100 
                        text-xs bg-black text-white px-2 py-1 rounded 
                        transition duration-300">
                            Email
                        </span>
                    </li>

                </ul>

            </div>
        </div>
    );
}