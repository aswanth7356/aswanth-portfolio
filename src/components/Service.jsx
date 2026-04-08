import { Link } from "react-router-dom";
import { FaSearch, FaTools, FaChartLine, FaLink } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // initialize AOS
  }, []);

  const services = [
    {
      name: 'On-Page SEO',
      icon: <FaSearch />,
      description: 'Optimize content, meta tags, and internal linking to improve search rankings and user experience.',
    },
    {
      name: 'Technical SEO',
      icon: <FaTools />,
      description: 'Fix indexing issues, improve Core Web Vitals, and ensure proper crawling by search engines.',
    },
    {
      name: 'SEO Strategy',
      icon: <FaChartLine />,
      description: 'Build a data-driven SEO strategy to increase traffic, leads, and long-term growth.',
    },
    {
      name: 'Link Building',
      icon: <FaLink />,
      description: 'Create high-quality backlinks to improve domain authority and boost rankings on Google.',
    }
  ];

  return (
    <section
      id="services"
      className="relative w-full px-[12%] py-20 scroll-mt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>

      {/* Headings */}
      <h4 
        className="text-center mb-2 text-lg font-Ovo" 
        data-aos="fade-down"
      >
        What I Offer
      </h4>

      <h2 
        className="text-center text-5xl font-Ovo" 
        data-aos="fade-up"
      >
        SEO Services in Calicut
      </h2>

      {/* DESCRIPTION */}
      <p 
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo" 
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        Looking for reliable{" "}
        <Link
          to="/services"
          className="font-semibold text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
        >
          SEO services in Calicut
        </Link>
        ? I help businesses improve their online visibility, increase organic traffic,
        and achieve higher rankings on Google with proven SEO strategies.
      </p>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-auto gap-6 my-10">
        {services.map((service, index) => (
          <div
            key={service.name}
            className="group border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 
            hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 
            duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150} // stagger animation
          >
            {/* ICON */}
            <div className="mb-4">
              <div className="inline-flex items-center justify-center 
                p-3 rounded-xl 
                bg-gray-100 dark:bg-gray-800
                shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]
                text-blue-600 dark:text-white">
                {service.icon}
              </div>
            </div>

            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.name}
            </h3>

            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-20" data-aos="fade-up" data-aos-delay="300">
        <Link
          to="/services"
          className="relative group px-3 py-2 rounded-full 
                    text-sm font-semibold tracking-wide overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r 
                    from-lime-400 via-green-400 to-lime-400 
                    opacity-70 blur-lg group-hover:opacity-100 
                    transition duration-500"></span>

          <span className="relative z-10 px-6 py-2 rounded-full 
                    bg-black text-white flex items-center gap-2 
                    group-hover:bg-white group-hover:text-black 
                    transition duration-300">
            Explore More Services
            <span className="group-hover:translate-x-1 transition">
              →
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}