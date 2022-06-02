import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
// import { FaArrowCircleDown } from "react-icons/fa";
import Animations from "../../utilities/Animations";
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
      "A result-driven certified Full-Stack Web Developer with a management background. Graduated from Lighthouse Labs and completed a Full-Stack Web Development diploma. Having experience in customer service and management, I found myself passionate and focused on web development and eager to collaborate with my coding and problems solving skills.",
    highlights: {
      bullets: [
        "Full Stack Web Developer",
        "Interactive Front-end as per design",
        "Proficient in programming languages, modern front-end, back-end plus testing frameworks",
        "Core is React.Js",
        "Redux for state management",
        "Building Rest API",
        "Experienced in Git Version control",
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
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                <div>{renderHighlight()}</div>
                <div className="about-me-options">
                  <button
                    className="btn-primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                  >
                    Hire Me
                  </button>
                  <a href="navya.pdf" target="_blank" view="Navya Rajput.pdf">
                    <button className="btn-highlighted-btn">View Resume</button>
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
