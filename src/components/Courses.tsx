import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const courses = [
    {
      title: 'Ethical Hacking Mastery',
      description:
        'Master the art of ethical hacking with hands-on penetration testing techniques and vulnerability assessment.',
      features: ['Live Labs', 'CEH Preparation', 'Real-world Projects'],
      icon: '🛡️',
    },
    {
      title: 'Penetration Testing Pro',
      description:
        'Advanced penetration testing methodologies covering web applications, networks, and mobile platforms.',
      features: ['OSCP Aligned', 'Industry Tools', 'Career Support'],
      icon: '🔐',
    },
    {
      title: 'Cybersecurity Fundamentals',
      description:
        'Build a solid foundation in cybersecurity principles, network security, and threat detection.',
      features: ['Beginner Friendly', 'Certification Ready', 'Practical Labs'],
      icon: '🔒',
    },
    {
      title: 'Advanced Threat Analysis',
      description:
        'Learn advanced malware analysis, threat intelligence, and incident response techniques.',
      features: ['Expert Level', 'Malware Analysis', 'Forensics'],
      icon: '🎯',
    },
  ];

  return (
    <section
      id="courses"
      className="py-24 bg-dark-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Cybersecurity Training Programs
          </h2>
          <p className="text-text-grey text-lg max-w-3xl mx-auto">
            Industry-leading courses designed by experts to prepare you for real-world cybersecurity challenges
          </p>
        </motion.div>

        {/* Perspective wrapper */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
          style={{ perspective: '1200px' }}
        >
          {courses.map((course, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotateY: isLeft ? -12 : 12,
                  rotateX: 6,
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                        rotateY: 0,
                        rotateX: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.9,
                  ease: 'easeOut',
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -12,
                  rotateY: isLeft ? -4 : 4,
                  rotateX: 2,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative transform-gpu"
              >
                <div
                  className={`relative p-8 rounded-2xl bg-gradient-to-br from-dark-secondary to-dark-primary border transition-all duration-300 ${
                    hoveredCard === index
                      ? 'border-purple-accent shadow-2xl shadow-purple-accent/30'
                      : 'border-purple-accent/20'
                  }`}
                >
                  <div className="text-5xl mb-4">{course.icon}</div>

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {course.title}
                  </h3>

                  <p className="text-text-grey mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-purple-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-text-grey">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full px-6 py-3 bg-gradient-brand rounded-full text-white font-semibold hover:shadow-lg hover:shadow-neon-pink/50 transition-all"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
