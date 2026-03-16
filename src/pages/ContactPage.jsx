import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactPage() {
    const [result, setResult] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (!name || !email || !message) {
            setResult("Please fill in all fields.");
            return;
        }

        setResult("Opening WhatsApp...");

        const phone = "919876543210"; // Replace with your WhatsApp number in international format
        const text = `Hello! My name is ${name}. Email: ${email}. Message: ${message}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        // Open WhatsApp in a new tab
        window.open(url, "_blank");

        setResult("WhatsApp chat opened! Please send your message.");
        event.target.reset();
    };

    return (
        <div className="relative overflow-hidden px-6 md:px-16 lg:px-24 py-24">

            <Helmet>
                <title>Contact Aswanth P | Freelance SEO Specialist in Calicut</title>

                <meta
                    name="description"
                    content="Contact Aswanth P, a freelance SEO specialist in Calicut. Get in touch for SEO services, website optimization, and digital marketing consultation."
                />

                <link
                    rel="canonical"
                    href="https://aswanth-portfolio-eta.vercel.app/contact"
                />
            </Helmet>

            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black"></div>

            {/* Soft Blur Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>

            {/* Heading */}
            <div className="text-center mb-14">
                <h1
                    data-aos="fade-up"
                    className="text-4xl md:text-5xl font-bold text-black dark:text-white mt-12"
                >
                    Get in Touch
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300"
                >
                    Have a project in mind or want to improve your website’s search
                    visibility? Send a message and let's discuss how we can grow
                    your business online.
                </p>
            </div>

            {/* Contact Form */}
            <form
                data-aos="fade-up"
                data-aos-delay="200"
                onSubmit={onSubmit}
                className="max-w-2xl mx-auto p-10 rounded-3xl 
        bg-gradient-to-br from-white via-blue-50 to-purple-50
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        backdrop-blur-xl border border-white/30 dark:border-white/10
        shadow-xl"
            >
                <input type="hidden" name="subject" value="Portfolio Contact Form" />

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 
            dark:border-gray-700 bg-white/80 dark:bg-black/30 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 
            dark:border-gray-700 bg-white/80 dark:bg-black/30 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Message */}
                <textarea
                    rows="6"
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 
          dark:border-gray-700 bg-white/80 dark:bg-black/30 
          focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                ></textarea>

                {/* Button */}
                <button
                    type="submit"
                    className="py-3 px-10 mx-auto flex items-center gap-2 rounded-full 
          text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 
          hover:scale-105 transition-all duration-300 shadow-lg"
                >
                    Send Message →
                </button>

                {/* Result Message */}
                <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
                    {result}
                </p>
            </form>
        </div>
    );
}