import { useEffect, useState } from "react";

export default function PortfolioLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  const orbitItems = [...Array(6)];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 9999
    }}>
      {/* Orbit Container */}
      <div style={{
        position: 'relative',
        width: '200px',
        height: '200px',
      }}>
        {/* Central 3D Rotating Orb */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '80px',
          height: '80px',
          marginTop: '-40px',
          marginLeft: '-40px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #38bdf8, #a78bfa)',
          boxShadow: '0 0 40px rgba(56,189,248,0.7), 0 0 80px rgba(167,139,250,0.5)',
          animation: 'orbRotate 2s linear infinite'
        }}></div>

        {/* Orbiting Dots */}
        {orbitItems.map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: `linear-gradient(90deg, #38bdf8, #f472b6)`,
            transform: `rotate(${i*60}deg) translateX(90px)`,
            transformOrigin: '0 0',
            animation: `dotOrbit ${2 + i*0.2}s linear infinite`,
            animationDelay: `${i*0.05}s`,
            boxShadow: '0 0 12px rgba(56,189,248,0.7)'
          }}></div>
        ))}
      </div>

      {/* Portfolio Text */}
      <h1 style={{
        marginTop: '30px',
        fontSize: '28px',
        fontWeight: 800,
        background: 'linear-gradient(90deg, #38bdf8, #a78bfa, #f472b6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'hueRotate 3s linear infinite'
      }}>Aswanth Portfolio</h1>

      <style>{`
        @keyframes orbRotate {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }

        @keyframes dotOrbit {
          0% { transform: rotate(0deg) translateX(90px); }
          100% { transform: rotate(360deg) translateX(90px); }
        }

        @keyframes hueRotate {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
