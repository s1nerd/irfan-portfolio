import { ShieldAlert, TriangleAlert } from "lucide-react";

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
        badge="Challenges"
        title="Development Challenges"
        description="Key technical and business challenges encountered during development."
        color="amber"
      />

      <ProjectCardGrid
        items={project.challenges}
        hoverColor="amber"
        renderIcon={() => (
          <div className="inline-flex rounded-2xl border border-amber-500/20 bg-amber-500/10 p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500/15">
            <ShieldAlert
              size={22}
              className="text-amber-400 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
      />
    </section>
  );
}
