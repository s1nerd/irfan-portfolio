import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { fadeUp } from "@/animations/fade";

export default function ProjectCardGrid({
  items,
  renderIcon,
  hoverColor = "blue",
}) {
  if (!items?.length) {
    return null;
  }

  const hoverBorder = {
    blue: "hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-blue-500/10",
    emerald:
      "hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:shadow-emerald-500/10",
    amber:
      "hover:border-amber-500/30 hover:bg-amber-500/5 hover:shadow-amber-500/10",
    violet:
      "hover:border-violet-500/30 hover:bg-violet-500/5 hover:shadow-violet-500/10",
    cyan: "hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-cyan-500/10",
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <motion.article
          key={item.id}
          variants={fadeUp()}
          className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
            hoverBorder[hoverColor]
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {renderIcon?.()}

          <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-white">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
        </motion.article>
      ))}
    </div>
  );
}

ProjectCardGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,

  renderIcon: PropTypes.func,

  hoverColor: PropTypes.oneOf(["blue", "emerald", "amber", "violet", "cyan"]),
};
