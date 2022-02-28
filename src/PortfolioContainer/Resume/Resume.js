import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
// import shapebg from "../../../src/img/Testimonial/shape-bg.png";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
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
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Interview Schedular",
      gitlink: "https://github.com/nrajput-github/scheduler",
      duration: { fromDate: "2021", toDate: "2021" },
      description: "Tech Stack: React JS, Bootsrap.",
    },
    // subHeading: "Tech Stack: React JS, Bootsrap.",

    {
      title: "YelpLike ",
      gitlink: "https://github.com/christinetw/final_project",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Tech Stack: Ruby, Rails, Javascript, React, HTML/CSS, Bootstrap, Google Map API.",
      // subHeading:
      //   "Tech Stack: Ruby, Rails, Javascript, React, HTML/CSS, Bootstrap, Google Map API.",
    },
    {
      title: "Tweeter ",
      gitlink: "https://github.com/nrajput-github/tweeter",
      duration: { fromDate: "2021", toDate: "2021" },
      description: "Tech Stack: HTML, CSS, JS, jQuery and AJAX.",
      // subHeading: "Tech Stack: HTML, CSS, JS, jQuery and AJAX.",
    },
    {
      title: "QuizApp ",
      gitlink: "https://github.com/ghelle2h/quiz_app",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Tech Stack: EJS, Javascript, Ajax, Express, Jquery, HTML/CSS, Saas, BootStrap, and PostgreSQL.",
      //   "Tech Stack: EJS, Javascript, Ajax, Express, Jquery, HTML/CSS, Saas, BootStrap, and PostgreSQL.",
    },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div
      className="resume-screen-container education-container"
      key="education"
    >
      <span>
        <br />
        <span />
        <ResumeHeading
          heading={"Lighthouse Labs, Ottawa"}
          subHeading={"Full-Stack Web Development"}
          fromDate={"2021"}
          toDate={"2021"}
        />
      </span>
      <br />
      <span>
        <ResumeHeading
          heading={"Jayoti Vidhyapeeth Women's University, Jaipur"}
          subHeading={"Masters of Business Administration"}
          fromDate={"2011"}
          toDate={"2013"}
        />
      </span>

      {/* <ResumeHeading
        heading={"High School "}
        subHeading={"Command Secondary School Mbiri"}
        fromDate={"2007"}
        toDate={"2012"}
      /> */}
    </div>,

    /* WORK EXPERIENCE */
    <div
      className="resume-screen-container work-experience-container"
      key="work-experience"
    >
      <div className="experience-container">
        <ResumeHeading
          heading={"Freelancing"}
          subHeading={"FRONT END DEVELOPER"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Currently working as a front-end web developer and my role
            involves developing and testing the React.js frontend. The website
            involves sign-in and prompting users to answer a series of
            questions.On submission, the data is posted to a microservice
            running on a separate server that interacts with a third-party API
            and generates the pdf.
          </span>
        </div>

        <ResumeHeading
          heading={"Adecco Ottawa"}
          subHeading={"Recruitment Assistant"}
          fromDate={"2020"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Assisted senior recruiter in recruitment processes as search
            candidates through ATS and scheduled interviews with the candidates.
          </span>
        </div>
        {/* <div className="experience-container">
        <ResumeHeading
          heading={"Adecco Ottawa"}
          subHeading={"Recruitment Assistant"}
          fromDate={"2020"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Assisted senior recruiter in recruitment processes as search
            candidates through ATS and scheduled interviews with the candidates.
          </span>
        </div> */}
        {/* <div className="experience-description">
          <span className="resume-description-text">
            - The website involves sign-in and prompting users to answer a
            series of questions.
          </span>
          <br />
          <span className="resume-description-text">
            - On submission, the data is posted to a microservice running on a
            separate server that interacts with a third-party API and generates
            the pdf.
          </span>
          <br />
        </div> */}
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
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
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
      <br />
    </div>,

    /* PROJECTS */

    <div className="resume-screen-container projects-container" key="projects">
      <span></span>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          // heading={projectsDetails.title}
          heading={
            <a href={projectsDetails.gitlink}>{projectsDetails.title} </a>
          }
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div
      className="resume-screen-container interests-container"
      key="interests"
    >
      <ResumeHeading
        heading="Net Surfing"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 330;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
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

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
      {/* <div className="resume-footer-image">
        <img src={shapebg} alt="Photo not responding" />
      </div> */}
    </div>
  );
};

export default Resume;
