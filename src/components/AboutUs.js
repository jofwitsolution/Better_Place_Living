import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Meta from "./common/Meta";
import SectionThree from "./SectionThree";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Meta title="About us | BPL" />
      <section className="about-us">
        {/* <div className="about-us__heading ">
          <div className=" u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondary-big">About Us</h2>
          </div>
        </div> */}
        <div className="about-us__image-1">
          <div className="about-us__image-1-text">
            <p className="paragraph-white">
              We were founded in 2022, we are an LTD company on a mission to
              make difference. Our team is made up of passionate people who care
              about offering a service that comes from the heart. We run a
              variety of services across the UK, the ultimate aim to build
              independence through your aspiration, enabling our customers to be
              part of their community so that they live and feel connected to
              society.
            </p>
          </div>
        </div>
        <div className="about-us__image-1-border"></div>
        <div className="about-us__content">
          <div className="about-us__text">
            <a
              as={Link}
              href="/home"
              className="btn-text u-margin-bottom-medium"
            >
              Home &larr;
            </a>

            <div className="about-us__aim-and-objective">
              <h3 className="heading-tertiary-big u-text-color-primary">
                Our Aims and Objectives
              </h3>
              <div>
                <ul>
                  <li className="aim-objective">Caring</li>
                  <li className="aim-objective">Reliable</li>
                  <li className="aim-objective">Responsive</li>
                  <li className="aim-objective">Transparent</li>
                </ul>
              </div>
            </div>
            <p className="paragraph-1">
              To make a differnce in someone's heart you dont have to be
              brilliant, rich, beautiful or perfect you just have to care. All
              our staff have experience in the care sector so we are confident
              that we are delivering a high standard of care to our customers.
            </p>
            <p className="paragraph-1">
              Good leadership is taking responsibility for all those that we
              cross paths with, all our staff would have gone through our care
              training program ensuring that we are competent to delivering care
              in our agreed set ways of working.
            </p>
            <p className="paragraph-1">
              Reliability is critical in our quest for success, we only make
              promises we can keep.
            </p>
            <p className="paragraph-1">
              Our honest and transparent approach makes us valuable; we are a
              trusted organization with transparency always at the forefront.
            </p>
          </div>
        </div>
        <div className="row u-margin-bottom-big">
          <div className="u-margin-top-big u-margin-bottom-medium">
            <h4 className="heading-quaternary">Why Choose Us?</h4>
          </div>
          <p className="paragraph-1">
            We pride ourselves on offering a high and wholesome quality of care,
            reliability, and responsibility to which we offer our service to
            vulnerable or challenging clients to make a positive difference in
            today's world of care
          </p>
          <div className="col-1-of-2">
            <div className="about-us__list-item">
              <ul>
                <li className="about-us__item">
                  Our outstanding staff recruitment program, our experienced HR
                  department ensures employees are trained and prepared for the
                  challenging tasks and obstacles that appeal to the specific
                  role.
                </li>
                <li className="about-us__item">
                  We value trust and professionalism. We ensure all staff
                  carries an Enhanced and up-to-date DBS check as well as
                  complete all significant certificates. Our trust policy and
                  company promise to our clients guarantees an advanced level of
                  care is given at all times.
                </li>
                <li className="about-us__item">
                  At a Better living place, we aim for the sky to meet standards
                  of living and follow key lines of inquiry as set out in the
                  CQC fundamental standards.
                </li>

                <li className="about-us__item">
                  Our focus surrounds enabling and encouraging our clients to
                  live independently (of course with a little push fromus) we
                  promote independence and social freedom.
                </li>
                <li className="about-us__item">
                  We are recognized employer; our team has several years of
                  experience within the care region to ensure everything is
                  always running smoothly and promptly.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="about-us__image-box">
              <img
                src="img/bpl-7.jpg"
                alt="bpl-7"
                className="about-us__image-2"
              />
            </div>
          </div>
        </div>
      </section>
      <SectionThree />
    </>
  );
};

export default AboutUs;
