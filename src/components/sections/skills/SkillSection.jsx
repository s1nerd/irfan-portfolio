import { motion } from "framer-motion";

import { staggerContainer } from "@/animations/stagger";
import Container from "@/components/layout/Container";
import skills from "@/data/skills/skills";

import SkillCategory from "./SkillCategory";
import SkillHeader from "./SkillHeader";

export default function SkillSection() {
  return (
    <motion.section
      id="skills"
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
        <SkillHeader />

        {skills.map((skill) => (
          <SkillCategory
            key={skill.id}
            category={skill.category}
            description={skill.description}
            items={skill.items}
          />
        ))}
      </Container>
    </motion.section>
  );
}
