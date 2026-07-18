import { motion } from "framer-motion";
import { Mail, Briefcase, FolderKanban, Server, Network } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import { fadeUp } from "@/animations/fade";
import GlassCard from "@/components/common/GlassCard";

import profile from "@/data/profile/profile";
import resume from "@/data/resume/resume";

export default function ResumeCTA() {
  return (
    <motion.section
      variants={fadeUp()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-20"
    >
      <GlassCard className="rounded-4xl p-10 text-center md:p-14">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
          Open for Opportunities
        </span>

        <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
          Interested in Working Together?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-300">
          Building scalable enterprise systems, modern IT infrastructure, and
          business applications that create measurable value. Open to
          opportunities where technology drives business growth.
        </p>

        {/* Highlights */}

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Briefcase className="mx-auto text-blue-400" size={28} />

            <h3 className="mt-4 text-2xl font-bold text-white">
              {profile.yearsOfExperience}+ Years
            </h3>

            <p className="mt-2 text-sm text-slate-400">Years Experience</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <FolderKanban className="mx-auto text-violet-400" size={28} />

            <h3 className="mt-4 text-lg font-bold text-white">
              IT Engineering
            </h3>

            <p className="mt-2 text-sm text-slate-400">Enterprise Solutions</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Server className="mx-auto text-emerald-400" size={28} />

            <h3 className="mt-4 text-lg font-bold text-white">
              Enterprise Systems
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Application Development
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Network className="mx-auto text-amber-400" size={28} />

            <h3 className="mt-4 text-lg font-bold text-white">
              Infrastructure
            </h3>

            <p className="mt-2 text-sm text-slate-400">Network & Server</p>
          </div>
        </div>

        {/* Social */}

        <div className="mt-12 flex justify-center gap-5">
          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:text-white"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:text-sky-400"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://www.instagram.com/irfanm01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:text-pink-400"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href={`mailto:${resume.email}`}
            aria-label="Email"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:text-emerald-400"
          >
            <Mail size={22} />
          </a>
        </div>
      </GlassCard>
    </motion.section>
  );
}
