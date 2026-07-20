import { Rocket, TrendingUp } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";
import ProjectCardGrid from "@/components/project-detail/common/ProjectCardGrid";

export default function ProjectFutureImprovements({ project }) {
  if (!project.futureImprovements?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={Rocket}
        badge="Future"
        title="Future Improvements"
        description="Planned enhancements and future development opportunities."
        color="violet"
      />

      <ProjectCardGrid
        items={project.futureImprovements}
        hoverColor="violet"
        renderIcon={() => (
          <div className="inline-flex rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-violet-500/15">
            <TrendingUp
              size={22}
              className="text-violet-400 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
      />
    </section>
  );
}
