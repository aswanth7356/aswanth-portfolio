import { Helmet } from 'react-helmet'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Preloader from './components/Preloader'

export default function App() {
    return (
        <>


            {/* ============== SEO Metadata ================ */}

            <Helmet>
                {/* Page Title */}
                <title>Aswanth Portfolio Website</title>

                {/* Meta Description & Keywords */}
                <meta
                    name="description"
                    content="Aswanth Portfolio Website – SEO-focused portfolio showcasing projects, skills, and achievements."
                />
                <meta
                    name="keywords"
                    content="Aswanth Portfolio Website, SEO Portfolio, SEO Projects, SEO Skills"
                />

                {/* Open Graph / Social Sharing */}
                <meta property="og:title" content="Aswanth Portfolio Website" />
                <meta property="og:description" content="Aswanth Portfolio Website – SEO-focused portfolio showcasing projects, skills, and achievements." />
                <meta property="og:image" content="https://aswanth-portfolio-eta.vercel.app/assets/portfolio-preview.png" />
                <meta property="og:url" content="https://aswanth-portfolio-eta.vercel.app/" />
                <meta property="og:type" content="website" />

                {/* Structured Data */}
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
                                "https://www.linkedin.com/in/yourprofile",
                                "https://github.com/yourusername"
                            ]
                        }
                    `}
                </script>
            </Helmet>


            {/* ========================================================== */}

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
    )
}