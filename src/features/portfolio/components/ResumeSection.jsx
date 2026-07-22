import { Lightbulb, Heart, Zap, Award, GraduationCap, Code2, Box, Briefcase, Laptop, Rocket } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="about" className="scroll-mt-28 w-full flex flex-col items-center">
      {/* Title Area */}
      <div className="w-full mb-12">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#f8fafc]">ABOUT</h2>
          <div className="h-2 flex-1 bg-[#020617]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
        {/* Left Column : Description & Philosophy */}
        <div className="flex flex-col gap-10">
          <p className="text-slate-300 leading-relaxed text-base md:text-lg">
            플랫폼을 가리지 않고 사용자가 실제로 쓰는 서비스를 만들어가는 풀스택 개발자입니다.<br/>
            전통적 개발 방식, 바이브 코딩 프로젝트 경험이 둘 다 있으며
             소상공인을 위한 통합 경량화 ERP 시스템 및 지역 기반 정보 공유 커뮤니티 등 실생활에 밀접하고 기술적 도전이 있는 프로젝트에서 끈기 있게 문제를 해결해왔습니다.
              프론트엔드부터 백엔드까지 전체적인 아키텍처를 고민하며, 최적의 사용자 경험과 안정적인 서비스를 제공하기 위해 지속적으로 학습하고 성장하고 있습니다.
          </p>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#f8fafc]">개발 철학</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#1e293b] p-5 brutal-border brutal-shadow-sm hover:translate-y-[-2px] transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="text-[#38bdf8]" size={20} />
                  <h4 className="font-bold text-[#f8fafc]">문제 해결</h4>
                </div>
                <p className="text-sm text-slate-400">복잡한 문제를 단순하고 우아한 솔루션으로 풀어냅니다.</p>
              </div>

              <div className="bg-[#1e293b] p-5 brutal-border brutal-shadow-sm hover:translate-y-[-2px] transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="text-[#f472b6]" size={20} />
                  <h4 className="font-bold text-[#f8fafc]">사용자 중심</h4>
                </div>
                <p className="text-sm text-slate-400">항상 사용자 경험을 최우선으로 생각합니다.</p>
              </div>

              <div className="bg-[#1e293b] p-5 brutal-border brutal-shadow-sm hover:translate-y-[-2px] transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-[#bef264]" size={20} />
                  <h4 className="font-bold text-[#f8fafc]">지속적 학습</h4>
                </div>
                <p className="text-sm text-slate-400">새로운 기술과 트렌드를 끊임없이 학습합니다.</p>
              </div>

              <div className="bg-[#1e293b] p-5 brutal-border brutal-shadow-sm hover:translate-y-[-2px] transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-[#38bdf8]" size={20} />
                  <h4 className="font-bold text-[#f8fafc]">품질 우선</h4>
                </div>
                <p className="text-sm text-slate-400">테스트와 코드 리뷰를 통해 높은 품질을 유지합니다.</p>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column : Journey (Timeline) */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-[#f8fafc]">여정</h3>
          <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-start gap-6">
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#020617] border-2 border-[#38bdf8] shrink-0">
                <Rocket className="text-[#38bdf8]" size={18} />
              </div>
              <div className="flex flex-col pt-1.5">
                <span className="text-[#38bdf8] font-bold text-sm mb-1">2025.02</span>
                <h4 className="text-lg font-bold text-[#f8fafc] mb-2">4년제 컴퓨터소프트웨어학과 졸업</h4>
                <p className="text-sm text-slate-400">CS의 기본기를 탄탄히 다지는 것에 집중하며 매 학기 전공장학금을 놓치지 않았습니다.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-start gap-6">
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#020617] border-2 border-[#38bdf8] shrink-0">
                <GraduationCap className="text-[#38bdf8]" size={18} />
              </div>
              <div className="flex flex-col pt-1.5">
                <span className="text-[#38bdf8] font-bold text-sm mb-1">2026.01</span>
                <h4 className="text-lg font-bold text-[#f8fafc] mb-2">풀스택 과정 수료 및 커리어 시작</h4>
                <p className="text-sm text-slate-400">풀스택 개발자 양성 과정을 수료하며 Spring과 React 기반의 전반적인 웹 개발 역량을 갖추었습니다.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-start gap-6">
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#020617] border-2 border-[#38bdf8] shrink-0">
                <Code2 className="text-[#38bdf8]" size={18} />
              </div>
              <div className="flex flex-col pt-1.5">
                <span className="text-[#38bdf8] font-bold text-sm mb-1">2026.04</span>
                <h4 className="text-lg font-bold text-[#f8fafc] mb-2">로컬 커뮤니티 프로젝트</h4>
                <p className="text-sm text-slate-400">Spring과 Servlet/JSP를 활용하여 지역 기반 정보 공유 커뮤니티인 'LocalZip' 프로젝트를 성공적으로 완수했습니다.</p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative flex items-start gap-6">
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#020617] border-2 border-[#38bdf8] shrink-0">
                <Box className="text-[#38bdf8]" size={18} />
              </div>
              <div className="flex flex-col pt-1.5">
                <span className="text-[#38bdf8] font-bold text-sm mb-1">2026.06</span>
                <h4 className="text-lg font-bold text-[#f8fafc] mb-2">이커머스 ERP 솔루션 개발</h4>
                <p className="text-sm text-slate-400">React와 Spring Boot를 결합하여 소상공인을 위한 통합 경량화 ERP 시스템을 구축했습니다.</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
