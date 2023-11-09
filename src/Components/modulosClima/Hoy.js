import React, { useEffect, useState } from "react";
import codigoClima from "./codigoClima.json";

function Hoy({ location }) {
  const [temperatura, setTemperatura] = useState(null);
  const [climaCode, setClimaCode] = useState(null);
  const [error, setError] = useState(null);

  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("es-AR", options);
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,weathercode&hourly=temperature_2m,visibility,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FSao_Paulo`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw Error("Error en la solicitud a la API");
          }
          return response.json();
        })
        .then((data) => {
          const currentTemperature = data.current.temperature_2m;
          const weatherCode = data.current.weathercode;

          setTemperatura(currentTemperature);
          setClimaCode(weatherCode);
        })
        .catch((error) => {
          setError("Error al obtener los datos del clima");
        });
    }
  }, [location]);

  return (
    <>
      <div>
        <h2>{location.name}</h2>
        <p style={{ fontSize: "1rem", marginBottom: "8px" }}> {getCurrentDate()}</p>
        <div className="temperature" style={{ fontSize: "2rem" }}>
          {temperatura !== null ? `${temperatura}°C` : "Cargando..."}
        </div>
        <div className="description">
          {error ? <p>{error}</p> : null}
          {climaCode !== null && (
            <div>
              <img src={codigoClima[climaCode].icons} alt="Ícono de Clima" />
              <p>{codigoClima[climaCode].name}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Hoy;



