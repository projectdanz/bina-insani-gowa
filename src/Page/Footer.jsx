import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
  Music,
  MessageCircle,
  Heart,
  ArrowRight,
} from "lucide-react";
import Button from "../Components/Button";

const Footer = () => {
  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Kontak Kami", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-emerald-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900 rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="inline-block">
              <div className="text-3xl font-black tracking-tight">
                Bina <span className="text-amber-400">Insani</span>
              </div>
            </Link>
            <p className="text-emerald-100/60 text-lg leading-relaxed max-w-md">
              Lembaga pendidikan Islam berkualitas yang berfokus pada
              pembentukan karakter Qur'ani dan kecakapan global (Bilingual).
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-emerald-950 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-amber-400">Navigasi</h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-emerald-100/70 hover:text-white transition-colors flex items-center gap-2 group"
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
            <h3 className="text-xl font-bold text-amber-400">Kontak Kami</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start text-emerald-100/70">
                <MapPin className="shrink-0 text-amber-400 mt-1" size={20} />
                <p className="text-sm leading-relaxed">
                  Jl. Pallantikang 1, Tombolo, Somba Opu, <br />
                  Kabupaten Gowa, Sulawesi Selatan
                </p>
              </div>
              <div className="flex gap-4 items-center text-emerald-100/70">
                <Phone className="shrink-0 text-amber-400" size={20} />
                <p className="text-sm">0812-4244-4227</p>
              </div>
              <div className="flex gap-4 items-center text-emerald-100/70">
                <Mail className="shrink-0 text-amber-400" size={20} />
                <p className="text-sm">islambinainsanis@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="bg-emerald-900/40 border border-emerald-800 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-amber-400 rounded-2xl flex items-center justify-center text-emerald-950 shadow-lg shadow-amber-400/20">
              <MessageCircle size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">
                Butuh informasi pendaftaran?
              </h4>
              <p className="text-emerald-100/60">
                Hubungi admin kami untuk konsultasi gratis.
              </p>
            </div>
          </div>
          <Button
            variant="accent"
            to="/contact"
            className="shadow-amber-400/10"
            onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
          >
            Hubungi Sekarang
          </Button>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/30 text-sm">
            © 2025 Sekolah Islam Bina Insani. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-emerald-100/40 text-sm">
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
