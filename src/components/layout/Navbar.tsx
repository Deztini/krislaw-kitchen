import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import logo from "../../assets/krislaw.png"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "#menu" },
  { label: "Contact Us", href: "#contact" },
  { label: "About Us", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-6xl mx-auto px-1 py-4 flex items-center gap-70">
        <Link to="/" className="flex items-center gap-7">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <span className="font-poppins text-[#F5F5F5] text-base tracking-wide">
            Krislaw Kitchen
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="
                  font-poppins text-lg font-medium text-[#FFFFFF]
                  hover:text-white relative
                  after:absolute after:-bottom-1 after:left-0
                  after:w-0 after:h-0.5 after:bg-[#D9D9D9]
                  after:transition-all after:duration-300
                  hover:after:w-full transition-colors duration-200
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>


        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`
          md:hidden bg-black/95 backdrop-blur-md
          transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-80 border-t border-white/10" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col px-6 py-4 gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="font-sans text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
