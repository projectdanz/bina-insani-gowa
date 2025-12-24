import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { Menu, X } from "lucide-react";

import logoImg from "../assets/image/icon/iconBinaInsani.png";

/**
 * Flexible Navbar Component
 */
const Navbar = ({ links = [], logo, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isDarkPage =
    location.pathname === "/about" || location.pathname === "/";
  // On /contact, the hero is light green/white, so navbar should be dark variant when not scrolled
  const isLightPage = location.pathname === "/contact";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg py-3 shadow-premium border-b border-white/20"
          : "bg-transparent py-5"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div
              className={`p-1.5 rounded-xl transition-all duration-300 ${
                scrolled ? "bg-primary/5" : "bg-white/10 backdrop-blur-md"
              }`}
            >
              <img
                src={logoImg}
                alt="Bina Insani Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
            {logo || (
              <div
                className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
                  scrolled || isLightPage ? "text-primary" : "text-white"
                }`}
              >
                Bina Insani
              </div>
            )}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  to={link.href}
                  className={`!px-5 !py-2.5 rounded-xl transition-all duration-300 font-bold ${
                    isActive
                      ? "text-primary bg-primary/10 shadow-sm"
                      : scrolled || isLightPage
                      ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                      : "text-white hover:text-white hover:bg-white/20"
                  }`}
                >
                  {link.label}
                </Button>
              );
            })}
            <div className="ml-4 pl-4 border-l border-gray-200/50 h-8 flex items-center">
              <Button
                variant="primary"
                to="/contact"
                className="shadow-premium hover:scale-105 active:scale-95"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pr-2">
            <button
              onClick={toggleMenu}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                scrolled || isLightPage
                  ? "text-primary bg-primary/5 hover:bg-primary/10 active:scale-90"
                  : "text-white bg-white/10 hover:bg-white/20 backdrop-blur-md active:scale-90"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
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
          className="absolute inset-0 bg-primary/20 backdrop-blur-md"
          onClick={toggleMenu}
        />
        <div
          className={`absolute right-4 top-20 w-[calc(100%-2rem)] max-w-sm bg-white rounded-[2rem] shadow-premium overflow-hidden border border-white/50 transition-all duration-500 transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="p-6 space-y-3">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 px-3">
              Menu Utama
            </div>
            {links.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  to={link.href}
                  className={`!justify-start text-base w-full !px-5 !py-3.5 rounded-2xl transition-all ${
                    isActive
                      ? "text-primary bg-primary/10 font-black shadow-sm"
                      : "text-gray-600 font-bold hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Button>
              );
            })}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Button
                variant="primary"
                to="/contact"
                size="lg"
                className="w-full shadow-premium rounded-2xl py-4"
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
