import { BarChart3, TrendingUp } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

const colorVariants = {
  blue: {
    value: "text-blue-400",
    icon: "text-blue-400",
    border: "hover:border-blue-500/40",
    background: "hover:bg-blue-500/10",
  },

  emerald: {
    value: "text-emerald-400",
    icon: "text-emerald-400",
    border: "hover:border-emerald-500/40",
    background: "hover:bg-emerald-500/10",
  },

  violet: {
    value: "text-violet-400",
    icon: "text-violet-400",
    border: "hover:border-violet-500/40",
    background: "hover:bg-violet-500/10",
  },

  amber: {
    value: "text-amber-400",
    icon: "text-amber-400",
    border: "hover:border-amber-500/40",
    background: "hover:bg-amber-500/10",
  },

  cyan: {
    value: "text-cyan-400",
    icon: "text-cyan-400",
    border: "hover:border-cyan-500/40",
    background: "hover:bg-cyan-500/10",
  },

  pink: {
    value: "text-pink-400",
    icon: "text-pink-400",
    border: "hover:border-pink-500/40",
    background: "hover:bg-pink-500/10",
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
        badge="Metrics"
        title="Project Metrics"
        description="Project scale at a glance."
        color="cyan"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.metrics.map((metric) => {
          const color = colorVariants[metric.color] ?? colorVariants.blue;

          return (
            <article
              key={metric.id}
              className={`group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${color.border} ${color.background}`}
            >
              <div className="mb-5 flex items-center justify-between">
                <TrendingUp
                  size={22}
                  className={`${color.icon} transition-transform duration-300 group-hover:scale-110`}
                />

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                  Metric
                </span>
              </div>

              <h3
                className={`text-5xl font-black leading-none tracking-tight transition-transform duration-300 group-hover:scale-105 ${color.value}`}
              >
                {metric.value}
              </h3>

              <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                {metric.label}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
