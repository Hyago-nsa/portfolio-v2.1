import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import MainPage from "./components/mainPage";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => (
  <ReactFullpage
    //fullpage options
    continuousVertical={"true"}
    sectionsColor={["#050505", "#050505"]}
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div class="slide" data-anchor="slide1">
              <div className="container">
                <div>C</div>
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
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide" data-anchor="slide2">
              <div className="container">
                <Projects />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <Contact />
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
