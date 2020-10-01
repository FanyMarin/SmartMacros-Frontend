import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <section className="main-landing">
        <div className="main-left">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          {/* <button>Aprende más</button> */}
        </div>
        <div className="main-right">
          <img src="../aprende.svg"
               className="main-img"
               alt="Aprende"
          />
        </div>

      </section>
      <h2>Todo lo que necesitas para un regimen de alimentación saludable e inteligente</h2>
      <section className="landing-grid">
        <div className="column first">
          <h3>Aprende</h3>
          <img src="../aprende.svg"
               className="grid-img"
               alt="Aprende"
          />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
        </div>
        <div className="column second">
          <h3>Disfruta</h3>
          <img src="../disfruta.svg"
               className="grid-img"
               alt="Disfruta"
          />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
        </div>
        <div className="column third">
          <h3>Logra tus metas</h3>
          <img src="../logra_metas.svg"
               className="grid-img"
               alt="Logra metas"
          />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
        </div>
        <div className="column last">
          <h3>Vive sin preocupaciones</h3>
          <img src="../no_worries.svg"
               className="grid-img"
               alt="Vive sin preocupaciones"
          />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;