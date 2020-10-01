import React from "react";
// import { Link } from "react-router-dom";

const Resultados = () => {
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
            <td className="uk-text-justify">Metabolismo basal: {} kcal</td>
            <td className="uk-text-justify">Carbohidratos: {} gr/día</td>
            <td className="uk-text-justify">Carbohidratos: {} gr</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Calorías de mantenimiento: {} kcal</td>
            <td className="uk-text-justify">Proteínas: {} gr/día</td>
            <td className="uk-text-justify">Proteínas: {} gr</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Calorías por objetivo: {} kcal</td>
            <td className="uk-text-justify">Grasas: {} gr/día</td>
            <td className="uk-text-justify">Grasas: {} gr</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Resultados;
