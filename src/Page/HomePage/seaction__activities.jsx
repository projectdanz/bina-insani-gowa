import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Button from "../../Components/Button";

const activities = [
  {
    title: "Mengenal Tumbuhan: Sayur Kangkung",
    date: "20 Juni 2025",
    category: "Edukasi Alam",
    image:
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mengenal Tumbuhan: Sayur Terong",
    date: "15 Juni 2025",
    category: "Edukasi Alam",
    image:
      "https://images.unsplash.com/photo-1615484477201-9f4953340fab?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mengunjungi Pabrik Cokelat",
    date: "10 Juni 2025",
    category: "Field Trip",
    image:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop",
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
              className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs tracking-widest uppercase mb-4"
            >
              Kegiatan Terbaru
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-emerald-950 leading-tight"
            >
              Momen Seru di{" "}
              <span className="text-emerald-600">Bina Insani</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              to="/activities"
              rightIcon={<ArrowRight size={18} />}
            >
              Lihat Semua Kegiatan
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
              className="group bg-white rounded-3xl overflow-hidden border border-emerald-50 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold uppercase shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-emerald-600/60 text-sm font-medium mb-4">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  Siswa diajak untuk belajar secara langsung mengenai alam dan
                  industri, memberikan pengalaman berharga yang tak terlupakan.
                </p>
                <div className="pt-4 border-t border-emerald-50">
                  <button className="flex items-center gap-2 text-emerald-700 font-bold text-sm group-hover:gap-3 transition-all">
                    Baca Selengkapnya <ArrowRight size={16} />
                  </button>
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
