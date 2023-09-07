import React from "react";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
  return (
    <nav className="topheader bg">
      <div className="container-fluid py-2 topheader-nav-container">
        <a className="navbar-brand ms-5" href="/">
          <img
            src="img/logo-white.png"
            alt=""
            width="60"
            height="46"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="topheader-nav me-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "topheader-nav__active" : undefined
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "topheader-nav__active" : undefined
            }
            to="/about-us"
          >
            About
          </NavLink>
          {/* <NavLink
            className={({ isActive }) =>
              isActive ? "topheader-nav__active" : undefined
            }
            to="/mental-health"
          >
            Mental health
          </NavLink> */}
          <NavLink
            className={({ isActive }) =>
              isActive ? "topheader-nav__active" : undefined
            }
            to="/our-services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "topheader-nav__active" : undefined
            }
            to="/contact-us"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default TopHeader;
