import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Layers3,
  UserCircle2,
} from "lucide-react";

export default function ProjectHero({ project }) {
  const endDate = project.endDate ?? "Present";

  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="space-y-6">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
          {project.category}
        </span>

        <div className="space-y-4">
          <h1 className="text-5xl font-black tracking-tight text-white md:text-6xl xl:text-7xl">
            {project.title}
          </h1>

          {project.subtitle && (
            <h2 className="text-xl font-semibold text-blue-400 md:text-2xl">
              {project.subtitle}
            </h2>
          )}

          <p className="max-w-3xl text-base leading-8 text-slate-300">
            {project.overview ?? project.description}
          </p>
        </div>

        {/* Quick Tech Stack */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Project Information */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard
          icon={<Building2 size={22} />}
          color="blue"
          label="Company"
          value={project.company}
        />

        <InfoCard
          icon={<UserCircle2 size={22} />}
          color="violet"
          label="Role"
          value={project.role}
        />

        <InfoCard
          icon={<CalendarDays size={22} />}
          color="emerald"
          label="Timeline"
          value={`${project.startDate} — ${endDate}`}
        />

        <InfoCard
          icon={<BadgeCheck size={22} />}
          color="cyan"
          label="Status"
          value={project.status}
        />
      </div>

      {/* Technology Stack */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
            <Layers3 className="text-cyan-400" size={22} />
          </div>

          <h3 className="text-2xl font-bold text-white">Technology Stack</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}

function InfoCard({ icon, label, value, color }) {
  const colors = {
    blue: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400",
    },
    violet: {
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      text: "text-violet-400",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
    },
  };

  const style = colors[color];

  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:border-white/20 hover:bg-white/10">
      <div
        className={`mb-5 inline-flex rounded-2xl border ${style.border} ${style.bg} p-3`}
      >
        <div className={style.text}>{icon}</div>
      </div>

      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-white">{value}</h3>
    </article>
  );
}
