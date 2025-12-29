import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IndiaMapAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cities = [
    { name: 'Kolkata', x: 75, y: 45, delay: 0 },
    { name: 'Delhi', x: 35, y: 20, delay: 0.3 },
    { name: 'Mumbai', x: 25, y: 40, delay: 0.6 },
    { name: 'Bangalore', x: 55, y: 70, delay: 0.9 },
    { name: 'Chennai', x: 65, y: 75, delay: 1.2 },
    { name: 'Hyderabad', x: 50, y: 60, delay: 1.5 },
  ];

  return (
    <div
      ref={ref}
      className="relative w-full h-full min-h-[500px] flex items-center justify-center"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full max-w-md absolute inset-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
          </linearGradient>
          <filter id="mapGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 28 8 Q 35 5 42 10 L 50 12 Q 65 15 75 20 L 78 28 Q 80 35 78 42 L 75 50 Q 72 60 70 70 L 65 80 Q 55 85 45 82 L 35 80 Q 25 78 22 70 L 20 58 Q 18 45 20 35 L 25 20 Q 26 12 28 8 Z"
          fill="url(#mapGradient)"
          stroke="rgba(168, 85, 247, 0.3)"
          strokeWidth="0.5"
          filter="url(#mapGlow)"
        />

        {inView &&
          cities.map((city, index) => (
            <g key={index}>
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={0.8}
                fill="rgba(236, 72, 153, 0.8)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: city.delay,
                  ease: 'easeOut',
                }}
              />
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={0.8}
                fill="none"
                stroke="rgba(236, 72, 153, 0.6)"
                strokeWidth="0.3"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  delay: city.delay,
                  ease: 'easeOut',
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </g>
          ))}

        {inView &&
          cities.map((city, index) => {
            const nextCity =
              cities[(index + 1) % cities.length];
            return (
              <motion.line
                key={`line-${index}`}
                x1={city.x}
                y1={city.y}
                x2={nextCity.x}
                y2={nextCity.y}
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: city.delay + 0.5,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
      </svg>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-sm md:text-base font-bold text-purple-accent"
        >
          Kolkata to Every Corner
        </motion.div>
      </div>
    </div>
  );
};

export default IndiaMapAnimation;
