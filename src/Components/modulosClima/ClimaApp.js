import React, { useState, useEffect } from "react";
import IndiceUV from "./IndiceUV";
import Hoy from "./Hoy";
import TemperaturaCard from "./TemperaturaCard";
import Viento from "./Viento";
import SalidaAtardecerSol from "./SalidaAtardecerSol";
import Humedad from "./Humedad";
import Visibilidad from "./Visibilidad";
import ProbabilidadPrecipitacion from "./ProbabilidadPrecipitacion";
import Tabla from "./Tabla";

function ClimaApp() {
  const [customLocation, setCustomLocation] = useState("");
  const [location, setLocation] = useState({
    latitude: -37.3217, // Coordenadas de Tandil
    longitude: -59.1332,
    name: "Tandil",
  });

  const handleLocationChange = (e) => {
    setCustomLocation(e.target.value);
  };

  const handleSearchClick = () => {
    fetchLocationCoordinates();
  };

  const fetchLocationCoordinates = () => {
    if (customLocation) {
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${customLocation}&count=1&language=es&format=json`
      )
        .then((resp) => resp.json())
        .then((data) => {
          const lat = data.results[0].latitude;
          const lon = data.results[0].longitude;
          setLocation({
            latitude: lat,
            longitude: lon,
            name: data.results[0].name,
          });
        })
        .catch((ex) => {
          console.error(ex);
        });
    }
  };

  useEffect(() => {
    // Llamada inicial para obtener datos de Tandil al cargar la aplicación
    fetchLocationCoordinates();
  }, []);

  return (
    <div className="clima-app">
      <div>
        <input
          type="text"
          placeholder="Ingrese nombre ciudad"
          value={customLocation}
          onChange={handleLocationChange}
        />
        <button onClick={handleSearchClick}>Buscar Clima</button>
      </div>
      <div className="clima-row">
        <div className="clima-card">
          <Hoy location={location} />
        </div>

        <div className="clima-card">
          <TemperaturaCard location={location} />
        </div>

        <div className="clima-card">
          <Viento location={location} />
        </div>

        <div className="clima-card">
          <IndiceUV location={location} />
        </div>
      </div>

      <div className="clima-row">
        <div className="clima-card">
          <SalidaAtardecerSol location={location} />
        </div>

        <div className="clima-card">
          <Humedad location={location} />
        </div>

        <div className="clima-card">
          <Visibilidad location={location} />
        </div>

        <div className="clima-card">
          <ProbabilidadPrecipitacion location={location} />
        </div>
      </div>

      <div className="tabla-container">
        <Tabla location={location} />
      </div>
    </div>
  );
}

export default ClimaApp;
