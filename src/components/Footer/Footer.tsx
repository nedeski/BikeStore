import React from "react";
import { footerLabelsData } from "./FooterLabels";
import { FooterListComponent } from "./FooterListComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <h3>Social media</h3>
        <div className="iconsContainer">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className="listSection">
        {footerLabelsData.map((el, key) => (
          <FooterListComponent key={key} {...el} />
        ))}
      </div>
    </div>
  );
};
