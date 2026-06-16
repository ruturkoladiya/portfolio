import Navbar          from "@/components/Navbar";
import Footer          from "@/components/Footer";
import HeroSection      from "@/sections/HeroSection";
import PhilosophySection from "@/sections/PhilosophySection";
import ExpertiseSection  from "@/sections/ExpertiseSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection   from "@/sections/ProjectsSection";
import TestimonialsSection        from "@/sections/TestimonialsSection";
import CTASection        from "@/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <PhilosophySection />
        <ExpertiseSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
