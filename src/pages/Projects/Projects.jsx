import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Container from "@/components/layout/Container";
import ProjectGrid from "@/components/sections/projects/ProjectGrid";

import projects from "@/data/projects/projects";

export default function Projects() {
  const navigate = useNavigate();

  const allProjects = useMemo(
    () =>
      [...projects].sort(
        (a, b) =>
          (a.sortOrder ?? Number.MAX_SAFE_INTEGER) -
          (b.sortOrder ?? Number.MAX_SAFE_INTEGER),
      ),
    [],
  );

  const handleOpenProject = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <main className="min-h-screen pt-28 pb-24">
      <Container className="space-y-20">
        {/* Hero */}
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Projects
          </span>

          <h1 className="mt-8 text-5xl font-black text-white md:text-6xl">
            All Projects
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            Explore enterprise applications, business systems, and digital
            transformation solutions that I have designed and developed.
          </p>
        </header>

        {/* Project List */}
        <ProjectGrid projects={allProjects} onViewDetail={handleOpenProject} />
      </Container>
    </main>
  );
}
