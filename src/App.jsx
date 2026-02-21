import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Preloader from './components/Preloader'
import Blog from './pages/Blog'
import AllWork from './pages/AllWork'


export default function App() {
    return (
        <>


            {/* ============== SEO Metadata ================ */}

            <Helmet>
                <title>Aswanth Portfolio | SEO Specialist in Kerala</title>

                <meta
                    name="description"
                    content="Aswanth P is an SEO Specialist in Kerala helping websites improve rankings using technical SEO, on-page SEO, off-page SEO, keyword research, GA4, and GSC."
                />

                {/* Robots */}
                <meta name="robots" content="index, follow" /> {/* ✅ (EDITED) added */}

                <link rel="canonical" href="https://aswanth-portfolio-eta.vercel.app/" />

                {/* Open Graph */}
                <meta property="og:title" content="Aswanth Portfolio | SEO Specialist in Kerala" />
                <meta property="og:site_name" content="Aswanth Portfolio Website" />
                <meta property="og:description" content="Aswanth P is an SEO Specialist in Kerala helping websites improve rankings using technical SEO, on-page SEO, off-page SEO, keyword research, GA4, and GSC." />
                <meta property="og:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />
                <meta property="og:image:alt" content="Aswanth P SEO Specialist Portfolio Preview" />
                <meta property="og:url" content="https://aswanth-portfolio-eta.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_IN" /> {/* ✅ (EDITED) added */}


                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aswanth Portfolio | SEO Specialist in Kerala" />
                <meta name="twitter:description" content="Aswanth P is an SEO Specialist in Kerala helping websites improve rankings using technical SEO, on-page SEO, off-page SEO, keyword research, GA4, and GSC." />
                <meta name="twitter:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />

                {/* Schema */}
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

                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aswanth P",
      "url": "https://aswanth-portfolio-eta.vercel.app/",
      "jobTitle": "SEO Specialist",
      "description": "Aswanth Portfolio Website showcasing SEO projects, strategies, and skills.",
      "image": "https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png",
      "address": {
        "@type": "Place",
        "name": "Kerala, India"
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

            <Routes>
                {/* Home page route */}
                <Route
                    path="/"
                    element={
                        <>
                            <Preloader />
                            <LenisScroll />
                            <Navbar />
                            <Header />
                            <About />
                            <Services />
                            <Work />
                            <Contact />
                            <Footer />
                        </>
                    }
                />

                {/* Routing pages */}
                <Route path="/all-work" element={<AllWork />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </>
    )
}