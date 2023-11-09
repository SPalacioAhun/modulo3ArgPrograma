import React, { useEffect, useState } from 'react';
import { MdVisibility } from 'react-icons/md';

function Visibilidad({ location }) {
  const [visibilidad, setVisibilidad] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = (latitude, longitude) => {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=visibility&timezone=America%2FSao_Paulo`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
          }
          return response.json();
        })
        .then((data) => {
          const visibilidadValue = data.current.visibility;
          setVisibilidad(visibilidadValue);
        })
        .catch((error) => {
          console.error('Error al obtener la visibilidad', error);
          setError('Error al obtener la visibilidad');
        });
    };

    if (location && location.latitude && location.longitude) {
      fetchWeatherData(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <div>
      <div className="visibilidad-card">
        <h1><MdVisibility className='temperature-icon' /></h1>
        <h3>Visibilidad</h3>
        {error ? (
          <p>{error}</p>
        ) : (
          <p>
            {visibilidad !== undefined ? (
              <strong>{`${visibilidad} metros`}</strong>
            ) : (
              'Cargando...'
            )}
          </p>
        )}
      </div>
    </div>
  );
}

export default Visibilidad;

