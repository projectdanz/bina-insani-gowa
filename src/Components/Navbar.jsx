import React, { useState } from "react";
import Button from "./Button";

/**
 * Flexible Navbar Component
 *
 * @param {Object} props
 * @param {'header' | 'footer'} [props.type='header'] - Type of navbar
 * @param {Array<{label: string, href: string}>} props.links - Navigation links
 * @param {React.ReactNode} [props.logo] - Optional logo/brand element
 * @param {string} [props.className] - Additional classes for the container
 */
const Navbar = ({ type = "header", links = [], logo, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Header Navbar (Desktop: Horizontal, Mobile: Hamburger)
  if (type === "header") {
    return (
      <nav
        className={`w-full bg-white shadow-sm sticky top-0 z-50 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              {logo || (
                <div className="text-2xl font-bold text-primary">
                  Bina Insani Gowa
                </div>
              )}
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-4">
              {links.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  href={link.href}
                  className="!px-3 !py-2 text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-slate-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
            onClick={toggleMenu}
          />

          {/* Menu Drawer */}
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-bold text-primary">Menu</div>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-primary hover:bg-slate-100"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {links.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    href={link.href}
                    className="!justify-start text-lg w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Footer Navbar (Always Vertical)
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-white/80 hover:text-accent transition-colors text-sm font-medium py-1"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
