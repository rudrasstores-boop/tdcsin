import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#120A1A] overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        {/* The Red Lighting Pulse */}
        <motion.div 
          animate={{ 
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[120px] rounded-full"
        />
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">
            TDCS <span className="bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] bg-clip-text text-transparent">TECH</span>
          </h1>
          <p className="mt-4 text-[#CFCFD6] text-xl md:text-2xl font-light tracking-[0.2em] uppercase">
            Cybersecurity & Tactical Hardware
          </p>
          
          <motion.div 
            className="mt-10 flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,122,69,0.4)] transition-all">
              Initialize Training
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-[#FF5DA2] rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;