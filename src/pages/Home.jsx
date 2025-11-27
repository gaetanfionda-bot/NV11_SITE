import { Link } from "react-router-dom";
import HeroSection from "../sections/HeroSection.jsx";
import TryOnSection from "../sections/TryOnSection.jsx";
import ProductsGrid from "../sections/ProductsGrid.jsx";
import VideoBanner from "../sections/VideoBanner.jsx";
import AboutSection from "../sections/AboutSection.jsx";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <HeroSection />

      {/* TRY-ON */}
      <TryOnSection />

      {/* ESHOP GRID */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-wide mb-10">NOS LUNETTES</h2>
        <ProductsGrid />
        <div className="text-center mt-10">
          <Link
            to="/eshop"
            className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-full text-lg font-semibold"
          >
            Voir tout le shop →
          </Link>
        </div>
      </section>

      {/* FULL WIDTH VIDEO BANNER */}
      <VideoBanner />

      {/* ABOUT */}
      <AboutSection />

    </div>
  );
}

