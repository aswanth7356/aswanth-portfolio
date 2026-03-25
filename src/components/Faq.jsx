import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSample() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  const faqs = [
    {
      question: "Who is Aswanth?",
      answer:
        "I’m an aspiring SEO and digital marketing professional from Calicut, currently gaining hands-on experience in on-page SEO, keyword research, and website optimization to help businesses grow online.",
    },
    {
      question: "Why is Aswanth considered one of the top digital marketing experts in Calicut?",
      answer:
        "I provide practical, goal-focused SEO and digital marketing solutions. With hands-on experience and attention to each business, I help websites grow online in a simple and effective way.",
    },
    {
      question: "How does Aswanth help a business grow through SEO and digital marketing?",
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
          I offer a range of SEO and digital marketing services including on-page SEO, keyword research, content optimization, and website performance improvement.  
          Learn more about my <a href="/services" className="text-blue-600 hover:underline">services here</a>.
        </>
      ),
    },
    {
      question: "Where can I see all of Aswanth’s projects?",
      answer: (
        <>
          You can explore all of my completed projects, websites, and digital marketing work on my <a href="/all-works" className="text-blue-600 hover:underline">All Works page</a>. It showcases my skills, SEO projects, and web solutions in detail.
        </>
      ),
    },
    {
      question: "How are AEO and GEO different from SEO?",
      answer:
        "AEO (Answer Engine Optimization) focuses on optimizing content for voice search and AI-driven results, while GEO (Generative Engine Optimization) targets audiences in specific regions. SEO improves website rankings to increase organic traffic.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-20">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger animation for each card
            className="border rounded-2xl shadow-xl overflow-hidden transition-shadow hover:shadow-2xl"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-5 sm:p-6 bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 flex justify-between items-center transition-colors focus:outline-none"
            >
              <span className="text-base sm:text-lg">{faq.question}</span>
              <span
                className={`text-2xl transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-96 p-5 sm:p-6" : "max-h-0 p-0"
              } bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-blue-100 text-sm sm:text-base`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}