import React from "react";
import { Link } from "react-router-dom";

const tablaAlimentos = ({
  Nombre,
  Porcion,
  Unidad_de_medida,
  Grasas,
  Carbohidratos,
  Proteinas,
  Calorias_kcal,
}) => (
  <div className="uk-overflow-auto">
    <table className="uk-table uk-table-middle uk-table-divider">
      <thead>
        <tr>
          <th className="uk-table-shrink"></th>
          <th className="uk-width-small"></th>
          <th className="uk-table-expand"></th>
          <th className="uk-table-expand"></th>
          <th className="uk-table-shrink uk-text-nowrap"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              className="uk-preserve-width uk-border-circle"
              src="../comida.svg"
              width="100"
              alt=""
            />
          </td>
          <td className="uk-table-link">{Nombre}</td>
          <td className="uk-text-truncate">
            <ul className="uk-list uk-list-collapse">
              <li className="uk-text-justify">
                Carbohidratos: {Carbohidratos} gr
              </li>
              <li className="uk-text-justify">Proteinas: {Proteinas} gr</li>
              <li className="uk-text-justify">Grasas: {Grasas} gr</li>
              <li className="uk-text-justify">Calorias {Calorias_kcal} kcal</li>
            </ul>
          </td>
          <td className="uk-text-nowrap uk-text-justify">
            Cantidad: {Porcion} {Unidad_de_medida}
          </td>
          <td>
            <Link to="">
              <button className="btn">Ver</button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
    <hr></hr>
  </div>
);

export default tablaAlimentos;
