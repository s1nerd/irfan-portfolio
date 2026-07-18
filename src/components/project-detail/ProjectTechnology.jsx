import { Cpu } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";
import technologyMap from "@/data/technologies";

export default function ProjectTechnology({ project }) {
  if (!project.technologies?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={Cpu}
        badge="Development Stack"
        title="Technology Stack"
        description="The primary technologies, frameworks, libraries, and tools used to design, develop, and deploy this project."
        color="cyan"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {project.technologies.map((technology) => {
          const tech = technologyMap[technology];

          const Icon = tech?.icon ?? Cpu;

          return (
            <article
              key={technology}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/5"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                  <Icon
                    size={24}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      tech?.color ?? "text-cyan-400"
                    }`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {technology}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {tech?.category ?? "Technology"}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-400">
                {tech?.description ??
                  "Used as part of the project technology stack."}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
