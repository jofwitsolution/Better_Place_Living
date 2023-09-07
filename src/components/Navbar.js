import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a as={Link} href="/" className="navigation__link">
              <span className="navigation__link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a as={Link} href="/about-us" className="navigation__link">
              <span className="navigation__link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              About BPL
            </a>
          </li>
          {/* <li className="navigation__item">
            <a as={Link} href="/mental-health" className="navigation__link">
              <span className="navigation__link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              Mental Health
            </a>
          </li> */}
          <li className="navigation__item">
            <a as={Link} href="/our-services" className="navigation__link">
              <span className="navigation__link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              Our Services
            </a>
          </li>
          <li className="navigation__item">
            <a as={Link} href="/contact-us" className="navigation__link">
              <span className="navigation__link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
