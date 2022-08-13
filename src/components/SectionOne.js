import React from "react";
// import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          OUR SUPPORTED INDEPENDENCE MISSIONS
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <p className="paragraph-1">
            Better place living key objectives revolve around independence, we
            strive to make each client capable and able to get back to their
            feet in the community, from walks and outgoings to daily house tasks
            such as cleaning and cooking. We are always there for the extra
            little bit of support if our clients require it. Our mission is to
            incorporate struggling and vulnerable clients back into society.
          </p>
          <p className="paragraph-1">
            We are dedicated to our role of creating a society where vulnerable
            people can be a part of a community.
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet="img/bpl-1.jpg 300w, img/bpl-1-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="bpl-1"
              className="composition__photo composition__photo--p1"
              src="img/bpl-1-large.jpg"
            />

            <img
              srcSet="img/bpl-2.jpg 300w, img/bpl-2-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="bpl-2"
              className="composition__photo composition__photo--p2"
              src="img/bpl-2-large.jpg"
            />

            <img
              srcSet="img/bpl-3.jpg 300w, img/bpl-3-large.jpg 1000w"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="bpl-3"
              className="composition__photo composition__photo--p3"
              src="img/bpl-3-large.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
