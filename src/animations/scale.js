const defaultTransition = (delay = 0, duration = 0.5) => ({
  duration,
  delay,
  ease: "easeOut",
});

export const scaleIn = (delay = 0, scale = 0.9, duration = 0.5) => ({
  hidden: {
    opacity: 0,
    scale,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: defaultTransition(delay, duration),
  },
});

export const scaleUp = (delay = 0, scale = 0.8, duration = 0.5) => ({
  hidden: {
    opacity: 0,
    scale,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: defaultTransition(delay, duration),
  },
});

export const scaleDown = (delay = 0, scale = 1.15, duration = 0.5) => ({
  hidden: {
    opacity: 0,
    scale,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: defaultTransition(delay, duration),
  },
});

export const pulseScale = (duration = 3, scale = 1.03) => ({
  animate: {
    scale: [1, scale, 1],
  },

  transition: {
    duration,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  },
});

export const floatingScale = (duration = 10, distance = 5) => ({
  style: {
    willChange: "transform",
  },

  animate: {
    y: [0, -distance, 0],
  },

  transition: {
    duration,
    repeat: Infinity,
    repeatType: "mirror",
    ease: [0.42, 0, 0.58, 1],
  },
});

export const floatingRotate = (duration = 8, rotate = 2) => ({
  animate: {
    rotate: [-rotate, rotate, -rotate],
  },

  transition: {
    duration,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  },
});
