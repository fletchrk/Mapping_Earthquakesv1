  // Add console.log to check to see if our code is working.
  console.log("working");

// Create the map object with center at the San Francisco airport.
let mymap = L.map('mapid').setView([30.1975, -97.6664], 4);

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line,{
  dashArray:"4",  // stroke dash pattern
  color:"blue",  // stroke 
  opcity:"0.5"   // stroke 

}).addTo(mymap);

let streetsTile = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: API_KEY});

// add 'greymap' tile layer to map object
streetsTile.addTo(mymap);