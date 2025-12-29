import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const LiquidCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Core cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#FF7A45] to-[#E84AA5] z-[9999] pointer-events-none"
        style={{ x: smoothX, y: smoothY }}
      />

      {/* Soft glow */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full bg-[#FF5DA2]/20 blur-2xl z-[9998] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />
    </>
  );
};

export default LiquidCursor;
