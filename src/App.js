import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '500px',
  height: '170px',
  mapTypeId: 'satellite',
  margin: 150,
  padding: 100
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={20}
        style={mapStyles}
        initialCenter={
          {
            lat: 37.230358,
            lng: -80.422379
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCT3OIk64RCKckk0m05jl9ZnyFP9OoaPY0'
})(MapContainer);