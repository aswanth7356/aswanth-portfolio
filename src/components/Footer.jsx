import { FaPhoneAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black py-6 border-t border-gray-300 dark:border-gray-800">

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center md:text-left">

                {/* 1. Brand Section */}
                <div>
                    <img
                        src="/assets/A Logo2.png"
                        alt="Aswanth Portfolio Logo"
                        className="w-32 mx-auto md:mx-0 mb-3"
                    />
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        We provide structured SEO strategies and optimization techniques
                        to improve website visibility and drive organic growth.
                    </p>
                </div>

                {/* 2. Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-3 text-black dark:text-white">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/all-work" className="footer-link">All Works</Link></li>
                        <li><Link to="/blog" className="footer-link">Blog</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                    </ul>
                </div>

                {/* 3. Services (SEO BOOST SECTION) */}
                <div>
                    <h3 className="font-semibold text-lg mb-3 text-black dark:text-white">
                        Services
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/services" className="footer-link">
                                SEO Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="footer-link">
                                Digital Marketing Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="footer-link">
                                Website Optimization
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 4. Contact & Social */}
                <div>
                    <h3 className="font-semibold text-lg mb-3 text-black dark:text-white">
                        Contact
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        aswanth1392@gmail.com
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 mt-3">
                        <a
                            href="https://www.linkedin.com/in/aswanth-clt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-400"
                        >
                            <FaLinkedin size={22} />
                        </a>
                        <a
                            href="https://wa.me/+917356644734"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-400"
                        >
                            <FaWhatsapp size={22} />
                        </a>
                        <a
                            href="tel:+917356644734"
                            className="text-blue-500 hover:text-blue-400"
                        >
                            <FaPhoneAlt size={20} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center mt-10 text-sm text-gray-500">
                © 2026 Aswanth P. All rights reserved.
            </div>

            {/* Reusable class */}
            <style jsx>{`
                .footer-link {
                    color: #6b7280;
                    transition: 0.3s;
                }
                .footer-link:hover {
                    color: black;
                }
                .dark .footer-link:hover {
                    color: white;
                }
            `}</style>

        </footer>
    );
}