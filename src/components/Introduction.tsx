import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, Target, ShieldAlert, Binary } from 'lucide-react';

const CourseCard = ({ course }: { course: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to prevent jerky movement
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Map mouse movement to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate position from -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[350px] w-full rounded-3xl bg-[#1A0F24] border border-white/10 p-8 cursor-pointer group shadow-2xl transition-colors hover:border-[#FF5DA2]/40"
    >
      {/* 3D GLOW EFFECT (The Light that follows mouse) */}
      <motion.div
        style={{
          transform: "translateZ(20px)",
        }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7B4DFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      />

      <div style={{ transform: "translateZ(75px)" }} className="relative z-10 flex flex-col h-full">
        {/* ICON - Pops out the most */}
        <div className="w-16 h-16 rounded-2xl bg-[#120A1A] border border-white/5 flex items-center justify-center text-[#FF7A45] mb-8 shadow-inner group-hover:text-[#FF5DA2] group-hover:border-[#FF5DA2]/50 transition-all duration-500">
          {React.cloneElement(course.icon, { size: 32 })}
        </div>

        {/* TEXT CONTENT */}
        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
          {course.title}
        </h3>
        
        <p className="text-[#CFCFD6] text-sm leading-relaxed font-light">
          {course.desc}
        </p>

        <div className="mt-auto flex items-center gap-2 text-[#FF7A45] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          Initialize Module <span className="text-lg">→</span>
        </div>
      </div>

      {/* BACKGROUND DECOR */}
      <div className="absolute bottom-4 right-4 text-white/5 font-mono text-6xl select-none group-hover:text-[#7B4DFF]/10 transition-colors">
        0{course.id}
      </div>
    </motion.div>
  );
};

const CourseSection = () => {
  const courseData = [
    { id: 1, title: "Ethical Hacking", icon: <Terminal />, desc: "Master offensive security with real-world exploit scenarios." },
    { id: 2, title: "Penetration Testing", icon: <Target />, desc: "Learn to identify and neutralize vulnerabilities systematically." },
    { id: 3, title: "Network Defense", icon: <ShieldAlert />, desc: "Architect secure infrastructures against sophisticated threats." },
    { id: 4, title: "IoT Security", icon: <Binary />, desc: "Deep dive into firmware analysis and device hardening." }
  ];

  return (
    <section className="py-32 bg-[#120A1A] perspective-1000">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;