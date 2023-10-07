import React from 'react'
import './descriptions.css'
import {GiThermometerCold, GiThermometerHot} from 'react-icons/gi';
import {BiWind} from 'react-icons/bi'
import {WiHumidity} from 'react-icons/wi'


const Descriptions = () => {
  return ( <div className='section__description'>
    <div className='card'>
      <div className='description__card-icon'>
        <h1><GiThermometerCold/></h1>
        <small>Min</small>
      </div>
      <h2>10°C</h2>
    </div>

    <div className='card'>
      <div className='description__card-icon'>
        <h1><GiThermometerHot/></h1>
        <small>Max</small>
      </div>
      <h2>32°C</h2>
    </div>

    

    <div className='card'>
      <div className='description__card-icon'>
        <h1><BiWind/></h1>
        <small>Viento</small>
      </div>
      <h2>11Km/h</h2>
    </div>

    <div className='card'>
      <div className='description__card-icon'>
        <h1><WiHumidity/></h1>
        <small>Humedad</small>
      </div>
      <h2>12%</h2>
    </div>
  </div>

   
  

 
  
  )
}

export default Descriptions;
