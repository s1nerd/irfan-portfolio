import clsx from "clsx";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  ArrowUpRight,
  Building2,
  Code2,
  Network,
  Settings2,
} from "lucide-react";

import { fadeUp } from "@/animations/fade";
import GlassCard from "@/components/common/GlassCard";

const iconMap = {
  Code2,
  Building2,
  Network,
  Settings2,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon];

  if (!Icon) return null;

  return (
    <motion.article
      variants={fadeUp()}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <GlassCard className="group h-full p-8 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]">
        {/* Header */}
        <header>
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
            <Icon
              size={34}
              className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <h3 className="mt-8 text-2xl font-bold text-white">
            {service.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-300">{service.description}</p>
        </header>

        {/* Technologies */}
        <section className="mt-8">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Core Expertise
          </h4>

          <div className="flex flex-wrap gap-2">
            {service.technologies?.map((technology) => (
              <span
                key={technology}
                className={clsx(
                  "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs",
                  "text-slate-300 transition-colors duration-300",
                  "hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white",
                )}
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 flex items-center gap-2 font-medium text-blue-400">
          <span>Professional Service</span>

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </footer>
      </GlassCard>
    </motion.article>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
