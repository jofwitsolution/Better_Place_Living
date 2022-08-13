import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="col-1-of-3">
          <div className="">
            <h3 className="footer__header-primary">Contact info</h3>

            <address className="u-margin-bottom-small">
              <h4>Better Place Living Ltd</h4>
              1 Slate Lane, Nuneaton, <br />
              CV10 9FL United Kingdom. <br />
              <a href="tel:+440758-146-7406">0758 146 7406</a>
              <br />
              <a href="tel:+440782-888-7031">0782 888 7031</a>
              <br />
              <a href="mailto: info@betterplaceliving.co.uk">
                info@betterplaceliving.co.uk
              </a>
            </address>

            <div className="footer__icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook footer__icon"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram footer__icon"></i>
              </a>
              <a
                href="https://twitter.com/BetterPlaceLiv1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter-square footer__icon"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin footer__icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="">
            <h3 className="footer__header">Useful links</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a as={Link} href="/about-us" className="footer__link">
                  About us
                </a>
              </li>
              <li className="footer__item">
                <a as={Link} href="/contact-us" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a as={Link} href="/careers" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a as={Link} href="/privacypolicy" className="footer__link">
                  Contract of service
                </a>
              </li>
              <li className="footer__item">
                <a as={Link} href="/terms" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1-of-3 footer__row-item">
          <div className="footer__logo-box">
            <img
              alt="logo-white"
              src="img/logo-white.png"
              className="footer__logo"
            />
          </div>
        </div>
      </div>
      <div className="u-center-text footer__copyright">
        <i>Copyright &copy; 2022 BPL</i>
      </div>
    </footer>
  );
};

export default Footer;
