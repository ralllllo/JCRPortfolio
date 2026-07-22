import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ecommerceImg from '../../../assets/soso.png';
import apiServiceImg from '../../../assets/local_zip.png';

const ProjectsSection = () => {
  return (
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
  );
};

export default ProjectsSection;
