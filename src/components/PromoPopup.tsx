import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            className="relative bg-gradient-to-br from-dark-primary to-dark-secondary border border-purple-accent/30 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            initial={{ scale: 0.5, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.5, y: 50 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-text-grey hover:text-white transition-colors text-2xl z-10"
              aria-label="Close"
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8 items-center">
              <div className="space-y-4">
                <motion.div
                  className="inline-block px-4 py-2 bg-gradient-brand rounded-full text-xs font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LIMITED TIME OFFER - 25% DISCOUNT
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  Special Cybersecurity Training Deal
                </h2>

                <p className="text-text-grey text-base">
                  Get 25% off on all cybersecurity training programs. Enhance your skills and advance your career with industry-leading courses!
                </p>

                <motion.a
                  href="https://www.tdcstechnologies.com/courses/cyber-lite"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsVisible(false)}
                  className="block px-6 py-3 bg-gradient-brand rounded-full text-white font-bold text-base hover:shadow-lg hover:shadow-neon-pink/50 transition-all text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Claim Your 25% Discount Now
                </motion.a>

                <p className="text-text-grey text-xs">
                  Offer valid for a limited time. Terms and conditions apply.
                </p>
              </div>

              <motion.img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEjKVSvxayvqcDm3xkqVrByZK7xXQTC1lR9vfQdhqh4Fx-6oY2fBTLCE1ooo_7Z-vncZ5LWfUCAn6h7iQoJLtT0i1nErTTD6veWk6lhFjmyAvZXSYuroQrmY0miqKhQLbuXntb4dxkjjtYIKt6RcYqwYC1WFybEaY4_XfHWcyWsG-y1zVjwzs_ELnOQxQQ3z"
                alt="25% Discount Offer"
                className="w-full h-auto rounded-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;
