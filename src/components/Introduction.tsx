import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Zap, Radio, Terminal, Search, Globe } from 'lucide-react';

const HardwareAndServices = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax offsets for floating elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="bg-[#120A1A] relative overflow-hidden">
      
      {/* --- SECTION 1: HARDWARE (The Orbit) --- */}
      <section className="py-32 container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left: Tactical Content */}
          <div className="lg:w-1/2 z-10 space-y-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block">
               <span className="text-[#FF7A45] font-mono tracking-tighter text-sm uppercase border-l-2 border-[#FF7A45] pl-4">
                 Industrial Grade Hardware
               </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Tactical <br />
              <span className="bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] bg-clip-text text-transparent">Lab Kits</span>
            </h2>
            <p className="text-[#CFCFD6] text-lg max-w-md font-light">
              Proprietary TDCS hardware modules designed for deep-level penetration testing, 
              IoT security research, and ARM-based exploitation.
            </p>
          </div>

          {/* Right: Floating Images (The "Mind-Blowing" Part) */}
          <div className="lg:w-1/2 relative h-[600px] w-full mt-20 lg:mt-0">
            {/* Main Raspberry Pi Node */}
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-64 h-64 z-20">
              <div className="relative p-2 bg-[#1A0F24] border border-white/10 rounded-[2rem] shadow-2xl backdrop-blur-xl group hover:border-[#FF5DA2]/50 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500" 
                  className="rounded-[1.5rem] grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt="Raspberry Pi Lab" 
                />
                <div className="absolute -bottom-4 -left-4 bg-[#7B4DFF] p-4 rounded-xl shadow-lg">
                  <Cpu className="text-white" size={24} />
                </div>
              </div>
            </motion.div>

            {/* Secondary ESP32 Chip Node */}
            <motion.div style={{ y: y2, rotate: -10 }} className="absolute bottom-10 left-10 w-48 h-48 z-10">
              <div className="relative p-2 bg-[#1A0F24] border border-white/10 rounded-full shadow-2xl overflow-hidden group">
                 <img 
                  src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=400" 
                  className="rounded-full scale-125 grayscale group-hover:grayscale-0 transition-all" 
                  alt="IoT Hardware" 
                />
              </div>
            </motion.div>

            {/* Connecting Lines (SVG Animation) */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
              <motion.circle cx="50%" cy="50%" r="200" fill="none" stroke="#7B4DFF" strokeWidth="1" strokeDasharray="10 10" style={{ rotate }} />
            </svg>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SERVICES (Glass Grid) --- */}
      <section className="py-24 bg-[#1A0F24]/50 backdrop-blur-3xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 rounded-3xl overflow-hidden">
            {[
              { title: "Web Security", icon: <Globe />, detail: "Advanced SQLi & XSS mitigation." },
              { title: "Pen-Testing", icon: <Search />, detail: "Full infrastructure vulnerability audit." },
              { title: "Web Dev", icon: <Terminal />, detail: "Highly secure, performant tech stacks." },
            ].map((service, i) => (
              <div key={i} className="group p-12 border-white/5 border-r last:border-r-0 hover:bg-[#7B4DFF]/5 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5DA2] to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                <div className="text-[#FF7A45] mb-6 transform group-hover:scale-110 transition-transform">
                  {React.cloneElement(service.icon, { size: 40 })}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-[#CFCFD6] font-light leading-relaxed">{service.detail}</p>
                <button className="mt-8 text-xs font-black uppercase tracking-widest text-white/40 group-hover:text-[#FF5DA2] transition-colors">
                  Analyze Protocol _
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};