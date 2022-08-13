import React from "react";
import Meta from "./common/Meta";
import ContactForm from "./common/ContactForm";

const ContactUs = () => {
  return (
    <section className="page-contact-us">
      <Meta title={"Contact us | Didomi Company Limited"} />{" "}
      <div className="page-contact-us__heading ">
        <div className=" u-center-text u-margin-bottom-medium">
          <h2 className="heading-secondary-big">CONTACT US</h2>
        </div>
      </div>
      <div className="page-contact-us__header">
        <h2 className="page-contact-us__header-text">For all enquiries</h2>
      </div>
      <div className="page-contact-us__header-border"></div>
      <div className="page-contact-us__container">
        <div className="page-contact-us__row">
          <div className="page-contact-us__form-info">
            <h3 className="u-margin-bottom-small">Get in touch</h3>
            <p className="paragraph u-margin-bottom-medium">
              Leave your info in the form below and we will get back to you. It
              will be a step in the right direction.
            </p>
            <div className="page-contact-us__form-container">
              <ContactForm />
            </div>
          </div>
          <div className="page-contact-us__location-info">
            <h3 className="u-margin-bottom-small">Location</h3>
            <h4>Better Place Living Ltd</h4>
            <p className="paragraph u-margin-bottom-medium">
              1 Slate Lane, Nuneaton, <br />
              CV10 9FL United Kingdom. <br />
            </p>
            <h4>Contact:</h4>
            <p className="paragraph u-margin-bottom-medium">
              <a href="tel:+440758-146-7406">0758 146 7406</a>
              <br />
              <a href="tel:+440782-888-7031">0782 888 7031</a>
              <br />
              <a href="mailto: info@betterplaceliving.co.uk">
                info@betterplaceliving.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="map-background">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="BPL office map"
              width="1080"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=1%20Slate%20Lane,%20Nuneaton,%20CV10%209FL%20United%20Kingdom.&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
