import React from "react";
import "./style.scss";

const Title = ({ children, title, subtitle }) => {
  return (
    <div className="title" data-scroll>
      <div className="text__wrapper">
        <h1>{title}</h1>
      </div>
      <div className="text__wrapper">
        <h2>{subtitle}</h2>
      </div>
      {children}
      {/* <p data-scroll data-scroll-speed="1">
        ↓
      </p> */}
    </div>
  );
};

export default Title;
