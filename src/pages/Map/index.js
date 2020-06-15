import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Map = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0031,
  });

  useEffect(() => {
    if (location.latitude === 0 && location.longitude === 0) {
      Geolocation.getCurrentPosition(info =>
        setLocation({
          ...info.coords,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031,
        })
      );
    }
  }, [location]);

  return (
    <MapView
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
      initialRegion={location}
      region={location}
      onRegionChange={setLocation}
      showsUserLocation
    />
  );
};

export default Map;
