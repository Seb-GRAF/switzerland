import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const DividerLarge = ({ img }) => {
  return (
    <div className="divider__large">
      <img src={img} data-scroll data-scroll-speed="-3" />
    </div>
  );
};

const DividerSmall = ({ img, source }) => {
  return (
    <div className="divider__small" data-scroll>
      <div className="divider__image">
        <img src={img} data-scroll data-scroll-speed="-3" />
      </div>
    </div>
  );
};

const TextDivider = ({ title, subtitle }) => {
  return (
    <div className="text__divider" data-scroll>
      <div className="text__wrapper">
        <h1>{title}</h1>
      </div>
      <div className="text__wrapper">
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

const NextPage = ({ link }) => {
  return (
    <Link to={link}>
      <div className="next__page">
        <svg
          width="30"
          height="17"
          viewBox="0 0 30 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="13.2676"
            y="15.0166"
            width="21.2368"
            height="2"
            transform="rotate(-45 13.2676 15.0166)"
            fill="currentColor"
          ></rect>
          <rect
            x="1.41406"
            y="0.283203"
            width="20.5418"
            height="2"
            transform="rotate(45 1.41406 0.283203)"
            fill="currentColor"
          ></rect>
        </svg>
      </div>
    </Link>
  );
};
export { DividerLarge, DividerSmall, TextDivider, NextPage };
