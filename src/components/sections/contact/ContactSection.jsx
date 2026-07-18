import { motion } from "framer-motion";

import { fadeUp } from "@/animations/fade";
import GlassCard from "@/components/common/GlassCard";
import Container from "@/components/layout/Container";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="relative py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp()}
    >
      <Container>
        <GlassCard className="mx-auto max-w-5xl rounded-4xl p-10 text-center md:p-16">
          {/* Badge */}
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Open for Opportunities
          </span>

          {/* Heading */}
          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Interested in
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Working Together?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Ready to build scalable enterprise solutions together?
            <br />
            Let's discuss your next project.
          </p>
        </GlassCard>
      </Container>
    </motion.section>
  );
}
