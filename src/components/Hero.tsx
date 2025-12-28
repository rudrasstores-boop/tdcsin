import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const headline = 'Secure Your Digital Future';
  const [displayedText, setDisplayedText] = useState('');
  const controls = useAnimation();

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + headline[index]);
      index++;
      if (index === headline.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Glitch / flicker effect
  useEffect(() => {
    controls.start({
      textShadow: [
        '0 0 2px #FF7A45, 0 0 3px #E84AA5',
        '0 0 4px #FF7A45, 0 0 6px #E84AA5',
        '0 0 2px #FF7A45, 0 0 3px #E84AA5',
      ],
      transition: { repeat: Infinity, repeatType: 'mirror', duration: 0.2 },
    });
  }, [controls]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary via-dark-primary to-dark-secondary">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Typewriter + Glitch */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight gradient-text"
          animate={controls}
        >
          {displayedText}
          <span className="ml-1 text-white blink">|</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-text-grey mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Premier cybersecurity training, cutting-edge hardware solutions, and expert IT services for the next generation of security professionals.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <motion.button
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-brand rounded-full text-white font-bold text-lg hover:shadow-xl hover:shadow-neon-pink/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Training Programs
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-purple-accent rounded-full text-white font-bold text-lg hover:bg-purple-accent/20 hover:shadow-lg hover:shadow-purple-accent/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <svg
              className="w-6 h-6 text-purple-accent mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
