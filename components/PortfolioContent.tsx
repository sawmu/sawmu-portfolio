import { AboutSection } from "./sections/AboutSection";
import { AchievementsSection } from "./sections/AchievementsSection";
// import { BlogSection } from "./sections/BlogSection";
// import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
// import { ServicesSection } from "./sections/ServicesSection";
import { SkillsSection } from "./sections/SkillsSection";
// import { TestimonialsSection } from "./sections/TestimonialsSection";

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
        <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    
      {/* <CertificationsSection /> */}
      <AchievementsSection />
      {/* <ServicesSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
    </>
  );
}

export default PortfolioContent;
