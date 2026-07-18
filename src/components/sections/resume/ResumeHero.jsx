import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, Settings2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { fadeUp } from "@/animations/fade";
import GlassCard from "@/components/common/GlassCard";
import Button from "@/components/common/Button";

import resume from "@/data/resume/resume";
import profile from "@/data/profile/profile";

export default function ResumeHero() {
  return (
    <motion.section
      variants={fadeUp()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-24"
    >
      <GlassCard className="overflow-hidden rounded-4xl p-8 md:p-12 lg:p-16">
        <div className="grid items-center gap-14 lg:grid-cols-[280px_1fr]">
          {/* Avatar */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex justify-center"
          >
            <img
              src={profile.resumeAvatar}
              alt={profile.name}
              className="h-64 w-64 rounded-full border-4 border-blue-500/20 object-cover shadow-[0_30px_80px_rgba(37,99,235,.25)]"
            />
          </motion.div>

          {/* Content */}

          <div>
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              {resume.badge}
            </span>

            <h1 className="mt-6 text-5xl font-black text-white md:text-6xl">
              {resume.title}
            </h1>

            <h2 className="mt-4 text-3xl font-bold text-blue-400">
              {resume.position}
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
              {resume.summary}
            </p>

            {/* Information */}

            <div className="mt-10 flex flex-wrap gap-8 text-slate-300">
              <span className="flex items-center gap-2">
                <MapPin size={20} />
                {resume.location}
              </span>

              <span className="flex items-center gap-2">
                <Mail size={20} />
                {resume.email}
              </span>
            </div>

            {/* Quick Stats */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center gap-2 text-blue-400">
                  <Briefcase size={18} />
                  <span className="text-sm">Experience</span>
                </div>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {profile.yearsOfExperience}+ Years
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center gap-2 text-purple-400">
                  <Settings2 size={18} />
                  <span className="text-sm">Expertise</span>
                </div>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Enterprise Solutions
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center gap-2 text-emerald-400">
                  <MapPin size={18} />
                  <span className="text-sm">Location</span>
                </div>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {profile.location}
                </h3>
              </div>
            </div>

            {/* Actions */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                as="a"
                href={resume.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </Button>

              <Button
                as="a"
                href={resume.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <FaGithub size={18} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.section>
  );
}
