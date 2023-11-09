import React, { useEffect, useState } from 'react';
import { FaSun } from 'react-icons/fa';

function IndiceUV({ location }) {
  const [uvIndex, setUvIndex] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = (latitude, longitude) => {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=uv_index&timezone=America%2FSao_Paulo`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
          }
          return response.json();
        })
        .then((data) => {
          const uvIndexValue = data.current.uv_index;
          if (uvIndexValue !== undefined) {
            setUvIndex(uvIndexValue);
          } else {
            setError('Índice UV no disponible');
          }
        })
        .catch((error) => {
          setError('Error al obtener el índice UV');
        });
    };

    if (location && location.latitude && location.longitude) {
      fetchWeatherData(location.latitude, location.longitude);
    }
  }, [location]);

  if (error) {
    return (
      <div>
        <div className="description__card-icon">
          <h1><FaSun className='temperature-icon' /></h1>
          <h2>Índice UV</h2>
          <h3>{error}</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="description__card-icon">
        <h1><FaSun className='temperature-icon' /></h1>
        <h2>Índice UV</h2>
        <h3>{uvIndex !== null ? uvIndex : 'Cargando...'}</h3>
      </div>
    </div>
  );
}

export default IndiceUV;

