import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Building2,
  Calendar,
  CircleX,
  Layers3,
  Sparkles,
  Wrench,
} from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project detail"
          className={clsx(
            "absolute right-6 top-6 z-20 rounded-xl border",
            "border-white/10 bg-white/5 p-2",
            "transition hover:bg-white/10",
          )}
        >
          <CircleX size={22} className="text-slate-300" />
        </button>

        {/* Cover */}
        <header className="aspect-video w-full overflow-hidden border-b border-white/10 bg-linear-to-br from-slate-800 via-slate-900 to-slate-950">
          <div className="flex h-full flex-col items-center justify-center px-8 text-center">
            <Layers3 size={70} className="text-blue-400" />

            <h2
              id="project-modal-title"
              className="mt-6 text-5xl font-black text-white"
            >
              {project.title}
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">{project.subtitle}</p>
          </div>
        </header>

        <main className="space-y-12 p-10">
          {/* Meta */}
          <section className="flex flex-wrap gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Building2 size={18} />

              <span>{project.company}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />

              <span>{project.year}</span>
            </div>

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-400">
              {project.status}
            </span>
          </section>

          {/* Overview */}
          <section>
            <h3 className="mb-4 text-2xl font-bold text-white">Overview</h3>

            <p className="leading-8 text-slate-300">{project.description}</p>
          </section>

          {/* Technology */}
          <section>
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-white">
              <Wrench size={22} className="text-blue-400" />
              Technology Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Modules */}
          <section>
            <h3 className="mb-4 text-2xl font-bold text-white">Core Modules</h3>

            <div className="grid gap-3 md:grid-cols-2">
              {project.modules?.map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h4 className="font-semibold text-white">{module.title}</h4>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-white">
              <Sparkles size={22} className="text-violet-400" />
              Key Features
            </h3>

            <div className="grid gap-3 md:grid-cols-2">
              {project.features?.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h4 className="font-semibold text-white">{feature.title}</h4>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    company: PropTypes.string,
    year: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,

    technologies: PropTypes.arrayOf(PropTypes.string),

    modules: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),

    features: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
  }),

  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
