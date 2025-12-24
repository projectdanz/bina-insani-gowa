import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, ExternalLink } from "lucide-react";
import Button from "../../Components/Button";

const activities = [
  {
    title: "Buka Puasa Bersama Syeikh al Fuli",
    videoId: "4Vtzqw7NL58",
    category: "Religi",
  },
  {
    title: "Kunjugan Minatur Rumah Adat Toraja",
    videoId: "kqOOCfmp7jY",
    category: "Budaya",
  },
  {
    title: "Tari Kreasi Islami - Pentas Seni",
    videoId: "1MO22BspXoI",
    category: "Seni",
  },
  {
    title: "Tari Kreasi Islami - Buka Puasa",
    videoId: "ICXGg4UEMII",
    category: "Seni",
  },
  {
    title: "Kunjungan Ke Kebun Binatang",
    videoId: "U6aaD1PYuWs",
    category: "Field Trip",
  },
  {
    title: "Kegiatan Sekolah Seru",
    videoId: "pMjb3jYMlwE",
    category: "Kegiatan",
  },
  {
    title: "Keceriaan Siswa",
    videoId: "bC3JT4gSc1o",
    category: "Kegiatan",
  },
  {
    title: "Pentas Seni Kreatif",
    videoId: "_PPSvRemwJA",
    category: "Seni",
  },
  {
    title: "Belajar di Luar Kelas",
    videoId: "t2nVt0ZGMI4",
    category: "Edukasi",
  },
  {
    title: "Momen Kebersamaan",
    videoId: "0MqF_BOwq8o",
    category: "Sosial",
  },
  {
    title: "Kreativitas Tanpa Batas",
    videoId: "lB24e1Rcn-M",
    category: "Seni",
  },
  {
    title: "Semangat Belajar",
    videoId: "r4B0BJYHai8",
    category: "Edukasi",
  },
  {
    title: "Kegiatan Outdoor",
    videoId: "nfSBlQbSMOo",
    category: "Olahraga",
  },
  {
    title: "Dokumentasi Sekolah",
    videoId: "-FLwo4hToB0",
    category: "Dokumentasi",
  },
];

const Seaction__activities = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4"
            >
              Galeri Video
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-primary-950 leading-tight"
            >
              Momen Seru di <span className="text-primary">Bina Insani</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              href="https://www.youtube.com/@sekolahislambinainsani"
              target="_blank"
              rightIcon={<ExternalLink size={18} />}
            >
              Lihat Channel Youtube
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Image Container */}
              <a
                href={`https://youtube.com/shorts/${item.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-80 overflow-hidden cursor-pointer"
              >
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center scale-90 opacity-80 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-xl overflow-hidden">
                    <Play size={28} className="ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-primary text-xs font-bold uppercase shadow-sm">
                    {item.category}
                  </span>
                </div>
              </a>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-950 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <a
                    href={`https://youtube.com/shorts/${item.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </h3>
                <div className="pt-4 border-t border-primary/5">
                  <a
                    href={`https://youtube.com/shorts/${item.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Tonton Video <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seaction__activities;
