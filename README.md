# Mapping Earthquakes with GeoJSON and Leaflet
## Basic Project Plan 
The goal of this project was to make an API call to retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days and create an interactive map with features and overlays presenting magnitude information and tectonic plate information. 

An API call was made to the [USGS Earthquake Hazards Progrom website]([https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson) to retrieve GeoJSON earthquake data to retrieve magnitude data for earthquakes that occur in the past seven days. After, the Leaflet library was used create an interactive map with multiple layers and user interface controls. Finally, using the GeoJSON earthquake data, JavaScript and the D3 library, the map was populated with features which created unique markers for each cooridnate based on magnitude information and added descriptive pop-ups for each coordinate. 

Additonally, tectonic plate boundary was added to create another overlay option using [GeoJSON data] (https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json) converted from a dataset of tectonic plate boundaries created by Peter Bird. 

## Purpose

The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days.
Tasks

To complete this project, use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.
Approach

Your approach will be to use the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. You'll use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.
Now that you have an overview of the project plan, let's set up a Mapbox account and get the API token you'll need to create geographical maps.
