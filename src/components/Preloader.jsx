import { useEffect, useState } from "react";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval;

        interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setFadeOut(true);

                    setTimeout(() => {
                        setLoading(false);
                    }, 800);

                    return 100;
                }
                return prev + 1;
            });
        }, 25); // speed (40ms × 100 = 4 sec)

        return () => clearInterval(interval);
    }, []);

    if (!loading) return null;

    return (
        <div className={`premium-loader ${fadeOut ? "fade-out" : ""}`}>
            {/* Floating Particles */}
            <div className="particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Main Loader */}
            <div className="loader-box">
                <div className="glow-ring">
                    <div className="inner-ring"></div>
                </div>

                <h1 className="loader-title">Aswanth Portfolio</h1>
                <p className="loader-subtitle">Optimizing your experience...</p>

                {/* Progress Bar */}
                <div className="progress-wrapper">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <span className="progress-text">{progress}%</span>
                </div>
            </div>
        </div>
    );
}
