console.log("working")

// We create the tile layer that will be the Streets layer 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the tile layer that will be the Satellite Streets layer 
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Create a base layer
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

//Create a map object
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

//Add layer control to map 
L.control.layers(baseMaps).addTo(map);

//Accessing the Toronto neighborhoods GeoJSON URL
var past7Days = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Retrieve the earthquake GeoJSON data.
d3.json(past7Days).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
