import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Target, Globe } from 'lucide-react'; // Ensure lucide-react is installed

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section 
      ref={ref}
      className="relative py-32 bg-[#120A1A] overflow-hidden"
    >
      {/* Background Decor: Cyber Grid & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Violet Glow */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#7B4DFF]/10 rounded-full blur-[120px] animate-pulse" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Cyber Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full border border-[#FF5DA2]/30 bg-[#FF5DA2]/5 text-[#FF5DA2] text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              System Architecture Established
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white"
          >
            Pioneering the <br />
            <span className="bg-gradient-to-r from-[#FF7A45] via-[#E84AA5] to-[#7B4DFF] bg-clip-text text-transparent italic">
              Digital Frontline
            </span>
          </motion.h2>

          {/* Core Introduction Text */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-6 mb-20">
            <p className="text-lg md:text-xl text-[#CFCFD6] leading-relaxed font-light">
              TDCS Technologies Private Limited is more than a service provider; we are the 
              <span className="text-white font-medium"> architects of digital resilience</span>. 
              We bridge the gap between theoretical knowledge and offensive security through 
              cutting-edge training and proprietary hardware.
            </p>
          </motion.div>

          {/* Stat Cards with 3D Depth & Scanning Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Elite Graduates', icon: <Target className="w-5 h-5"/> },
              { number: '95%', label: 'Placement Success', icon: <ShieldCheck className="w-5 h-5"/> },
              { number: '24/7', label: 'Lab Ecosystem', icon: <Globe className="w-5 h-5"/> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative p-10 rounded-2xl bg-gradient-to-b from-[#1A0F24] to-[#120A1A] border border-[#7B4DFF]/20 overflow-hidden"
              >
                {/* Cyber Scan Line Effect */}
                <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF5DA2]/50 to-transparent top-[-2px] group-hover:animate-scan z-20" />
                
                {/* Background Glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#7B4DFF]/10 rounded-full blur-2xl group-hover:bg-[#FF5DA2]/20 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-[#7B4DFF]/10 text-[#FF5DA2] mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">
                    {stat.number}
                  </div>
                  <div className="text-[#CFCFD6] text-xs font-bold uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tailwind Style Extension for Animation */}
      <style jsx>{`
        @keyframes scan {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        .animate-scan {
          position: absolute;
          animation: scan 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Introduction;