import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AlternatingCourses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const courses = [
    {
      title: 'Ethical Hacking Mastery',
      description:
        'Master the art of ethical hacking with hands-on penetration testing techniques and vulnerability assessment.',
      features: ['Live Labs', 'CEH Preparation', 'Real-world Projects'],
      icon: '🛡️',
      outcome: 'Become a certified ethical hacker with industry-recognized skills',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Penetration Testing Pro',
      description:
        'Advanced penetration testing methodologies covering web applications, networks, and mobile platforms.',
      features: ['OSCP Aligned', 'Industry Tools', 'Career Support'],
      icon: '🔐',
      outcome: 'Master advanced penetration testing and secure critical systems',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Cybersecurity Fundamentals',
      description:
        'Build a solid foundation in cybersecurity principles, network security, and threat detection.',
      features: ['Beginner Friendly', 'Certification Ready', 'Practical Labs'],
      icon: '🔒',
      outcome: 'Launch your cybersecurity career with strong foundational knowledge',
      image: 'https://images.pexels.com/photos/7861527/pexels-photo-7861527.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Advanced Threat Analysis',
      description:
        'Learn advanced malware analysis, threat intelligence, and incident response techniques.',
      features: ['Expert Level', 'Malware Analysis', 'Forensics'],
      icon: '🎯',
      outcome: 'Analyze threats and respond to security incidents like a pro',
      image: 'https://images.pexels.com/photos/10793/pexels-photo-10793.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-dark-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Cybersecurity Training Programs
          </h2>
          <p className="text-text-grey text-lg max-w-3xl mx-auto">
            Industry-leading courses designed by experts with real-world outcomes
          </p>
        </motion.div>

        <div className="space-y-20">
          {courses.map((course, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className={isLeft ? 'md:order-1' : 'md:order-2'}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    className="relative rounded-2xl overflow-hidden h-80 md:h-96"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-transparent to-transparent" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                      className="absolute bottom-6 left-6 right-6"
                    >
                      <div className="text-4xl mb-2">{course.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {course.title}
                      </h3>
                    </motion.div>
                  </motion.div>
                </div>

                <div className={isLeft ? 'md:order-2' : 'md:order-1'}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    className="space-y-6"
                  >
                    <p className="text-text-grey text-lg leading-relaxed">
                      {course.description}
                    </p>

                    <div className="space-y-3">
                      {course.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + 0.3 + idx * 0.1,
                          }}
                          className="flex items-center space-x-3"
                        >
                          <svg
                            className="w-5 h-5 text-neon-pink flex-shrink-0"
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
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2 + 0.6,
                      }}
                      className="bg-gradient-to-r from-purple-accent/10 to-neon-pink/10 border border-purple-accent/30 rounded-xl p-6"
                    >
                      <p className="text-sm uppercase tracking-wider text-purple-accent font-bold mb-2">
                        Outcome
                      </p>
                      <p className="text-white text-lg font-semibold">
                        {course.outcome}
                      </p>
                    </motion.div>

                    <motion.button
                      className="w-full px-6 py-4 bg-gradient-brand rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-neon-pink/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2 + 0.7,
                      }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlternatingCourses;
