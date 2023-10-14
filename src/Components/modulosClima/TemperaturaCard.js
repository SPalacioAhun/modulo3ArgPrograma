import React, { useEffect, useState } from 'react';
import { GiThermometerHot, GiThermometerCold } from 'react-icons/gi';

function TemperaturaCard() {
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-37.3217&longitude=-59.1332&current=temperature_2m,relativehumidity_2m,windspeed_10m&hourly=temperature_2m,precipitation_probability,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FSao_Paulo&forecast_days=1';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud a la API');
        }
        return response.json();
      })
      .then((data) => {
        // Accede a los valores de temperatura máxima y mínima desde la respuesta de la API
        const maxTemperature = data.daily.temperature_2m_max[0]; // Por ejemplo, el valor para el primer día
        const minTemperature = data.daily.temperature_2m_min[0];

        setMaxTemp(maxTemperature);
        setMinTemp(minTemperature);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de temperatura', error);
      });
  }, []);

  return (
    <div>
      <div className='description__card-icon'>
        <p>
          <GiThermometerHot className='temperature-icon' />
          <br />
          <span className='max-min-text'>
            Máxima: 
            <span className='temperature-number'><br></br><br></br>
              {maxTemp !== null ? `${maxTemp}°C` : 'Cargando...'}
            </span>
          </span>
        </p>
        <p>
          <GiThermometerCold className='temperature-icon' />
          <br />
          <span className='max-min-text'>
            Mínima: 
            <span className='temperature-number'><br></br><br></br>
              {minTemp !== null ? `${minTemp}°C` : 'Cargando...'}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
  
  
}

export default TemperaturaCard;

