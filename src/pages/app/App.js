import React, { useEffect, useRef } from "react";
import "./App.scss";
import Intro from "../intro/Intro";
import Cities from "../cities/Cities";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  }, []);

  return (
    <div ref={scrollRef} className="app" id="app" data-scroll-container>
      <Intro />
    </div>
  );
};

export default App;
