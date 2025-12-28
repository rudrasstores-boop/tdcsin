import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";

const Hardware = () => {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  /* ----------- SCROLL DEPTH ----------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const depth = useTransform(scrollYProgress, [0, 1], [80, -80]);

  /* ----------- MOUSE PARALLAX ----------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 40);
      mouseY.set((e.clientY - window.innerHeight / 2) / 40);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const products = [
    {
      name: "Raspberry Pi Kits",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Raspberry_Pi_Logo.svg",
      description:
        "Complete Raspberry Pi kits designed for IoT, automation, and cybersecurity labs.",
      features: ["All Models", "Starter Kits", "Accessories Included"],
    },
    {
      name: "ESP32 Boards",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Espressif_Logo.svg",
      description:
        "High-performance ESP32 boards for wireless security and IoT research.",
      features: ["Wi-Fi & Bluetooth", "Low Power", "Educational Projects"],
    },
    {
      name: "Cybersecurity Lab Kits",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      description:
        "Professional hardware kits to build real-world penetration testing labs.",
      features: ["Network Tools", "Testing Equipment", "Full Lab Setup"],
    },
    {
      name: "IoT Security Kits",
      img: "https://cdn-icons-png.flaticon.com/512/1018/1018685.png",
      description:
        "Hands-on kits to explore vulnerabilities in modern IoT devices.",
      features: ["Sensor Modules", "Security Testing", "Practical Learning"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="hardware"
      className="py-32 bg-gradient-to-b from-dark-primary to-dark-secondary relative overflow-hidden"
    >
      {/* Glow */}
      <motion.div
        className="absolute -top-40 left-1/2 w-[600px] h-[600px] bg-purple-accent/20 rounded-full blur-[140px]"
        style={{ x: "-50%" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Hardware Solutions
          </h2>
          <p className="text-text-grey text-lg max-w-3xl mx-auto">
            Industry-grade hardware engineered for cybersecurity training,
            penetration testing, and IoT security research.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto perspective-[1200px]">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  y: -12,
                }}
                style={{
                  translateY: depth,
                  x: smoothX,
                  y: smoothY,
                  transformStyle: "preserve-3d",
                }}
                className="relative h-full p-6 rounded-2xl bg-dark-primary border border-purple-accent/20 hover:border-neon-pink transition-all shadow-xl hover:shadow-neon-pink/30"
              >
                {/* Logo */}
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="h-16 mx-auto mb-6"
                  style={{ transform: "translateZ(40px)" }}
                />

                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {product.name}
                </h3>

                <p className="text-text-grey text-sm mb-4 leading-relaxed text-center">
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center gap-2 text-sm text-text-grey"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-accent rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href="https://www.tdcstechnologies.com/services/hardware"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-gradient-brand text-white font-semibold hover:shadow-xl hover:shadow-neon-pink/40 transition-all"
          >
            Explore Hardware Services →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hardware;
