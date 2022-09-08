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
    "Satellite Streets": satelliteStreets
};

//Create a map object
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

//Add layer control to map 
L.control.layers(baseMaps).addTo(map);

//Accessing the Toronto neighborhoods GeoJSON URL
let torontoHoods ="https://raw.githubusercontent.com/godak9/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

//Grabbing the GeoJSON data
d3.json(torontoHoods).then(function(data){
    console.log(data);
    let myStyle ={
        weight: 1,
        fillColor: "yellow",
        opacity: 1
    };
    //Create GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer){
            layer.bindPopup("<h2>"+ feature.properties.AREA_NAME + "</h2>")
        },
    })
    .addTo(map);
});