import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Allwok() {
    const navigate = useNavigate()

    return (
        <div className="w-full min-h-screen px-[10%] py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

            {/* ============== SEO Metadata ================ */}
            <Helmet>
                <title>All Work | Aswanth SEO Portfolio</title>

                <meta
                    name="description"
                    content="Explore all SEO works, case studies, and projects by Aswanth. Includes on-page SEO, keyword research, backlink strategies, and website optimization results."
                />

                <meta
                    name="keywords"
                    content="Aswanth SEO Portfolio, All Work, SEO Case Studies, SEO Projects, On Page SEO, Backlink Building, Keyword Research"
                />

                <link
                    rel="canonical"
                    href="https://aswanth-portfolio-eta.vercel.app/all-work"
                />

                {/* Open Graph */}
                <meta property="og:title" content="All Work | Aswanth SEO Portfolio" />
                <meta
                    property="og:description"
                    content="Explore all SEO works, case studies, and projects by Aswanth. Includes on-page SEO, keyword research, backlink strategies, and website optimization results."
                />
                <meta
                    property="og:image"
                    content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png"
                />
                <meta
                    property="og:url"
                    content="https://aswanth-portfolio-eta.vercel.app/all-work"
                />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="All Work | Aswanth SEO Portfolio" />
                <meta
                    name="twitter:description"
                    content="Explore all SEO works, case studies, and projects by Aswanth. Includes on-page SEO, keyword research, backlink strategies, and website optimization results."
                />
                <meta
                    name="twitter:image"
                    content="https://aswanth-portfolio-eta.vercel.app/portfolio-preview.png"
                />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                      {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "All Work | Aswanth SEO Portfolio",
                        "url": "https://aswanth-portfolio-eta.vercel.app/all-work",
                        "description": "Explore all SEO works, case studies, and projects by Aswanth."
                      }
                    `}
                </script>
            </Helmet>

            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">All My Work</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Welcome to my extended portfolio! Here you can see more projects, case studies, and details of the work I have done in SEO, web development, and design.
                </p>
            </div>

            {/* Current Projects */}
            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-center">Current Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Card Placeholder */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="text-6xl mb-4">🚧</div>
                        <h3 className="text-xl font-semibold mb-2">No Projects Yet</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Future projects will be uploaded here. Stay tuned!
                        </p>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-10">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
                >
                    ← Previous
                </button>
            </div>

        </div>
    )
}

export default Allwok
