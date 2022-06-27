import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import Img1 from "../../../src/assets/Projects/project1.png";
import Img2 from "../../../src/assets/Projects/project2.png";
import Img3 from "../../../src/assets/Projects/project3.png";
import Img4 from "../../../src/assets/Projects/project4.jpeg";

const Projects = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
      <>
        <ScreenHeading title={"Projects"} subHeading={"My Works"} />

        <section className="project-section" id={props.id || ""}>
          <div className="container">
            <div className="row">
              <OwlCarousel
                className="owl-carousel"
                id="project-carousel"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      {/* testi-comment will remove later  */}

                      <img src={Img1} alt=""></img>

                      <div className="client-info">
                        <h5>LSR Project</h5>
                        <a
                          href="https://github.com/nrajput-github"
                          className="btn primary-btn"
                          target="_blank"
                        >
                          Github
                        </a>
                        <a
                          href="http://stage.pixeltechlab.co.in/"
                          className="btn primary-btn"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                      {/* </article> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <img src={Img3} alt=""></img>

                      <div className="client-info">
                        <h5>Yelp Like</h5>
                        <a
                          href="https://github.com/nrajput-github/YelpLike"
                          className="btn primary-btn"
                          target="_blank"
                        >
                          Github
                        </a>
                        <a
                          href="http://stage.pixeltechlab.co.in/"
                          className="btn primary-btn"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <img src={Img2} alt=""></img>

                      <div className="client-info">
                        <h5>Scheduler</h5>
                        <a
                          href="https://github.com/nrajput-github/scheduler"
                          className="btn primary-btn"
                          target="_blank"
                        >
                          Github
                        </a>
                        <a
                          href="http://stage.pixeltechlab.co.in/"
                          className="btn primary-btn"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                      {/* </article> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <img src={Img4} alt=""></img>

                      <div className="client-info">
                        <h5>Quiz App</h5>
                        <a
                          href="https://github.com/ghelle2h/quiz_app"
                          className="btn primary-btn"
                          target="_blank"
                        >
                          Github
                        </a>
                        <a
                          href="http://stage.pixeltechlab.co.in/"
                          className="btn primary-btn"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                      {/* </article> */}
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
      </>
  
  );
};
export default Projects;
