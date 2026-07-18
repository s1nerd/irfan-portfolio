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
        badge="System Components"
        title="Core Modules"
        description="The application is divided into independent modules, each responsible for a specific business process while remaining fully integrated within the overall system."
        color="blue"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.modules.map((module, index) => (
          <article
            key={module.id}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-lg font-bold text-blue-400 transition-transform duration-300 group-hover:scale-110">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="text-xl font-semibold text-white">{module.title}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {module.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
