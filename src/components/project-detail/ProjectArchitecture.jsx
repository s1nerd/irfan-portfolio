import { Boxes, Layers3 } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectArchitecture({ project }) {
  if (!project.architecture?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={Layers3}
        badge="Architecture"
        title="System Architecture"
        description="Application architecture and technology layers."
        color="violet"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {project.architecture.map((layer) => (
          <article
            key={layer.id}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-violet-500/10"
          >
            <div className="inline-flex rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-violet-500/15">
              <Boxes
                size={22}
                className="text-violet-400 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
              {layer.layer}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {layer.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-violet-300 transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/20"
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
