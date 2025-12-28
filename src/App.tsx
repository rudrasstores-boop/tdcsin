export default function App() {
  return (
    <div className="bg-[#120A1A] text-white selection:bg-[#FF5DA2]">
      <DiscountModal />
      <Hero />
      
      {/* Introduction (Already in your file) */}
      <Introduction /> 

      {/* Courses Section */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-20 tracking-tight tracking-[0.2em]">ELITE <span className="text-[#7B4DFF]">PROGRAMS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CourseCard id={1} title="Ethical Hacking" icon={<Terminal size={32}/>} desc="Live exploit simulations and defense tactics." />
          <CourseCard id={2} title="Pen-Testing" icon={<Target size={32}/>} desc="Advanced infrastructure vulnerability auditing." />
          <CourseCard id={3} title="Net Defense" icon={<ShieldAlert size={32}/>} desc="Protecting critical enterprise architectures." />
          <CourseCard id={4} title="IoT Security" icon={<Binary size={32}/>} desc="Hardening ESP32 and ARM-based devices." />
        </div>
      </section>

      {/* --- ADD THESE NEW SECTIONS HERE --- */}
      <HardwareShowcase />
      <ServicesGrid />

      {/* Minimal Footer */}
      <footer className="py-10 border-t border-white/5 text-center bg-[#120A1A]">
        <p className="text-[#CFCFD6]/40 text-[10px] tracking-[0.4em] uppercase font-bold">
          © {new Date().getFullYear()} TDCS Technologies Private Limited
        </p>
      </footer>
    </div>
  );
}