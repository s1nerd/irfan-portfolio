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
    blue: "hover:border-blue-500/30 hover:bg-blue-500/5",
    emerald: "hover:border-emerald-500/30 hover:bg-emerald-500/5",
    amber: "hover:border-amber-500/30 hover:bg-amber-500/5",
    violet: "hover:border-violet-500/30 hover:bg-violet-500/5",
    cyan: "hover:border-cyan-500/30 hover:bg-cyan-500/5",
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <motion.article
          key={item.id}
          variants={fadeUp()}
          className={`rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 ${
            hoverBorder[hoverColor]
          }`}
        >
          {renderIcon?.()}

          <h3 className="mt-5 text-2xl font-bold text-white">{item.title}</h3>

          <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
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
