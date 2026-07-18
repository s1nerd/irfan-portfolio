import { motion } from "framer-motion";
import { BadgeCheck, BriefcaseBusiness, Code2, MapPin } from "lucide-react";

import { floatingScale, scaleIn } from "@/animations/scale";
import { slideRight } from "@/animations/slide";
import { staggerContainer, staggerItem } from "@/animations/stagger";

import Badge from "@/components/common/Badge";
import GlassCard from "@/components/common/GlassCard";

import profile from "@/data/profile/profile";
import skills from "@/data/skills/skills";

const heroTechnologies = skills
  .flatMap((category) => category.items)
  .slice(0, 8);

const information = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    color: "text-blue-400",
    label: "Experience",
    value: `${profile.yearsOfExperience}+ Years`,
  },
  {
    id: 2,
    icon: Code2,
    color: "text-violet-400",
    label: "Expertise",
    value: "Enterprise Solutions",
  },
  {
    id: 3,
    icon: MapPin,
    color: "text-emerald-400",
    label: "Location",
    value: profile.location,
  },
];

export default function HeroImage() {
  return (
    <motion.div
      variants={slideRight(0.25)}
      className="flex justify-center lg:justify-end"
    >
      <motion.div {...floatingScale()} className="relative transform-gpu">
        {/* Background Glow */}

        <div className="absolute inset-0 rounded-4xl bg-blue-500/15 blur-[160px]" />

        <motion.div variants={scaleIn(0.15)}>
          <GlassCard
            hover
            color="blue"
            padding="lg"
            className="relative w-full max-w-95 overflow-hidden rounded-4xl"
          >
            {/* Status Indicator */}

            <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

            {/* Avatar */}

            <motion.div
              variants={scaleIn(0.25)}
              className="mb-8 flex justify-center"
            >
              <div className="rounded-full border border-blue-500/20 bg-blue-500/10 p-2">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-44 w-44 rounded-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
            </motion.div>

            {/* Status */}

            <motion.div
              variants={slideRight(0.3)}
              className="flex justify-center"
            >
              <Badge variant="success" size="md" className="gap-2 px-4 py-2">
                <BadgeCheck size={18} />

                {profile.available ? "Available for Work" : "Currently Busy"}
              </Badge>
            </motion.div>

            {/* Information */}

            <motion.div
              variants={staggerContainer(0.08)}
              className="mt-8 space-y-4"
            >
              {information.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div key={item.id} variants={staggerItem()}>
                    <GlassCard
                      padding="md"
                      hover
                      color="blue"
                      className="flex items-center gap-4"
                    >
                      <Icon size={18} className={item.color} />

                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                          {item.label}
                        </p>

                        <p className="mt-1 font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Tech Stack */}

            <motion.div
              variants={staggerContainer(0.05)}
              className="mt-8 flex flex-wrap gap-2"
            >
              {heroTechnologies.map((skill) => (
                <motion.div key={skill.name} variants={staggerItem()}>
                  <Badge
                    variant="outline"
                    className="hover:border-blue-500/30"
                    size="sm"
                  >
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
