// motionUtils.js
export const fadeIn = (direction = "up", delay = 0) => {
  const x = direction === "left" ? -50 : direction === "right" ? 50 : 0;
  const y = direction === "up" ? 50 : direction === "down" ? -50 : 0;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};
