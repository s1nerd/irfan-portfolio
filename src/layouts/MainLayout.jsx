import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/navbar";

const pageTransition = {
  initial: {
    opacity: 0,
    y: 12,
    filter: "blur(6px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(4px)",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export default function MainLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          className="min-h-screen"
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}
