import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Title from "../../../components/city-title/title/title";
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

const Geneva = () => {
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
      <section className="geneva" data-scroll-section>
        <CityTitle
          city="GENEVA"
          img={require("../../../assets/cities/gva/1.jpg")}
        />
        <DividerLarge img={require("../../../assets/cities/gva/2.jpg")} />
        <TextDivider
          title="Post Tenebras Lux"
          subtitle="The motto of Geneva, Post Tenebras Lux, stands in Latin for light after darkness"
        />
        <DescriptionSection img={require("../../../assets/cities/gva/3.jpg")}>
          <p>
            Geneva is the capital of the Swiss Canton of Geneva located in the
            south-westernmost corner of Switzerland. The city is situated along
            the banks of Europe’s largest lake, Lake Geneva (Lac Léman), at the
            mouth of the Rhone River and is bordered by the Jura Mountains to
            the west and the French Alps in the east.
          </p>
          <p>
            The city is easily reached within 2 hours by plane from most major
            cities in Europe and is a hub of Europe’s highway network.
            High-speed train connections to Paris and Milan as well as fast
            trains to Spain and Germany provide additional access.
          </p>
        </DescriptionSection>
        <DescriptionSection
          size="large"
          img={require("../../../assets/cities/gva/4.jpg")}
        >
          <p>
            Switzerland has three official languages: French, German and
            Italian. French is the predominant language spoken in Geneva, but
            most citizens speak at least one other language. English is spoken
            by about a quarter of the local population and majority of
            foreigners.
          </p>
          <p>
            Of course, you can hear just about every other language in Geneva if
            you listen hard enough, from Albanian to Zimbabwean. When dealing
            with locals it is recommended that you start off in French, even if
            it is only a greeting, before transitioning to English.
          </p>
        </DescriptionSection>
        <DescriptionSection img={require("../../../assets/cities/gva/5.jpg")}>
          <p>
            Switzerland has been host to international organisations and
            conferences for more than 150 years. This role of host state is
            firmly rooted in Switzerland's tradition of humanitarianism and
            policy of making its good offices available. International
            activities take place in Basel, Bern, in the canton of Vaud and
            above all in Geneva.
          </p>
          <p>
            The city of Geneva itself is host to 39 international institutions,
            organizations, bodies as well as a secretariat established under a
            treaty, approximately 750 NGOs and the permanent representations of
            177 member states, including Switzerland.
          </p>
        </DescriptionSection>
        <DividerSmall img={require("../../../assets/cities/gva/6.jpg")} />
        <NextPage link="/cities/bern" />
      </section>
    </AnimatedPage>
  );
};

export default Geneva;
