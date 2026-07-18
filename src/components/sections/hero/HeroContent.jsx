import { motion } from "framer-motion";

import { fadeLeft, fadeUp } from "@/animations/fade";
import { staggerContainer, staggerItem } from "@/animations/stagger";

import Badge from "@/components/common/Badge";
import GlassCard from "@/components/common/GlassCard";

import profile from "@/data/profile/profile";

import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";

const quickInfos = [
  {
    id: 1,
    label: "Experience",
    value: `${profile.yearsOfExperience}+ Years`,
  },
  {
    id: 2,
    label: "Expertise",
    value: "Enterprise Solutions",
  },
  {
    id: 3,
    label: "Location",
    value: profile.location,
  },
];

export default function HeroContent() {
  return (
    <motion.div className="space-y-12" variants={staggerContainer()}>
      {/* Status */}

      <motion.div variants={fadeLeft()}>
        <Badge
          variant="success"
          size="md"
          className="gap-2 px-4 py-2 font-medium"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

          {profile.available ? "Available for Work" : "Currently Unavailable"}
        </Badge>
      </motion.div>

      {/* Greeting */}

      <motion.div className="space-y-6" variants={fadeUp(0.1)}>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Hello, I'm
        </p>

        <h1 className="max-w-3xl text-5xl font-black leading-tight text-white lg:text-7xl">
          {profile.name}
        </h1>

        <h2 className="bg-linear-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-2xl font-bold text-transparent lg:text-3xl">
          {profile.title}
        </h2>

        <p className="max-w-2xl text-lg leading-9 text-slate-300">
          {profile.subtitle}
        </p>
      </motion.div>

      {/* Quick Info */}

      <motion.div
        variants={staggerContainer(0.08, 0)}
        className="grid gap-4 sm:grid-cols-3"
      >
        {quickInfos.map((item) => (
          <motion.div key={item.id} variants={staggerItem()}>
            <GlassCard padding="md" hover className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                {item.label}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {item.value}
              </h3>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Actions */}

      <HeroActions />

      {/* Social */}

      <motion.div variants={fadeUp(0.6)}>
        <HeroSocials />
      </motion.div>
    </motion.div>
  );
}
