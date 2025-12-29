import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import IndiaMapAnimation from "./IndiaMapAnimation";

const Hero = () => {
  const fullText = "Secure Your Digital Future";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((i) => i + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-secondary">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-24 w-72 h-72 bg-purple-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-24 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <IndiaMapAnimation />
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight gradient-text">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>

            <p className="text-lg md:text-xl text-text-grey max-w-xl mx-auto lg:mx-0">
              Premier cybersecurity training, cutting-edge hardware solutions,
              and expert IT services for the next generation of security professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-full bg-gradient-brand text-white font-bold text-lg shadow-lg hover:shadow-neon-pink/40"
              >
                Explore Courses
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-full border-2 border-purple-accent text-white font-bold text-lg hover:bg-purple-accent/20"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 text-center"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-purple-accent mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7M12 21V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
