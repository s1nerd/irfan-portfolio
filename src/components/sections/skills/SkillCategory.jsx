import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { fadeUp } from "@/animations/fade";

import SkillBadge from "./SkillBadge";

export default function SkillCategory({ category, description, items }) {
  return (
    <motion.section variants={fadeUp()} className="space-y-6">
      <header>
        <h3 className="text-2xl font-bold text-white">{category}</h3>

        <p className="mt-3 max-w-2xl leading-8 text-slate-400">{description}</p>
      </header>

      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </motion.section>
  );
}

SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
