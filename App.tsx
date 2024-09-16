import { StatusBar, View, StyleSheet } from "react-native";
import React from "react";
import CustomMap from './components/CustomMap'

function App(): React.JSX.Element {

  let location = {
    latitude:0,
    longitude:0,
    latitudeDelta:0,
    longitudeDelta:0,
  }

  return(   
    <View style={styles.container}>
      <CustomMap/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;