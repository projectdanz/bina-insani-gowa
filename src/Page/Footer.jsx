import React from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";

/**
 * Modern Footer Component for Bina Insani Gowa
 */
const Footer = () => {
  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Katalog Program", href: "/programs" },
    { label: "Informasi Pendaftaran", href: "/register" },
    { label: "Kontak Kami", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      name: "Twitter",
      href: "#",
      icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
    },
    {
      name: "Instagram",
      href: "#",
      icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01",
    },
    {
      name: "YouTube",
      href: "#",
      icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 001.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z",
    },
  ];

  return (
    <footer className="w-full bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand & Address Section */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-accent tracking-tight">
              Bina Insani Gowa
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Mendidik generasi Qurani yang berakhlak mulia, cerdas, dan mandiri
              untuk masa depan yang lebih baik.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-accent shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-sm text-white/80">
                  <p>
                    Jl. H.M. Yasin Limpo, Mutiara Indah Village Ruko C No 20,
                    21,
                  </p>
                  <p>Samata, Kab. Gowa, Sulawesi Selatan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-6">Menu Utama</h3>
            <Navbar type="footer" links={navLinks} />
          </div>

          {/* Social Media & Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-accent mb-6">Ikuti Kami</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                    aria-label={social.name}
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      {social.name === "Instagram" ? (
                        <>
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            d={social.icon}
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                        </>
                      ) : (
                        <path d={social.icon} />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs text-white/50 mb-2 uppercase font-bold tracking-wider">
                Butuh Bantuan?
              </p>
              <Button
                variant="accent"
                size="sm"
                className="w-full"
                leftIcon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                }
              >
                Chat Admin
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2025 Bina Insani Gowa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Term of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
