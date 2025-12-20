import Bina_hero from "../../assets/image/bina_hero.jpeg";
import Button from "../../Components/Button";

const seaction__main = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={Bina_hero}
          alt="Bina Insani Gowa Hero"
          className="w-full h-full object-cover transform scale-105"
        />
        {/* Modern Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-3xl space-y-6 md:space-y-8 animate-fade-in">
          {/* Badge/Tagline */}
          <div className="inline-block px-4 py-1 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md text-accent text-sm font-semibold tracking-wider uppercase shadow-lg">
            Welcome to Our School
          </div>

          {/* Main Titles with Shadow and Premium Typography */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
              WELCOME TO
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-accent tracking-tight drop-shadow-2xl">
              BINA INSANI GOWA
            </h1>
          </div>

          {/* Vision Statement with improved line height */}
          <div className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
            <p>MEMBANGUN GENERASI BERIMAN YANG</p>
            <p>MENGUASAI PENGETAHUAN DAN MAMPU</p>
            <p>MENGHADAPI TANTANGAN ZAMAN</p>
          </div>

          {/* Action Button with Accent Theme and Shadow */}
          <div className="pt-4">
            <Button
              variant="accent"
              size="lg"
              className="px-10 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
              rightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              Selengkapnya
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Wave or Subtle Bottom Shadow Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default seaction__main;
