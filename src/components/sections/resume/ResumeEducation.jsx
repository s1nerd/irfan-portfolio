import { GraduationCap, Calendar, School, Award } from "lucide-react";
import { motion } from "framer-motion";

import GlassCard from "@/components/common/GlassCard";
import { fadeUp } from "@/animations/fade";

import education from "@/data/resume/education";

export default function ResumeEducation() {
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
        <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
          Education
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Academic Background
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
          Educational foundation that supports my professional journey in
          software engineering, enterprise systems, and information technology.
        </p>
      </header>

      {/* Education Card */}

      <div className="space-y-8">
        {education.map((item) => (
          <motion.div key={item.id} variants={fadeUp()} whileHover={{ y: -5 }}>
            <GlassCard className="rounded-4xl p-8 transition duration-300 hover:border-amber-500/30 hover:shadow-[0_20px_60px_rgba(245,158,11,.15)]">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                {/* Left */}

                <div className="flex gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
                    <School size={30} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white">
                      {item.degree}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-blue-400">
                      <GraduationCap size={18} />

                      <span className="text-lg font-medium">
                        {item.institution}
                      </span>
                    </div>

                    {item.gpa && (
                      <div className="mt-4 flex items-center gap-2 text-amber-400">
                        <Award size={18} />

                        <span className="text-sm font-medium">
                          GPA : {item.gpa}
                        </span>
                      </div>
                    )}

                    <p className="mt-6 leading-8 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right */}

                <div className="flex shrink-0">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
                    <Calendar size={16} />
                    {item.period}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
