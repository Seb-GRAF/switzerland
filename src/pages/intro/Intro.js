import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <section className="intro" data-scroll>
      <div className="title" data-scroll>
        <h1>SWITZERLAND</h1>
        <h2>Unus pro omnibus, omnes pro uno</h2>
      </div>
      <div className="intro__image">
        <img
          src={require("../../assets/photos/intro1.jpg")}
          data-scroll
          data-scroll-speed="-4"
        />
      </div>
      <div className="text__section" data-scroll>
        <h1>Yes this is not Lord of the Rings, this is Switzerland.</h1>
        <h2>
          A landlocked country, filled with giant mountains, deep Alpine lakes
          and grasses valleys.
        </h2>
      </div>

      <div className="description" data-scroll>
        <div className="left" data-scroll>
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
          <p>
            According to the World Happiness Report 2021, the Swiss
            Confederation is officially the third-happiest nation on Earth,
            after Finland and Denmark.
          </p>
        </div>
        <div className="right">
          <img
            src={require("../../assets/photos/intro2.jpg")}
            data-scroll
            data-scroll-speed="-4"
          />
        </div>
      </div>
      <div className="divider">
        <div className="divider__image">
          <img
            src={require("../../assets/photos/intro3.jpg")}
            data-scroll
            data-scroll-speed="-4"
          />
        </div>
      </div>
      <div className="intro__image" data-scroll>
        <img
          src={require("../../assets/photos/intro4.jpg")}
          data-scroll
          data-scroll-speed="-4"
        />
      </div>
      <div className="text__section" data-scroll>
        <h1>welcome to 🇨🇭</h1>
      </div>
      <div className="description" data-scroll>
        <div className="left" data-scroll>
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
          <p>
            According to the World Happiness Report 2021, the Swiss
            Confederation is officially the third-happiest nation on Earth,
            after Finland and Denmark.
          </p>
        </div>
        <div className="right">
          <img
            src={require("../../assets/photos/intro5.jpg")}
            data-scroll
            data-scroll-speed="-4"
          />
        </div>
      </div>
      <div className="description" data-scroll>
        <div className="right">
          <img
            src={require("../../assets/photos/intro6.jpg")}
            data-scroll
            data-scroll-speed="-4"
          />
        </div>
        <div className="left" data-scroll>
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
          <p>
            According to the World Happiness Report 2021, the Swiss
            Confederation is officially the third-happiest nation on Earth,
            after Finland and Denmark.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
