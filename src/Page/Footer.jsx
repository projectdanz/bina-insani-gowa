import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Heart,
  ArrowRight,
} from "lucide-react";
import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa6";
import logoImg from "../assets/image/icon/iconBinaInsani.png";
import Button from "../Components/Button";

const Footer = () => {
  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Kontak Kami", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/sekolah.islam.bina.insani?igsh=MWFpcDJkdmV3aW55Zg==",
      target: "_blank",
      label: "Instagram",
    },
    {
      icon: <FaYoutube size={20} />,
      href: "https://youtube.com/@sekolahislambinainsani?si=Qy7nMBDtQYel-teZ",
      target: "_blank",
      label: "YouTube",
    },
    {
      icon: <FaTiktok size={20} />,
      href: "https://www.tiktok.com/@sekolahislambinainsani?_r=1&_t=ZS-92PRqnyAJj5",
      target: "_blank",
      label: "TikTok",
    },
  ];

  return (
    <footer className="bg-[#0A7D54] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A7D54]/20 rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <img
                src={logoImg}
                alt="Bina Insani Logo"
                className="h-12 w-12 object-contain"
              />
              <div className="text-2xl sm:text-3xl font-black tracking-tight">
                Bina Insani
              </div>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Lembaga pendidikan Islam berkualitas yang berfokus pada
              pembentukan karakter Qur'ani dan kecakapan global (Bilingual).
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white">Navigasi</h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white">Kontak Kami</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start text-white/70">
                <MapPin className="shrink-0 text-secondary mt-1" size={20} />
                <p className="text-sm leading-relaxed">
                  Jln. H.M.Yasin Limpo, Mutiara Indah Village Ruko C No 20,
                  <br />
                  21 Samata, Gowa
                </p>
              </div>
              <div className="flex gap-4 items-center text-white/70">
                <Phone className="shrink-0 text-secondary" size={20} />
                <p className="text-sm">0812-4244-4227</p>
              </div>
              <div className="flex gap-4 items-center text-white/70">
                <Mail className="shrink-0 text-secondary" size={20} />
                <p className="text-sm">sekolahislambinainsani@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="bg-primary/10 border border-primary/20 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20 shrink-0">
              <MessageCircle size={28} />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Butuh informasi pendaftaran?
              </h4>
              <p className="text-white/60 text-sm">
                Hubungi admin kami untuk konsultasi gratis.
              </p>
            </div>
          </div>
          <Button
            variant="accent"
            to="/contact"
            className="w-full md:w-auto shadow-secondary/10 py-4 justify-center"
            onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
          >
            Hubungi Sekarang
          </Button>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © 2025 Sekolah Islam Bina Insani. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Dibuat dengan</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>Peduli Palestina</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
