import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FolderOpen } from "lucide-react";

import { staggerContainer, staggerItem } from "@/animations/stagger";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, onViewDetail }) {
  if (!projects?.length) {
    return (
      <section className="flex min-h-80 items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 p-12 backdrop-blur-xl">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
            <FolderOpen className="h-8 w-8 text-blue-400" />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-white">
            No Projects Available
          </h3>

          <p className="mx-auto mt-3 max-w-md leading-7 text-slate-400">
            There are currently no projects to display. Please check back later
            or add a new project to showcase your work.
          </p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      variants={staggerContainer(0.15)}
      initial="hidden"
      animate="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      aria-label="Project List"
      className="
        grid
        grid-cols-1
        gap-8
        lg:grid-cols-2
        xl:gap-10
      "
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={staggerItem()}
          className="h-full"
        >
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
