import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSample() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-out-cubic",
      once: true, // whether animation should happen only once
      offset: 100, // offset from the viewport before triggering
    });
  }, []);

  const faqs = [
    {
      question: "Who is Aswanth?",
      answer:
        "I’m an aspiring SEO and digital marketing professional from Calicut, currently gaining hands-on experience in on-page SEO, keyword research, and website optimization to help businesses grow online.",
    },
    {
      question: "Why is Aswanth a leading digital marketing expert in Calicut?",
      answer:
        "I provide practical, goal-focused SEO and digital marketing solutions. With hands-on experience and attention to each business, I help websites grow online in a simple and effective way.",
    },
    {
      question: "How does Aswanth boost business growth with SEO?",
      answer:
        "I create practical SEO strategies and optimize websites based on business goals. By improving online visibility and targeting the right audience, I help attract more traffic and potential customers.",
    },
    {
      question: "How will you help my business grow?",
      answer:
        "I help businesses grow by crafting personalized SEO and digital marketing strategies that connect with the right audience, boost online visibility, and drive measurable results.",
    },
    {
      question: "What makes Aswanth’s approach different from others?",
      answer:
        "I focus on clear planning and simple SEO strategies. I avoid confusing jargon and make digital marketing easy to understand for business owners and clients.",
    },
    {
      question: "What does a SEO analyst do?",
      answer:
        "A SEO analyst creates strategies and content to connect brands with their audience online. From optimizing websites to tracking performance, they help drive traffic, engagement, and business growth.",
    },
    {
      question: "How does SEO help businesses?",
      answer:
        "SEO (Search Engine Optimization) helps websites rank higher on search engines like Google. Higher rankings increase website traffic, build trust, and support business growth.",
    },
    {
      question: "What services does Aswanth provide?",
      answer: (
        <>
          I offer a range of SEO and digital marketing{' '}
          <a href="/services" className="text-blue-600 ">
            services
          </a>{' '}
          including on-page SEO, keyword research, content optimization, and website performance improvement.
        </>
      ),
    },
    {
      question: "Where can I see all of Aswanth’s work?",
      answer: (
        <>
          You can explore all of my completed{' '}
          <a href="/all-work" className="text-blue-600 ">
            SEO work
          </a>
          , including on-page, off-page, local, technical, and many other SEO projects. It showcases my skills, projects, and web solutions in detail.
        </>
      ),
    },
    {
      question: "How are AEO and GEO different from SEO?",
      answer:
        "AEO (Answer Engine Optimization) focuses on optimizing content for voice search and AI-driven results, while GEO (Generative Engine Optimization) targets audiences in specific regions. SEO improves website rankings to increase organic traffic.",
    },
  ];

  // Split into 2 columns
  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5, 10);

  const renderFaq = (faqList, offset) =>
    faqList.map((faq, index) => {
      const realIndex = index + offset;
      return (
        <div
          key={realIndex}
          className="bg-white rounded-xl border shadow-sm overflow-hidden"
          data-aos="fade-up" // <-- Added AOS animation here
        >
          <button
            onClick={() =>
              setActiveIndex(activeIndex === realIndex ? null : realIndex)
            }
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-medium">{faq.question}</span>
            <span
              className={`text-xl transition-transform ${activeIndex === realIndex ? "rotate-45" : ""
                }`}
            >
              +
            </span>
          </button>

          <div
            className={`transition-all duration-300 ${activeIndex === realIndex
              ? "max-h-40 px-5 pb-5"
              : "max-h-0 overflow-hidden"
              } text-gray-600`}
          >
            {faq.answer}
          </div>
        </div>
      );
    });

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-4xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Everything you need to know about SEO and digital marketing services.
        </p>
      </div>

      {/* 2 Column Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* LEFT */}
        <div className="space-y-4">{renderFaq(leftFaqs, 0)}</div>

        {/* RIGHT */}
        <div className="space-y-4">{renderFaq(rightFaqs, 5)}</div>
      </div>
    </section>
  );
}