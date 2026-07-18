import { ArrowRight, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import GlassCard from "@/components/common/GlassCard";
import Button from "@/components/common/Button";
import ROUTES from "@/constants/routes";
import { fadeUp } from "@/animations/fade";

import featuredProjects from "@/data/resume/featuredProjects";

export default function ResumeProjects() {
  return (
    <motion.section
      variants={fadeUp()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-28"
    >
      {/* Header */}

      <header className="mb-16">
        <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-400">
          Portfolio
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Featured Projects
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-300">
          Enterprise applications and digital solutions that demonstrate my
          expertise in software engineering, IT infrastructure, and business
          process automation.
        </p>
      </header>

      {/* Cards */}

      <div className="grid gap-8 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeUp()}
            whileHover={{ y: -6 }}
          >
            <GlassCard className="group flex h-full flex-col overflow-hidden rounded-4xl transition duration-300 hover:border-violet-500/30 hover:shadow-[0_20px_60px_rgba(139,92,246,.15)]">
              {/* Cover */}

              {/* Cover */}

              {project.cover && (
                <div className="bg-slate-950 p-6">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full rounded-2xl shadow-xl transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}

              <div className="flex h-full flex-col p-8">
                {/* Badge */}

                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-xs font-semibold text-violet-400">
                    Enterprise Project
                  </span>
                </div>

                {/* Title */}

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-violet-400">{project.subtitle}</p>

                {/* Description */}

                <p className="mt-6 leading-8 text-slate-300">
                  {project.description}
                </p>

                {/* Stack */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Footer */}

                <div className="mt-auto pt-10">
                  <Button
                    as={Link}
                    to={`${ROUTES.PROJECTS}/${project.slug}`}
                    variant="outline"
                  >
                    <FolderKanban size={18} />
                    View Project
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
