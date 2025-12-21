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
    "Mencetak lulusan yang mempunyai kepribadian islam, memahami aqidah islam, Pendidikan karakter seni dan keterempilan",
    "Mengembangan Kemandirian anak melalui kegiatan life skil.",
    "Melatih mengembangkan kecerdasan anak dalam berfikir dan berucap",
    "Menyelenggarakan proses pembelajaran yang kreatif dan menyenangkan.",
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
      <section className="bg-emerald-950 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-400 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Tentang <span className="text-amber-400">Kami</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-100/70 text-lg md:text-xl max-w-2xl mx-auto"
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
                <div className="absolute -inset-4 bg-emerald-600/5 rounded-3xl -rotate-2"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-emerald-100 aspect-video flex items-center justify-center">
                  {/* <img src={hero_location} alt="" /> */}
                  <div className="absolute inset-0 bg-emerald-900/10 flex items-center justify-center">
                    <History size={64} className="text-emerald-800/20" />
                  </div>
                  <p className="absolute bottom-6 left-6 text-emerald-800 font-bold bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm">
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
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-4">
                  <p className="text-emerald-900 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Kurikulum yang digunakan:{" "}
                    <span className="text-emerald-700">Kurikulum Merdeka</span>
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
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
              <div className="inline-block px-4 py-1 rounded bg-amber-100 text-amber-700 font-bold text-sm tracking-widest uppercase">
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-amber-200 hover:bg-amber-50 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
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
              <div className="inline-block px-4 py-1 rounded bg-emerald-100 text-emerald-700 font-bold text-sm tracking-widest uppercase">
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:bg-emerald-50 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader title="Visi & Misi" subtitle="Tujuan Kami" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
            {/* Visi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-emerald-100"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black text-emerald-950 mb-6">
                Visi
              </h3>
              <p className="text-xl text-emerald-800/80 leading-relaxed font-medium italic border-l-4 border-amber-400 pl-6">
                "Terwujudnya generasi yang berkepribadian islam, memasuki
                jenjang Pendidikan dasar dengan lebih baik"
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-emerald-900 p-10 rounded-3xl shadow-xl shadow-emerald-900/10 text-white"
            >
              <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center text-emerald-300 mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black mb-6">Misi</h3>
              <ul className="space-y-4">
                {missionItems.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2
                      size={24}
                      className="text-emerald-400 shrink-0 mt-0.5"
                    />
                    <span className="text-emerald-50/80 text-lg leading-tight">
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -mr-48 -mb-48"></div>
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
              <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 text-xl">
                    Komitmen Ke Depan
                  </h4>
                  <p className="text-emerald-700/70">
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
                  className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-center group hover:bg-emerald-50 hover:border-emerald-200 transition-all cursor-default"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
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
