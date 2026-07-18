import clsx from "clsx";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Building, Building2, Code2 } from "lucide-react";

import { staggerContainer, staggerItem } from "@/animations/stagger";
import GlassCard from "@/components/common/GlassCard";

import stats from "@/data/about/stats";

const iconMap = {
  BriefcaseBusiness,
  Code2,
  Building2,
  Building,
};

export default function AboutStats() {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {stats.map((item) => {
        const Icon = iconMap[item.icon];

        if (!Icon) return null;

        return (
          <motion.div
            key={item.id}
            variants={staggerItem()}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <GlassCard className="group h-full rounded-3xl p-8 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(59,130,246,.15)]">
              {/* Icon */}
              <div
                className={clsx(
                  "mb-6 inline-flex rounded-2xl bg-white/5 p-4 transition-colors duration-300 group-hover:bg-white/10",
                  item.color,
                )}
              >
                <Icon size={28} />
              </div>

              {/* Value */}
              <h3 className="text-4xl font-black tracking-tight text-white">
                {item.value}
              </h3>

              {/* Label */}
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                {item.label}
              </p>
            </GlassCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
