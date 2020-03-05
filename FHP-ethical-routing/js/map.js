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
   map.setLayoutProperty('road', 'visibility', 'visible');
   map.setLayoutProperty('water', 'visibility', 'visible');
   map.setLayoutProperty('building', 'visibility', 'visible');

   map.setLayoutProperty('noise40-59db', 'visibility', 'none');
   map.setLayoutProperty('noise60-79db', 'visibility', 'none');
   map.setLayoutProperty('noise80db', 'visibility', 'none');

   map.setLayoutProperty('routing_data_civity', 'visibility', 'none');

    map.setLayoutProperty('senior', 'visibility', 'none');
    map.setLayoutProperty('hospital_1', 'visibility', 'none');
    map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'none');
    map.setLayoutProperty('child_school', 'visibility', 'none');
    map.setLayoutProperty('university', 'visibility', 'none');
    map.setLayoutProperty('doctor', 'visibility', 'none');
    map.setLayoutProperty('child_playground_1', 'visibility', 'none');
    map.setLayoutProperty('child_school copy', 'visibility', 'none');

    map.setLayoutProperty('senior copy', 'visibility', 'none');
    map.setLayoutProperty('university copy', 'visibility', 'none');
    map.setLayoutProperty('doctor copy', 'visibility', 'none');

   flyTo({ center: [13.37528, 52.47764], zoom: 15 });
};

map.on('load', function() {
   console.log(map);

   setMapFirst();
   //    map.legendControl.addLegend(document.getElementById('legend').innerHTML);
});

const setMapStepLayouts = () => {
    map.setLayoutProperty('background', 'visibility', 'none');
    map.setLayoutProperty('road', 'visibility', 'visible');
    map.setLayoutProperty('water', 'visibility', 'visible');
    map.setLayoutProperty('building', 'visibility', 'visible');
 
    map.setLayoutProperty('noise40-59db', 'visibility', 'none');
    map.setLayoutProperty('noise60-79db', 'visibility', 'none');
    map.setLayoutProperty('noise80db', 'visibility', 'none');
 
    map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
 
     map.setLayoutProperty('senior', 'visibility', 'none');
     map.setLayoutProperty('hospital_1', 'visibility', 'none');
     map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'none');
     map.setLayoutProperty('child_school', 'visibility', 'none');
     map.setLayoutProperty('university', 'visibility', 'none');
     map.setLayoutProperty('doctor', 'visibility', 'none');
     map.setLayoutProperty('child_playground_1', 'visibility', 'none');
     map.setLayoutProperty('child_school copy', 'visibility', 'none');
 
     map.setLayoutProperty('senior copy', 'visibility', 'none');
     map.setLayoutProperty('university copy', 'visibility', 'none');
     map.setLayoutProperty('doctor copy', 'visibility', 'none');
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

   map.setLayoutProperty('hospital_1', 'visibility', 'none');
    map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'none');
    map.setLayoutProperty('child_playground_1', 'visibility', 'none');
    map.setLayoutProperty('child_school copy', 'visibility', 'none');

    map.setLayoutProperty('senior copy', 'visibility', 'none');
    map.setLayoutProperty('university copy', 'visibility', 'none');
    map.setLayoutProperty('doctor copy', 'visibility', 'none');

   map.setLayoutProperty('first-route', 'visibility', 'none');
    map.setLayoutProperty('forth-route', 'visibility', 'none');
    map.setLayoutProperty('symbol_hospital', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_kindergarten_preschool', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_playground', 'visibility', 'none');
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

    map.setLayoutProperty('hospital_1', 'visibility', 'none');
    map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'none');
    map.setLayoutProperty('child_playground_1', 'visibility', 'none');
    map.setLayoutProperty('child_school copy', 'visibility', 'none');

    map.setLayoutProperty('senior copy', 'visibility', 'none');
    map.setLayoutProperty('university copy', 'visibility', 'none');
    map.setLayoutProperty('doctor copy', 'visibility', 'none');

    map.setLayoutProperty('first-route', 'visibility', 'none');
    map.setLayoutProperty('forth-route', 'visibility', 'none');
    map.setLayoutProperty('symbol_hospital', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_kindergarten_preschool', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_playground', 'visibility', 'none');
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

    map.setLayoutProperty('hospital_1', 'visibility', 'none');
    map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'none');
    map.setLayoutProperty('child_playground_1', 'visibility', 'none');
    map.setLayoutProperty('child_school copy', 'visibility', 'none');

    map.setLayoutProperty('senior copy', 'visibility', 'none');
    map.setLayoutProperty('university copy', 'visibility', 'none');
    map.setLayoutProperty('doctor copy', 'visibility', 'none');

    map.setLayoutProperty('first-route', 'visibility', 'none');
    map.setLayoutProperty('forth-route', 'visibility', 'none');
    map.setLayoutProperty('symbol_hospital', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_kindergarten_preschool', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_playground', 'visibility', 'none');
    flyTo({ center: [13.37528, 52.47764], zoom: 13.5 });
 };

