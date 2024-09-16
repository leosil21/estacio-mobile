import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

import CustomMarker from './Markers'

const CustomMap = () => {   
    
  const [camera, setCamera] = useState({
      center: {
         latitude: 0,
         longitude: 0
      },
      pitch: 0,
      heading: 0,
      altitude: 1000,
      zoom: 16,
  });

  return ( 
   <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >  
    <CustomMarker
          latitude={37.78825}
          longitude={-122.4324}
          color={"#0F9D58"}
          id={'1'}
      />
      </MapView>
   );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CustomMap;