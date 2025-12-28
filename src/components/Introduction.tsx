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

/* ---------------- COUNT UP COMPONENT ---------------- */
const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest).toString();
        }
      },
    });
  }, [value]);

  return <span ref={ref}>0</span>;
};

const Introduction = () => {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  /* ---------------- SCROLL PARALLAX ---------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const metaX = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const wireX = useTransform(scrollYProgress, [0, 1], [0, 300]);

  /* ---------------- MOUSE PARALLAX ---------------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 60);
      mouseY.set((e.clientY - window.innerHeight / 2) / 60);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const beltImages = [
    "https://blogger.googleusercontent.com/img/a/AVvXsEh72KPIg_RIBDePslL5KK3mwKOr7LXbBGEQGcQ7Dij3sg1Os3py5ItnbPGwXR9mICjwaORXfjce0NvKHxraGQB6p07mGuXKMsQAp13vGyN4OVUzXi6akDfHJHRzVrrS4756lekOzgEbNS0P9_LTLyXIbRsy__0iCbsYwCV0kgeuPomBCWeq-0WKp02jcsOF",
    "https://blogger.googleusercontent.com/img/a/AVvXsEi4ct1WE8BDLiLeHOrJPuKoKpL7lDYjGHJ9ri0KRZmUsnb9IopXvTgjLOEl5SpRx81nXGwfxrDg69SppqEQEdHKSZr27KLZPnjmZ1Pr22aNixdsjfQUjsh6FqHMnginbMd9ev4RnvVFpcgjihOAN7ezY5nL3-IYlPT7CL9et3ydZmc5X2IZpBPEHWHSTTD_",
    "https://blogger.googleusercontent.com/img/a/AVvXsEjYbtTNBy0k-Z-mQPiTS6crzmU3nypEPnHTnXvIrMP5ad38CzbJptT9jkTHFz5O5V3q5YGLCDhGahEIsCFYsHI1eaPb30lnhJ0pZ3d-o61pehHJ38kKNtoBnewayL2wGFf-wzvWrfyhj22KvOV7fXLzgojsg7rpLpMFHipPVr28fohOf72bYxFQeRJAhX_q",
    "https://blogger.googleusercontent.com/img/a/AVvXsEjcQA7l6TaSYW4QYsDfMXN_HqfBECITrE7LktjD2-41QpgpTQ29RL5xPgNs4vDAzPW6k0EM9p-OSdaTR3chzl97ZxiGAFRvfV4O4Im8i6JJZXT4IDK-LM2OIBG8N8tsf4Wwn4wTJaUzqtQJd3sdza1yhMvhj2KRPivVJyCCMzKp2WpX24VksPf3ceiItGl1",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-dark-secondary to-dark-primary overflow-hidden"
    >
      {/* Floating Logos */}
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg"
        className="absolute left-8 top-32 w-32 opacity-25"
        style={{ x: metaX, translateX: smoothX, translateY: smoothY }}
      />

      <motion.img
        src="https://voiptrainers.com/wp-content/uploads/2024/09/Wireshark.webp"
        className="absolute right-10 top-40 w-28 opacity-25"
        style={{ x: wireX, translateX: smoothX, translateY: smoothY }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Welcome to TDCS Technologies
          </h2>

          <p className="text-xl text-text-grey mb-8">
            Elite cybersecurity training, cutting-edge hardware, and enterprise-grade
            IT services — crafted for real-world defense.
          </p>
        </motion.div>

        {/* COUNTERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-w-5xl mx-auto">
          {[
            { value: 500, suffix: "+", label: "Students Trained" },
            { value: 95, suffix: "%", label: "Success Rate" },
            { value: 50, suffix: "+", label: "Industry Partners" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="text-center p-8 rounded-2xl bg-dark-primary/50 border border-purple-accent/20"
            >
              <div className="text-5xl font-bold gradient-text">
                <Counter value={item.value} />
                {item.suffix}
              </div>
              <div className="text-text-grey mt-2">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 🔄 CURVED IMAGE BELT */}
        <div className="relative mt-28 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark-primary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark-primary to-transparent z-10" />

          <div className="perspective-[1200px]">
            <motion.div
              className="flex gap-20 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, ease: "linear", repeat: Infinity }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {[...beltImages, ...beltImages].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  className="max-h-44 w-auto rounded-xl"
                  initial={{ rotateY: i % 2 === 0 ? -25 : 25, scale: 0.9 }}
                  animate={{ rotateY: i % 2 === 0 ? -30 : 30 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
