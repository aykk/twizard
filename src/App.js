import React, { Component } from 'react';
import { render } from "react-dom";
import  Elements  from './Elements';
import  { returnUrgency }  from './Elements';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './style2.css';
import "./App.css"; 
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";


const googleApi = "https://maps.googleapis.com/maps/api/place/search/json?location=";
const googleApiEnd = "&keyword=place&key=AIzaSyCT3OIk64RCKckk0m05jl9ZnyFP9OoaPY0";

var urgency = 0;
var radius = 0;
var fullLink = "x";

async function getPeeLink(){
  urgency = returnUrgency();
  radius = 110 - urgency;
  alert(urgency);
  fullLink = googleApi + lati + "," + longi + "&radius=" + radius + googleApiEnd;
  alert(fullLink);
}

const mapStyles = {
  width: '50%x',
  height: '55%',
  margin: 50,
  padding: 0
};

var lati = 0;
var longi = 0;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
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
        <br/>
        
       
        <Col>
            <Button onClick={(e) => getPeeLink()}> Tinkle </Button>
        </Col>
        <br/>
        <p3> Risk: 0%   </p3>
        <br/>
        <p3>Current Location: Holden Hall</p3>
        <Map
            google={this.props.google}
            zoom={20}
            style={mapStyles}
            initialCenter={
            {
              lat: lati,
              lng: longi
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

render(<App />, document.getElementById("root"));

export function returnPeeLink() {
  return fullLink;
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCT3OIk64RCKckk0m05jl9ZnyFP9OoaPY0'
})(App);