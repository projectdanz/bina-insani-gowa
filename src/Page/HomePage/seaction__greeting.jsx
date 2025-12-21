import React from "react";
import { motion } from "framer-motion";
import KepsekImage from "../../assets/image/hero_image_kepsek.jpeg"

const Seaction__greeting = () => {
  return (
    <section className="py-20 bg-emerald-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50 -ml-40 -mb-40"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Principal Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-600/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-emerald-200 shadow-2xl">
                {/* Replace with actual principal image when available */}
                <div className="w-full h-full flex items-center justify-center text-emerald-800 font-bold bg-emerald-100">
                  <img src={KepsekImage} alt="" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-emerald-800 font-bold text-lg leading-tight">
                  Hj. Rasidah, SE
                </p>
                <p className="text-emerald-600 text-sm font-medium">
                  Kepala Sekolah
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <div className="inline-block px-4 py-1 rounded bg-emerald-100 text-emerald-700 font-bold text-sm tracking-widest uppercase mb-4">
                Sambutan Kepala Sekolah
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-emerald-900 leading-tight">
                Assalamu’alaikum warahmatullahi wabarakatuh
              </h2>

              <p className="font-medium text-emerald-800 italic border-l-4 border-emerald-300 pl-4">
                "Segala puji bagi Allah Subhanahu wa Ta’ala, yang telah
                melimpahkan rahmat, nikmat, serta hidayah-Nya kepada kita semua.
                Shalawat dan salam semoga tercurah kepada junjungan kita, Nabi
                Muhammad Shallallahu ‘alaihi wa sallam."
              </p>

              <div className="space-y-4">
                <p>
                  Yang saya hormati Ketua Yayasan Bina Insani, Bapak H. Andi
                  Emil Salim, SE, M.Ak, para orang tua siswa, bapak/ibu dewan
                  guru, serta seluruh siswa-siswi kebanggaan kami.
                </p>
                <p>
                  Sekolah Islam Bina Insani bukan hanya tempat menimba ilmu
                  dunia, tetapi juga tempat membentuk kepribadian Islam yang
                  kokoh, generasi yang cakap dalam dua bahasa (Arab dan
                  Inggris), hafal Al-Qur’an, beradab, dan cinta terhadap bangsa
                  dan agamanya.
                </p>
                <p>
                  Anak-anakku sekalian, kalian adalah generasi emas. Teruslah
                  rajin belajar, taat kepada guru dan orang tua, serta perkuat
                  akhlak dan iman kalian. Semoga Sekolah Islam Bina Insani terus
                  diberi keberkahan untuk mencetak generasi Qur’ani yang
                  berwawasan global.
                </p>
              </div>

              <div className="pt-6">
                <p className="font-bold text-emerald-900">
                  Wassalamu’alaikum warahmatullahi wabarakatuh.
                </p>
                {/* <div className="mt-8 flex items-center gap-4">
                  <div className="h-10 w-40 bg-gray-100 rounded flex items-center justify-center text-gray-400 italic text-sm">
                    Tanda Tangan
                  </div>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Seaction__greeting;
