import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { staggerContainer } from "@/animations/stagger";
import Container from "@/components/layout/Container";
import projects from "@/data/projects/projects";

import ProjectGrid from "./ProjectGrid";
import ProjectHeader from "./ProjectHeader";

export default function ProjectSection() {
  const navigate = useNavigate();

  const featuredProjects = useMemo(
    () =>
      projects
        .filter((project) => project.featured)
        .sort((a, b) => a.sortOrder - b.sortOrder),
    [],
  );

  const handleOpenProject = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <motion.section
      id="projects"
      className="relative py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={staggerContainer()}
    >
      <Container as="div" className="space-y-20">
        <ProjectHeader />

        <ProjectGrid
          projects={featuredProjects}
          onViewDetail={handleOpenProject}
        />
      </Container>
    </motion.section>
  );
}
