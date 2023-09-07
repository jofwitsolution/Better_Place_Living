import React, { useEffect } from "react";
import Meta from "./common/Meta";
import SectionThree from "./SectionThree";
import TheCard from "./common/TheCard";

const OurServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Meta title="Our Services | BPL" />
      <section className="our-services">
        <div className="our-services__heading ">
          <div className=" u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondary-big">Our Services</h2>
          </div>
        </div>
        <div className="our-services__row">
          <div className="the-card__mr the-card__container">
            <TheCard
              title={"Supported Accommodation"}
              text={`We provide a simple comfortable living space in which our clients
                can feel independent to do day-to-day tasks with support from our
                team. Our accommodationare designed to imitate living in modern
                society to make our clients feel involved in local communities (of
                course with a helping hand from us).`}
              imageClass={"the-card__img-1"}
            />
          </div>
          <div className="our-services__text-box">
            <p className="paragraph">
              We provide a simple comfortable living space in which our clients
              can feel independent to do day-to-day tasks with support from our
              team. Our accommodationare designed to imitate living in modern
              society to make our clients feel involved in local communities (of
              course with a helping hand from us).
            </p>
          </div>
          <div className="the-card__mr the-card__container">
            <TheCard
              title={"Low Mental Health"}
              text={`We offer a range of services for people living with Low Mental Health. 
              We are also to provide Community Engagement & Inclusion Services, which provide 
              people with purposeful and meaningful activity to support their recovery journey.`}
              imageClass={"the-card__img-5"}
            />
          </div>
          <div className="our-services__text-box">
            <p className="paragraph">
              We offer a range of services for people living with Low Mental
              Health. We are also to provide Community Engagement & Inclusion
              Services, which provide people with purposeful and meaningful
              activity to support their recovery journey.
            </p>
          </div>
        </div>

        <div className="our-services__row">
          <div className="the-card__mr the-card__container">
            <TheCard
              title={"Community and Development Services"}
              text={`We liaise with different communities to ensure a productive and
                functional lifestyle. We recognize that some people, some groups,
                and some communities are excluded and oppressed by the way society
                and structures are organized. Our community development seeks to
                challenge this and ensure fairness for all citizens making them
                feel a part of today's modern world. Our community and development
                services include helping you contact agencies who can offer
                specialist advice, such as the police, charities, and your council
                we will also work with partner organizations to offer you full
                support and we'll work with you to receive feedback and improve
                our services.`}
              imageClass={"the-card__img-3"}
            />
          </div>
          <div className="our-services__text-box">
            <p className="paragraph">
              We liaise with different communities to ensure a productive and
              functional lifestyle. We recognize that some people, some groups,
              and some communities are excluded and oppressed by the way society
              and structures are organized. Our community development seeks to
              challenge this and ensure fairness for all citizens making them
              feel a part of today's modern world. Our community and development
              services include helping you contact agencies who can offer
              specialist advice, such as the police, charities, and your council
              we will also work with partner organizations to offer you full
              support and we'll work with you to receive feedback and improve
              our services.
            </p>
          </div>
          <div className="the-card__container">
            <TheCard
              title={"Our housing guarantees"}
              text={`We will guarantee your home meets all fire safety standards and
                contains a functional working smoke alarm. We'll make sure your
                gas and electric safety checks are carried out in the specific
                timeframe- it's the client's responsibility to allow us access to
                carry out these checks. We'll make sure your home is secure at all
                times and all external doors fully meet the relevant British
                Standards as usual.`}
              imageClass={"the-card__img-4"}
            />
          </div>
          <div className="our-services__text-box">
            <p className="paragraph">
              We will guarantee your home meets all fire safety standards and
              contains a functional working smoke alarm. We'll make sure your
              gas and electric safety checks are carried out in the specific
              timeframe- it's the client's responsibility to allow us access to
              carry out these checks. We'll make sure your home is secure at all
              times and all external doors fully meet the relevant British
              Standards as usual.
            </p>
          </div>
        </div>
        <div className="our-services__row">
          <div className="the-card__container">
            <TheCard
              title={"Our Housing"}
              text={`We offer a home-to-home service. Our homes are safe, warm, and
                welcoming for young adults and older citizens alike. We thrive on
                creating happy homes placing emphasis on the importance of
                creating a secure base, where our clients can feel safe and able
                to have the freedom to cater to themselves independently to excel
                in their social and functional skills for an overall better
                lifestyle.`}
              imageClass={"the-card__img-2"}
            />
          </div>
          <div className="our-services__text-box">
            <p className="paragraph">
              We offer a home-to-home service. Our homes are safe, warm, and
              welcoming for young adults and older citizens alike. We thrive on
              creating happy homes placing emphasis on the importance of
              creating a secure base, where our clients can feel safe and able
              to have the freedom to cater to themselves independently to excel
              in their social and functional skills for an overall better
              lifestyle.
            </p>
          </div>
        </div>
      </section>
      <SectionThree />
    </>
  );
};

export default OurServices;
