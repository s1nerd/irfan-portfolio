import { motion } from "framer-motion";

import { fadeUp } from "@/animations/fade";
import { staggerContainer } from "@/animations/stagger";
import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={staggerContainer()}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow Background */}
      <div className="absolute -left-30 -top-30 h-96 w-96 rounded-full bg-blue-600/20 blur-[160px]" />

      <div className="absolute -bottom-37.5 -right-25 h-105 w-105 rounded-full bg-violet-600/20 blur-[180px]" />

      <Container
        as="div"
        className="relative z-10 grid min-h-screen items-center gap-20 py-28 lg:grid-cols-2"
      >
        <HeroContent />

        <HeroImage />
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        variants={fadeUp(0.8)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
            <motion.div
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="mt-2 h-2 w-2 rounded-full bg-blue-400"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
