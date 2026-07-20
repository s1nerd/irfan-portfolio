import { CalendarDays, Clock3 } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectTimeline({ project }) {
  if (!project.timeline?.length) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeader
        icon={Clock3}
        badge="Timeline"
        title="Project Timeline"
        description="Key milestones throughout the project development lifecycle."
        color="amber"
      />

      <div className="relative ml-5 border-l border-white/10">
        {project.timeline.map((item) => (
          <article
            key={item.id}
            className="group relative ml-8 pb-10 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-10.5 top-3 flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-950 bg-amber-400 shadow-lg shadow-amber-500/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-300" />

            {/* Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-amber-500/30 group-hover:bg-white/10 group-hover:shadow-2xl group-hover:shadow-amber-500/10">
              {/* Date */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-amber-300">
                <CalendarDays size={16} />
                {item.date}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-8 text-slate-300">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
