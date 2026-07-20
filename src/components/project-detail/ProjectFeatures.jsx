import { CheckCircle2, Sparkles } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";
import ProjectCardGrid from "@/components/project-detail/common/ProjectCardGrid";

export default function ProjectFeatures({ project }) {
  if (!project.features?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={Sparkles}
        badge="Features"
        title="Key Features"
        description="Core features available in this project."
        color="emerald"
      />

      <ProjectCardGrid
        items={project.features}
        hoverColor="emerald"
        renderIcon={() => (
          <div className="inline-flex rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-500/15">
            <CheckCircle2
              size={22}
              className="text-emerald-400 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
      />
    </section>
  );
}
