import Header from './components/Header';
import Hero from './components/Hero';
import PromoPopup from './components/PromoPopup';
import Introduction from './components/Introduction';
import AlternatingCourses from './components/AlternatingCourses';
import CyberAttackMap from './components/CyberAttackMap';
import Hardware from './components/Hardware';
import Services from './components/Services';
import Contact from './components/Contact';
import LiquidCursor from './components/LiquidCursor';

function App() {
  return (
    <div className="bg-dark-secondary text-white min-h-screen">
      <LiquidCursor />

      {/* Header */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* Promo */}
      <section className="relative z-40">
        <PromoPopup />
      </section>

      {/* Hero */}
      <main>
        <section className="min-h-screen flex items-center justify-center px-6">
          <Hero />
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto">
          <Introduction />
        </section>

        <section className="py-20 bg-black/30">
          <AlternatingCourses />
        </section>

        <section className="py-20 px-6">
          <CyberAttackMap />
        </section>

        <section className="py-20 px-6 bg-black/20">
          <Hardware />
        </section>

        <section className="py-20 px-6">
          <Services />
        </section>

        <section className="py-20 px-6 bg-black/30">
          <Contact />
        </section>
