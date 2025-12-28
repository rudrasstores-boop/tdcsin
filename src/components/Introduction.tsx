import { Terminal, ShieldAlert, Cpu, Binary } from 'lucide-react';

const Courses = () => {
  const courseData = [
    { title: "Ethical Hacking", icon: <Terminal />, desc: "Master offensive security with real-world exploit scenarios." },
    { title: "Penetration Testing", icon: <Target />, desc: "Learn to identify and neutralize vulnerabilities systematically." },
    { title: "Network Defense", icon: <ShieldAlert />, desc: "Architect secure infrastructures against sophisticated threats." },
    { title: "IoT Security", icon: <Binary />, desc: "Deep dive into firmware analysis and device hardening." }
  ];

  return (
    <section className="py-24 bg-[#120A1A] relative">
      <div className="container mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-sm font-bold tracking-[0.4em] text-[#7B4DFF] uppercase mb-2">Training Programs</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#FF7A45] to-[#E84AA5]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseData.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                rotateY: 15, 
                rotateX: -5,
                translateZ: 50
              }}
              className="perspective-1000 relative p-8 rounded-3xl bg-[#1A0F24] border border-white/5 group cursor-pointer overflow-hidden shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Inner Glow Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5DA2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#120A1A] text-[#FF7A45] mb-6 border border-white/10 group-hover:border-[#FF5DA2]/50 group-hover:text-[#FF5DA2] transition-all duration-300">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF7A45] group-hover:to-[#E84AA5]">
                  {course.title}
                </h3>
                <p className="text-sm text-[#CFCFD6] leading-relaxed font-light">
                  {course.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};