import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";
//import Projects from "../PortfolioContainer/Projects/Projects";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";

import React, { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import loaderService from "../Services/loader-service/loader-service";
import "./commonUtils";

/* TOTAL NUMBER OF SCREENS */
export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About Me",
    component: AboutMe,
  },
  { screen_name: "Resume", component: Resume },
  //{ screen_name: "Projects", component: Projects },
  { screen_name: "Projects", component: Testimonial },
  { screen_name: "Contact Me", component: ContactMe },
];

/* GET SCREEN INDEX */
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};

/* Loading Bar Component */
export const LoaderBar = () => {
  const loaderReference = useRef(null);
  const loadingBarOptions = {
    shadow: true,
    height: 4,
    ref: loaderReference,
    transitionTime: 1000,
    className: "loading-bar",
  };
  const invokeLoadingBar = () => {
    if (!loaderReference || !loaderReference.current) return;

    loaderReference.current.continuousStart(0, 800);
  };

  const completeLoadingBarProgress = () => {
    if (!loaderReference || !loaderReference.current) return;

    loaderReference.current.complete();
  };

  const loaderChangeHandler = (changeType) => {
    switch (changeType) {
      case "start":
        invokeLoadingBar();
        break;
      case "complete":
        completeLoadingBarProgress();
        break;
      default:
        break;
    }
  };

  let loaderChangeSubscription =
    loaderService.loaderChangeEmitter.subscribe(loaderChangeHandler);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      loaderChangeSubscription.unsubscribe();
    };
  }, [loaderChangeSubscription]);

  return (
    <div>
      <LoadingBar {...loadingBarOptions} />
    </div>
  );
};
