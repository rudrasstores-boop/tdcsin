import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, ShieldAlert, Cpu, Binary, Target, Globe, Search, X, ChevronRight } from 'lucide-react';

// --- 1. DISCOUNT POPUP ---
const DiscountModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="relative max-w-md w-full bg-[#1A0F24] border border-[#FF5DA2]/50 p-8 rounded-3xl shadow-[0_0_50px_rgba(255,93,162,0.3)]">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"><X size={24} /></button>
            <div className="text-center">
              <span className="text-xs font-bold tracking-[0.3em] text-[#FF7A45] uppercase">Secure Offer</span>
              <h3 className="text-4xl font-black text-white mt-2 mb-4">25% OFF</h3>
              <p className="text-[#CFCFD6] mb-8 font-light">Limited time discount on all advanced cybersecurity certifications.</p>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] text-white font-bold hover:shadow-[0_0_20px_rgba(232,74,165,0.4)] transition-all">Claim Access</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- 2. HERO WITH RED LIGHTING ---
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#120A1A] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="relative z-10 text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none">
          TDCS <br /><span className="bg-gradient-to-r from-[#FF7A45] via-[#E84AA5] to-[#7B4DFF] bg-clip-text text-transparent italic">TECH</span>
        </motion.h1>
        <p className="mt-6 text-[#CFCFD6] text-lg tracking-[0.3em] uppercase font-light">Cybersecurity & Tactical Systems</p>
      </div>
    </section>
  );
};

// --- 3. 3D COURSE CARD COMPONENT ---
const CourseCard = ({ title, icon, desc, id }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y), [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(useSpring(x), [-0.5, 0.5], ["-15deg", "15deg"]);

  return (
    <motion.div 
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX / rect.width - rect.left / rect.width - 0.5);
        y.set(e.clientY / rect.height - rect.top / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative p-8 rounded-3xl bg-[#1A0F24] border border-white/10 group cursor-pointer hover:border-[#FF5DA2]/50 transition-colors"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="text-[#FF7A45] mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[#CFCFD6] text-sm font-light leading-relaxed">{desc}</p>
      </div>
      <div className="absolute bottom-4 right-6 text-white/5 text-6xl font-black italic">0{id}</div>
    </motion.div>
  );
};

// --- MAIN APP ---
export default function App() {
  return (
    <div className="bg-[#120A1A] text-white selection:bg-[#FF5DA2]">
      <DiscountModal />
      <Hero />
      
      {/* Course Section */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-20 tracking-tight">ELITE <span className="text-[#7B4DFF]">PROGRAMS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CourseCard id={1} title="Ethical Hacking" icon={<Terminal size={32}/>} desc="Live exploit simulations and defense tactics." />
          <CourseCard id={2} title="Pen-Testing" icon={<Target size={32}/>} desc="Advanced infrastructure vulnerability auditing." />
          <CourseCard id={3} title="Net Defense" icon={<ShieldAlert size={32}/>} desc="Protecting critical enterprise architectures." />
          <CourseCard id={4} title="IoT Security" icon={<Binary size={32}/>} desc="Hardening ESP32 and ARM-based devices." />
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-[#CFCFD6]/40 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} TDCS Technologies Private Limited
        </p>
      </footer>
    </div>
  );
}