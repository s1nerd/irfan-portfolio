import { Rocket } from "lucide-react";

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
        badge="Roadmap"
        title="Future Improvements"
        description="Planned enhancements and future development opportunities that can further improve the platform."
        color="violet"
      />

      <ProjectCardGrid
        items={project.futureImprovements}
        hoverColor="violet"
        renderIcon={() => (
          <div className="inline-flex rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3">
            <Rocket size={22} className="text-violet-400" />
          </div>
        )}
      />
    </section>
  );
}
