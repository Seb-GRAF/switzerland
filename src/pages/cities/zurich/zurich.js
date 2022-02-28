import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import CityTitle from "../../../components/city-title/city-title";
import DescriptionSection from "../../../components/description-section/description-section";
import {
  DividerLarge,
  DividerSmall,
  TextDivider,
  NextPage,
} from "../../../components/dividers/dividers";
import AnimatedPage from "../../../components/animated-page/animated-page";

import "./style.scss";

const Zurich = () => {
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
    loco.on("scroll", (e) => {
      const nav = document.querySelector("nav");
      if (e.direction === "up") nav.className = "nav__active";
      if (e.direction === "down") nav.className = "nav__hidden";
    });

    const locomotiveUpdate = () => loco.update();
    setTimeout(locomotiveUpdate, 200);
    return () => {
      loco.destroy();
    };
  });

  return (
    <AnimatedPage>
      <section className="zurich" data-scroll-section>
        <CityTitle
          city="ZURICH"
          img={require("../../../assets/cities/zrh/1.jpg")}
        />
        <DividerLarge img={require("../../../assets/cities/zrh/2.jpg")} />
        <TextDivider
          title="the economic centre of Switzerland"
          subtitle="Zurich was already a prosperous centre of commerce in the Early Middle Ages. The 1519 Reformation gave the economy such a boost that the city rapidly became Switzerland’s financial centre."
        />
        <DescriptionSection img={require("../../../assets/cities/zrh/3.jpg")}>
          <p>
            Zurich has a unique position in Switzerland. It is the country's
            largest city and home to an internationally reputed financial centre
            as well as being the focus of an economic region which acts as the
            motor of Switzerland, and along with Geneva is the most important
            gateway to the country.
          </p>
          <p>
            Zurich's place on the world stage does not come down to its size but
            to its strong international networks. The high standards of living,
            working and accommodation are regularly confirmed in surveys of the
            local residents, and Zurich consistently finds itself at the top of
            international rankings of cities in terms of quality of life.
          </p>
        </DescriptionSection>
        <DescriptionSection
          size="medium"
          img={require("../../../assets/cities/zrh/4.jpg")}
        >
          <p>
            Zurich lies in the German speaking part of the country, where people
            speak a German dialect, so called Swiss German or Schwyzerdütsch,
            which differs from region to region.
          </p>
          <p>
            Be it among friends, at work or when dealing with the authorities,
            people speak dialect. For anyone who speaks or - even worse - is
            learning to speak German, this can be tiring because at first it‘s
            very hard to understand even for people with a German mother tongue.
          </p>
        </DescriptionSection>
        <DividerSmall img={require("../../../assets/cities/zrh/5.jpg")} />
        <DescriptionSection
          size="large"
          img={require("../../../assets/cities/zrh/6.jpg")}
        >
          <p>
            The current variety and quality of the cultural offer in Zürich is
            most impressive. The city's cultural spectrum was marked in the
            1970s by the opera house, theatre, art gallery, concert hall and
            various cinemas, but over the past 25 years it has taken on an
            almost unbelievable life of its own.
          </p>
          <p>
            Zürich has centres and niches for the avant-garde and the
            unconventional from every sector of culture. The city's old town
            along the lake and the Langstrasse area are characterised by the
            wide variety of bars and restaurants.
          </p>
          <p>
            In the Zürich-West former industrial area, where steel-workers once
            manufactured turbines and machinery, there are now any number of
            clubs and discos, as well as galleries.
          </p>
        </DescriptionSection>
        <DividerSmall img={require("../../../assets/cities/zrh/7.jpg")} />
        <NextPage link="/cities/geneva" />
      </section>
    </AnimatedPage>
  );
};

export default Zurich;
