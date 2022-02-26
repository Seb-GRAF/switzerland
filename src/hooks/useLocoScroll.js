import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

const useLocomotiveScroll = (start) => {
  useEffect(() => {
    if (!start) return;
    const loco = new LocomotiveScroll({
      el: document.querySelector("#app"),
      smooth: true,
      inertia: 0.6,
      // touchMultiplier: 1,
      multiplier: 1,
      getDirection: true,
      mobile: {
        breakpoint: 0,
        smooth: true,
      },
      tablet: {
        breakpoint: 0,
        smooth: true,
      },
    });
    loco.on("scroll", (e) => {
      const nav = document.querySelector("nav");
      if (e.direction === "up") nav.className = "nav__active";
      if (e.direction === "down") nav.className = "nav__hidden";
    });

    function locomotiveHeightBug() {
      loco.update();
    }
    setTimeout(locomotiveHeightBug, 900);
  });
};
export default useLocomotiveScroll;
