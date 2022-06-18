import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import "./Home.css";

function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
      <div className="icon">
        <a
          href="https://www.facebook.com/navya.chauhan20/"
          rel="opener noreferrer"
          target="_blank"
          className="facebook"
        >
          <i className="fa fa-facebook-f"></i> Facebook{" "}
        </a>
        <a
          href="https://www.instagram.com/navyachauhan20/?hl=en"
          rel="opener noreferrer"
          target="_blank"
          className="instagram"
        >
          <i className="fa fa-instagram"></i> Instagram{" "}
        </a>

        <a
          href="https://twitter.com/NavyaRajput20"
          rel="opener noreferrer"
          target="_blank"
          className="twitter"
        >
          {" "}
          <i className="fa fa-twitter"></i> twitter{" "}
        </a>
      </div>
    </div>
  );
}

export default Home;
