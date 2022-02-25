import React from "react";
import "./style.scss";

const DividerLarge = ({ img }) => {
  return (
    <div className="divider__large" data-scroll-section>
      <img src={img} data-scroll data-scroll-speed="-4" />
    </div>
  );
};

const DividerSmall = ({ img }) => {
  return (
    <div className="divider__small" data-scroll-section>
      <div className="divider__image">
        <img src={img} data-scroll data-scroll-speed="-4" />
      </div>
    </div>
  );
};

const TextDivider = ({ children }) => {
  return (
    <div className="text__divider" data-scroll-section>
      {children}
    </div>
  );
};

export { DividerLarge, DividerSmall, TextDivider };
