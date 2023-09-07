import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Meta from "./common/Meta";

const MentalHealth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Meta title="Mental Health | BPL" />
      <section className="mental-h__hero-bg">
        <div className="mental-h__heading">
          <h1>
            We offer comprehensive range of care and support services for people
            with Low Mental Health needs.
          </h1>
        </div>
      </section>
    </>
  );
};

export default MentalHealth;
