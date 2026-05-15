import React, { useState } from "react";

function GetinTouch() {
    const [mapActive, setMapActive] = useState(false);

    return (
        <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
                        Get In <span className="text-indigo-600">Touch</span>
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400">
                        Let’s discuss how I can help grow your business online
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

                    {/* LEFT CARD */}
                    <div className="p-8 rounded-2xl bg-white/50 dark:bg-gray-800/40 backdrop-blur-xl border border-white/30 dark:border-gray-700 shadow-xl hover:shadow-2xl transition duration-300">

                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            Contact Details
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Looking for a freelance SEO expert in Calicut? I help businesses grow with
                            smart SEO strategies that improve rankings and drive organic traffic.
                        </p>

                        {/* Info Cards */}
                        <div className="space-y-4">

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100/70 dark:bg-gray-900/40">
                                <span className="text-indigo-600 text-xl">📍</span>
                                <div>
                                    <p className="text-xs text-gray-500">Location</p>
                                    <p className="text-gray-800 dark:text-white font-medium">
                                        Calicut, Kerala, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100/70 dark:bg-gray-900/40">
                                <span className="text-indigo-600 text-xl">📧</span>
                                <div>
                                    <p className="text-xs text-gray-500">Email</p>
                                    <p className="text-gray-800 dark:text-white font-medium">
                                        aswanth1392@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100/70 dark:bg-gray-900/40">
                                <span className="text-indigo-600 text-xl">📞</span>
                                <div>
                                    <p className="text-xs text-gray-500">Phone</p>
                                    <p className="text-gray-800 dark:text-white font-medium">
                                        +91 7356644734
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* CTA */}
                        {/* <a
                            href="mailto:yourmail@gmail.com"
                            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 text-sm font-medium hover:bg-indigo-500 hover:text-white transition"
                        >
                            Send Email
                        </a> */}
                    </div>

                    {/* RIGHT MAP */}
                    <div className="flex flex-col space-y-4">

                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/20">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226632.28788972483!2d75.64600057159177!3d11.25585823058591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e1!3m2!1sen!2sin!4v1778834269103!5m2!1sen!2sin"
                                className={`w-full h-[420px] border-0 transition ${mapActive ? "" : "pointer-events-none"}`}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            {!mapActive && (
                                <button
                                    onClick={() => setMapActive(true)}
                                    className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-medium"
                                >
                                    Click to interact map
                                </button>
                            )}

                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Serving clients in Kozhikode
                            </p>

                            <a
                                href="https://www.google.com/maps/place/Kozhikode,+Kerala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                            >
                                Open Map
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default GetinTouch;