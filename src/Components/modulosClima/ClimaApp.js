import React from "react";
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
  return (
    <div className="clima-app">
      <div className="clima-row">
        <div className="clima-card">
          <Hoy />
        </div>

        <div className="clima-card">
          <TemperaturaCard />
        </div>

        <div className="clima-card">
          <Viento />
        </div>

        <div className="clima-card">
          <IndiceUV />
        </div>
      </div>

      <div className="clima-row">
        <div className="clima-card">
          <SalidaAtardecerSol />
        </div>

        <div className="clima-card">
          <Humedad />
        </div>

        <div className="clima-card">
          <Visibilidad />
        </div>

        <div className="clima-card">
          <ProbabilidadPrecipitacion />
        </div>
      </div>

      <div className="tabla-container">
        <Tabla />
      </div>
    </div>
  );
}

export default ClimaApp;
