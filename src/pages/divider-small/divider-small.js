import React from "react";
import "./style.scss";

const DividerSmall = ({ img }) => {
  return (
    <div className="divider__small" data-scroll data-scroll-section>
      <div className="divider__image">
        <img src={img} data-scroll data-scroll-speed="-4" />
      </div>
    </div>
  );
};

export default DividerSmall;
