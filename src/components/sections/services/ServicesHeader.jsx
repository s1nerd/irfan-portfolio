import { motion } from "framer-motion";

import { fadeUp } from "@/animations/fade";
import servicesHeader from "@/data/services/header";

export default function ServicesHeader() {
  return (
    <motion.header
      variants={fadeUp()}
      className="mx-auto max-w-4xl text-center"
    >
      <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        {servicesHeader.badge}
      </span>

      <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
        {servicesHeader.title}

        <span className="bg-linear-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          {" "}
          {servicesHeader.highlight}
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
        {servicesHeader.description}
      </p>
    </motion.header>
  );
}
