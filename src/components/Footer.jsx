import { FaPhoneAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                    <img src="/assets/A Logo2.png" alt="" className="w-36 mx-auto mb-2" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a
                        href="mailto:aswanth1392@gmail.com"
                        className="hover:underline transition-all duration-300"
                        target="_blank"
                    >
                        aswanth1392@gmail.com
                    </a>
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p className="text-center text-gray-500 text-sm mt-8">
                    © 2026 Aswanth P. All rights reserved.
                </p>

                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/aswanth-clt/"
                            target="_blank"
                            className="text-blue-700 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition-all duration-300"
                        >
                            <FaLinkedin size={28} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/+917356644734"
                            target="_blank"
                            className="text-green-500 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)] transition-all duration-300"
                        >
                            <FaWhatsapp size={28} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="tel:+917356644734"
                            target="_blank"
                            className="text-blue-500 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition-all duration-300"
                        >
                            <FaPhoneAlt size={24} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
