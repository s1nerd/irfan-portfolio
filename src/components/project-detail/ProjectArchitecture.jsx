import { Layers3 } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectArchitecture({ project }) {
  if (!project.architecture?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={Layers3}
        badge="Software Design"
        title="Architecture"
        description="High-level architecture describing how each layer of the application is organized and how the technologies are structured."
        color="violet"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {project.architecture.map((layer) => (
          <article
            key={layer.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30"
          >
            <h3 className="text-2xl font-bold text-white">{layer.layer}</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {layer.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
