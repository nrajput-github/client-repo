import React, { useState } from "react";
import ScreenHeading from "../../utillities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utillities/ScrollService";
import Animations from "../../utillities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectBulletIndex, setSelectBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  const programmingSkillsDetails = [
    { skill: "Javascript", ratingPercentage: 60 },
    { skill: "React", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 60 },
    { skill: "CSS", ratingPercentage: 60 },
    { skill: "Saas", ratingPercentage: 60 },
    { skill: "Node.js", ratingPercentage: 60 },
    { skill: "Redux", ratingPercentage: 60 },
    { skill: "Bootstrap", ratingPercentage: 60 },
    { skill: "Express.js", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: 2021, toDate: 2021 },
      description:
        "A personal portfolio website which shows my all professional details, projects, skills and resume.",
      subHeading: "Technology used: Javascript, react.js, bootstrap.",
    },
    {
      title: "YelpLike",
      duration: { fromDate: 2021, toDate: 2021 },
      description: "Restaurant Reviews app.",
      subHeading:
        "Technology used: Ruby, Rails, Javascript, React, CSS and Bootstrap.",
    },
    {
      title: "TinyApp",
      duration: { fromDate: 2021, toDate: 2021 },
      description:
        "A full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly)",
      subHeading: "Technology used: HTML, CSS, JS, jQuery and AJAX.",
    },
    {
      title: "Tweeter",
      duration: { fromDate: 2021, toDate: 2021 },
      description: "A single page app where users can tweet by their name.",
      subHeading: "Technology used: Javascript, react.js, bootstrap.",
    },
    {
      title: "Scheduler",
      duration: { fromDate: 2021, toDate: 2021 },
      description:
        "A single page application that allows users to book and cancel interviews.",
      subHeading:
        "Technology used: React, Axios, Classnames, Normalize, Storybook, Babel",
    },
    {
      title: "QuizApp",
      duration: { fromDate: 2021, toDate: 2021 },
      description:
        "A single page app where users can create quizzes, users can make their quiz unlisted (make them private and not available on the home page, but if someone knows the quiz URL they can visit and take the quiz)",
      subHeading: "Technology used: Javascript, HTML, CSS and bootstrap.",
    },
    ];
   
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Diploma in Full-Stack-Web-Development"}
        subHeading={"Lighthouse Labs,Ottawa, ON"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Masters in Business Administration"}
        subHeading={"Jayoti Vidhyapeeth Women's University, Jaipur, India"}
        fromDate={"2010"}
        toDate={"2012"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Freelancing, Ottawa, ON"}
        subHeading={"Freelancer"}
        fromDate={"2021"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as a freelancer on a law firms's project.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Developing website with react.js as frontend and java spring-boot,
          MySQL as backend.
        </span>
        <br />
        <span className="resume-description-text">
          - My role involves developing and testing the react frontend.
        </span>
        <br />
        <span className="resume-description-text">
          - Experience using Jira, git, and confluence.
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Crafting"
          description="Apart from it I love to do crafting like painting."
        />
        <ResumeHeading
          heading="Music"
          description="Listening to soothing music."
        />
        <ResumeHeading
          heading="Cooking"
          description="Love to cook new dishes."
        />
      </div>
    </div>,
  ];
  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
