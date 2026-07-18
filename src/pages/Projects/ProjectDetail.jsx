import { Navigate, useParams } from "react-router-dom";

import Container from "@/components/layout/Container";

import ProjectArchitecture from "@/components/project-detail/ProjectArchitecture";
import ProjectArchitectureDiagram from "@/components/project-detail/ProjectArchitectureDiagram";
import ProjectBusinessProblem from "@/components/project-detail/ProjectBusinessProblem";
import ProjectChallenges from "@/components/project-detail/ProjectChallenges";
import ProjectDatabase from "@/components/project-detail/ProjectDatabase";
import ProjectFeatures from "@/components/project-detail/ProjectFeatures";
import ProjectFutureImprovements from "@/components/project-detail/ProjectFutureImprovements";
import ProjectGallery from "@/components/project-detail/ProjectGallery";
import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectLessons from "@/components/project-detail/ProjectLessons";
import ProjectMetrics from "@/components/project-detail/ProjectMetrics";
import ProjectModules from "@/components/project-detail/ProjectModules";
import ProjectResponsibilities from "@/components/project-detail/ProjectResponsibilities";
import ProjectSolution from "@/components/project-detail/ProjectSolution";
import ProjectTechnology from "@/components/project-detail/ProjectTechnology";
import ProjectTimeline from "@/components/project-detail/ProjectTimeline";

import ROUTES from "@/constants/routes";
import projects from "@/data/projects/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to={ROUTES.PROJECTS} replace />;
  }

  return (
    <main className="py-24 pb-32">
      <Container className="space-y-24">
        {/* ================= Hero ================= */}
        <ProjectHero project={project} />

        {/* ================= Metrics ================= */}
        <ProjectMetrics project={project} />

        {/* ============ Business Analysis ============ */}
        <ProjectBusinessProblem project={project} />

        {/* ================= Solution ================= */}
        <ProjectSolution project={project} />

        {/* =========== My Responsibilities =========== */}
        <ProjectResponsibilities />

        {/* ============= Technology Stack ============= */}
        <ProjectTechnology project={project} />

        {/* ================= Architecture ================= */}
        <ProjectArchitecture project={project} />

        {/* =========== Architecture Diagram =========== */}
        <ProjectArchitectureDiagram project={project} />

        {/* ================= Database ================= */}
        <ProjectDatabase project={project} />

        {/* ================= Modules ================= */}
        <ProjectModules project={project} />

        {/* ================= Features ================= */}
        <ProjectFeatures project={project} />

        {/* ================= Challenges ================= */}
        <ProjectChallenges project={project} />

        {/* ================= Timeline ================= */}
        <ProjectTimeline project={project} />

        {/* ================= Lessons ================= */}
        <ProjectLessons project={project} />

        {/* ============ Future Improvements ============ */}
        <ProjectFutureImprovements project={project} />

        {/* ================= Gallery ================= */}
        <ProjectGallery project={project} />
      </Container>
    </main>
  );
}
