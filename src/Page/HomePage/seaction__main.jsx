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
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Modern Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md text-secondary text-sm font-bold tracking-widest uppercase mb-4">
              Selamat Datang di Sekolah Kami
            </div> */}

            <h1 className="text-5xl md:text-8xl font-black text-primary leading-[1.1] tracking-tight mb-4 drop-shadow-2xl">
              Sekolah Islam <br />
              <span className="text-white drop-shadow-lg">
                Bina Insani Gowa
              </span>
            </h1>

            <div className="text-lg md:text-2xl font-medium text-white/95 leading-relaxed max-w-2xl mt-8 border-l-4 border-primary pl-6 lg:pl-10 italic backdrop-blur-sm bg-black/5 py-4 rounded-r-2xl">
              <p className="text-white">
                "Membangun Generasi Beriman yang Menguasai Pengetahuan dan Mampu
                Menghadapi Tantangan Zaman"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <Button
              variant="purple"
              size="lg"
              to="/about"
              className="group w-full sm:w-auto justify-center"
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
              className="w-full sm:w-auto justify-center !bg-white/10 !border-white/20 !text-white hover:!bg-white/20"
            >
              Hubungi Kami
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px] md:h-[120px] text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Seaction__main;
