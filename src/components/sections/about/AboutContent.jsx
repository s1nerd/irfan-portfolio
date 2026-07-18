import clsx from "clsx";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Layers3, Lightbulb } from "lucide-react";

import { fadeLeft, fadeRight } from "@/animations/fade";
import GlassCard from "@/components/common/GlassCard";
import about from "@/data/about/about";

const iconMap = {
  Code2,
  Layers3,
  BriefcaseBusiness,
  Lightbulb,
};

export default function AboutContent() {
  return (
    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
      {/* Left */}
      <motion.div variants={fadeLeft()} className="space-y-6">
        <h3 className="text-3xl font-bold text-white">{about.heading}</h3>

        {about.paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-8 text-slate-300">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Right */}
      <motion.div
        variants={fadeRight(0.2)}
        className="grid gap-5 sm:grid-cols-2"
      >
        {about.principles.map((item) => {
          const Icon = iconMap[item.icon];

          if (!Icon) return null;

          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <GlassCard className={clsx("h-full p-6", item.border)}>
                <Icon size={34} className={clsx("mb-5", item.color)} />

                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
