import { Sparkles } from "lucide-react";

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
        badge="Capabilities"
        title="Key Features"
        description="The primary features implemented to solve business problems and improve operational efficiency."
        color="emerald"
      />

      <ProjectCardGrid
        items={project.features}
        hoverColor="emerald"
        renderIcon={() => (
          <div className="inline-flex rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3">
            <Sparkles size={22} className="text-emerald-400" />
          </div>
        )}
      />
    </section>
  );
}
