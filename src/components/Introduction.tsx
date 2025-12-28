import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-dark-secondary to-dark-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Welcome to TDCS Technologies
          </h2>
          <p className="text-lg md:text-xl text-text-grey leading-relaxed mb-8">
            TDCS Technologies Private Limited is your trusted partner in cybersecurity excellence.
            We specialize in comprehensive training programs, cutting-edge hardware solutions,
            and professional IT services designed to empower individuals and organizations in the digital age.
          </p>
          <p className="text-lg md:text-xl text-text-grey leading-relaxed">
            With industry-recognized certifications, hands-on practical training, and expert mentorship,
            we prepare you for real-world challenges in ethical hacking, penetration testing, and cybersecurity defense.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
        >
          {[
            { number: '500+', label: 'Students Trained' },
            { number: '95%', label: 'Success Rate' },
            { number: '50+', label: 'Industry Partners' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-dark-primary/50 border border-purple-accent/20 hover:border-purple-accent/50 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-text-grey">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
