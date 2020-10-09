import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark py-3">
    <div className="container">
      <div className="row m-auto">
        <FontAwesomeIcon icon={faGamepad} size="2x" className="text-white" />
        <div className="h1 ml-3 my-auto text-light">React Masterminds</div>
      </div>
    </div>
  </nav>
);
