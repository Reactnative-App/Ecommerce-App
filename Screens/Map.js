import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, {useEffect} from 'react';
import { View } from 'react-native';



export default function Map() {

  return (
    <View style={{ flex: 1}}>
      <MapView showsUserLocation
      provider={PROVIDER_GOOGLE}
        style={{ flex: 1,width:500,height:500}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/* <RootNavigator /> */}
    </View>
  );
}
