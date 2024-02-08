import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 48.856614,
      lng: 2.352222
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '96vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDCfSreAa43dnLqzgZUvunpcSmv9rJw-Mk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}

      >
        <AnyReactComponent
          lat={48.856614}
          lng={2.352222}
          text={"HEREEEE 	↓"}
        />
      </GoogleMapReact>
    </div>
  );
}