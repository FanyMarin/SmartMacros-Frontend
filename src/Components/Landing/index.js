import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <section className="main-landing">
        <div className="main-left">
          <h2>¡Smart Macros es tu mejor aliado para aprender a comer! </h2>
          <p>
            Calcula tus calorías y registra tu diario
            de alimentos de forma fácil y sencilla. 
          </p>
          <Link to="/signup">
            <button className="btn">Aprende más</button>
          </Link>
        </div>
        <div className="main-right">
          <img src="../aprende.svg" className="main-img" alt="Aprende" />
        </div>
      </section>
      <h2>
        Todo lo que necesitas para un regimen de alimentación saludable e
        inteligente
      </h2>
      <section className="landing-grid">
        <div className="column first">
          <h3>Aprende</h3>
          <img src="../aprende.svg" className="grid-img" alt="Aprende" />
          <p>
          Calcula tus necesidades calóricas y de macronutrientes

          </p>
        </div>
        <div className="column second">
          <h3>Disfruta</h3>
          <img src="../disfruta.svg" className="grid-img" alt="Disfruta" />
          <p>
          ¡Come lo que quieras! Siempre respetando tus objetivos nutricionales.
          </p>
        </div>
        <div className="column third">
          <h3>Logra tus metas</h3>
          <img
            src="../logra_metas.svg"
            className="grid-img"
            alt="Logra metas"
          />
          <p>
          Elige tu objetivo, perder peso, mantenerlo o ganar masa muscular.
          </p>
        </div>
        <div className="column last">
          <h3>Vive sin preocupaciones</h3>
          <img
            src="../no_worries.svg"
            className="grid-img"
            alt="Vive sin preocupaciones"
          />
          <p>
          Distribuye el porcentaje de calorías de tus comidas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
