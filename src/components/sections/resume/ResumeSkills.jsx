import { motion } from "framer-motion";
import {
  Code2,
  Database,
  MonitorSmartphone,
  Network,
  Wrench,
  Server,
} from "lucide-react";

import GlassCard from "@/components/common/GlassCard";
import { fadeUp } from "@/animations/fade";

import resumeSkills from "@/data/resume/skills";

const icons = {
  Frontend: MonitorSmartphone,
  Backend: Server,
  Database: Database,
  Infrastructure: Network,
  Tools: Wrench,
  Other: Code2,
};

export default function ResumeSkills() {
  return (
    <motion.section
      variants={fadeUp()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-28"
    >
      {/* Header */}

      <header className="mb-16">
        <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
          Technical Expertise
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Core Technical Skills
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
          A collection of technologies, frameworks, infrastructure, and tools
          that I use to build reliable enterprise applications and modern IT
          solutions.
        </p>
      </header>

      {/* Cards */}

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {resumeSkills.map((category) => {
          const Icon = icons[category.title] ?? Code2;

          return (
            <motion.div
              key={category.id}
              variants={fadeUp()}
              whileHover={{
                y: -6,
              }}
            >
              <GlassCard className="h-full rounded-4xl p-8 transition duration-300 hover:border-emerald-500/30 hover:shadow-[0_20px_60px_rgba(16,185,129,.12)]">
                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Icon size={28} />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {category.items.length} Technologies
                </p>

                {/* Skills */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
