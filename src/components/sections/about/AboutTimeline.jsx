import { motion } from "framer-motion";

import { fadeUp } from "@/animations/fade";
import { staggerContainer, staggerItem } from "@/animations/stagger";
import GlassCard from "@/components/common/GlassCard";
import timeline from "@/data/about/timeline";

export default function AboutTimeline() {
  return (
    <section aria-labelledby="career-journey" className="space-y-12">
      <motion.header variants={fadeUp()} className="text-center">
        <h3 id="career-journey" className="text-3xl font-bold text-white">
          Career Journey
        </h3>

        <p className="mt-4 text-slate-400">
          A brief timeline of my professional growth.
        </p>
      </motion.header>

      <motion.div
        variants={staggerContainer()}
        className="relative mx-auto max-w-4xl"
      >
        <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10" />

        {timeline.map((item) => (
          <motion.div
            key={item.id}
            variants={staggerItem()}
            className="relative mb-12 flex gap-8 last:mb-0"
          >
            {/* Timeline Dot */}
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/20">
              <div className="h-3 w-3 rounded-full bg-blue-400" />
            </div>

            {/* Timeline Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex-1"
            >
              <GlassCard className="h-full p-6 hover:border-blue-500/30">
                <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                  {item.year}
                </span>

                <h4 className="mt-2 text-2xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-4 leading-8 text-slate-300">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
