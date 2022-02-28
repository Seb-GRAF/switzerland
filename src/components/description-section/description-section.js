import React from "react";
import "./style.scss";

const DescriptionSection = ({ children, img, size }) => {
  return (
    <div className="description__section">
      <div className="description__text" data-scroll>
        {children}
      </div>
      <div className={`description__image ${size}`} data-scroll>
        <img src={img} alt="city image" data-scroll data-scroll-speed="-3" />
      </div>
    </div>
  );
};

export default DescriptionSection;
