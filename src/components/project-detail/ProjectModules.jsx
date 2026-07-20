import { LayoutGrid } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectModules({ project }) {
  if (!project.modules?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={LayoutGrid}
        badge="Modules"
        title="Core Modules"
        description="Key functional modules that work together to support the overall business workflow."
        color="blue"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.modules.map((module, index) => (
          <article
            key={module.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-lg font-bold tracking-wide text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/15">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="text-xl font-bold tracking-tight text-white">
              {module.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              {module.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
