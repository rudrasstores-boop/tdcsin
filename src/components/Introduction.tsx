import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cpu, Code, X, ChevronRight, Terminal, Zap, HardDrive } from 'lucide-react';

// --- 1. PRO-LEVEL POPUP BANNER ---
const DiscountPopup = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }}
            className="relative max-w-sm w-full bg-[#1A0F24] border border-[#FF5DA2]/50 p-8 rounded-3xl shadow-[0_0_50px_rgba(255,93,162,0.2)]"
          >
            <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-white/50 hover:text-white"><X size={20}/></button>
            <div className="text-center">
              <span className="text-[#FF7A45] font-bold tracking-widest text-xs uppercase">Limited Offer</span>
              <h3 className="text-3xl font-black text-white mt-2 mb-4">25% OFF</h3>
              <p className="text-[#CFCFD6] mb-6">Master Ethical Hacking with our premium cybersecurity tracks.</p>
              <button className="w-full py-4 bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] rounded-xl font-bold text-white shadow-lg shadow-pink-500/20">Secure Discount</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- 2. HERO SECTION WITH RED PULSE ---
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#120A1A]">
      {/* Red Lighting Pulse Background */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 blur-[150px] rounded-full" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
            SECURE THE <br />
            <span className="bg-gradient-to-r from-[#FF7A45] via-[#E84AA5] to-[#7B4DFF] bg-clip-text text-transparent">
              FUTURE DIGITAL
            </span>
          </h1>
          <p className="mt-6 text-[#CFCFD6] max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide">
            TDCS Technologies: Leading the frontline of Cybersecurity Training, Hardware, and IT Defense Systems.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] rounded-full text-white font-bold hover:scale-105 transition-transform">Explore Programs</button>
            <button className="px-8 py-4 border border-[#7B4DFF]/50 rounded-full text-white font-bold backdrop-blur-md hover:bg-[#7B4DFF]/10 transition-all">View Services</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- 3. 3D INTERACTIVE COURSE CARDS ---
const CourseSection = () => {
  const courses = [
    { title: "Ethical Hacking", desc: "Hands-on penetration testing and vulnerability assessment.", icon: <Terminal className="text-[#FF7A45]"/> },
    { title: "Network Defense", desc: "Mastering firewalls, IDS, and secure architecture.", icon: <Shield className="text-[#E84AA5]"/> },
    { title: "Cyber Certifications", desc: "Global certifications for career growth.", icon: <Zap className="text-[#7B4DFF]"/> },
  ];

  return (
    <section className="py-24 bg-[#120A1A]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Advanced <span className="text-[#FF5DA2]">Learning</span> Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ rotateY: 10, rotateX: 5, z: 50 }}
              className="perspective-1000 group relative p-8 rounded-3xl bg-[#1A0F24] border border-white/5 hover:border-[#FF5DA2]/50 transition-all duration-500 shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
              <p className="text-[#CFCFD6] leading-relaxed mb-6">{course.desc}</p>
              <div className="flex items-center text-[#FF5DA2] font-bold cursor-pointer group-hover:gap-2 transition-all">
                Learn More <ChevronRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. HARDWARE SECTION ---
const HardwareShowcase = () => {
  return (
    <section className="py-24 bg-[#1A0F24] relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="w-12 h-1 text-[#FF7A45] bg-[#FF7A45]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Cybersecurity <br/> Lab Hardware</h2>
          <p className="text-[#CFCFD6] text-lg leading-relaxed">
            From **Raspberry Pi** nodes to **ESP32** IoT security kits, we provide the physical tools necessary to simulate real-world attacks and defenses.
          </p>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-center gap-3"><HardDrive className="text-[#7B4DFF]" size={20}/> Custom IoT Lab Kits</li>
            <li className="flex items-center gap-3"><Cpu className="text-[#7B4DFF]" size={20}/> Hardware Hacking Tools</li>
            <li className="flex items-center gap-3"><Zap className="text-[#7B4DFF]" size={20}/> Rapid Prototyping Gear</li>
          </ul>
        </motion.div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] blur-[100px] opacity-20" />
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="relative bg-[#120A1A] border border-white/10 p-4 rounded-3xl shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
              alt="Hardware Kit" 
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE ---
const LandingPage = () => {
  return (
    <div className="bg-[#120A1A] min-h-screen selection:bg-[#FF5DA2] selection:text-white">
      <DiscountPopup />
      
      {/* Minimal Sticky Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-white tracking-tighter">TDCS<span className="text-[#FF7A45]">.</span></div>
          <div className="hidden md:flex gap-8 text-white/70 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Courses</a>
            <a href="#" className="hover:text-white transition-colors">Hardware</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:invert transition-all">Get in Touch</button>
        </div>
      </nav>

      <Hero />
      <CourseSection />
      <HardwareShowcase />

      {/* Minimal Footer */}
      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-[#CFCFD6] text-sm font-light">
          © {new Date().getFullYear()} TDCS Technologies Private Limited. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;