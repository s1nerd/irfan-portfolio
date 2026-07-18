import { motion } from "framer-motion";

import { staggerContainer } from "@/animations/stagger";
import Container from "@/components/layout/Container";

import AboutContent from "./AboutContent";
import AboutHeader from "./AboutHeader";
import AboutStats from "./AboutStats";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative py-32"
      initial="visible"
      animate="visible"
      variants={staggerContainer()}
    >
      <Container as="div" className="space-y-20">
        <AboutHeader />
        <AboutContent />
        <AboutStats />
      </Container>
    </motion.section>
  );
}
