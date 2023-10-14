import React, { useEffect, useState } from 'react';
import { GiWindsock } from 'react-icons/gi';

function Viento() {
  const [velocidadViento, setVelocidadViento] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-37.3217&longitude=-59.1332&current=temperature_2m,relativehumidity_2m,windspeed_10m&hourly=temperature_2m,precipitation_probability,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FSao_Paulo&forecast_days=1'
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud a la API');
        }
        return response.json();
      })
      .then((data) => {
        // Accede al valor de velocidad del viento desde la respuesta de la API
        const viento = data.current.windspeed_10m;

        setVelocidadViento(viento);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de velocidad del viento', error);
      });
  }, []);

  return (
    <div>    
       <div className='description__card-icon'>
         <h1><GiWindsock className='temperature-icon'/></h1>
         <h2>Viento</h2>
         <h3>{velocidadViento !== null ? `${velocidadViento} km/h` : 'Cargando...'}</h3>
      </div>
    </div>
  );
}

export default Viento;

