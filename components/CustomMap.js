import React, { useEffect, useState, useRef } from "react";

import { StyleSheet, Button, View } from "react-native";
import {PROVIDER_GOOGLE} from "react-native-maps";
import MapView from "react-native-map-clustering";

import CustomMarker from './Markers'

const CustomMap = () => {   
  const mapRef = useRef();

  const [camera, setCamera] = useState({
      center: {
         latitude: -4.13,
         longitude: -38.25,
      },
      pitch: 0,
      heading: 0,
      altitude: 1000,
      zoom: 10,
  });

  const INITIAL_REGION = {
    latitude: -4.13,
    longitude: -38.25,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
  };
/*
  const escolas = [
    {id: 1, nome: 'COLEGIO DA POLICIA MILITAR DO CEARA', nota: '10.0', latitude: -3.738452, longitude: -38.578748},
  ]*/

    const escolas = [
      {id: 7, nome: 'CENTRO EDUCACIONAL MUNICIPAL', nota: '6,5', latitude: -4.134698, longitude: -38.23718},
      {id: 9, nome: 'DARIO CARLOS BATISTA EEF', nota: '7,7', latitude: -4.135357, longitude: -38.24087},
      {id: 11, nome: 'CHORO VAQUEJADOR EEF', nota: '6', latitude: -4.135726, longitude: -38.267964},
      {id: 15, nome: 'JULIA DE MELO EEF', nota: '7,1', latitude: -4.126953, longitude: -38.24434},
      {id: 17, nome: 'MOITA REDONDA EEF', nota: '5,6', latitude: -4.113483, longitude: -38.26696},
      {id: 18, nome: 'OLAVO IRINEU DE ARAUJO EEF', nota: '5', latitude: -4.128904, longitude: -38.2263},
      {id: 21, nome: 'LUIS PACHECO DO AMARAL EEF', nota: '7,3', latitude: -4.131074, longitude: -38.24535},
      {id: 24, nome: 'ARMANDO FALCAO MINS EEF', nota: '6,8', latitude: -4.079067, longitude: -38.24202},
      {id: 28, nome: 'ESTER DANTAS DE CASTRO EEF', nota: '7,6', latitude: -4.086925, longitude: -38.2486},
      {id: 38, nome: 'ABDON DANTAS DE ALMEIDA EEF', nota: '6,7', latitude: -4.144503, longitude: -38.32843},
      {id: 40, nome: 'CURRALINHO EEF', nota: '7,3', latitude: -4.14461, longitude: -38.36611},
      {id: 47, nome: 'JOSE COELHO CARVALHO EEF', nota: '6,9', latitude: -4.116994, longitude: -38.31628},
      {id: 49, nome: 'MANUEL BERNARDINO SANTIAGO EEF', nota: '6,8', latitude: -4.175296, longitude: -38.35545},
      {id: 50, nome: 'FRANCISCO ALVES DE LIMA EEF', nota: '7,3', latitude: -4.07968, longitude: -38.18116},
      {id: 53, nome: 'JOSE DE QUEIROZ EEF', nota: '7,5', latitude: -4.181508, longitude: -38.19589},
      {id: 56, nome: 'PAULO SARASATE EEF', nota: '6,7', latitude: -4.49683, longitude: -38.36062},
      {id: 58, nome: 'PITOMBEIRAS EEF', nota: '5,7', latitude: -4.449004, longitude: -38.335911},
      {id: 60, nome: 'FRANSQUINHO CAMILO EEF', nota: '6,9', latitude: -4.041798, longitude: -38.20414},
      {id: 64, nome: 'RAIMUNDO QUEIROZ EEB DEP', nota: '5,7', latitude: -4.133043, longitude: -38.24953},
      {id: 66, nome: 'FABIO COUTINHO EM PROF', nota: '6,8', latitude: -4.139096, longitude: -38.24878},
      {id: 68, nome: 'FELIPE JOSE DA SILVA EEF', nota: '7', latitude: -4.041652, longitude: -38.19738},
      {id: 70, nome: 'JACARECOARA EEF', nota: '6,9', latitude: -4.11467, longitude: -38.16862},
      {id: 72, nome: 'LIBIA RIBEIRO EEF', nota: '6,5', latitude: -4.135081, longitude: -38.24929},
    ]

  return ( 
    <>
   <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      camera={camera}
      initialRegion={INITIAL_REGION}
    >  
    {escolas.map(e => 
      <CustomMarker
          latitude={e.latitude}
          longitude={e.longitude}
          color={parseFloat(e.nota.replace(',','.')) > 7 ? "#0F9D51" : (parseFloat(e.nota.replace(',','.')) > 5 ? "#d1b726": "#d12626") }
          colegio={e.nome}
          notaIdeb={parseFloat(e.nota.replace(',','.'))}
          id={e.id.toString()}
          key={e.id.toString()}
      />
    )}
      </MapView>
    </>
   );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CustomMap;