import { motion } from "framer-motion";

import { staggerContainer } from "@/animations/stagger";
import Container from "@/components/layout/Container";
import experience from "@/data/experience/experience";

import ExperienceCard from "./ExperienceCard";
import ExperienceHeader from "./ExperienceHeader";

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="relative py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={staggerContainer()}
    >
      <Container as="div" className="space-y-20">
        <ExperienceHeader />

        <div className="space-y-10">
          {experience.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
