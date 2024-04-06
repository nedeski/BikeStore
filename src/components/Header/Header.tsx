import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">
          <img src={`./img/logo.png`} alt="logo image" className="logoImage" />
        </a>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Bikers</a>
          </li>
          <li>
            <a href="#">Gear</a>
          </li>
          <li>
            <a href="#">Parts</a>
          </li>
          <li>
            <a href="#">Tires</a>
          </li>
          <li>
            <a href="#">Service-info</a>
          </li>
          <li>
            <a href="">Catalogues</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="icons">
        <a href="#">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faBagShopping} />
        </a>
      </div>
    </div>
  );
};
