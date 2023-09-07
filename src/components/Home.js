import React, { useEffect } from "react";
import Header from "./Header";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Home;
