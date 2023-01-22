import { useEffect, useState } from "react";

export enum ScrollDirection {
  up = "up",
  down = "down",
  unset = "unset",
}

export const useScrollDirection = (opts?: { threshold?: number }) => {
  const t = opts?.threshold ?? 100;
  const [scrollDir, setScrollDir] = useState(ScrollDirection.unset);

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      currentScrollYPosition > t;

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? ScrollDirection.down
          : ScrollDirection.up;
        setScrollDir(newScrollDirection);
      } else {
        setScrollDir(ScrollDirection.unset);
      }
      previousScrollYPosition =
        currentScrollYPosition > 0 ? currentScrollYPosition : 0;
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollDir;
};
