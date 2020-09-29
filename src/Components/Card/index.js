import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => (
  <div className="uk-grid-small uk-grid-match" uk-grid="true">
    <div>
      <div className="uk-card uk-card-secondary uk-card-hover uk-card-body">
        <h6 className="uk-card-title">{props.Nombre}</h6>
        <p>Cantidad: </p>
      </div>
      <div className="uk-card-footer ver-mas">
        <Link to="#" className="uk-button uk-button-text uk-light">
          Read more
        </Link>
      </div>
    </div>
  </div>
);

export default Card;
