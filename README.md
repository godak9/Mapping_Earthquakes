# Mapping Earthquakes with GeoJSON and Leaflet
## Basic Project Plan 

The goal of this project was to make an API call to retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days and create an interactive map with features and overlays presenting magnitude information and tectonic plate information. 

An API call was made to the USGS Earthquake Hazards Program website for [earthquakes that occured in the past seven days](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson) and for [earthquakes that occured in the past seven days with a magnitude of 4.5+](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson) to retrieve GeoJSON data. After, the Leaflet library was used create an interactive map with multiple layers and user interface controls. Finally, using the GeoJSON earthquake data, JavaScript and the D3 library, the map was populated with features which created unique markers for each cooridnate based on magnitude information and added descriptive pop-ups for each coordinate. 

Additonally, tectonic plate boundary was added to create another overlay option using [GeoJSON data](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json) converted from a dataset of tectonic plate boundaries created by Peter Bird. 

## Results 
The code used for this project can be found in this [JavaScript file](Earthquake_Challenge/static/js/challenge_logic.js). There are comments in green to specify each step taken along the way. The resulting map appears as follows (the default map applies all overlays):
![Screen Shot 2022-09-08 at 7 54 09 PM](https://user-images.githubusercontent.com/104794100/189245736-ab84b606-6c00-48ea-ab3f-dd73d8877995.png)

