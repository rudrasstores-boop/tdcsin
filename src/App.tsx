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
    <div className="min-h-screen bg-dark-secondary relative overflow-hidden">
      <LiquidCursor />

      <Header />
      <PromoPopup />
      <Hero />
      <Introduction />
      <AlternatingCourses />
      <CyberAttackMap />
      <Hardware />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
