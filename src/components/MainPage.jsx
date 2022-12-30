import React, { Fragment } from "react";
import "./MainPage.css";

const mainPage = () => {
  return (
    <Fragment>
      <div className="text-container">
        <div className="main-text">
          <p>
            Helping companies build modern, high-quality
            <span className="digital-text"> digital products</span>.
          </p>
        </div>

        <div className="sub-text">
          A mix of Design, Front-end Development and professional skill that
          will make your product stand out.
        </div>
      </div>
    </Fragment>
  );
};

export default mainPage;
