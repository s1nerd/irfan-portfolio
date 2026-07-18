const defaultTransition = (delay = 0, duration = 0.6) => ({
  duration,
  delay,
  ease: "easeOut",
});

export const fadeIn = (delay = 0, duration = 0.6) => ({
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: defaultTransition(delay, duration),
  },
});

export const fadeUp = (delay = 0, distance = 40, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: defaultTransition(delay, duration),
  },
});

export const fadeDown = (delay = 0, distance = 40, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    y: -distance,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: defaultTransition(delay, duration),
  },
});

export const fadeLeft = (delay = 0, distance = 40, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    x: -distance,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: defaultTransition(delay, duration),
  },
});

export const fadeRight = (delay = 0, distance = 40, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    x: distance,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: defaultTransition(delay, duration),
  },
});
