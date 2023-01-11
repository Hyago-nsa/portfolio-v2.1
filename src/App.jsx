import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import MainPage from "./components/mainPage";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Projects2 from "./components/Portfolio2";

const App = () => (
  <ReactFullpage
    //fullpage options
    continuousVertical={"true"}
    sectionsColor={["#050505", "#050505", "#050505", "#050505"]}
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="container">
              <div className="inside-container">
                <MainPage />
                <div className="button-container">
                  <button
                    className="m-button"
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    About
                  </button>
                  <button
                    className="m-button"
                    onClick={() => fullpageApi.moveSectionUp()}
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="section">
            <div className="container">
              <div className="inside-container">
                <About />
              </div>
            </div>
          </div>
          <div class="section">
            <div className="slide" data-anchor="slide1">
              <div className="container">
                <div className="inside-container">
                  <Portfolio />
                </div>
              </div>
            </div>
            <div className="slide" data-anchor="slide2">
              <div className="container">
                <div className="inside-container">
                  <Projects2 />
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container">
              <div className="inside-container">
                <Contact />
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
