import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Languages, Shield, Star, Award, Heart } from "lucide-react";

const programs = [
  {
    title: "Bilingual Environment",
    desc: "Pengembangan dua bahasa asing—Bahasa Arab dan Bahasa Inggris—sebagai alat komunikasi dan jendela pengetahuan global.",
    icon: <Languages className="w-8 h-8 text-amber-500" />,
    color: "bg-amber-50",
  },
  {
    title: "Tahfidz Al-Qur'an",
    desc: "Program hafalan Al-Qur'an (Juz 30 untuk SDIT) dengan metode Tilawati yang menyenangkan dan profesional.",
    icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
    color: "bg-emerald-50",
  },
  {
    title: "Karakter Islami",
    desc: "Mencetak generasi yang berkepribadian Islam, memahami aqidah, dan unggul dalam akhlakul karimah.",
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50",
  },
  {
    title: "Life Skills & Creativity",
    desc: "Mengembangkan kemandirian dan kreativitas melalui Cooking Class, Outing Class, dan kegiatan schooling lainnya.",
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    color: "bg-rose-50",
  },
];

const Seaction__programs = () => {
  return (
    <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Star size={14} className="fill-current" /> Unggulan Kami
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
          >
            Mengapa Memilih <br />
            <span className="text-amber-400">Bina Insani Gowa?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-emerald-100/70 text-lg leading-relaxed"
          >
            Kami berkomitmen menghadirkan pendidikan Islam berkualitas yang
            mengintegrasikan nilai-nilai ukhrawi dengan kecakapan global.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-emerald-900/40 border border-emerald-800 hover:border-emerald-600 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
                <div
                  className={`p-4 rounded-2xl ${prog.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {prog.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-emerald-50/70 leading-relaxed text-lg">
                    {prog.desc}
                  </p>
                </div>
              </div>

              {/* Subtle hover effect background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:bg-amber-400/10 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-r from-amber-500 to-amber-600 shadow-2xl shadow-amber-900/20 text-emerald-950 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h3 className="text-3xl font-black mb-2">
              Ingin tahu lebih banyak?
            </h3>
            <p className="text-emerald-900/80 font-medium text-lg leading-relaxed">
              Dapatkan informasi lengkap mengenai kurikulum, pendaftaran, dan
              rincian program setiap jenjang (TK & SDIT) dengan menghubungi
              kami.
            </p>
          </div>
          <div className="shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-emerald-950 text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-emerald-900 transition-all"
            >
              Hubungi Admin <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

export default Seaction__programs;
