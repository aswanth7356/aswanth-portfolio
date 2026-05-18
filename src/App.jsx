import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Work from './components/Work'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
// import Preloader from './components/Preloader'
import Blog from './pages/Blog'
import ContactPage from './pages/ContactPage'
import AllWork from './pages/AllWork'
import NotFound from './pages/NotFound'
import AllServices from './pages/AllServices'
import ScrollTopButton from './components/ScrollTopButton'
import Faq from './components/Faq'
import "aos/dist/aos.css";
import Service from './components/Service'
import Experience from './components/Experience'
import Testimonial from './components/Testimonial'
import GetinTouch from './components/GetinTouch'


export default function App() {
    return (
        <>


            {/* ============== SEO Metadata ================ */}

            <Helmet>
                {/* ===== Basic SEO ===== */}
                <title>Best Freelance SEO Expert in Calicut | Aswanth P</title>

                <meta
                    name="description"
                    content="Trusted freelance SEO expert in Calicut, Kerala. I help local businesses get found on Google and attract real customers. Book a free consultation!"
                />

                <meta
                    name="keywords"
                    content="freelance seo expert in calicut, freelance seo consultant calicut, seo specialist kozhikode, seo freelancer kerala, local seo expert calicut"
                />

                <meta name="author" content="Aswanth P" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aswanth-portfolio-eta.vercel.app/" />

                {/* ===== Open Graph ===== */}
                <meta property="og:title" content="Best Freelance SEO Expert in Calicut | Aswanth P" />
                <meta
                    property="og:description"
                    content="Freelance SEO expert in Calicut helping businesses improve rankings, traffic, and online visibility with proven SEO services."
                />
                <meta property="og:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />
                <meta property="og:image:alt" content="Aswanth P SEO Portfolio" />
                <meta property="og:url" content="https://aswanth-portfolio-eta.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Aswanth Portfolio" />
                <meta property="og:locale" content="en_IN" />

                {/* ===== Twitter ===== */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Best Freelance SEO Expert in Calicut | Aswanth P" />
                <meta
                    name="twitter:description"
                    content="Hire a freelance SEO expert in Calicut to improve rankings, increase traffic, and grow your business online."
                />
                <meta name="twitter:image" content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png" />

                {/* ===== Extra SEO ===== */}
                <meta name="language" content="English" />
                <meta name="geo.region" content="IN-KL" />
                <meta name="geo.placename" content="Calicut, Kerala" />
                <meta name="geo.position" content="11.2588;75.7804" />
                <meta name="ICBM" content="11.2588, 75.7804" />
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
                            {/* <Preloader /> */}

                            <main>
                                <Header />
                                <About />
                                <Service />
                                <Experience />
                                <Work />
                                <Testimonial />
                                <Faq />
                                <GetinTouch />
                            </main>
                            <Footer />
                        </>
                    }
                />

                {/* Routing pages */}
                <Route path="/all-work" element={<AllWork />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/seo-services" element={<AllServices />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Catch all invalid routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}