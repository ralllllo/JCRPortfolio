import { ArrowLeft, Calendar, User, Code2, Server, Globe, Layers, Trophy, Wrench } from 'lucide-react';
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
                LocalZip
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
                <User size={16} className="text-[#facc15]" /> Role: Full-Stack 개발 및 DB/Infra 구축
              </div>
            </div>
            
            <div className="bg-[#334155] brutal-border brutal-shadow p-6 md:p-10 mt-8 text-base md:text-lg">
              <p className="font-bold leading-relaxed text-[#f8fafc]">
                커뮤니티, 건의사항, 모임, 공공데이터 안심지도를 통한 본인이 살고있는 동네의 정보 습득 및 공유를 할 수 있습니다.<br/>
                
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
                {['Spring Boot(STS3)', 'Java', 'Oracle', 'Servlet', 'JSP' ].map(t => (
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
              },
              {
                icon: '🏛️',
                title: '전통적 MVC 아키텍처 기반 딥다이브',
                desc: (
                  <p className="text-sm text-slate-300 font-medium">
                    Spring, Servlet, JSP를 활용한 Server-Side Rendering(SSR) 방식의 정통 웹 애플리케이션 구현
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

        {/* Troubleshooting */}
        <section className="mb-16">
          <div className="inline-flex bg-[#f8fafc] text-[#020617] font-black px-4 py-2 brutal-border brutal-shadow-sm mb-6 items-center gap-2">
            <Wrench size={20} /> <span>TROUBLESHOOTING</span>
          </div>
          <div className="flex flex-col gap-6">
            {[
              {
                issue: '이중 라우터 환경에서의 로컬 DB 외부 접속 및 포트포워딩 이슈',
                problem: '팀 프로젝트 중 원격 팀원들이 공용으로 접근할 수 있는 DB 환경이 필요해 로컬 PC에 DB를 구축하고 포트포워딩 설정을 시도했지만 설정 후 외부(팀원들)에서 접속이 안 되는 현상이 발생했고, 네트워크 구조를 진단해 보니 공유기 2개가 직렬로 물리면서 이중 라우터 구조로 라우팅 경로가 꼬여있음을 확인',
                solution: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-[#f8fafc]">라우팅 경로 추적:</strong> 각 공유기의 WAN IP와 LAN 대역을 분석하여 패킷이 라우팅되는 경로를 추적</li>
                    <li><strong className="text-[#f8fafc]">경로 단순화 및 체인 설정:</strong> 상위 공유기와 하위 공유기 각각에서 포트포워딩 체인 설정 오류를 수정</li>
                    <li><strong className="text-[#f8fafc]">방화벽 점검:</strong> 방화벽 및 인바운드 규칙 점검을 통한 외부 접근 허용 테스트를 성공</li>
                  </ul>
                )
              },
              {
                issue: '동일한 서버 내에 구축된 Tomcat과 Oracle Database 간의 연동이 실패하며 애플리케이션이 정상적으로 구동되지 않는 현상 발생',
                problem: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-[#f8fafc]">접속 경로 및 설정 불일치:</strong> 로컬 개발 환경 기준(localhost)으로 작성되었던 DB 접속 정보와 리스너 설정이 배포 서버 환경의 네트워크 및 프로세스 통신 규격과 정확히 맞물리지 않음</li>
                    <li><strong className="text-[#f8fafc]">부팅 프로세스 및 자원 한계:</strong> 프리티어 EC2 환경에서 무거운 Oracle DB가 완전히 기동되기 전에 Tomcat이 먼저 실행되면서, 커넥션 풀 초기화 단계에서 연결 타임아웃 또는 거부 에러 발생</li>
                  </ul>
                ),
                solution: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-[#f8fafc]">접속 경로 재정비:</strong> 스프링 DB 설정 파일의 접속 주소를 EC2 내부 IP 기준으로 수정하고, Oracle 리스너 설정을 점검하여 내부 프로세스 간 통신 경로 확보</li>
                    <li><strong className="text-[#f8fafc]">설정 분리 및 기동 순서 최적화:</strong> 로컬 테스트용 설정과 배포용 설정 파일을 명확히 분리하여 빌드 오류 방지. 아울러 DB 서비스가 완전히 활성화된 것을 확인한 후 Tomcat을 기동하도록 배포 프로세스를 정돈하고 커넥션 설정 보완</li>
                  </ul>
                )
              },
              {
                issue: '게시글 작성/수정 폼에서 파일 첨부 시 기존 UI 버튼의 이벤트가 동작하지 않는 현상 발생',
                problem: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-[#f8fafc]">동적 DOM 변경과 핸들러 연결 끊김:</strong> 파일 첨부 컴포넌트가 렌더링되면서 DOM 구조가 동적으로 변경되었으나, 기존 이벤트 핸들러가 고정된 DOM 경로를 참조하고 있어 요소를 타겟팅하지 못함</li>
                    <li><strong className="text-[#f8fafc]">고유 식별자 추출 실패:</strong> 특히 복잡한 계층 구조 속에서 해당 게시글의 고유 번호를 정확히 특정하지 못해 요청이 누락되거나 에러가 발생</li>
                  </ul>
                ),
                solution: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-[#f8fafc]">동적 DOM 계층 재탐색 로직 구현:</strong> 고정된 셀렉터 방식 대신, 이벤트가 발생한 시점의 타겟을 기준으로 DOM 트리를 상향/하향 탐색하여 안정적으로 게시글 고유 번호를 추출할 수 있도록 로직을 개선</li>
                    <li><strong className="text-[#f8fafc]">이벤트 위임 적용 검토:</strong> 동적으로 생성되는 요소에도 이벤트가 안정적으로 바인딩될 수 있도록 구조를 보완</li>
                  </ul>
                )
              }
            ].map((ts, i) => (
              <div key={i} className="bg-[#334155] p-6 md:p-8 brutal-border brutal-shadow transition-all">
                <h3 className="text-xl font-black text-[#facc15] mb-4">💡 {ts.issue}</h3>
                <div className="space-y-4">
                  <div className="bg-[#1e293b] p-4 brutal-border">
                    <h4 className="text-[#f8fafc] font-black mb-2 flex items-center gap-2">
                      <span className="text-[#f472b6]">Q.</span> Problem
                    </h4>
                    <div className="text-sm text-slate-300 font-medium leading-relaxed">{ts.problem}</div>
                  </div>
                  <div className="bg-[#1e293b] p-4 brutal-border">
                    <h4 className="text-[#f8fafc] font-black mb-2 flex items-center gap-2">
                      <span className="text-[#38bdf8]">A.</span> Solution
                    </h4>
                    <div className="text-sm text-slate-300 font-medium leading-relaxed">{ts.solution}</div>
                  </div>
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
