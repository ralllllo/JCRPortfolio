import { ArrowLeft, Calendar, User, Code2, Server, Globe, Layers, Trophy, Wrench, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const [selectedGif, setSelectedGif] = useState(null);

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
                <User size={16} className="text-[#facc15]" /> Role: Full-Stack 개발 및 Infra 구축
              </div>
            </div>
            
            <div className="bg-[#334155] brutal-border brutal-shadow p-6 md:p-10 mt-8 text-base md:text-lg">
              <p className="font-bold leading-relaxed text-[#f8fafc]">
                소상공인들이 상품의 입출고, 발주, 거래처, 결제 및 지출 내역을 하나의 서비스에서 간편하게 통합 관리할 수 있도록 설계된 풀스택 이커머스 ERP 솔루션입니다. 챗봇 기능을 통해 매장 운영 데이터를 확인할 수 있습니다.
                
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
                {['Spring Boot', 'Java', 'Mybatis', 'MySQL'].map(t => (
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

        {/* Service Demonstration */}
        <section className="mt-16 mb-16">
          <SectionLabel>SERVICE DEMONSTRATION</SectionLabel>
          <div className="w-full bg-[#334155] brutal-border brutal-shadow overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#1e293b]">
                  <th className="p-4 border-b-4 border-r-4 border-[#020617] text-[#facc15] font-black text-xl w-2/3">설명</th>
                  <th className="p-4 border-b-4 border-[#020617] text-[#facc15] font-black text-xl w-1/3 text-center">시연 영상</th>
                </tr>
              </thead>
              <tbody className="text-[#f8fafc]">
                {[
                  {
                    title: '새 품목 등록',
                    desc: '새로운 상품을 시스템에 등록하고 초기 재고를 설정합니다.',
                    gif: '/gifs/soso_new_item.gif'
                  },
                  {
                    title: '출고',
                    desc: '등록된 상품을 출고 처리하고 재고를 차감합니다.',
                    gif: '/gifs/soso_release.gif'
                  },
                  {
                    title: '재고 조정',
                    desc: '실사 재고와 시스템 재고의 오차를 조정하여 정합성을 맞춥니다.',
                    gif: '/gifs/soso_adjustment.gif'
                  },
                  {
                    title: '자동 재고 제어 관리',
                    desc: '안전 재고 이하로 떨어질 경우 알림을 주고 자동으로 발주를 유도합니다.',
                    gif: '/gifs/soso_auto_control.gif'
                  },
                  {
                    title: '공동 그룹 생성',
                    desc: '다른 사업자와 함께 발주할 수 있는 공동 발주 그룹을 생성합니다.',
                    gif: '/gifs/soso_group_create.gif'
                  },
                  {
                    title: '공동 발주 그룹 관리',
                    desc: '생성된 공동 발주 그룹의 진행 상태를 관리하고 참여자를 확인합니다.',
                    gif: '/gifs/soso_group_manage.gif'
                  }
                ].map((demo, i) => (
                  <tr key={i} className="border-b-4 border-[#020617] last:border-b-0 hover:bg-[#1e293b] transition-colors">
                    <td className="p-4 align-middle border-r-4 border-[#020617]">
                      <h4 className="text-xl font-black mb-2 text-[#38bdf8]">{demo.title}</h4>
                      <p className="font-bold text-gray-300 leading-relaxed text-base">{demo.desc}</p>
                    </td>
                    <td className="p-3 bg-[#0f172a] align-middle">
                      <button 
                        onClick={() => setSelectedGif(demo.gif)}
                        className="w-full py-2 bg-[#1e293b] brutal-border flex flex-col items-center justify-center hover:bg-[#334155] transition-colors group"
                      >
                        <Play size={28} className="text-[#38bdf8] mb-1 group-hover:scale-110 transition-transform" />
                        <span className="text-[#f8fafc] font-black text-sm">영상 보기</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              },
              {
                icon: '🤖',
                title: 'AI 코딩 에이전트 활용(Vibe Coding)',
                desc: (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-300 font-medium">
                    <li>AI 도구를 적극 활용하여 프론트엔드/백엔드 통합 개발 생산성 향상 및 신규 기술(챗봇 등) 도입</li>
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

        {/* Troubleshooting */}
        <section className="mb-16">
          <div className="inline-flex bg-[#f8fafc] text-[#020617] font-black px-4 py-2 brutal-border brutal-shadow-sm mb-6 items-center gap-2">
            <Wrench size={20} /> <span>TROUBLESHOOTING</span>
          </div>
          <div className="flex flex-col gap-6">
            {[
              {
                issue: '다중 매장 등록 환경에서의 GCS 이미지 매핑 및 데이터 정합성 이슈',
                problem: '초기 설계 시 파일 저장 기준이 사용자 번호로만 묶여 있어, 다점포 등록 시 서로 다른 매장의 사진이 덮어씌워지거나 1·2호점 이미지가 혼선되는 데이터 꼬임 현상 발생',
                solution: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-[#f8fafc]">식별자 확장:</strong> 공통 파일 저장 DTO 및 로직에 대상 객체의 고유 번호를 담을 수 있는 필드 도입</li>
                    <li><strong className="text-[#f8fafc]">서비스 계층 분리:</strong> GCS 업로드 및 DB 기록 시 매장 식별자를 함께 처리하는 전용 메서드를 신설하여 매장별 데이터 격리 구조 구축</li>
                    <li><strong className="text-[#f8fafc]">조회 로직 최적화:</strong> 매장 수정 및 조회 시 매핑된 사진만 정확히 타겟팅하여 조회 및 교체하도록 개선</li>
                  </ul>
                )
              },
              {
                issue: 'GCE 인스턴스 스펙 변경 과정에서의 재부팅 이후 DB 커넥션 및 데이터 정합성 이슈',
                problem: '재부팅 이후 챗봇 기능 테스트 중, 시스템이 실시간 최신 DB 데이터를 반영하지 못하고 구버전 데이터를 기반으로 응답하여 데이터 연결이 비정상적으로 꼬이는 현상 발생',
                solution: (<ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-[#f8fafc]">인프라 세션 및 커넥션 풀 분석:</strong> 인스턴스 재부팅 시점에 기존 애플리케이션 프로세스가 비정상적으로 종료되면서, 커넥션 풀이 기존 연결을 깔끔하게 해제하지 못하고 락이 걸리거나 구버전 컨테이너 세션이 일부 잔류하여 데이터 싱크가 어긋났음을 확인함.</li>
                    <li><strong className="text-[#f8fafc]">리소스 초기화 및 연결 재검증:</strong> 배포 및 재시작 파이프라인에서 커넥션 맺고 끊는 생명주기 설정을 재검증하여, 재부팅 이후에도 새로운 DB 인스턴스와 완벽하게 동기화된 커넥션을 맺도록 로직을 안정화함.</li>
                    
                  </ul>)
              },
              {
                issue: ' 마감 직전, 공동발주 상품에 다수의 사업자가 동시에 참여하기를 요청하는 상황 발생',
                problem: '자바 단에서만 현재 인원 < 목표 인원 여부를 확인한 뒤 DB를 업데이트하면, 동시 접속 시점에 여러 요청이 동시에 검사 로직을 통과해버림으로 인해 설정된 목표 인원을 초과하여 모집되는 데이터 정합성 문제가 발생',
                solution: (<ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-[#f8fafc]">DB 쿼리 레벨의 조건부 원자적 업데이트 적용:</strong> DB의 로우 락을 활용하여 한 번에 하나의 요청만 인원을 검사하고 1씩 증가시키게 하였음.  </li>
                    <li><strong className="text-[#f8fafc]">단일 쿼리 상태 변경:</strong>쿼리 내부에서 CASE WHEN 절을 사용해 업데이트 직후 인원이 꽉 차면 공구 상태를 자동으로 모집 완료로 변경하도록 최적화</li>
                    <li><strong className="text-[#f8fafc]">예외 처리:</strong>서비스 로직에서는 해당 쿼리의 반영 결과가 0으로 반환되면, 이미 마감된 것으로 간주하여 모집 인원이 마감이라는 예외를 즉시 던지도록 처리 </li>

                  </ul>)
              },
              {
                issue: '재고 출고 시 선입선출 로직 구현 및 동시성 방지',
                problem: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-[#f8fafc]">선입선출 로직의 복잡성:</strong> 유통기한이 임박한 재고부터 빼야 하는데, 한 번의 출고 요청 수량이 유통기한이 가장 짧은 첫 배치의 잔여 수량보다 클 경우, 부족분만큼 그 다음 배치를 찾아 이어서 빼야 하는 까다로운 차감 로직이 필요</li>
                    <li><strong className="text-[#f8fafc]">마스터 재고 유실:</strong> 동시 출고 상황에서 서비스 단에서 불러온 전체 재고 값에 출고량을 뺀 값을 DB에 그대로 덮어씌울 경우, 찰나의 순간 다른 사람의 출고 내역이 무시되고 덮어씌워져 실제 재고와 DB 수량이 불일치하는 현상이 발생</li>
                  </ul>
                ),
                solution: (
                  <ul className="list-disc pl-5 space-y-3">
                    <li><strong className="text-[#f8fafc]">다중 배치 순차 차감 루프:</strong>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-300 text-sm">
                        <li>출고 가능한 배치들을 쿼리에서 유통기한 오름차순으로 먼저 정렬</li>
                        <li>자바 로직에서 for 루프와 현재 배치 잔량, 남은 출고 필요량 메서드를 결합해, 첫 배치에서 뺄 수 있는 만큼만 빼고 남은 수량은 다음 배치로 이월하여 순차적으로 차감하도록 구현해 선입선출을 완벽하게 해결</li>
                      </ul>
                    </li>
                    <li><strong className="text-[#f8fafc]">상대적 증감 쿼리로 덮어쓰기 방지:</strong>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-300 text-sm">
                        <li>마스터 재고를 차감할 때 자바에서 계산한 고정값으로 DB를 업데이트하지 않고, 쿼리 자체에 형태의 상대적 증감 수식을 적용</li>
                        <li>DB 엔진이 연산을 직접 처리하게 하여, 동시에 여러 트랜잭션이 들어와도 뺄셈 누락 없이 정확한 마스터 재고를 유지하도록 정합성을 보장</li>
                      </ul>
                    </li>
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
            <a href="https://github.com/ralllllo/SoSo-BackEnd" target="_blank" rel="noopener noreferrer" className="bg-[#facc15] text-[#020617] font-black px-8 py-4 brutal-border brutal-shadow hover-brutal transition-all flex items-center gap-3 text-lg cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg> Github
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

      {/* Modal */}
      {selectedGif && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020617]/80 backdrop-blur-sm" onClick={() => setSelectedGif(null)}>
          <div className="relative w-full max-w-4xl bg-[#1e293b] brutal-border brutal-shadow p-2 md:p-4" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedGif(null)}
              className="absolute -top-12 right-0 text-[#f8fafc] hover:text-[#f472b6] transition-colors"
            >
              <X size={36} />
            </button>
            <img src={selectedGif} alt="시연 영상" className="w-full h-auto max-h-[70vh] object-contain brutal-border" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SoSoProjectPage;
