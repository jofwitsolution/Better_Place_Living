import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import emailjs, { init } from "@emailjs/browser";

const ContactForm = () => {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;

  init(publicKey);

  const formRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const schema = {
    name: Joi.string().required().label("Full name"),
    email: Joi.string().required().email().label("Email"),
    subject: Joi.string().required().label("Subject"),
    message: Joi.string().required().label("Message"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");

    console.log("submitted");

    const obj = {
      name,
      email,
      subject,
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
          console.log(result.text);
        },
        (error) => {
          toast("Message not successful", { className: "submit-feedback" });
          console.log(error.text);
        }
      );
    }
  };

  return (
    <form
      className="page-contact-us__form"
      onSubmit={(e) => handleSubmit(e)}
      ref={formRef}
    >
      <div className="page-contact-us__form-row">
        <label htmlFor="name">
          Full name <span>*</span>
        </label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="page-contact-us__form-row">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="page-contact-us__form-row">
        <label htmlFor="subject">
          Subject <span>*</span>
        </label>
        <input
          type="text"
          value={subject}
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="page-contact-us__form-row">
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea
          rows={5}
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="page-contact-us__form-row">
        <p>{errorMessage}</p>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
