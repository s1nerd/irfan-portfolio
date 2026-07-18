import { motion } from "framer-motion";

import { staggerContainer } from "@/animations/stagger";
import Container from "@/components/layout/Container";
import services from "@/data/services/services";

import ServiceCard from "./ServiceCard";
import ServicesHeader from "./ServicesHeader";

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
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
        <ServicesHeader />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
