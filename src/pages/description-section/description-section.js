import React from "react";
import "./style.scss";

const DescriptionSection = ({ children, img }) => {
  return (
    <div className="description__section">
      <div className="description__text" data-scroll>
        {children}
      </div>
      <div className="description__image">
        <img src={img} data-scroll data-scroll-speed="-3" />
      </div>
    </div>
  );
};

export default DescriptionSection;
