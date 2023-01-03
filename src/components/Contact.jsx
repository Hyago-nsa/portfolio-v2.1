import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-info">
        <div className="contact-info-text">
          <p>Available for select freelance opportunities</p>
        </div>
        <div className="contact-info-subtext">
          <li>Have an exciting project you need help with?</li>
          <li>Send me an email or contact me via instant message!</li>
        </div>
        <div className="contact-info-socialmedia">
          <p>hyago.eurico.nsa@gmail.com</p>
          <li>Linkedin</li>
          <li>Github</li>
        </div>
      </div>
      <div className="contact-form">
        <div className="box-long"></div>
        <div className="box-small-blue"></div>
        <div className="box-small-purple"></div>
      </div>
    </section>
  );
};

export default Contact;
