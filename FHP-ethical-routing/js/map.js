mapboxgl.accessToken =
   'pk.eyJ1IjoiYW5uZWxhIiwiYSI6ImNrM296bWE1NjF5dWYzZnJrOHBiY3M5NGkifQ.SbQLL5OlZqfLhsWZ9IkLHA';
var map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/annela/ck6shsinu0dkh1ip1u8atiabb',
   //    center: [13.376166251185623, 52.48889934937043],
   center: [13.37528, 52.47764],
   zoom: 13,
   scrollZoom: false
});

const setMapFirst = () => {
   map.setLayoutProperty('background', 'visibility', 'none');
   map.setLayoutProperty('noise40-59db', 'visibility', 'none');
   map.setLayoutProperty('noise60-79db', 'visibility', 'none');
   map.setLayoutProperty('noise80db', 'visibility', 'none');
   map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
   map.setLayoutProperty('road', 'visibility', 'visible');
   map.setLayoutProperty('water', 'visibility', 'visible');
   map.setLayoutProperty('building', 'visibility', 'visible');
   map.setLayoutProperty('greenery', 'visibility', 'none');
   map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
   flyTo({ center: [13.37528, 52.47764], zoom: 15 });
};

map.on('load', function() {
   console.log(map);

   setMapFirst();
   //    map.legendControl.addLegend(document.getElementById('legend').innerHTML);
});

const setMapStepLayouts = () => {
   map.setLayoutProperty('background', 'visibility', 'none');
   map.setLayoutProperty('noise40-59db', 'visibility', 'none');
   map.setLayoutProperty('noise60-79db', 'visibility', 'none');
   map.setLayoutProperty('noise80db', 'visibility', 'none');
   map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
   map.setLayoutProperty('road', 'visibility', 'visible');
   map.setLayoutProperty('water', 'visibility', 'visible');
   map.setLayoutProperty('building', 'visibility', 'visible');
   map.setLayoutProperty('greenery', 'visibility', 'none');
   map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
   flyTo({ center: [13.37528, 52.47764], zoom: 15 });
};

const flyTo = options => {
   setTimeout(() => map.flyTo(options), 1);
};

const setMapStepNoiseOne = () => {
   // map.setLayoutProperty("background", "visibility", "visible")
   map.setLayoutProperty('noise40-59db', 'visibility', 'visible');
   map.setLayoutProperty('noise60-79db', 'visibility', 'none');
   map.setLayoutProperty('noise80db', 'visibility', 'none');
   map.setLayoutProperty('background', 'visibility', 'visible');
   map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
   map.setLayoutProperty('building', 'visibility', 'none');
   map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
   flyTo({ center: [13.37528, 52.47764], zoom: 13.5 });
};

const setMapStepNoiseTwo = () => {
    // map.setLayoutProperty("background", "visibility", "visible")
    map.setLayoutProperty('noise40-59db', 'visibility', 'visible');
    map.setLayoutProperty('noise60-79db', 'visibility', 'visible');
    map.setLayoutProperty('noise80db', 'visibility', 'none');
    map.setLayoutProperty('background', 'visibility', 'visible');
    map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
    map.setLayoutProperty('building', 'visibility', 'none');
    map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
    flyTo({ center: [13.37528, 52.47764], zoom: 13.5 });
 };

 const setMapStepNoiseThree = () => {
    // map.setLayoutProperty("background", "visibility", "visible")
    map.setLayoutProperty('noise40-59db', 'visibility', 'visible');
    map.setLayoutProperty('noise60-79db', 'visibility', 'visible');
    map.setLayoutProperty('noise80db', 'visibility', 'visible');
    map.setLayoutProperty('background', 'visibility', 'visible');
    map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
    map.setLayoutProperty('building', 'visibility', 'none');
    map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
    flyTo({ center: [13.37528, 52.47764], zoom: 13.5 });
 };

const setMapStepWalk = () => {
   map.setLayoutProperty('noise40-59db', 'visibility', 'none');
   map.setLayoutProperty('noise60-79db', 'visibility', 'none');
   map.setLayoutProperty('noise80db', 'visibility', 'none');
   map.setLayoutProperty('background', 'visibility', 'none');
   map.setLayoutProperty('routing_data_civity', 'visibility', 'visible');
   map.setLayoutProperty('child_playground', 'visibility', 'visible');
   map.setLayoutProperty('senior', 'visibility', 'visible');
   map.setLayoutProperty('hospital', 'visibility', 'visible');
   map.setLayoutProperty('child_kindergarten_preschool', 'visibility', 'visible');
   map.setLayoutProperty('child_school', 'visibility', 'visible');
   map.setLayoutProperty('university', 'visibility', 'visible');
   map.setLayoutProperty('doctor', 'visibility', 'visible');

   flyTo({ center: [13.37528, 52.47764], zoom: 13 });
};

const setMapStepWalkTwo = () => {
    map.setLayoutProperty('noise40-59db', 'visibility', 'none');
    map.setLayoutProperty('noise60-79db', 'visibility', 'none');
    map.setLayoutProperty('noise80db', 'visibility', 'none');
    map.setLayoutProperty('background', 'visibility', 'none');
    map.setLayoutProperty('routing_data_civity', 'visibility', 'visible');
    map.setLayoutProperty('child_playground', 'visibility', 'visible');
    map.setLayoutProperty('senior', 'visibility', 'visible');
    map.setLayoutProperty('hospital', 'visibility', 'visible');
    map.setLayoutProperty('child_kindergarten_preschool', 'visibility', 'visible');
    map.setLayoutProperty('child_school', 'visibility', 'visible');
    map.setLayoutProperty('university', 'visibility', 'visible');
    map.setLayoutProperty('doctor', 'visibility', 'visible');
 
    flyTo({ center: [13.37528, 52.47764], zoom: 13 });
 };

 const setMapStepWalkThree = () => {
    map.setLayoutProperty('noise40-59db', 'visibility', 'none');
    map.setLayoutProperty('noise60-79db', 'visibility', 'none');
    map.setLayoutProperty('noise80db', 'visibility', 'none');
    map.setLayoutProperty('background', 'visibility', 'none');
    map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
    map.setLayoutProperty('child_playground', 'visibility', 'visible');
    map.setLayoutProperty('route_one', 'visibility', 'visible');
    map.setLayoutProperty('senior', 'visibility', 'visible');
    map.setLayoutProperty('hospital', 'visibility', 'visible');
    map.setLayoutProperty('child_kindergarten_preschool', 'visibility', 'visible');
    map.setLayoutProperty('child_school', 'visibility', 'visible');
    map.setLayoutProperty('university', 'visibility', 'visible');
    map.setLayoutProperty('doctor', 'visibility', 'visible');

    
 
    flyTo({ center: [13.39370, 52.47514], zoom: 13.7 });
 };

 
