export const NAV_HEIGHT = 84;

export const PARTICLES_OPTS = {
  fpsLimit: 60,
  background: {
    color: "#302b27",
  },
  backgroundMode: {
    enable: true,
  },
  particles: {
    color: {
      value: ["#f5f3f5"],
    },
    links: {
      color: "#f5f3f5",
      enable: true,
    },
    move: {
      enable: true,
      speed: 1,
    },
    size: {
      value: 1,
      random: {
        enable: true,
        minimumValue: 1,
      },
      animation: {
        enable: true,
        speed: 2.5,
        minimumValue: 1,
      },
    },
    opacity: {
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.4,
      },
    },
  },
};
