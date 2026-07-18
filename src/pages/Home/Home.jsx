import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import ProjectSection from "@/components/sections/projects";
import ServicesSection from "@/components/sections/services";
import SkillSection from "@/components/sections/skills";

const sections = [
  HeroSection,
  AboutSection,
  SkillSection,
  ExperienceSection,
  ProjectSection,
  ServicesSection,
];

export default function Home() {
  return (
    <>
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </>
  );
}
