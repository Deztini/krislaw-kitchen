import { Link } from "@tanstack/react-router";
import logo from "../../assets/krislaw.png";
import footerBg from "../../assets/footer-image.png";
import facebookIcon from "../../assets/facebook-image.png";
import pinterestIcon from "../../assets/pinterest-image.png";
import whatsappIcon from "../../assets/whatsapp-image.png";
import instagramIcon from "../../assets/ig-image.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "#menu" },
  { label: "Contact us", href: "#contact" },
  { label: "About US", href: "#about" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: facebookIcon },
  { label: "Pinterest", href: "https://pinterest.com", icon: pinterestIcon },
  { label: "WhatsApp", href: "https://wa.me/2347891230", icon: whatsappIcon },
  { label: "Instagram", href: "https://instagram.com", icon: instagramIcon },
];

export function FooterSection() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden mt-20" id="contact">
      <div className="absolute inset-0">
        <img
          src={footerBg}
          alt="Footer background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-8xl mx-20 px-8 pt-12 pb-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Krislaw Kitchen Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <span className="font-poppins text-white text-base font-medium">
              Krislaw Kitchen
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-[#E9BD8D33] w-full mt-7 mb-3" />

        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 justify-between md:gap-150">
          <div className="flex flex-col gap-5">
            <h3 className="font-poppins text-[#E9BD8D] text-2xl font-semibold">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="font-poppins text-[#F5F5F5] text-base">
                (+234) 789-12301
              </li>
              <li className="font-poppins text-[#F5F5F5] text-base">
                info@krislawkitchen.com
              </li>
              <li className="font-poppins text-[#F5F5F5] text-base leading-relaxed">
                Omu-Aran 251103, Irepodun LGA, Kwara State, Nigeria
              </li>
              <li className="font-poppins text-[#F5F5F5] text-base leading-relaxed">
                School Gate Area, Ekiti State University (EKSU),{" "}
                <br className="hidden md:block" />
                Ado-Ekiti 362103, Ekiti State, Nigeria
              </li>
              <li>
                <span className="font-poppins text-[#E9BD8D] text-base font-semibold">
                  Open Hours:{" "}
                </span>
                <span className="font-poppins text-white text-base font-semibold">
                  (8am-7pm) Monday-Sunday
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 ">
            <h3 className="font-poppins text-[#E9BD8D] text-2xl font-semibold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-poppins text-[#F5F5F5] text-base hover:text-[#C9A96E] transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="font-poppins text-[#F5F5F5] text-base hover:text-[#C9A96E] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-poppins text-[#F5F5F5] text-sm text-center mt-7">
          © 2026 &nbsp; Krislaw Kitchen. All rights reserved
        </p>
      </div>
    </footer>
  );
}
