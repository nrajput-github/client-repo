import React, { useEffect } from "react";
import ScreenHeading from "../../utillities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utillities/ScrollService";
import Animations from "../../utillities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Full Stack web Developer with background knowledge Javascript, HTML/CSS, Redux along with",
    highlights: {
      bullets: [
        "full stack wev debe",
        "Interactive Front-end as per design",
        "React and React Native",
        "Redux for state management",
        "Building Rest API",
      ],
      heading: "Here few highlights",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span> {value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                <div>{renderHighlight()}</div>
                <div className="about-me-options">
                  <button className="btn-primary-btn"
                  onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                  >Hire Me</button>
                  <a href="navya.pdf" download="Navya Rajput.pdf">
                    <button className="btn-highlighted-btn">Get Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
