import { BarChart3 } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

const colorVariants = {
  blue: {
    value: "text-blue-400",
    border: "hover:border-blue-500/30",
    background: "hover:bg-blue-500/5",
  },

  emerald: {
    value: "text-emerald-400",
    border: "hover:border-emerald-500/30",
    background: "hover:bg-emerald-500/5",
  },

  violet: {
    value: "text-violet-400",
    border: "hover:border-violet-500/30",
    background: "hover:bg-violet-500/5",
  },

  amber: {
    value: "text-amber-400",
    border: "hover:border-amber-500/30",
    background: "hover:bg-amber-500/5",
  },

  cyan: {
    value: "text-cyan-400",
    border: "hover:border-cyan-500/30",
    background: "hover:bg-cyan-500/5",
  },

  pink: {
    value: "text-pink-400",
    border: "hover:border-pink-500/30",
    background: "hover:bg-pink-500/5",
  },
};

export default function ProjectMetrics({ project }) {
  if (!project.metrics?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={BarChart3}
        badge="Project Scale"
        title="Project Metrics"
        description="Key numbers and technical highlights that represent the overall scale and complexity of this project."
        color="cyan"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.metrics.map((metric) => {
          const color = colorVariants[metric.color] ?? colorVariants.blue;

          return (
            <article
              key={metric.id}
              className={`group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 ${color.border} ${color.background}`}
            >
              <h3
                className={`text-4xl font-black leading-none transition-transform duration-300 group-hover:scale-110 md:text-5xl ${color.value}`}
              >
                {metric.value}
              </h3>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                {metric.label}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
