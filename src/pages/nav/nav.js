import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <p>Discover Switzerland</p>
      </Link>
      <Link to="/cities">
        <p>Cities</p>
      </Link>
    </nav>
  );
};

export default Nav;
