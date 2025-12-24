import React from "react";
import { motion } from "framer-motion";
import ChairpersonImage from "../../assets/image/hero_image_ket_yayasan.jpeg";

const Seaction__greetingChairman = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-60 -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 -mr-40 -mb-40"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Chairperson Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary/10 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-secondary font-bold bg-secondary/5">
                  <img
                    src={ChairpersonImage}
                    alt="Ketua Yayasan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border-l-4 border-secondary max-w-[80%] sm:max-w-none">
                <p className="text-primary-950 font-bold text-sm sm:text-lg leading-tight">
                  H. Andi Emil Salim, SE, M.Ak
                </p>
                <p className="text-secondary text-xs sm:text-sm font-medium">
                  Ketua Yayasan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <div className="inline-block px-4 py-1 rounded bg-secondary/10 text-secondary font-bold text-sm tracking-widest uppercase mb-4">
                Sambutan Ketua Yayasan
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-primary-950 leading-tight">
                Membangun Generasi Madani Berbasis Al-Qur'an
              </h2>

              <p className="font-medium text-secondary italic border-l-4 border-secondary/30 pl-4">
                "Pendidikan adalah investasi terbaik bagi masa depan. Di Bina
                Insani, kami berkomitmen untuk menyelaraskan keunggulan akademik
                dengan kedalaman spiritual."
              </p>

              <div className="space-y-4">
                <p>
                  Visi kami adalah menciptakan ekosistem pendidikan yang tidak
                  hanya unggul dalam prestasi, tetapi juga kaya akan nilai-nilai
                  adab dan akhlakul karimah. Kami percaya bahwa setiap anak
                  memiliki potensi unik yang harus diasah dengan pendekatan yang
                  tepat.
                </p>
                <p>
                  Melalui dukungan fasilitas yang memadai dan kurikulum yang
                  integratif, yayasan terus berupaya memberikan yang terbaik
                  bagi pengembangan karakter siswa. Kami mengajak seluruh elemen
                  sekolah dan orang tua untuk bersinergi mewujudkan cita-cita
                  mulia ini.
                </p>
                <p>
                  Semoga Allah SWT senantiasa meridhai setiap langkah kita dalam
                  mencetak generasi kebanggaan umat dan bangsa.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Seaction__greetingChairman;
