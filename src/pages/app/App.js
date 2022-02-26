import React, { useEffect, useRef, useState } from "react";
import useLocomotiveScroll from "../../hooks/useLocoScroll";
import Nav from "../nav/nav";
import Intro from "../intro/intro";
import { DividerLarge, DividerSmall, TextDivider } from "../dividers/dividers";
import DescriptionSection from "../description-section/description-section";
import "./style.scss";

const App = () => {
  const scrollRef = useRef(null);
  const [preloader, setPreloader] = useState(true);
  useLocomotiveScroll(!preloader);
  const [timer, setTimer] = useState(1);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <>
      {preloader ? (
        <div className="preloader">
          <h1>SWITZERLAND</h1>
        </div>
      ) : (
        <div ref={scrollRef} className="app" id="app" data-scroll-container>
          <Nav />
          <Intro />
        </div>
      )}
    </>
  );
};

export default App;
