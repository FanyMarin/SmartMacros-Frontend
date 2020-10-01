import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  Nombre,
  Porcion,
  Unidad_de_medida,
  Grasas,
  Carbohidratos,
  Proteinas,
  Calorias_kcal,
}) => (
  <div >
    <div>
      <div className="uk-card uk-card-hover uk-card-body card-container">
        <h6 className="card-title">{Nombre}</h6>
        <p>Informacion nutricional:</p>
        <ul className="card-text uk-list uk-text-left uk-list-collapse">
          <li>Contenido calorico: {Calorias_kcal} kcal</li>
          <li>Carbohidratos: {Carbohidratos} gr</li>
          <li>Proteinas: {Proteinas} gr</li>
          <li>Grasas: {Grasas} gr</li>
        </ul>
        <p className="card-text uk-text-right">
          Por cada: {Porcion} {Unidad_de_medida}
        </p>
        <div className="uk-card-footer ver-mas">
        <Link to="#" className="uk-button-text uk-light">
          Detalles
        </Link>
      </div>
      </div>
 
    </div>
  </div>
);

export default Card;
