import { Clock3 } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectTimeline({ project }) {
  if (!project.timeline?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={Clock3}
        badge="Development Journey"
        title="Project Timeline"
        description="Major milestones achieved throughout the development lifecycle of the project."
        color="amber"
      />

      <div className="relative ml-4 border-l border-white/10">
        {project.timeline.map((item) => (
          <article key={item.id} className="relative ml-8 pb-12 last:pb-0">
            <div className="absolute -left-10.25 top-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-amber-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              {item.date}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>

            <p className="mt-3 leading-8 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
