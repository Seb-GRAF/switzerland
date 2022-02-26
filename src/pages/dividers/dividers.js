import React from "react";
import "./style.scss";

const DividerLarge = ({ img }) => {
  return (
    <div className="divider__large">
      <img src={img} data-scroll data-scroll-speed="-3" />
    </div>
  );
};

const DividerSmall = ({ img }) => {
  return (
    <div className="divider__small">
      <div className="divider__image" data-scroll>
        <img src={img} data-scroll data-scroll-speed="-3" />
      </div>
    </div>
  );
};

const TextDivider = ({ children }) => {
  return <div className="text__divider">{children}</div>;
};

export { DividerLarge, DividerSmall, TextDivider };
