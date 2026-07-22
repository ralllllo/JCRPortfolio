import { Code, ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 pt-10">
      <div className="flex-1 space-y-8 text-center md:text-left">
        <div className="inline-block bg-[#38bdf8] text-[#020617] font-mono font-bold px-4 py-2 brutal-border brutal-shadow-sm -rotate-2">
          FullStack DEVELOPER
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-none tracking-tight text-[#f8fafc]">
          안녕하세요 <br/>정채림 <br/> 입니다.
        </h1>
        <p className="text-xl font-medium max-w-lg mx-auto md:mx-0 text-slate-300">
          신입 풀스택 개발자 정채림입니다. 
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
           <button 
             onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-[#020617] text-[#f8fafc] hover:bg-[#f472b6] hover:text-[#020617] px-6 py-3 font-bold brutal-border brutal-shadow hover-brutal flex items-center justify-center gap-2 transition-all cursor-pointer text-sm sm:text-base">
             프로젝트 보기 <ArrowUpRight size={20} />
           </button>
           <a href="https://github.com/ralllllo" target="_blank" rel="noopener noreferrer" className="bg-[#f8fafc] text-[#020617] hover:bg-[#bef264] px-6 py-3 font-bold brutal-border brutal-shadow hover-brutal flex items-center justify-center gap-3 transition-all cursor-pointer text-sm sm:text-base">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
               <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
               <path d="M9 18c-4.51 2-5-2-7-2"/>
             </svg>
             Github
           </a>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center pb-10 md:pb-0">
        <div className="relative w-full max-w-lg bg-[#1e293b] p-8 sm:p-10 brutal-border brutal-shadow font-mono text-base sm:text-lg mt-4 md:mt-0">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#ef4444]"></div>
              <div className="w-4 h-4 rounded-full bg-[#eab308]"></div>
              <div className="w-4 h-4 rounded-full bg-[#3b82f6]"></div>
            </div>
            <span className="text-slate-400 text-sm">~/portfolio</span>
          </div>
          
          {/* Code Content */}
          <div className="text-[#f8fafc] font-medium tracking-wide">
            <p><span className="text-[#f472b6]">const</span> <span className="text-[#38bdf8]">developer</span> = {'{'}</p>
            <div className="pl-8 space-y-4 mt-5 mb-5">
              <p><span className="text-[#fde047]">name</span>: <span className="text-[#38bdf8]">"정채림"</span>,</p>
              <p><span className="text-[#fde047]">e-mail</span>: <span className="text-[#f472b6]">"wjdcofla02@naver.com"</span>,</p>
              <p><span className="text-[#fde047]">projects</span>: <span className="text-[#f8fafc]">2</span>,</p>
              <p><span className="text-[#fde047]">status</span>: <span className="text-[#38bdf8]">"building"</span>,</p>
              <p><span className="text-[#fde047]">focus</span>: [</p>
              <p className="pl-8"><span className="text-[#38bdf8]">"Frontend"</span>, <span className="text-[#38bdf8]">"Backend"</span></p>
              <p>],</p>
            </div>
            <p>{'}'}</p>
          </div>

          {/* Badges */}
          <div className="absolute -bottom-6 -left-6 bg-[#fde047] text-[#020617] font-black px-6 py-3 brutal-border shadow-sm text-lg">
            100% PASSION
          </div>
          <div className="absolute -top-6 -right-6 bg-[#38bdf8] text-[#020617] p-4 brutal-border shadow-sm">
            <Code size={44} strokeWidth={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
