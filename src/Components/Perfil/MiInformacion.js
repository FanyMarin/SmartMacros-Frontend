import React from "react";

const MiInformacion = ({
  nombre,
  sexo,
  nivel_de_actividad,
  objetivo,
  numero_de_comidas,
  tipo_de_dieta,
  edad,
  altura_cm,
  peso_kg,
}) => {
  return (
    <div>
      <table className="uk-table uk-table-striped">
        <tbody>
          <tr>
            <td className="uk-text-justify">NOMBRE:</td>
            <td className="uk-text-justify">{nombre}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">SEXO:</td>
            <td className="uk-text-justify">{sexo}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">NIVEL DE ACTIVIDAD:</td>
            <td className="uk-text-justify">{nivel_de_actividad}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">OBJETIVO:</td>
            <td className="uk-text-justify">{objetivo}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">CANTIDAD DE COMIDAS:</td>
            <td className="uk-text-justify">{numero_de_comidas}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">TIPO DE DIETA:</td>
            <td className="uk-text-justify">{tipo_de_dieta}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">EDAD:</td>
            <td className="uk-text-justify">{edad}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">ALTURA:</td>
            <td className="uk-text-justify">{altura_cm}</td>
          </tr>
          <tr>
            <td className="uk-text-justify">PESO:</td>
            <td className="uk-text-justify">{peso_kg}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MiInformacion;
