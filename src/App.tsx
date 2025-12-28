// --- 4. FLOATING HARDWARE SECTION ---
const HardwareShowcase = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#120A1A]">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-6"
        >
          <div className="h-1 w-12 bg-gradient-to-r from-[#FF7A45] to-[#E84AA5]" />
          <h2 className="text-5xl font-black text-white leading-tight">
            Tactical <br /> <span className="text-[#7B4DFF]">Hardware Labs</span>
          </h2>
          <p className="text-[#CFCFD6] text-lg font-light leading-relaxed">
            We bridge the gap between software and silicon. Our custom kits feature 
            <span className="text-white font-medium"> Raspberry Pi 5 clusters</span> and 
            <span className="text-white font-medium"> ESP32 development boards</span> for real-world hardware hacking and IoT security.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-[#1A0F24] border border-white/5 flex items-center gap-3 group hover:border-[#FF5DA2]/50 transition-all">
              <Cpu className="text-[#FF7A45]" size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">IoT Node</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#1A0F24] border border-white/5 flex items-center gap-3 group hover:border-[#FF5DA2]/50 transition-all">
              <Binary className="text-[#E84AA5]" size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">ARM Exploits</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Immersive Floating Image */}
        <div className="lg:w-1/2 relative">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
              alt="Hardware Lab" 
              className="grayscale hover:grayscale-0 transition-all duration-1000 contrast-125"
            />
            {/* Glass Overlay Label */}
            <div className="absolute bottom-6 left-6 p-4 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#FF5DA2] font-black">Secure Hardware v2.0</p>
            </div>
          </motion.div>
          {/* Decorative Glow */}
          <div className="absolute -inset-10 bg-[#7B4DFF]/20 blur-[100px] rounded-full z-0" />
        </div>
      </div>
    </section>
  );
};

// --- 5. PROFESSIONAL SERVICES GRID ---
const ServicesGrid = () => {
  const services = [
    { title: "Web Security", icon: <Globe size={40}/>, desc: "End-to-end protection for cloud infrastructures." },
    { title: "Penetration Testing", icon: <Search size={40}/>, desc: "Simulated attacks to find and fix vulnerabilities." },
    { title: "Web Development", icon: <Code size={40}/>, desc: "Building secure, high-performance digital products." }
  ];

  return (
    <section className="py-24 bg-[#1A0F24]/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-[2.5rem] overflow-hidden">
          {services.map((s, i) => (
            <div key={i} className="group p-12 bg-[#120A1A] hover:bg-[#1A0F24] border-r border-white/10 last:border-r-0 transition-all duration-500 relative">
              {/* Scan-line animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5DA2] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan" />
              
              <div className="text-[#FF7A45] mb-8 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-[#CFCFD6] font-light text-sm leading-relaxed">{s.desc}</p>
              
              <button className="mt-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7B4DFF] group-hover:text-[#FF5DA2] transition-colors">
                Initialize Protocol <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};