import React from "react";
import GoogleMapReact from 'google-map-react';
import CustomPin from './custom_pin.jsx'

const AnyReactComponent = ({ text }) => (
  <div style={{ position: 'relative' }}>
    <CustomPin />
    <div>{text}</div>
  </div>
);

export default function SimpleMap({ selectedFlat }){
  
	const center = {
      lat: 48.856614,
      lng: 2.352222
    };

  const defaultProps = {
    center: center,
    zoom: 15
  };

	const lat = selectedFlat ? selectedFlat.lat : defaultProps.center.lat;
	const lng = selectedFlat ? selectedFlat.lng : defaultProps.center.lng;
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '96vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDCfSreAa43dnLqzgZUvunpcSmv9rJw-Mk" }}
        center={{
      lat: lat,
      lng: lng
    }}
        defaultZoom={defaultProps.zoom}

      >
        <AnyReactComponent
          lat={lat} 
          lng={lng}
          text={""}
        />
      </GoogleMapReact>
    </div>
  );
}