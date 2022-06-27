import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import imgBack from "../../../src/images/email1.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sending email ....");
    emailjs
      .sendForm(
        "service_dhxqtl3",
        "template_jif7ac5",
        form.current,
        "uM6sRfXmSmt6xvEzG"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          console.log("sending pass ....");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
          console.log("sending fail ....");
        }
      );
  };
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://github.com/nrajput-github">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/navya-rajput-9627aa165">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://www.instagram.com/navyachauhan20/?hl=en">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://twitter.com/NavyaRajput20">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="user_name"
              onChange={handleName}
              value={name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="user_email"
              onChange={handleEmail}
              value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              onChange={handleMessage}
              value={message}
            />
            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
