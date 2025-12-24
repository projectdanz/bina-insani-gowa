import React from "react";
import { motion } from "framer-motion";
import { History, Target, Eye, TrendingUp, CheckCircle2 } from "lucide-react";
import SectionHeader from "../../Components/SectionHeader";

const About = () => {
  const improvements = [
    "Mengganti metode belajar membaca Al-Qur’an dari Iqro’ ke Tilawati",
    "Mengikutsertakan guru-guru dalam pelatihan metode Tilawati",
    "Pelatihan untuk operator sekolah",
    "Training kelas inklusi untuk menyambut keberagaman kemampuan siswa",
    "Pembinaan Iman dan Taqwa untuk guru yang dilakukan rutin setiap pekan",
  ];

  const missionItems = [
    "Menyelenggarakan pendidikan yang mengintegrasikan nilai-nilai Islam",
    "Membiasakan penggunaan bahasa  Inggris dan bahasa Arab  dalam aktivitas pembelajaran dan keseharian.",
    "Menanamkan kecintaan terhadap Al-Qur’an melalui pembelajaran tajwid, tahfidz, dan tadabbur.",
  ];

  const tkPrograms = [
    "Hafalan Surah-surah",
    "Sholat Dhuha Setiap Hari",
    "BTQ (Baca Tulis Al-Qur'an)",
    "Baca Tulis Bahasa Indonesia (BTI)",
    "Bacaan Sholat",
    "Cooking Class",
    "Manasik Haji dan Umroh, Futsal dan Senam Sehat",
    "Dan lain-lain",
  ];

  const sditPrograms = [
    "Menguasai dua Bahasa Bilingual (Arab dan Inggris)",
    "Hafalan Juz 30",
    "Hafalan Hadits",
    "Mengaji Metode tilawati",
    "OUTING CLASS",
    "Kegiatan Schooling",
    "Dan lain-lain",
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      {/* Page Header (Hero Lite) */}
      <section className="bg-[#0A7D54] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Tentang Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Membangun generasi Qur'ani yang berwawasan global melalui pendidikan
            Islam yang berkualitas dan profesional.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-primary/5 aspect-video flex items-center justify-center">
                  {/* <img src={hero_location} alt="" /> */}
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <History size={64} className="text-primary/20" />
                  </div>
                  <p className="absolute bottom-6 left-6 text-primary font-bold bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm">
                    Didirikan Tahun 2020
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <SectionHeader
                title="Sejarah Singkat"
                subtitle="Perjalanan Kami"
                align="left"
              />
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Sekolah Islam Bina Insani adalah lembaga pendidikan Islam yang
                  menaungi jenjang Taman Kanak-Kanak (TK) dan Sekolah Dasar
                  Islam Terpadu (SDIT).
                </p>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-4">
                  <p className="text-primary font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Kurikulum yang digunakan:{" "}
                    <span className="text-primary">Kurikulum Merdeka</span>
                  </p>
                </div>
                <p>
                  Fokus utama pendidikan di SDIT Bina Insani adalah pengembangan
                  dua bahasa asing—Bahasa Arab dan Bahasa Inggris (Bilingual)—di
                  samping tetap memprioritaskan pendidikan ukhrawi seperti
                  membaca Al-Qur'an, tahfidz, dan berbagai program penunjang
                  keislaman lainnya.
                </p>
                <p>
                  Sekolah ini didirikan pada tahun 2020, dengan semangat dan
                  tekad kuat untuk menghadirkan pendidikan Islam yang
                  berkualitas di Gowa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader
            title="Program Unggulan"
            subtitle="Keunggulan Kurikulum"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* TK Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 rounded bg-secondary/10 text-secondary font-bold text-sm tracking-widest uppercase">
                TK Islam Bina Insani
              </div>
              <div className="grid grid-cols-1 gap-4">
                {tkPrograms.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-soft hover:shadow-premium hover:border-secondary/20 hover:bg-secondary/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* SDIT Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 text-primary font-black text-xs tracking-[0.2em] uppercase">
                SDIT Islam Bina Insani
              </div>
              <div className="grid grid-cols-1 gap-4">
                {sditPrograms.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-soft hover:shadow-premium hover:border-primary/20 hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader title="Visi & Misi" subtitle="Tujuan Kami" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
            {/* Visi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-premium border border-primary/5"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-inner">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black text-primary mb-6">Visi</h3>
              <p className="text-xl text-primary/80 leading-relaxed font-bold italic border-l-4 border-secondary pl-6">
                "Terwujudnya generasi yang berkepribadian Islam, yang menguasai
                ilmu pengetahuan dan mampu menghadapi tantangan zaman."
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary p-10 rounded-[2.5rem] shadow-premium text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-tertiary mb-8 shadow-inner relative z-10">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Misi</h3>
              <ul className="space-y-4">
                {missionItems.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2
                      size={24}
                      className="text-tertiary shrink-0 mt-0.5"
                    />
                    <span className="text-white/80 text-lg leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Improvement Strategy Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 -mr-48 -mb-48"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <SectionHeader
                title="Peningkatan Mutu & Profesionalisme"
                subtitle="Langkah Strategis"
                align="left"
              />
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Seiring bertambahnya kepercayaan dari kalangan masyarakat kelas
                menengah (middle class), Sekolah Islam Bina Insani terus
                melakukan peningkatan mutu pendidikan melalui berbagai langkah
                strategis.
              </p>
              <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">
                    Komitmen Ke Depan
                  </h4>
                  <p className="text-primary/70">
                    Terus beradaptasi dengan perkembangan zaman & sinergi dengan
                    orang tua.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-4">
              {improvements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 shadow-soft flex gap-5 items-center group hover:bg-primary/5 hover:border-primary/20 hover:shadow-premium transition-all cursor-default"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-bold leading-tight">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 italic">
            "Mencetak generasi yang berkepribadian Islam, cakap berbahasa, dan
            unggul dalam akhlak"
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
