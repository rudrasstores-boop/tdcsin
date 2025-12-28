import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Software & Cybersecurity Services',
      description:
        'Enterprise-grade cybersecurity solutions, audits, and software services designed to protect your digital assets.',
      link: 'https://www.tdcstechnologies.com/services/software',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Hardware Solutions',
      description:
        'Professional cybersecurity and IoT hardware solutions including Raspberry Pi, ESP32, and lab-grade equipment.',
      link: 'https://www.tdcstechnologies.com/services/hardware',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Legal & Compliance Services',
      description:
        'Cyber law, IT compliance, and legal advisory services to keep your business secure and compliant.',
      link: 'https://www.tdcstechnologies.com/services/legal',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
        </svg>
      ),
    },
    {
      title: 'Website Development',
      description:
        'Secure, scalable, and modern websites built using the latest technologies and best security practices.',
      link: 'https://www.tdcstechnologies.com/services/website-development',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-dark-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl"></div>
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
            Professional IT Services
          </h2>
          <p className="text-text-grey text-lg max-w-3xl mx-auto">
            Enterprise-grade cybersecurity, hardware, and development services to protect and scale your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              target="_self"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group block"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-dark-secondary to-dark-primary border border-purple-accent/20 hover:border-purple-accent hover:shadow-2xl hover:shadow-purple-accent/20 transition-all duration-300">
                <div className="text-purple-accent mb-6 group-hover:text-neon-pink transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-text-grey leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="text-purple-accent font-semibold group-hover:text-neon-pink inline-flex items-center space-x-2 transition-colors">
                  <span>Explore Service</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
