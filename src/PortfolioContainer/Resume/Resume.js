import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

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
    { skill: "HTML/CSS", ratingPercentage: 85 },
    { skill: "UX/UI", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "RESTfulAPI", ratingPercentage: 70 },
    { skill: "SQL & PostgrSQL", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "TailwindCSS", ratingPercentage: 80 },
    { skill: "Sass", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Interview Schedular",
      gitlink: "https://github.com/nrajput-github/scheduler",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Implemented full-stack application that created fast Axios API interactions for querying the database that allow users to book and cancel interviews.",
      subHeading: "Tech Stack: React JS, Bootsrap.",
    },
    {
      title: "YelpLike ",
      gitlink: "https://github.com/christinetw/final_project",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A full-stack application designed to check restaurant ratings and reviews online.",
      subHeading:
        "Tech Stack: Ruby, Rails, Javascript, React, HTML/CSS, Bootstrap, Google Map API",
    },
    {
      title: "Quiz App",
      gitlink: "https://github.com/ghelle2h/quiz_app",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A full-stack application designed to check restaurant ratings and reviews online.",
      subHeading:
        "Tech Stack: Ruby, Rails, Javascript, React, HTML/CSS, Bootstrap, Google Map API",
    },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Lighthouse Labs Canada"}
        subHeading={"Web Development"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Jayoti Vidhyapeeth Women's University"}
        subHeading={"Masters of Business Administration"}
        fromDate={"2011"}
        toDate={"2013"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Contract"}
          subHeading={"JUNIOR FULL STACK DEVELOPER"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Developing a website that is based on processing Legal Documents
            (Agreements, Divorce, Child Custody, etc). The website involves
            prompting users to answer a series of questions and helps to fill
            out Ontario Court Forms as per their requirements.
          </span>
        </div>
        <br />
        <ResumeHeading
          heading={"Adecco"}
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
      </div>
    </div>,
    // for the space put br after every div or span
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
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={
            <a
              className="git-link"
              href={projectsDetails.gitlink}
              rel="opener noreferrer"
              target="_blank"
            >
              {projectsDetails.title}{" "}
            </a>
          }
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Art and Craft"
        description="In my spare time, I love to do art and crafting and some DIYs."
      />
      <ResumeHeading
        heading="Dancing & Music"
        description="I love dancing and listening soothing music. It keeps me relax and stree free."
      />
      <ResumeHeading
        heading="Photography"
        description="I love travel and loved to capture scenic view"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

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
    </div>
  );
};

export default Resume;
