import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Calendar,
  Building2,
  MapPin,
  CircleCheck,
} from "lucide-react";

import GlassCard from "@/components/common/GlassCard";
import { fadeUp } from "@/animations/fade";

import experience from "@/data/resume/experience";

export default function ExperienceTimeline() {
  return (
    <motion.section
      variants={fadeUp()}
      initial="visible"
      animate="visible"
      className="mb-28"
    >
      {/* Header */}

      <header className="mb-16">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
          Career Journey
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Professional Experience
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
          My professional experience in enterprise software development,
          infrastructure engineering, business automation, and digital
          transformation projects.
        </p>
      </header>

      {/* Timeline */}

      <div className="relative ml-4 border-l-2 border-blue-500/20 pl-12">
        {experience.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp()}
            whileHover={{ y: -4 }}
            className="relative mb-14 last:mb-0"
          >
            {/* Timeline Dot */}

            <div className="absolute -left-14 top-10">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,.6)]">
                <div className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>
            </div>

            {/* Card */}

            <GlassCard className="rounded-4xl p-8 transition duration-300 hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(37,99,235,.15)]">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-5 text-slate-400">
                    <span className="flex items-center gap-2">
                      <Building2 size={17} />
                      {item.company}
                    </span>

                    {item.location && (
                      <span className="flex items-center gap-2">
                        <MapPin size={17} />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300">
                    <Calendar size={16} />
                    {item.period}
                  </div>

                  {item.current && (
                    <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400">
                      <CircleCheck size={16} />
                      Current Position
                    </div>
                  )}
                </div>
              </div>

              <p className="mt-8 leading-8 text-slate-300">
                {item.description}
              </p>

              <div className="mt-10">
                <h4 className="mb-5 flex items-center gap-2 text-lg font-semibold text-white">
                  <BriefcaseBusiness size={20} />
                  Key Responsibilities
                </h4>

                <ul className="space-y-4">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-4 text-slate-300"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-400" />
                      <span className="leading-7">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.skills && item.skills.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
