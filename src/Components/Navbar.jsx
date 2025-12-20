import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { Menu, X } from "lucide-react";

/**
 * Flexible Navbar Component
 */
const Navbar = ({ links = [], logo, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            {logo || (
              <div
                className={`text-2xl font-bold transition-colors ${
                  scrolled ? "text-emerald-700" : "text-emerald-800"
                }`}
              >
                Bina <span className="text-amber-500">Insani</span>
              </div>
            )}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  to={link.href}
                  className={`!px-4 !py-2 transition-all ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50 scale-105"
                      : scrolled
                      ? "text-gray-700 hover:text-emerald-600"
                      : "text-emerald-900 hover:text-emerald-700 hover:bg-white/20"
                  }`}
                >
                  {link.label}
                </Button>
              );
            })}
            <Button
              variant="primary"
              to="/contact"
              className="ml-4 shadow-emerald-500/20"
            >
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-emerald-700 hover:bg-emerald-50"
                  : "text-emerald-800 hover:bg-white/20"
              }`}
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-emerald-900/40 backdrop-blur-sm"
          onClick={toggleMenu}
        />
        <div
          className={`absolute right-4 top-20 w-[calc(100%-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          <div className="p-6 space-y-3">
            {links.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  to={link.href}
                  className={`!justify-start text-lg w-full ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Button>
              );
            })}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Button
                variant="primary"
                to="/contact"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
