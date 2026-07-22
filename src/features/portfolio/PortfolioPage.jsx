import { ArrowUpRight, Code, Terminal, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import ecommerceImg from '../../assets/soso.png';
import apiServiceImg from '../../assets/local_zip.png';
import ResumeSection from './components/ResumeSection';

const PortfolioPage = () => {
  return (
    <div className="w-full py-16 flex flex-col gap-32">
      
      {/* Hero Section */}
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
      
      {/* Resume/Introduction Section */}
      <ResumeSection />
      
      {/* Skills Section */}
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
      
      {/* Projects Section */}
      <section id="projects" className="scroll-mt-28 w-full">
         <div className="flex items-center gap-4 mb-12">
           <h2 className="text-4xl md:text-5xl font-black uppercase text-[#f8fafc]">Projects</h2>
           <div className="h-2 flex-1 bg-[#020617]"></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <Link to="/project/soso" className="group bg-[#334155] p-6 brutal-border brutal-shadow hover-brutal flex flex-col h-full cursor-pointer transition-all block">
               <div className="w-full h-48 bg-[#38bdf8] text-[#020617] brutal-border mb-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[#020617] opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none"></div>
                 <img src={ecommerceImg} alt="E-COMMERCE Project Screenshot" className="w-full h-full object-cover object-top" />
               </div>
               <div className="flex justify-between items-start mb-4">
                 <div>
                   <h3 className="text-2xl font-black uppercase text-[#f8fafc]">소상공인을 위한 경량화 ERP</h3>
                   <p className="text-sm font-bold text-slate-400 mt-1">2026.05 - 2026.06</p>
                 </div>
               </div>
               <p className="font-medium mb-6 flex-1 text-lg text-slate-300">
                 풀스택 이커머스 솔루션. 실시간 재고, 발주, 거래처, 결제, 지출 관리를 하나의 서비스에서 통합 관리 
               </p>
               <div className="flex flex-wrap gap-2 mb-6">
                 {['React', 'Spring Boot', 'Mysql'].map(t => (
                   <span key={t} className="bg-[#1e293b] text-[#f8fafc] px-2 py-1 text-xs font-bold brutal-border">{t}</span>
                 ))}
                 <span className="bg-[#f8fafc] text-[#1e293b] px-2 py-1 text-xs font-bold brutal-border">+9</span>
               </div>
               <div className="w-full bg-[#f8fafc] text-[#020617] font-bold py-3 brutal-border flex justify-center items-center gap-2 group-hover:bg-[#f472b6] group-hover:text-[#020617] transition-colors cursor-pointer mt-auto">
                 VIEW PROJECT <ArrowUpRight size={18} />
               </div>
            </Link>
            
            {/* Project 2 */}
            <Link to="/project/localzip" className="group bg-[#334155] p-6 brutal-border brutal-shadow hover-brutal flex flex-col h-full cursor-pointer transition-all block">
               <div className="w-full h-48 bg-[#f472b6] text-[#020617] brutal-border mb-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[#020617] opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none"></div>
                 <img src={apiServiceImg} alt="API SERVICE Project Screenshot" className="w-full h-full object-cover object-top" />
               </div>
               <div className="flex justify-between items-start mb-4">
                 <div>
                   <h3 className="text-2xl font-black uppercase text-[#f8fafc]">지역 기반 정보 공유 커뮤니티 사이트</h3>
                   <p className="text-sm font-bold text-slate-400 mt-1">2026.03 - 2026.04</p>
                 </div>
               </div>
               <p className="font-medium mb-6 flex-1 text-lg text-slate-300">
                 커뮤니티, 건의사항, 모임, 공공데이터 안심지도를 통한 정보 습득 및 공유
               </p>
               <div className="flex flex-wrap gap-2 mb-6">
                 {['Spring(STS3)', 'Servlet', 'JSP'].map(t => (
                   <span key={t} className="bg-[#1e293b] text-[#f8fafc] px-2 py-1 text-xs font-bold brutal-border">{t}</span>
                 ))}
                 <span className="bg-[#f8fafc] text-[#1e293b] px-2 py-1 text-xs font-bold brutal-border">+7</span>
               </div>
               <div className="w-full bg-[#f8fafc] text-[#020617] font-bold py-3 brutal-border flex justify-center items-center gap-2 group-hover:bg-[#38bdf8] group-hover:text-[#020617] transition-colors cursor-pointer mt-auto">
                 VIEW PROJECT <ArrowUpRight size={18} />
               </div>
            </Link>
         </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
