import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );

        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent"
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );

        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle = ({ isActive }) =>
    `transition duration-300 ${isActive ? "text-blue-500" : "hover:text-blue-500"
    }`;

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="./assets/header-bg-color.webp" alt="" className="w-full" />
      </div>

      <nav
        ref={navRef}
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
      >
        <NavLink to="/" aria-label="Go to homepage">
          <img
            src="./assets/A Logo2.png"
            alt="Aswanth Portfolio Logo"
            className="w-28 cursor-pointer mr-14 dark:hidden"
          />
          <img
            src="./assets/A Logo2.png"
            alt="Aswanth Portfolio Logo"
            className="w-28 cursor-pointer mr-14 hidden dark:block"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul
          ref={navLinkRef}
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent"
        >
          <li><NavLink to="/" className={navStyle}>Home</NavLink></li>
          <li><NavLink to="/all-work" className={navStyle}>Works</NavLink></li>
          <li><NavLink to="/services" className={navStyle}>Services</NavLink></li>
          <li><NavLink to="/blog" className={navStyle}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={navStyle}>Contact</NavLink></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} aria-label="Toggle dark mode">
            <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
            <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
          </button>

          <a
            href="./assets/dev-icon.png"
            download
            className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30"
          >
            Resume
            <img
              src="./assets/download-icon.png"
              alt="Download"
              className="w-4 dark:invert"
            />
          </a>

          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open navigation menu"
          >
            <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
            <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={sideMenuRef}
          className="fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition-all duration-500"
        >
          <button
            className="absolute right-6 top-6"
            onClick={closeMenu}
          >
            <img src="./assets/close-black.png" alt="" className="w-5 dark:hidden" />
            <img src="./assets/close-white.png" alt="" className="w-5 hidden dark:block" />
          </button>

          <ul className="flex md:hidden flex-col gap-4 py-20 px-10 h-full bg-rose-50 font-Ovo dark:bg-darkHover dark:text-white">
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/all-work" onClick={closeMenu}>Works</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}