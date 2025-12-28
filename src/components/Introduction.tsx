import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";

const Introduction = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  /* ---------------- SCROLL PARALLAX ---------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Kali / Metasploit
  const metaX = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const metaRotate = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const metaOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  // Wireshark (UPDATED – X + Y)
  const wireX = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const wireY = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const wireRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const wireOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  /* ---------------- MOUSE PARALLAX ---------------- */
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
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-gradient-to-b from-dark-secondary to-dark-primary relative overflow-hidden"
    >
      {/* 🌌 Animated Glow */}
      <motion.div
        className="absolute -top-40 right-0 w-[500px] h-[500px] bg-purple-accent/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🐉 KALI / METASPLOIT */}
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg"
        alt="Kali Linux / Metasploit"
        style={{
          x: metaX,
          rotate: metaRotate,
          opacity: metaOpacity,
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="absolute left-8 top-24 w-36 opacity-30 pointer-events-none"
      />

      {/* 🦈 WIRESHARK */}
      <motion.img
        src="https://voiptrainers.com/wp-content/uploads/2024/09/Wireshark.webp"
        alt="Wireshark"
        style={{
          x: wireX,
          y: wireY,
          rotate: wireRotate,
          opacity: wireOpacity,
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="absolute right-10 top-32 w-32 opacity-30 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 70 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Welcome to TDCS Technologies
          </h2>

          <p className="text-lg md:text-xl text-text-grey leading-relaxed mb-8">
            TDCS Technologies Private Limited is your trusted partner in cybersecurity excellence,
            delivering elite training, advanced hardware, and enterprise-grade IT services.
          </p>

          <p className="text-lg md:text-xl text-text-grey leading-relaxed">
            We prepare professionals for real-world ethical hacking, penetration testing,
            and cyber defense with hands-on, industry-driven learning.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto"
        >
          {[
            { number: "500+", label: "Students Trained" },
            { number: "95%", label: "Success Rate" },
            { number: "50+", label: "Industry Partners" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.07, y: -8 }}
              className="text-center p-8 rounded-2xl bg-dark-primary/50 border border-purple-accent/20 hover:border-purple-accent/50 transition-all"
            >
              <div className="text-5xl font-bold gradient-text mb-2">
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
