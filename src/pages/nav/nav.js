import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" data-link-alt="Discover Switzerland">
        <span>Discover Switzerland</span>
      </Link>
      <Link to="/cities" data-link-alt="Cities">
        <span>Cities</span>
      </Link>
    </nav>
  );
};

export default Nav;
