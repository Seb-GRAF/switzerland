import React from "react";
import "./style.scss";

const Title = ({ children }) => {
  return (
    <div className="title">
      {children}
      <p data-scroll data-scroll-speed="1">
        ↓
      </p>
    </div>
  );
};

export default Title;
