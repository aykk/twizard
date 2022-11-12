import React, { Component } from 'react';
import { render } from "react-dom";
import  Elements  from './Elements';
import  { returnUrgency }  from './Elements';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './style2.css';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./App.css"; 

const googleApi = "https://maps.googleapis.com/maps/api/place/search/json?location=";
const googleApiEnd = "&keyword=place&key=AIzaSyCT3OIk64RCKckk0m05jl9ZnyFP9OoaPY0";

var urgency = 0;
var radius = 110 - urgency;
var latiNew = 0;
var longiNew = 0;

async function getPeeLocation(){
  urgency = returnUrgency();
  alert(urgency);
  const fullLink = googleApi + lati + "," + longi + "&radius=" + radius + googleApiEnd;
  latiNew = fullLink;
  longiNew = fullLink;
 alert("pepepepep");

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
        <Col>
            <Button onClick={(e) => getPeeLocation()}> Tinkle </Button>
        </Col>
        <br/>
        <p3> Risk: +   </p3>
        <br/>
        <p3>Location: 180 Kent Street</p3>
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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCT3OIk64RCKckk0m05jl9ZnyFP9OoaPY0'
})(App);