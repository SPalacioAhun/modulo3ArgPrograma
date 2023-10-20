import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Mapa from './Mapa';

const ContenedorGral = styled.div`
  display: block;
`;

function TransitoDashboard() {
  const [transportData, setTransportData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6";

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetch(apiUrl)
        .then((resp) => resp.json())
        .then((data) => {
          setTransportData(data);
          setLoading(false);
        })
        .catch((ex) => {
          console.error(ex);
          setLoading(false); // En caso de error, también detenemos la carga
        });
    };

    fetchData(); // Llamamos a la función para cargar los datos al inicio
    const interval = setInterval(fetchData, 31000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ContenedorGral>
      <h1>Colectivos de CABA</h1>
      <Mapa transportData={transportData} loading={loading} />
      {loading && <h2>Cargando</h2>}
    </ContenedorGral>
  );
}

export default TransitoDashboard;
