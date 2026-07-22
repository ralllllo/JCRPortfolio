import { Code, Terminal, Layers } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-28 w-full">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-[#f8fafc]">Skills</h2>
        <div className="h-2 flex-1 bg-[#020617]"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#334155] p-8 brutal-border brutal-shadow hover-brutal transition-transform">
          <div className="flex items-center gap-3 mb-6 text-[#bef264]">
            <Code size={32} />
            <h3 className="text-2xl font-black text-[#f8fafc]">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Tailwind', 'Zustand', 'Vite', 'JavaScript', 'jQuery'].map(t => (
              <span key={t} className="bg-[#f8fafc] text-[#020617] px-3 py-1 font-bold brutal-border text-sm">{t}</span>
            ))}
          </div>
        </div>
        
        <div className="bg-[#334155] p-8 brutal-border brutal-shadow hover-brutal transition-transform">
          <div className="flex items-center gap-3 mb-6 text-[#38bdf8]">
            <Terminal size={32} />
            <h3 className="text-2xl font-black text-[#f8fafc]">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Spring Boot', 'Java', 'Oracle', 'MySQL', 'Redis', 'Servlet', 'JSP'].map(t => (
              <span key={t} className="bg-[#f8fafc] text-[#020617] px-3 py-1 font-bold brutal-border text-sm">{t}</span>
            ))}
          </div>
        </div>
        
        <div className="bg-[#334155] p-8 brutal-border brutal-shadow hover-brutal transition-transform">
          <div className="flex items-center gap-3 mb-6 text-[#f472b6]">
            <Layers size={32} />
            <h3 className="text-2xl font-black text-[#f8fafc]">Infra</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Docker', 'AWS', 'CI/CD', 'Git Actions', 'GCP', 'NginX', 'Firebase'].map(t => (
              <span key={t} className="bg-[#f8fafc] text-[#020617] px-3 py-1 font-bold brutal-border text-sm">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
