import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AboutUs from "./components/AboutUs";
import PopupContactForm from "./components/common/PopupContactForm";
import ContactButton from "./components/ContactButton";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import MentalHealth from "./components/MentalHealth";
import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";
import TopHeader from "./components/TopHeader";

function App() {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(!openForm);
    console.log("clicked");
  };
  return (
    <>
      <TopHeader />
      <Navbar />
      <ToastContainer />
      <main className="app-main">
        <Routes>
          <Route path="/stories" element={<Stories />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <PopupContactForm openForm={openForm} handleOpenForm={handleOpenForm} />
      <ContactButton handleOpenForm={handleOpenForm} />
      <Footer />
    </>
  );
}

export default App;
