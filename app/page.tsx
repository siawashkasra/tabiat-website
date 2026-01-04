import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import ProcessSection from "./components/ProcessSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f8f6] dark:bg-[#102216] text-[#1A1A1A] dark:text-gray-100">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
