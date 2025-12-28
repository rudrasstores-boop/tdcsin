import Hero from './components/Hero';
import Introduction from './components/Introduction';
import CourseSection from './components/CourseSection';
import HardwareAndServices from './components/HardwareAndServices';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <main className="bg-[#120A1A]">
      <Hero />
      <Introduction />
      <CourseSection />
      <HardwareAndServices />
      <FinalCTA />
    </main>
  );
}
export default App;