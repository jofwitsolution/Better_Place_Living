import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Better Place Living</span>
        </h1>

        <a as={Link} href="/about" className="btn btn--white btn--animated">
          Discover More
        </a>
      </div>
    </header>
  );
};

export default Header;
