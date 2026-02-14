import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // loading time

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="premium-preloader">
      <div className="glass-box">
        <div className="neon-ring"></div>

        <h1 className="premium-title">Loading Portfolio</h1>
        <p className="premium-subtitle">Crafting something awesome 🚀</p>

        <div className="premium-progress">
          <div className="premium-fill"></div>
        </div>
      </div>
    </div>
  );
}
