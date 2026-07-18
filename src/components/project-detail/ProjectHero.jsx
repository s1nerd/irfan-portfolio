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
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          {project.category}
        </span>

        <div className="space-y-5">
          <h1 className="text-5xl font-black tracking-tight text-white md:text-6xl xl:text-7xl">
            {project.title}
          </h1>

          <h2 className="text-2xl font-semibold text-blue-400 md:text-3xl">
            {project.subtitle}
          </h2>

          <p className="max-w-5xl text-lg leading-9 text-slate-300">
            {project.overview ?? project.description}
          </p>
        </div>
      </div>

      {/* Project Information */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
          <div className="mb-5 inline-flex rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3">
            <Building2 className="text-blue-400" size={22} />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Company
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {project.company}
          </h3>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
          <div className="mb-5 inline-flex rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3">
            <UserCircle2 className="text-violet-400" size={22} />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            My Role
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">{project.role}</h3>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
          <div className="mb-5 inline-flex rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3">
            <CalendarDays className="text-emerald-400" size={22} />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Timeline
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {project.startDate} — {endDate}
          </h3>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
          <div className="mb-5 inline-flex rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
            <BadgeCheck className="text-cyan-400" size={22} />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Status
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {project.status}
          </h3>
        </article>
      </div>

      {/* Technology Stack */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
            <Layers3 className="text-cyan-400" size={22} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Technology Stack</h3>

            <p className="text-slate-400">
              Core technologies used throughout the development of this project.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}
