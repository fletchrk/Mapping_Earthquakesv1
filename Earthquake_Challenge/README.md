# Mapping_Earthquakes
## Overview of Project
We were tasked to create a earthquake map with three different maps and three different overlays. The three different maps we used were a street map, satellite map, and a dark map. The three overlays were for allearthquakes, tectonic plates’ location on the earth, and an overlay that showed earthquakes that measured a magnitude greater than 4.5.

## Results
### Deliverable 1 Requirements:
1.	The tectonic plate data is added as a second layer group
2.	The tectonic plate data is added to the overlay object
3.	The d3.json() callback is working and does the following:
-	The tectonic plate data is passed to the geoJSON() layer
-	The geoJSON() layer adds color and width to the tectonic plate lines
-	The tectonic layer group variable is added to the map
4.	The earthquake data and tectonic plate data displayed on the map when the page loads

![Deliverable1]( https://github.com/fletchrk/Mapping_Earthquakesv1/blob/main/Earthquake_Challenge/Resources/Deliverable1.png)

### Deliverable 2 Requirements: 
1.	The major earthquake data is added as a third layer group
2.	The major earthquake data is added to the overlay object
3.	The d3.json() callback is working and does the following:
-	Sets the color and diameter of each earthquake.
-	The major earthquake data is passed to the geoJSON() layer.
-	The geoJSON() layer creates a circle for each major earthquake, and adds a popup for each circle to display the magnitude and location of the earthquake
-	The major earthquake layer group variable is added to the map
4.	All the earthquake data and tectonic plate data are displayed on the map when the page loads and the datasets can be toggled on or off 

![Deliverable1]( https://github.com/fletchrk/Mapping_Earthquakesv1/blob/main/Earthquake_Challenge/Resources/Deliverable2.png)

### Deliverable 3 Requirements:
1.	A third map tile layer is created
2.	The third map is added to the overlay object
3.	All the earthquake data and tectonic plate data are displayed on the all maps of the webpage
 
![Dark_Map]( https://github.com/fletchrk/Mapping_Earthquakesv1/blob/main/Earthquake_Challenge/Resources/Dark_Map.png)
