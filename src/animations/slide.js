const defaultTransition = (delay = 0, duration = 0.7) => ({
  duration,
  delay,
  ease: "easeOut",
});

export const slideUp = (delay = 0, distance = 80, duration = 0.7) => ({
  hidden: {
    y: distance,
  },

  visible: {
    y: 0,

    transition: defaultTransition(delay, duration),
  },
});

export const slideDown = (delay = 0, distance = 80, duration = 0.7) => ({
  hidden: {
    y: -distance,
  },

  visible: {
    y: 0,

    transition: defaultTransition(delay, duration),
  },
});

export const slideLeft = (delay = 0, distance = 80, duration = 0.7) => ({
  hidden: {
    x: -distance,
  },

  visible: {
    x: 0,

    transition: defaultTransition(delay, duration),
  },
});

export const slideRight = (delay = 0, distance = 80, duration = 0.7) => ({
  hidden: {
    x: distance,
  },

  visible: {
    x: 0,

    transition: defaultTransition(delay, duration),
  },
});
