import { Brain, GraduationCap } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";
import ProjectCardGrid from "@/components/project-detail/common/ProjectCardGrid";

export default function ProjectLessons({ project }) {
  if (!project.lessonsLearned?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={GraduationCap}
        badge="Lessons"
        title="Lessons Learned"
        description="Key insights and experiences gained throughout the project."
        color="blue"
      />

      <ProjectCardGrid
        items={project.lessonsLearned}
        hoverColor="blue"
        renderIcon={() => (
          <div className="inline-flex rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">
            <Brain
              size={22}
              className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
      />
    </section>
  );
}
