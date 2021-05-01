// We create the street view tile layer that will be the default background of our map
let street = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: street,
    Dark: dark
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [street]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/fletchrk/Mapping_Earthquakesv1/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map);
});

// Grabbing, parsing and add GeoJSON data(FeatureCollection) on map object
// turn each feature into a marker on the map using pointToLayer
d3.json(airportData).then(function(data) {
    console.log(data);
    L.geoJSON(data,{
        pointToLayer: function (feature, latlng) {
            console.log(feature);
            return L.marker(latlng)
            .bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2><hr><h3> Airport name: " + feature.properties.name + "</h3>");
            }
        }).addTo(map);
    })

// turn each feature into a popup on the map using onEachFeature
//L.geoJSON(sanFranAirport, {
        //onEachFeature: function (feature, layer) {
            //console.log(layer);
            //layer.bindPopup("<h2> Airport code: " +feature.properties.faa+
                        //"</h2><hr><h3> Airport name: "+ feature.properties.name +"</h3>")
        //}}).addTo(map);