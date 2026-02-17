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
import Allwok from './components/Allwok'


export default function App() {
    return (
        <>


            {/* ============== SEO Metadata ================ */}

            <Helmet>
                <title>Aswanth Portfolio Website | SEO Specialist Portfolio Online</title>

                <meta
                    name="description"
                    content="Aswanth Portfolio Website – Explore SEO projects, skills, strategies, and achievements by SEO Specialist Aswanth. View portfolio, case studies, and SEO results."
                />

                <meta
                    name="keywords"
                    content="Aswanth Portfolio Website, SEO Portfolio, SEO Projects, SEO Skills, SEO Results, SEO Case Studies"
                />

                <link rel="canonical" href="https://aswanth-portfolio-eta.vercel.app/" />

                {/* Open Graph */}
                <meta property="og:title" content="Aswanth Portfolio Website" />
                <meta property="og:site_name" content="Aswanth Portfolio Website" />
                <meta property="og:description" content="Aswanth Portfolio Website – Explore SEO projects, skills, strategies, and achievements by SEO Specialist Aswanth." />
                <meta property="og:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />
                <meta property="og:url" content="https://aswanth-portfolio-eta.vercel.app/" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aswanth Portfolio Website" />
                <meta name="twitter:description" content="Aswanth Portfolio Website – Explore SEO projects, skills, strategies, and achievements by SEO Specialist Aswanth." />
                <meta name="twitter:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />

                {/* Schema */}
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Aswanth Portfolio Website",
        "url": "https://aswanth-portfolio-eta.vercel.app/"
      }
    `}
                </script>

                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Aswanth",
        "url": "https://aswanth-portfolio-eta.vercel.app/",
        "jobTitle": "SEO Specialist",
        "description": "Aswanth Portfolio Website showcasing SEO projects, strategies, and skills.",
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

                {/* All work page */}
                <Route path="/all-work" element={<Allwok />} />
            </Routes>
        </>
    )
}