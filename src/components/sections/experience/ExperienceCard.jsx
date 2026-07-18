import clsx from "clsx";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { BriefcaseBusiness, CalendarDays, CheckCircle2 } from "lucide-react";

import { fadeUp } from "@/animations/fade";
import GlassCard from "@/components/common/GlassCard";

export default function ExperienceCard({ experience }) {
  return (
    <motion.div variants={fadeUp()}>
      <GlassCard className="p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">
        {/* Header */}
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h3 className="text-3xl font-bold text-white">
              {experience.company}
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness size={18} className="text-blue-400" />

                <span>{experience.position}</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="text-violet-400" />

                <span>{experience.period}</span>
              </div>
            </div>
          </div>

          <span
            className={clsx(
              "w-fit rounded-full border px-4 py-2 text-sm font-medium",
              "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
            )}
          >
            {experience.employmentType}
          </span>
        </header>

        {/* Summary */}
        <section className="mt-8">
          <p className="leading-8 text-slate-300">{experience.summary}</p>
        </section>

        {/* Achievements */}
        <section className="mt-10">
          <h4 className="mb-5 text-lg font-semibold text-white">
            Key Achievements
          </h4>

          <div className="space-y-4">
            {experience.achievements?.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-blue-400"
                />

                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Responsibilities */}
          <section>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Core Responsibilities
            </h4>

            <div className="space-y-4">
              {experience.responsibilities?.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-emerald-400"
                  />

                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-3">
              {experience.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </GlassCard>
    </motion.div>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    employmentType: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
