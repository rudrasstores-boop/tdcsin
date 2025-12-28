import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-primary/95 backdrop-blur-md shadow-lg shadow-purple-accent/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3 relative">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEh6t9BjBO7igeafdAkeEQW1JNA1TAfi2lIR0Nr857ozJmsC-qPIm9m2BbQi8JkDD3TmGVuyKAyxnIc88lETBh18Xia9FqGTkGdtzD7215GLuqRBIhm9UCh7F4FDB9BsKHg78TKGkSUfCtTHefuZ5LwuXqdGLzO50ulgxWj2b-6gGAZJHE15AEKDUnwStMAm"
            alt="TDCS Logo"
            className="h-10 w-10 object-contain"
          />

          {/* Cyber Light Animated Text */}
          <div className="relative overflow-hidden">
            <motion.span
              className="text-xl font-bold gradient-text relative z-10"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              TDCS Technologies
            </motion.span>

            {/* Light sweep overlay */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              initial={{ x: '-120%' }}
              animate={{ x: '120%' }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('courses')}
            className="text-text-grey hover:text-white transition-colors"
          >
            Training
          </button>
          <button
            onClick={() => scrollToSection('hardware')}
            className="text-text-grey hover:text-white transition-colors"
          >
            Hardware
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-text-grey hover:text-white transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-gradient-brand rounded-full text-white font-semibold hover:shadow-lg hover:shadow-neon-pink/50 transition-all"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
