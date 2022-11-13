import { useState } from 'react';
import { returnPeeLink } from './App';

var fullLink = returnPeeLink();

function fetchInitialData() {
    return new Promise((resolve, reject) => {
      fetch(fullLink 
      .then(response => response.json()) 
      .then(data => resolve(data)
    })
  }

export default Getter()