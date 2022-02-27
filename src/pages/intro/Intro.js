import React, { useEffect } from "react";
import {
  DividerLarge,
  DividerSmall,
  TextDivider,
  NextPage,
} from "../dividers/dividers";
import DescriptionSection from "../description-section/description-section";
import LocomotiveScroll from "locomotive-scroll";
import "./style.scss";

import Title from "../title/title";
import AnimatedPage from "../animated-page/animated-page";

const Intro = () => {
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
      <section className="intro" data-scroll-section>
        <Title
          title={"switzerland"}
          subtitle="Unus pro omnibus, omnes pro uno"
        />
        <DividerLarge img={require("../../assets/photos/intro1.jpg")} />
        <TextDivider title="A landlocked country, filled with giant mountains, deep Alpine lakes and grassey valleys."></TextDivider>
        <DescriptionSection img={require("../../assets/photos/intro2.jpg")}>
          <p>
            Switzerland is a small mountainous country located in central
            Europe. It is about the size of New Jersey and is between France and
            Italy. It is also bordered by Austria, Germany, and Liechtenstein.
          </p>
          <p>
            Most of the population lives in the plateau which is between the
            high Alps in the south and the Jura mountains in the north. The
            mountainous area in the south is sparsely populated.
          </p>
          <p>
            Switzerland has a population of 8.6 million people (in 2019),
            capital city is Bern; the largest city is Zürich. Spoken languages
            are German, French, Italian and Rumantsch, traditionally spoken in
            the different regions (cantons) of the country.
          </p>
        </DescriptionSection>
        <DividerSmall img={require("../../assets/photos/intro3.jpg")} />
        <DividerLarge img={require("../../assets/photos/intro4.jpg")} />
        <TextDivider
          title="Unus pro omnibus, omnes pro uno"
          subtitle='Unus pro omnibus, omnes pro uno is a Latin phrase that means "One for all, all for one". It is the unofficial motto of Switzerland.'
        ></TextDivider>
        <DescriptionSection
          size="medium"
          img={require("../../assets/photos/intro5.jpg")}
        >
          <p>
            For many outsiders, Switzerland evokes a prosperous if rather staid
            and unexciting society, an image that is now dated. Switzerland
            remains wealthy and orderly.
          </p>
          <p>
            But its mountain-walled valleys are far more likely to echo the
            music of a local rock band than a yodel or an alphorn. Most Swiss
            live in towns and cities, not in the idyllic rural landscapes that
            you can see in the pictures above.
          </p>
        </DescriptionSection>
        <DescriptionSection
          size="small"
          img={require("../../assets/photos/intro6.jpg")}
        >
          <p>
            Switzerland is divided into 26 different areas called cantons. A
            canton is similar to a state in the United States.
          </p>
          <p>
            In the past, each canton had its own army and money. This changed in
            1848 when Switzerland finished a civil war and changed to the
            structure it has now.
          </p>
        </DescriptionSection>
        <DescriptionSection img={require("../../assets/photos/intro7.jpg")}>
          <p>
            Most of the major cultural regions of western continental Europe
            (German, French, and Italian) into contact in Switzerland. Thus, one
            of the country’s distinctive features is the variety of its
            languages.
          </p>
          <p>
            The Swiss constitution has German, French, and Italian as official
            languages. Since 1996 Romansh, a linguistic relic preserved in the
            mountainous regions, has had official status at the federal level
            for communicating with Romansh-speaking persons (it had been
            designated as an official “national” language in 1938).
          </p>
        </DescriptionSection>
        <DescriptionSection
          size="big"
          img={require("../../assets/photos/intro8.jpg")}
        >
          <p>
            As a country where diverse traditions and cultures meet and
            interact, Switzerland has been a melting-pot in the heart of Europe
            since time immemorial. This is why cultural life in cosmopolitan
            Switzerland displays such enormous variety.
          </p>
          <p>
            There is no such thing as "typically Swiss art". There is a clear
            and repeated focus on the Alps as a living environment. The tendency
            to be modest is also a recurrent theme. But by and large, the arts
            in Switzerland are just as diverse as the country itself.
          </p>
          <p>
            For example, Switzerland has won more Nobel Prizes and registered
            more patents per capita than any other country, and the country
            abounds in cultural institutions, museums, and libraries, all well
            supported with federal funds.
          </p>
        </DescriptionSection>
        <NextPage link="/cities" />
      </section>
    </AnimatedPage>
  );
};

export default Intro;
