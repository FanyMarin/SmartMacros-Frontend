import React from "react";
import { Link } from "react-router-dom";
import cover from "../../assets/SmartMacrosLogo.mp4";

const LandingPage = () => {
  return (
    <div>
      <div className="uk-cover-container uk-hero">
        <video
          src={cover}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          uk-cover="true"
        ></video>

        <div className="uk-position-center uk-light">
          <h1>
            Find the <span className="uk-text-warning">ideal</span> dog.
          </h1>
          <p>
            Dog lovers rejoice! Waggy's helps you find an ideal dog to take
            home, <br />
            or find the perfect match for your dog.
          </p>
          <Link className="uk-button uk-button-primary" to="/signup">
            Join now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;