import React from "react";
import "./Contact.css";
import { useRef } from 'react';
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h4wbm9d",
        "template_y0qafaa",
        form.current,
        "7CuPXS4xj2MgKMMB1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact-container">
      <div className="contact-info">
        <div className="contact-info-text">
          <p>
            <span className="digital-text">Available</span> for select freelance
            opportunities
          </p>
        </div>
        <div className="contact-info-subtext">
          <li>
            Have an exciting <span className="digital-text">project</span> you
            need help with?
          </li>
          <li>Send me an email or contact me via instant message!</li>
        </div>
        <div className="contact-info-socialmedia">
          <p>
            <a href="mailto:hyago.eurico.nsa@gmail.com?">
              hyago.eurico.nsa@gmail.com
            </a>
          </p>
          <li>
            <h1>
              <a href="https://www.linkedin.com/in/hyago-eurico-421654207/">
                Linkedin
              </a>
            </h1>
          </li>
          <li>
            <h1>
              <a href="https://github.com/Hyago-nsa">Github</a>
            </h1>
          </li>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <div className="box-long">
          <textarea
            id="message"
            name="message"
            placeholder="Hi, i think we need a Front-end Developer for our team at Company X. How soon can you hop on to discuss this?"
            rows="7"
            type="text"
          ></textarea>
        </div>
        <div className="box-small-blue">
          <input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            autoComplete="off"
            required
          ></input>
          <input
            id="email"
            name="email"
            placeholder="E-mail"
            type="email"
            autoComplete="off"
            required
          ></input>
        </div>
        <div className="box-small-purple">
          <button type="submit">
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
      </form>
    </section>
  );
};

export default Contact;
