import React from "react";
import Typical from "react-typical";
import '../../../index.css';
import './Profile.css';
import '../../../App.css'
import ScrollService from "../../../utillities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.facebook.com/navya.chauhan20">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/navya-rajput-9627aa165">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/navyachauhan20/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://twitter.com/NavyaRajput20">
              <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'am <span className="highlighted-text">Navya</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Web developer 👩🏻‍💻",
                    1000,
                    "Ethusiastic Dev 🔴",
                    1000,
                    "Javascript Dev 💻",
                    1000,
                    "React/Native ⚛️📱",
                    1000,
                    "HTML/CSS Dev ",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack for building application with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn-primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>Hire Me</button>
            <a href="navya.pdf" download="Navya Rajput.pdf">
              <button className="btn-highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
