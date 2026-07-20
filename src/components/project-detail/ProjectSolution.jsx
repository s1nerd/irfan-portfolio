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
        badge="Solution"
        title="Solution Overview"
        description="How the project solved the business challenges."
        color="emerald"
      />

      <div className="space-y-6">
        {project.solutions.map((solution, index) => (
          <article
            key={solution.id}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:shadow-xl hover:shadow-emerald-500/10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr]">
              {/* Challenge */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                    Challenge
                  </span>

                  <span className="text-xs font-semibold tracking-widest text-slate-500">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-center gap-4 min-h-16">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                    <AlertTriangle size={20} className="text-amber-400" />
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-white">
                    {solution.title}
                  </h3>
                </div>
              </div>

              {/* Connector */}
              <div className="hidden lg:flex items-end justify-center pb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/15">
                  <ArrowRight
                    size={22}
                    className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div className="flex justify-center lg:hidden">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                  <ArrowRight
                    size={22}
                    className="rotate-90 text-emerald-400"
                  />
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-5">
                <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  Solution
                </span>

                <div className="flex items-center gap-4 min-h-16">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                    <CheckCircle2 size={20} className="text-emerald-400" />
                  </div>

                  <p className="leading-7 text-slate-300">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
