import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/members", label: "MEMBERS" },
    { to: "/gallery", label: "GALLERY" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-lg">
            NHATRE{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]">
              TEAM
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="relative block text-sm font-medium pb-2 group"
                >
                  {/* Text thường */}
                  <span
                    className={`transition-opacity duration-300 ${
                      active ? "opacity-0" : "opacity-100 text-white"
                    } group-hover:opacity-0`}
                  >
                    {link.label}
                  </span>

                  {/* Text gradient */}
                  <span
                    className={`absolute inset-0 transition-all duration-300 ${
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-70"
                    } bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent`}
                  >
                    {link.label}
                  </span>

                  {/* 🔥 Glow underline */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 transition-all duration-300 ${
                      active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 group-hover:opacity-60 group-hover:scale-90"
                    }`}
                  >
                    <div className="relative w-16 h-[2px]">
                      {/* line chính */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                      {/* glow (hover nhẹ hơn) */}
                      <div
                        className={`absolute inset-0 blur-md bg-gradient-to-r from-transparent via-amber-500 to-transparent ${
                          active ? "opacity-90" : "opacity-40"
                        }`}
                      />

                      {/* điểm sáng giữa */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 rounded-full blur-md ${
                          active
                            ? "w-8 h-[6px] opacity-90 bg-amber-400"
                            : "w-6 h-[4px] opacity-60 bg-amber-400"
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Desktop social */}
            <div className="hidden md:flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/80 rounded-lg px-4 py-4 space-y-3 text-center">
            {/* Mobile nav links */}
            {navLinks.map((link) => {
              const active = isActive(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="relative block text-sm font-medium pb-3 group"
                >
                  {/* Text thường */}
                  <span
                    className={`transition-opacity duration-300 ${
                      active
                        ? "opacity-0"
                        : "opacity-100 text-white group-hover:opacity-0"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Text gradient */}
                  <span
                    className={`absolute inset-0 transition-all duration-300 ${
                      active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 group-hover:opacity-70 group-hover:scale-100"
                    } bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent ${
                      active
                        ? "drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]"
                        : "group-hover:drop-shadow-[0_0_6px_rgba(255,165,0,0.6)]"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* 🔥 Glow underline */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 transition-all duration-300 ${
                      active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 group-hover:opacity-60 group-hover:scale-100"
                    }`}
                  >
                    <div className="relative w-20 h-[2px]">
                      {/* line chính */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                      {/* glow lan */}
                      <div
                        className={`absolute inset-0 blur-md bg-gradient-to-r from-transparent via-amber-500 to-transparent ${
                          active ? "opacity-70" : "opacity-40"
                        }`}
                      />

                      {/* điểm sáng giữa */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 rounded-full blur-md ${
                          active
                            ? "w-10 h-[6px] opacity-90 bg-amber-400"
                            : "w-8 h-[4px] opacity-60 bg-amber-400"
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Divider */}
            <div className="border-t border-gray-700 pt-3"></div>

            {/* Mobile social */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
