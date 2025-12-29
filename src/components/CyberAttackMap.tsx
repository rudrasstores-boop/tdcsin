import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const CyberAttackMap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [attacks, setAttacks] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setAttacks((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 20,
        },
      ]);
    }, 800);

    const cleanup = setTimeout(() => {
      clearInterval(interval);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(cleanup);
    };
  }, [inView]);

  const regions = [
    { name: 'North America', x: 20, y: 35 },
    { name: 'Europe', x: 50, y: 25 },
    { name: 'Asia Pacific', x: 75, y: 40 },
    { name: 'South America', x: 30, y: 65 },
    { name: 'Africa', x: 55, y: 60 },
    { name: 'Middle East', x: 60, y: 45 },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-dark-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-accent/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get Secure Our World
          </h2>
          <p className="text-text-grey text-xl max-w-3xl mx-auto">
            Join the global movement to defend against cyber threats and secure digital infrastructure worldwide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative bg-gradient-to-br from-dark-primary/50 to-dark-secondary/50 border border-purple-accent/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm min-h-96"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full min-h-96 absolute inset-0 opacity-40"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#mapGrad)" />
          </svg>

          <div className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-dark-secondary/60 border border-purple-accent/20 rounded-xl p-6 hover:border-purple-accent/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">
                      {region.name}
                    </h3>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-neon-pink rounded-full"
                    />
                  </div>
                  <p className="text-sm text-text-grey">
                    Defending critical infrastructure and data
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative bg-gradient-to-r from-purple-accent/20 to-neon-pink/20 border border-purple-accent/40 rounded-xl p-8 text-center"
            >
              {attacks.map((attack) => (
                <motion.div
                  key={attack.id}
                  initial={{ opacity: 1, scale: 0, x: '50%', y: '50%' }}
                  animate={{ opacity: 0, scale: 1, x: `${attack.x}%`, y: `${attack.y}%` }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                  className="absolute w-12 h-12 pointer-events-none"
                >
                  <div className="w-full h-full relative">
                    <motion.div
                      className="absolute inset-0 border-2 border-neon-pink rounded-full"
                      animate={{ scale: [1, 2], opacity: [1, 0] }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                    />
                    <div className="absolute inset-2 bg-neon-pink rounded-full" />
                  </div>
                </motion.div>
              ))}

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Threats Coming In
                </h3>
                <p className="text-text-grey text-lg mb-6">
                  Every second, thousands of cyber attacks are launched. Together, we defend our digital world.
                </p>
                <motion.button
                  className="px-10 py-4 bg-gradient-brand rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-neon-pink/50 transition-all inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Defense
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            >
              {[
                { label: 'Threats Blocked', value: '2.4M+' },
                { label: 'Users Protected', value: '500K+' },
                { label: 'Security Experts', value: '1K+' },
                { label: 'Global Coverage', value: '195+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-neon-pink">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-text-grey">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberAttackMap;
