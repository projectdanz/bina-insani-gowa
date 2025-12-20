import React from "react";
import hero1 from "../../assets/image/card/hero_image_card1.jpeg";
import hero2 from "../../assets/image/card/hero_image_card2.jpeg";
import hero3 from "../../assets/image/card/hero_image_card3.jpeg";
import Button from "../../Components/Button";

const Seaction__cardPerformance = () => {
  const performances = [
    {
      category: "CULTURE PERFORMANCE",
      title: "Persembahan Lagu Daerah Oleh Siswa Bina Insani",
      description:
        "Suara merdu anak-anak yang penuh semangat membawakan lagu daerah khas Nusantara. Penampilan ini bukan hanya hiburan, tapi juga menjadi wadah melestarikan budaya bangsa sejak usia dini.",
      image: hero1,
      accent: "primary",
    },
    {
      category: "TRADITIONAL DANCE",
      title: "Tarian Nusantara: Merajut Keindahan Budaya",
      description:
        "Gerakan lincah, penuh ekspresi, dan penuh makna. Para siswa menampilkan tarian tradisional yang memukau, sebagai wujud cinta dan bangga akan warisan leluhur Indonesia.",
      image: hero2,
      accent: "accent",
    },
    {
      category: "ACHIEVEMENT DAY",
      title: "Apresiasi Prestasi Dan Kreativitas Siswa",
      description:
        "Momen bahagia saat para siswa menerima penghargaan atas penampilan terbaik mereka. Sebuah bentuk apresiasi yang menumbuhkan rasa percaya diri, semangat berkarya, dan cinta terhadap budaya.",
      image: hero3,
      accent: "primary",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">
            Penampilan & Prestasi
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Kreativitas Tanpa <span className="text-accent">Batas</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lihat bagaimana siswa-siswi Bina Insani Gowa mengembangkan bakat dan
            melestarikan budaya melalui berbagai kegiatan positif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {performances.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200/60 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 flex flex-col border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold tracking-widest uppercase shadow-lg ${
                      item.accent === "primary"
                        ? "bg-primary/90 text-white"
                        : "bg-accent/90 text-primary"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
                <div className="pt-4 mt-auto">
                  <Button
                    variant={item.accent === "primary" ? "outline" : "accent"}
                    size="sm"
                    className="w-full group/btn"
                    rightIcon={
                      <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    }
                  >
                    Selengkapnya
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seaction__cardPerformance;
