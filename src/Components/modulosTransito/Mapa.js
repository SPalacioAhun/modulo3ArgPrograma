import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

import Transp from './transp.json'
import L from 'leaflet';

// iconos personalizados: 
const customIcon153 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea153.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});

const customIcon321 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea321.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});

const customIcon159 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea159.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});

const customIcon148 = new L.Icon({
  iconUrl: 'https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea148.jpg', // Reemplaza 'URL_DEL_ICONO' con la URL de tu icono personalizado
  iconSize: [25, 41], // Tamaño del icono
  iconAnchor: [12, 41], // Punto de anclaje del icono
});



function Mapa({ loading, transportData }) {

  // Para buscar casos que contengan "153" en route_short_name
  const linea153 = Transp.filter((obj) => /153/.test(obj.route_short_name));
  const linea321 = Transp.filter((obj) => /321/.test(obj.route_short_name));
  const linea159 = Transp.filter((obj) => /159/.test(obj.route_short_name));
  const linea148 = Transp.filter((obj) => /148/.test(obj.route_short_name));

  // Combinar todas las lineas en una sola lista para poder mostar todas en el mapa al mismo tiempo
  const lineasCombinadas = [...linea153, ...linea321, ...linea159, ...linea148];

  /*   console.log(linea153A)
    console.log(linea321A)
    console.log(linea159)
    console.log(lineasCombinadas)
   */

  return (


    <>
      
      <MapContainer center={[lineasCombinadas[0].latitude, lineasCombinadas[0].longitude]} zoom={10} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {linea153.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon153}>
              <Popup>
                <p>Linea: {item.route_short_name}</p>
                <p>Dirección de la Ruta: {item.trip_headsign}</p>
                <p>Velocidad Actual: {item.speed}</p>
                <p>Nombre de la Empresa: {item.agency_name}. Cod. Empresa: {item.agency_id}</p>
                <p>ID de la Ruta: {item.route_id}</p>
              </Popup>
            </Marker>
          );
          
        })}
        {linea321.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon321}>
              <Popup>
                <p>Linea: {item.route_short_name}</p>
                <p>Dirección de la Ruta: {item.trip_headsign}</p>
                <p>Velocidad Actual: {item.speed}</p>
                <p>Nombre de la Empresa: {item.agency_name}. Cod. Empresa: {item.agency_id}</p>
                <p>ID de la Ruta: {item.route_id}</p>
              </Popup>
            </Marker>
          );
        })}
        {linea159.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon159}>
              <Popup>
                <p>Linea: {item.route_short_name}</p>
                <p>Dirección de la Ruta: {item.trip_headsign}</p>
                <p>Velocidad Actual: {item.speed}</p>
                <p>Nombre de la Empresa: {item.agency_name}. Cod. Empresa: {item.agency_id}</p>
                <p>ID de la Ruta: {item.route_id}</p>
              </Popup>
            </Marker>
          );
        })}
        {linea148.map((item, index) => {
          const position = [item.latitude, item.longitude];
          return (
            <Marker key={index} position={position} icon={customIcon148}>
              <Popup>
                <p>Linea: {item.route_short_name}</p>
                <p>Dirección de la Ruta: {item.trip_headsign}</p>
                <p>Velocidad Actual: {item.speed}</p>
                <p>Nombre de la Empresa: {item.agency_name}. Cod. Empresa: {item.agency_id}</p>
                <p>ID de la Ruta: {item.route_id}</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}

export default Mapa;