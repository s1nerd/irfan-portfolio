import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { staggerContainer, staggerItem } from "@/animations/stagger";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, onViewDetail }) {
  return (
    <motion.section
      variants={staggerContainer(0.15)}
      className="grid gap-8 lg:grid-cols-2"
    >
      {projects?.map((project) => (
        <motion.div key={project.id} variants={staggerItem()}>
          <ProjectCard project={project} onViewDetail={onViewDetail} />
        </motion.div>
      ))}
    </motion.section>
  );
}

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      featured: PropTypes.bool.isRequired,
    }),
  ).isRequired,

  onViewDetail: PropTypes.func.isRequired,
};