const setMapStepWalk = () => {
   map.setLayoutProperty('noise40-59db', 'visibility', 'none');
   map.setLayoutProperty('noise60-79db', 'visibility', 'none');
   map.setLayoutProperty('noise80db', 'visibility', 'none');

   map.setLayoutProperty('background', 'visibility', 'none');

   map.setLayoutProperty('routing_data_civity', 'visibility', 'visible');
   map.setLayoutProperty('child_playground_1', 'visibility', 'visible');
   map.setLayoutProperty('senior', 'visibility', 'visible');
   map.setLayoutProperty('hospital_1', 'visibility', 'visible');
   map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'visible');
   map.setLayoutProperty('child_school', 'visibility', 'visible');
   map.setLayoutProperty('university', 'visibility', 'visible');
   map.setLayoutProperty('doctor', 'visibility', 'visible');
   map.setLayoutProperty('child_school copy', 'visibility', 'visible');

   map.setLayoutProperty('first-route', 'visibility', 'none');
    map.setLayoutProperty('forth-route', 'visibility', 'none');
    map.setLayoutProperty('symbol_hospital', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_kindergarten_preschool', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_playground_1', 'visibility', 'none');

   flyTo({ center: [13.37528, 52.47764], zoom: 13 });
};

const setMapStepWalkTwo = () => {
    map.setLayoutProperty('noise40-59db', 'visibility', 'none');
    map.setLayoutProperty('noise60-79db', 'visibility', 'none');
    map.setLayoutProperty('noise80db', 'visibility', 'none');
    map.setLayoutProperty('background', 'visibility', 'none');
    map.setLayoutProperty('routing_data_civity', 'visibility', 'visible');

    map.setLayoutProperty('child_playground_1', 'visibility', 'visible');
    map.setLayoutProperty('senior', 'visibility', 'visible');
    map.setLayoutProperty('hospital_1', 'visibility', 'visible');
    map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'visible');
    map.setLayoutProperty('child_school', 'visibility', 'visible');
    map.setLayoutProperty('university', 'visibility', 'visible');
    map.setLayoutProperty('doctor', 'visibility', 'visible');

    map.setLayoutProperty('senior copy', 'visibility', 'visible');
    map.setLayoutProperty('university copy', 'visibility', 'visible');
    map.setLayoutProperty('doctor copy', 'visibility', 'visible');

    map.setLayoutProperty('first-route', 'visibility', 'none');
    map.setLayoutProperty('forth-route', 'visibility', 'none');
    map.setLayoutProperty('symbol_hospital', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_kindergarten_preschool', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_playground_1', 'visibility', 'none');
    map.setLayoutProperty('child_school copy', 'visibility', 'visible');
 
    flyTo({ center: [13.37528, 52.47764], zoom: 13 });
 };

 const setMapStepCaseOne = () => {
    map.setLayoutProperty('noise40-59db', 'visibility', 'none');
    map.setLayoutProperty('noise60-79db', 'visibility', 'none');
    map.setLayoutProperty('noise80db', 'visibility', 'none');
    map.setLayoutProperty('background', 'visibility', 'none');
    map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
    
    map.setLayoutProperty('first-route', 'visibility', 'visible');

    map.setLayoutProperty('first-route', 'visibility', 'visible');
    map.setLayoutProperty('forth-route', 'visibility', 'none');

    map.setLayoutProperty('symbol_hospital', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_kindergarten_preschool', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_playground_1', 'visibility', 'none');
    map.setLayoutProperty('building', 'visibility', 'none');

    map.setLayoutProperty('senior', 'visibility', 'visible');
    map.setLayoutProperty('hospital_1', 'visibility', 'visible');
    map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'visible');
    map.setLayoutProperty('child_school', 'visibility', 'visible');
    map.setLayoutProperty('university', 'visibility', 'visible');
    map.setLayoutProperty('doctor', 'visibility', 'visible');
    map.setLayoutProperty('child_playground_1', 'visibility', 'visible');
    map.setLayoutProperty('child_school copy', 'visibility', 'visible');

    map.setLayoutProperty('senior copy', 'visibility', 'visible');
    map.setLayoutProperty('university copy', 'visibility', 'visible');
    map.setLayoutProperty('doctor copy', 'visibility', 'visible');
    

    13.41525, 52.47525
 
    // flyTo({ center: [13.39370, 52.47514], zoom: 13.7 });
    // flyTo({ center: [13.41252, 52.47454], zoom: 14 });
    flyTo({ center: [13.41525, 52.47525], zoom: 13.35 });
 };

 const setMapStepCaseTwo = () => {
    map.setLayoutProperty('noise40-59db', 'visibility', 'none');
    map.setLayoutProperty('noise60-79db', 'visibility', 'none');
    map.setLayoutProperty('noise80db', 'visibility', 'none');

    map.setLayoutProperty('background', 'visibility', 'none');

    map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
    map.setLayoutProperty('building', 'visibility', 'none');

    

    map.setLayoutProperty('first-route', 'visibility', 'visible');
    map.setLayoutProperty('forth-route', 'visibility', 'visible');

    map.setLayoutProperty('symbol_hospital', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_kindergarten_preschool', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_playground_1', 'visibility', 'none');

    map.setLayoutProperty('senior', 'visibility', 'visible');
    map.setLayoutProperty('hospital_1', 'visibility', 'visible');
    map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'visible');
    map.setLayoutProperty('child_school', 'visibility', 'visible');
    map.setLayoutProperty('university', 'visibility', 'visible');
    map.setLayoutProperty('doctor', 'visibility', 'visible');
    map.setLayoutProperty('child_playground_1', 'visibility', 'visible');
    map.setLayoutProperty('child_school copy', 'visibility', 'visible');

    map.setLayoutProperty('senior copy', 'visibility', 'visible');
    map.setLayoutProperty('university copy', 'visibility', 'visible');
    map.setLayoutProperty('doctor copy', 'visibility', 'visible');
    
 
    // flyTo({ center: [13.39370, 52.47514], zoom: 13.7 });
    flyTo({ center: [13.41525, 52.47525], zoom: 13.35 });
 };
 
 const setMapStepCaseThree = () => {
    map.setLayoutProperty('noise40-59db', 'visibility', 'none');
    map.setLayoutProperty('noise60-79db', 'visibility', 'none');
    map.setLayoutProperty('noise80db', 'visibility', 'none');

    map.setLayoutProperty('background', 'visibility', 'none');

    map.setLayoutProperty('routing_data_civity', 'visibility', 'none');
    map.setLayoutProperty('building', 'visibility', 'none');

    

    map.setLayoutProperty('first-route', 'visibility', 'visible');
    map.setLayoutProperty('forth-route', 'visibility', 'visible');

    map.setLayoutProperty('symbol_hospital', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_kindergarten_preschool', 'visibility', 'none');
    map.setLayoutProperty('symbol_child_playground_1', 'visibility', 'none');

    map.setLayoutProperty('senior', 'visibility', 'visible');
    map.setLayoutProperty('hospital_1', 'visibility', 'visible');
    map.setLayoutProperty('child_kindergarten_preschool_1', 'visibility', 'visible');
    map.setLayoutProperty('child_school', 'visibility', 'visible');
    map.setLayoutProperty('university', 'visibility', 'visible');
    map.setLayoutProperty('doctor', 'visibility', 'visible');
    map.setLayoutProperty('child_playground_1', 'visibility', 'visible');
    map.setLayoutProperty('child_school copy', 'visibility', 'visible');

    map.setLayoutProperty('senior copy', 'visibility', 'visible');
    map.setLayoutProperty('university copy', 'visibility', 'visible');
    map.setLayoutProperty('doctor copy', 'visibility', 'visible');
    
 
    // flyTo({ center: [13.39370, 52.47514], zoom: 13.7 });
    flyTo({ center: [13.41525, 52.47525], zoom: 13.35 });
 };
 
