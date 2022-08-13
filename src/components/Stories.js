import React from "react";
import { Link } from "react-router-dom";
import Meta from "./common/Meta";

const Stories = () => {
  return (
    <>
      <Meta title="Stories | BPL" />

      <section className="story-page">
        <div className="about-us__heading ">
          <div className=" u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary-big">Stories</h2>
          </div>
        </div>
        <div className="u-margin-top-big"></div>
        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src="img/nat-8.jpg"
                alt="Person on a tour"
                className="story__img"
              />
              <figcaption className="story__caption">BPL</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small u-h3-text-format">
                FUTURE STORIES ABOUT BETTER PLACE LIVING
              </h3>
              <p className="u-p-text-format">
                “Better Place Living customer's story will appear here.”
              </p>
            </div>
          </div>
        </div>

        <div className="story-page__border"></div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src="img/nat-9.jpg"
                alt="Person on a tour"
                className="story__img"
              />
              <figcaption className="story__caption">BPL</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small u-h3-text-format">
                FUTURE STORIES ABOUT BETTER PLACE LIVING
              </h3>
              <p className="u-p-text-format">
                “Better Place Living customer's story will appear here.”
              </p>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a as={Link} href="/home" className="btn-text">
            Home &larr;
          </a>
        </div>

        <div className="u-margin-bottom-big"></div>
      </section>
    </>
  );
};

export default Stories;
