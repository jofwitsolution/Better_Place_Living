import React from "react";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  return (
    <section className="section-features">
      <div className="u-center-text u-margin-bottom-medium">
        <h2
          className="heading-section-2 u-margin-bottom-small"
          id="our-services"
        >
          WHAT WE OFFER
        </h2>
      </div>
      {/* <h3 className="u-center-text u-margin-bottom-small heading-section-2--sub u-margin-bottom-medium">
        Discover more about services that make people's live comfortable and
        build bright futures.
      </h3> */}
      <div className="row">
        <div className="col-1-of-4">
          <Link to="/our-services" className="feature-box__link">
            <div className="feature-box">
              <i className="bi bi-building feature-box__icon"></i>
              <h3 className="heading-tertiary u-margin-bottom-small feature-box__heading">
                Our Housing
              </h3>
              <p className="feature-box__text">
                We offer a home-to-home service. Our homes are safe, warm, and
                welcoming for young adults and older citizens alike.
              </p>
            </div>
          </Link>
        </div>
        <div className="col-1-of-4">
          <Link to="/our-services" className="feature-box__link">
            <div className="feature-box">
              <i className="bi bi-house-fill feature-box__icon"></i>

              <h3 className="heading-tertiary u-margin-bottom-small feature-box__heading">
                Supported Accommodation
              </h3>
              <p className="feature-box__text">
                We provide a simple comfortable living space in which our
                clients can feel independent to do day-to-day tasks with support
                from our team.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-1-of-4">
          <Link to="/our-services" className="feature-box__link">
            <div className="feature-box">
              <i className="bi bi-building feature-box__icon"></i>
              <h3 className="heading-tertiary u-margin-bottom-small feature-box__heading">
                Our housing guarantees
              </h3>
              <p className="feature-box__text">
                We will guarantee your home meets all fire safety standards and
                contains a functional working smoke alarm. We'll make sure your
                gas and electric safety checks are carried out in the specific
                timeframe.
              </p>
            </div>
          </Link>
        </div>
        <div className="col-1-of-4">
          <Link to="/our-services" className="feature-box__link">
            <div className="feature-box">
              <i className="bi bi-people-fill feature-box__icon"></i>
              <h3 className="heading-tertiary u-margin-bottom-small feature-box__heading">
                Community and Development Services
              </h3>
              <p className="feature-box__text">
                We liaise with different communities to ensure a productive and
                functional lifestyle. We recognize that some people, some
                groups, and some communities are excluded and oppressed by the
                way society and structures are organized.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a as={Link} href="/our-services" className="btn-text u-btn-text">
          Learn more &rarr;
        </a>
      </div>
    </section>
  );
};

export default SectionTwo;
