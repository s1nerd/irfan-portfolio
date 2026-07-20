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
        badge="Technology"
        title="Technology Stack"
        description="Core technologies used in this project."
        color="cyan"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {project.technologies.map((technology) => {
          const tech = technologyMap[technology];
          const Icon = tech?.icon ?? Cpu;

          return (
            <article
              key={technology}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3 transition group-hover:scale-105">
                  <Icon
                    size={24}
                    className={`${tech?.color ?? "text-cyan-400"} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold text-white">
                    {technology}
                  </h3>

                  <span className="mt-1 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {tech?.category ?? "Technology"}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
