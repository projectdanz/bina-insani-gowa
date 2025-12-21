import Bina_hero from "../../assets/image/bina_hero.jpeg";
import Button from "../../Components/Button";
import { motion } from "framer-motion";

const Seaction__main = () => {
  return (
    <section className="relative w-full h-[650px] md:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={Bina_hero}
          alt="Bina Insani Gowa Hero"
          className="w-full h-full object-cover"
        />
        {/* Modern Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 backdrop-blur-md text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">
              Selamat Datang di Sekolah Kami
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tight mb-2 drop-shadow-xl">
              Sekolah Islam <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Bina Insani Gowa
              </span>
            </h1>

            <div className="text-lg md:text-2xl font-medium text-emerald-50/90 leading-relaxed max-w-2xl mt-4 border-l-4 border-amber-400 pl-6 lg:pl-8 italic">
              <p>
                "Membangun Generasi Beriman yang Menguasai Pengetahuan dan Mampu
                Menghadapi Tantangan Zaman"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <Button
              variant="accent"
              size="lg"
              to="/about"
              className="group"
              rightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              }
            >
              Tentang Kami
            </Button>
            <Button
              variant="light"
              size="lg"
              to="/contact"
              className="!bg-white/10 !border-white/20 !text-white hover:!bg-white/20"
            >
              Hubungi Kami
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,103.4,124.3,114.54,192,112.55,256.35,110.66,277,88,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Seaction__main;
