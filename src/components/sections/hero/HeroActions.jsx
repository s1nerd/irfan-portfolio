import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { fadeUp } from "@/animations/fade";
import Button from "@/components/common/Button";

export default function HeroActions() {
  return (
    <motion.div
      variants={fadeUp(0.4)}
      className="mt-2 flex flex-wrap items-center gap-6"
    >
      <Button
        as="a"
        href="/files/CV-Irfan-Maulana.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group px-7 py-3"
      >
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
        Download CV
      </Button>

      <Button
        as={Link}
        to="/contact"
        variant="outline"
        className="group px-7 py-3"
      >
        <Mail
          size={18}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
        Contact Me
      </Button>
    </motion.div>
  );
}
