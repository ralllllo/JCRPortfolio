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

const LocalZipPage = () => {
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
            
            <h2 className="text-2xl md:text-3xl mt-4 font-bold text-[#f8fafc]">지역 기반 정보 공유 커뮤니티 사이트</h2>
            
            <div className="flex flex-wrap gap-4 mt-4 font-bold">
              <div className="bg-[#334155] text-[#f8fafc] brutal-border px-4 py-2 flex items-center gap-2 text-sm">
                <Calendar size={16} className="text-[#38bdf8]" /> Period: 2026.03 - 2026.04
              </div>
              <div className="bg-[#334155] text-[#f8fafc] brutal-border px-4 py-2 flex items-center gap-2 text-sm">
                <User size={16} className="text-[#facc15]" /> Role: DB, Infra 담당자
              </div>
            </div>
            
            <div className="bg-[#334155] brutal-border brutal-shadow p-6 md:p-10 mt-8 text-base md:text-lg">
              <p className="font-bold leading-relaxed text-[#f8fafc]">
                커뮤니티, 건의사항, 모임, 공공데이터 안심지도를 통한 본인이 살고있는 동네의 정보 습득 및 공유를 할 수 있습니다.
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
                {['JavaScript', 'jQuery', 'HTML5/CSS3', 'Ajax'].map(t => (
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
                {['Spring Boot(STS3)', 'Java', 'Oracle' ].map(t => (
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
                {['AWS(EC2)'].map(t => (
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
              { title: '커뮤니티', desc: '게시판 CRUD 일반/모임/공지 게시판 운영 및 공통 파일 테이블 연동' },
              { title: '모임 참여 시스템', desc: '실시간 모임 신청, 승인 및 인원 관리' },
              { title: '공공데이터 안심 지도', desc: '공공 API 연동으로 동네 대피소, 치안, 공중화장실 시각화' },
              { title: '관리자페이지', desc: '차트js를 활용한 방문자 등 일별 통계 및 회원 관리, 공지사항 관리' }
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
                icon: '✉️',
                title: '이메일 인증',
                desc: (
                  <p className="text-sm text-slate-300 font-medium">
                    Java와 Spring Framework 기반으로 SMTP 메일 서버를 연동하여 회원가입 시 이메일 인증 절차 및 비밀번호 찾기 기능 개발
                  </p>
                )
              },
              {
                icon: '📝',
                title: '공지사항(관리자), Q&A',
                desc: (
                  <p className="text-sm text-slate-300 font-medium">
                    Spring MVC 패턴을 적용하여 공지사항 및 Q&A 등록, 수정, 삭제(CRUD) 기능 및 비동기 처리 구현
                  </p>
                )
              },
              {
                icon: '📂',
                title: '파일 업로드 & 다운로드',
                desc: (
                  <p className="text-sm text-slate-300 font-medium">
                    MultipartResolver를 활용한 첨부파일 업로드 기능 구현 및 고유 파일명 매핑을 통한 데이터 유실 방지 처리
                  </p>
                )
              },
              {
                icon: '☁️',
                title: 'Infra 배포 및 DB 관리',
                desc: (
                  <p className="text-sm text-slate-300 font-medium">
                    클라우드 환경(AWS EC2)을 활용한 안정적인 서버 배포 환경 구축 및 Oracle DB의 체계적인 테이블 설계와 쿼리 성능 최적화 도모
                  </p>
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
            <a href="https://github.com/ralllllo/Local_Zip" target="_blank" rel="noopener noreferrer" className="bg-[#facc15] text-[#020617] font-black px-8 py-4 brutal-border brutal-shadow hover-brutal transition-all flex items-center gap-3 text-lg cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg> Github
            </a>
            <a href="http://13.209.40.95" target="_blank" rel="noopener noreferrer" className="bg-[#38bdf8] text-[#020617] font-black px-8 py-4 brutal-border brutal-shadow hover-brutal transition-all flex items-center gap-3 text-lg cursor-pointer">
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

export default LocalZipPage;
