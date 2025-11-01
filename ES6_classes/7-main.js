import Airport from './7-airport.js';

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF); // Airport { _name: 'San Francisco Airport', _code: 'SFO' }
console.log(airportSF.toString()); // [object SFO]
