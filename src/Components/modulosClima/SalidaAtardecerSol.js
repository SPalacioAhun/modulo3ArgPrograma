import React, { useEffect, useState } from 'react';
import { BsSunriseFill, BsSunsetFill } from 'react-icons/bs';

function SalidaAtardecerSol({ location }) {
  const [horaSalidaSol, setHoraSalidaSol] = useState(null);
  const [horaAtardecer, setHoraAtardecer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = (latitude, longitude) => {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset&timezone=America%2FSao_Paulo`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
          }
          return response.json();
        })
        .then((data) => {
          const { sunrise, sunset } = data.daily;

          // Ajusta el formato de las fechas
          const parseDate = (dateStr) => {
            const date = new Date(dateStr);
            return date.toLocaleTimeString('es-AR');
          };

          setHoraSalidaSol(parseDate(sunrise[0]));
          setHoraAtardecer(parseDate(sunset[0]));
        })
        .catch((error) => {
          setError('Error al obtener los datos de salida del sol y atardecer');
        });
    };

    if (location && location.latitude && location.longitude) {
      fetchWeatherData(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <div>
      <div className="salida-atardecer-sol-card">
        <h1><BsSunriseFill className='temperature-icon' /></h1>
        <p><strong>Salida del Sol:</strong><br></br> {horaSalidaSol}</p>
        <BsSunsetFill className='temperature-icon' />
        <p><strong>Atardecer:</strong><br></br> {horaAtardecer}</p>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default SalidaAtardecerSol;

