import HeroSection from './components/HeroSection';
import ResumeSection from './components/ResumeSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

const PortfolioPage = () => {
  return (
    <div className="w-full py-16 flex flex-col gap-32">
      <HeroSection />
      <ResumeSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default PortfolioPage;
