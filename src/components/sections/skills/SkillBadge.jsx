import clsx from "clsx";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function SkillBadge({ name }) {
  return (
    <motion.span
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
      }}
      className={clsx(
        "inline-flex cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition-colors duration-300",
        "hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white",
      )}
    >
      {name}
    </motion.span>
  );
}

SkillBadge.propTypes = {
  name: PropTypes.string.isRequired,
};
