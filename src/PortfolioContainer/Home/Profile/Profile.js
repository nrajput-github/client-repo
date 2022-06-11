import React from "react";
import ScrollService from ".././../../utilities/ScrollService";
import "./Profile.css";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://github.com/nrajput-github"
                rel="opener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/navya-rajput-9627aa165"
                rel="opener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://www.instagram.com/navyachauhan20/?hl=en"
                rel="opener noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a
                href="https://twitter.com/NavyaRajput20"
                rel="opener noreferrer"
                target="_blank"
              >
                <i className="fa fas fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Navya</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full-Stack Developer",
                    ,
                    7000,
                    "Experience in Backend & Frontend ",
                    7000,
                    "Javascript Dev ",
                    7000,
                    "React.Js Dev",
                    7000,
                    "Node.js/Express.js ",
                    7000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn-primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="navya.pdf" target="_blank" view="Navya Rajput.pdf">
              <button className="btn-highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
