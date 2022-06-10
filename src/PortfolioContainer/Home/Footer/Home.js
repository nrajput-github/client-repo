import React from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Footer from "./Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
      {/* <div className="icon">
        <a href="https://web.facebook.com/choc.prince.1" className="facebook">
          <i className="fa fa-facebook-f"></i> Facebook{" "}
        </a>
        <a
          href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA"
          className="youtube"
        >
          {" "}
          <i className="fa fa-youtube"></i>youtube
        </a>
        <a href="#" className="twitter">
          {" "}
          <i className="fa fa-twitter"></i> twitter{" "}
        </a>
      </div> */}
    </div>
  );
}
