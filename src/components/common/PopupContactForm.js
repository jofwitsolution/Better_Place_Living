import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import emailjs, { init } from "@emailjs/browser";

const PopupContactForm = ({ openForm, handleOpenForm }) => {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;

  init(publicKey);

  const formRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const schema = {
    name: Joi.string().required().label("Full name"),
    email: Joi.string().required().email().label("Email"),
    message: Joi.string().required().label("Message"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");

    console.log("submitted");

    const obj = {
      name,
      email,
      message,
    };

    // console.log(formRef.current);

    const { error } = Joi.validate(obj, schema);

    if (error) {
      setErrorMessage(error.details[0].message);
    } else {
      // (serviceID, templateID, templateParams, publicKey)
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
        (result) => {
          toast("Message sent successfully", { className: "submit-feedback" });
          handleOpenForm(); // close form
          console.log(result.text);
        },
        (error) => {
          toast("Message not successful", { className: "submit-feedback" });
          handleOpenForm(); // close form
          console.log(error.text);
        }
      );
    }
  };

  const showForm = openForm ? "show-form" : null;

  return (
    <div className={`popup ${showForm}`}>
      <div className="contact-form__container">
        <i
          className="fa-solid fa-xmark contact-form__container-close__icon"
          onClick={() => handleOpenForm()}
        ></i>
        <h4 className="form-heading">Contact us</h4>
        <form
          className="contact-form"
          onSubmit={(e) => handleSubmit(e)}
          ref={formRef}
        >
          <div className="contact-form__row">
            <label htmlFor="name">Full name:</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contact-form__row">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact-form__row">
            <label htmlFor="message">Message:</label>
            <textarea
              rows={5}
              placeholder="message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="contact-form__row">
            <p>{errorMessage}</p>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupContactForm;
