import { BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

import GlassCard from "@/components/common/GlassCard";
import { fadeUp } from "@/animations/fade";

import strengths from "@/data/resume/strengths";

export default function ResumeStrengths() {
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
          Professional Profile
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Professional Strengths
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
          Core competencies developed through hands-on experience in enterprise
          software engineering, IT infrastructure, business process
          optimization, and digital transformation initiatives.
        </p>
      </header>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        {strengths.map((item) => (
          <motion.div key={item.id} variants={fadeUp()} whileHover={{ y: -5 }}>
            <GlassCard className="h-full rounded-4xl p-8 transition duration-300 hover:border-emerald-500/30 hover:shadow-[0_20px_60px_rgba(16,185,129,.15)]">
              {/* Icon */}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <BrainCircuit size={32} />
              </div>

              {/* Label */}

              <span className="mt-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-slate-400">
                Core Competency
              </span>

              {/* Title */}

              <h3 className="mt-5 text-3xl font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-8 text-slate-300">
                {item.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
