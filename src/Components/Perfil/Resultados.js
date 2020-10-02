import React from "react";
// import { Link } from "react-router-dom";

const Resultados = ({
  Metabolismo_basal,
  Calorias_de_mantenimiento,
  Calorias_por_objetivo,
  Carbohidratos,
  Proteinas,
  Grasas,
  Carbohidratos_por_comida,
  Proteinas_por_comida,
  Grasas_por_comida,
}) => {
  return (
    <div className="uk-padding-remove-bottom">
      <table className="uk-table uk-table-striped uk-padding-remove-top">
        <thead>
          <tr>
            <th className="uk-text-center">Resultados</th>
            <th className="uk-text-center">Macronutrientes por objetivo</th>
            <th className="uk-text-center">Macronutrientes por comida</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="uk-text-justify">Metabolismo basal: {Metabolismo_basal} kcal</td>
            <td className="uk-text-justify">Carbohidratos: {Carbohidratos} gr/día</td>
            <td className="uk-text-justify">Carbohidratos: {Carbohidratos_por_comida} gr</td>
          </tr>
          <tr>
            <td className="uk-text-justify">
              Calorías de mantenimiento: {Calorias_de_mantenimiento} kcal
            </td>
            <td className="uk-text-justify">Proteínas: {Proteinas} gr/día</td>
            <td className="uk-text-justify">Proteínas: {Proteinas_por_comida} gr</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Calorías por objetivo: {Calorias_por_objetivo} kcal</td>
            <td className="uk-text-justify">Grasas: {Grasas} gr/día</td>
            <td className="uk-text-justify">Grasas: {Grasas_por_comida} gr</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Resultados;
