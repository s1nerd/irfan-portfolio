import { GraduationCap } from "lucide-react";

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
        badge="Project Experience"
        title="Lessons Learned"
        description="Every project contributes valuable insights that improve software architecture, development workflow, and future implementations."
        color="blue"
      />

      <ProjectCardGrid
        items={project.lessonsLearned}
        hoverColor="blue"
        renderIcon={() => (
          <div className="inline-flex rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3">
            <GraduationCap size={22} className="text-blue-400" />
          </div>
        )}
      />
    </section>
  );
}
