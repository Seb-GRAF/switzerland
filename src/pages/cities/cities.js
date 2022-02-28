import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Link } from "react-router-dom";
import useLocomotiveScroll from "../../hooks/useLocoScroll";
import {
  DividerLarge,
  DividerSmall,
  TextDivider,
} from "../../components/dividers/dividers";
import CityTitle from "../../components/city-title/city-title";
import DescriptionSection from "../../components/description-section/description-section";

import "./style.scss";

import Title from "../../components/city-title/title/title";
import AnimatedPage from "../../components/animated-page/animated-page";

const Cities = () => {
  useEffect(() => {
    const loco = new LocomotiveScroll({
      el: document.querySelector("#app"),
      smooth: true,
      touchMultiplier: 2,
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
    document.querySelector("nav").className = "nav__active";
    // loco.on("scroll", (e) => {
    //   const nav = document.querySelector("nav");
    //   if (e.direction === "up") nav.className = "nav__active";
    //   if (e.direction === "down") nav.className = "nav__hidden";
    // });

    const locomotiveUpdate = () => loco.update();
    setTimeout(locomotiveUpdate, 200);
    return () => {
      loco.destroy();
    };
  });

  return (
    <AnimatedPage>
      <section className="cities" data-scroll-section>
        <Title title="cities">
          <div className="cities__list" data-scroll>
            <Link to="/cities/zurich">
              <p>Zurich</p>
            </Link>
            <Link to="/cities/geneva">
              <p>Geneva</p>
            </Link>
            <Link to="/cities/bern">
              <p>Bern</p>
            </Link>
            <Link to="/cities/lausanne">
              <p>Lausanne</p>
            </Link>
          </div>
        </Title>
      </section>
    </AnimatedPage>
  );
};

export default Cities;
