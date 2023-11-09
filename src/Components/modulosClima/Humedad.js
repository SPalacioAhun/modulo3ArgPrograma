import React, { useState, useEffect } from "react";
import { WiHumidity } from "react-icons/wi";

function Humedad({ location }) {
  const [humedad, setHumedad] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = (latitude, longitude) => {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,windspeed_10m&hourly=temperature_2m,precipitation_probability,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FSao_Paulo&forecast_days=1`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la solicitud a la API");
          }
          return response.json();
        })
        .then((data) => {
          const currentHumedad = data.current.relativehumidity_2m;
          setHumedad(currentHumedad);
        })
        .catch((error) => {
          setError("Error al obtener los datos de humedad");
        });
    };

    if (location && location.latitude && location.longitude) {
      fetchWeatherData(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <div>
      <h1>
        <WiHumidity className="temperature-icon" />
      </h1>
      <h2>
        <strong>Humedad</strong>
      </h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <p style={{ fontSize: "1.5rem" }}>
          <strong>{humedad !== null ? `${humedad}%` : "Cargando..."}</strong>
        </p>
      )}
    </div>
  );
}

export default Humedad;
