import React from "react";
import { Link } from "react-router-dom";
import welcomeBg from "../assets/Welcom_bg.mp4";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src={welcomeBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="content-box">
        <h1 className="welcome-title">
          Welcome to <span className="Testline">Testline</span>
        </h1>
        <p className="welcome-text">Get ready to test your knowledge!</p>

        {/* Glowing Start Quiz Button */}
        <div className="button-container">
          <div className="button-wrapper">
            <div className="button-glow"></div>
            <Link to="/quiz">
              <button className="start-button">Start Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
