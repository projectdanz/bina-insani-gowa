import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Page/Footer";
import Home from "./Page/HomePage/Home";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";

const App = () => {
  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Kontak", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar links={navLinks} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
