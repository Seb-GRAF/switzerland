import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
  useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector("#app"),
      smooth: true,
      inertia: 0.9,
      multiplier: 0.5,
      mobile: {
        breakpoint: 0,
        smooth: true,
      },
      tablet: {
        breakpoint: 0,
        smooth: true,
      },
    });
  }, []);
};
export default useLocomotiveScroll;
