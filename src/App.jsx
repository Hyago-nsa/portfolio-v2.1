import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import MainPage from "./components/mainPage";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => (
  <ReactFullpage
    //fullpage options
    sectionsColor={["rgb(255, 95, 69)", 'rgb(7, 152, 236)']}
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div class="slide" data-anchor="slide1">
              <MainPage />
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div class="slide" data-anchor="slide2">
              <Projects />
            </div>
          </div>
          <div className="section">
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
