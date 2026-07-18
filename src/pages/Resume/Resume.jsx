import Container from "@/components/layout/Container";

import ResumeHero from "@/components/sections/resume/ResumeHero";
import ExperienceTimeline from "@/components/sections/resume/ExperienceTimeline";
import ResumeSkills from "@/components/sections/resume/ResumeSkills";
import ResumeProjects from "@/components/sections/resume/ResumeProjects";
import ResumeEducation from "@/components/sections/resume/ResumeEducation";
import ResumeStrengths from "@/components/sections/resume/ResumeStrengths";
import ResumeCTA from "@/components/sections/resume/ResumeCTA";

export default function Resume() {
  return (
    <main className="py-24 pb-32">
      <Container className="max-w-7xl">
        <ResumeHero />

        <ExperienceTimeline />

        <ResumeSkills />

        <ResumeProjects />

        <ResumeEducation />

        <ResumeStrengths />

        <ResumeCTA />
      </Container>
    </main>
  );
}
