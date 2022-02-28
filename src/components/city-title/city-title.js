import React from "react";
import "./style.scss";

const CityTitle = ({ city, img }) => {
  return (
    <div className="city__title" data-scroll>
      <div className="text__wrapper" data-scroll data-scroll-speed="2">
        <h1>{city}</h1>
      </div>
      <div className="city__image">
        <img data-scroll data-scroll-speed="-3" src={img} alt={city} />
      </div>
    </div>
  );
};

export default CityTitle;
