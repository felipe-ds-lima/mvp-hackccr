import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Map = () => {
  const [location, setLocation] = useState();
  Geolocation.watchPosition(
    info =>
      setLocation({
        ...info.coords,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0031,
      }),
    () => {},
    { maximumAge: 1000, distanceFilter: 0.5 }
  );

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      {location && (
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
      )}
    </>
  );
};

export default Map;
