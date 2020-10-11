import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <section className="main-landing">
        <div className="main-left">
          <h2>¡Smart Macros es tu mejor aliado para aprender a comer! </h2>
          <p>
            SmartMacros es una base de datos que te permite obtener 
            la información nutricional de tus alimentos favoritos de forma fácil y sencilla. 
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
        Todo lo que necesitas para un régimen de alimentación saludable e
        inteligente
      </h2>
      <section className="landing-grid">
        <div className="column first">
          <h3>Aprende</h3>
          <img src="../aprende.svg" className="grid-img" alt="Aprende" />
          <p>
          ¡Encuentra la información especifica que requieras en un solo lugar!

          </p>
        </div>
        <div className="column second">
          <h3>Crea</h3>
          <img src="../disfruta.svg" className="grid-img" alt="Disfruta" />
          <p>
          ¿No encuentras lo que buscas? ¡Registra tus propios alimentos!
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
          Así es mucho más fácil llevar un régimen alimenticio inteligente
          </p>
        </div>
        <div className="column last">
          <h3>Aporta</h3>
          <img
            src="../no_worries.svg"
            className="grid-img"
            alt="Vive sin preocupaciones"
          />
          <p>
          ¿Las especificaciones de algun alimento no te convencen? Ayuda a la comunidad actualizandolo
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
