import React from "react";
import "./style.scss";

const TextDivider = ({ text }) => {
  return (
    <div className="text__divider__section" data-scroll-section>
      <h1>{text}</h1>
    </div>
  );
};

export default TextDivider;
