import React from "react";
import "./style.scss";

const DescriptionSection = ({ children, img }) => {
  return (
    <div className="description__section" data-scroll data-scroll-section>
      <div className="description__text" data-scroll>
        {children}
      </div>
      <div className="description__image">
        <img src={img} data-scroll data-scroll-speed="-4" />
      </div>
    </div>
  );
};

export default DescriptionSection;
