import { ArrowLeft, Calendar, User, Code2, Server, Globe, Layers, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Box = ({ children, className = '' }) => (
  <div className={`bg-[#334155] p-8 brutal-border brutal-shadow hover-brutal transition-all ${className}`}>
    {children}
  </div>
);

const SectionLabel = ({ children }) => (
  <div className="inline-block bg-[#f8fafc] text-[#020617] font-black px-4 py-2 brutal-border brutal-shadow-sm mb-6 -rotate-1">
    {children}
  </div>
);

const SoSoProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pb-20 pt-10 px-6 font-sans">
      <div className="space-y-16">
        
        {/* Header / Intro */}
        <section className="space-y-8">
          <Link to="/" className="inline-flex items-center gap-2 bg-[#f8fafc] text-[#020617] font-bold px-4 py-2 brutal-border brutal-shadow hover-brutal transition-all w-fit cursor-pointer">
            <ArrowLeft size={20} /> 프로젝트 목록
          </Link>
          
          <div className="flex flex-col gap-6 pt-6">
            <div className="flex flex-col items-start gap-4 w-fit">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight relative z-10 text-[#f8fafc]">
                SoSo
                <div className="absolute -bottom-2 left-0 h-4 md:h-6 bg-[#38bdf8] w-full -z-10 translate-y-1 brutal-border"></div>
              </h1>
            </div>
            
            <div className="flex gap-4 text-sm mt-4 font-bold">
              <span className="bg-[#f8fafc] text-[#020617] brutal-border px-3 py-1 flex items-center gap-2">🌐 Web</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl mt-4 font-bold text-[#f8fafc]">소상공인을 위한 경량화 ERP</h2>
            
            <div className="flex flex-wrap gap-4 mt-4 font-bold">
              <div className="bg-[#334155] text-[#f8fafc] brutal-border px-4 py-2 flex items-center gap-2 text-sm">
                <Calendar size={16} className="text-[#38bdf8]" /> Period: 2026.05 - 2026.06
              </div>
              <div className="bg-[#334155] text-[#f8fafc] brutal-border px-4 py-2 flex items-center gap-2 text-sm">
                <User size={16} className="text-[#facc15]" /> Role: Git hub, Infra 담당자
              </div>
            </div>
            
            <div className="bg-[#334155] brutal-border brutal-shadow p-6 md:p-10 mt-8 text-base md:text-lg">
              <p className="font-bold leading-relaxed text-[#f8fafc]">
                소상공인들이 상품의 입출고, 발주, 거래처, 결제 및 지출 내역을 하나의 서비스에서 간편하게 통합 관리할 수 있도록 설계된 풀스택 이커머스 ERP 솔루션입니다. 챗봇 기능을 통해 매장 운영 데이터를 확인할 수 있습니다.
                (바이브 코딩)
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <SectionLabel>TECH STACK</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Box>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#38bdf8] p-3 text-[#020617] font-black brutal-border brutal-shadow-sm"><Code2 size={24}/></div>
                <h3 className="text-2xl font-black text-[#f8fafc]">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['React', 'Vite', 'Tailwind CSS', 'Zustand', 'JavaScript'].map(t => (
                  <span key={t} className="bg-[#f8fafc] text-[#020617] brutal-border px-3 py-1 font-bold text-sm">{t}</span>
                ))}
              </div>
            </Box>
            
            <Box>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#facc15] p-3 text-[#020617] font-black brutal-border brutal-shadow-sm"><Server size={24}/></div>
                <h3 className="text-2xl font-black text-[#f8fafc]">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Spring Boot', 'Java', 'Mybatis', 'MySQL' ,'Servlet', 'JSP'].map(t => (
                  <span key={t} className="bg-[#f8fafc] text-[#020617] brutal-border px-3 py-1 font-bold text-sm">{t}</span>
                ))}
              </div>
            </Box>
            
            <Box>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#f472b6] p-3 text-[#020617] font-black brutal-border brutal-shadow-sm"><Layers size={24}/></div>
                <h3 className="text-2xl font-black text-[#f8fafc]">Infrastructure</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['GCP', 'NginX', 'Redis', 'Docker','Github Actions'].map(t => (
                  <span key={t} className="bg-[#f8fafc] text-[#020617] brutal-border px-3 py-1 font-bold text-sm">{t}</span>
                ))}
              </div>
            </Box>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <SectionLabel>KEY FEATURES</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: '실시간 재고 관리', desc: '상품의 입출고 내역을 실시간으로 추적하고 관리' },
              { title: '발주 및 거래처', desc: '거래처별 발주 내역을 체계적으로 기록 및 조회' },
              { title: '결제 시스템 연동', desc: '안전하고 신속한 결제 처리를 위한 PG사 연동' },
              { title: '통계 및 대시보드', desc: '매출 추이와 지출 내역을 한눈에 파악하는 대시보드' }
            ].map((f, i) => (
              <Box key={i}>
                <h3 className="text-2xl font-black mb-3 text-[#f8fafc]">{f.title}</h3>
                <p className="font-bold text-base text-gray-300">{f.desc}</p>
              </Box>
            ))}
          </div>
        </section>

        <section className="mt-16 mb-16">
          <div className="inline-flex bg-[#f8fafc] text-[#020617] font-black px-4 py-2 brutal-border brutal-shadow-sm mb-6 items-center gap-2">
            <Trophy size={20} /> <span>ACHIEVEMENTS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🏗️',
                title: '도메인 중심 Full-Stack 설계',
                desc: (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-300 font-medium">
                    <li>Backend: 비즈니스 로직 모듈화 및 global 패키지 분리</li>
                    <li>Frontend: 디렉터리 기반으로 화면, 상태, Hooks를 도메인 단위 관리</li>
                  </ul>
                )
              },
              {
                icon: '🔐',
                title: '인증 고도화 및 공통 파일 시스템',
                desc: (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-300 font-medium">
                    <li>단일 JWT 기반에서 Access/Refresh 토큰 아키텍처로 고도화하여 보안성 강화</li>
                    <li>Bcrypt 보안 및 공공 데이터 API로 사업자 진위 여부 검증</li>
                    <li>GCS 연동을 통해 이미지/파일 데이터를 안전하게 업로드/다운로드</li>
                  </ul>
                )
              },
              {
                icon: '📦',
                title: '무결성 보장 재고관리',
                desc: (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-300 font-medium">
                    <li>입/출고 흐름에 따른 정확한 수량 계산</li>
                    <li>트랜잭션 처리를 통해 재고 데이터의 완벽한 무결성 보장</li>
                  </ul>
                )
              },
              {
                icon: '⚡',
                title: '동시성 이슈 해결 (공동발주)',
                desc: (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-300 font-medium">
                    <li>마감 직전 다수 참여 시 발생하는 모집 인원 초과 문제 방지</li>
                    <li>DB 원자적 카운트 업데이트(더블 밸리데이션)로 안정적 로직 구현</li>
                  </ul>
                )
              },
              {
                icon: '🚀',
                title: 'CI/CD 인프라 및 보안',
                desc: (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-300 font-medium">
                    <li>GitHub push 시 GCE에 자동 배포되도록 CI/CD 파이프라인 구축</li>
                    <li>NginX 리버스 프록시로 HTTPS 적용 및 서버 IP/구조 은닉</li>
                  </ul>
                )
              },
              {
                icon: '👥',
                title: 'Git 리딩 및 협업 환경 조성',
                desc: (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-300 font-medium">
                    <li>GitHub Flow 브랜치 전략 수립</li>
                    <li>팀원 간 Merge Conflict 해결 및 PR 리뷰 주도로 3인 프로젝트 리딩</li>
                  </ul>
                )
              }
            ].map((achieve, i) => (
              <div key={i} className="bg-[#334155] p-6 brutal-border brutal-shadow hover-brutal flex flex-col sm:flex-row gap-4 transition-all">
                <div className="w-14 h-14 flex items-center justify-center text-4xl shrink-0">
                  {achieve.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-[#f8fafc] mb-1 leading-tight">{achieve.title}</h3>
                  {achieve.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Links & Footer CTA */}
        <section className="pb-10">
          <SectionLabel>PROJECT LINKS</SectionLabel>
          <div className="flex flex-wrap gap-6 mb-20">
            <a href="https://github.com/ralllllo/SoSo-BackEnd" target="_blank" rel="noopener noreferrer" className="bg-[#facc15] text-[#020617] font-black px-8 py-4 brutal-border brutal-shadow hover-brutal transition-all flex items-center gap-3 text-lg cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg> Github
            </a>
            <a href="https://emsemsdl.shop/" target="_blank" rel="noopener noreferrer" className="bg-[#38bdf8] text-[#020617] font-black px-8 py-4 brutal-border brutal-shadow hover-brutal transition-all flex items-center gap-3 text-lg cursor-pointer">
              <Globe size={24} /> Live Site
            </a>
          </div>
          
          <div className="bg-[#334155] p-12 brutal-border brutal-shadow text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-black mb-8 text-[#f8fafc]">더 많은 프로젝트가 궁금하신가요?</h3>
            <Link to="/" className="bg-[#bef264] text-[#020617] px-10 py-4 font-black flex items-center gap-2 brutal-border brutal-shadow hover-brutal transition-colors">
              모든 프로젝트 보기 &rarr;
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SoSoProjectPage;
