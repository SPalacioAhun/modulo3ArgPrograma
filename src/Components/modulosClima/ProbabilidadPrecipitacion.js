import React, { useEffect, useState } from 'react';
import { BsCloudRainHeavyFill } from 'react-icons/bs';

function ProbabilidadPrecipitacion({ location }) {
  const [probabilidadPrecipitacion, setProbabilidadPrecipitacion] = useState(null);

  useEffect(() => {
    const fetchWeatherData = (latitude, longitude) => {
      const apiUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=precipitation_probability&timezone=America%2FSao_Paulo&forecast_days=1`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
          }
          return response.json();
        })
        .then((data) => {
          // Obtener la probabilidad de precipitación para la próxima hora
          const probabilidad = data.hourly.precipitation_probability[0];
          setProbabilidadPrecipitacion(probabilidad);
        })
        .catch((error) => {
          console.error('Error al obtener los datos de probabilidad de precipitación:', error);
          setProbabilidadPrecipitacion(null);
        });
    };

    if (location && location.latitude && location.longitude) {
      fetchWeatherData(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <div>
      <div className="description__card-icon">
        <h1>
          <BsCloudRainHeavyFill className='temperature-icon' />
        </h1>
        <h3>Probabilidad de precipitación</h3>
        <h2>{probabilidadPrecipitacion !== null ? `${probabilidadPrecipitacion}%` : 'Cargando...'}</h2>
      </div>
    </div>
  );
}

export default ProbabilidadPrecipitacion;
