import React from "react";

const ContactButton = ({ handleOpenForm }) => {
  return (
    <span className="contact-button" onClick={() => handleOpenForm()}>
      <i className="fa-solid fa-message contact-button__icon"></i>
    </span>
  );
};

export default ContactButton;
