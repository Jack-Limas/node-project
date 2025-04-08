import React from "react";

export default function FechaHora() {
  const fechaActual = new Date();
  const fecha = fechaActual.toLocaleDateString();
  const hora = fechaActual.toLocaleTimeString();

  return (
    <div className="App">
      <h2>Fecha y Hora Actual</h2>
      <p>Fecha: {fecha}</p>
      <p>Hora: {hora}</p>
    </div>
  );
}
