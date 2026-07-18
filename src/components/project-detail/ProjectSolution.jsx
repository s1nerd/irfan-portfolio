import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectSolution({ project }) {
  if (!project.solutions?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={CheckCircle2}
        badge="Implementation Strategy"
        title="Solution Overview"
        description="Business and technical solutions implemented to replace manual operational processes with a centralized enterprise platform."
        color="emerald"
      />

      <div className="space-y-5">
        {project.solutions.map((solution) => (
          <article
            key={solution.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto_1.4fr] lg:items-center">
              {/* Challenge */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} className="text-amber-400" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Challenge
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {solution.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight
                  size={24}
                  className="hidden text-emerald-400 lg:block"
                />

                <ArrowRight
                  size={24}
                  className="rotate-90 text-emerald-400 lg:hidden"
                />
              </div>

              {/* Solution */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Solution
                  </span>
                </div>

                <p className="leading-8 text-slate-300">
                  {solution.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
