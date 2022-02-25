import React, { Children, useEffect, useRef } from "react";
import useLocomotiveScroll from "../../hooks/useLocoScroll";
import Intro from "../intro/intro";
import { DividerLarge, DividerSmall, TextDivider } from "../dividers/dividers";
import DescriptionSection from "../description-section/description-section";
import "./style.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";

const App = () => {
  const scrollRef = useRef(null);
  useLocomotiveScroll();

  return (
    <div ref={scrollRef} className="app" id="app" data-scroll-container>
      <Intro />
    </div>
  );
};

export default App;
