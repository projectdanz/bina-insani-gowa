import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Heart, Send, MapPin } from "lucide-react";
import Button from "../../Components/Button";
import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa6";
import SectionHeader from "../../Components/SectionHeader";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp Admin 1",
      value: "+62 859-3657-2722",
      href: "https://wa.me/+6285936572722",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp Admin 2",
      value: "+62 812-4244-4227",
      href: "https://wa.me/+6281242444227",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sekolahislambinainsani@gmail.com",
      href: "mailto:sekolahislambinainsani@gmail.com",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telepon",
      value: "0812-4244-4227",
      href: "tel:081242444227",
      color: "bg-secondary/10 text-secondary",
    },
  ];

  const socialMedia = [
    {
      icon: <FaYoutube />,
      label: "YouTube",
      name: "Sekolah Islam Bina Insani",
      href: "https://www.instagram.com/sekolah.islam.bina.insani?igsh=MWFpcDJkdmV3aW55Zg==",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      name: "Sekolah Islam Bina Insani",
      href: "https://www.instagram.com/sekolah.islam.bina.insani?igsh=MWFpcDJkdmV3aW55Zg==",
    },
    {
      icon: <FaTiktok />,
      label: "TikTok",
      name: "Sekolah Islam Bina Insani",
      href: "https://www.tiktok.com/@sekolahislambinainsani?_r=1&_t=ZS-92PRqnyAJj5",
    },
  ];

  return (
    <div className="pb-20 overflow-x-hidden">
      {/* Contact Hero */}
      <section className="bg-[#0A7D54] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-60 -mr-48 -mt-48"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <SectionHeader title="Hubungi Kami" subtitle="Kontak & Informasi" light={true} />
          <p className="text-gray-200 text-lg max-w-2xl mx-auto -mt-8">
            Punya pertanyaan atau ingin mendaftarkan putra-putri Anda? Kami siap
            membantu memberikan informasi terbaik untuk masa depan Ananda.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info Grid */}
            <div className="w-full lg:w-1/2 space-y-12">
              <div>
                <h3 className="text-2xl font-black text-primary-950 mb-8 border-l-4 border-primary pl-4">
                  Layanan Cepat
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-soft hover:shadow-premium hover:border-primary/20 transition-all group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-inner ${info.color}`}
                      >
                        {info.icon}
                      </div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">
                        {info.label}
                      </p>
                      <p className="text-primary-950 font-black text-lg break-words">
                        {info.value}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-primary-950 mb-8 border-l-4 border-primary pl-4">
                  Media Sosial
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 text-primary font-bold border border-primary/10 hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 bg-white rounded-[3rem] shadow-premium border border-primary/5 p-10 md:p-14"
            >
              <h3 className="text-3xl font-black text-primary-950 mb-10 border-l-4 border-primary pl-6">
                Kirim Pesan
              </h3>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const { name, whatsapp, subject, message } =
                    Object.fromEntries(formData.entries());
                  const text = `Halo Admin Bina Insani,\n\nNama: ${name}\nWA: ${whatsapp}\nSubjek: ${subject}\n\nPesan:\n${message}`;
                  window.open(
                    `https://wa.me/6285936572722?text=${encodeURIComponent(
                      text
                    )}`,
                    "_blank"
                  );
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-950 ml-1">
                      Nama Lengkap
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-primary/5 border-transparent focus:bg-white focus:border-primary transition-all outline-none text-primary-950 placeholder-primary-900/20"
                      placeholder="Ananda/Bapak/Ibu"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-950 ml-1">
                      Nomor WA
                    </label>
                    <input
                      name="whatsapp"
                      type="tel"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-primary/5 border-transparent focus:bg-white focus:border-primary transition-all outline-none text-primary-950 placeholder-primary-900/20"
                      placeholder="0812..."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-950 ml-1">
                    Subjek
                  </label>
                  <select
                    name="subject"
                    className="w-full px-6 py-4 rounded-2xl bg-primary/5 border-transparent focus:bg-white focus:border-primary transition-all outline-none text-primary-950 appearance-none"
                  >
                    <option>Informasi Pendaftaran</option>
                    <option>Kerjasama</option>
                    <option>Kritik & Saran</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-950 ml-1">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full px-8 py-5 rounded-2xl bg-primary/5 border-2 border-transparent focus:bg-white focus:border-primary transition-all outline-none text-primary-950 placeholder-primary-900/20 shadow-inner"
                    placeholder="Tuliskan pesan Anda di sini..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full py-5 rounded-2xl shadow-xl shadow-primary/20 group"
                  rightIcon={
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  }
                >
                  Kirim Sekarang
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Lokasi Sekolah" subtitle="Kunjungi Kami" />
          <div className="h-[450px] rounded-[2.5rem] overflow-hidden bg-gray-100 border-8 border-gray-50 relative shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15892.408713508127!2d119.467406852922!3d-5.188243621419356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3664532c121%3A0xe67f920f01a61329!2sTK%20-%20SDIT%20Islam%20Bina%20Insani%20Gowa!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border border-primary/10">
              <div className="flex gap-4 items-start">
                <MapPin className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary-950">Alamat Utama</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Jl. Pallantikang 1, Tombolo, Somba Opu, Kabupaten Gowa,
                    Sulawesi Selatan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
