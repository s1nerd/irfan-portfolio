import { TriangleAlert } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";
import ProjectCardGrid from "@/components/project-detail/common/ProjectCardGrid";

export default function ProjectChallenges({ project }) {
  if (!project.challenges?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={TriangleAlert}
        badge="Development Challenges"
        title="Challenges"
        description="Every enterprise project presents technical and business challenges that require thoughtful analysis, careful planning, and scalable solutions."
        color="amber"
      />

      <ProjectCardGrid
        items={project.challenges}
        hoverColor="amber"
        renderIcon={() => (
          <div className="inline-flex rounded-2xl border border-amber-500/20 bg-amber-500/10 p-3">
            <TriangleAlert size={22} className="text-amber-400" />
          </div>
        )}
      />
    </section>
  );
}
