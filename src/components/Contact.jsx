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
          <li>
            <h1>Linkedin</h1>
          </li>
          <li>
            <h1>Github</h1>
          </li>
        </div>
      </div>
      <div className="contact-form">
        <div className="box-long">
          <textarea
            id="message"
            placeholder="Hi, i think we need a Front-end Developer for our team at Company X. How soon can you hop on to discuss this?"
            rows="7"
            className=""
            type="text"
          ></textarea>
        </div>
        <div className="box-small-blue">
          <input
            id="name"
            placeholder="Name"
            type="text"
            autoComplete="off"
          ></input>
          <input
            id="email"
            placeholder="E-mail"
            type="text"
            autoComplete="off"
          ></input>
        </div>
        <div className="box-small-purple">
          <button className="" type="text">
            <svg
            class="bow-arrow"
              width="72"
              height="30"
              viewBox="0 0 72 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="bow-arrow"
                fill="none"
                stroke-width="2"
                stroke-miterlimit="0"
                d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
