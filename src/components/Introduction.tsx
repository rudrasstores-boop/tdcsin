import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
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
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#7B4DFF]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-[#FF5DA2]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Subtitle */}
          <motion.span 
            variants={itemVariants}
            className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#FF5DA2] mb-4"
          >
            Digital Defense Evolution
          </motion.span>

          {/* Main Heading with Gradient */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-white"
          >
            Elevating the Standards of <br />
            <span className="bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] bg-clip-text text-transparent">
              Cyber Intelligence
            </span>
          </motion.h2>

          {/* Body Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg md:text-xl text-[#CFCFD6] leading-relaxed font-light">
              TDCS Technologies Private Limited stands at the intersection of 
              <span className="text-white font-medium"> offensive security and defensive resilience</span>. 
              We don't just teach cybersecurity; we architect the next generation of digital guardians 
              through immersive, high-fidelity technical environments.
            </p>
          </motion.div>

          {/* Stat Cards Container */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            {[
              { number: '500+', label: 'Certified Elite', icon: '🛡️' },
              { number: '95%', label: 'Placement Success', icon: '🚀' },
              { number: '24/7', label: 'Lab Access', icon: '💻' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 0px 25px rgba(123, 77, 255, 0.2)",
                  borderColor: "rgba(232, 74, 165, 0.5)"
                }}
                className="group relative p-8 rounded-2xl bg-[#1A0F24]/60 border border-[#7B4DFF]/20 backdrop-blur-xl transition-all duration-300"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] group-hover:w-full transition-all duration-500" />
                
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-white to-[#CFCFD6] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-[#CFCFD6] uppercase tracking-widest text-xs font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;