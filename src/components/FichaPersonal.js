import React, { useEffect, useState } from "react";

export default function FichaPersonal({ persona: personaProp }) {
  const [persona, setPersona] = useState(personaProp || null);
  const [cargando, setCargando] = useState(!personaProp);

  useEffect(() => {
    if (personaProp) return; // Si hay prop, no hace fetch

    const obtenerPersona = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        setPersona(data.results[0]);
      } catch (error) {
        console.error("Error al cargar la ficha personal", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerPersona();
  }, [personaProp]);

  if (cargando) {
    return <p>Cargando ficha personal...</p>;
  }

  if (!persona) {
    return <p>No se pudo cargar la ficha personal.</p>;
  }

  return (
    <div className="App">
      <h2>Ficha Personal</h2>
      <div className="card">
        <img src={persona.picture.large} alt="Foto de perfil" />
        <h3>{`${persona.name.first} ${persona.name.last}`}</h3>
        <p><strong>Género:</strong> {persona.gender}</p>
        <p><strong>País:</strong> {persona.location.country}</p>
        <p><strong>Email:</strong> {persona.email}</p>
        <p><strong>Teléfono:</strong> {persona.phone}</p>
      </div>
    </div>
  );
}
