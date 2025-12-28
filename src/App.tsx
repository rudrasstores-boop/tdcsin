import Header from './components/Header';
import Hero from './components/Hero';
import PromoPopup from './components/PromoPopup';
import Introduction from './components/Introduction';
import Courses from './components/Courses';
import Hardware from './components/Hardware';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 👉 ADD THIS
import LiquidCursor from './LiquidCursor';

function App() {
  return (
    <div className="min-h-screen bg-dark-secondary relative overflow-hidden">
      
      {/* 🌊 Liquid Cursor (global) */}
      <LiquidCursor />

      <Header />
      <PromoPopup />
      <Hero />
      <Introduction />
      <Courses />
      <Hardware />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
