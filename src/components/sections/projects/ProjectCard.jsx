import clsx from "clsx";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ArrowRight, Building2, Calendar } from "lucide-react";

import { fadeUp } from "@/animations/fade";
import GlassCard from "@/components/common/GlassCard";

import ProjectPlaceholder from "./ProjectPlaceholder";

export default function ProjectCard({ project, onViewDetail }) {
  if (!project) return null;

  return (
    <motion.article
      variants={fadeUp()}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <GlassCard className="group h-full overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]">
        {/* Cover */}
        {project.cover ? (
          <div className="relative aspect-video overflow-hidden rounded-t-3xl bg-slate-900">
            <img
              src={project.cover}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />
          </div>
        ) : (
          <ProjectPlaceholder
            title={project.title}
            subtitle={project.subtitle}
          />
        )}

        <div className="flex h-full flex-col p-8">
          {/* Header */}
          <header className="mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                {project.status}
              </span>

              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                {project.category}
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-2 text-blue-400">{project.subtitle}</p>
          </header>

          {/* Description */}
          <section className="mb-6">
            <p className="min-h-24 leading-8 text-slate-300">
              {project.shortDescription}
            </p>
          </section>

          {/* Meta */}
          <section className="mb-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Building2 size={16} />

              <span className="truncate">{project.company}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} />

              <span>
                {project.startDate}
                {project.endDate ? ` - ${project.endDate}` : " - Present"}
              </span>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies?.slice(0, 6).map((technology) => (
                <span
                  key={technology}
                  className={clsx(
                    "rounded-full border border-white/10 bg-white/5",
                    "px-3 py-1 text-xs text-slate-300",
                  )}
                >
                  {technology}
                </span>
              ))}

              {project.technologies?.length > 6 && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>
          </section>

          {/* Modules */}
          <section className="mb-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Core Modules
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.modules?.slice(0, 4).map((module) => (
                <span
                  key={module.title}
                  className="
                  rounded-full
                  border border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-blue-500/30
                  hover:bg-blue-500/10
                  hover:text-white
                "
                >
                  {module.title}
                </span>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-auto">
            <button
              type="button"
              onClick={() => onViewDetail(project)}
              className="group/button inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              View Project
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </button>
          </footer>
        </div>
      </GlassCard>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,

    endDate: PropTypes.string,
    status: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    cover: PropTypes.string,

    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,

    modules: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,

  onViewDetail: PropTypes.func.isRequired,
};
