import React from "react";
import "../stylesheets/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="testimonio-container">
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../profiles/${props.especie}-${props.imagen}.jpg`)}
          alt={(`Foto de ${props.especie}-${props.imagen}`)}
        ></img>
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            {props.especie} <strong>{props.nombre}</strong>{" "}
          </p>
          <p className="titulo-testimonio">
            <strong>{props.titulo}</strong>
          </p>
          <p className="contenido-testimonio">
            {props.contenido.replace(
              /react/gi,'React'
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonio;
