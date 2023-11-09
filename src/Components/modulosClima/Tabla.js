import React, { useEffect, useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Tabla({ location }) {
  const [tablaData, setTablaData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = (latitude, longitude) => {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=America%2FSao_Paulo&forecast_days=1`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
          }
          return response.json();
        })
        .then((data) => {
          const hourlyData = data.hourly;
          const timeData = hourlyData.time.map((time) => new Date(time).getHours());
          const temperaturas = hourlyData.temperature_2m;

          const datosDeTabla = timeData.map((hora, index) => ({
            hora: `${hora}:00`,
            temperatura: temperaturas[index],
          }));

          setTablaData(datosDeTabla);
        })
        .catch((error) => {
          console.error('Error al obtener los datos de la tabla de temperatura:', error);
          setError('Error al obtener los datos de la tabla de temperatura. Detalles en la consola.');
        });
    };

    if (location && location.latitude && location.longitude) {
      fetchWeatherData(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <>
      <h3 style={{ color: 'black' }}>Gráfico de temperatura a lo largo del día</h3>
      <div>
        {tablaData.length > 0 ? (
          <BarChart width={570} height={100} data={tablaData}>
            <Bar dataKey="temperatura" fill="orangered" cursor={{ fill: 'rgba(255, 100, 100, 0.6)' }} />
            <CartesianGrid stroke="black" />
            <XAxis dataKey="hora" tick={{ fill: 'black' }} />
            <YAxis tick={{ fill: 'black' }} />
            <Tooltip contentStyle={{ color: 'black' }} />
          </BarChart>
        ) : (
          <p>Cargando datos...</p>
        )}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default Tabla;

