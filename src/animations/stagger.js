const defaultTransition = (staggerChildren = 0.12, delayChildren = 0.15) => ({
  staggerChildren,
  delayChildren,
});

export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0.15,
) => ({
  hidden: {},

  visible: {
    transition: defaultTransition(staggerChildren, delayChildren),
  },
});

export const staggerItem = (delay = 0, distance = 30, duration = 0.55) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerItemScale = (delay = 0, scale = 0.9, duration = 0.45) => ({
  hidden: {
    opacity: 0,
    scale,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerList = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},

  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
