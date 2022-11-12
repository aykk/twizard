import React, { Component } from 'react';
import  Elements  from './Elements';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './style2.css';

const mapStyles = {
  width: '50%x',
  height: '50%',
  margin: 50,
  padding: 0
};

var lati = 0;
var longi = 0;

export class App extends Component {
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
        <h1>TinkleWizard</h1> 
        <p>Need to pee? Tinkle Wizard has got your back!</p>
        <Elements/>
        <p2>(How badly do you need to go?)</p2>
        <br/>
        <p><button id = "button">Tinkle</button> </p>
        <br/>
        <p3> Risk: 98%  </p3>
        <br/>
        <p3>Location: 180 Kent Street</p3>
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
        >
          <Marker
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCT3OIk64RCKckk0m05jl9ZnyFP9OoaPY0'
})(App);