import React from "react";

const tablaDetalles = ({
  Nombre,
  Descripcion,
  Marca,
  Porcion,
  Unidad_de_medida,
  Grasas,
  Carbohidratos,
  Proteinas,
  Calorias_kcal
}) => (
    <div>
      <table className="uk-table uk-table-striped">
        <tbody>
          <tr>
            <td className="uk-text-justify">Nombre:</td>
            <td className="uk-text-justify">{Nombre}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Descripción:</td>
            <td className="uk-text-justify">{Descripcion}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Marca:</td>
            <td className="uk-text-justify">{Marca}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Porción:</td>
            <td className="uk-text-justify">{Porcion}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Unidad de medida:</td>
            <td className="uk-text-justify">{Unidad_de_medida}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Grasas:</td>
            <td className="uk-text-justify">{Grasas}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Carbohidratos:</td>
            <td className="uk-text-justify">{Carbohidratos}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Proteínas:</td>
            <td className="uk-text-justify">{Proteinas}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">Calorías (kcal):</td>
            <td className="uk-text-justify">{Calorias_kcal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

export default tablaDetalles;
