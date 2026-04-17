import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSample() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const faqs = [
    {
      question: "What does an SEO analyst do?",
      answer:
        "An SEO analyst creates strategies and content to connect brands with their target audience online. From optimizing websites to tracking performance, they help drive traffic, engagement, and business growth.",
    },
    {
      question: "How does SEO help businesses?",
      answer:
        "SEO (Search Engine Optimization) helps websites rank higher on search engines like Google. Higher rankings increase website traffic, build trust, and support business growth.",
    },
    {
      question: "Why is Aswanth an SEO expert in Calicut?",
      answer:
        "I provide practical, goal-focused SEO and digital marketing solutions. With hands-on experience and attention to each business, I help websites grow online in a simple and effective way.",
    },
    {
      question: "How does Aswanth stay updated as an SEO expert in India?",
      answer:
        "I stay updated by following Google updates, SEO blogs, and industry experts. I use tools like Semrush and Analytics, test strategies, and refine my approach based on real performance data.",
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
      question: "What services does Aswanth provide?",
      answer: (
        <>
          I offer a range of Digital marketing and{" "}
          <a href="/seo-services" className="text-blue-600 dark:text-blue-400">
            SEO services
          </a>{" "}
          including on-page SEO, keyword research, content optimization, and website performance improvement.
        </>
      ),
    },
    {
      question: "Where can I see all of Aswanth’s work?",
      answer: (
        <>
          You can explore all of my completed{" "}
          <a href="/all-work" className="text-blue-600 dark:text-blue-400">
            SEO work
          </a>
          , including on-page, off-page, local, technical, and many other SEO projects.
        </>
      ),
    },
    {
      question: "How are AEO and GEO different from SEO?",
      answer:
        "AEO (Answer Engine Optimization) focuses on optimizing content for voice search and AI-driven results, while GEO (Generative Engine Optimization) targets region-specific audiences. SEO improves website rankings to increase organic traffic.",
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
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden transition-all"
          data-aos="fade-up"
        >
          <button
            onClick={() =>
              setActiveIndex(activeIndex === realIndex ? null : realIndex)
            }
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {faq.question}
            </span>
            <span
              className={`text-xl text-gray-800 dark:text-white transition-transform ${activeIndex === realIndex ? "rotate-45" : ""
                }`}
            >
              +
            </span>
          </button>

          <div
            className={`transition-all duration-300 ${activeIndex === realIndex
              ? "max-h-40 px-5 pb-5"
              : "max-h-0 overflow-hidden"
              } text-gray-600 dark:text-gray-300`}
          >
            {faq.answer}
          </div>
        </div>
      );
    });

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-up">
        <h2 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Everything you need to know about SEO and digital marketing services.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="space-y-4">{renderFaq(leftFaqs, 0)}</div>
        <div className="space-y-4">{renderFaq(rightFaqs, 5)}</div>
      </div>
    </section>
  );
}