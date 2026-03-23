import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Preloader from './components/Preloader'
import Blog from './pages/Blog'
import ContactPage from './pages/ContactPage'
import AllWork from './pages/AllWork'
import NotFound from './pages/NotFound'
import AllServices from './pages/AllServices'
import Skills from './components/Skills'
import ScrollTopButton from './components/ScrollTopButton'
import "aos/dist/aos.css";


export default function App() {
    return (
        <>


            {/* ============== SEO Metadata ================ */}

            <Helmet>
                {/* ===== Title & Description ===== */}
                <title>SEO Expert in Calicut – Freelance SEO Specialist | Aswanth P</title>

                <meta
                    name="description"
                    content="Looking for an SEO expert in Calicut? Aswanth P provides expert SEO services to boost rankings, increase traffic, and grow your online business."
                />
                <link rel="canonical" href="https://aswanth-portfolio-eta.vercel.app/" />
                <meta name="robots" content="index, follow" />

                {/* ===== Open Graph ===== */}
                <meta property="og:title" content="SEO Expert in Calicut – Freelance SEO Specialist | Aswanth P" />
                <meta property="og:description" content="Aswanth P is a professional SEO expert in Calicut helping businesses rank higher on Google with technical SEO, on-page SEO, and local SEO strategies." />
                <meta property="og:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />
                <meta property="og:image:alt" content="Aswanth P SEO Portfolio Preview" />
                <meta property="og:url" content="https://aswanth-portfolio-eta.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Aswanth Portfolio" />
                <meta property="og:locale" content="en_IN" />

                {/* ===== Twitter Card ===== */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO Expert in Calicut – Freelance SEO Specialist | Aswanth P" />
                <meta name="twitter:description" content="Expert freelance SEO services in Calicut by Aswanth P. Improve Google rankings, boost traffic, and grow your business with proven SEO strategies." />
                <meta name="twitter:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />

                {/* ===== Website Schema ===== */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Aswanth Portfolio Website",
      "url": "https://aswanth-portfolio-eta.vercel.app/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://aswanth-portfolio-eta.vercel.app/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    `}
                </script>

                {/* ===== Person Schema ===== */}
                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aswanth P",
      "url": "https://aswanth-portfolio-eta.vercel.app/",
      "jobTitle": "SEO Expert",
      "description": "SEO expert in Calicut providing local SEO, technical SEO, on-page optimization, and link building services for businesses.",
      "image": "https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calicut",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.linkedin.com/in/aswanth-clt",
        "https://github.com/aswanth7356"
      ]
    }
    `}
                </script>
            </Helmet>



            {/* ========================================================== */}


            <LenisScroll />
            <ScrollTopButton />
            <Navbar />


            <Routes>
                {/* Home page route */}
                <Route
                    path="/"
                    element={
                        <>
                            <Preloader />
                            {/* <Navbar /> */}

                            <main>
                                <Header />
                                <About />
                                <Skills />
                                <Work />
                                <Contact />
                            </main>
                            <Footer />
                        </>
                    }
                />

                {/* Routing pages */}
                <Route path="/all-work" element={<AllWork />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/services" element={<AllServices />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Catch all invalid routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}