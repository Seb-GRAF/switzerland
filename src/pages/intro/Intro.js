import React, { useRef, useEffect } from "react";
import { DividerLarge, DividerSmall, TextDivider } from "../dividers/dividers";
import DescriptionSection from "../description-section/description-section";
import gsap from "gsap";

import "./style.scss";

const Intro = () => {
  return (
    <section className="intro">
      <div className="title" data-scroll-section>
        <h1>SWITZERLAND</h1>
        <h2>Unus pro omnibus, omnes pro uno</h2>
      </div>
      <DividerLarge img={require("../../assets/photos/intro1.jpg")} />
      <TextDivider>
        <h1>
          A landlocked country, filled with giant mountains, deep Alpine lakes
          and grasses valleys.
        </h1>
      </TextDivider>
      <DescriptionSection img={require("../../assets/photos/intro2.jpg")}>
        <p>
          Switzerland is a small mountainous country located in central Europe.
          It is about the size of New Jersey and is between France and Italy. It
          is also bordered by Austria, Germany, and Liechtenstein.
        </p>

        <p>
          Most of the population lives in the plateau which is between the high
          Alps in the south and the Jura mountains in the north. The mountainous
          area in the south is sparsely populated.
        </p>

        <p>
          Switzerland has a population of 8.6 million people (in 2019), capital
          city is Bern; the largest city is Zürich. Spoken languages are German,
          French, Italian and Rumantsch, traditionally spoken in the different
          regions (cantons) of the country.
        </p>

        <p>
          According to the World Happiness Report 2021, the Swiss Confederation
          is officially the third-happiest nation on Earth, after Finland and
          Denmark.
        </p>
      </DescriptionSection>
      <DividerSmall img={require("../../assets/photos/intro3.jpg")} />
      <DividerLarge img={require("../../assets/photos/intro4.jpg")} />
      <TextDivider>
        <h1>welcome to 🇨🇭</h1>
      </TextDivider>
      <DescriptionSection img={require("../../assets/photos/intro5.jpg")}>
        <p>
          Switzerland is a small mountainous country located in central Europe.
          It is about the size of New Jersey and is between France and Italy. It
          is also bordered by Austria, Germany, and Liechtenstein.
        </p>
        <p>
          Most of the population lives in the plateau which is between the high
          Alps in the south and the Jura mountains in the north. The mountainous
          area in the south is sparsely populated.
        </p>
        <p>
          Switzerland has a population of 8.6 million people (in 2019), capital
          city is Bern; the largest city is Zürich. Spoken languages are German,
          French, Italian and Rumantsch, traditionally spoken in the different
          regions (cantons) of the country.
        </p>
        <p>
          According to the World Happiness Report 2021, the Swiss Confederation
          is officially the third-happiest nation on Earth, after Finland and
          Denmark.
        </p>
      </DescriptionSection>
      <DescriptionSection img={require("../../assets/photos/intro6.jpg")}>
        <p>
          Switzerland is a small mountainous country located in central Europe.
          It is about the size of New Jersey and is between France and Italy. It
          is also bordered by Austria, Germany, and Liechtenstein.
        </p>
        <p>
          Most of the population lives in the plateau which is between the high
          Alps in the south and the Jura mountains in the north. The mountainous
          area in the south is sparsely populated.
        </p>
        <p>
          Switzerland has a population of 8.6 million people (in 2019), capital
          city is Bern; the largest city is Zürich. Spoken languages are German,
          French, Italian and Rumantsch, traditionally spoken in the different
          regions (cantons) of the country.
        </p>
        <p>
          According to the World Happiness Report 2021, the Swiss Confederation
          is officially the third-happiest nation on Earth, after Finland and
          Denmark.
        </p>
      </DescriptionSection>
      <DescriptionSection img={require("../../assets/photos/intro5.jpg")}>
        <p>
          Switzerland is a small mountainous country located in central Europe.
          It is about the size of New Jersey and is between France and Italy. It
          is also bordered by Austria, Germany, and Liechtenstein.
        </p>
        <p>
          Most of the population lives in the plateau which is between the high
          Alps in the south and the Jura mountains in the north. The mountainous
          area in the south is sparsely populated.
        </p>
        <p>
          Switzerland has a population of 8.6 million people (in 2019), capital
          city is Bern; the largest city is Zürich. Spoken languages are German,
          French, Italian and Rumantsch, traditionally spoken in the different
          regions (cantons) of the country.
        </p>
        <p>
          According to the World Happiness Report 2021, the Swiss Confederation
          is officially the third-happiest nation on Earth, after Finland and
          Denmark.
        </p>
      </DescriptionSection>
      <DescriptionSection img={require("../../assets/photos/intro6.jpg")}>
        <p>
          Switzerland is a small mountainous country located in central Europe.
          It is about the size of New Jersey and is between France and Italy. It
          is also bordered by Austria, Germany, and Liechtenstein.
        </p>
        <p>
          Most of the population lives in the plateau which is between the high
          Alps in the south and the Jura mountains in the north. The mountainous
          area in the south is sparsely populated.
        </p>
        <p>
          Switzerland has a population of 8.6 million people (in 2019), capital
          city is Bern; the largest city is Zürich. Spoken languages are German,
          French, Italian and Rumantsch, traditionally spoken in the different
          regions (cantons) of the country.
        </p>
        <p>
          According to the World Happiness Report 2021, the Swiss Confederation
          is officially the third-happiest nation on Earth, after Finland and
          Denmark.
        </p>
      </DescriptionSection>
    </section>
  );
};

export default Intro;
