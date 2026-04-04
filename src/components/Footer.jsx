import { FaPhoneAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="relative py-10 overflow-hidden">


            {/* Top Section */}
            <div className="text-center">

                <img
                    src="/assets/A Logo2.png"
                    alt="Aswanth Portfolio Logo"
                    className="w-36 mx-auto mb-3"
                />

                <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md mx-auto">
                    I provide structured SEO strategies and optimization techniques
                    to improve website visibility and drive organic growth.
                </p>

                {/* Email */}
                <div className="flex items-center justify-center gap-2 mt-3">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a
                        href="mailto:aswanth1392@gmail.com"
                        className="hover:underline transition-all duration-300 text-gray-800 dark:text-gray-200"
                    >
                        aswanth1392@gmail.com
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-gray-700 mx-[10%] mt-10 pt-4">
                <p className="text-gray-500 text-sm mt-6 sm:mt-0">
                    © 2026 Aswanth P. All rights reserved.
                </p>

                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/aswanth-clt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-400 transition"
                        >
                            <FaLinkedin size={26} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/+917356644734"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-400 transition"
                        >
                            <FaWhatsapp size={26} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="tel:+917356644734"
                            className="text-blue-500 hover:text-blue-400 transition"
                        >
                            <FaPhoneAlt size={22} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}