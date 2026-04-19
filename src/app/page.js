import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { MouseFollower } from "@/components/effects/MouseFollower";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { AboutSection } from "@/components/sections/AboutSection";
import { CertificateSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LanguageSection } from "@/components/sections/LanguagesSection";
import { ProjectSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";


export default function HomePage() {
  return (
    <SmoothScroll>
      {/* Global Background Effects */}
      <GradientBlobs />
      <ParticleBackground />
      <MouseFollower />

      {/* Layout */}
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
        <CertificateSection />
        <LanguageSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </SmoothScroll>
  );
}