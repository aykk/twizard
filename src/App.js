import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { render } from "react-dom";

const mapStyles = {
  width: '750px',
  height: '350px',
  margin: 310,
  padding: 30,
};

var lati = 0;
var longi = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

componentDidMount() {
  navigator.geolocation.getCurrentPosition(function(position) {
    lati = position.coords.latitude;
    longi = position.coords.longitude;
  });
}

render() {
  return (
    <div>
    </div>
  );
}
}

render(<App />, document.getElementById("root"));

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={20}
        style={mapStyles}
        initialCenter={
          {
            lat: lati,
            lng: longi,
          }
        }
      >
        <Marker
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCT3OIk64RCKckk0m05jl9ZnyFP9OoaPY0'
})(MapContainer);