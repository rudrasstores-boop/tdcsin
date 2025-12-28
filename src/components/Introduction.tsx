import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";

const StatCounter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

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

  const metaX = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const metaRotate = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const metaOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

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
      {/* GLOW */}
      <motion.div
        className="absolute -top-40 right-0 w-[500px] h-[500px] bg-purple-accent/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* ICONS */}
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg"
        alt="Metasploit"
        style={{
          x: metaX,
          rotate: metaRotate,
          opacity: metaOpacity,
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="absolute left-8 top-24 w-36 opacity-30 pointer-events-none"
      />

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
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Welcome to TDCS Technologies
          </h2>

          <p className="text-lg md:text-xl text-text-grey mb-6">
            TDCS Technologies Private Limited is your trusted partner in
            cybersecurity excellence.
          </p>
        </motion.div>

        {/* STATS WITH COUNT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          {inView && (
            <>
              <div className="text-center p-8 rounded-2xl bg-dark-primary/50 border border-purple-accent/20">
                <div className="text-5xl font-bold gradient-text mb-2">
                  <StatCounter value={500} suffix="+" />
                </div>
                <div className="text-text-grey">Students Trained</div>
              </div>

              <div className="text-center p-8 rounded-2xl bg-dark-primary/50 border border-purple-accent/20">
                <div className="text-5xl font-bold gradient-text mb-2">
                  <StatCounter value={95} suffix="%" />
                </div>
                <div className="text-text-grey">Success Rate</div>
              </div>

              <div className="text-center p-8 rounded-2xl bg-dark-primary/50 border border-purple-accent/20">
                <div className="text-5xl font-bold gradient-text mb-2">
                  <StatCounter value={50} suffix="+" />
                </div>
                <div className="text-text-grey">Industry Partners</div>
              </div>
            </>
          )}
        </div>

        {/* IMAGE STRIP (OUTSIDE → INSIDE) */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-wrap justify-center gap-6 mt-20"
        >
          {[
            "https://blogger.googleusercontent.com/img/a/AVvXsEh72KPIg_RIBDePslL5KK3mwKOr7LXbBGEQGcQ7Dij3sg1Os3py5ItnbPGwXR9mICjwaORXfjce0NvKHxraGQB6p07mGuXKMsQAp13vGyN4OVUzXi6akDfHJHRzVrrS4756lekOzgEbNS0P9_LTLyXIbRsy__0iCbsYwCV0kgeuPomBCWeq-0WKp02jcsOF",
            "https://blogger.googleusercontent.com/img/a/AVvXsEi4ct1WE8BDLiLeHOrJPuKoKpL7lDYjGHJ9ri0KRZmUsnb9IopXvTgjLOEl5SpRx81nXGwfxrDg69SppqEQEdHKSZr27KLZPnjmZ1Pr22aNixdsjfQUjsh6FqHMnginbMd9ev4RnvVFpcgjihOAN7ezY5nL3-IYlPT7CL9et3ydZmc5X2IZpBPEHWHSTTD_",
            "https://blogger.googleusercontent.com/img/a/AVvXsEjYbtTNBy0k-Z-mQPiTS6crzmU3nypEPnHTnXvIrMP5ad38CzbJptT9jkTHFz5O5V3q5YGLCDhGahEIsCFYsHI1eaPb30lnhJ0pZ3d-o61pehHJ38kKNtoBnewayL2wGFf-wzvWrfyhj22KvOV7fXLzgojsg7rpLpMFHipPVr28fohOf72bYxFQeRJAhX_q",
            "https://blogger.googleusercontent.com/img/a/AVvXsEjcQA7l6TaSYW4QYsDfMXN_HqfBECITrE7LktjD2-41QpgpTQ29RL5xPgNs4vDAzPW6k0EM9p-OSdaTR3chzl97ZxiGAFRvfV4O4Im8i6JJZXT4IDK-LM2OIBG8N8tsf4Wwn4wTJaUzqtQJd3sdza1yhMvhj2KRPivVJyCCMzKp2WpX24VksPf3ceiItGl1",
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              variants={{
                hidden: { opacity: 0, y: 80, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-40 rounded-xl shadow-lg"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
